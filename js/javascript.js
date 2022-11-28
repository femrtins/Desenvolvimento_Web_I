// Botao Scroll-up

    var btn = document.querySelector("#scroll-up");
    btn.addEventListener("click", function() {
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
                    element("search-results").innerHTML += "<div class='search-item' onclick='displayData(\"" + x +"\")'><p>" +x +"</p></div>";
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
        if (document.title == "Susuwatari"){
            window.open("../root/html/"+names[name], "mozillaTab");
        }
        else{
            window.open("../html/"+names[name], "mozillaTab");
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

    element("search").addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
            event.preventDefault();
            displayAllData(allSearchData);
        }
    });

// Botão para desfocar

function desfocus() {
    document.getElementById("search").value = "";
}

// Alto contraste

const tmp = document.getElementById("alto-contraste");
const lnk = document.querySelector("link[href='../filmes.css']");
const stlcss = new URL("css/filmes.css", window.location)

function aa() {
    if (lnk.href == stlcss.href){
        lnk.href = "css/c.css"; 
    } 
    else {
        lnk.href = "css/filmes.css";
    }
}




