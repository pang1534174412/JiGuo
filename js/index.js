(function () {
    $(document).ready(function () {
        console.log(6);
        $(".shen_zi").animate({
            top: "40px",
            left: "900px"
        }, 300, "swing")
        $(".bottom").addClass("clearfix");
    })
    $(".jia").children(".jia_1").click(function () {
        $(this).css("display", "none")
        $(this).next(".jaz").css("display", "block")
    })
    $(".px_bottom_hui").click(function () {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 1500);
    })

    $(".zc").click(function(){
        location="login.html"
    })

})()