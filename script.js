const source = document.getElementById("entry").innerHTML;
console.log(source);
const template = Handlebars.compile(source); //funkcija Handlebars koja ima u sebi dinamiski template koja ceka punjenje podacima
const data = {
    title: "Biblioteke",
    body: "Ucimo danas malo lagani smo",
    caption: "Ima li tko jaci od nas",
};

const  html = template(data);
console.log(html);
document.getElementById("result").innerHTML = html; //divu su predani podaci