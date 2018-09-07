

var xhr = new XMLHttpRequest();
xhr.open("GET","chapitres.php");
xhr.responseType = "json";
xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        /* let content = this.response; */
        console.log(this.response);
        for (let content of this.response) {
    document.querySelector('body').insertAdjacentHTML('beforeend', `<h1 style="text-align:center;font-size:2em;background-color:black;color:white;">${content.titre}</h1><h2 style="text-align:center;color:white;background-color:black;width:50vw;margin-left:25vw;">${content.content}</h2><p style="text-align:center;font-size:1.5em;color:white;background-color:black;margin-botom:5vh;">${content.nom}</p>`)
}
    }
};
xhr.send();