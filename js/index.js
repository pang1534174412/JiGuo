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

    /* $(document).scroll(function () {
        console.log(2);
        if ($(this).scrollTop() < 370) {
            console.log(3);
            $(".shen_zi").animate({
                top: "40px",
                left: "900px"
            }, 5000)
        } else {
            console.log(10);
            $(".shen_zi").css({
                top: "-40px",
                left: "3000px"
            })
        }
    }); */
})()