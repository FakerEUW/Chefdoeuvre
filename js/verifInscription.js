function surligne(champ, erreur) {
    if (erreur)
        champ.style.backgroundColor = "#fba";
    else
        champ.style.backgroundColor = "";
}

// verification du pseudo 

function verifPseudo(champ) {
    if (champ.value.length < 2 || champ.value.length > 25) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

// verification de l'e-mail

function verifMail(champ) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

// verification du mot de passe 

function verifMdp(champ) {
    if (champ.value.length < 2 || champ.value.length > 20) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

// verification du formulaire

function verifForm(f) {
    var pseudoOk = verifPseudo(f.pseudonyme);
    var mailOk = verifMail(f.eMail);
    var mdpOk = verifMdp(f.mdp);

    if (pseudoOk && mailOk && mdpOk)
        return true;
    else {
        alert("Veuillez remplir correctement tous les champs");
        return false;
    }
}