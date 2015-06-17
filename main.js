/**
 * Created by Administrator on 2015/6/15.
 */

if(window.localStorage){
    alert('This browser supports localStorage');
}else{
    alert('This browser does NOT support localStorage');
}

function clicksubmit(){
    window.alert("click submit")
    localStorage.a = 3;//设置a为"3"
    localStorage["a"] = "sfsf";//设置a为"sfsf"，覆盖上面的值
    localStorage.setItem("b","isaac");//设置b为"isaac"
    var a1 = localStorage["a"];//获取a的值
    var a2 = localStorage.a;//获取a的值
    var b = localStorage.getItem("b");//获取b的值
    localStorage.removeItem("c");//清除c的值
    window.alert(a1)
}