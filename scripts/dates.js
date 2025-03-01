const qdata = [
    {
        question: "En quelle année Alfred Wegener a-t-il proposé la théorie de la dérive des continents ?",
        options: ["1912", "1898", "1935", "1950"],
        reponse: "1912",
        detaille: "Alfred Wegener a proposé sa théorie en 1912, suggérant que les continents dérivent lentement sur le manteau terrestre."
    },
    {
        question: "Quelle année marque la découverte de la tectonique des plaques par John Tuzo Wilson ?",
        options: ["1955", "1975", "1965", "1985"],
        reponse: "1965",
        detaille: "John Tuzo Wilson a proposé la théorie de la tectonique des plaques en 1965, expliquant la dynamique des plaques lithosphériques."
    },
    {
        question: "En quelle année a eu lieu la grande éruption du Krakatoa, qui a eu un impact climatique mondial ?",
        options: ["1900", "1883", "1850", "1910"],
        reponse: "1883",
        detaille: "L'éruption du Krakatoa en 1883 a eu un impact mondial, affectant le climat et provoquant des tsunamis dévastateurs."
    },
    {
        question: "Quand s'est produite l'éruption du mont Saint Helens aux États-Unis ?",
        options: ["1995", "1970", "2000", "1980"],
        reponse: "1980",
        detaille: "L'éruption du mont Saint Helens, le 18 mai 1980, a été l'une des plus destructrices des États-Unis."
    },
    {
        question: "En quelle année Charles Darwin a-t-il publié L’Origine des espèces, révolutionnant notre compréhension de la vie sur Terre ?",
        options: ["1865", "1859", "1872", "1900"],
        reponse: "1859",
        detaille: "La publication de 'L’Origine des espèces' en 1859 a marqué un tournant dans la compréhension de l’évolution biologique."
    },
    {
        question: "Quelle année marque la signature du protocole de Kyoto visant à réduire les émissions de gaz à effet de serre ?",
        options: ["2000", "1995", "1997", "2005"],
        reponse: "1997",
        detaille: "Le protocole de Kyoto a été signé en 1997, engageant les pays à réduire leurs émissions de gaz à effet de serre."
    },
    {
        question: "En quelle année a eu lieu la première Journée de la Terre ?",
        options: ["1970", "1965", "1980", "1990"],
        reponse: "1970",
        detaille: "La première Journée de la Terre a eu lieu en 1970 pour sensibiliser le public aux enjeux environnementaux."
    },
    {
        question: "Quand a été signé l’Accord de Paris sur le climat ?",
        options: ["2015", "2000", "2010", "2020"],
        reponse: "2015",
        detaille: "L'Accord de Paris sur le climat, signé en 2015, a visé à limiter le réchauffement climatique en dessous de 2°C."
    },
    {
        question: "En quelle année le trou dans la couche d’ozone a-t-il été découvert ?",
        options: ["1980", "1990", "1970", "1974"],
        reponse: "1974",
        detaille: "Le trou dans la couche d'ozone a été découvert en 1974, entraînant une prise de conscience mondiale de la dégradation de l'ozone."
    },
    {
        question: "Quand a eu lieu la grande tempête qui a frappé l'Europe, causant de nombreux dégâts en France ?",
        options: ["1987", "1995", "2000", "1990"],
        reponse: "1987",
        detaille: "La grande tempête de 1987 a frappé l'Europe, causant de graves dégâts en France, notamment des chutes d'arbres et des perturbations."
    },
    {
        question: "En quelle année a eu lieu le séisme et le tsunami de Lisbonne, l’un des plus destructeurs de l’histoire ?",
        options: ["1850", "1900", "1755", "1650"],
        reponse: "1755",
        detaille: "Le séisme et le tsunami de Lisbonne de 1755 ont causé des milliers de morts et ont eu un impact profond sur la pensée européenne."
    },
    {
        question: "Quand s’est produit le séisme de San Francisco, qui a détruit une grande partie de la ville ?",
        options: ["1910", "1906", "1880", "1930"],
        reponse: "1906",
        detaille: "Le séisme de San Francisco en 1906 a détruit une grande partie de la ville et a provoqué de nombreuses victimes."
    },
    {
        question: "Quelle année marque le tsunami dévastateur en Indonésie, provoqué par un séisme sous-marin ?",
        options: ["2004", "1999", "2010", "1985"],
        reponse: "2004",
        detaille: "Le tsunami du 26 décembre 2004 a dévasté les côtes de l'Indonésie, causant plus de 230 000 morts dans plusieurs pays."
    },
    {
        question: "En quelle année s’est produit le grand tremblement de terre du Japon qui a causé la catastrophe nucléaire de Fukushima ?",
        options: ["2000", "1995", "2015", "2011"],
        reponse: "2011",
        detaille: "Le tremblement de terre du 11 mars 2011 au Japon a provoqué un tsunami et une catastrophe nucléaire à Fukushima."
    },
    {
        question: "Quand a eu lieu le séisme le plus puissant jamais enregistré sur Terre, au Chili ?",
        options: ["1950", "1960", "1990", "2000"],
        reponse: "1960",
        detaille: "Le séisme du 22 mai 1960 au Chili est le plus puissant jamais enregistré, atteignant une magnitude de 9,5."
    },
    {
        question: "En quelle année l’astéroïde qui a causé l’extinction des dinosaures a-t-il frappé la Terre (approximativement) ?",
        options: ["66 millions d'années", "100 millions d'années", "50 millions d'années", "1 million d'années"],
        reponse: "66 millions d'années",
        detaille: "L'impact de l'astéroïde qui a causé l'extinction des dinosaures s'est produit il y a environ 66 millions d'années."
    },
    {
        question: "Quelle année marque l’explosion de la météorite de la Toungouska en Sibérie ?",
        options: ["1800", "1908", "2000", "1950"],
        reponse: "1908",
        detaille: "L'explosion de la météorite de la Toungouska en 1908 a détruit 2 000 km² de forêt en Sibérie."
    },
    {
        question: "En quelle année a eu lieu l’impact de la météorite de Tcheliabinsk en Russie ?",
        options: ["2005", "1995", "2020", "2013"],
        reponse: "2013",
        detaille: "La météorite de Tcheliabinsk a frappé la Russie en 2013, causant des dommages importants et des milliers de blessés."
    },
    {
        question: "En quelle année a eu lieu la pire éruption solaire enregistrée, qui aurait pu perturber les réseaux électriques mondiaux si elle s'était produite aujourd’hui ?",
        options: ["1859", "1950", "2000", "1970"],
        reponse: "1859",
        detaille: "L'éruption solaire de 1859, appelée événement de Carrington, est la plus puissante jamais enregistrée."
    },
    {
        question: "Quand a eu lieu l’ouragan Katrina, l’un des plus destructeurs de l’histoire des États-Unis ?",
        options: ["2000", "1995", "2005", "2010"],
        reponse: "2005",
        detaille: "L'ouragan Katrina, en août 2005, a causé des dégâts considérables, en particulier à La Nouvelle-Orléans."
    },
    {
        question: "En quelle année Christophe Colomb a-t-il atteint les Amériques, modifiant la vision européenne du monde ?",
        options: ["1500", "1492", "1600", "1450"],
        reponse: "1492",
        detaille: "Christophe Colomb a atteint les Amériques en 1492, modifiant pour toujours la perception géographique du monde."
    },
    {
        question: "Quelle année marque le premier tour du monde réussi par l’expédition de Magellan ?",
        options: ["1515", "1600", "1500", "1522"],
        reponse: "1522",
        detaille: "L'expédition de Magellan a été la première à accomplir le tour du monde en 1522, bien que Magellan lui-même soit mort en route."
    },
    {
        question: "En quelle année l’Antarctique a-t-il été exploré pour la première fois ?",
        options: ["1900", "1820", "1850", "1700"],
        reponse: "1820",
        detaille: "L'Antarctique a été exploré pour la première fois en 1820 par une expédition dirigée par Fabian Gottlieb von Bellingshausen."
    },
    {
        question: "Quand Edmund Hillary et Tenzing Norgay ont-ils atteint le sommet de l’Everest, le plus haut point de la Terre ?",
        options: ["1953", "1945", "1960", "1970"],
        reponse: "1953",
        detaille: "Edmund Hillary et Tenzing Norgay ont atteint le sommet de l'Everest le 29 mai 1953, marquant une grande victoire pour l'humanité."
    },
    {
        question: "En quelle année la première photographie de la Terre vue depuis l’espace a-t-elle été prise par Apollo 8 ?",
        options: ["1970", "1959", "1980", "1968",],
        reponse: "1968",
        detaille: "La première photographie de la Terre vue depuis l’espace a été prise par Apollo 8 en 1968, montrant la Terre dans toute sa beauté."
    }
];

