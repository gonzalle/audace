"use strict";
const ksLg  = {
  en : {
    "drink" : "Drinks",
    "profile" : "Profile"
  },
  fr: {
    "drink" : "Boissons",
    "profile" : "Profile"
  }
}



let kxapp = function () {

    // Check ES6
    // return false;
    var app = this;
    app.lg = "fr";
    app.ratio;
    app.currentPage = false;
    app.imgDB = {
        unitbkg: { uri: 'unitbkg.png', hsrc: false },
        unitfrg: { uri: 'unitfrg.png', hsrc: false },
        ristretto: { uri: 'ristretto.png', hsrc: false },
        backgroundhome: { uri: 'background_home.jpg', hsrc: false },
    };
    if (Cookies.get('lg') !== undefined){
        app.lg = Cookies.get('lg');
    } else {
        Cookies.set('lg', app.lg);
    }

    var Clock = function(){
      var thisClock = this;
      thisClock.getTime = function(){
          console.log("tick")
          var now = new Date();
          thisClock.time = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
          return thisClock.time;
      }
      thisClock.time = thisClock.getTime;
      thisClock.run = function(clockDom){
        clearInterval(thisClock.timout);
        clockDom.innerHTML = thisClock.getTime();
        // On va rafarichir que toutes les 3 secondes.
        thisClock.timout = setInterval(() => clockDom.innerHTML = thisClock.getTime(), 3000)
      }
      thisClock.stop = function(){
        clearInterval(thisClock.timout);
      }
      thisClock.display = function(){
        
      }

    };

    app.clock = new Clock();

    const _ = app.loc = function(string){
    return ksLg[app.lg][string];
    }


    var baseHtml = `
        <div id="kxUnit">


            <div class="kxScreen " id="kxScreen">
            <div id="tempBackground"></div>
            <div id="pageHolder"></div>
            <div id="pageHolderB"></div>
            <div id="debugger" style="font-size:4px"></div>

            
        </div>
        <div id="kxFrg"></div>

        </div>
    `;

    app.fit = function () {
        // 768 x 400 (was 480x320)

        app.ratio = window.innerWidth / 768;
        console.log(app.ratio);
        Object.assign(app.kxunit.style, { "transform": "scale(" + Math.min(1.5, app.ratio) + ") translateX(-50%)" });
        // if (app.currentPage.name != undefined) app.reloadPage()
    }

    app.reloadPage = function(){
        app.loadPage(app.currentPage.name, null);
    }

    app.buildPage = function (pageId, data, callback) {
        var tempBuild = new DOMParser().parseFromString( app.data.pages[pageId].html(data) , 'text/html').body.firstChild;
        app.data.pages[pageId].built = tempBuild;
        app.data.pages[pageId].build(data, function(){
            callback();
        });
    }

    app.showPage = function(page, fade){
        page.classList.remove('onScreen');
        if (fade) {
          var timout = clearTimeout(); 
          var speed = 500;  
          Object.assign(app.pageHolderB.style, { "opacity": 0, "transition": "opacity 500ms" });
          app.pageHolderB.innerHTML = "";
          var pageB = page.cloneNode(true);
          app.pageHolderB.appendChild(pageB);
          setTimeout(function () {
            Object.assign(app.pageHolderB.style, {"opacity": 1});
                timout = setTimeout(function () {  // The timout before class transition
                    app.pageHolder.innerHTML = "";
                    console.log("displaying page contents");
                    app.pageHolder.appendChild(page);
                    app.pageHolderB.innerHTML = "";
                    Object.assign(app.pageHolderB.style, { "opacity": 0 });
                    setTimeout(function () {
                        page.classList.add('built');
                        page.classList.add('onScreen');
                        app.currentPage.run();
                        //debugger;
                        var clockDom = page.querySelector(".clock");
                        app.clock.stop();
                        if (clockDom !== null) {
                            app.clock.run(clockDom);
                        } 
                        //app.currentPage.run();
                    }, 100)
                },500)
          }, 10)
          //app.pageHolder.appendChild(page);
        }
        else {
            app.pageHolder.innerHTML = "";
            app.pageHolder.appendChild(page);
        }
        //app.currentPage = app.data.pages[pageId];
        //if ()

    }

    app.loadPage = function (pageId, data) {
        console.log("loading " + pageId)

        if (app.currentPage) {
          //  app.currentPage.built = app.pageHolder.innerHTML;
        }

        if (app.data.pages[pageId].built == false) {
            app.buildPage(pageId, data, function () {
                app.currentPage = app.data.pages[pageId];
                app.showPage(app.currentPage.built, true);
            });
        } else {
            //debugger;
            app.currentPage.built.classList.remove('onScreen');
            app.currentPage.quit( () => {});
            app.currentPage = app.data.pages[pageId];
            app.showPage(app.currentPage.built, true);
        }


        return;


        //  }

            /*if (app.pageNode.classList.contains('thatClass')) {
            // do some stuff
            }*/




    }

 
    
    app.init = function (kxhost) {
       // return;
        console.log('init');
        app.data = {
            pages: {
    
                off: {
                name: "off",
                build : function(data, callback){
                    callback();
                },
                run: function () {
                    
                },
                quit: function (callback) {
                    setTimeout(function () {
                        callback();
                    }, 100)
                },
                html:function(){ return(`
        <div class="pageContent" style="background-color:black;">
    
        </div>
        `)}},
    
                starting: {
                    name: "starting",
                    built:false,
                    build : function(data, callback){
                        callback();
                    },
                    run: function () {
                        // app.loadPage("prepare", null);
                        let delay = 2;
    
    
                        // apply styles to the button
                        Object.assign((document.getElementsByClassName("glowPoint")[0]).style, { transitionDuration: delay + "s", left: "350px" });
    
                        //$(".glowPoint").css({"left":'350px',"transition-duration":delay+"s"});
                        Object.assign((document.getElementsByClassName("bar")[0]).style, { "width": '350px', "transition-duration": delay + "s" });
                        let delayStartup = setTimeout(function () {
                            console.log("load wtf4")
    
                            app.loadPage("recettes", null);
                        }, delay * 1000 + 100)
                        /* $(".button.start").on("click", function(){
                            // app.loadPage("recettes");
                        })*/
                    },
                    quit: function (callback) {
                        console.log('quitting '+this.name)
                        debugger;
                        let unloadTime = setTimeout(function () {
                            callback();
                        }, 1000)
                    },
                    html:function(){ return( `
            <div class="pageContent bgHome">
        
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
            INTUITION PREFERENCE +
            </div>
            <div>
            </div>
            </div>
            `)}
        },
    
                recettes: {
                    name: "recettes",
                    built : false,
                    build : function(data, callback){
    
                        // Here we can work on app.pageNode before inserting it then callback to keep on
                        //debugger;
                        var recipes = this.built.querySelectorAll('.recetteScrollerItem');
                        recipes.forEach(el => el.addEventListener('click', event => {
                            //console.log("CLICK",el.dataset.val);
                            app.loadPage("prepare", el.dataset.val);
                        }));
                        callback();
                    },
                    run: function () {
                        console.log('running recettes');
                    },
                    quit: function (callback) {
                        console.log('quitting '+this.name)
                        let unloadTime = setTimeout(function () {
                            callback();
                        }, 10)
                    },
                    html:function(){ 
                        var rhtml = `
            <div class="pageContent bgHome">
            <!--   
            <svg style="position:absolute; width:31px;height:25px;top:12px;left:31px" viewBox="0 0 32 27" >
            <use href="#recette" />
            </svg>

            <div style="position:absolute; height:25px;top:12px;left:31px;font-size:18px;padding-left:36px;height:34px;  border-bottom: solid 2px orange;">${_('drink')}</div>
            -->
            <div class="clock">00:00</div>
            <!--
            <svg style="position:absolute; width:26px;height:25px;top:12px;right:29px" viewBox="0 0 26 25" >
            <use href="#fav" />
            </svg>
            <div style="position:absolute; height:25px;top:12px;right:31px;font-size:18px;padding-right:36px;text-align:right;height:34px;  border-bottom: solid 2px transparent;">${_("profile")}</div>
            -->

            <section id="recetteScroller" >
                `;
            for (let [key, value] of Object.entries(app.data.recipes)) {
               // console.log(`${key}: ${value}`);
               rhtml += ` <div class="recetteScrollerItem" data-val="${key}"><span>${value.name}</span><img src="${imag('ristretto')}"></div>  `
            }
            

                rhtml += `
            </section>
            </div>
            `
            return (rhtml);
        }},
    
                prepare: {
                    name: "prepare",
                    built:false,
                    build : function(data, callback){
                        //this.recipe = app.data.recipes[data];
                        console.log("PREP " , this.recipe);
                        let strength = new vscroller(this.built.querySelector('.strengthScroller'), this.built.querySelector('.strengthScroller_target'));
                        let quantity = new vscroller(this.built.querySelector('.quantityScroller'), this.built.querySelector('.quantityScroller_target'));
    
                        this.built.querySelector('.backToMain').addEventListener('click', function (e) {
                            console.log("back");
                            app.loadPage("recettes", null);
                        })
                        callback();
                    },
                    run: function () {
                        console.log('running prepare');

                        //debugger;
                        // changeBkg("images/test.png")
                        //if (this.built) console.log ('built');
                        //let strength = new vscroller('strengthScroller');
                        //console.log(strength);
                        //let quantity = new vscroller('quantityScroller');
                        /*$(".backToMain").on("click", function(){
                            app.loadPage("recettes", null);
                        })*/
                    },
                    quit: function (callback) {
                        this.built = false // We reset the built as next recipe will not be the same

                        console.log('quitting '+this.name)
                        callback();
                    },
                    html:function(d){ 
                        var recipe = app.data.recipes[d];
                        console.log("RECIPE",recipe);
                        //debugger;
                        return( `
                <div class="pageContent bgHome prepare">
                <div class="backToMain" style="position:absolute;left:12px;top:12px;width:26px;height:26px">
                <span class="title">${recipe.name}</span>
                <svg style="" viewBox="0 0 26 26" >
                <use href="#backArrow" />
                </svg>
                    <!-- <img src="images/back-white.svg">-->
                </div>
                <div class="target quantityScroller_target" style = "position:absolute; width:5px; height:5px;background-color:red; left:384px; top:160px"></div>

                <div class="wheel vWheel right quantityScroller">
                <div class="wheelItem"></div>
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
        
                <div class="target strengthScroller_target" style = "position:absolute; width:5px; height:5px;background-color:red; left:96px; top:160px"></div>
                <div class="wheel vWheel left strengthScroller">
                    <div class="wheelItem "></div>
                    <div class="wheelItem selected">80</div>
                    <div class="wheelItem">90</div>
                    <div class="wheelItem">100</div>
                    <div class="wheelItem"></div>
                </div>
                <div class="vwheelCenter left">&nbsp;</div>
                <div class="vwheelUnit left">ml</div>
            </div>
            `)}
                }
            },
            recipes:{
                ristretto:{
                    name : "Ristretto",
                    image : "ristretto.png",
                },
                espresso:{
                    name : "Espresso",
                    image : "ristretto.png",
                },
                lungo:{
                    name : "Lungo",
                    image : "ristretto.png",
                },
                cafelong:{
                    name : "Café long",
                    image : "ristretto.png",
                },
                doppio:{
                    name : "Doppio",
                    image : "ristretto.png",
                },
                americano:{
                    name : "Americano",
                    image : "ristretto.png",
                },
            }
        }
        app.kxhost = document.getElementById(kxhost);
        //debugger;
        app.kxhost.innerHTML = baseHtml;
        addStyles(app.kxhost);
        app.kxunit = app.kxhost.querySelector("#kxUnit");
        app.holder = app.kxhost.querySelector("#kxScreen");
        app.pageHolder = app.kxhost.querySelector("#pageHolder");
        app.pageHolderB = app.kxhost.querySelector("#pageHolderB");
        app.fit();
        app.loadPage("recettes", null); // Show first page

        // Global events
        window.addEventListener("resize", function () {
            clearTimeout(app.resizeWindowTimeOut);
            app.resizeWindowTimeOut = setTimeout(function () {
                console.log("resized");
                app.fit();
            }, 500)

        });

    }

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


            -webkit-tap-highlight-color: transparent;


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

        .kxScreen .pageContent.bgHome {
            background-image: url(${imag('backgroundhome')});
        }

        #pageHolder, #pageHolderB, .pageContent{
          width: 100%;
          height: 100%;
          position:absolute;
        }

         #pageHolderB {
            pointer-events: none;
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
        background-color:rgba(255,255,255,0.15);
        margin-right:6px;
    }

    .recetteScrollerItem:nth-child(1),.recetteScrollerItem:nth-child(2),.recetteScrollerItem:nth-child(3){
      transform:translateX(480px);
      transition:transform 1s;
    }

    .recetteScrollerItem:first-child{
      transition-delay:1s;
    }
    .recetteScrollerItem:nth-child(2){
      transition-delay:1.5s;
    }
    .recetteScrollerItem:nth-child(3){
      transition-delay:2s;
    }

    .recetteScrollerItem span{
        width: 120px;
        height: 32px;
        position: absolute;
        color: white;
        font-size: 16px;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        top: 14px;
        border-bottom: solid 1px #8c8c8c;
        left: 18px;
    }

    .pageContent.built .recetteScrollerItem{
      transform:translateX(0);
    }



    .recetteScrollerItem img{
        position: absolute;
        width: 150px;
        height: 150px;
        top: 37px;
        left: 4px;
    }


    .prepare span.title{
            width: 120px;
            height: 32px;
            position: absolute;
            color: white;
            font-size: 16px;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            top: 14px;
            border-bottom: solid 1px #8c8c8c;
            left: 18px;
    }



    .clock{
        transition: opacity .6s;
        opacity:0;
        text-align: center;
        position: absolute;
        width: 136px;
        font-size: 20px;
        left: 183px;
        top: 14px;
        height: 32px;
        line-height: 25px;
        border-bottom:solid 3px orange;
    }
    

    .onScreen .clock{
        opacity:1;

    }


    `;
        document.head.appendChild(sheet);

    }

    function imag(s) {
        //debugger;
        console.log(app.imgDB);
        console.log(s);
        console.log(app.imgDB[s]);
        //console.log('-' + app.imgDB[s].hsrc);
        //debugger;
        if (app.imgDB[s].hsrc) {
            return app.imgDB[s].hsrc
        } else {
            return "images/" + app.imgDB[s].uri
        }
    }

}



var vscroller = function (e,centerTarget) {
    let that = this;
    that.pointingDevice = "mouse"; // Sorry Mobile first !
    that.isDown = false;
    that.startY = null;
    that.scrollTop = null;
    that.mouseMove = false;
    that.element = (e);
    that.element.classList.add(that.pointingDevice);
    that.centerTarget = centerTarget;

    var timout;
    that.element.addEventListener('scroll', function (e) {
        clearTimeout(timout);
        timout = setTimeout(function () {
            if(that.element.querySelectorAll('.wheelItem.selected').length > 0) {
              that.element.querySelectorAll('.wheelItem.selected')[0].classList.remove("selected");
            } 
            that.bb = that.centerTarget.getBoundingClientRect(); // Should be set once at init...
            that.selected = document.elementFromPoint(that.bb.left, that.bb.top)
            //debugger;
            that.selected.classList.add("selected");
        }, 100)
    })

    var divs = that.element.querySelectorAll('.wheelItem');

    divs.forEach(el => el.addEventListener('click', event => {
        console.log('click', this);

        if (that.mouseMove) return;
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
        if( thisItem == null) return;
        console.log(thisItem);
        if(that.element.querySelectorAll('.wheelItem.selected').length > 0) {
          that.element.querySelectorAll('.wheelItem.selected')[0].classList.remove("selected");
        } 
        var offset = that.element.querySelector('.wheelItem').offsetHeight;
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
        //return
        //console.log(that.scrollCenter.x, that.scrollCenter.y);
        that.bb = that.centerTarget.getBoundingClientRect(); // Should be set once at init...
        that.selected = document.elementFromPoint(that.bb.left, that.bb.top)

       // let selected = document.elementFromPoint(that.scrollCenter.x, that.scrollCenter.y);
        smoothScrollTo(that.selected);
    }

}


  