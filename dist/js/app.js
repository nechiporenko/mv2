// Avoid `console` errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/**
 * bxSlider v4.2.4
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz

 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

!function(a){var b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0}};a.fn.bxSlider=function(c){if(0===this.length)return this;if(this.length>1)return this.each(function(){a(this).bxSlider(c)}),this;var d={},e=this,f=a(window).width(),g=a(window).height();if(!a(e).data("bxSlider")){var h=function(){a(e).data("bxSlider")||(d.settings=a.extend({},b,c),d.settings.slideWidth=parseInt(d.settings.slideWidth),d.children=e.children(d.settings.slideSelector),d.children.length<d.settings.minSlides&&(d.settings.minSlides=d.children.length),d.children.length<d.settings.maxSlides&&(d.settings.maxSlides=d.children.length),d.settings.randomStart&&(d.settings.startSlide=Math.floor(Math.random()*d.children.length)),d.active={index:d.settings.startSlide},d.carousel=d.settings.minSlides>1||d.settings.maxSlides>1?!0:!1,d.carousel&&(d.settings.preloadImages="all"),d.minThreshold=d.settings.minSlides*d.settings.slideWidth+(d.settings.minSlides-1)*d.settings.slideMargin,d.maxThreshold=d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin,d.working=!1,d.controls={},d.interval=null,d.animProp="vertical"===d.settings.mode?"top":"left",d.usingCSS=d.settings.useCSS&&"fade"!==d.settings.mode&&function(){for(var a=document.createElement("div"),b=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],c=0;c<b.length;c++)if(void 0!==a.style[b[c]])return d.cssPrefix=b[c].replace("Perspective","").toLowerCase(),d.animProp="-"+d.cssPrefix+"-transform",!0;return!1}(),"vertical"===d.settings.mode&&(d.settings.maxSlides=d.settings.minSlides),e.data("origStyle",e.attr("style")),e.children(d.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),i())},i=function(){var b=d.children.eq(d.settings.startSlide);e.wrap('<div class="'+d.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),d.viewport=e.parent(),d.settings.ariaLive&&!d.settings.ticker&&d.viewport.attr("aria-live","polite"),d.loader=a('<div class="bx-loading" />'),d.viewport.prepend(d.loader),e.css({width:"horizontal"===d.settings.mode?1e3*d.children.length+215+"%":"auto",position:"relative"}),d.usingCSS&&d.settings.easing?e.css("-"+d.cssPrefix+"-transition-timing-function",d.settings.easing):d.settings.easing||(d.settings.easing="swing"),d.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),d.viewport.parent().css({maxWidth:m()}),d.settings.pager||d.settings.controls||d.viewport.parent().css({margin:"0 auto 0px"}),d.children.css({"float":"horizontal"===d.settings.mode?"left":"none",listStyle:"none",position:"relative"}),d.children.css("width",n()),"horizontal"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginRight",d.settings.slideMargin),"vertical"===d.settings.mode&&d.settings.slideMargin>0&&d.children.css("marginBottom",d.settings.slideMargin),"fade"===d.settings.mode&&(d.children.css({position:"absolute",zIndex:0,display:"none"}),d.children.eq(d.settings.startSlide).css({zIndex:d.settings.slideZIndex,display:"block"})),d.controls.el=a('<div class="bx-controls" />'),d.settings.captions&&x(),d.active.last=d.settings.startSlide===p()-1,d.settings.video&&e.fitVids(),("all"===d.settings.preloadImages||d.settings.ticker)&&(b=d.children),d.settings.ticker?d.settings.pager=!1:(d.settings.controls&&v(),d.settings.auto&&d.settings.autoControls&&w(),d.settings.pager&&u(),(d.settings.controls||d.settings.autoControls||d.settings.pager)&&d.viewport.after(d.controls.el)),j(b,k)},j=function(b,c){var d=b.find('img:not([src=""]), iframe').length,e=0;return 0===d?void c():void b.find('img:not([src=""]), iframe').each(function(){a(this).one("load error",function(){++e===d&&c()}).each(function(){this.complete&&a(this).load()})})},k=function(){if(d.settings.infiniteLoop&&"fade"!==d.settings.mode&&!d.settings.ticker){var b="vertical"===d.settings.mode?d.settings.minSlides:d.settings.maxSlides,c=d.children.slice(0,b).clone(!0).addClass("bx-clone"),f=d.children.slice(-b).clone(!0).addClass("bx-clone");d.settings.ariaHidden&&(c.attr("aria-hidden",!0),f.attr("aria-hidden",!0)),e.append(c).prepend(f)}d.loader.remove(),r(),"vertical"===d.settings.mode&&(d.settings.adaptiveHeight=!0),d.viewport.height(l()),e.redrawSlider(),d.settings.onSliderLoad.call(e,d.active.index),d.initialized=!0,d.settings.responsive&&a(window).bind("resize",R),d.settings.auto&&d.settings.autoStart&&(p()>1||d.settings.autoSlideForOnePage)&&H(),d.settings.ticker&&I(),d.settings.pager&&D(d.settings.startSlide),d.settings.controls&&G(),d.settings.touchEnabled&&!d.settings.ticker&&M(),d.settings.keyboardEnabled&&!d.settings.ticker&&a(document).keydown(L)},l=function(){var b=e.outerHeight(),c=null,f=a();if("vertical"===d.settings.mode||d.settings.adaptiveHeight)if(d.carousel){c=1===d.settings.moveSlides?d.active.index:d.active.index*q(),f=d.children.eq(c);for(var g=1;g<=d.settings.maxSlides-1;g++)f=c+g>=d.children.length?f.add(d.children.eq(c+g-d.children.length)):f.add(d.children.eq(c+g))}else f=d.children.eq(d.active.index);else f=d.children;return"vertical"===d.settings.mode?(f.each(function(c){b+=a(this).outerHeight()}),d.settings.slideMargin>0&&(b+=d.settings.slideMargin*(d.settings.minSlides-1))):b=Math.max.apply(Math,f.map(function(){return a(this).outerHeight(!1)}).get()),"border-box"===d.viewport.css("box-sizing")?b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))+parseFloat(d.viewport.css("border-top-width"))+parseFloat(d.viewport.css("border-bottom-width")):"padding-box"===d.viewport.css("box-sizing")&&(b+=parseFloat(d.viewport.css("padding-top"))+parseFloat(d.viewport.css("padding-bottom"))),b},m=function(){var a="100%";return d.settings.slideWidth>0&&(a="horizontal"===d.settings.mode?d.settings.maxSlides*d.settings.slideWidth+(d.settings.maxSlides-1)*d.settings.slideMargin:d.settings.slideWidth),a},n=function(){var a=d.settings.slideWidth,b=d.viewport.width();if(0===d.settings.slideWidth||d.settings.slideWidth>b&&!d.carousel||"vertical"===d.settings.mode)a=b;else if(d.settings.maxSlides>1&&"horizontal"===d.settings.mode){if(b>d.maxThreshold)return a;b<d.minThreshold?a=(b-d.settings.slideMargin*(d.settings.minSlides-1))/d.settings.minSlides:d.settings.shrinkItems&&(a=Math.floor((b+d.settings.slideMargin)/Math.ceil((b+d.settings.slideMargin)/(a+d.settings.slideMargin))-d.settings.slideMargin))}return a},o=function(){var a=1,b=null;return"horizontal"===d.settings.mode&&d.settings.slideWidth>0?d.viewport.width()<d.minThreshold?a=d.settings.minSlides:d.viewport.width()>d.maxThreshold?a=d.settings.maxSlides:(b=d.children.first().width()+d.settings.slideMargin,a=Math.floor((d.viewport.width()+d.settings.slideMargin)/b)):"vertical"===d.settings.mode&&(a=d.settings.minSlides),a},p=function(){var a=0,b=0,c=0;if(d.settings.moveSlides>0)if(d.settings.infiniteLoop)a=Math.ceil(d.children.length/q());else for(;b<d.children.length;)++a,b=c+o(),c+=d.settings.moveSlides<=o()?d.settings.moveSlides:o();else a=Math.ceil(d.children.length/o());return a},q=function(){return d.settings.moveSlides>0&&d.settings.moveSlides<=o()?d.settings.moveSlides:o()},r=function(){var a,b,c;d.children.length>d.settings.maxSlides&&d.active.last&&!d.settings.infiniteLoop?"horizontal"===d.settings.mode?(b=d.children.last(),a=b.position(),s(-(a.left-(d.viewport.width()-b.outerWidth())),"reset",0)):"vertical"===d.settings.mode&&(c=d.children.length-d.settings.minSlides,a=d.children.eq(c).position(),s(-a.top,"reset",0)):(a=d.children.eq(d.active.index*q()).position(),d.active.index===p()-1&&(d.active.last=!0),void 0!==a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0)))},s=function(b,c,f,g){var h,i;d.usingCSS?(i="vertical"===d.settings.mode?"translate3d(0, "+b+"px, 0)":"translate3d("+b+"px, 0, 0)",e.css("-"+d.cssPrefix+"-transition-duration",f/1e3+"s"),"slide"===c?(e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),E())})):"reset"===c?e.css(d.animProp,i):"ticker"===c&&(e.css("-"+d.cssPrefix+"-transition-timing-function","linear"),e.css(d.animProp,i),e.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(b){a(b.target).is(e)&&(e.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),s(g.resetValue,"reset",0),J())}))):(h={},h[d.animProp]=b,"slide"===c?e.animate(h,f,d.settings.easing,function(){E()}):"reset"===c?e.css(d.animProp,b):"ticker"===c&&e.animate(h,f,"linear",function(){s(g.resetValue,"reset",0),J()}))},t=function(){for(var b="",c="",e=p(),f=0;e>f;f++)c="",d.settings.buildPager&&a.isFunction(d.settings.buildPager)||d.settings.pagerCustom?(c=d.settings.buildPager(f),d.pagerEl.addClass("bx-custom-pager")):(c=f+1,d.pagerEl.addClass("bx-default-pager")),b+='<div class="bx-pager-item"><a href="" data-slide-index="'+f+'" class="bx-pager-link">'+c+"</a></div>";d.pagerEl.html(b)},u=function(){d.settings.pagerCustom?d.pagerEl=a(d.settings.pagerCustom):(d.pagerEl=a('<div class="bx-pager" />'),d.settings.pagerSelector?a(d.settings.pagerSelector).html(d.pagerEl):d.controls.el.addClass("bx-has-pager").append(d.pagerEl),t()),d.pagerEl.on("click touchend","a",C)},v=function(){d.controls.next=a('<a class="bx-next" href="">'+d.settings.nextText+"</a>"),d.controls.prev=a('<a class="bx-prev" href="">'+d.settings.prevText+"</a>"),d.controls.next.bind("click touchend",y),d.controls.prev.bind("click touchend",z),d.settings.nextSelector&&a(d.settings.nextSelector).append(d.controls.next),d.settings.prevSelector&&a(d.settings.prevSelector).append(d.controls.prev),d.settings.nextSelector||d.settings.prevSelector||(d.controls.directionEl=a('<div class="bx-controls-direction" />'),d.controls.directionEl.append(d.controls.prev).append(d.controls.next),d.controls.el.addClass("bx-has-controls-direction").append(d.controls.directionEl))},w=function(){d.controls.start=a('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+d.settings.startText+"</a></div>"),d.controls.stop=a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+d.settings.stopText+"</a></div>"),d.controls.autoEl=a('<div class="bx-controls-auto" />'),d.controls.autoEl.on("click",".bx-start",A),d.controls.autoEl.on("click",".bx-stop",B),d.settings.autoControlsCombine?d.controls.autoEl.append(d.controls.start):d.controls.autoEl.append(d.controls.start).append(d.controls.stop),d.settings.autoControlsSelector?a(d.settings.autoControlsSelector).html(d.controls.autoEl):d.controls.el.addClass("bx-has-controls-auto").append(d.controls.autoEl),F(d.settings.autoStart?"stop":"start")},x=function(){d.children.each(function(b){var c=a(this).find("img:first").attr("title");void 0!==c&&(""+c).length&&a(this).append('<div class="bx-caption"><span>'+c+"</span></div>")})},y=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToNextSlide())},z=function(a){a.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),e.goToPrevSlide())},A=function(a){e.startAuto(),a.preventDefault()},B=function(a){e.stopAuto(),a.preventDefault()},C=function(b){var c,f;b.preventDefault(),d.controls.el.hasClass("disabled")||(d.settings.auto&&d.settings.stopAutoOnClick&&e.stopAuto(),c=a(b.currentTarget),void 0!==c.attr("data-slide-index")&&(f=parseInt(c.attr("data-slide-index")),f!==d.active.index&&e.goToSlide(f)))},D=function(b){var c=d.children.length;return"short"===d.settings.pagerType?(d.settings.maxSlides>1&&(c=Math.ceil(d.children.length/d.settings.maxSlides)),void d.pagerEl.html(b+1+d.settings.pagerShortSeparator+c)):(d.pagerEl.find("a").removeClass("active"),void d.pagerEl.each(function(c,d){a(d).find("a").eq(b).addClass("active")}))},E=function(){if(d.settings.infiniteLoop){var a="";0===d.active.index?a=d.children.eq(0).position():d.active.index===p()-1&&d.carousel?a=d.children.eq((p()-1)*q()).position():d.active.index===d.children.length-1&&(a=d.children.eq(d.children.length-1).position()),a&&("horizontal"===d.settings.mode?s(-a.left,"reset",0):"vertical"===d.settings.mode&&s(-a.top,"reset",0))}d.working=!1,d.settings.onSlideAfter.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)},F=function(a){d.settings.autoControlsCombine?d.controls.autoEl.html(d.controls[a]):(d.controls.autoEl.find("a").removeClass("active"),d.controls.autoEl.find("a:not(.bx-"+a+")").addClass("active"))},G=function(){1===p()?(d.controls.prev.addClass("disabled"),d.controls.next.addClass("disabled")):!d.settings.infiniteLoop&&d.settings.hideControlOnEnd&&(0===d.active.index?(d.controls.prev.addClass("disabled"),d.controls.next.removeClass("disabled")):d.active.index===p()-1?(d.controls.next.addClass("disabled"),d.controls.prev.removeClass("disabled")):(d.controls.prev.removeClass("disabled"),d.controls.next.removeClass("disabled")))},H=function(){if(d.settings.autoDelay>0){setTimeout(e.startAuto,d.settings.autoDelay)}else e.startAuto(),a(window).focus(function(){e.startAuto()}).blur(function(){e.stopAuto()});d.settings.autoHover&&e.hover(function(){d.interval&&(e.stopAuto(!0),d.autoPaused=!0)},function(){d.autoPaused&&(e.startAuto(!0),d.autoPaused=null)})},I=function(){var b,c,f,g,h,i,j,k,l=0;"next"===d.settings.autoDirection?e.append(d.children.clone().addClass("bx-clone")):(e.prepend(d.children.clone().addClass("bx-clone")),b=d.children.first().position(),l="horizontal"===d.settings.mode?-b.left:-b.top),s(l,"reset",0),d.settings.pager=!1,d.settings.controls=!1,d.settings.autoControls=!1,d.settings.tickerHover&&(d.usingCSS?(g="horizontal"===d.settings.mode?4:5,d.viewport.hover(function(){c=e.css("-"+d.cssPrefix+"-transform"),f=parseFloat(c.split(",")[g]),s(f,"reset",0)},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(f))),J(j)})):d.viewport.hover(function(){e.stop()},function(){k=0,d.children.each(function(b){k+="horizontal"===d.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)}),h=d.settings.speed/k,i="horizontal"===d.settings.mode?"left":"top",j=h*(k-Math.abs(parseInt(e.css(i)))),J(j)})),J()},J=function(a){var b,c,f,g=a?a:d.settings.speed,h={left:0,top:0},i={left:0,top:0};"next"===d.settings.autoDirection?h=e.find(".bx-clone").first().position():i=d.children.first().position(),b="horizontal"===d.settings.mode?-h.left:-h.top,c="horizontal"===d.settings.mode?-i.left:-i.top,f={resetValue:c},s(b,"ticker",g,f)},K=function(b){var c=a(window),d={top:c.scrollTop(),left:c.scrollLeft()},e=b.offset();return d.right=d.left+c.width(),d.bottom=d.top+c.height(),e.right=e.left+b.outerWidth(),e.bottom=e.top+b.outerHeight(),!(d.right<e.left||d.left>e.right||d.bottom<e.top||d.top>e.bottom)},L=function(a){var b=document.activeElement.tagName.toLowerCase(),c="input|textarea",d=new RegExp(b,["i"]),f=d.exec(c);if(null==f&&K(e)){if(39===a.keyCode)return y(a),!1;if(37===a.keyCode)return z(a),!1}},M=function(){d.touch={start:{x:0,y:0},end:{x:0,y:0}},d.viewport.bind("touchstart MSPointerDown pointerdown",N),d.viewport.on("click",".bxslider a",function(a){d.viewport.hasClass("click-disabled")&&(a.preventDefault(),d.viewport.removeClass("click-disabled"))})},N=function(a){if(d.controls.el.addClass("disabled"),d.working)a.preventDefault(),d.controls.el.removeClass("disabled");else{d.touch.originalPos=e.position();var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b];d.touch.start.x=c[0].pageX,d.touch.start.y=c[0].pageY,d.viewport.get(0).setPointerCapture&&(d.pointerId=b.pointerId,d.viewport.get(0).setPointerCapture(d.pointerId)),d.viewport.bind("touchmove MSPointerMove pointermove",P),d.viewport.bind("touchend MSPointerUp pointerup",Q),d.viewport.bind("MSPointerCancel pointercancel",O)}},O=function(a){s(d.touch.originalPos.left,"reset",0),d.controls.el.removeClass("disabled"),d.viewport.unbind("MSPointerCancel pointercancel",O),d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},P=function(a){var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],e=Math.abs(c[0].pageX-d.touch.start.x),f=Math.abs(c[0].pageY-d.touch.start.y),g=0,h=0;3*e>f&&d.settings.preventDefaultSwipeX?a.preventDefault():3*f>e&&d.settings.preventDefaultSwipeY&&a.preventDefault(),"fade"!==d.settings.mode&&d.settings.oneToOneTouch&&("horizontal"===d.settings.mode?(h=c[0].pageX-d.touch.start.x,g=d.touch.originalPos.left+h):(h=c[0].pageY-d.touch.start.y,g=d.touch.originalPos.top+h),s(g,"reset",0))},Q=function(a){d.viewport.unbind("touchmove MSPointerMove pointermove",P),d.controls.el.removeClass("disabled");var b=a.originalEvent,c="undefined"!=typeof b.changedTouches?b.changedTouches:[b],f=0,g=0;d.touch.end.x=c[0].pageX,d.touch.end.y=c[0].pageY,"fade"===d.settings.mode?(g=Math.abs(d.touch.start.x-d.touch.end.x),g>=d.settings.swipeThreshold&&(d.touch.start.x>d.touch.end.x?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto())):("horizontal"===d.settings.mode?(g=d.touch.end.x-d.touch.start.x,f=d.touch.originalPos.left):(g=d.touch.end.y-d.touch.start.y,f=d.touch.originalPos.top),!d.settings.infiniteLoop&&(0===d.active.index&&g>0||d.active.last&&0>g)?s(f,"reset",200):Math.abs(g)>=d.settings.swipeThreshold?(0>g?e.goToNextSlide():e.goToPrevSlide(),e.stopAuto()):s(f,"reset",200)),d.viewport.unbind("touchend MSPointerUp pointerup",Q),d.viewport.get(0).releasePointerCapture&&d.viewport.get(0).releasePointerCapture(d.pointerId)},R=function(b){if(d.initialized)if(d.working)window.setTimeout(R,10);else{var c=a(window).width(),h=a(window).height();(f!==c||g!==h)&&(f=c,g=h,e.redrawSlider(),d.settings.onSliderResize.call(e,d.active.index))}},S=function(a){var b=o();d.settings.ariaHidden&&!d.settings.ticker&&(d.children.attr("aria-hidden","true"),d.children.slice(a,a+b).attr("aria-hidden","false"))};return e.goToSlide=function(b,c){var f,g,h,i,j=!0,k=0,m={left:0,top:0},n=null;if(!d.working&&d.active.index!==b){if(d.working=!0,d.oldIndex=d.active.index,0>b?d.active.index=p()-1:b>=p()?d.active.index=0:d.active.index=b,j=d.settings.onSlideBefore.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);if("next"===c?d.settings.onSlideNext.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1):"prev"===c&&(d.settings.onSlidePrev.call(e,d.children.eq(d.active.index),d.oldIndex,d.active.index)||(j=!1)),"undefined"!=typeof j&&!j)return d.active.index=d.oldIndex,void(d.working=!1);d.active.last=d.active.index>=p()-1,(d.settings.pager||d.settings.pagerCustom)&&D(d.active.index),d.settings.controls&&G(),"fade"===d.settings.mode?(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),d.children.filter(":visible").fadeOut(d.settings.speed).css({zIndex:0}),d.children.eq(d.active.index).css("zIndex",d.settings.slideZIndex+1).fadeIn(d.settings.speed,function(){a(this).css("zIndex",d.settings.slideZIndex),E()})):(d.settings.adaptiveHeight&&d.viewport.height()!==l()&&d.viewport.animate({height:l()},d.settings.adaptiveHeightSpeed),!d.settings.infiniteLoop&&d.carousel&&d.active.last?"horizontal"===d.settings.mode?(n=d.children.eq(d.children.length-1),m=n.position(),k=d.viewport.width()-n.outerWidth()):(f=d.children.length-d.settings.minSlides,m=d.children.eq(f).position()):d.carousel&&d.active.last&&"prev"===c?(g=1===d.settings.moveSlides?d.settings.maxSlides-q():(p()-1)*q()-(d.children.length-d.settings.maxSlides),n=e.children(".bx-clone").eq(g),m=n.position()):"next"===c&&0===d.active.index?(m=e.find("> .bx-clone").eq(d.settings.maxSlides).position(),d.active.last=!1):b>=0&&(i=b*q(),m=d.children.eq(i).position()),void 0!==typeof m&&(h="horizontal"===d.settings.mode?-(m.left-k):-m.top,s(h,"slide",d.settings.speed))),d.settings.ariaHidden&&S(d.active.index*q())}},e.goToNextSlide=function(){if(d.settings.infiniteLoop||!d.active.last){var a=parseInt(d.active.index)+1;e.goToSlide(a,"next")}},e.goToPrevSlide=function(){if(d.settings.infiniteLoop||0!==d.active.index){var a=parseInt(d.active.index)-1;e.goToSlide(a,"prev")}},e.startAuto=function(a){d.interval||(d.interval=setInterval(function(){"next"===d.settings.autoDirection?e.goToNextSlide():e.goToPrevSlide()},d.settings.pause),d.settings.autoControls&&a!==!0&&F("stop"))},e.stopAuto=function(a){d.interval&&(clearInterval(d.interval),d.interval=null,d.settings.autoControls&&a!==!0&&F("start"))},e.getCurrentSlide=function(){return d.active.index},e.getCurrentSlideElement=function(){return d.children.eq(d.active.index)},e.getSlideElement=function(a){return d.children.eq(a)},e.getSlideCount=function(){return d.children.length},e.isWorking=function(){return d.working},e.redrawSlider=function(){d.children.add(e.find(".bx-clone")).outerWidth(n()),d.viewport.css("height",l()),d.settings.ticker||r(),d.active.last&&(d.active.index=p()-1),d.active.index>=p()&&(d.active.last=!0),d.settings.pager&&!d.settings.pagerCustom&&(t(),D(d.active.index)),d.settings.ariaHidden&&S(d.active.index*q())},e.destroySlider=function(){d.initialized&&(d.initialized=!1,a(".bx-clone",this).remove(),d.children.each(function(){void 0!==a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!==a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),d.controls.el&&d.controls.el.remove(),d.controls.next&&d.controls.next.remove(),d.controls.prev&&d.controls.prev.remove(),d.pagerEl&&d.settings.controls&&!d.settings.pagerCustom&&d.pagerEl.remove(),a(".bx-caption",this).remove(),d.controls.autoEl&&d.controls.autoEl.remove(),clearInterval(d.interval),d.settings.responsive&&a(window).unbind("resize",R),d.settings.keyboardEnabled&&a(document).unbind("keydown",L),a(this).removeData("bxSlider"))},e.reloadSlider=function(b){void 0!==b&&(c=b),e.destroySlider(),h(),a(e).data("bxSlider",this)},h(),a(e).data("bxSlider",this),this}}}(jQuery);

/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */
!function (a, b, c) { "undefined" != typeof module && module.exports ? module.exports = c() : a[b] = c() }(this, "verge", function () { function a() { return { width: k(), height: l() } } function b(a, b) { var c = {}; return b = +b || 0, c.width = (c.right = a.right + b) - (c.left = a.left - b), c.height = (c.bottom = a.bottom + b) - (c.top = a.top - b), c } function c(a, c) { return a = a && !a.nodeType ? a[0] : a, a && 1 === a.nodeType ? b(a.getBoundingClientRect(), c) : !1 } function d(b) { b = null == b ? a() : 1 === b.nodeType ? c(b) : b; var d = b.height, e = b.width; return d = "function" == typeof d ? d.call(b) : d, e = "function" == typeof e ? e.call(b) : e, e / d } var e = {}, f = "undefined" != typeof window && window, g = "undefined" != typeof document && document, h = g && g.documentElement, i = f.matchMedia || f.msMatchMedia, j = i ? function (a) { return !!i.call(f, a).matches } : function () { return !1 }, k = e.viewportW = function () { var a = h.clientWidth, b = f.innerWidth; return b > a ? b : a }, l = e.viewportH = function () { var a = h.clientHeight, b = f.innerHeight; return b > a ? b : a }; return e.mq = j, e.matchMedia = i ? function () { return i.apply(f, arguments) } : function () { return {} }, e.viewport = a, e.scrollX = function () { return f.pageXOffset || h.scrollLeft }, e.scrollY = function () { return f.pageYOffset || h.scrollTop }, e.rectangle = c, e.aspect = d, e.inX = function (a, b) { var d = c(a, b); return !!d && d.right >= 0 && d.left <= k() }, e.inY = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.top <= l() }, e.inViewport = function (a, b) { var d = c(a, b); return !!d && d.bottom >= 0 && d.right >= 0 && d.top <= l() && d.left <= k() }, e });
jQuery.extend(verge);



