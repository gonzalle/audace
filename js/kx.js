
let kscreen = function () {
    // Check ES6

    // return false;
    var thisScreen = this;
    thisScreen.ratio;
    thisScreen.currentPage = "undefined";
    thisScreen.imgDB = {
        unitbkg: { uri: 'unitbkg.png', hsrc: false },
        unitfrg: { uri: 'unitfrg.png', hsrc: false },
        ristretto: { uri: 'ristretto.png', hsrc: false },
        backgroundhome: { uri: 'background_home.jpg', hsrc: false },
    };


    thisScreen.init = function (kxhost) {

        thisScreen.data = {
            pages: {
                starting: {
                    name: "starting",
                    run: function () {
                        // thisScreen.loadPage("prepare");
                        let delay = 2;


                        // apply styles to the button
                        Object.assign((document.getElementsByClassName("glowPoint")[0]).style, { transitionDuration: delay + "s", left: "350px" });

                        //$(".glowPoint").css({"left":'350px',"transition-duration":delay+"s"});
                        Object.assign((document.getElementsByClassName("bar")[0]).style, { "width": '350px', "transition-duration": delay + "s" });
                        let delayStartup = setTimeout(function () {
                            console.log("load wtf4")

                            thisScreen.loadPage("recettes");
                        }, delay * 1000 + 100)
                        /* $(".button.start").on("click", function(){
                         // thisScreen.loadPage("recettes");
                        })*/
                    },
                    stop: function (callback) {
                        let unloadTime = setTimeout(function () {
                            callback();
                        }, 1000)
                    },
                    html: `
            <div class="pageContent">
     
            <svg style="position:absolute; top:110px; left:167px; width:146px;height:34px;" viewBox="0 0 146 34">
            <use href="#krupsLogo" style="fill: white;" />
         </svg>
     
     
     
            <div class="barBkg" style="position:absolute; left:69px; top:159px; width:350px; height:1px; background-color:rgba(255,255,255,.3); overflow:visible">
              <div class="bar" style="width:0;height:1px;background-color:white; transition:width linear 3s">
                <div class="glowPoint" style="position:absolute; left:0; top:-1px; background-color:white; width:3px;height:3px; box-shadow: 0 0 6px 1px white;  transition:left linear 3s; border-radius:2px;">
                </div>
              </div>
            </div>
            <div class="button start" style="position:absolute; top:171px; width:100%; height:34px; font-size:24px;text-align:center">
            INTUITION PREFERENCE
            </div>
            <div>
            </div>
            </div>
            `},

                recettes: {
                    name: "recettes",
                    run: function () {
                        // thisScreen.loadPage("recettes");
                        // let delay = 1;
                        // $(".glowPoint").css({"left":'350px',"transition-duration":delay+"s"});
                        // $(".bar").css({"width":'350px',"transition-duration":delay+"s"});
                        // let delayStartup = setTimeout(function(){

                        //  thisScreen.loadPage("recettes");
                        // },delay*1000+100)
                        /* $(".button.start").on("click", function(){
                          thisScreen.loadPage("recettes");
                        })*/


                        var recipes = document.querySelectorAll('.recetteScrollerItem');
                        recipes.forEach(el => el.addEventListener('click', event => {
                            thisScreen.loadPage("prepare");

                        }));



                    },
                    stop: function (callback) {
                        let unloadTime = setTimeout(function () {
                            callback();
                        }, 10)
                    },
                    html: `
            <div class="pageContent">
     
     
     
              <svg style="position:absolute; width:31px;height:25px;top:12px;left:31px" viewBox="0 0 32 27" >
              <use href="#recette" />
              </svg>
     
     
     
              <div style="position:absolute; height:25px;top:12px;left:31px;font-size:18px;padding-left:36px;height:34px;  border-bottom: solid 2px orange;">Boissons</div>
     
     
     
     
     
              <svg style="position:absolute; width:26px;height:25px;top:12px;right:29px" viewBox="0 0 26 25" >
              <use href="#fav" />
              </svg>
     
              <div style="position:absolute; height:25px;top:12px;right:31px;font-size:18px;padding-right:36px;text-align:right;height:34px;  border-bottom: solid 2px transparent;">Favoris</div>
              <section id="recetteScroller" >
                  <div class="recetteScrollerItem"><img src="${imag('ristretto')}"></div>
                  <div class="recetteScrollerItem"><img src="${imag('ristretto')}"></div>
                  <div class="recetteScrollerItem"><img src="${imag('ristretto')}"></div>
                  <div class="recetteScrollerItem"></div>
              </section>
            </div>
            `},

                prepare: {
                    name: "prepare",
                    run: function () {
                        // changeBkg("images/test.png")
                        let strength = new vscroller('strengthScroller');
                        console.log(strength);
                        let quantity = new vscroller('quantityScroller');
                        /*$(".backToMain").on("click", function(){
                           thisScreen.loadPage("recettes");
                        })*/

                        document.querySelectorAll('.backToMain')[0].addEventListener('click', function (e) {
                            console.log("back");
                            thisScreen.loadPage("recettes");
                        })



                    },
                    stop: function (callback) {
                        callback();
                    },
                    html: `
            <div class="pageContent">
              <div class="backToMain" style="position:absolute;left:12px;top:12px;width:26px;height:26px">
     
          <svg style="" viewBox="0 0 26 26" >
             <use href="#backArrow" />
          </svg>
                 <!-- <img src="images/back-white.svg">-->
              </div>
              <div class="wheel vWheel right" id="quantityScroller">
                <div class="wheelItem first"></div>
                <div class="wheelItem selected">60</div>
                <div class="wheelItem">70</div>
                <div class="wheelItem">80</div>
                <div class="wheelItem">90</div>
                <div class="wheelItem">100</div>
                <div class="wheelItem">110</div>
                <div class="wheelItem">120</div>
                <div class="wheelItem">130</div>
                <div class="wheelItem">140</div>
                <div class="wheelItem">150</div>
                <div class="wheelItem">160</div>
                <div class="wheelItem">170</div>
                <div class="wheelItem">180</div>
                <div class="wheelItem">190</div>
                <div class="wheelItem">200</div>
                <div class="wheelItem">210</div>
                <div class="wheelItem">220</div>
                <div class="wheelItem">230</div>
                <div class="wheelItem">240</div>
                <div class="wheelItem">250</div>
                <div class="wheelItem last"></div>
              </div>
              <div class="vwheelCenter right">&nbsp;</div>
              <div class="vwheelUnit right">ml</div>
      
              <div class="wheel vWheel left" id="strengthScroller">
                  <div class="wheelItem selected"></div>
                  <div class="wheelItem">80</div>
                  <div class="wheelItem">90</div>
                  <div class="wheelItem">100</div>
                  <div class="wheelItem"></div>
              </div>
              <div class="vwheelCenter left">&nbsp;</div>
              <div class="vwheelUnit left">ml</div>
            </div>
            `,
                }
            }
        }


        thisScreen.fit = function () {
            // 768 x 400 (was 480x320)

            thisScreen.ratio = window.innerWidth / 768;
            console.log(thisScreen.ratio);
            // if (thisScreen.ratio <= 1) { 
            Object.assign(thisScreen.kxunit.style, { "transform": "scale(" + Math.min(1.5, thisScreen.ratio) + ") translateX(-50%)" });
            // }
        }


        thisScreen.loadPage = function (pageId) {
            //console.log(thisScreen.currentPage);
            console.log("load " + pageId)
            //console.log("load wtf3")

            if (thisScreen.currentPage != "undefined") {
                thisScreen.currentPage.stop(function () {
                    //   console.log("stop");
                    runPageFunction();
                });
            } else {
                runPageFunction()
            }
            //debugger;
            function runPageFunction() {
                thisScreen.currentPage = thisScreen.data.pages[pageId];
                let jHtml = thisScreen.currentPage.html;
                document.getElementById("pageHolder").innerHTML = jHtml

                setTimeout(function () {

                    thisScreen.data.pages[pageId].run();
                }, 100)

            }



        }
        thisScreen.changeBkg = function (path) {
            var timout = clearTimeout();
            var speed = 500;
            var tempBkg = document.getElementById("tempBackground");
            Object.assign(tempBkg.style, { "opacity": 0 });
            var img = new Image();
            img.onload = function () {
                Object.assign(tempBkg.style, { "background-image": 'url(' + this.src + ')', "transition": "opacity 500ms" });
                setTimeout(function () {
                    Object.assign(tempBkg.style, { "opacity": 1 });
                }, 1)
                console.log(path);
                timout = setTimeout(function () {
                    Object.assign(tempBkg.style, { "transition": "opacity 0" });
                    Object.assign(thisScreen.holder.style, { "opacity": 1 });
                    Object.assign(tempBkg.style, { "opacity": 0 });
                }, 500)
            }
            img.src = path;
        }
    
    

        var baseHtml = `
            <div id="kxUnit">


                <div class="kxScreen " id="kxScreen">
                <div id="tempBackground"></div>
                <div id="pageHolder"></div>
                <div id="debugger" style="font-size:4px"></div>

                
            </div>
            <div id="kxFrg"></div>

            </div>
        `;


        thisScreen.kxhost = document.getElementById(kxhost);
        thisScreen.kxhost.innerHTML = baseHtml;
        addStyles(thisScreen.kxhost);
        thisScreen.holder = document.getElementById("kxScreen");
        thisScreen.kxunit = document.getElementById("kxUnit");
        thisScreen.fit();
        thisScreen.loadPage("starting"); // Show first page

        // Global events
        window.addEventListener("resize", function () {
            clearTimeout(thisScreen.resizeWindowTimeOut);
            thisScreen.resizeWindowTimeOut = setTimeout(function () {
                console.log("resized");
                thisScreen.fit();
            }, 500)

        });


        function addStyles(destination) {

            var link = document.createElement('link');
            link.id = 'id2';
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap';
            document.head.appendChild(link);


            var svgLib = document.createElement('div');
            svgLib.style = "display:none";
            svgLib.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" style="display:none">
    
               <g id="circle" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet">
               <circle r="10" cx="10" cy="10"/>
               </g>
    
               <g id="recette" viewBox="0 0 32 27">
               <path fill="#FEFEFE" fill-rule="evenodd" stroke="#FFF" d="M26.433 10.14c.064-.001.24-.009.502-.052.301-.05.753-.157 1.202-.384.755-.398 1.628-1.094 1.646-2.951V5.88c-.011-1.5-.596-2.176-1.036-2.555-.62-.52-1.401-.71-1.812-.777-.319-.053-.512-.055-.52-.055h-3.37v7.649l3.388-.002zM5.854 26c-.303-.005-1.324-.063-2.386-.597-.747-.36-2.49-1.499-2.468-4.284V1.565h1.486v19.556c.01 1.501.596 2.175 1.034 2.55.613.52 1.4.712 1.815.782.314.052.506.054.518.054l12.355-.002c.062-.002.239-.008.501-.052.303-.05.757-.158 1.205-.385.755-.398 1.626-1.095 1.647-2.95V1h4.853c.394.01 1.366.086 2.389.596.695.335 2.268 1.358 2.449 3.773h.017v1.386c.021 2.782-1.719 3.924-2.468 4.286-1.02.51-1.993.587-2.364.596h-3.392v9.484c.022 2.783-1.72 3.923-2.47 4.283-1.06.533-2.082.59-2.369.596H5.854z"/>
                </g>
    
               <g id="fav" viewBox="0 0 26 25">
                <path fill="#FFF" d="M18.398 0c-1.955 0-3.912.787-5.397 2.362C11.514.787 9.561 0 7.605 0c-1.943 0-3.887.776-5.37 2.333-2.983 3.11-3.051 8.138.227 11.587C6.12 17.763 11.977 23.924 13.002 25c1.025-1.076 6.88-7.237 10.536-11.08 3.279-3.449 3.209-8.477.23-11.587C22.283.776 20.338 0 18.398 0m3.912 3.877c1.044 1.088 1.62 2.52 1.623 4.032.002 1.623-.657 3.21-1.855 4.471l-7.87 8.277L13 21.925c-2.232-2.349-6.29-6.618-9.076-9.545-1.2-1.26-1.86-2.848-1.858-4.47.002-1.512.581-2.943 1.628-4.037 1.045-1.096 2.433-1.698 3.91-1.698 1.485 0 2.881.61 3.93 1.72L13 5.445l1.467-1.55c1.047-1.11 2.443-1.72 3.93-1.72 1.475 0 2.863.602 3.912 1.702z"/>
            </g>
    
    
               <g id="backArrow" viewBox="0 0 26 26" preserveAspectRatio="xMidYMid meet">
               <path fill="#FFF" fill-rule="evenodd" d="M7.226 13l8.618-8.618 1.723 1.724-6.894 6.893 6.894 6.895-1.723 1.724L7.226 13z"/>
               </g>
    
    
               <g id="krupsLogo"  fill-rule="evenodd"  viewBox="0 0 146 34" preserveAspectRatio="xMidYMid meet">
               <path d="M17.693 1L6.318 15.182 6.318 1 0 1 0 34 6.318 34 6.318 18.683 6.409 18.683 17.737 34 26 34 12.502 16.555 25.457 1zM42.422 16.887H37.31l.01-10.685h5.138c2.817 0 5.065 2.39 5.065 5.342 0 2.953-2.284 5.343-5.1 5.343m11.595-5.707C54.017 5.56 49.683 1 44.314 1H31v33h6.319V18.68L48.74 34H57L46.465 20.779c4.099-1.194 7.552-4.925 7.552-9.599M80.753 22.641c0 3.586-2.802 6.494-6.253 6.494s-6.25-2.908-6.25-6.494V1H62v20.731C62 30.421 66.649 34 74.5 34 82.35 34 87 30.422 87 21.731V1h-6.249l.002 21.641zM107.947 16.887h-4.885l-.005-10.685 4.87.038c2.747 0 4.96 2.434 4.96 5.439 0 3.003-2.191 5.208-4.94 5.208M109.701 1H97v33h6.057l.027-12.64h6.6c5.146 0 9.316-4.556 9.316-10.18C119 5.56 114.845 1 109.701 1M132.544 9.749c0-3.58 2.725-4.568 4.837-4.568 2.154 0 4.536.572 6.472 1.466V1.105C141.61.304 139.49 0 136.852 0c-5.409 0-10.73 2.685-10.73 10.03 0 10.88 13.457 8.29 13.457 14.551 0 2.967-3.123 4.239-5.454 4.239-2.418 0-5.677-.689-8.125-1.763v5.416c2.996 1.032 5.134 1.527 8.477 1.527 6.2 0 11.523-2.731 11.523-9.937 0-11.019-13.456-8.616-13.456-14.314"/>
           </g>
    
     </svg>
        `;
            destination.appendChild(svgLib);


            var sheet = document.createElement('style');
            sheet.id = "kxstylesheet"
            sheet.innerHTML = `
    
            button.change {
                border: none;
                color: transparent;
                overflow: hidden;
                width: 4rem;
                height: 4rem;
                border-radius: 50%;
                border:solid 2px white;
                margin: .25rem;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, .25);
            }
            #gifloader {
                position: absolute;
                left: 0px;
                right: 0px;
                top: 0px;
                bottom: 0px;
                background-color: rgb(0, 0, 0);
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
            }
    
            .viewer .annotation .tooltip{
                display:none!important;
            }
    
    
            /* UI */
            #kxUnit{
                background-color: #333; */
                background-color: rgb(41, 41, 41);
                width: 768px;
                height: 400px;
                /* opacity: 0; */
                border-radius: 16px;
                transition: transform .5s;
                transform-origin: 0 0;
                transform: scale(1) translate(-50%, 0px);
                margin-left: 50%;
                overflow: hidden;
                background-image: url(${imag('unitbkg')});
                -webkit-overflow-scrolling: auto;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/dJREFUeNrMV0tMU0EU5WMppRQoEpTaJoYCITQRNnwSQkIiH9GdrhTY+wlVdm50w9KERGNMjEtQN0p3VgNGwA2BBUHUENBEpeWjSH8KSIF6zstM89SCbW3VSQ7vZd6de06HOzNnUlL+cUuNNrCtrU27urp6Bmjzer1HAoHAwWAwqOc3jUbz1WAwLOXl5b3Iz893AvecTue3mJSEQqGIaGlpKayoqLidmZnpZ1g00Gq1fo7h2N3yRiWgurr6Ioi9MnF9ff3SwMDA65WVlfdbW1s+xAQJvrOP3xgj4zmWOWIW0NjYuK+kpMQhE7W3t897PJ75UJSNsR0dHfNyPHMxZ1QCGGixWJ6zS6/Xb05OTs6if0fk/go8A24Cl4HzgB24KvqeiRi2HY5lDuZiTrWIX4pQdpaVlT2Ym5s7VVRUtD4zM7Oak5NzCN1BwAkMAb8rLi3QxLplffr9fnd5eXn+4uKirrS0dGB2dvaUQpya+quAmpoa+8TExHWQBl0u1ydUtgmfPgO3AFeMK4zCLwD7sWIWzGZzAcRksCbGx8dvSAFpMrq1tbVwenq6h+8jIyPvBbkHuBYHOZtbjPUw1+jo6Ad2koNcMigsAL+4Z2NjIwcF56qqqrKKab8tRMTbPCJHsLKy0orCdJGDXD/UAIojc2xs7CM+GlDBbmwonL7HgCNBG95JTjI2MJfRaDRjeQbq6uoKh4eHN5QZWF9fP03ypqamZUG+JgQkqrGA15Db3NzcvEwucob/Bdhej/PZ3d3tEwOmqCuBAphrXM0BzhNhAZgaG5+1tbU6lYBEt1dqDsmpCMAyMfOJKcoVwe+SIIA7Y0oumuA8FBawubmpqEpPT88SwYEkCAioOSRn2i7B+/6WH1AEZGRkKAW3vb29Jvpzk8BlUHNITkUAdiq3KAy5CkxJEGDhHx+amjNNFN9LPrFHy6V3JAkCbGoOcL4KC4CFesRnb2+vnPpKQJdAcuaqUXMUFBQ4wwJ0Ot192KgvQ0NDB7hdoote71gCBTBXFnMPDg4e4FYMvrthAdyTrVbrPb53dXVJb3cUOJwA8sMiV8hutysdxcXF98n5wzLEeX2FxrO/v98CJ/OWZgI4Cxj/gNwocmimpqbe9PX1KQcRuSI6or9kSC6hEK9HdETCkj2EJTtpMpnWYMm8QgS9wVPgiTgp92rc6VqELdOQHJYsb2FhISuSJdvTlGZnZ//OlJ4TuLybKcUP2NOURmXLabFpVGKw5e7Ozs74bHmEi4lPJmpoaFhyOBy8mHzAZcSPmC2C7+zjN8aoLia+uC4mP1/NbDbbHazbQAxXswDHRHM1i+dyelxeTnGk6sXBor6cPuLGJtf5f9++CzAAfBCRRGu7bLYAAAAASUVORK5CYII=) 16 16, pointer;
                box-shadow: 3px 3px 16px rgba(0,0,0,0.5);
                /*
                .cursor {
                    cursor: url("cursor.png") 0 0, pointer; 
                    cursor: url("cursor.svg") 0 0, pointer; 
                    cursor: -webkit-image-set(url("cursor.png") 1x, url("cursor@2x.png") 2x) 0 0, pointer;
                }
                */
    
    
    
            }
    
            #kxFrg {
                background-image: url(${imag('unitfrg')});
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                opacity: 0.7;
            }
    
    
            .kxScreen {
                font-family: 'Open Sans', sans-serif;
                color: white;
                font-weight: 300;
                background-image: url(${imag('backgroundhome')});
                background-size: cover;
                opacity: 1;
                width: 480px;
                height: 320px;
                overflow: hidden;
                display: block;
                position: absolute;
                border-radius: 3px;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%)
            }
    
    
            #tempBackground{
            width: 100%;
            height: 100%;
            background-size: cover;
            position: absolute;
    
            }
    
           /* .kxScreen.centered{
                top: 0;
                left: 0;
                position: relative;
                margin: 0;
                margin-left:50%;
               
            }*/
    
            .vWheel.wheel{
                width: 80px;
                height: 320px;
                position: absolute;
                top: 0;
                overflow-y: scroll;
                -ms-overflow-style: none;
                scrollbar-width: none;
            scroll-snap-type: y mandatory;
                box-sizing: border-box;
                padding: 0 20px;
            /* scroll-snap-points-y: repeat(54px);*/
                -webkit-overflow-scrolling: touch;
            }
    
            .vWheel.wheel.right{
                left: 341px;
            }
    
            .vWheel.wheel.left{
                left: 54px;
            }
    
            .wheel::-webkit-scrollbar {
                display: none;
            }
            
            .vWheel .wheelItem{
                line-height: 54px;
                height: 54px;
                box-sizing: border-box;
                border-bottom: solid 1px rgba(255, 255, 255, 0.5);
                font-size: 24px;
                text-align: end;
                font-weight: 300;
                scroll-snap-align: center;
                scroll-padding-top: 15px;
                color:rgba(255,255,255,0.6)
            } 
    
            
            .vWheel .wheelItem.selected{
                color:white;
                text-shadow: 0 0 2px white, 0 0 4px white, 0 0 6px white;
            }
            .vWheel .wheelItem:first-child{
                height:133.33px;
            /* margin-top:126px;*/
            }
            .vWheel .wheelItem:last-child{
                border-bottom: none;
                height:133.33px;
            /*   margin-bottom:139px;*/
            }
        .vwheelCenter{
                position:absolute;
                width: 26px;
                height: 3px;
                background-color: #f38230;
                top:159px;
            }
    
    
            .vwheelCenter.right{
                left:436px;
            }
    
            .vwheelCenter.left{
                left:60;
            }
            
            .vwheelUnit{
                position:absolute;
                width: 42px;
                height: 25px;
                top:147px;
                font-size:18px;
                line-height: 25px;
            }
            .vwheelUnit.right{
                left:409px;
            }
    
            .vwheelUnit.left{
                left:40px;
            }
    
            #api-frame{
                height:calc(100% - 320px);
            }
    
    
    
        @media (min-width: 640px) {
        
        }
    
                
        #debugger {
            display: block;
            position: absolute;
            z-index: 99999;
            top: 0;
        }
    
        #mirror {
            width : 128px;
            position:absolute;
            top:0;
            right:0;
    
        }
    
        /* recetteScroller*/
        #recetteScroller{
            position: absolute;
            top: 71px;
            height: 220px;
            width: 100%;
            left: 0;
            background: none;
            font-size: 0;
            white-space: nowrap;
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
            }
            #recetteScroller::-webkit-scrollbar {
                    display: none;
                }
        .recetteScrollerItem{
            display:inline-block;
            position:relative;
            height:100%;
            width:157px;
            background-color:rgba(255,255,255,0.2);
            margin-right:6px;
        }
        .recetteScrollerItem img{
            position: absolute;
            width: 150px;
            height: 150px;
            top: 37px;
            left: 4px;
        }
        `;
            document.head.appendChild(sheet);


        }

    }


    function imag(s) {
        console.log('-' + thisScreen.imgDB[s].hsrc)
        if (thisScreen.imgDB[s].hsrc) {
            return thisScreen.imgDB[s].hsrc
        }
        return "images/" + thisScreen.imgDB[s].uri
    }





}



var vscroller = function (e) {
    let that = this;
    that.pointingDevice = "mouse"; // Sorry Mobile first !
    that.isDown = false;
    that.startY = null;
    that.scrollTop = null;
    that.mouseMove = false;
    that.element = document.getElementById(e);
    that.element.classList.add(that.pointingDevice);
    that.dims = that.element.getBoundingClientRect();
    console.log("dims", that.dims);
    that.scrollCenter = { x: that.dims.left + that.dims.width / 2, y: that.dims.top + that.dims.height / 2 };
    //console.log(e, scrollCenter);
    //let offset = document.querySelector(e+' .wheelItem:first-child').offsetHeight;
    let offset = that.element.querySelector('.wheelItem:first-child').offsetHeight;

    var timout;
    that.element.addEventListener('scroll', function (e) {
        clearTimeout(timout);
        timout = setTimeout(function () {
            that.element.querySelector(".wheelItem.selected").classList.remove("selected");
            let selected = document.elementFromPoint(that.scrollCenter.x, that.scrollCenter.y);
            selected.classList.add("selected");
        }, 100)
    })

    /* document.getElementsByClassName('wheelItem').addEventListener('click', function(e) {
        console.log('clickietm');

     })*/


    var divs = that.element.querySelectorAll('.wheelItem');

    divs.forEach(el => el.addEventListener('click', event => {
        console.log('click', this);

        if (that.mouseMove) return;
        // console.log('click',this);
        //debugger;
        smoothScrollTo(el);
    }));

    /*
    $(e+" .wheelItem").on('click',function(e){
      if(that.mouseMove) return;
      console.log('click');
      //  e.stopImmediatePropagation();
        smoothScrollTo(this);
      }
    );
    */

    function smoothScrollTo(thisItem) {
        //$(e+" .wheelItem.selected").removeClass("selected");
        //debugger;
        console.log(thisItem);
        that.element.querySelectorAll('.wheelItem.selected')[0].classList.remove("selected");
        that.element.scrollTo({ top: thisItem.offsetTop - offset, behavior: 'smooth' });
        thisItem.classList.add("selected");
    }

    that.element.addEventListener('mouseover', (e) => {
        console.log('mouseover');

        if (that.pointingDevice == "touch") return;
        that.element.style.scrollSnapType = "unset";
    });

    that.element.addEventListener('mousedown', (e) => {
        if (that.pointingDevice == "touch") return;
        console.log('mousedown');

        that.isDown = true;
        that.mouseMove = false;
        that.startY = e.pageY - that.element.offsetTop;
        that.scrollTop = that.element.scrollTop;

    });

    that.element.addEventListener('mouseleave', (e) => {
        console.log('mouseleave');

        if (that.pointingDevice == "touch") return;
        that.isDown = false;
        that.mouseMove = false;
        //recenter ()
    });

    that.element.addEventListener('mouseup', (e) => {
        //return;
        // e.stopImmediatePropagation();
        console.log('mouseup');

        if (that.pointingDevice == "touch") return;

        //that.mouseMove = false;
        that.isDown = false;
        recenter();
    });

    that.element.addEventListener('mousemove', (e) => {
        // console.log('mousemove');

        //e.stopImmediatePropagation();
        //console.log("move");
        if (that.pointingDevice == "touch") return;
        that.mouseMove = true;
        if (!that.isDown) return;
        const y = e.pageY - that.element.offsetTop;
        const walk = (y - that.startY) * 1; // increase to scroll faster
        that.element.scrollTop = that.scrollTop - walk;
    });

    that.element.addEventListener('wheel', function (e) {
        console.log(e);
        e.preventDefault()
    });

    that.element.addEventListener('touchstart', (e) => {
        that.pointingDevice = "touch";
    });

    function recenter() {
        console.log(that.scrollCenter.x, that.scrollCenter.y);
        let selected = document.elementFromPoint(that.scrollCenter.x, that.scrollCenter.y);
        smoothScrollTo(selected);
    }

}


function polyfill() {
    // aliases
    var w = window;
    var d = document;
  
    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }
  
    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;
  
    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };
  
    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;
  
    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
  
      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }
  
    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
  
    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }
  
    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  
    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }
  
      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }
  
      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }
  
    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }
  
      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }
  
    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
  
      return overflowValue === 'auto' || overflowValue === 'scroll';
    }
  
    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
  
      return isScrollableY || isScrollableX;
    }
  
    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }
  
      return el;
    }
  
    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;
  
      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;
  
      // apply easing to elapsed time
      value = ease(elapsed);
  
      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;
  
      context.method.call(context.scrollable, currentX, currentY);
  
      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }
  
    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();
  
      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }
  
      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }
  
    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }
  
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );
  
        return;
      }
  
      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };
  
    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }
  
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );
  
        return;
      }
  
      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };
  
    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }
  
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }
  
        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );
  
        return;
      }
  
      var left = arguments[0].left;
      var top = arguments[0].top;
  
      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };
  
    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }
  
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );
  
        return;
      }
  
      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };
  
    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );
  
        return;
      }
  
      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();
  
      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );
  
        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }
  
  
    polyfill();
  
  