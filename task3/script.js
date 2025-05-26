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
})