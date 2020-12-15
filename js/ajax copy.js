/*
 * AJAX请求
 * @param  {string}  url            请求的URL地址
 * @param  {function}  callback     回调函数
 * @param  {string}  type           请求方式（GET或POST）
 * @param  {string}  data           POST方式发送的数据
*/ 
function ajax(url,callback, type="GET", data="") {
    if (window.XMLHttpRequest) {// Mozilla, Safari, ...
        var xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 5 ,6
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (type == "GET") {
        xhr.open("GET", url, true);
        xhr.send();
    } else {
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
    //POST请求方式


    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText)
           //接触到数据后操作DOM，将结果显示在页面上
           callback(data);
        }
    }
}