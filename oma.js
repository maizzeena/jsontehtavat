fetch('https://run.mocky.io/v3/7e4e062d-58d5-47ab-b230-7a2f22304dd6')

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        kerro(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function kerro(data) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>" + data.otsikko + "</h1>";

    // tähän tulee muiden tietojen käsittely kohta
    teksti = teksti + "<p>" + data.kuvaus + "</p>";
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
    teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + " " +
        data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op" + "</h3>";

    teksti = teksti + "<ul>";
    for (var i = 0; i < data.opintojakso.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.opintojakso.sisalto[i] + "</li>";
    }
    teksti = teksti + "</ul>";

    teksti = teksti + "<h3>Linkit" + "</h3>";

    teksti = teksti + "<ul>";
    for (var i = 0; i < data.opintojakso.tekniikat.length; i++) {
        teksti = teksti + "<li>" + data.opintojakso.tekniikat[i].aihe + " "
            + "<a href=data.opintojakso.tekniikat[i].linkki>" + data.opintojakso.tekniikat[i].linkki + "</a></li>";
    }
    teksti = teksti + "</ul";


    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus").innerHTML = teksti;

}


fetch("https://run.mocky.io/v3/7fc719cf-3487-4d42-825a-b06eb2f591b6")

    // Muunnetaan vastaus JSON muotoon
    .then(function (response) {
        return response.json();
    })

    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    .then(function (responseJson) {
        nayta(responseJson);
    })

    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    })

function nayta(tieto) {
    var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

    // otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>Kurssin tiedot</h1>";
    teksti = teksti + "<h2>Opintojakso: " + tieto.toteutus + " " +
        tieto.tunnus + "</h2>";
    teksti = teksti + "<p><img src='kuva1.jpg' alt='kuva' ></p>";

    teksti = teksti + "<h3>Osallistujat (yhteensä 10)" + "</h3>";
    
    teksti = teksti + "<ul>";
    for (var i = 0; i < tieto.osallistujat.length; i++) {
        teksti = teksti + "<li>" + tieto.osallistujat[i] + "</li>";
    }
    teksti = teksti + "</ul>";

    teksti = teksti + "<p>Kurssi alkaa " + tieto.alku + " ja loppuu " +
        tieto.loppu + ". Kesto yhteensä " + tieto.kesto + ".</p>";

    // teksti-muuttujan sisällön tulostus
    document.getElementById("vastaus2").innerHTML = teksti;

}