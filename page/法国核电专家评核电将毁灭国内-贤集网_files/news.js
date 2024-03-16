$(document).ready(function() {
    $("#leftsead a").hover(function() {
            if ($(this).prop("className") == "youhui") {
                $(this).children("img.hides").show()
            } else {
                $(this).children("div.hides").show();
                $(this).children("img.shows").hide();
                $(this).children("div.hides").animate({
                        marginRight: "0px"
                    },
                    "0")
            }
        },
        function() {
            if ($(this).prop("className") == "youhui") {
                $(this).children("img.hides").hide();
            } else {
                $(this).children("div.hides").animate({
                        marginRight: "-163px"
                    },
                    0,
                    function() {
                        $(this).hide();
                        $(this).next("img.shows").show();
                    })
            }
        });
    $("#top_btn").click(function() {
        if (scroll == "off") {
            return;
        }
        $("html,body").animate({
                scrollTop: 0
            },
            600)
    });
    $("#jianyi").click(function() {
        $("#suggest").stop(true, true).slideToggle("fast");
    });
    $("#suggest .close").click(function() {
        $("#suggest").stop(true, true).hide("");
    });
    var loc = window.location.href;
    $(".pagination li:last-child button").click(function(){
        var page = parseInt($("input[name='page']").val());
        var search = window.location.search;
        var array = search.split('page');   //通过-分割成数组
        if (array.length  > 1){
            array.pop();   //删除最后一个数组元素
            var a = 'page='+page;  //组合成字符串
            a =  array+a;
        }else if(search){
            var a= "&page="+page;
            a =  loc +=a;
        } else{
            var a= "?page="+page;
            a =  loc +=a;
        }
        location.href = a;
        return false;
    });
});
