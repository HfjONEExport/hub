function Comms(){
    window.open("/comms/","_self")
};
function Flags(){
    window.open("./flags/","_self")
};
function Kins(){
    window.open("./kins/","_self")
};
function Selfships(){
    window.open("./selfships/","_self")
};
function Game(){
    window.open("/halls/","_self")
};
function Sonas(){
    window.open("./sonas/","_self")
};

function ErraticGender(){
    window.open('https://rentry.co/erraticgender')
};
function Box(){
    window.open('https://toyhou.se/30358965.selfship-art/30359039.box/gallery')
};
function Razor(){
    window.open('https://toyhou.se/30358965.selfship-art/30359749.razor/gallery')
};

function Back(){
    window.open("/hub/","_self")
};
function Detect(){
    if (!navigator.userAgentData.mobile){
        document.getElementById("delete").remove();
        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="/hub/pc.css" />');
    }
};