let score = 0
let num = 1
let i = 0
function afficherq() {
    document.getElementById("reponse").innerText = ""
    document.getElementById("histoire").innerText = ""
    if (i < qdata.length) {
        let currentq = document.getElementById("question")
        currentq.innerText = qdata[i].question
        document.getElementById("number").innerText = "Question: " + num + "/25"

        let many = document.getElementById("select")
        many.innerHTML = "";

        for (let date of qdata[i].options) {
            let button = document.createElement("button")
            button.innerText = date
            many.appendChild(button)
            many.style.display = "inline-block"
            button.addEventListener("click", function () {
                verifier(button)
                many.style.display = "none"

            })

        }

    }
    else {
        document.getElementById("question").innerText = "Quiz terminé !";
        document.getElementById("select").innerHTML = "";
        document.getElementById("number").innerText = "";
        document.getElementById("histoire").innerText = "Votre score final est " + score + "/25 ! Merci de votre participation !";
        document.getElementById("next").style.display = "none";
        document.getElementById("start").innerText = "Recommencez le quiz";
        document.getElementById("start").addEventListener("click", function () {
            document.getElementById("start").innerText = "Commencez le quiz"
            i = 0
            num = 1
            score = 0
            document.getElementById("next").style.display = "inline-block"
            afficherq()

        })

    }
}


function verifier(button) {
    let tov = document.getElementById("reponse")
    if (button.innerText === qdata[i].reponse) {
        score++
        tov.style.color = "green"
        tov.innerText = "Bonne réponse !"

    }
    else {
        tov.style.color = "red"
        tov.innerText = "Mauvaise réponse!"

    }
    document.getElementById("histoire").innerText = qdata[i].detaille
    document.getElementById("score").innerText = "Score: " + score + "/25"
    num++
    i++
}


document.getElementById("start").addEventListener("click", afficherq)
document.getElementById("next").addEventListener("click", afficherq)