/*Miniscroll http://miniscroll.rogerluizm.com.br*/
!function (t, s, i) { var e = { touchEvents: "ontouchstart" in s.documentElement }, h = function (t, s) { this.type = "", this.is = "static", this.target = this.getElement(t), this.container, this.tracker, this.thumb, this.thumb_delta = o(0, 0), this.thumb_pos = o(0, 0), this.touch = o(0, 0), this.settings = s, this.percent, this.keypos_thumb = o(0, 0), this.scrolling = !1, this.preventScrolling = !1, this.turnOffWheel = !0, this.initializing() }, o = function (t, s) { return this instanceof o ? (this.x = t ? t : 0, this.y = s ? s : 0, this) : new o(t, s) }; h[i].initializing = function () { this.buildScrollbar(), this.buildScrollbarTracker(), this.buildScrolbarThumb(), this.settings.isKeyEvent = "undefined" == typeof this.settings.isKeyEvent ? !0 : this.settings.isKeyEvent, this.turnOffWheel = "undefined" == typeof this.settings.turnOffWheel ? this.turnOffWheel : this.settings.turnOffWheel, this.settings.isKeyEvent && this.addKeyBoardEvent(), e.touchEvents ? this.setupTouchEvent() : this.setupEventHandler(); var s = this; t.setInterval(function () { s.update() }, 10) }, h[i].buildScrollbar = function () { var t = this.target.id ? this.target.id : this.target.className; this.container = this.create(this.target, "div", { "class": "miniscroll-container", id: "miniscroll-" + t }); var s = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).height, i = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).width, e = this.offset(this.target).left + (this.offset(this.target).width - this.settings.size), h = this.offset(this.target).top + (this.offset(this.target).height - this.settings.size); this.css(this.container, { position: "absolute", visibility: "hidden", width: ("x" === this.settings.axis ? i : this.settings.size) + "px", height: ("y" === this.settings.axis ? s : this.settings.size) + "px", top: ("y" === this.settings.axis ? this.offset(this.target).top : h) + "px", left: ("x" === this.settings.axis ? this.offset(this.target).left : e) + "px", zIndex: this.getZindex(this.target) }) }, h[i].buildScrollbarTracker = function () { this.tracker = this.create(this.container, "div", { "class": "miniscroll-tracker" }); var t = "x" === this.settings.axis ? this.offset(this.container).width : this.settings.size, s = "y" === this.settings.axis ? this.offset(this.container).height : this.settings.size; this.css(this.tracker, { width: t + "px", height: s + "px", backgroundColor: this.settings.trackerColor ? this.settings.trackerColor : "#067f41" }) }, h[i].buildScrolbarThumb = function () { this.thumb = this.create(this.container, "div", { "class": "miniscroll-thumb" }); var t = o(this.offset(this.container).width * this.offset(this.tracker).width / this.target.scrollWidth, this.offset(this.container).height * this.offset(this.tracker).height / this.target.scrollHeight), t = o(this.offset(this.container).width * this.offset(this.tracker).width / this.target.scrollWidth, this.offset(this.container).height * this.offset(this.tracker).height / this.target.scrollHeight), s = o(void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? t.x : this.settings.sizethumb, void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? t.y : this.settings.sizethumb); this.css(this.thumb, { position: "absolute", top: "0px", left: "0px", width: ("x" === this.settings.axis ? s.x : this.settings.size) + "px", height: ("y" === this.settings.axis ? s.y : this.settings.size) + "px", backgroundColor: this.settings.thumbColor ? this.settings.thumbColor : "#2AD47D" }) }, h[i].setupEventHandler = function () { this.bind(this.thumb, "mousedown", this.onScrollThumbPress), this.bind(this.tracker, "mousedown", this.onScrollTrackerPress), this.turnOffWheel && this.bind(this.target, "mousewheel", this.onScrollThumbWheel) }, h[i].setupTouchEvent = function () { this.bind(this.target, "touchstart", this.onScrollTouchStart), this.bind(this.target, "touchmove", this.onScrollTouchMove) }, h[i].updateContainerPosition = function () { this.is = this.getCss(this.target, "position"), "relative" === this.is || "absolute" === this.is ? "y" === this.settings.axis ? (this.container.style.top = this.target.scrollTop + "px", this.container.style.left = this.offset(this.target).width - this.settings.size + "px") : (this.container.style.top = this.offset(this.target).height - this.settings.size + "px", this.container.style.left = this.target.scrollLeft + "px") : "y" === this.settings.axis ? this.container.style.top = this.offset(this.target).top + "px" : this.container.style.left = this.offset(this.target).left + "px" }, h[i].setScrubPosition = function (t) { var s = this.offset(this.container).width, i = this.offset(this.container).height, e = this.offset(this.thumb).width, h = this.offset(this.thumb).height; this.thumb_pos = o(Math.round((s - e) * t), Math.round((i - h) * t)), "y" === this.settings.axis ? this.thumb.style.top = Math.round(this.thumb_pos.y) + "px" : this.thumb.style.left = Math.round(this.thumb_pos.x) + "px" }, h[i].addKeyBoardEvent = function () { this.target.setAttribute("tabindex", "-1"), this.css(this.target, { outline: "none" }), this.bind(this.target, "focus", function (t, i) { !("onkeydown" in i) && "onkeydown" in s && (i = s), this.bind(i, "keydown", function (t) { if (t.target == this.target) { var s, i = t.keyCode || t.which, e = { left: 37, up: 38, right: 39, down: 40 }, h = !0; switch (i) { case e.up: 0 !== this.percent && (this.keypos_thumb.y -= 10); break; case e.down: 1 !== this.percent && (this.keypos_thumb.y += 10); break; case e.left: 0 !== this.percent && (this.keypos_thumb.x -= 10); break; case e.right: 1 !== this.percent && (this.keypos_thumb.x += 10); break; default: h = !1 } "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.setScrubPosition(this.percent), this.target.scrollTop = this.keypos_thumb.y, s = [38, 40]) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.setScrubPosition(this.percent), this.target.scrollLeft = this.keypos_thumb.x, s = [37, 39]), this.preventScrolling = this.percent >= 1 && i == s[1] || this.percent <= 0 && i == s[0] ? !0 : !1, !this.preventScrolling && h && this.stopEvent(t), this.updateContainerPosition() } }) }), this.bind(this.target, "click", function (t, i) { if (t.target == this.target) { try { s.activeElement = i } catch (e) { } i.focus() } }) }, h[i].onScrollTouchStart = function (t) { var s = t.touches[0]; this.scrolling = !0, this.touch = o(s.pageX, s.pageY), this.bind(this.target, "touchend", this.onScrollTouchEnd) }, h[i].onScrollTouchMove = function (t) { var s = t.touches[0]; t.preventDefault(); var i = o(this.touch.x - s.pageX, this.touch.y - s.pageY); this.touch = o(s.pageX, s.pageY), "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.setScrubPosition(this.percent), this.target.scrollTop = this.target.scrollTop + i.y) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.setScrubPosition(this.percent), this.target.scrollLeft = this.target.scrollLeft + i.x), this.updateContainerPosition() }, h[i].onScrollTouchEnd = function () { this.scrolling = !1, this.unbind(this.target, "touchend", this.onScrollTouchEnd) }, h[i].onScrollThumbPress = function (i) { i = i ? i : t.event, this.stopEvent(i), this.scrolling = !0, this.thumb_delta = o(this.thumb_pos.x - this.mouse(i).x, this.thumb_pos.y - this.mouse(i).y), this.bind(s, "mousemove", this.onScrollThumbUpdate), this.bind(s, "mouseup", this.onScrollThumbRelease), this.updateContainerPosition() }, h[i].onScrollThumbUpdate = function (s) { return s = s ? s : t.event, this.stopEvent(s), this.scrolling ? (this.thumb_pos = o(this.mouse(s).x + this.thumb_delta.x, this.mouse(s).y + this.thumb_delta.y), this.thumb_pos = o(Math.max(0, Math.min(this.container.offsetWidth - this.thumb.offsetWidth, this.thumb_pos.x)), Math.max(0, Math.min(this.container.offsetHeight - this.thumb.offsetHeight, this.thumb_pos.y))), this.percent = o(this.thumb_pos.x / (this.container.offsetWidth - this.thumb.offsetWidth), this.thumb_pos.y / (this.container.offsetHeight - this.thumb.offsetHeight)), this.percent = o(Math.max(0, Math.min(1, this.percent.x)), Math.max(0, Math.min(1, this.percent.y))), "y" === this.settings.axis ? (this.thumb.style.top = Math.round(this.thumb_pos.y) + "px", this.target.scrollTop = Math.round((this.target.scrollHeight - this.target.offsetHeight) * this.percent.y)) : (this.thumb.style.left = Math.round(this.thumb_pos.x) + "px", this.target.scrollLeft = Math.round((this.target.scrollWidth - this.target.offsetWidth) * this.percent.x)), this.keypos_thumb = o(this.target.scrollLeft, this.target.scrollTop), void this.updateContainerPosition()) : !1 }, h[i].onScrollThumbWheel = function (i) { i = i ? i : t.event; var e, h = i || t.event, n = ([].slice.call(arguments, 1), 0), r = 0, a = 0; if (h.wheelDelta && (n = h.wheelDelta / 120), h.detail && (n = -h.detail / 3), a = n, r = n, h.deltaMode && (a = -h.deltaY / 3, r = -h.deltaX / 3), void 0 !== h.axis && h.axis === h.HORIZONTAL_AXIS && (a = 0, r = -1 * n), void 0 !== h.wheelDeltaY && (a = h.wheelDeltaY / 120), void 0 !== h.wheelDeltaX && (r = -1 * h.wheelDeltaX / 120), "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.setScrubPosition(this.percent), this.target.scrollTop = Math.round(this.target.scrollTop - 10 * a), e = a) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.setScrubPosition(this.percent), this.target.scrollLeft = Math.round(this.target.scrollLeft - 10 * r), e = r), this.preventScrolling = this.percent >= 1 && 0 > e || this.percent <= 0 && e > 0 || 0 == e ? !0 : !1, this.preventScrolling || this.stopEvent(i), this.keypos_thumb = o(this.target.scrollLeft, this.target.scrollTop), s.createEvent) { var l = s.createEvent("HTMLEvents"); l.initEvent("scroll", !0, !1), this.target.dispatchEvent(l) } else { var l = s.createEventObject(); this.target.fireEvent("onscroll", l) } this.updateContainerPosition() }, h[i].onScrollThumbRelease = function (i) { i = i ? i : t.event, this.stopEvent(i), this.scrolling = !1, this.unbind(s, "mousemove", this.onScrollThumbUpdate), this.unbind(s, "mouseup", this.onScrollThumbRelease) }, h[i].onScrollTrackerPress = function (t) { var s = this.mouse(t).y - this.offset(this.container).top; this.scrolling = !0, this.scrollTo(s) }, h[i].scrollTo = function (t) { var s = Math.max(0, Math.min(this.offset(this.target).height - this.offset(this.thumb).height, t)); "y" === this.settings.axis && (this.thumb_pos.y = s, this.thumb.style.top = Math.round(this.thumb_pos.y) + "px", this.target.scrollTop = s, this.scrolling = !1) }, h[i].update = function () { "y" === this.settings.axis ? this.target.scrollHeight === this.offset(this.target).height ? this.css(this.container, { visibility: "hidden" }) : this.css(this.container, { visibility: "visible" }) : this.target.scrollWidth === this.offset(this.target).width ? this.css(this.container, { visibility: "hidden" }) : this.css(this.container, { visibility: "visible" }); var t = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).height, s = this.settings.scrollbarSize ? this.settings.scrollbarSize : this.offset(this.target).width, i = this.offset(this.target).left + (this.offset(this.target).width - this.settings.size), e = this.offset(this.target).top + (this.offset(this.target).height - this.settings.size); this.css(this.container, { width: ("x" === this.settings.axis ? s : this.settings.size) + "px", height: ("y" === this.settings.axis ? t : this.settings.size) + "px", top: ("y" === this.settings.axis ? this.offset(this.target).top : e) + "px", left: ("x" === this.settings.axis ? this.offset(this.target).left : i) + "px" }); var h = "x" === this.settings.axis ? this.offset(this.container).width : this.settings.size, n = "y" === this.settings.axis ? this.offset(this.container).height : this.settings.size; this.css(this.tracker, { width: h + "px", height: n + "px" }); var r = o(this.offset(this.container).width * this.offset(this.tracker).width / this.target.scrollWidth, this.offset(this.container).height * this.offset(this.tracker).height / this.target.scrollHeight), a = o(void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? r.x : this.settings.sizethumb, void 0 === this.settings.sizethumb || "auto" === this.settings.sizethumb ? r.y : this.settings.sizethumb); this.css(this.thumb, { width: ("x" === this.settings.axis ? a.x : this.settings.size) + "px", height: ("y" === this.settings.axis ? a.y : this.settings.size) + "px" }), "y" === this.settings.axis ? (this.percent = this.target.scrollTop / (this.target.scrollHeight - this.target.offsetHeight), this.scrolling || this.setScrubPosition(this.percent)) : (this.percent = this.target.scrollLeft / (this.target.scrollWidth - this.target.offsetWidth), this.scrolling || this.setScrubPosition(this.percent)), this.updateContainerPosition() }, h[i].getElement = function (i) { var e; if (i === t || i === s || "body" === i || "body, html" === i) return s.body; if ("string" == typeof i || i instanceof String) { var e, h = i.replace(/^\s+/, "").replace(/\s+$/, ""); if (h.indexOf("#") > -1) { this.type = "id"; var o = h.split("#"); e = s.getElementById(o[1]) } if (h.indexOf(".") > -1) { this.type = "class"; for (var o = h.split("."), n = s.getElementsByTagName("*"), r = n.length, a = 0; r > a; a++) n[a].className && n[a].className.match(new RegExp("(^|\\s)" + o[1] + "(\\s|$)")) && (e = n[a]) } return e } return i }, h[i].create = function (t, i, e) { var h = s.createElement(i); if (e) { for (var o in e) e.hasOwnProperty(o) && h.setAttribute(o, e[o]); t.appendChild(h) } return h }, h[i].css = function (t, s) { for (var i in s) "opacity" === i ? (t.style.filter = "alpha(opacity=" + 100 * s[i] + ")", t.style.KhtmlOpacity = s[i], t.style.MozOpacity = s[i], t.style.opacity = s[i]) : t.style[i] = s[i] }, h[i].getCss = function (i, e) { var h; return h = t.getComputedStyle ? t.getComputedStyle(i).getPropertyValue(e) : s.defaultView && s.defaultView.getComputedStyle ? s.defaultView.getComputedStyle.getPropertyValue(e) : i.currentStyle ? i.currentStyle[e] : i.style[e] }, h[i].offset = function (t) { var s = t.offsetTop, i = t.offsetLeft, e = t.offsetHeight; "undefined" == typeof t.offsetHeight && (e = parseInt(this.getCss(t, "height"))); var h = t.offsetWidth; return "undefined" == typeof t.offsetWidth && (h = parseInt(this.getCss(t, "width"))), { top: s, left: i, width: h, height: e } }, h[i].getZindex = function (t) { for (var s = 0, i = 0, e = 0, h = t.getElementsByTagName("*"), o = 0; o < h.length; o++) e = this.getCss(h[o], "position"), h[o].style.position = "relative", i = Number(this.getCss(h[o], "z-index")), h[o].style.position = e, i > s && (s = i + 1); return s }, h[i].mouse = function (t) { var i = 0, e = 0; return t.pageX || t.pageY ? (i = t.pageX, e = t.pageY) : (t.clientX || t.clientY) && (i = t.clientX + s.body.scrollLeft + s.documentElement.scrollLeft, e = t.clientY + s.body.scrollTop + s.documentElement.scrollTop), { x: i, y: e } }, h[i].bind = function (t, i, e) { var h = "onwheel" in s.createElement("div") ? "wheel" : void 0 !== s.onmousewheel ? "mousewheel" : "DOMMouseScroll", o = this; t.addEventListener ? "mousewheel" === i ? t.addEventListener(h, function (t) { e.call(o, t, this) }, !1) : t.addEventListener(i, function (t) { e.call(o, t, this) }, !1) : t.attachEvent ? t.attachEvent("on" + i, function (t) { e.call(o, t, this) }) : t["on" + i] = function (t) { e.call(o, t, this) } }, h[i].unbind = function (t, i, e) { var h = "onwheel" in s.createElement("div") ? "wheel" : void 0 !== s.onmousewheel ? "mousewheel" : "DOMMouseScroll"; t.addEventListener ? "mousewheel" === i ? t.removeEventListener(h, function (t) { e.call(_this, t, this) }, !1) : t.removeEventListener(i, function (t) { e.call(_this, t, this) }, !1) : t.attachEvent ? t.detachEvent("on" + i, function (t) { e.call(_this, t, this) }) : t["on" + i] = null }, h[i].stopEvent = function (t) { t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, t.preventDefault ? t.preventDefault() : t.returnValue = !1 }, t.Miniscroll = h }(window, document, "prototype");

// moment.js
// version : 2.10.6
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e() }(this, function () {
    "use strict"; function t() { return Ni.apply(null, arguments) } function e(t) { Ni = t } function n(t) { return "[object Array]" === Object.prototype.toString.call(t) } function i(t) { return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t) } function s(t, e) { var n, i = []; for (n = 0; n < t.length; ++n) i.push(e(t[n], n)); return i } function r(t, e) { return Object.prototype.hasOwnProperty.call(t, e) } function a(t, e) { for (var n in e) r(e, n) && (t[n] = e[n]); return r(e, "toString") && (t.toString = e.toString), r(e, "valueOf") && (t.valueOf = e.valueOf), t } function o(t, e, n, i) { return Oe(t, e, n, i, !0).utc() } function u() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 } } function d(t) { return null == t._pf && (t._pf = u()), t._pf } function c(t) { if (null == t._isValid) { var e = d(t); t._isValid = !(isNaN(t._d.getTime()) || !(e.overflow < 0) || e.empty || e.invalidMonth || e.invalidWeekday || e.nullInput || e.invalidFormat || e.userInvalidated), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour) } return t._isValid } function l(t) { var e = o(0 / 0); return null != t ? a(d(e), t) : d(e).userInvalidated = !0, e } function h(t, e) { var n, i, s; if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject), "undefined" != typeof e._i && (t._i = e._i), "undefined" != typeof e._f && (t._f = e._f), "undefined" != typeof e._l && (t._l = e._l), "undefined" != typeof e._strict && (t._strict = e._strict), "undefined" != typeof e._tzm && (t._tzm = e._tzm), "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC), "undefined" != typeof e._offset && (t._offset = e._offset), "undefined" != typeof e._pf && (t._pf = d(e)), "undefined" != typeof e._locale && (t._locale = e._locale), qi.length > 0) for (n in qi) i = qi[n], s = e[i], "undefined" != typeof s && (t[i] = s); return t } function f(e) { h(this, e), this._d = new Date(null != e._d ? e._d.getTime() : 0 / 0), $i === !1 && ($i = !0, t.updateOffset(this), $i = !1) } function _(t) { return t instanceof f || null != t && null != t._isAMomentObject } function m(t) { return 0 > t ? Math.ceil(t) : Math.floor(t) } function y(t) { var e = +t, n = 0; return 0 !== e && isFinite(e) && (n = m(e)), n } function p(t, e, n) { var i, s = Math.min(t.length, e.length), r = Math.abs(t.length - e.length), a = 0; for (i = 0; s > i; i++) (n && t[i] !== e[i] || !n && y(t[i]) !== y(e[i])) && a++; return a + r } function M() { } function v(t) { return t ? t.toLowerCase().replace("_", "-") : t } function D(t) { for (var e, n, i, s, r = 0; r < t.length;) { for (s = v(t[r]).split("-"), e = s.length, n = v(t[r + 1]), n = n ? n.split("-") : null; e > 0;) { if (i = g(s.slice(0, e).join("-"))) return i; if (n && n.length >= e && p(s, n, !0) >= e - 1) break; e-- } r++ } return null } function g(t) { var e = null; if (!Ji[t] && "undefined" != typeof module && module && module.exports) try { e = Vi._abbr, require("./locale/" + t), Y(e) } catch (n) { } return Ji[t] } function Y(t, e) { var n; return t && (n = "undefined" == typeof e ? S(t) : w(t, e), n && (Vi = n)), Vi._abbr } function w(t, e) { return null !== e ? (e.abbr = t, Ji[t] = Ji[t] || new M, Ji[t].set(e), Y(t), Ji[t]) : (delete Ji[t], null) } function S(t) { var e; if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Vi; if (!n(t)) { if (e = g(t)) return e; t = [t] } return D(t) } function T(t, e) { var n = t.toLowerCase(); Ri[n] = Ri[n + "s"] = Ri[e] = t } function k(t) { return "string" == typeof t ? Ri[t] || Ri[t.toLowerCase()] : void 0 } function b(t) { var e, n, i = {}; for (n in t) r(t, n) && (e = k(n), e && (i[e] = t[n])); return i } function O(e, n) { return function (i) { return null != i ? (W(this, e, i), t.updateOffset(this, n), this) : L(this, e) } } function L(t, e) { return t._d["get" + (t._isUTC ? "UTC" : "") + e]() } function W(t, e, n) { return t._d["set" + (t._isUTC ? "UTC" : "") + e](n) } function U(t, e) { var n; if ("object" == typeof t) for (n in t) this.set(n, t[n]); else if (t = k(t), "function" == typeof this[t]) return this[t](e); return this } function P(t, e, n) { var i = "" + Math.abs(t), s = e - i.length, r = t >= 0; return (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i } function C(t, e, n, i) { var s = i; "string" == typeof i && (s = function () { return this[i]() }), t && (Ki[t] = s), e && (Ki[e[0]] = function () { return P(s.apply(this, arguments), e[1], e[2]) }), n && (Ki[n] = function () { return this.localeData().ordinal(s.apply(this, arguments), t) }) } function F(t) { return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "") } function G(t) { var e, n, i = t.match(Bi); for (e = 0, n = i.length; n > e; e++) i[e] = Ki[i[e]] ? Ki[i[e]] : F(i[e]); return function (s) { var r = ""; for (e = 0; n > e; e++) r += i[e] instanceof Function ? i[e].call(s, t) : i[e]; return r } } function H(t, e) { return t.isValid() ? (e = x(e, t.localeData()), Xi[e] = Xi[e] || G(e), Xi[e](t)) : t.localeData().invalidDate() } function x(t, e) { function n(t) { return e.longDateFormat(t) || t } var i = 5; for (Qi.lastIndex = 0; i >= 0 && Qi.test(t) ;) t = t.replace(Qi, n), Qi.lastIndex = 0, i -= 1; return t } function I(t) { return "function" == typeof t && "[object Function]" === Object.prototype.toString.call(t) } function A(t, e, n) { _s[t] = I(e) ? e : function (t) { return t && n ? n : e } } function z(t, e) { return r(_s, t) ? _s[t](e._strict, e._locale) : new RegExp(E(t)) } function E(t) { return t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, s) { return e || n || i || s }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } function Z(t, e) { var n, i = e; for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) { n[e] = y(t) }), n = 0; n < t.length; n++) ms[t[n]] = i } function j(t, e) { Z(t, function (t, n, i, s) { i._w = i._w || {}, e(t, i._w, i, s) }) } function N(t, e, n) { null != e && r(ms, t) && ms[t](e, n._a, n, t) } function V(t, e) { return new Date(Date.UTC(t, e + 1, 0)).getUTCDate() } function q(t) { return this._months[t.month()] } function $(t) { return this._monthsShort[t.month()] } function J(t, e, n) { var i, s, r; for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) { if (s = o([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i; if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i; if (!n && this._monthsParse[i].test(t)) return i } } function R(t, e) { var n; return "string" == typeof e && (e = t.localeData().monthsParse(e), "number" != typeof e) ? t : (n = Math.min(t.date(), V(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t) } function B(e) { return null != e ? (R(this, e), t.updateOffset(this, !0), this) : L(this, "Month") } function Q() { return V(this.year(), this.month()) } function X(t) { var e, n = t._a; return n && -2 === d(t).overflow && (e = n[ps] < 0 || n[ps] > 11 ? ps : n[Ms] < 1 || n[Ms] > V(n[ys], n[ps]) ? Ms : n[vs] < 0 || n[vs] > 24 || 24 === n[vs] && (0 !== n[Ds] || 0 !== n[gs] || 0 !== n[Ys]) ? vs : n[Ds] < 0 || n[Ds] > 59 ? Ds : n[gs] < 0 || n[gs] > 59 ? gs : n[Ys] < 0 || n[Ys] > 999 ? Ys : -1, d(t)._overflowDayOfYear && (ys > e || e > Ms) && (e = Ms), d(t).overflow = e), t } function K(e) { t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) } function te(t, e) { var n = !0; return a(function () { return n && (K(t + "\n" + (new Error).stack), n = !1), e.apply(this, arguments) }, e) } function ee(t, e) { Ts[t] || (K(e), Ts[t] = !0) } function ne(t) { var e, n, i = t._i, s = ks.exec(i); if (s) { for (d(t).iso = !0, e = 0, n = bs.length; n > e; e++) if (bs[e][1].exec(i)) { t._f = bs[e][0]; break } for (e = 0, n = Os.length; n > e; e++) if (Os[e][1].exec(i)) { t._f += (s[6] || " ") + Os[e][0]; break } i.match(ls) && (t._f += "Z"), ge(t) } else t._isValid = !1 } function ie(e) { var n = Ls.exec(e._i); return null !== n ? void (e._d = new Date(+n[1])) : (ne(e), void (e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e)))) } function se(t, e, n, i, s, r, a) { var o = new Date(t, e, n, i, s, r, a); return 1970 > t && o.setFullYear(t), o } function re(t) { var e = new Date(Date.UTC.apply(null, arguments)); return 1970 > t && e.setUTCFullYear(t), e } function ae(t) { return oe(t) ? 366 : 365 } function oe(t) { return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 } function ue() { return oe(this.year()) } function de(t, e, n) { var i, s = n - e, r = n - t.day(); return r > s && (r -= 7), s - 7 > r && (r += 7), i = Le(t).add(r, "d"), { week: Math.ceil(i.dayOfYear() / 7), year: i.year() } } function ce(t) { return de(t, this._week.dow, this._week.doy).week } function le() { return this._week.dow } function he() { return this._week.doy } function fe(t) { var e = this.localeData().week(this); return null == t ? e : this.add(7 * (t - e), "d") } function _e(t) { var e = de(this, 1, 4).week; return null == t ? e : this.add(7 * (t - e), "d") } function me(t, e, n, i, s) { var r, a = 6 + s - i, o = re(t, 0, 1 + a), u = o.getUTCDay(); return s > u && (u += 7), n = null != n ? 1 * n : s, r = 1 + a + 7 * (e - 1) - u + n, { year: r > 0 ? t : t - 1, dayOfYear: r > 0 ? r : ae(t - 1) + r } } function ye(t) { var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == t ? e : this.add(t - e, "d") } function pe(t, e, n) { return null != t ? t : null != e ? e : n } function Me(t) { var e = new Date; return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()] } function ve(t) { var e, n, i, s, r = []; if (!t._d) { for (i = Me(t), t._w && null == t._a[Ms] && null == t._a[ps] && De(t), t._dayOfYear && (s = pe(t._a[ys], i[ys]), t._dayOfYear > ae(s) && (d(t)._overflowDayOfYear = !0), n = re(s, 0, t._dayOfYear), t._a[ps] = n.getUTCMonth(), t._a[Ms] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = r[e] = i[e]; for (; 7 > e; e++) t._a[e] = r[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e]; 24 === t._a[vs] && 0 === t._a[Ds] && 0 === t._a[gs] && 0 === t._a[Ys] && (t._nextDay = !0, t._a[vs] = 0), t._d = (t._useUTC ? re : se).apply(null, r), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[vs] = 24) } } function De(t) { var e, n, i, s, r, a, o; e = t._w, null != e.GG || null != e.W || null != e.E ? (r = 1, a = 4, n = pe(e.GG, t._a[ys], de(Le(), 1, 4).year), i = pe(e.W, 1), s = pe(e.E, 1)) : (r = t._locale._week.dow, a = t._locale._week.doy, n = pe(e.gg, t._a[ys], de(Le(), r, a).year), i = pe(e.w, 1), null != e.d ? (s = e.d, r > s && ++i) : s = null != e.e ? e.e + r : r), o = me(n, i, s, a, r), t._a[ys] = o.year, t._dayOfYear = o.dayOfYear } function ge(e) { if (e._f === t.ISO_8601) return void ne(e); e._a = [], d(e).empty = !0; var n, i, s, r, a, o = "" + e._i, u = o.length, c = 0; for (s = x(e._f, e._locale).match(Bi) || [], n = 0; n < s.length; n++) r = s[n], i = (o.match(z(r, e)) || [])[0], i && (a = o.substr(0, o.indexOf(i)), a.length > 0 && d(e).unusedInput.push(a), o = o.slice(o.indexOf(i) + i.length), c += i.length), Ki[r] ? (i ? d(e).empty = !1 : d(e).unusedTokens.push(r), N(r, i, e)) : e._strict && !i && d(e).unusedTokens.push(r); d(e).charsLeftOver = u - c, o.length > 0 && d(e).unusedInput.push(o), d(e).bigHour === !0 && e._a[vs] <= 12 && e._a[vs] > 0 && (d(e).bigHour = void 0), e._a[vs] = Ye(e._locale, e._a[vs], e._meridiem), ve(e), X(e) } function Ye(t, e, n) { var i; return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e } function we(t) { var e, n, i, s, r; if (0 === t._f.length) return d(t).invalidFormat = !0, void (t._d = new Date(0 / 0)); for (s = 0; s < t._f.length; s++) r = 0, e = h({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], ge(e), c(e) && (r += d(e).charsLeftOver, r += 10 * d(e).unusedTokens.length, d(e).score = r, (null == i || i > r) && (i = r, n = e)); a(t, n || e) } function Se(t) { if (!t._d) { var e = b(t._i); t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], ve(t) } } function Te(t) { var e = new f(X(ke(t))); return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e } function ke(t) { var e = t._i, s = t._f; return t._locale = t._locale || S(t._l), null === e || void 0 === s && "" === e ? l({ nullInput: !0 }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), _(e) ? new f(X(e)) : (n(s) ? we(t) : s ? ge(t) : i(e) ? t._d = e : be(t), t)) } function be(e) { var r = e._i; void 0 === r ? e._d = new Date : i(r) ? e._d = new Date(+r) : "string" == typeof r ? ie(e) : n(r) ? (e._a = s(r.slice(0), function (t) { return parseInt(t, 10) }), ve(e)) : "object" == typeof r ? Se(e) : "number" == typeof r ? e._d = new Date(r) : t.createFromInputFallback(e) } function Oe(t, e, n, i, s) { var r = {}; return "boolean" == typeof n && (i = n, n = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = s, r._l = n, r._i = t, r._f = e, r._strict = i, Te(r) } function Le(t, e, n, i) { return Oe(t, e, n, i, !1) } function We(t, e) { var i, s; if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return Le(); for (i = e[0], s = 1; s < e.length; ++s) (!e[s].isValid() || e[s][t](i)) && (i = e[s]); return i } function Ue() { var t = [].slice.call(arguments, 0); return We("isBefore", t) } function Pe() { var t = [].slice.call(arguments, 0); return We("isAfter", t) } function Ce(t) { var e = b(t), n = e.year || 0, i = e.quarter || 0, s = e.month || 0, r = e.week || 0, a = e.day || 0, o = e.hour || 0, u = e.minute || 0, d = e.second || 0, c = e.millisecond || 0; this._milliseconds = +c + 1e3 * d + 6e4 * u + 36e5 * o, this._days = +a + 7 * r, this._months = +s + 3 * i + 12 * n, this._data = {}, this._locale = S(), this._bubble() } function Fe(t) { return t instanceof Ce } function Ge(t, e) { C(t, 0, 0, function () { var t = this.utcOffset(), n = "+"; return 0 > t && (t = -t, n = "-"), n + P(~~(t / 60), 2) + e + P(~~t % 60, 2) }) } function He(t) { var e = (t || "").match(ls) || [], n = e[e.length - 1] || [], i = (n + "").match(Fs) || ["-", 0, 0], s = +(60 * i[1]) + y(i[2]); return "+" === i[0] ? s : -s } function xe(e, n) { var s, r; return n._isUTC ? (s = n.clone(), r = (_(e) || i(e) ? +e : +Le(e)) - +s, s._d.setTime(+s._d + r), t.updateOffset(s, !1), s) : Le(e).local() } function Ie(t) { return 15 * -Math.round(t._d.getTimezoneOffset() / 15) } function Ae(e, n) { var i, s = this._offset || 0; return null != e ? ("string" == typeof e && (e = He(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = Ie(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), s !== e && (!n || this._changeInProgress ? en(this, Be(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : Ie(this) } function ze(t, e) { return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset() } function Ee(t) { return this.utcOffset(0, t) } function Ze(t) { return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ie(this), "m")), this } function je() { return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(He(this._i)), this } function Ne(t) { return t = t ? Le(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0 } function Ve() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() } function qe() { if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted; var t = {}; if (h(t, this), t = ke(t), t._a) { var e = t._isUTC ? o(t._a) : Le(t._a); this._isDSTShifted = this.isValid() && p(t._a, e.toArray()) > 0 } else this._isDSTShifted = !1; return this._isDSTShifted } function $e() { return !this._isUTC } function Je() { return this._isUTC } function Re() { return this._isUTC && 0 === this._offset } function Be(t, e) { var n, i, s, a = t, o = null; return Fe(t) ? a = { ms: t._milliseconds, d: t._days, M: t._months } : "number" == typeof t ? (a = {}, e ? a[e] = t : a.milliseconds = t) : (o = Gs.exec(t)) ? (n = "-" === o[1] ? -1 : 1, a = { y: 0, d: y(o[Ms]) * n, h: y(o[vs]) * n, m: y(o[Ds]) * n, s: y(o[gs]) * n, ms: y(o[Ys]) * n }) : (o = Hs.exec(t)) ? (n = "-" === o[1] ? -1 : 1, a = { y: Qe(o[2], n), M: Qe(o[3], n), d: Qe(o[4], n), h: Qe(o[5], n), m: Qe(o[6], n), s: Qe(o[7], n), w: Qe(o[8], n) }) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (s = Ke(Le(a.from), Le(a.to)), a = {}, a.ms = s.milliseconds, a.M = s.months), i = new Ce(a), Fe(t) && r(t, "_locale") && (i._locale = t._locale), i } function Qe(t, e) { var n = t && parseFloat(t.replace(",", ".")); return (isNaN(n) ? 0 : n) * e } function Xe(t, e) { var n = { milliseconds: 0, months: 0 }; return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n } function Ke(t, e) { var n; return e = xe(e, t), t.isBefore(e) ? n = Xe(t, e) : (n = Xe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n } function tn(t, e) { return function (n, i) { var s, r; return null === i || isNaN(+i) || (ee(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), r = n, n = i, i = r), n = "string" == typeof n ? +n : n, s = Be(n, i), en(this, s, t), this } } function en(e, n, i, s) { var r = n._milliseconds, a = n._days, o = n._months; s = null == s ? !0 : s, r && e._d.setTime(+e._d + r * i), a && W(e, "Date", L(e, "Date") + a * i), o && R(e, L(e, "Month") + o * i), s && t.updateOffset(e, a || o) } function nn(t, e) { var n = t || Le(), i = xe(n, this).startOf("day"), s = this.diff(i, "days", !0), r = -6 > s ? "sameElse" : -1 > s ? "lastWeek" : 0 > s ? "lastDay" : 1 > s ? "sameDay" : 2 > s ? "nextDay" : 7 > s ? "nextWeek" : "sameElse"; return this.format(e && e[r] || this.localeData().calendar(r, this, Le(n))) } function sn() { return new f(this) } function rn(t, e) { var n; return e = k("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = _(t) ? t : Le(t), +this > +t) : (n = _(t) ? +t : +Le(t), n < +this.clone().startOf(e)) } function an(t, e) { var n; return e = k("undefined" != typeof e ? e : "millisecond"), "millisecond" === e ? (t = _(t) ? t : Le(t), +t > +this) : (n = _(t) ? +t : +Le(t), +this.clone().endOf(e) < n) } function on(t, e, n) { return this.isAfter(t, n) && this.isBefore(e, n) } function un(t, e) { var n; return e = k(e || "millisecond"), "millisecond" === e ? (t = _(t) ? t : Le(t), +this === +t) : (n = +Le(t), +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e)) } function dn(t, e, n) { var i, s, r = xe(t, this), a = 6e4 * (r.utcOffset() - this.utcOffset()); return e = k(e), "year" === e || "month" === e || "quarter" === e ? (s = cn(this, r), "quarter" === e ? s /= 3 : "year" === e && (s /= 12)) : (i = this - r, s = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - a) / 864e5 : "week" === e ? (i - a) / 6048e5 : i), n ? s : m(s) } function cn(t, e) { var n, i, s = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(s, "months"); return 0 > e - r ? (n = t.clone().add(s - 1, "months"), i = (e - r) / (r - n)) : (n = t.clone().add(s + 1, "months"), i = (e - r) / (n - r)), -(s + i) } function ln() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") } function hn() { var t = this.clone().utc(); return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : H(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : H(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") } function fn(e) { var n = H(this, e || t.defaultFormat); return this.localeData().postformat(n) } function _n(t, e) { return this.isValid() ? Be({ to: this, from: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() } function mn(t) { return this.from(Le(), t) } function yn(t, e) { return this.isValid() ? Be({ from: this, to: t }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate() } function pn(t) { return this.to(Le(), t) } function Mn(t) { var e; return void 0 === t ? this._locale._abbr : (e = S(t), null != e && (this._locale = e), this) } function vn() { return this._locale } function Dn(t) { switch (t = k(t)) { case "year": this.month(0); case "quarter": case "month": this.date(1); case "week": case "isoWeek": case "day": this.hours(0); case "hour": this.minutes(0); case "minute": this.seconds(0); case "second": this.milliseconds(0) } return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this } function gn(t) { return t = k(t), void 0 === t || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms") } function Yn() { return +this._d - 6e4 * (this._offset || 0) } function wn() { return Math.floor(+this / 1e3) } function Sn() { return this._offset ? new Date(+this) : this._d } function Tn() { var t = this; return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()] } function kn() { var t = this; return { years: t.year(), months: t.month(), date: t.date(), hours: t.hours(), minutes: t.minutes(), seconds: t.seconds(), milliseconds: t.milliseconds() } } function bn() { return c(this) } function On() { return a({}, d(this)) } function Ln() { return d(this).overflow } function Wn(t, e) { C(0, [t, t.length], 0, e) } function Un(t, e, n) { return de(Le([t, 11, 31 + e - n]), e, n).week } function Pn(t) { var e = de(this, this.localeData()._week.dow, this.localeData()._week.doy).year; return null == t ? e : this.add(t - e, "y") } function Cn(t) { var e = de(this, 1, 4).year; return null == t ? e : this.add(t - e, "y") } function Fn() { return Un(this.year(), 1, 4) } function Gn() { var t = this.localeData()._week; return Un(this.year(), t.dow, t.doy) } function Hn(t) { return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3) } function xn(t, e) { return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10) } function In(t) { return this._weekdays[t.day()] } function An(t) { return this._weekdaysShort[t.day()] } function zn(t) { return this._weekdaysMin[t.day()] } function En(t) { var e, n, i; for (this._weekdaysParse = this._weekdaysParse || [], e = 0; 7 > e; e++) if (this._weekdaysParse[e] || (n = Le([2e3, 1]).day(e), i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(i.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e } function Zn(t) { var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != t ? (t = xn(t, this.localeData()), this.add(t - e, "d")) : e } function jn(t) { var e = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == t ? e : this.add(t - e, "d") } function Nn(t) { return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7) } function Vn(t, e) { C(t, 0, 0, function () { return this.localeData().meridiem(this.hours(), this.minutes(), e) }) } function qn(t, e) { return e._meridiemParse } function $n(t) { return "p" === (t + "").toLowerCase().charAt(0) } function Jn(t, e, n) { return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" } function Rn(t, e) { e[Ys] = y(1e3 * ("0." + t)) } function Bn() { return this._isUTC ? "UTC" : "" } function Qn() { return this._isUTC ? "Coordinated Universal Time" : "" } function Xn(t) { return Le(1e3 * t) } function Kn() { return Le.apply(null, arguments).parseZone() } function ti(t, e, n) { var i = this._calendar[t]; return "function" == typeof i ? i.call(e, n) : i } function ei(t) { var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()]; return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) { return t.slice(1) }), this._longDateFormat[t]) } function ni() { return this._invalidDate } function ii(t) { return this._ordinal.replace("%d", t) } function si(t) { return t } function ri(t, e, n, i) { var s = this._relativeTime[n]; return "function" == typeof s ? s(t, e, n, i) : s.replace(/%d/i, t) } function ai(t, e) { var n = this._relativeTime[t > 0 ? "future" : "past"]; return "function" == typeof n ? n(e) : n.replace(/%s/i, e) } function oi(t) { var e, n; for (n in t) e = t[n], "function" == typeof e ? this[n] = e : this["_" + n] = e; this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source) } function ui(t, e, n, i) { var s = S(), r = o().set(i, e); return s[n](r, t) } function di(t, e, n, i, s) { if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return ui(t, e, n, s); var r, a = []; for (r = 0; i > r; r++) a[r] = ui(t, r, n, s); return a } function ci(t, e) { return di(t, e, "months", 12, "month") } function li(t, e) { return di(t, e, "monthsShort", 12, "month") } function hi(t, e) { return di(t, e, "weekdays", 7, "day") } function fi(t, e) { return di(t, e, "weekdaysShort", 7, "day") } function _i(t, e) { return di(t, e, "weekdaysMin", 7, "day") } function mi() { var t = this._data; return this._milliseconds = rr(this._milliseconds), this._days = rr(this._days), this._months = rr(this._months), t.milliseconds = rr(t.milliseconds), t.seconds = rr(t.seconds), t.minutes = rr(t.minutes), t.hours = rr(t.hours), t.months = rr(t.months), t.years = rr(t.years), this } function yi(t, e, n, i) { var s = Be(e, n); return t._milliseconds += i * s._milliseconds, t._days += i * s._days, t._months += i * s._months, t._bubble() } function pi(t, e) { return yi(this, t, e, 1) } function Mi(t, e) { return yi(this, t, e, -1) } function vi(t) { return 0 > t ? Math.floor(t) : Math.ceil(t) } function Di() { var t, e, n, i, s, r = this._milliseconds, a = this._days, o = this._months, u = this._data; return r >= 0 && a >= 0 && o >= 0 || 0 >= r && 0 >= a && 0 >= o || (r += 864e5 * vi(Yi(o) + a), a = 0, o = 0), u.milliseconds = r % 1e3, t = m(r / 1e3), u.seconds = t % 60, e = m(t / 60), u.minutes = e % 60, n = m(e / 60), u.hours = n % 24, a += m(n / 24), s = m(gi(a)), o += s, a -= vi(Yi(s)), i = m(o / 12), o %= 12, u.days = a, u.months = o, u.years = i, this } function gi(t) { return 4800 * t / 146097 } function Yi(t) { return 146097 * t / 4800 } function wi(t) { var e, n, i = this._milliseconds; if (t = k(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + gi(e), "month" === t ? n : n / 12; switch (e = this._days + Math.round(Yi(this._months)), t) { case "week": return e / 7 + i / 6048e5; case "day": return e + i / 864e5; case "hour": return 24 * e + i / 36e5; case "minute": return 1440 * e + i / 6e4; case "second": return 86400 * e + i / 1e3; case "millisecond": return Math.floor(864e5 * e) + i; default: throw new Error("Unknown unit " + t) } } function Si() { return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12) } function Ti(t) { return function () { return this.as(t) } } function ki(t) { return t = k(t), this[t + "s"]() } function bi(t) { return function () { return this._data[t] } } function Oi() { return m(this.days() / 7) } function Li(t, e, n, i, s) { return s.relativeTime(e || 1, !!n, t, i) } function Wi(t, e, n) { var i = Be(t).abs(), s = gr(i.as("s")), r = gr(i.as("m")), a = gr(i.as("h")), o = gr(i.as("d")), u = gr(i.as("M")), d = gr(i.as("y")), c = s < Yr.s && ["s", s] || 1 === r && ["m"] || r < Yr.m && ["mm", r] || 1 === a && ["h"] || a < Yr.h && ["hh", a] || 1 === o && ["d"] || o < Yr.d && ["dd", o] || 1 === u && ["M"] || u < Yr.M && ["MM", u] || 1 === d && ["y"] || ["yy", d]; return c[2] = e, c[3] = +t > 0, c[4] = n, Li.apply(null, c) } function Ui(t, e) { return void 0 === Yr[t] ? !1 : void 0 === e ? Yr[t] : (Yr[t] = e, !0) } function Pi(t) { var e = this.localeData(), n = Wi(this, !t, e); return t && (n = e.pastFuture(+this, n)), e.postformat(n) } function Ci() { var t, e, n, i = wr(this._milliseconds) / 1e3, s = wr(this._days), r = wr(this._months); t = m(i / 60), e = m(t / 60), i %= 60, t %= 60, n = m(r / 12), r %= 12; var a = n, o = r, u = s, d = e, c = t, l = i, h = this.asSeconds(); return h ? (0 > h ? "-" : "") + "P" + (a ? a + "Y" : "") + (o ? o + "M" : "") + (u ? u + "D" : "") + (d || c || l ? "T" : "") + (d ? d + "H" : "") + (c ? c + "M" : "") + (l ? l + "S" : "") : "P0D" } function Fi(t, e) { var n = t.split("_"); return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2] } function Gi(t, e, n) { var i = { mm: e ? "������_������_�����" : "������_������_�����", hh: "���_����_�����", dd: "����_���_����", MM: "�����_������_�������", yy: "���_����_���" }; return "m" === n ? e ? "������" : "������" : t + " " + Fi(i[n], +t) } function Hi(t, e) { var n = { nominative: "������_�������_����_������_���_����_����_������_��������_�������_������_�������".split("_"), accusative: "������_�������_�����_������_���_����_����_�������_��������_�������_������_�������".split("_") }, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative"; return n[i][t.month()] } function xi(t, e) { var n = { nominative: "���_���_����_���_���_����_����_���_���_���_���_���".split("_"), accusative: "���_���_���_���_���_����_����_���_���_���_���_���".split("_") }, i = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? "accusative" : "nominative"; return n[i][t.month()] } function Ii(t, e) { var n = { nominative: "�����������_�����������_�������_�����_�������_�������_�������".split("_"), accusative: "�����������_�����������_�������_�����_�������_�������_�������".split("_") }, i = /\[ ?[��] ?(?:�������|���������|���)? ?\] ?dddd/.test(e) ? "accusative" : "nominative"; return n[i][t.day()] } function Ai(t, e) { var n = t.split("_"); return e % 10 === 1 && e % 100 !== 11 ? n[0] : e % 10 >= 2 && 4 >= e % 10 && (10 > e % 100 || e % 100 >= 20) ? n[1] : n[2] } function zi(t, e, n) { var i = { mm: "�������_�������_������", hh: "������_������_�����", dd: "����_���_����", MM: "������_������_�������", yy: "���_����_�����" }; return "m" === n ? e ? "�������" : "�������" : "h" === n ? e ? "������" : "������" : t + " " + Ai(i[n], +t) } function Ei(t, e) { var n = { nominative: "������_�����_��������_�������_�������_�������_������_�������_��������_�������_��������_�������".split("_"), accusative: "�����_������_�������_������_������_������_�����_������_�������_������_���������_������".split("_") }, i = /D[oD]? *MMMM?/.test(e) ? "accusative" : "nominative"; return n[i][t.month()] } function Zi(t, e) { var n = { nominative: "������_���������_��������_������_������_��������_������".split("_"), accusative: "������_���������_��������_������_������_��������_������".split("_"), genitive: "������_���������_��������_������_��������_��������_������".split("_") }, i = /(\[[����]\]) ?dddd/.test(e) ? "accusative" : /\[?(?:�������|���������)? ?\] ?dddd/.test(e) ? "genitive" : "nominative"; return n[i][t.day()] } function ji(t) { return function () { return t + "�" + (11 === this.hours() ? "�" : "") + "] LT" } } var Ni, Vi, qi = t.momentProperties = [], $i = !1, Ji = {}, Ri = {}, Bi = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Qi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Xi = {}, Ki = {}, ts = /\d/, es = /\d\d/, ns = /\d{3}/, is = /\d{4}/, ss = /[+-]?\d{6}/, rs = /\d\d?/, as = /\d{1,3}/, os = /\d{1,4}/, us = /[+-]?\d{1,6}/, ds = /\d+/, cs = /[+-]?\d+/, ls = /Z|[+-]\d\d:?\d\d/gi, hs = /[+-]?\d+(\.\d{1,3})?/, fs = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, _s = {}, ms = {}, ys = 0, ps = 1, Ms = 2, vs = 3, Ds = 4, gs = 5, Ys = 6; C("M", ["MM", 2], "Mo", function () { return this.month() + 1 }), C("MMM", 0, 0, function (t) { return this.localeData().monthsShort(this, t) }), C("MMMM", 0, 0, function (t) { return this.localeData().months(this, t) }), T("month", "M"), A("M", rs), A("MM", rs, es), A("MMM", fs), A("MMMM", fs), Z(["M", "MM"], function (t, e) { e[ps] = y(t) - 1 }), Z(["MMM", "MMMM"], function (t, e, n, i) { var s = n._locale.monthsParse(t, i, n._strict); null != s ? e[ps] = s : d(n).invalidMonth = t }); var ws = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Ss = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ts = {}; t.suppressDeprecationWarnings = !1; var ks = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, bs = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], Os = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], Ls = /^\/?Date\((\-?\d+)/i; t.createFromInputFallback = te("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) { t._d = new Date(t._i + (t._useUTC ? " UTC" : "")) }), C(0, ["YY", 2], 0, function () { return this.year() % 100 }), C(0, ["YYYY", 4], 0, "year"), C(0, ["YYYYY", 5], 0, "year"), C(0, ["YYYYYY", 6, !0], 0, "year"), T("year", "y"), A("Y", cs), A("YY", rs, es), A("YYYY", os, is), A("YYYYY", us, ss), A("YYYYYY", us, ss), Z(["YYYYY", "YYYYYY"], ys), Z("YYYY", function (e, n) { n[ys] = 2 === e.length ? t.parseTwoDigitYear(e) : y(e) }), Z("YY", function (e, n) { n[ys] = t.parseTwoDigitYear(e) }), t.parseTwoDigitYear = function (t) { return y(t) + (y(t) > 68 ? 1900 : 2e3) }; var Ws = O("FullYear", !1); C("w", ["ww", 2], "wo", "week"), C("W", ["WW", 2], "Wo", "isoWeek"), T("week", "w"), T("isoWeek", "W"), A("w", rs), A("ww", rs, es), A("W", rs), A("WW", rs, es), j(["w", "ww", "W", "WW"], function (t, e, n, i) { e[i.substr(0, 1)] = y(t) }); var Us = { dow: 0, doy: 6 }; C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), T("dayOfYear", "DDD"), A("DDD", as), A("DDDD", ns), Z(["DDD", "DDDD"], function (t, e, n) { n._dayOfYear = y(t) }), t.ISO_8601 = function () { }; var Ps = te("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () { var t = Le.apply(null, arguments); return this > t ? this : t }), Cs = te("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () { var t = Le.apply(null, arguments); return t > this ? this : t }); Ge("Z", ":"), Ge("ZZ", ""), A("Z", ls), A("ZZ", ls), Z(["Z", "ZZ"], function (t, e, n) { n._useUTC = !0, n._tzm = He(t) }); var Fs = /([\+\-]|\d\d)/gi; t.updateOffset = function () { }; var Gs = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Hs = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/; Be.fn = Ce.prototype; var xs = tn(1, "add"), Is = tn(-1, "subtract"); t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"; var As = te("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) { return void 0 === t ? this.localeData() : this.locale(t) }); C(0, ["gg", 2], 0, function () { return this.weekYear() % 100 }), C(0, ["GG", 2], 0, function () { return this.isoWeekYear() % 100 }), Wn("gggg", "weekYear"), Wn("ggggg", "weekYear"), Wn("GGGG", "isoWeekYear"), Wn("GGGGG", "isoWeekYear"), T("weekYear", "gg"), T("isoWeekYear", "GG"), A("G", cs), A("g", cs), A("GG", rs, es), A("gg", rs, es), A("GGGG", os, is), A("gggg", os, is), A("GGGGG", us, ss), A("ggggg", us, ss), j(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) { e[i.substr(0, 2)] = y(t) }), j(["gg", "GG"], function (e, n, i, s) { n[s] = t.parseTwoDigitYear(e) }), C("Q", 0, 0, "quarter"), T("quarter", "Q"), A("Q", ts), Z("Q", function (t, e) { e[ps] = 3 * (y(t) - 1) }), C("D", ["DD", 2], "Do", "date"), T("date", "D"), A("D", rs), A("DD", rs, es), A("Do", function (t, e) { return t ? e._ordinalParse : e._ordinalParseLenient }), Z(["D", "DD"], Ms), Z("Do", function (t, e) { e[Ms] = y(t.match(rs)[0], 10) }); var zs = O("Date", !0); C("d", 0, "do", "day"), C("dd", 0, 0, function (t) { return this.localeData().weekdaysMin(this, t) }), C("ddd", 0, 0, function (t) { return this.localeData().weekdaysShort(this, t) }), C("dddd", 0, 0, function (t) { return this.localeData().weekdays(this, t) }), C("e", 0, 0, "weekday"), C("E", 0, 0, "isoWeekday"), T("day", "d"), T("weekday", "e"), T("isoWeekday", "E"), A("d", rs), A("e", rs), A("E", rs), A("dd", fs), A("ddd", fs), A("dddd", fs), j(["dd", "ddd", "dddd"], function (t, e, n) {
        var i = n._locale.weekdaysParse(t);
        null != i ? e.d = i : d(n).invalidWeekday = t
    }), j(["d", "e", "E"], function (t, e, n, i) { e[i] = y(t) }); var Es = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Zs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), js = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"); C("H", ["HH", 2], 0, "hour"), C("h", ["hh", 2], 0, function () { return this.hours() % 12 || 12 }), Vn("a", !0), Vn("A", !1), T("hour", "h"), A("a", qn), A("A", qn), A("H", rs), A("h", rs), A("HH", rs, es), A("hh", rs, es), Z(["H", "HH"], vs), Z(["a", "A"], function (t, e, n) { n._isPm = n._locale.isPM(t), n._meridiem = t }), Z(["h", "hh"], function (t, e, n) { e[vs] = y(t), d(n).bigHour = !0 }); var Ns = /[ap]\.?m?\.?/i, Vs = O("Hours", !0); C("m", ["mm", 2], 0, "minute"), T("minute", "m"), A("m", rs), A("mm", rs, es), Z(["m", "mm"], Ds); var qs = O("Minutes", !1); C("s", ["ss", 2], 0, "second"), T("second", "s"), A("s", rs), A("ss", rs, es), Z(["s", "ss"], gs); var $s = O("Seconds", !1); C("S", 0, 0, function () { return ~~(this.millisecond() / 100) }), C(0, ["SS", 2], 0, function () { return ~~(this.millisecond() / 10) }), C(0, ["SSS", 3], 0, "millisecond"), C(0, ["SSSS", 4], 0, function () { return 10 * this.millisecond() }), C(0, ["SSSSS", 5], 0, function () { return 100 * this.millisecond() }), C(0, ["SSSSSS", 6], 0, function () { return 1e3 * this.millisecond() }), C(0, ["SSSSSSS", 7], 0, function () { return 1e4 * this.millisecond() }), C(0, ["SSSSSSSS", 8], 0, function () { return 1e5 * this.millisecond() }), C(0, ["SSSSSSSSS", 9], 0, function () { return 1e6 * this.millisecond() }), T("millisecond", "ms"), A("S", as, ts), A("SS", as, es), A("SSS", as, ns); var Js; for (Js = "SSSS"; Js.length <= 9; Js += "S") A(Js, ds); for (Js = "S"; Js.length <= 9; Js += "S") Z(Js, Rn); var Rs = O("Milliseconds", !1); C("z", 0, 0, "zoneAbbr"), C("zz", 0, 0, "zoneName"); var Bs = f.prototype; Bs.add = xs, Bs.calendar = nn, Bs.clone = sn, Bs.diff = dn, Bs.endOf = gn, Bs.format = fn, Bs.from = _n, Bs.fromNow = mn, Bs.to = yn, Bs.toNow = pn, Bs.get = U, Bs.invalidAt = Ln, Bs.isAfter = rn, Bs.isBefore = an, Bs.isBetween = on, Bs.isSame = un, Bs.isValid = bn, Bs.lang = As, Bs.locale = Mn, Bs.localeData = vn, Bs.max = Cs, Bs.min = Ps, Bs.parsingFlags = On, Bs.set = U, Bs.startOf = Dn, Bs.subtract = Is, Bs.toArray = Tn, Bs.toObject = kn, Bs.toDate = Sn, Bs.toISOString = hn, Bs.toJSON = hn, Bs.toString = ln, Bs.unix = wn, Bs.valueOf = Yn, Bs.year = Ws, Bs.isLeapYear = ue, Bs.weekYear = Pn, Bs.isoWeekYear = Cn, Bs.quarter = Bs.quarters = Hn, Bs.month = B, Bs.daysInMonth = Q, Bs.week = Bs.weeks = fe, Bs.isoWeek = Bs.isoWeeks = _e, Bs.weeksInYear = Gn, Bs.isoWeeksInYear = Fn, Bs.date = zs, Bs.day = Bs.days = Zn, Bs.weekday = jn, Bs.isoWeekday = Nn, Bs.dayOfYear = ye, Bs.hour = Bs.hours = Vs, Bs.minute = Bs.minutes = qs, Bs.second = Bs.seconds = $s, Bs.millisecond = Bs.milliseconds = Rs, Bs.utcOffset = Ae, Bs.utc = Ee, Bs.local = Ze, Bs.parseZone = je, Bs.hasAlignedHourOffset = Ne, Bs.isDST = Ve, Bs.isDSTShifted = qe, Bs.isLocal = $e, Bs.isUtcOffset = Je, Bs.isUtc = Re, Bs.isUTC = Re, Bs.zoneAbbr = Bn, Bs.zoneName = Qn, Bs.dates = te("dates accessor is deprecated. Use date instead.", zs), Bs.months = te("months accessor is deprecated. Use month instead", B), Bs.years = te("years accessor is deprecated. Use year instead", Ws), Bs.zone = te("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", ze); var Qs = Bs, Xs = { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, Ks = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, tr = "Invalid date", er = "%d", nr = /\d{1,2}/, ir = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, sr = M.prototype; sr._calendar = Xs, sr.calendar = ti, sr._longDateFormat = Ks, sr.longDateFormat = ei, sr._invalidDate = tr, sr.invalidDate = ni, sr._ordinal = er, sr.ordinal = ii, sr._ordinalParse = nr, sr.preparse = si, sr.postformat = si, sr._relativeTime = ir, sr.relativeTime = ri, sr.pastFuture = ai, sr.set = oi, sr.months = q, sr._months = ws, sr.monthsShort = $, sr._monthsShort = Ss, sr.monthsParse = J, sr.week = ce, sr._week = Us, sr.firstDayOfYear = he, sr.firstDayOfWeek = le, sr.weekdays = In, sr._weekdays = Es, sr.weekdaysMin = zn, sr._weekdaysMin = js, sr.weekdaysShort = An, sr._weekdaysShort = Zs, sr.weekdaysParse = En, sr.isPM = $n, sr._meridiemParse = Ns, sr.meridiem = Jn, Y("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (t) { var e = t % 10, n = 1 === y(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th"; return t + n } }), t.lang = te("moment.lang is deprecated. Use moment.locale instead.", Y), t.langData = te("moment.langData is deprecated. Use moment.localeData instead.", S); var rr = Math.abs, ar = Ti("ms"), or = Ti("s"), ur = Ti("m"), dr = Ti("h"), cr = Ti("d"), lr = Ti("w"), hr = Ti("M"), fr = Ti("y"), _r = bi("milliseconds"), mr = bi("seconds"), yr = bi("minutes"), pr = bi("hours"), Mr = bi("days"), vr = bi("months"), Dr = bi("years"), gr = Math.round, Yr = { s: 45, m: 45, h: 22, d: 26, M: 11 }, wr = Math.abs, Sr = Ce.prototype; Sr.abs = mi, Sr.add = pi, Sr.subtract = Mi, Sr.as = wi, Sr.asMilliseconds = ar, Sr.asSeconds = or, Sr.asMinutes = ur, Sr.asHours = dr, Sr.asDays = cr, Sr.asWeeks = lr, Sr.asMonths = hr, Sr.asYears = fr, Sr.valueOf = Si, Sr._bubble = Di, Sr.get = ki, Sr.milliseconds = _r, Sr.seconds = mr, Sr.minutes = yr, Sr.hours = pr, Sr.days = Mr, Sr.weeks = Oi, Sr.months = vr, Sr.years = Dr, Sr.humanize = Pi, Sr.toISOString = Ci, Sr.toString = Ci, Sr.toJSON = Ci, Sr.locale = Mn, Sr.localeData = vn, Sr.toIsoString = te("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Ci), Sr.lang = As, C("X", 0, 0, "unix"), C("x", 0, 0, "valueOf"), A("x", cs), A("X", hs), Z("X", function (t, e, n) { n._d = new Date(1e3 * parseFloat(t, 10)) }), Z("x", function (t, e, n) { n._d = new Date(y(t)) }), t.version = "2.10.6", e(Le), t.fn = Qs, t.min = Ue, t.max = Pe, t.utc = o, t.unix = Xn, t.months = ci, t.isDate = i, t.locale = Y, t.invalid = l, t.duration = Be, t.isMoment = _, t.weekdays = hi, t.parseZone = Kn, t.localeData = S, t.isDuration = Fe, t.monthsShort = li, t.weekdaysMin = _i, t.defineLocale = w, t.weekdaysShort = fi, t.normalizeUnits = k, t.relativeTimeThreshold = Ui; var Tr = t, kr = (Tr.defineLocale("ru", { months: Hi, monthsShort: xi, weekdays: Ii, weekdaysShort: "��_��_��_��_��_��_��".split("_"), weekdaysMin: "��_��_��_��_��_��_��".split("_"), monthsParse: [/^���/i, /^���/i, /^���/i, /^���/i, /^��[�|�]/i, /^���/i, /^���/i, /^���/i, /^���/i, /^���/i, /^���/i, /^���/i], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY �.", LLL: "D MMMM YYYY �., HH:mm", LLLL: "dddd, D MMMM YYYY �., HH:mm" }, calendar: { sameDay: "[������� �] LT", nextDay: "[������ �] LT", lastDay: "[����� �] LT", nextWeek: function () { return 2 === this.day() ? "[��] dddd [�] LT" : "[�] dddd [�] LT" }, lastWeek: function (t) { if (t.week() === this.week()) return 2 === this.day() ? "[��] dddd [�] LT" : "[�] dddd [�] LT"; switch (this.day()) { case 0: return "[� �������] dddd [�] LT"; case 1: case 2: case 4: return "[� �������] dddd [�] LT"; case 3: case 5: case 6: return "[� �������] dddd [�] LT" } }, sameElse: "L" }, relativeTime: { future: "����� %s", past: "%s �����", s: "��������� ������", m: Gi, mm: Gi, h: "���", hh: Gi, d: "����", dd: Gi, M: "�����", MM: Gi, y: "���", yy: Gi }, meridiemParse: /����|����|���|������/i, isPM: function (t) { return /^(���|������)$/.test(t) }, meridiem: function (t) { return 4 > t ? "����" : 12 > t ? "����" : 17 > t ? "���" : "������" }, ordinalParse: /\d{1,2}-(�|��|�)/, ordinal: function (t, e) { switch (e) { case "M": case "d": case "DDD": return t + "-�"; case "D": return t + "-��"; case "w": case "W": return t + "-�"; default: return t } }, week: { dow: 1, doy: 7 } }), Tr.defineLocale("uk", { months: Ei, monthsShort: "���_���_���_����_����_����_���_����_���_����_����_����".split("_"), weekdays: Zi, weekdaysShort: "��_��_��_��_��_��_��".split("_"), weekdaysMin: "��_��_��_��_��_��_��".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY �.", LLL: "D MMMM YYYY �., HH:mm", LLLL: "dddd, D MMMM YYYY �., HH:mm" }, calendar: { sameDay: ji("[�������� "), nextDay: ji("[������ "), lastDay: ji("[����� "), nextWeek: ji("[�] dddd ["), lastWeek: function () { switch (this.day()) { case 0: case 3: case 5: case 6: return ji("[�������] dddd [").call(this); case 1: case 2: case 4: return ji("[��������] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "�� %s", past: "%s ����", s: "�������� ������", m: zi, mm: zi, h: "������", hh: zi, d: "����", dd: zi, M: "������", MM: zi, y: "���", yy: zi }, meridiemParse: /����|�����|���|������/, isPM: function (t) { return /^(���|������)$/.test(t) }, meridiem: function (t) { return 4 > t ? "����" : 12 > t ? "�����" : 17 > t ? "���" : "������" }, ordinalParse: /\d{1,2}-(�|��)/, ordinal: function (t, e) { switch (e) { case "M": case "d": case "DDD": case "w": case "W": return t + "-�"; case "D": return t + "-��"; default: return t } }, week: { dow: 1, doy: 7 } }), Tr); return kr.locale("en"), kr
});


/*
 * Pikaday
 *
 * Copyright � 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
!function (e, t) { "use strict"; var n; if ("object" == typeof exports) { try { n = require("moment") } catch (i) { } module.exports = t(n) } else "function" == typeof define && define.amd ? define(function (e) { var i = "moment"; try { n = e(i) } catch (a) { } return t(n) }) : e.Pikaday = t(e.moment) }(this, function (e) { "use strict"; var t = "function" == typeof e, n = !!window.addEventListener, i = window.document, a = window.setTimeout, o = function (e, t, i, a) { n ? e.addEventListener(t, i, !!a) : e.attachEvent("on" + t, i) }, s = function (e, t, i, a) { n ? e.removeEventListener(t, i, !!a) : e.detachEvent("on" + t, i) }, r = function (e, t, n) { var a; i.createEvent ? (a = i.createEvent("HTMLEvents"), a.initEvent(t, !0, !1), a = _(a, n), e.dispatchEvent(a)) : i.createEventObject && (a = i.createEventObject(), a = _(a, n), e.fireEvent("on" + t, a)) }, l = function (e) { return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "") }, h = function (e, t) { return -1 !== (" " + e.className + " ").indexOf(" " + t + " ") }, d = function (e, t) { h(e, t) || (e.className = "" === e.className ? t : e.className + " " + t) }, u = function (e, t) { e.className = l((" " + e.className + " ").replace(" " + t + " ", " ")) }, c = function (e) { return /Array/.test(Object.prototype.toString.call(e)) }, f = function (e) { return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime()) }, g = function (e) { var t = e.getDay(); return 0 === t || 6 === t }, m = function (e) { return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 }, p = function (e, t) { return [31, m(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t] }, y = function (e) { f(e) && e.setHours(0, 0, 0, 0) }, D = function (e, t) { return e.getTime() === t.getTime() }, _ = function (e, t, n) { var i, a; for (i in t) a = void 0 !== e[i], a && "object" == typeof t[i] && null !== t[i] && void 0 === t[i].nodeName ? f(t[i]) ? n && (e[i] = new Date(t[i].getTime())) : c(t[i]) ? n && (e[i] = t[i].slice(0)) : e[i] = _({}, t[i], n) : (n || !a) && (e[i] = t[i]); return e }, v = function (e) { return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12), e.month > 11 && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12), e }, b = { field: null, bound: void 0, position: "bottom left", reposition: !0, format: "YYYY-MM-DD", defaultDate: null, setDefaultDate: !1, firstDay: 0, minDate: null, maxDate: null, yearRange: 10, showWeekNumber: !1, minYear: 0, maxYear: 9999, minMonth: void 0, maxMonth: void 0, startRange: null, endRange: null, isRTL: !1, yearSuffix: "", showMonthAfterYear: !1, numberOfMonths: 1, mainCalendar: "left", container: void 0, i18n: { previousMonth: "Previous Month", nextMonth: "Next Month", months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] }, theme: null, onSelect: null, onOpen: null, onClose: null, onDraw: null }, w = function (e, t, n) { for (t += e.firstDay; t >= 7;) t -= 7; return n ? e.i18n.weekdaysShort[t] : e.i18n.weekdays[t] }, M = function (e) { if (e.isEmpty) return '<td class="is-empty"></td>'; var t = []; return e.isDisabled && t.push("is-disabled"), e.isToday && t.push("is-today"), e.isSelected && t.push("is-selected"), e.isInRange && t.push("is-inrange"), e.isStartRange && t.push("is-startrange"), e.isEndRange && t.push("is-endrange"), '<td data-day="' + e.day + '" class="' + t.join(" ") + '"><button class="pika-button pika-day" type="button" data-pika-year="' + e.year + '" data-pika-month="' + e.month + '" data-pika-day="' + e.day + '">' + e.day + "</button></td>" }, k = function (e, t, n) { var i = new Date(n, 0, 1), a = Math.ceil(((new Date(n, t, e) - i) / 864e5 + i.getDay() + 1) / 7); return '<td class="pika-week">' + a + "</td>" }, x = function (e, t) { return "<tr>" + (t ? e.reverse() : e).join("") + "</tr>" }, R = function (e) { return "<tbody>" + e.join("") + "</tbody>" }, N = function (e) { var t, n = []; for (e.showWeekNumber && n.push("<th></th>"), t = 0; 7 > t; t++) n.push('<th scope="col"><abbr title="' + w(e, t) + '">' + w(e, t, !0) + "</abbr></th>"); return "<thead>" + (e.isRTL ? n.reverse() : n).join("") + "</thead>" }, C = function (e, t, n, i, a) { var o, s, r, l, h, d = e._o, u = n === d.minYear, f = n === d.maxYear, g = '<div class="pika-title">', m = !0, p = !0; for (r = [], o = 0; 12 > o; o++) r.push('<option value="' + (n === a ? o - t : 12 + o - t) + '"' + (o === i ? " selected" : "") + (u && o < d.minMonth || f && o > d.maxMonth ? "disabled" : "") + ">" + d.i18n.months[o] + "</option>"); for (l = '<div class="pika-label">' + d.i18n.months[i] + '<select class="pika-select pika-select-month" tabindex="-1">' + r.join("") + "</select></div>", c(d.yearRange) ? (o = d.yearRange[0], s = d.yearRange[1] + 1) : (o = n - d.yearRange, s = 1 + n + d.yearRange), r = []; s > o && o <= d.maxYear; o++) o >= d.minYear && r.push('<option value="' + o + '"' + (o === n ? " selected" : "") + ">" + o + "</option>"); return h = '<div class="pika-label">' + n + d.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + r.join("") + "</select></div>", g += d.showMonthAfterYear ? h + l : l + h, u && (0 === i || d.minMonth >= i) && (m = !1), f && (11 === i || d.maxMonth <= i) && (p = !1), 0 === t && (g += '<button class="pika-prev' + (m ? "" : " is-disabled") + '" type="button">' + d.i18n.previousMonth + "</button>"), t === e._o.numberOfMonths - 1 && (g += '<button class="pika-next' + (p ? "" : " is-disabled") + '" type="button">' + d.i18n.nextMonth + "</button>"), g += "</div>" }, T = function (e, t) { return '<table cellpadding="0" cellspacing="0" class="pika-table">' + N(e) + R(t) + "</table>" }, E = function (s) { var r = this, l = r.config(s); r._onMouseDown = function (e) { if (r._v) { e = e || window.event; var t = e.target || e.srcElement; if (t) if (h(t.parentNode, "is-disabled") || (h(t, "pika-button") && !h(t, "is-empty") ? (r.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day"))), l.bound && a(function () { r.hide(), l.field && l.field.blur() }, 100)) : h(t, "pika-prev") ? r.prevMonth() : h(t, "pika-next") && r.nextMonth()), h(t, "pika-select")) r._c = !0; else { if (!e.preventDefault) return e.returnValue = !1, !1; e.preventDefault() } } }, r._onChange = function (e) { e = e || window.event; var t = e.target || e.srcElement; t && (h(t, "pika-select-month") ? r.gotoMonth(t.value) : h(t, "pika-select-year") && r.gotoYear(t.value)) }, r._onInputChange = function (n) { var i; n.firedBy !== r && (t ? (i = e(l.field.value, l.format), i = i && i.isValid() ? i.toDate() : null) : i = new Date(Date.parse(l.field.value)), f(i) && r.setDate(i), r._v || r.show()) }, r._onInputFocus = function () { r.show() }, r._onInputClick = function () { r.show() }, r._onInputBlur = function () { var e = i.activeElement; do if (h(e, "pika-single")) return; while (e = e.parentNode); r._c || (r._b = a(function () { r.hide() }, 50)), r._c = !1 }, r._onClick = function (e) { e = e || window.event; var t = e.target || e.srcElement, i = t; if (t) { !n && h(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), o(t, "change", r._onChange))); do if (h(i, "pika-single") || i === l.trigger) return; while (i = i.parentNode); r._v && t !== l.trigger && i !== l.trigger && r.hide() } }, r.el = i.createElement("div"), r.el.className = "pika-single" + (l.isRTL ? " is-rtl" : "") + (l.theme ? " " + l.theme : ""), o(r.el, "mousedown", r._onMouseDown, !0), o(r.el, "touchend", r._onMouseDown, !0), o(r.el, "change", r._onChange), l.field && (l.container ? l.container.appendChild(r.el) : l.bound ? i.body.appendChild(r.el) : l.field.parentNode.insertBefore(r.el, l.field.nextSibling), o(l.field, "change", r._onInputChange), l.defaultDate || (l.defaultDate = t && l.field.value ? e(l.field.value, l.format).toDate() : new Date(Date.parse(l.field.value)), l.setDefaultDate = !0)); var d = l.defaultDate; f(d) ? l.setDefaultDate ? r.setDate(d, !0) : r.gotoDate(d) : r.gotoDate(new Date), l.bound ? (this.hide(), r.el.className += " is-bound", o(l.trigger, "click", r._onInputClick), o(l.trigger, "focus", r._onInputFocus), o(l.trigger, "blur", r._onInputBlur)) : this.show() }; return E.prototype = { config: function (e) { this._o || (this._o = _({}, b, !0)); var t = _(this._o, e, !0); t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null; var n = parseInt(t.numberOfMonths, 10) || 1; if (t.numberOfMonths = n > 4 ? 4 : n, f(t.minDate) || (t.minDate = !1), f(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && (y(t.maxDate), t.maxYear = t.maxDate.getFullYear(), t.maxMonth = t.maxDate.getMonth()), c(t.yearRange)) { var i = (new Date).getFullYear() - 10; t.yearRange[0] = parseInt(t.yearRange[0], 10) || i, t.yearRange[1] = parseInt(t.yearRange[1], 10) || i } else t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || b.yearRange, t.yearRange > 100 && (t.yearRange = 100); return t }, toString: function (n) { return f(this._d) ? t ? e(this._d).format(n || this._o.format) : this._d.toDateString() : "" }, getMoment: function () { return t ? e(this._d) : null }, setMoment: function (n, i) { t && e.isMoment(n) && this.setDate(n.toDate(), i) }, getDate: function () { return f(this._d) ? new Date(this._d.getTime()) : null }, setDate: function (e, t) { if (!e) return this._d = null, this._o.field && (this._o.field.value = "", r(this._o.field, "change", { firedBy: this })), this.draw(); if ("string" == typeof e && (e = new Date(Date.parse(e))), f(e)) { var n = this._o.minDate, i = this._o.maxDate; f(n) && n > e ? e = n : f(i) && e > i && (e = i), this._d = new Date(e.getTime()), y(this._d), this.gotoDate(this._d), this._o.field && (this._o.field.value = this.toString(), r(this._o.field, "change", { firedBy: this })), t || "function" != typeof this._o.onSelect || this._o.onSelect.call(this, this.getDate()) } }, gotoDate: function (e) { var t = !0; if (f(e)) { if (this.calendars) { var n = new Date(this.calendars[0].year, this.calendars[0].month, 1), i = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1), a = e.getTime(); i.setMonth(i.getMonth() + 1), i.setDate(i.getDate() - 1), t = a < n.getTime() || i.getTime() < a } t && (this.calendars = [{ month: e.getMonth(), year: e.getFullYear() }], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars() } }, adjustCalendars: function () { this.calendars[0] = v(this.calendars[0]); for (var e = 1; e < this._o.numberOfMonths; e++) this.calendars[e] = v({ month: this.calendars[0].month + e, year: this.calendars[0].year }); this.draw() }, gotoToday: function () { this.gotoDate(new Date) }, gotoMonth: function (e) { isNaN(e) || (this.calendars[0].month = parseInt(e, 10), this.adjustCalendars()) }, nextMonth: function () { this.calendars[0].month++, this.adjustCalendars() }, prevMonth: function () { this.calendars[0].month--, this.adjustCalendars() }, gotoYear: function (e) { isNaN(e) || (this.calendars[0].year = parseInt(e, 10), this.adjustCalendars()) }, setMinDate: function (e) { y(e), this._o.minDate = e, this._o.minYear = e.getFullYear(), this._o.minMonth = e.getMonth() }, setMaxDate: function (e) { this._o.maxDate = e }, setStartRange: function (e) { this._o.startRange = e }, setEndRange: function (e) { this._o.endRange = e }, draw: function (e) { if (this._v || e) { var t = this._o, n = t.minYear, i = t.maxYear, o = t.minMonth, s = t.maxMonth, r = ""; this._y <= n && (this._y = n, !isNaN(o) && this._m < o && (this._m = o)), this._y >= i && (this._y = i, !isNaN(s) && this._m > s && (this._m = s)); for (var l = 0; l < t.numberOfMonths; l++) r += '<div class="pika-lendar">' + C(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year) + this.render(this.calendars[l].year, this.calendars[l].month) + "</div>"; if (this.el.innerHTML = r, t.bound && "hidden" !== t.field.type && a(function () { t.trigger.focus() }, 1), "function" == typeof this._o.onDraw) { var h = this; a(function () { h._o.onDraw.call(h) }, 0) } } }, adjustPosition: function () { var e, t, n, a, o, s, r, l, h, d; if (!this._o.container) { if (this.el.style.position = "absolute", e = this._o.trigger, t = e, n = this.el.offsetWidth, a = this.el.offsetHeight, o = window.innerWidth || i.documentElement.clientWidth, s = window.innerHeight || i.documentElement.clientHeight, r = window.pageYOffset || i.body.scrollTop || i.documentElement.scrollTop, "function" == typeof e.getBoundingClientRect) d = e.getBoundingClientRect(), l = d.left + window.pageXOffset, h = d.bottom + window.pageYOffset; else for (l = t.offsetLeft, h = t.offsetTop + t.offsetHeight; t = t.offsetParent;) l += t.offsetLeft, h += t.offsetTop; (this._o.reposition && l + n > o || this._o.position.indexOf("right") > -1 && l - n + e.offsetWidth > 0) && (l = l - n + e.offsetWidth), (this._o.reposition && h + a > s + r || this._o.position.indexOf("top") > -1 && h - a - e.offsetHeight > 0) && (h = h - a - e.offsetHeight), this.el.style.left = l + "px", this.el.style.top = h + "px" } }, render: function (e, t) { var n = this._o, i = new Date, a = p(e, t), o = new Date(e, t, 1).getDay(), s = [], r = []; y(i), n.firstDay > 0 && (o -= n.firstDay, 0 > o && (o += 7)); for (var l = a + o, h = l; h > 7;) h -= 7; l += 7 - h; for (var d = 0, u = 0; l > d; d++) { var c = new Date(e, t, 1 + (d - o)), m = f(this._d) ? D(c, this._d) : !1, _ = D(c, i), v = o > d || d >= a + o, b = n.startRange && D(n.startRange, c), w = n.endRange && D(n.endRange, c), R = n.startRange && n.endRange && n.startRange < c && c < n.endRange, N = n.minDate && c < n.minDate || n.maxDate && c > n.maxDate || n.disableWeekends && g(c) || n.disableDayFn && n.disableDayFn(c), C = { day: 1 + (d - o), month: t, year: e, isSelected: m, isToday: _, isDisabled: N, isEmpty: v, isStartRange: b, isEndRange: w, isInRange: R }; r.push(M(C)), 7 === ++u && (n.showWeekNumber && r.unshift(k(d - o, t, e)), s.push(x(r, n.isRTL)), r = [], u = 0) } return T(n, s) }, isVisible: function () { return this._v }, show: function () { this._v || (u(this.el, "is-hidden"), this._v = !0, this.draw(), this._o.bound && (o(i, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this)) }, hide: function () { var e = this._v; e !== !1 && (this._o.bound && s(i, "click", this._onClick), this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto", d(this.el, "is-hidden"), this._v = !1, void 0 !== e && "function" == typeof this._o.onClose && this._o.onClose.call(this)) }, destroy: function () { this.hide(), s(this.el, "mousedown", this._onMouseDown, !0), s(this.el, "touchend", this._onMouseDown, !0), s(this.el, "change", this._onChange), this._o.field && (s(this._o.field, "change", this._onInputChange), this._o.bound && (s(this._o.trigger, "click", this._onInputClick), s(this._o.trigger, "focus", this._onInputFocus), s(this._o.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el) } }, E });


/*
 * jquery.lightbox.js v1.3
 * https://github.com/duncanmcdougall/Responsive-Lightbox
 * Copyright 2015 Duncan McDougall and other contributors; @license Creative Commons Attribution 2.5
 */
!function (a) { "use strict"; a.fn.lightbox = function (b) { var c = { margin: 50, nav: !0, blur: !0, minSize: 0 }, d = { items: [], lightbox: null, image: null, current: null, locked: !1, caption: null, init: function (b) { d.items = b; var e = "lightbox-" + Math.floor(1e5 * Math.random() + 1); d.lightbox || (d.lightbox = a("body").find(".bodyGlobalLightbox"), 0 === d.lightbox.length && (a("body").append('<div id="' + e + '" class="lightbox bodyGlobalLightbox" style="display:none;"><a href="#" class="lightbox__close lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--prev lightbox__button"></a><a href="#" class="lightbox__nav lightbox__nav--next lightbox__button"></a><div href="#" class="lightbox__caption"><p></p></div></div>'), d.lightbox = a("#" + e)), d.caption = a(".lightbox__caption", d.lightbox)), d.items.length > 1 && c.nav ? a(".lightbox__nav", d.lightbox).show() : a(".lightbox__nav", d.lightbox).hide(), d.bindEvents() }, loadImage: function () { c.blur && a("body").addClass("blurred"), a("img", d.lightbox).remove(), d.lightbox.fadeIn("fast").append('<span class="lightbox__loading"></span>'); var b = a('<img src="' + a(d.current).attr("href") + '" draggable="false">'); a(b).load(function () { a(".lightbox__loading").remove(), d.lightbox.append(b), d.image = a("img", d.lightbox).hide(), d.resizeImage(), d.setCaption() }) }, setCaption: function () { var b = a(d.current).data("caption"); b && b.length > 0 ? (d.caption.fadeIn(), a("p", d.caption).text(b)) : d.caption.hide() }, resizeImage: function () { var b, e, f, g, h; e = a(window).height() - c.margin, f = a(window).outerWidth(!0) - c.margin, d.image.width("").height(""), g = d.image.height(), h = d.image.width(), h > f && (b = f / h, h = f, g = Math.round(g * b)), g > e && (b = e / g, g = e, h = Math.round(h * b)), d.image.width(h).height(g).css({ top: (a(window).height() - d.image.outerHeight()) / 2 + "px", left: (a(window).width() - d.image.outerWidth()) / 2 + "px" }).show(), d.locked = !1 }, getCurrentIndex: function () { return a.inArray(d.current, d.items) }, next: function () { return d.locked ? !1 : (d.locked = !0, void (d.getCurrentIndex() >= d.items.length - 1 ? a(d.items[0]).click() : a(d.items[d.getCurrentIndex() + 1]).click())) }, previous: function () { return d.locked ? !1 : (d.locked = !0, void (d.getCurrentIndex() <= 0 ? a(d.items[d.items.length - 1]).click() : a(d.items[d.getCurrentIndex() - 1]).click())) }, bindEvents: function () { a(d.items).click(function (b) { if (!d.lightbox.is(":visible") && (a(window).width() < c.minSize || a(window).height() < c.minSize)) return void a(this).attr("target", "_blank"); var e = a(this)[0]; b.preventDefault(), d.current = e, d.loadImage(), a(document).on("keydown", function (a) { 27 === a.keyCode && d.close(), 39 === a.keyCode && d.next(), 37 === a.keyCode && d.previous() }) }), d.lightbox.on("click", function (a) { this === a.target && d.close() }), a(d.lightbox).on("click", ".lightbox__nav--prev", function () { return d.previous(), !1 }), a(d.lightbox).on("click", ".lightbox__nav--next", function () { return d.next(), !1 }), a(d.lightbox).on("click", ".lightbox__close", function () { return d.close(), !1 }), a(window).resize(function () { d.image && d.resizeImage() }) }, close: function () { a(document).off("keydown"), a(d.lightbox).fadeOut("fast"), a("body").removeClass("blurred") } }; a.extend(c, b), d.init(this) } }(jQuery);

/*
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function (t) { "use strict"; "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery) }(function (t) {
    var e = -1, o = -1, i = function (t) { return parseFloat(t) || 0 }, n = function (e) { var o = 1, n = t(e), a = null, r = []; return n.each(function () { var e = t(this), n = e.offset().top - i(e.css("margin-top")), s = r.length > 0 ? r[r.length - 1] : null; null === s ? r.push(e) : Math.floor(Math.abs(a - n)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), a = n }), r }, a = function (e) {
        var o = {
            byRow: !0, property: "height", target: null, remove: !1
        }; return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
    }, r = t.fn.matchHeight = function (e) { var o = a(e); if (o.remove) { var i = this; return this.css(o.property, ""), t.each(r._groups, function (t, e) { e.elements = e.elements.not(i) }), this } return this.length <= 1 && !o.target ? this : (r._groups.push({ elements: this, options: o }), r._apply(this, o), this) }; r.version = "master", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
    r._afterUpdate = null, r._rows = n, r._parse = i, r._parseOptions = a, r._apply = function (e, o) {
        var s = a(o), h = t(e), c = [h], l = t(window).scrollTop(), p = t("html").outerHeight(!0), d = h.parents().filter(":hidden"); return d.each(function () { var e = t(this); e.data("style-cache", e.attr("style")) }), d.css("display", "block"), s.byRow && !s.target && (h.each(function () {
            var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                display: o, "padding-top": "0",
                "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden"
            })
        }), c = n(h), h.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || "") })), t.each(c, function (e, o) {
            var n = t(o), a = 0; if (s.target) a = s.target.outerHeight(!1); else {
                if (s.byRow && n.length <= 1) return void n.css(s.property, ""); n.each(function () {
                    var e = t(this), o = e.css("display"); "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"); var i = { display: o }; i[s.property] = "",
                    e.css(i), e.outerHeight(!1) > a && (a = e.outerHeight(!1)), e.css("display", "")
                })
            } n.each(function () { var e = t(this), o = 0; s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, a - o + "px")) })
        }), d.each(function () { var e = t(this); e.attr("style", e.data("style-cache") || null) }), r._maintainScroll && t(window).scrollTop(l / p * t("html").outerHeight(!0)), this
    }, r._applyDataApi = function () {
        var e = {}; t("[data-match-height], [data-mh]").each(function () { var o = t(this), i = o.attr("data-mh") || o.attr("data-match-height"); i in e ? e[i] = e[i].add(o) : e[i] = o }), t.each(e, function () { this.matchHeight(!0) })
    }; var s = function (e) { r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function () { r._apply(this.elements, this.options) }), r._afterUpdate && r._afterUpdate(e, r._groups) }; r._update = function (i, n) {
        if (n && "resize" === n.type) { var a = t(window).width(); if (a === e) return; e = a } i ? -1 === o && (o = setTimeout(function () {
            s(n), o = -1
        }, r._throttle)) : s(n)
    }, t(r._applyDataApi), t(window).bind("load", function (t) { r._update(!1, t) }), t(window).bind("resize orientationchange", function (t) { r._update(!0, t) })
});
// Application Scripts:

// Запускаем мобильное меню
// Фиксируем хидер при скролле
// Покажем - спрячем форму поиска в десктоп-меню по клику на кнопку
// Модальное окно
// Фильтры
// Календарь
// Слайдеры
// Фотогалерея
// Стилизация input[type=file]
// Если о плейсхолдерах не слышали

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body'),
        BREAKPOINT = 992;

    $body.append('<div id="overlay" class="overlay"></div>');//оверлей
    var $overlay = $('#overlay');

    //
    // Запускаем мобильное меню
    //---------------------------------------------------------------------------------------
    function initMobileMenu() {
        var $btn = $('.js-mtoggle'),
            $menu = $('.js-mmenu'),
            $submenu = $menu.find('.m-submenu');

        $menu.find('li').has('ul').children('a').addClass('has-menu');
        var $s_btn = $menu.find('.has-menu'); //заголовки суб-меню

        $('.header__main').on('click', '.js-mtoggle', function () {//покажем - спрячем
            if ($(this).hasClass('active')) {
                hideMenu();
            } else {
                showMenu();
            }
        });

        $menu.on('click', '.m-menu__label', hideMenu); //закроем по клику по заголовку

        function hideMenu() {
            $btn.removeClass('active');
            $menu.removeClass('active');
            hideSubMenu();
            $html.css('overflow', 'auto');
            $overlay.unbind('click', hideMenu).hide();
        }

        function showMenu() {
            $btn.addClass('active');
            $menu.addClass('active');
            $html.css('overflow', 'hidden');
            $overlay.show();
        }

        $menu.mouseleave(function () {//будем закрывать по клику на оверлей
            $overlay.bind('click', hideMenu)
        }).mouseenter(function () {
            $overlay.unbind('click', hideMenu);
        });


        $menu.on('click', '.has-menu', function (e) {//покажем - спрячем подменю
            e.preventDefault();
            var $el = $(this);
            if ($el.hasClass('active')) {
                hideSubMenu();
            } else {
                hideSubMenu();
                $el.addClass('active').parent('li').find('ul').slideDown();
            }
        });

        function hideSubMenu() {
            $s_btn.removeClass('active');
            $submenu.slideUp();
        }

        $menu.on('click', '[data-modal]', function (e) {//если в моб.меню есть ссылка на модальное окно - закроем меню, но вернем оверлей
            hideMenu();
            $overlay.show();
        });
    }
    initMobileMenu();
   

    //
    // Фиксируем хидер при скролле
    //---------------------------------------------------------------------------------------
    function stickyHeader() {
        var $header = $('.js-header');
        $header.wrap('<div class="header__wrap"></div>');
        var $wrap = $header.parent('div'),
            flag = false,
            activeClass = 'scrolled',
            topOffset = 48, //высота десктоп-меню
            isStick = verge.inViewport($wrap, -topOffset);

        //проверим скролл при загрузке страницы
        if (!isStick) {
            $header.addClass(activeClass);
            $wrap.addClass(activeClass);
            flag = true;
        }

        $window.on('scroll', function () {
            isStick = verge.inViewport($wrap, -topOffset);

            if (!isStick && !flag) {
                $header.addClass(activeClass);
                $wrap.addClass(activeClass);
                flag = true;
            }

            if (isStick && flag) {
                $header.removeClass(activeClass);
                $wrap.removeClass(activeClass);

                if ($header.hasClass('compact')) {//если открыта форма поиска в хидере - закроем
                    headerSearch.close();
                }

                flag = false;
            }
        });
    }
    stickyHeader();


    //
    // Выпадающее десктоп-меню
    //---------------------------------------------------------------------------------------
    var topMenu = (function () {
        var $menu = $('.js-menu'),
            $btn = $menu.children('li').children('a'),
            $submenu = $menu.find('.submenu'),
            method = {};

        $menu.find('li').has('ul').children('a').addClass('has-menu');

        $menu.on('click', '.has-menu', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {//кликаем по активному пункту - сворачиваем
                $submenu.slideUp();
                $btn.removeClass('active');
                $overlay.removeClass('half').unbind('click', method.close).hide();
            } else {//спрячем (если открыты) активные подменю, развернем текущее
                var $el = $(this);
                method.close();
                $el.addClass('active').parent('li').find('.submenu').slideDown();
                $overlay.addClass('half').show(); //накрыли контент оверлеем
            }
        });

        $menu.mouseleave(function () {//закроем подменю по клику на оверлей
            $overlay.bind('click', method.close);
        }).mouseenter(function () {
            $overlay.unbind('click', method.close);
        });

        if ($html.hasClass('lt-ie9')) {//плохой браузер
            $submenu.find('li:nth-child(3n)').addClass('last');
        }

        method.close = function () {
            $submenu.hide();
            $btn.removeClass('active');
            $overlay.removeClass('half').unbind('click', method.close).hide();
        }
        return method;
    })();
   

    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $close;

        // добавим в документ
        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть


        $close.on('click', function (e) {
            e.preventDefault();
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center);
            topMenu.close();//если открыто десктоп-субменю - закроем
            $modal.show();
            $overlay.show();
            $overlay.bind('click', method.close);
            method.resizeMap(link);
        };

        // закрываем
        method.close = function () {
            $modal.hide();
            $overlay.fadeOut('fast', function () {
                $overlay.unbind('click', method.close);
            });
            $window.unbind('resize.modal');
        };

        method.resizeMap = function (link) {//если в окне Гугл-карта - перерисуем ее после открытия
            var $map = $(link).find('.b-modal-map');
            if ($map.length) {
                google.maps.event.trigger(map, "resize");
            }
        }

        return method;
    }());

    // клик по кнопке с атрибутом data-modal - открываем модальное окно
    $('[data-modal]').on('click', function (e) {//передаем айди модального окна
        e.preventDefault();
        var link = $(this).data('modal');
        if (link) { showModal.open(link); }
    });

    //
    // Фильтры
    //---------------------------------------------------------------------------------------
    function initScroller() {//скроллер
        var options = {
            axis: "y",
            size: 10,
            sizethumb: 30,
            turnOffWheel: false,
            onScroll: function (percent, offset) { },
        }

        $('.js-scroll').each(function () {
            var current = '#' + $(this).attr('id');
            new Miniscroll(current, options);
        });
    }
    if($('.js-scroll').length){initScroller()}


    function initCheckboxList() {
        var $list = $('.js-checkbox-list'),
            $btn = $('.b-filter__label'),
            method = {};

        method.showList = function (el) {//раскроем контейнер
            el.addClass('active').parents('.b-filter').find('.b-filter__inner').slideDown('fast');
            el.parents('.b-filter').mouseleave(function () {
                $body.bind('click', method.hideAllLists);
            }).mouseenter(function () {
                $body.unbind('click', method.hideAllLists);
            });
        }

        method.hideList = function (el) {//скроем контейнер
            el.removeClass('active').parents('.b-filter').find('.b-filter__inner').slideUp('fast');
            $body.unbind('click', method.hideAllLists);
        }

        method.hideAllLists = function () {//скроем все контейнеры
            $btn.removeClass('active').parents('.b-filter').find('.b-filter__inner').slideUp('fast');
            $body.unbind('click', method.hideAllLists);
        }

        method.rewriteLabel = function (el) {//перепишем названия отмеченных пунктов
            $label = el.find('.b-filter__label'),
            $item=el.find('.b-filter__box'),
            info = '';

            $item.each(function () {
                if ($(this).hasClass('checked')) {
                    info = info + $(this).find('.b-filter__name').text() + ' ';
                }
            });
            $label.text(info);
        }

        method.showSubMenu = function (el) {//покажем суб-меню
            el.addClass('active').nextAll('.b-filter__list').slideDown('fast');
            el.children('i').removeClass('icon-plus-squared-alt').addClass('icon-minus-squared-alt');
        }

        method.hideSubMenu = function (el) {
            el.removeClass('active').nextAll('.b-filter__list').slideUp('fast');
            el.children('i').removeClass('icon-minus-squared-alt').addClass('icon-plus-squared-alt');
        }

        method.showAllSubMenu = function (block) {
            block.find('.b-filter__toggle').each(function () {
                var $el = $(this);
                method.showSubMenu($el);
            });
        }

        method.hideAllSubMenu = function (block) {
            block.find('.b-filter__toggle').each(function () {
                var $el = $(this);
                method.hideSubMenu($el);
            });
        }

        $list.each(function () {//старт - покажем чек-иконки, если инпут - чекед
            var $item = $(this).find('.b-filter__box'),
                $filter = $(this).parents('.b-filter');
                
            $item.each(function () {
                var $el=$(this),
                    $check = $el.find('input[type="checkbox"], input[type="radio"]');
                if ($check.is(':checked')) {
                    $el.addClass('checked');
                }
            });

            method.rewriteLabel($filter);
        });


        $btn.on('click', function () {//покажем - спрячем контейнер
            var $el = $(this);
            if ($el.hasClass('active')) {
                method.hideList($el);
            } else {
                method.hideAllLists();
                method.showList($el);
            }
        });


        $list.on('click', '.b-filter__box', function (e) {//клик по "чекбоксу" или "радио" в списке
            e.preventDefault();
            var $el = $(this),
                $check = $el.find('input[type="checkbox"]'),
                $radio=$el.find('input[type="radio"]'),
                $block = $el.parents('.b-filter');

            if ($check.length) {//если кликаем на чекбокс
                if ($el.hasClass('checked')) {
                    $el.removeClass('checked');
                    $check.prop('checked', false);
                } else {
                    $el.addClass('checked');
                    $check.prop('checked', true);
                }
            }

            if ($radio.length) {//если кликаем на радио
                if ($el.hasClass('checked')) {
                    return false;
                } else {
                    $block.find('.b-filter__box').removeClass('checked');
                    $el.addClass('checked');
                    $radio.prop('checked', true);
                }
            }

            method.rewriteLabel($block);
        });


        $list.on('click', '.b-filter__toggle', function () {//раскроем - скроем субменю по клику на "плюс (минус)"
            var $el = $(this);
            if ($el.hasClass('active')) {
                method.hideSubMenu($el);
            } else {
                method.showSubMenu($el);
            }
        });

        //поиск в списке
        function initSearchList() {
            $('.js-search-list').each(function () {
                var $list=$(this),
                    $input = $list.parents('.b-filter').find('.b-filter__search');

                $list.find('.b-filter__name').each(function () {
                    $(this).closest('.b-filter__item').attr('data-search-term', $(this).text().toLowerCase());
                });

                $input.on('keyup', function () {
                    method.showAllSubMenu($list);
                    var searchTerm = $(this).val().toLowerCase();
                    $list.find('.b-filter__item').each(function () {
                        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                            $(this).show().parents('.b-filter__item').show();
                        } else {
                            $(this).hide();
                        }
                    });
                });
            });
        }
        if($('.js-search-list').length){initSearchList()}

    }
    if ($('.js-checkbox-list').length) { initCheckboxList() }

    // Календарь
    function initCalendar() {
        moment.locale('uk');
        var picker_lang = {
            previousMonth: 'Попередній місяць',
            nextMonth: 'Наступний місяць',
            months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
            weekdays: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'],
            weekdaysShort: ['Нед', 'Пон', 'Вів', 'Сер', 'Чет', 'Птн', 'Суб']
        };

        var $label = $('.js-calendar').parents('.b-filter').find('.b-filter__label');

        var startDate,
        endDate,
        startPicker = new Pikaday({
            field: document.getElementById('start_date'),
            container: document.getElementById('start_holder'),
            format: 'L',
            firstDay: 1,
            yearRange: [2010, 2030],
            minDate: moment('2010-01-01'),
            maxDate: moment().toDate(),
            i18n: picker_lang,
            onSelect: function () {
                startDate = this.getDate();
                updateStartDate();
            }
        }),
        endPicker = new Pikaday({
            field: document.getElementById('end_date'),
            container: document.getElementById('end_holder'),
            format: 'L',
            firstDay: 1,
            yearRange: [2010, 2030],
            maxDate:moment().toDate(),
            i18n: picker_lang,
            onSelect: function () {
                endDate = this.getDate();
                updateEndDate();
            }
        });

        function updateEndDate() {
            startPicker.setMaxDate(moment(endDate).subtract(1, 'days'));
            rewriteLabel();
        };

        function updateStartDate() {
            endPicker.setMinDate(new Date(moment(startDate).add(1, 'days')));
            rewriteLabel();
        };

        function rewriteLabel() {//перепишем текст в ячейку
            var info = $('#start_date').val() + ' - ' + $('#end_date').val();
            $label.text(info);
        }

        function setStartDate() {
            startPicker.setDate(moment().subtract(1, 'month').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        }

        setStartDate();//установим интервал в 1 месяц по-умолчанию

        $('.js-calendar').on('click', '.b-date__btn--day', function () {//интервал в 1 день
            startPicker.setDate(moment().subtract(1, 'day').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        });

        $('.js-calendar').on('click', '.b-date__btn--week', function () {//интервал в 1 неделю
            startPicker.setDate(moment().subtract(1, 'week').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        });

        $('.js-calendar').on('click', '.b-date__btn--month', function () {//интервал в 1 неделю
            startPicker.setDate(moment().subtract(1, 'month').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        });

        $('.js-calendar').on('click', '.b-date__btn--clear', function () {//сброс дат
            startPicker.setDate(moment().subtract(1, 'days').toDate());
            endPicker.setDate(moment().toDate());
            $('#start_date').val('');
            $('#end_date').val('');
            rewriteLabel();
            $label.trigger('click');
        });
    };
    if ($('.js-calendar').length) { initCalendar() }


    //
    // Слайдеры
    //---------------------------------------------------------------------------------------
    function initSlider() {
        $('.js-slider').each(function () {
            var $slider = $(this),
                $prev = $slider.parent().find('.feed-slider__arrow--prev'),
                $next = $slider.parent().find('.feed-slider__arrow--next');

            getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
                var setting,
                    settings1 = {
                        maxSlides: 1,
                    },
                    settings2 = {
                        maxSlides: 2,
                    },
                    settings3 = {
                        maxSlides: 3,
                    },
                    settings4 = {
                        maxSlides: 4,
                    },
                    settings5 = {
                        maxSlides: 5,
                    },
                    common = {
                        minSlides: 1,
                        moveSlides: 1,
                        slideWidth: 230,
                        slideMargin: 10,
                        auto: false,
                        pager: false,
                        controls:false,
                        infiniteLoop: false,
                    },
                    winW = $window.width();
                if (winW < 500) {
                    setting = $.extend(settings1, common);
                }
                if (winW >= 500 && winW < 800) {
                    setting = $.extend(settings2, common);
                }
                if (winW >= 800 && winW < 1100) {
                    setting = $.extend(settings3, common);
                }
                if (winW >= 1100 && winW < 1300) {
                    setting = $.extend(settings4, common);
                }
                if (winW >= 1300) {
                    setting = $.extend(settings5, common);
                }
                return setting;
            }
            $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

            $window.on('resize', function () {
                setTimeout(recalcSliderSettings, 500);
            });

            function recalcSliderSettings() {
                $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
            }

            $prev.on('click', function () {
                $slider.goToPrevSlide();
            });

            $next.on('click', function () {
                $slider.goToNextSlide();
            });
        });
    }
    if ($('.js-slider').length) { initSlider() }


    //
    // Фотогалерея
    //---------------------------------------------------------------------------------------
    function initGallery() {
        $('.js-gallery a').lightbox({blur:false});
    }
    if ($('.js-gallery').length) { initGallery() }

    //
    // Стилизация input[type=file]
    //---------------------------------------------------------------------------------------
    function styleInputFile() {
        $('.js-inputfile').each(function () {
            var $input = $(this),
                $label = $input.next('label'),
                labelVal = $label.html();

            $input.on('change', function (e) {
                var fileName = '';

                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else if (e.target.value)
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    $label.find('span').html(fileName);
                else
                    $label.html(labelVal);
            });

            // Firefox bug fix
            $input
            .on('focus', function () { $input.addClass('has-focus'); })
            .on('blur', function () { $input.removeClass('has-focus'); });
        });
    }
    if($('.js-inputfile').length){styleInputFile()}

    //
    // Если о плейсхолдерах не слышали
    //---------------------------------------------------------------------------------------
    if (!Modernizr.input.placeholder) {

        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    };

    
});
