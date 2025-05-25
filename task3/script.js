$(document).ready(function () {
    $(".desc__title").click(function () {
        $(".desc__text").slideToggle("500")
    })

    let timer;
    let time = 0;
    $("#time-progress").knob({
        bgColor: "rgba(0, 108, 216, 0.3)",
        fgColor: "rgba(142, 32, 205, 0.5)",
        thickness: 0.2,
        min: 0,
        max: 60,
        readOnly: true,
        inputColor: "rgba(0, 0, 0, 0)",
    })

    let taskProgress = 0;
    $("#task-progress").knob({
        bgColor: "rgba(0, 108, 216, 0.3)",
        fgColor: "rgba(142, 32, 205, 0.5)",
        min: 0,
        max: 15,
        thickness: 0.2,
        lineCap: "round",
        angleArc: 170,
        angleOffset: -85,
        readOnly: true,
        inputColor: "rgba(0, 0, 0, 0)",
    })

    for (let i = 0; i < 6*4; i++) {
        
    }
})

//casino
let usrCoins = 0;
function casic () {
    let usrrn = Math.floor(Math.random()*20)
    let usrN = +prompt("u num", usrrn)
    let maxN = +prompt("max num", 20)
    let botN = Math.floor(Math.random()*maxN)
    if (usrN==botN){
        usrCoins+=20
    } else { 
        usrCoins-=5
    }
    alert(`U:${usrN}|B:${botN}\nCoins: ${usrCoins}`)
}

document.addEventListener("keydown",(event)=>{(event.ctrlKey&&event.key=="b")?casic():0})