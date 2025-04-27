$(document).ready(function () {
    let isShowText = false;
    $(".desc__title").click(function () {
        isShowText = !isShowText;
        (isShowText)?$(".desc__text").slideDown("500"):$(".desc__text").slideUp("500")
    })
})