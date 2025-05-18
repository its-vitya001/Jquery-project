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
        width: `${window.innerWidth/14}px`
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

        $("#user-rebus-answer").val(rebusAnswer) // Remove
        // console.log("answer:", rebusAnswer) // remove
        
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
                $(".test__rebus-block").html("<button class=\"next-task__btn\">Next task →</button>")
            }
        } else {
            testProgressVal--
            $("#test-progress").val(testProgressVal).trigger("change")
            alertify.error("Wrong answer !")
        }
        
    })
})
