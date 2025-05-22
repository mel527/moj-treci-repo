const source = document.getElementById("entry").innerHTML;
console.log(source);
const template = Handlebars.compile(source); //funkcija Handlebars koja ima u sebi dinamiski template koja ceka punjenje podacima
const data = {
    title: "Vjezba",
    body: "Vjezba",
    caption: "Vjezba",
};

const  html = template(data);
console.log(html);
document.getElementById("result").innerHTML = html; //divu su predani podaci