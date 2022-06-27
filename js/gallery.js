
let gallery = [
    {
       file: "red.jpg",
       w: "300",
       title: "Красный костел",
       link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
       description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы." 
    },
    {
        file: "troi.jpg",
        w: "300",
        title: "Троицкое предместье",
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь." 
     },
     {
        file: "mir.jpg",
        w: "300",
        title: "Мирский замок",
        link: "https://mirzamak.by/",
        description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси" 
     },
]

let s = "";

for (i=0; i<gallery.length; i++) {

    s += `<div><img onclick="showPic('${gallery[i].file}','${gallery[i].description}')" src="images/${gallery[i].file}" alt="" style="width: ${gallery[i].w}px"><p><a href="${gallery[i].link}">${gallery[i].title}</a></p></div>`;

}

picturesHere.innerHTML = s;

function showPic(pic, descr) {
    bigPicture.innerHTML = `<img src="images/${pic}" alt="" style="width: 1000px" onclick="bigPicture.innerHTML=''">
    <p>${descr}</p>`;
}

f = document.getElementById("picturesHere");

p1 = f.getElementsByTagName('p');
a1 = f.getElementsByTagName('a');

for (j=0; j<p1.length; j++) {
    p1[j].style = `font-size: 18pt;
    text-align: center`;
    a1[j].style = `text-decoration: none; color: blue`;
}