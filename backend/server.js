const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const scheme = require("./data/scheme");

const app = express();
const PORT = 5000;

// Simple project admin credentials. Change these before your final submission.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@jansahayak.local";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin@123";
let adminToken = null;

const DATA_DIR = path.join(__dirname, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const ACTIVITY_FILE = path.join(DATA_DIR, "activity.json");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, "[]");
if (!fs.existsSync(ACTIVITY_FILE)) fs.writeFileSync(ACTIVITY_FILE, "[]");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

function readJSON(file) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { return []; }
}
function writeJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}
function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return { salt, hash };
}
function verifyPassword(password, user) {
  const hash = crypto.scryptSync(password, user.salt, 64).toString("hex");
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(user.passwordHash, "hex"));
}
function logActivity(type, user) {
  const activities = readJSON(ACTIVITY_FILE);
  activities.push({
    type,
    user: user?.name || "Unknown",
    email: user?.email || "",
    time: new Date().toISOString()
  });
  writeJSON(ACTIVITY_FILE, activities.slice(-500));
}
function getUserFromToken(req) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return null;
  const users = readJSON(USERS_FILE);
  return users.find(u => u.token === token) || null;
}

// Auth
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name?.trim() || !email?.trim() || !password) {
    return res.status(400).json({ message: "Name, email and password are required." });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: "Password must be at least 6 characters." });
  }

  const users = readJSON(USERS_FILE);
  const normalizedEmail = email.trim().toLowerCase();

  if (users.some(u => u.email === normalizedEmail)) {
    return res.status(409).json({ message: "Email is already registered." });
  }

  const { salt, hash } = hashPassword(password);
  const user = {
    id: crypto.randomUUID(),
    name: name.trim(),
    email: normalizedEmail,
    salt,
    passwordHash: hash,
    token: null,
    createdAt: new Date().toISOString()
  };

  users.push(user);
  writeJSON(USERS_FILE, users);
  logActivity("REGISTER", user);

  res.json({ message: "Registration successful. Please login." });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const users = readJSON(USERS_FILE);
  const user = users.find(u => u.email === email?.trim().toLowerCase());

  if (!user || !verifyPassword(password || "", user)) {
    return res.status(401).json({ message: "Invalid email or password." });
  }

  user.token = crypto.randomBytes(32).toString("hex");
  writeJSON(USERS_FILE, users);
  logActivity("LOGIN", user);

  res.json({
    message: "Login successful.",
    token: user.token,
    user: { id: user.id, name: user.name, email: user.email }
  });
});

app.post("/api/logout", (req, res) => {
  const user = getUserFromToken(req);
  if (user) {
    logActivity("LOGOUT", user);
    const users = readJSON(USERS_FILE);
    const index = users.findIndex(u => u.id === user.id);
    if (index >= 0) {
      users[index].token = null;
      writeJSON(USERS_FILE, users);
    }
  }
  res.json({ message: "Logged out." });
});

app.get("/api/me", (req, res) => {
  const user = getUserFromToken(req);
  if (!user) return res.status(401).json({ message: "Not logged in." });
  res.json({ id: user.id, name: user.name, email: user.email });
});

function requireAdmin(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!adminToken || token !== adminToken) {
    return res.status(401).json({ message: "Admin access required." });
  }
  next();
}

app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  if (email?.trim().toLowerCase() !== ADMIN_EMAIL.toLowerCase() || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid admin email or password." });
  }
  adminToken = crypto.randomBytes(32).toString("hex");
  res.json({ message: "Admin login successful.", token: adminToken });
});

app.post("/api/admin/logout", requireAdmin, (req, res) => {
  adminToken = null;
  res.json({ message: "Admin logged out." });
});

app.get("/api/stats", requireAdmin, (req, res) => {
  const users = readJSON(USERS_FILE);
  const activities = readJSON(ACTIVITY_FILE);
  res.json({
    registeredUsers: users.length,
    totalLogins: activities.filter(a => a.type === "LOGIN").length,
    totalLogouts: activities.filter(a => a.type === "LOGOUT").length,
    totalRegistrations: activities.filter(a => a.type === "REGISTER").length,
    recentActivity: activities.slice(-20).reverse()
  });
});

// Existing scheme APIs
app.get("/api/scheme", (req, res) => {
  const { search, category } = req.query;
  let result = scheme;

  if (search) {
    const searchText = search.toLowerCase();
    result = result.filter(item =>
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText)
    );
  }

  if (category && category !== "All") {
    result = result.filter(item =>
      item.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(result);
});

app.get("/api/scheme/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundScheme = scheme.find(item => item.id === id);
  if (!foundScheme) return res.status(404).json({ message: "Scheme not found" });
  res.json(foundScheme);
});

app.listen(PORT, () => {
  console.log(`Jan Sahayak server running at http://localhost:${PORT}`);
});
