var signIn = document.querySelector('.formInscription');
var c = 0;
console.log(signIn);
function sign() {
    if (c = 0) {
        signIn.classList.toggle('openForm');
        c = 1;
    }
    else if (c = 1) {
        signIn.classList.remove('openForm');
        c = 0;
    }
}