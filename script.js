$(document).ready(function () {
    $(".desc__title").click(function () {
        $(".desc__text").slideToggle("500")
    })

    let testProgressVal = 0;

    $("#test-progress").knob({
        min: 0,
        max: 5,
        readOnly: true,
        lineCap: "round",
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

        $("#user-rebus-answer").val(rebusAnswer) // CHEAT
        console.log("answer:", rebusAnswer)
        
        $("#rebus-img").attr("src", `./images/${name}.png`)
    }
    randRebus()

    $("#checkAnswerBtn").click(() => {
        if ($("#user-rebus-answer").val() == rebusAnswer) {
            testProgressVal++
            $("#test-progress").val(testProgressVal).trigger("change")
            alertify.success("Right answer !")
            randRebus()
        } else {
            alertify.error("Wrong answer !")
        }
        
    })
})

