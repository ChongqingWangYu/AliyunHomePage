"use strict";
            window.onload = function () 
            {
                topLeftNavAll();//左上角菜单
                topBroadcast();//轮播图
                top2();//第二大块
                top3();//第三大块（轮播）
                top4();//海纳百川
                top5();//右侧悬浮按钮
            }
            
            var timer = null;
            var alpha = 0;
            var Max_flag = false;
            function mTopBarBodyOver(obj){
                obj.style.backgroundColor='#1c2327';
                document.getElementsByClassName("top-bar-body")[0].style.borderBottom="1px solid #1c2327";
                
            }
            function mTopBarBodyOut(obj){
                obj.style.backgroundColor='rgba(55,61,65,0)';
                document.getElementsByClassName("top-bar-body")[0].style.borderBottom="1px solid hsla(0,0%,100%,.15)";
            }
            
            function mTopBarSiteOver(obj){
                document.getElementsByClassName("top-bar-site-switch")[0].style.backgroundColor="#272b2f";
                document.getElementsByClassName("top-bar-dwon-icon")[0].style.display="none";
                document.getElementsByClassName("top-bar-up-icon")[0].style.display="inline";
                document.getElementsByClassName("top-bar-site-switch-dropdown")[0].style.display="inline";
            }
            function mTopBarStieOut(obj){
                document.getElementsByClassName("top-bar-site-switch")[0].style.backgroundColor="";
                document.getElementsByClassName("top-bar-dwon-icon")[0].style.display="inline";
                document.getElementsByClassName("top-bar-up-icon")[0].style.display="none";
                document.getElementsByClassName("top-bar-site-switch-dropdown")[0].style.display="none";
            }

            function mTopBarSearchContainerOver(){
                var box=document.getElementsByClassName("top-bar-search-container")[0];
                var input=document.getElementsByClassName("top-bar-search-container-input")[0];
                box.style.width = 300+"px";
                box.style.backgroundColor="#272b2f";
                document.getElementsByClassName("top-bar-search-container-outline")[0].style.opacity=1;
                document.getElementsByClassName("top-bar-search-container-input-close")[0].style.display="inlne";
            }
            function mTopBarSearchContainerOut(){
                var box=document.getElementsByClassName("top-bar-search-container")[0];
                var input=document.getElementsByClassName("top-bar-search-container-input")[0];
                if(input != document.activeElement){//判断input标签是否获取焦点，document.activeElement为获取焦点，input != document.activeElement 表示input未获取焦点
                    box.style.width = 200+"px";
                    box.style.backgroundColor="";
                    document.getElementsByClassName("top-bar-search-container-outline")[0].style.opacity=0;
                    document.getElementsByClassName("top-bar-search-container-input-close")[0].style.display="none";
                    input.value="";
                }
            }
            function mTopBarSearchContainerOnKeyUp(obj){
                if(obj.value==""){
                    document.getElementsByClassName("top-bar-search-container-input-close")[0].style.display="none";
                }else{
                    document.getElementsByClassName("top-bar-search-container-input-close")[0].style.display="";
                }
            }
            function mTopBarSearchContainerInputCloseClick(obj){
                var input=document.getElementsByClassName("top-bar-search-container-input")[0];
                var box=document.getElementsByClassName("top-bar-search-container")[0];
                box.onmouseout=function(e){//防止box失去焦点
                    //现代浏览器阻止默认事件
                    if ( e && e.preventDefault ) 
                        e.preventDefault(); 
                    //IE阻止默认事件
                    else 
                         window.event.returnValue = false; 
                         return false; 
                }
                input.value="";
            }
            //以上是topbartop的move和out事件
            
            

            function topBroadcast(){
                topBroadcastOpacity();//图片呼吸
                var box,alpha,Optimer;
                box = document.getElementsByClassName("breathingLampImage");
                function topBroadcastOpacity() 
                {
                    alpha=0;
                    // box = $('.index-top-banner').children(".center").children("a").children().children().children(".breathingLampImage");
                        // console.log(box);
                        // console.log(box.length)
                    clearInterval(Optimer);
                    Optimer = setInterval(function () {
                        var speed = 0;
                        if (Max_flag==true) {
                            speed = -5;
                        } else {
                            speed = 5;
                        }
                        if (alpha == 100) {
                            Max_flag=true;
                        } else if(alpha == 0){
                            Max_flag=false;
                        }
                            alpha += speed;
                            // box.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(Opacity=' + alpha + ')';
                            // box.css("opacity",alpha / 100);
                            box[index].style.opacity=alpha / 100;
                            // console.log("opacity:"+index);
                    }, 100);
                }
                var index=0;
                var ms=5;
                var broadcastTimer;
                var aHide,bShow;
                broadcast();//轮播
                function broadcast(){
                    bShow=$('.index-top-banner').children().eq(index);
                    $(".y-row-layer").eq(index).fadeIn(1000);
                    $(bShow).removeClass("bottom").addClass("center animating-enter-down").css("margin-top","50px").animate({"margin-top":'0'},300);
                    broadcastTimer=setInterval(function(){
                        aHide=$('.index-top-banner').children().eq(index);
                        $(aHide).removeClass("center animating-enter-down").addClass("bottom");  
                        $(".y-row-layer").eq(index).hide();
                        alpha=0;
                        box[index].style.opacity=alpha;
                        clearInterval(Optimer);
                        topBroadcastOpacity();
                        // console.log("hide:"+index);
                        if(index<4){
                            index++;
                        }else{
                            index=0;
                        }
                        strokeDashoffset=100;
                        tabUlLi.css("stroke-dashoffset",strokeDashoffset);
                        tabUlLi=$(".svg-path").eq(index);
                        // console.log("show:"+index);
                        bShow=$('.index-top-banner').children().eq(index);
                        $(".y-row-layer").eq(index).fadeIn(1000);
                        $(bShow).removeClass("bottom").addClass("center animating-enter-down").css("margin-top","50px").animate({"margin-top":'0'},300);
                        // console.log(index);
                    },ms*1000);

                }
                var tabUlLi;
                var strokeDashoffset=100;
                var strokeTimer;
                stroke();//轮播图动态按钮
                function stroke(){
                    tabUlLi=$(".svg-path").eq(index);
                    // console.log(tabUlLi);
                    strokeTimer=setInterval(function(){
                        strokeDashoffset--;
                        if(strokeDashoffset!=0){
                            tabUlLi.css("stroke-dashoffset",strokeDashoffset);
                        }else{
                            strokeDashoffset=100;
                        }
                        // console.log(strokeDashoffset);
                    },ms*1000/100);
                }
                //点击切换轮播图
                LiClick();
                function LiClick(){
                    $(".banner-tab-li").click(function(){
                        clearInterval(strokeTimer);
                        clearInterval(broadcastTimer);
                        clearInterval(Optimer);
                        var DataIndex=$(this).attr("data-index");
                        alpha=0;
                        box[index].style.opacity=alpha;
                        aHide=$('.index-top-banner').children()[index];
                        $(aHide).removeClass("center animating-enter-down").addClass("bottom");
                        $(".y-row-layer").eq(index).clearQueue().hide();    
                        $(".svg-path").eq(index).css("stroke-dashoffset",100);
                        index=DataIndex;
                        $(".y-row-layer").eq(index).fadeIn(1000);
                        bShow=$('.index-top-banner').children()[index];
                        $(bShow).removeClass("bottom").addClass("center animating-enter-down").css("margin-top","50px").animate({"margin-top":'0'},300);
                        strokeDashoffset=100;
                        tabUlLi.css("stroke-dashoffset",strokeDashoffset);
                        $(".svg-path").eq(index).css("stroke-dashoffset",0);
                        // stroke();//轮播图动态按钮
                        // broadcast();//轮播
                        topBroadcastOpacity();
                    });
                }
            }
           
            function topLeftNavAll(){
                var allNavTimer;//导航栏图标定时器
                var allNav_Active=false,lv1_Active=false;//导航栏是否在活动
                var lv1_Active_show=false;
                //图标触发一级导航栏
                $('.all-nav').hover(function(){
                    allNav_Active=true;
                    if(!lv1_Active_show){
                        lv1_Active_show=true;
                        $('.all-nav').css("background","#28d0e9");
                        $('.top-bar-level1-nav').css("display","block");
                        $('.top-bar-level1-nav').css("left","-200px");
                        $('.top-bar-level1-nav').clearQueue().animate({left:'0px'},100);
                    }
                },function(){//一级导航栏隐藏
                    allNav_Active=false;
                    clearInterval(allNavTimer);
                    allNavTimer=setInterval(function(){
                        if(!lv2_Active && !lv1_Active && !allNav_Active){
                            console.info("allNavTimer");
                            $('.top-bar-level1-nav').clearQueue().animate({left:'-200px'},100,function(){
                                $('.top-bar-level1-nav').css("display","none");
                                $('.all-nav').css("background","");
                                lv1_Active_show=false;
                                clearInterval(allNavTimer);
                            });
                        }
                    },200);
                });
                var lv1_Timer,lv1_Li_Timer;//一级导航栏定时器
                var li_hover,lv1_Li_Active=false;//保持高亮的li
                var lv1_Active=false,lv2_Active=false,lv3_Active=false;
                var lv2;
                var lv2_show=false;//是否有正在显示的二级导航栏
                var lv2_Timer;
                //一级导航栏触发二级导航栏
                $('.top-bar-level1-nav').hover(function(){
                    lv1_Active=true;//lv1被鼠标指向
                    $('.top-bar-level1-nav').find('li').hover(function(){
                        lv1_Li_Active=true;
                        li_hover=$(this);
                        var key=li_hover.attr("data-key");
                        var box=$("#top-bar-"+key);
                        // console.log(box.attr("id"));
                        if(lv2_show){//已经有二级导航栏在显示了 （不滑动出现）
                            lv2.hide();//隐藏之前的二级导航栏
                            lv2=box.children(".top-bar-level1-content");
                            lv2.show();//显示新的二级导航栏
                        }else{//（滑动出现）
                            lv2=box.children(".top-bar-level1-content");
                            lv2.css("left","-200px").show().clearQueue().animate({left:'200px'},100);//显示新的二级导航栏
                            lv2_show=true;
                        }
                    },function(){//二级导航栏隐藏
                        lv1_Li_Active=false;
                        clearInterval(lv1_Li_Timer);//清除定时器
                        // console.info("lv1_Li_Timer+++++++");
                        lv1_Li_Timer=setInterval(function(){
                            if(!lv2_Active && !lv1_Li_Active){//二级导航栏被释放
                                // console.info("lv1_Li_Timer");
                                lv1_Li_Active=false;
                                lv2_show=false;
                                lv2.clearQueue().animate({left:'-200px'},100,function(){
                                    lv2.hide();//隐藏二级导航栏
                                    clearInterval(lv1_Li_Timer);//清除定时器
                                });
                            }
                        },200); 
                    });
                },function(){//二级导航栏隐藏
                    lv1_Active=false;//释放一级导航栏
                    lv1_Timer=setInterval(function(){
                        if(!lv2_Active && !lv1_Active){//二级导航栏被释放
                            // console.info("lv1_Timer");
                            clearInterval(lv1_Timer);//清除定时器
                        }
                    },200);
                });

                $(".top-bar-level1-content").hover(function(){//BUG在这个div内动来动去会失去hover
                    // console.log("over")
                    lv2_Active=true;

                },function(){
                    lv2_Active=false;
                    // console.log("out")
                    clearInterval(lv2_Timer);
                    lv2_Timer=setInterval(function(){
                        if(!lv3_Active && !lv2_Active){
                            clearInterval(lv2_Timer);
                            lv2_Active=false;
                        }
                    },200);
                });
            }
            function top2(){
                click()
                function click(){
                    var ul =$('.ali-product-tabs')
                    var divp=$('.ali-product-content-container')
                    $('.ali-product-tab').click(function(){
                        ul.children('.ali-product-tab').removeClass('active').children('a').removeClass('active')
                        divp.children('.ali-product-content').removeClass('active').slideUp()
                        var li=$(this)
                        li.addClass('active')
                        li.children('a').addClass('active')
                        var divId=li.children('a').attr('href').substring(1)
                        var div=$('#'+divId)
                        // console.info(divId)
                        div.addClass('active').slideDown()
                    })
                }

                setHover()
                function setHover(){
                    $('.ali-product-normal-item').hover(function(){
                        var a=$(this)
                        var i=a.children('i')
                        i.css("opacity",1)
                    },function(){
                        var a=$(this)
                        var i=a.children('i')
                        i.css("opacity",0)
                    })
                }
                showMore()
                function showMore(){
                    $('.ali-product-show-more').click(function(){
                        var div=$(this)
                        var text=div[0].innerText;
                        var more=$('.ali-product-more-layer')
                        if(text=='查看全部'){
                            // console.info(text)
                            div[0].innerText='收起'
                            more.slideDown()
                        }
                        else if(text=='收起'){
                            // console.info(text)
                            div[0].innerText='查看全部'
                            more.slideUp()
                        }
                    })
                }
            }

            function top3(){
                $('.slide-container').hover(function(){
                    $('.slide-btn-panel').show()
                    $('.btn-bg').show()
                },function(){
                    $('.slide-btn-panel').hide()
                    $('.btn-bg').hide()

                })
                $(".mask").hover(function(){
                    var mask=$(this)
                    var content=mask.children('.content')
                    var line=content.children('.line-panel')
                    line.children('.item-line').animate({'opacity':0},100)
                    content.children('.item-desc').css('opacity',1)
                    content.children('.item-link').css('opacity',1)
                    content.children('.item-img-panel').children('.item-img-hover').css('opacity',1)
                },function(){
                    var mask=$(this)
                    var content=mask.children('.content')
                    var line=content.children('.line-panel')
                    line.children('.item-line').animate({'opacity':1},100)
                    content.children('.item-desc').css('opacity',0)
                    content.children('.item-link').css('opacity',0)
                    content.children('.item-img-panel').children('.item-img-hover').css('opacity',0)
                })
                $('.slide-btn-panel').click(function(){
                    var btn=$(this).children('button').attr('id')
                    var ul=$('.slide-content')
                    var showLength=$('.slide-body').css('width')
                    showLength=parseInt(showLength.substring(0,showLength.length-2))
                    var left=ul.css('left')
                    left=parseInt(left.substring(0,left.length-2))
                    // console.info(left,showLength)
                    if(btn=='left-btn'){
                        var l=left+showLength
                        if(l>0)
                            l=0
                        if(left==0)
                            l=-3196
                        // console.info('left-btn')
                        ul.css('left',l-showLength)
                        ul.animate({'left':l})
                    }else if(btn=='right-btn'){
                        var l=left-showLength;
                        if(l<-4896)
                            l=-4896
                        if(left==-4896)
                            l=-3196
                        // console.info('right-btn')
                        ul.css('left',l+showLength)
                        ul.animate({'left':l})
                    }
                })
            }
            
            function top4(){
                var top4Timer
                $('.header-link').hover(function(){
                    var a=$(this)
                    var h2=a.children('h2')
                    h2.css('color','#00c1de')
                    var div=a.children('div')
                    clearInterval(top4Timer)
                    top4Timer=setInterval(function(){
                        var y=div.css('background-position-y')
                        y=parseInt(y.substring(0,y.length-2))
                        y=y-75
                        div.css('background-position-y',y)
                        // console.info(y)
                        if(y==-4425){
                            clearInterval(top4Timer)
                        }
                    },5)
                },function(){
                    var a=$(this)
                    var h2=a.children('h2')
                    h2.css('color','#000')
                    var div=a.children('div')
                    clearInterval(top4Timer)
                    top4Timer=setInterval(function(){
                        var y=div.css('background-position-y')
                        y=parseInt(y.substring(0,y.length-2))
                        y=y+75
                        div.css('background-position-y',y)
                        // console.info(y)
                        if(y==0){
                            clearInterval(top4Timer)
                        }
                    },5)
                })
            }

            function top5(){
                var top5Timer
                var panelhover=false
                $('.xiaoyun-entry-button').hover(function(){
                    $('.xiaoyun-help-entry').addClass('active')
                    $('.panel-content').css('opacity',1)
                },function(){
                    top5Timer=setInterval(function(){
                        if(!panelhover){
                            $('.xiaoyun-help-entry').removeClass('active')
                            $('.panel-content').css('opacity',0)
                            clearInterval(top5Timer)
                        }
                    },200)
                })
                $('.xiaoyun-panel').hover(function(){
                    panelhover=true
                },function(){
                    panelhover=false
                })
                
                $('.panel-close').click(function(){
                    $('.xiaoyun-help-entry').removeClass('active')
                    $('.panel-content').css('opacity',0)
                })
                

                $(function(){
                    $(window).scroll(function(){
                        if($(window).scrollTop()>200){
                            $('#J_gotoTop').fadeIn(1500)
                        }
                        else
                        {
                            $('#J_gotoTop').fadeOut(1500)
                        }
                    })
                })
                $('#J_gotoTop').click(function(){
                    $('html').animate({ scrollTop: 0 }, 500);
                })

                $('.ali-main-know-cell').hover(function(){
                    var li=$(this)
                    $('.ali-main-know-cell').children('img').hide()
                    li.children('img').show()
                })
            }