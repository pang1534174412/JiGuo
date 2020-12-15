$(".jia_3").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/public", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="neir-span" style="background:url('${val.img}')">
                 <div class="div">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".dzsy-neir").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})

$(".jia_4").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/public", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="neir-span" style="background:url('${val.img}')">
                 <div class="div">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".neir-sqz").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})

$(".jia_5").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/public", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="neir-span" style="background:url('${val.img}')">
                 <div class="div">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".neir-syz").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})

$(".jia_6").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/public", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="neir-span" style="background:url('${val.img}')">
                 <div class="div">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".neir-yjs").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})

$(".jia_7").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/master", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="tyszx-span" style="background:url('${val.img}')">
                 <div class="sf">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".tyszx-neir").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})

$(".jia_8").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/master", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="neir-span" style="background:url('${val.img}')">
                 <div class="sf">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".tyszx-sqz").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})

$(".jia_9").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/master", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="neir-span" style="background:url('${val.img}')">
                 <div class="sf">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".tyszx-syz").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})

$(".jia_10").click(function () {
    $(".jaz").css("display", "block")
    $(".jia_1").css("display", "none")

    var arr = [];
    setTimeout(function () {
        $.get("http://192.168.1.94:3000/useing/master", function (data) {
            console.log(data);
            arr = data;
            arr.forEach(function (val) {
                var html = `<span class="neir-span" style="background:url('${val.img}')">
                 <div class="sf">${val.info_ty}</div>
                 <span class="span1">${val.text}</span>
                 <div class="div1">${val.totalnum}</div>
                 <div class="div2">${val.num}+台</div>
                 <div class="div3"><span>${val.apply}</span>&nbsp;申请</div>
                 <div class="div4">报告数量：8 </div>
             </span>`
                $(".tyszx-yjs").prepend(html);
            })
        }, 'json')
        $(".jaz").css("display", "none")
        $(".jia_1").css("display", "block")
    }, 3000)
})



















