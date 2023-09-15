function tarkistaLomake() {
    var kayttajaId = document.getElementById("kayttajaId").value;
    var salasana = document.getElementById("salasana").value;
    var nimi = document.getElementById("nimi").value;
    var postinumero = document.getElementById("postinumero").value;
    var sahkoposti = document.getElementById("sahkoposti").value;

    var kayttajaIdError = document.getElementById("kayttajaIdError");
    var salasanaError = document.getElementById("salasanaError");
    var nimiError = document.getElementById("nimiError");
    var postinumeroError = document.getElementById("postinumeroError");
    var sahkopostiError = document.getElementById("sahkopostiError");

    kayttajaIdError.textContent = "";
    salasanaError.textContent = "";
    nimiError.textContent = "";
    postinumeroError.textContent = "";
    sahkopostiError.textContent = "";

    var valid = true;

    // Kaikki kentät paitsi Lisätietoja ovat pakollisia
    if (kayttajaId.trim() === "") {
        kayttajaIdError.textContent = "Käyttäjä ID on pakollinen.";
        valid = false;
    } else if (kayttajaId.length < 6) {
        kayttajaIdError.textContent = "Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä.";
        valid = false;
    }

    if (salasana.trim() === "") {
        salasanaError.textContent = "Salasana on pakollinen.";
        valid = false;
    }

    if (nimi.trim() === "") {
        nimiError.textContent = "Nimi on pakollinen.";
        valid = false;
    }

    if (postinumero.trim() === "" || !/^\d{5}$/.test(postinumero)) {
        postinumeroError.textContent = "Postinumerossa pitää olla 5 numeroa.";
        valid = false;
    }

    if (sahkoposti.trim() === "" || !isValidEmail(sahkoposti)) {
        sahkopostiError.textContent = "Sähköpostiosoitteen tulee olla sähköpostiosoitteen muotoinen.";
        valid = false;
    }

    return valid;
}

function isValidEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}