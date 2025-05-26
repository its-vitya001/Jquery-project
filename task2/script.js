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
        max: 180,
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
        const soundAnswers = {
            1: "Гарри Поттер",
            2: "Губка Боб", 
            3: "Пираты Карибского моря",
            4: "Симпсоны",
            5: "Имперский марш",
            6: "Король львов",
            7: "Холодное сердце",
            8: "Шрек",
            9: "Шрек",
            10: "Rocky",
            11: "Индиана джонс",
            12: "Один дома",
            13: "Терминатор 2",
            14: "Назад в будущее",
            15: "Охотники за приведениями"
        };

        let soundNum = Math.floor(Math.random() * (15 - 1) + 1)
        soundAnswer = soundAnswers[soundNum] || "Неизвестно";

        $("#test-audio").attr("src", `./sound/${soundNum}.mp3`)

        //----------------Auto Answer--------------//
        $("#user-rebus-answer").val(soundAnswer)
        console.log("Ответ", soundAnswer, soundNum) 
        //-----------------------------------------//
    }

    
    $("#start-btn").click(() => {
        $("#start-btn").hide()
        $("#test-audio").show()
        randomSound()

        timer = setInterval(() => {
            time++
            $("#time-progress").val(time).trigger("change")
            if(time==180){
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
                alertify.success("Right answer !")
                if (taskProgress == 15) {
                    $(".test__quiz-block").html(
                        `<button onclick=\"window.location.href='../task3/index.html'\" class=\"next-task__btn\">Next task →</button>`
                    )
                }
            } else {
                taskProgress--
                $("#task-progress").val(taskProgress).trigger("change")
                alertify.error("Wrong answer !")
            }
        } else if ($("#start-btn").css("display") == "block") {
            alertify.error("Test not started !")
        }
    })

    

})