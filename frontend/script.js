function searchSchemes() {

    let searchText =
        document.getElementById("searchBox").value.toLowerCase();

    let cards =
        document.querySelectorAll(".scheme-card");

    cards.forEach(function(card) {

        let text = card.innerText.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


function showDetails(name) {

    let result =
        document.getElementById("result");

    result.innerHTML = `
        <h2>${name}</h2>

        <p>
            Aapne ${name} select kiya hai.
        </p>

        <p>
            Is scheme ki aur information
            yahan baad mein aayegi.
        </p>

        <button onclick="closeDetails()">
            Close
        </button>
    `;
}


function closeDetails() {

    document.getElementById("result").innerHTML = "";

}