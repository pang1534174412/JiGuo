$(".jia_1 img").click(function a() {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")
    var arr = []
    setTimeout(function () {
        $.get("http://192.168.1.24:3000/play/new", function (data) {
            console.log(data);
            arr = data;
            data[0].forEach(function (val) {
                var html = `<li>
                <img class="bao_img" src="${val.img}" alt="">
                <span class="bao_kongqi"></span>
                <p class="bao_kongqi2">${val.text}</p>
                <span class="bao_ming">${val.price}</span>
                <div class="bao_you">
                    <img src="../css/img/zan.png" alt=""><a>${val.like}</a>
                    <img src="../css/img/reply.png" alt=""><a>${val.words} </a>
                </div>
            </li>`
                $(".faxian_ul1").stop().append(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})



$(".jia_1 span").click(function a() {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")
    var arr = []
    setTimeout(function () {
        $.get("http://192.168.1.24:3000/play/hot", function (data) {
            console.log(data);
            arr = data;
            data[0].forEach(function (val) {
                var html = `<li>
                <img class="bao_img" src="${val.img}" alt="">
                <span class="bao_kongqi"></span>
                <p class="bao_kongqi2">${val.text}</p>
                <span class="bao_ming">${val.price}</span>
                <div class="bao_you">
                    <img src="../css/img/zan.png" alt=""><a>${val.like}</a>
                    <img src="../css/img/reply.png" alt=""><a>${val.words} </a>
                </div>
            </li>`
                $(".faxian_ul2").stop().append(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
    event.stopPropagation()
})



$(".dla dd").click(function () {
    var index = $(this).index();
    $(this).addClass("active1").siblings("dd").removeClass("active1")
    $(this).parent(".dla").next(".div2").children(".faxian_ul").eq(index).addClass("active").siblings(".faxian_ul").removeClass("active")
})