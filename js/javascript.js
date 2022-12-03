var names = {
    'A Viagem de Chihiro': 'a-viagem-de-chihiro.html',
    'Vidas ao Vento': 'vidas-ao-vento.html',
    'O Conto da Princesa Kaguya': 'o-conto-da-princesa-kaguya.html',
    'Da Colina Kokuriko': 'da-colina-kokuriko.html',
    'As Memórias de Marnie': 'as-memorias-de-marnie.html',
    'Meu Amigo Totoro': 'meu-amigo-totoro.html',
    'O Castelo Animado': 'o-castelo-animado.html',
    'O Mundo dos Pequeninos': 'o-mundo-dos-pequeninos.html',
    'Eu Posso Ouvir o Oceano': 'eu-posso-ouvir-o-oceano.html',
    'O Reino dos Gatos': 'o-reino-dos-gatos.html',
    'Contos de Terramar': 'contos-de-terramar.html',
    'Ponyo: Uma Amizade que Veio do Mar': 'ponyo.html',
    'O Castelo no Céu': 'o-castelo-no-ceu.html',
    'Sussurros do Coração': 'sussurros-do-coracao.html',
    'Princesa Mononoke': 'princesa-mononoke.html',
    'Pom Poko: A Grande Batalha dos Guaxinins': 'pompoko.html',
    'Porco Rosso: O Último Herói Romântico': 'porco-rosso.html',
    'Memórias de Ontem': 'memorias-de-ontem.html',
    'O Serviço de Entregas da Kiki': 'o-servico-de-entregas-da-kiki.html',
    'Nausicaä do Vale do Vento': 'nausicaa-do-vale-do-vento.html',
    'O Túmulo dos Vagalumes': 'o-tumulo-dos-vagalumes.html',
    'Meus vizinhos, Os Yamadas': 'meus-vizinhos.html',
    'Aya e a Bruxa': 'aya-e-a-bruxa.html'
};

// Botao Scroll-up

var tmp = document.querySelector("#scroll-up");
tmp.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

// Pesquisar

function element(id) {
    return document.getElementById(id);
}

let allSearchData = "";

function getResults() {

    let search = element("search").value;
    allSearchData = "";

    hideSearchResults();
    clearSearchResults();
    clearSearchData();

    if (search.length > 1) {
        let counter = 0;
        for (let x in names) {
            if (counter < 10) {
                if (x.toLowerCase().includes(search.toLowerCase())) {
                    element("search-results").innerHTML += "<div class='search-item' onekeydown onclick='displayData(\"" + x + "\")'><p>" + x + "</p></div>";
                    counter++;
                }
            }
            if (x.toLowerCase().includes(search.toLowerCase()))
                allSearchData += "<p>" + x + "</p>";
        }
        displaySearchResults();
    }
}

function displaySearchResults() {
    element("search-results").style.display = "block";
}

function clearSearchResults() {
    element("search-results").innerHTML = "";
}

function hideSearchResults() {
    element("search-results").style.display = "none";
}

function displayData(name) {
    if (document.title == "Susuwatari") {
        window.open("html/" + names[name], "_self");
    } else {
        window.open("../html/" + names[name], "_self");
    }
    hideSearchResults();
}

function displayAllData(names) {
    element("search-data").innerHTML = names;
    hideSearchResults();
}

function clearSearchData() {
    element("search-data").innerHTML = "";
}

element("search").oninput = function() {
    getResults();
};


// Botão para desfocar

function desfocus() {
    document.getElementById("search").value = "";
    document.getElementById("search").placeholder = "";
    $(document).mouseup(function(e) 
    {
        var container = $("#search-results");

        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            container.hide();
        }
    });
}

if (document.title == "Susuwatari") {
    document.querySelector('#carousel-1').addEventListener('click', () => {
        window.open("html/sobre.html", "_self")
    })

    document.querySelector('#carousel-2').addEventListener('click', () => {
        window.open("html/ponyo.html", "_self")
    })

    document.querySelector('#carousel-3').addEventListener('click', () => {
        window.open("html/o-servico-de-entregas-da-kiki.html", "_self");
    })
}