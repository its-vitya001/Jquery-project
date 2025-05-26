$(document).ready(function () {
    $(".desc__title").click(function () {
        $(".desc__text").slideToggle("500")
    })

    let testProgressVal = 0;

    $("#test-progress").knob({
        min: 0,
        max: 5,
        readOnly: true,
        fgColor: "rgb(205, 32, 32)",
        lineCap: "round",
        angleArc: 170,
        angleOffset: -85,
        thickness: 0.3,
        inputColor: "rgba(0, 0, 0, 0)",
    })

    let rebusAnswer;
    function randRebus () {
        const REBUS_NAMES = [
            `гора`,
            `капітал`,
            `кисень`,
            `кіт`,
            `лікар`,
            `палітра`,
            `повідомлення`,
            `пробіл`,
            `флешка`,
            `цукерка`,
        ]

        let name = REBUS_NAMES[Math.floor(Math.random()*REBUS_NAMES.length)];
        rebusAnswer = name;

        //---------------Auto Answer------------//
        $("#user-rebus-answer").val(rebusAnswer)
        console.log("answer:", rebusAnswer) 
        //--------------------------------------//
        
        $("#rebus-img").attr("src", `./images/${name}.png`)
    }
    randRebus()

    $("#checkAnswerBtn").click(() => {
        if ($("#user-rebus-answer").val() == rebusAnswer) {
            if (testProgressVal < 5) {
                testProgressVal++
                $("#test-progress").val(testProgressVal).trigger("change")
                alertify.success("Right answer !")
                randRebus()
            } else {
                $(".test__quiz-block").html(
                    `<button onclick=\"window.location.href='../task2/index.html'\" class=\"next-task__btn\">Next task →</button>`
                )
            }
        } else {
            testProgressVal--
            $("#test-progress").val(testProgressVal).trigger("change")
            alertify.error("Wrong answer !")
        }
        
    })
})
