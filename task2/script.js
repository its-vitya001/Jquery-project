$(document).ready(function () {
    $(".desc__title").click(function () {
        $(".desc__text").slideToggle("500")
    })

    let timer;
    let time = 0;
    $("#time-progress").knob({
        fgColor: "rgba(142, 32, 205, 0.5)",
        bgColor: "rgba(0, 0, 0, 0.24)",
        thickness: 0.2,
        min: 0,
        max: 60,
        readOnly: true,
    })

    let taskProgress = 0;
    $("#task-progress").knob({
        bgColor: "rgba(0, 0, 0, 0.24)",
        fgColor: "rgba(142, 32, 205, 0.5)",
        min: 0,
        max: 15,
        thickness: 0.2,
        lineCap: "round",
        angleArc: 170,
        angleOffset: -85,
        readOnly: true,
    })

    let soundAnswer = ""
    function randomSound () {
        let soundNum = Math.floor(Math.random() * (15 - 1) + 1)

        if (soundNum==1){soundAnswer="Гарри Поттер"}
        if (soundNum==2){soundAnswer="Губка Боб"}
        if (soundNum==3){soundAnswer="Пираты Карибского моря"}
        if (soundNum==4){soundAnswer="Симпсоны"}
        if (soundNum==5){soundAnswer="Имперский марш"}
        if (soundNum==6){soundAnswer="Король львов"}
        if (soundNum==7){soundAnswer="Холодное сердце"}
        if (soundNum==8){soundAnswer="Шрек"}
        if (soundNum==9){soundAnswer="Шрек"}
        if (soundNum==10){soundAnswer="Rocky"}
        if (soundNum==11){soundAnswer="Индиана джонс"}
        if (soundNum==12){soundAnswer="Один дома"}
        if (soundNum==13){soundAnswer="Терминатор 2"}
        if (soundNum==14){soundAnswer="Назад в будущее"}
        if (soundNum==15){soundAnswer="Охотники за приведениями"}

        $("#test-audio").attr("src", `./sound/${soundNum}.mp3`)
        $("#user-rebus-answer").val(soundAnswer)
        console.log("Ответ", soundAnswer, soundNum)
    }

    
    $("#start-btn").click(() => {
        $("#start-btn").hide()
        $("#test-audio").show()
        randomSound()

        timer = setInterval(() => {
            time++
            $("#time-progress").val(time).trigger("change")
            if(time==60){
                clearInterval(timer)
                $("#time-progress").val(0).trigger("change")
                $("#task-progress").val(0).trigger("change")
                time = 0;
                taskProgress = 0;
            }
        }, 1000)
    })
    
    $("#checkAnswerBtn").click(() => {
        if ($("#start-btn").css("display") == "none") {
            if ($("#user-rebus-answer").val() == soundAnswer) {
                randomSound()
                taskProgress++
                $("#task-progress").val(taskProgress).trigger("change")

                $("#respect").animate({opacity: 0.1}, 200, () => {  /////
                    $("#respect").animate({opacity: 0}, 200, ()=>{})/////
                })                                                  /////
                alertify.success("Right answer !")
            } else {
                $("#disrespect").animate({opacity: 0.1}, 200, () => {  /////
                    $("#disrespect").animate({opacity: 0}, 200, ()=>{})/////
                })                                                     /////
                alertify.error("Wrong answer !")
            }
        } else if ($("#start-btn").css("display") == "block") {
            alertify.error("Test not started !")
        }
    })
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