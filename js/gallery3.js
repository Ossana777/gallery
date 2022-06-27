
let gallery = [
    {
       file: "red",
       w: "300",
       title: "Красный костел",
       link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
       description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы." ,
       
    },
    {
        file: "troi",
        w: "300",
        title: "Троицкое предместье",
        link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
        description: "Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь." 
     },
     {
        file: "mir",
        w: "300",
        title: "Мирский замок",
        link: "https://mirzamak.by/",
        description: "Построенный в начале XVI в. магнатом Ю. И. Ильиничем замок стал первым частнособственническим замком на землях Беларуси" 
     },
]

let s = "";
let n = 1; max = 3
let b = 1


for (i=0; i<gallery.length; i++) {
let imId = 1 + i
        s += `<div><img id="id${b}" onmouseover="func('id${b}','${gallery[i].file}')" onmouseout="clearTimeout(stop)" onclick="showPic('id${b++}','${gallery[i].description}')" src="images/${gallery[i].file}${n}.jpg" alt="" style="width: ${gallery[i].w}px"><p><a href="${gallery[i].link}">${gallery[i].title}</a></p></div>`;


}

picturesHere.innerHTML = s;
console.log(id1)
function func (m, pic) {
    if (n>max) n = 1;
    if (m === "id1") id1.src = `images/${pic}${n++}.jpg`;
    else if (m === "id2")  id2.src = `images/${pic}${n++}.jpg`;
    else if (m === "id3")  id3.src = `images/${pic}${n++}.jpg`;
    

 stop = setTimeout(func, 1000,m,pic)
}



function showPic(k,descr) {
    if (k === "id1") q=id1.src ;
else if (k === "id2") q = id2.src ;
else if (k === "id3") q = id3.src ;

    bigPicture.innerHTML = `<img src="${q}" alt="" style="width: 1000px" onclick="bigPicture.innerHTML=''">
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