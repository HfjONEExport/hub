function Flags(){
    window.open("./flags/","_self")
}
function Kins(){
    window.open("./kins/","_self")
}
function Selfships(){
    window.open("./selfships/","_self")
}
function Back(){
    window.open("/hub/","_self")
}

function ErraticGender(){
    window.open('https://rentry.co/erraticgender')
}

function Box(){
    window.open('https://toyhou.se/30358965.selfship-art/30359039.box/gallery')
}
function Razor(){
    window.open('https://toyhou.se/30358965.selfship-art/30359749.razor/gallery')
}

function loadCSS(href){
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    document.head.appendChild(link);
}
if (typeof screen.orientation !== 'undefined') {
    loadCSS('style.css')
}
else {
    loadCSS('style-mobile.css')
}