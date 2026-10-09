const scheme = [

    // =========================
    // EDUCATION
    // =========================

    {
        id: 1,
        name: "National Scholarship Portal",
        category: "Education",
        description: "A national digital platform for discovering and applying for eligible government scholarships.",
        eligibility: "Eligibility depends on the individual scholarship scheme.",
        benefits: "Students can discover scholarship opportunities and submit applications through the portal.",
        documents: ["Identity proof", "Academic documents", "Bank details"],
        application: "Check the currently available scholarships and eligibility conditions on the official platform.",
        officialUrl: "https://scholarships.gov.in/"
    },

    {
        id: 2,
        name: "PM POSHAN",
        category: "Education",
        description: "Government school nutrition programme providing meals to eligible school children.",
        eligibility: "Applicable to students covered by participating government and government-aided schools.",
        benefits: "Nutritional support through the school meal programme.",
        documents: ["School records where applicable"],
        application: "The programme is implemented through participating schools and government education authorities.",
        officialUrl: "https://education.maharashtra.gov.in"
    },

    {
        id: 3,
        name: "Post Matric Scholarship",
        category: "Education",
        description: "Scholarship assistance for eligible students pursuing education after secondary schooling.",
        eligibility: "Criteria vary according to the applicable scholarship and student category.",
        benefits: "Financial assistance for eligible educational expenses.",
        documents: ["Identity proof", "Academic documents", "Income certificate where applicable"],
        application: "Search the relevant scholarship through the National Scholarship Portal or myScheme.",
        officialUrl: "https://www.myscheme.gov.in/"
    },

    {
        id: 4,
        name: "Pre Matric Scholarship",
        category: "Education",
        description: "Scholarship support for eligible school students under applicable government programmes.",
        eligibility: "Eligibility varies according to the specific scholarship.",
        benefits: "Financial assistance intended to support continued education.",
        documents: ["Student identity proof", "School documents", "Income certificate where applicable"],
        application: "Check currently available scheme through the National Scholarship Portal or myScheme.",
        officialUrl: "https://www.myscheme.gov.in/"
    },


    // =========================
    // HEALTHCARE
    // =========================

    {
        id: 5,
        name: "Ayushman Bharat - PM-JAY",
        category: "Healthcare",
        description: "A Government of India health assurance programme for eligible beneficiaries.",
        eligibility: "Eligibility depends on the applicable beneficiary database and current programme rules.",
        benefits: "Health coverage for eligible beneficiaries under specified healthcare services.",
        documents: ["Identity proof", "Beneficiary identification documents"],
        application: "Check eligibility and available services through the official PM-JAY platform.",
        officialUrl: "https://pmjay.gov.in/"
    },

    {
        id: 6,
        name: "Pradhan Mantri Bhartiya Janaushadhi Pariyojana",
        category: "Healthcare",
        description: "An initiative supporting access to quality generic medicines at affordable prices.",
        eligibility: "Medicines are available to the public through participating Janaushadhi Kendras.",
        benefits: "Access to generic medicines through participating centres.",
        documents: ["Prescription where required"],
        application: "Visit a participating Janaushadhi Kendra.",
        officialUrl: "https://janaushadhi.gov.in/"
    },

    {
        id: 7,
        name: "National Health Mission",
        category: "Healthcare",
        description: "A major government health programme supporting accessible public healthcare services.",
        eligibility: "Eligibility and services vary according to the specific programme.",
        benefits: "Access to various public health services and programmes.",
        documents: ["Documents vary according to service"],
        application: "Contact the relevant government health facility or authority.",
        officialUrl: "https://nhm.gov.in/"
    },


    // =========================
    // FARMERS
    // =========================

    {
        id: 8,
        name: "PM-KISAN",
        category: "Farmers",
        description: "A central sector scheme providing financial assistance to eligible landholding farmer families.",
        eligibility: "Eligible farmer families according to the current PM-KISAN guidelines.",
        benefits: "Financial assistance is transferred through Direct Benefit Transfer to eligible beneficiaries.",
        documents: ["Aadhaar", "Land records", "Bank account details"],
        application: "Use the official PM-KISAN portal to register, check status and complete applicable requirements.",
        officialUrl: "https://pmkisan.gov.in/"
    },

    {
        id: 9,
        name: "Pradhan Mantri Fasal Bima Yojana",
        category: "Farmers",
        description: "A crop insurance programme providing insurance protection for covered crop losses.",
        eligibility: "Farmers cultivating notified crops in notified areas, subject to scheme conditions.",
        benefits: "Insurance protection against covered crop losses.",
        documents: ["Identity proof", "Land records", "Bank details", "Crop details"],
        application: "Farmers can use the official PMFBY portal for applicable crop insurance services.",
        officialUrl: "https://pmfby.gov.in/"
    },

    {
        id: 10,
        name: "Kisan Credit Card",
        category: "Farmers",
        description: "A credit facility supporting farmers' agricultural and related financial requirements.",
        eligibility: "Eligible farmers subject to participating financial institution requirements.",
        benefits: "Access to institutional agricultural credit according to applicable terms.",
        documents: ["Identity proof", "Land documents", "Bank documents"],
        application: "Approach a participating bank or financial institution.",
        officialUrl: "https://www.myscheme.gov.in/"
    },

    {
        id: 11,
        name: "Soil Health Card Scheme",
        category: "Farmers",
        description: "Provides farmers with information about soil health and nutrient requirements.",
        eligibility: "Farmers can access applicable soil testing and soil health services.",
        benefits: "Information about soil condition and nutrient requirements.",
        documents: ["Farmer details", "Land details where required"],
        application: "Check the applicable service through agriculture authorities or myScheme.",
        officialUrl: "https://www.myscheme.gov.in/"
    },


    // =========================
    // WOMEN & CHILD
    // =========================

    {
        id: 12,
        name: "Mission Shakti",
        category: "Women & Child",
        description: "A Government of India programme focused on women's safety, security and empowerment.",
        eligibility: "Services and eligibility vary according to the specific Mission Shakti component.",
        benefits: "Provides access to various safety, support and empowerment services for women.",
        documents: ["Documents vary according to service"],
        application: "Use the official Women and Child Development information channels.",
        officialUrl: "https://www.spniwcd.wcd.gov.in/mission-shakti"
    },

    {
        id: 13,
        name: "Beti Bachao Beti Padhao",
        category: "Women & Child",
        description: "A government initiative promoting the welfare, education and empowerment of the girl child.",
        eligibility: "The initiative focuses on communities and families concerned with the welfare of girls.",
        benefits: "Promotes awareness, education and empowerment of girls.",
        documents: ["Documents vary according to service"],
        application: "Check applicable services and information through government channels.",
        officialUrl: "https://www.myscheme.gov.in/"
    },

    {
        id: 14,
        name: "Pradhan Mantri Matru Vandana Yojana",
        category: "Women & Child",
        description: "A maternity benefit programme providing support to eligible pregnant and lactating women.",
        eligibility: "Eligible women according to the current scheme guidelines.",
        benefits: "Maternity-related financial assistance subject to applicable conditions.",
        documents: ["Identity proof", "Bank details", "Pregnancy-related documents where applicable"],
        application: "Check the current PMMVY information and application process through government channels.",
        officialUrl: "https://www.myscheme.gov.in/"
    },

    {
        id: 15,
        name: "Sukanya Samriddhi Account",
        category: "Women & Child",
        description: "A government-backed savings scheme designed for the benefit of a girl child.",
        eligibility: "Accounts may be opened for eligible girl children according to applicable rules.",
        benefits: "Long-term savings facility for the girl child's future.",
        documents: ["Girl child's birth certificate", "Guardian identity proof"],
        application: "Check applicable account-opening rules with participating banks or post offices.",
        officialUrl: "https://www.indiapost.gov.in/"
    },


    // =========================
    // EMPLOYMENT
    // =========================

    {
        id: 16,
        name: "PM SVANidhi",
        category: "Employment",
        description: "A scheme supporting eligible street vendors with access to working-capital credit.",
        eligibility: "Eligible street vendors according to the scheme guidelines.",
        benefits: "Access to working-capital support and applicable incentives.",
        documents: ["Identity proof", "Vendor-related documents", "Bank details"],
        application: "Eligible vendors can use participating financial institutions and the official PM SVANidhi platform.",
        officialUrl: "https://pmsvanidhi.mohua.gov.in/"
    },

    {
        id: 17,
        name: "Pradhan Mantri Kaushal Vikas Yojana",
        category: "Employment",
        description: "A skill development programme supporting training and certification opportunities.",
        eligibility: "Eligibility depends on the applicable training programme and current guidelines.",
        benefits: "Skill training and certification opportunities.",
        documents: ["Identity proof", "Educational documents where required"],
        application: "Check available training opportunities through official skill development channels.",
        officialUrl: "https://www.pmkvyofficial.org/"
    },

    {
        id: 18,
        name: "National Career Service",
        category: "Employment",
        description: "A government employment and career services platform connecting job seekers, employers and career resources.",
        eligibility: "Job seekers, employers and other eligible users can register for applicable services.",
        benefits: "Job search, career guidance, job fairs and related employment services.",
        documents: ["Identity and employment information where applicable"],
        application: "Register and use services through the official National Career Service portal.",
        officialUrl: "https://www.ncs.gov.in/"
    },

    {
        id: 19,
        name: "Startup India",
        category: "Employment",
        description: "A Government of India initiative supporting entrepreneurship and the startup ecosystem.",
        eligibility: "Specific benefits depend on applicable startup recognition criteria.",
        benefits: "Access to startup information, recognition and eligible government support.",
        documents: ["Business documents", "Identity documents"],
        application: "Use the official Startup India portal for startup-related services.",
        officialUrl: "https://www.startupindia.gov.in/"
    },


    // =========================
    // FINANCIAL ASSISTANCE
    // =========================

    {
        id: 20,
        name: "Pradhan Mantri Jan Dhan Yojana",
        category: "Financial Assistance",
        description: "A financial inclusion programme providing access to basic banking services.",
        eligibility: "Individuals seeking access to basic banking services, subject to applicable requirements.",
        benefits: "Access to basic banking facilities and financial inclusion services.",
        documents: ["Identity proof", "Address proof where required"],
        application: "Visit a participating bank branch or banking service point.",
        officialUrl: "https://pmjdy.gov.in/"
    },

    {
        id: 21,
        name: "Pradhan Mantri Mudra Yojana",
        category: "Financial Assistance",
        description: "A programme supporting eligible micro and small businesses through institutional credit.",
        eligibility: "Eligible micro and small enterprises subject to applicable lending criteria.",
        benefits: "Access to business credit through participating financial institutions.",
        documents: ["Identity proof", "Business documents", "Bank documents"],
        application: "Approach a participating bank or financial institution.",
        officialUrl: "https://www.mudra.org.in/"
    },

    {
        id: 22,
        name: "Atal Pension Yojana",
        category: "Financial Assistance",
        description: "A government-backed pension scheme designed to encourage long-term retirement savings.",
        eligibility: "Indian citizens with applicable savings accounts and meeting the current age and scheme conditions.",
        benefits: "Pension benefits according to the selected contribution and applicable rules.",
        documents: ["Identity proof", "Bank account details"],
        application: "Approach a participating bank or post office.",
        officialUrl: "https://pfrda.org.in/web/pfrda/scheme/atal-pension-yojana-apy"
    },

    {
        id: 23,
        name: "Pradhan Mantri Jeevan Jyoti Bima Yojana",
        category: "Financial Assistance",
        description: "A government-backed life insurance scheme available through participating financial institutions.",
        eligibility: "Eligibility is subject to the current scheme rules.",
        benefits: "Life insurance protection subject to scheme conditions.",
        documents: ["Identity proof", "Bank account details"],
        application: "Contact a participating bank or financial institution.",
        officialUrl: "https://jansuraksha.gov.in/"
    },

    {
        id: 24,
        name: "Pradhan Mantri Suraksha Bima Yojana",
        category: "Financial Assistance",
        description: "An affordable personal accident insurance scheme available through participating banks.",
        eligibility: "Eligibility is subject to the current scheme rules.",
        benefits: "Accident insurance protection subject to scheme conditions.",
        documents: ["Identity proof", "Bank account details"],
        application: "Contact a participating bank offering the scheme.",
        officialUrl: "https://jansuraksha.gov.in/"
    },


    // =========================
    // SENIOR CITIZENS
    // =========================

    {
        id: 25,
        name: "National Social Assistance Programme",
        category: "Senior Citizens",
        description: "A social assistance programme providing support to eligible vulnerable citizens.",
        eligibility: "Eligibility varies according to the specific assistance programme.",
        benefits: "Social assistance for eligible beneficiaries.",
        documents: ["Identity proof", "Age/income documents where applicable"],
        application: "Check the applicable programme and application process through myScheme or the relevant local authority.",
        officialUrl: "https://www.myscheme.gov.in/"
    },


    // =========================
    // HOUSING
    // =========================

    {
        id: 26,
        name: "Pradhan Mantri Awas Yojana - Urban",
        category: "Housing",
        description: "A government housing programme supporting eligible urban households under applicable components.",
        eligibility: "Eligibility depends on the applicable PMAY-U component and current guidelines.",
        benefits: "Housing-related assistance for eligible beneficiaries.",
        documents: ["Identity proof", "Address proof", "Income-related documents"],
        application: "Check the official PMAY-U portal for current information and services.",
        officialUrl: "https://pmay-urban.gov.in/"
    },

    {
        id: 27,
        name: "Pradhan Mantri Awas Yojana - Gramin",
        category: "Housing",
        description: "A rural housing programme supporting eligible households under applicable government guidelines.",
        eligibility: "Eligibility is determined through the applicable beneficiary selection and programme criteria.",
        benefits: "Housing assistance for eligible rural households.",
        documents: ["Identity documents", "Household details", "Other documents as required"],
        application: "Check current information through myScheme or the relevant rural development authority.",
        officialUrl: "https://www.myscheme.gov.in/"
    }

];

module.exports = scheme;