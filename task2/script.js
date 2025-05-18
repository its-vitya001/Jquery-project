$(document).ready(function () {
    $(".desc__title").click(function () {
        $(".desc__text").slideToggle("500")
    })
    // knob S
    $("#time-progress").knob({
        inputColor: "rgba(0, 0, 0, 0)",
        fgColor : "rgba(150, 10, 0, 0.8)",
        bgColor: "gray",
        thickness: 0.2,
    })

    $("#task-progress").knob({
        inputColor: "rgba(0, 0, 0, 0)",
        bgColor: "rgba(142, 32, 205, 0.5)",
        thickness: 0.2,
    })
    // knob E
})

//casino
// let usrCoins = 0;
// function casic () {
//     let usrrn = Math.floor(Math.random()*20)
//     let usrN = +prompt("u num", usrrn)
//     let maxN = +prompt("max num", 20)
//     let botN = Math.floor(Math.random()*maxN)
//     if (usrN==botN){
//         usrCoins+=20
//     } else { 
//         usrCoins-=5
//     }
//     alert(`U:${usrN}|B:${botN}\nCoins: ${usrCoins}`)
// }

// document.addEventListener("keydown",(event)=>{(event.ctrlKey&&event.key=="b")?casic():0})