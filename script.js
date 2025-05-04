$(document).ready(function () {
    let isShowText = false;
    $(".desc__title").click(function () {
        isShowText = !isShowText;
        (isShowText)?$(".desc__text").slideDown("500"):$(".desc__text").slideUp("500")
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
        console.log("answer:", rebusAnswer)
        $("#rebus-img").attr("src", `./images/${name}.png`)
    }
    randRebus()

    $("#checkAnswerBtn").click(() => {
        if ($("#user-rebus-answer").val() == rebusAnswer) {
            $("#test-progress").val(testProgressVal+=1)
            randRebus()
        } else {
            $("#test-progress").val(testProgressVal+=0)
            randRebus()
        }
        
    })

})