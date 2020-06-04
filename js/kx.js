

/*

        app.loadPage = function (pageId, data) {
            console.log("loading " + pageId);

            if (app.currentPage) {
            //  app.currentPage.built = app.pageHolder.innerHTML;
                    app.currentPage.built.classList.remove('onScreen');
                    app.currentPage.quit(() => {});
            }

            if (app.data.pages[pageId].built == false) {
                app.buildPage(pageId, data, function () {
                    app.currentPage = app.data.pages[pageId];
                    app.showPage(app.currentPage.built, true);
                });
            } else {
                //debugger;
                app.currentPage = app.data.pages[pageId];
                app.showPage(app.currentPage.built, true);
            }
            return;
        };

*/




(function() {
    "use strict";

    var kxapp = function () {
        var app = this;
        app.lg = "fr";
        const kxLg  = {
            en : {
            "ristretto":"Ristretto",
            "espresso":"Espresso",
            "lungo":"Lungo",
            "cafelong":"Café Long",
            "doppio":"Doppio",
            "americano":"Americano",
            "espressomacchiato":"e.Macchiato",
            "cappucino":"Cappucino",
            "lattemacchiato":"Latte Macchiato",
            "laitmousse":"Lait Moussé",
            "caffelatte":"Caffe Latte",
            "flatwhite":"Flat White",
            "thevert":"Thé Vert",
            "thenoir":'Thé Noir',
            "infusion":"Infusion",
            "drink" : "Drinks",
            "profile" : "Profile",
            "start":"Start",
            "foaming":"Milk Foaming",
            "cafe":"Coffee Making",
            "hotwater":"Hot Water",
            "steam":"Steam",
            "preheat":"Pre Heating",
            },
            fr: {
            "ristretto":"Ristretto",
            "espresso":"Espresso",
            "lungo":"Lungo",
            "cafelong":"Café Long",
            "doppio":"Doppio",
            "americano":"Americano",
            "espressomacchiato":"e.Macchiato",
            "cappucino":"Cappucino",
            "lattemacchiato":"Latte Macchiato",
            "laitmousse":"Lait Moussé",
            "caffelatte":"Caffe Latte",
            "flatwhite":"Flat White",
            "thevert":"Thé Vert",
            "thenoir":'Thé Noir',
            "infusion":"Infusion",
            "drink" : "Boissons",
            "profile" : "Profile",
            "start" : "Démarrer",
            "foaming":"Moussage lait",
            "cafe":"Café en cours",
            "hotwater":"Eau Chaude",
            "steam":"Vapeur",
            "preheat":"Préchauffage",

            }
        };
        const recipeDuration = 4000; // ms

        // Check ES6
        // return false;
        app.ratio=1;
        app.currentPage = false;
        app.currentRecipe = false;
        app.pointingDevice = "mouse";
        app.imgDB = {
            unitbkg: { uri: 'unitbkg.png', hsrc: false },
            unitfrg: { uri: 'unitfrg.png', hsrc: false },
            bkgSheet: { uri: 'bkgSheet.jpg', hsrc: false },
            recipesSheet: { uri: 'recipesSheet.png', hsrc: false },
            beep: { uri: 'beep.mp3', hsrc: false },
            bleep: { uri: 'bleep.mp3', hsrc: false },
        };
        if (Cookies.get('lg') !== undefined){
            app.lg = Cookies.get('lg');
        } else {
            Cookies.set('lg', app.lg);
        }

        var Clock = function(){
        var thisClock = this;
        thisClock.getTime = function(){
            console.log("tick");
            var now = new Date();
            thisClock.time = (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
            return thisClock.time;
        };
        thisClock.time = thisClock.getTime;
        thisClock.run = function(clockDom){
            clearInterval(thisClock.timout);
            clockDom.innerHTML = thisClock.getTime();
            // On va rafarichir que toutes les 3 secondes.
            thisClock.timout = setInterval(() => clockDom.innerHTML = thisClock.getTime(), 3000);
        };
        thisClock.stop = function(){
            clearInterval(thisClock.timout);
        };
        thisClock.display = function(){
            
        };

        };

        app.clock = new Clock();

        var _ = app.loc = function(string){
            if (kxLg[app.lg][string] )return kxLg[app.lg][string];
            return string;
        };
        

        app.beep = function () {
            var snd = new Audio('images/beep.mp3');
            snd.loop = false;
            snd.play(); 
        }

        app.bleep = function () {
            var snd = new Audio('images/bleep.mp3');
            snd.loop = false;
            snd.play(); 
        }



        var baseHtml = `
            <div id="kxUnit">

                <div class="unitButton kxUnitButtonStart" id="kxUnitButtonStart">
                    <svg style="" viewBox="0 0 64 64">
                    <use href="#start" />
                    </svg>
                </div>

                <div class="unitButton kxUnitButtonHome" id="kxUnitButtonHome">
                    <svg style="" viewBox="0 0 64 64">
                    <use href="#home" />
                    </svg>
                </div>

                <div class="unitButton kxUnitButtonUserOne" id="kxUnitButtonUserOne">
                    <svg style="" viewBox="0 0 64 64">
                    <use href="#userOne" />
                    </svg>
                </div>


                <div class="unitButton kxUnitButtonUserTwo" id="kxUnitButtonUserTwo">
                    <svg style="" viewBox="0 0 64 64">
                    <use href="#userTwo" />
                    </svg>
                </div>


                
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
        };

        app.reloadPage = function(){
            app.loadPage(app.currentPage.name, null);
        };

        app.buildPage = function (pageId, data, callback) {
            var tempBuild = new DOMParser().parseFromString( app.data.pages[pageId].html() , 'text/html').body.firstChild;
            app.data.pages[pageId].built = tempBuild;
            app.data.pages[pageId].build(function(){
                callback();
            });
        };

        app.showPage = function(page, fade){
            page.classList.remove('onScreen'); // if any
            if (fade) {
            var timout = clearTimeout(); 
            var speed = 500;  
            Object.assign(app.pageHolderB.style, { "opacity": 0, "transition": "opacity 500ms" });
            app.pageHolderB.innerHTML = "";
            var pageB = page.cloneNode(true);
            
            app.pageHolderB.appendChild(pageB);
            //app.currentPage.beforeShow(pageB);

            setTimeout(function () {
                Object.assign(app.pageHolderB.style, {"opacity": 1});
                    timout = setTimeout(function () {  // The timout before class transition
                        app.pageHolder.innerHTML = "";
                        console.log("displaying page contents");
                        app.pageHolder.appendChild(page);
                        app.currentPage.beforeShow();
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
                        }, 100);
                    },500);
            }, 10);
            //app.pageHolder.appendChild(page);
            }
            else {
                app.pageHolder.innerHTML = "";
                app.pageHolder.appendChild(page);
                page.classList.add('built','onScreen');
                app.currentPage.run();


            }
            //app.currentPage = app.data.pages[pageId];
            //if ()

        };

        app.loadPage = function (pageId, data) {
            console.log("loading " + pageId);

            if (app.currentPage) {
            //  app.currentPage.built = app.pageHolder.innerHTML;
            //debugger;
             if (app.currentPage.quit()){
                if (app.currentPage.built) app.currentPage.built.classList.remove('onScreen');
             } else {
                 //console.log("quitting screen is forbidden");
                 return;
             }
            }

            if (app.data.pages[pageId].built == false) {
                app.buildPage(pageId, data, function () {
                    app.currentPage = app.data.pages[pageId];
                    app.showPage(app.currentPage.built, true);
                });
            } else {
                //debugger;
                app.currentPage = app.data.pages[pageId];
                // TODO Remove values for following function;
                app.showPage(app.currentPage.built, true);
            }
            return;
        };

    
        
        app.init = function (kxhost) {
        // return;
            console.log('init');
            app.data = {
                pages: {
                    off: {
                        name: "off",
                        built:false,
                        build : function(callback){ callback(); },
                        beforeShow: function () { },
                        run: function () { },
                        quit: function (){return true;},
                        html:function(){ 
                            return(`
                            <div class="pageContent" style="background-image:none; background-color:black;">
                            </div>`);
                        }
                    },

        
                    starting: {
                        name: "starting",
                        built:false,
                        build : function(callback){
                            callback();
                        },
                        beforeShow: function () {

                        },
                        run: function () {
                            var delay = 800;
        
        
                            Object.assign((document.querySelector(".glowPoint")).style, { transitionDuration: delay + "ms", left: "350px" });
        
                            //$(".glowPoint").css({"left":'350px',"transition-duration":delay+"s"});
                            Object.assign((document.querySelector(".bar")).style, { "width": '350px', "transition-duration": delay + "ms" });
                            var delayStartup = setTimeout(function () {
                                app.loadPage("recettes", null);
                            }, delay);
                            /* $(".button.start").on("click", function(){
                                // app.loadPage("recettes");
                            })*/

                        },
                        quit: function (){return true;},

                        html:function(){ return( `
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
                INTUITION PREFERENCE +
                </div>
                <div>
                </div>
                </div>
                `);}
            },
        
                    recettes: {
                        name: "recettes",
                        built : false,
                        build : function(callback){
                            var selection = new hscroller(this.built.querySelector('#recetteScroller'));
        
                            // Here we can work on app.pageNode before inserting it then callback to keep on
                            //debugger;
                            var recipes = this.built.querySelectorAll('.recetteScrollerItem');
                            recipes.forEach(el => el.addEventListener('click', event => {
                            // console.log("CLICK",selection.isClicked);
                                if (!selection.mouseMove) {
                                    app.currentRecipe = app.data.recipes[el.dataset.val];
                                    app.loadPage("prepare", el.dataset.val);
                                }
                            }));

                            //debugger

                            callback();
                        },
                        beforeShow: function () {},
                        run: function () {
                            console.log('running recettes');
                        },
                        quit: function () {
                            console.log('quitting '+this.name);
                           // var unloadTime = setTimeout(function () {
                                return true;
                           // }, 10);
                        },
                        html:function(){ 
                            var rhtml = `
                <div class="pageContent">
                <!--   
                <svg style="position:absolute; width:31px;height:25px;top:12px;left:31px" viewBox="0 0 32 27" >
                <use href="#recette" />
                </svg>

                <div style="position:absolute; height:25px;top:12px;left:31px;font-size:18px;padding-left:36px;height:34px;  border-bottom: solid 2px orange;">${_('drink')}</div>
                -->
                <div class="clock borderOrange">00:00</div>
                <!--
                <svg style="position:absolute; width:26px;height:25px;top:12px;right:29px" viewBox="0 0 26 25" >
                <use href="#fav" />
                </svg>
                <div style="position:absolute; height:25px;top:12px;right:31px;font-size:18px;padding-right:36px;text-align:right;height:34px;  border-bottom: solid 2px transparent;">${_("profile")}</div>
                -->

                <section id="recetteScroller" >
                    `;
                for (var [key, value] of Object.entries(app.data.recipes)) {
                // console.log(`${key}: ${value}`);
                rhtml += `
                    <div class="recetteScrollerItem" data-val="${key}"><div class="title"><span>${_(value.code)}</span></div><div class="thumb"><img nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style="object-position: ${'-'+((value.spritexy.split(';'))[0]*150)+'px'} ${'-'+((value.spritexy.split(';'))[1]*150)+'px'}"></div></div> 
                    `;
                }
                

                    rhtml += `
                </section>
                </div>
                `;
                return (rhtml);
            }},
        
                    prepare: {
                        name: "prepare",
                        built:false,
                        build : function(callback){
                            //this.recipe = app.data.recipes[data];
                            //console.log("PREP " , this.recipe);
                            var thisBuilt = this.built;
                            var zat = this;
                            zat.recipeSequence = false;
                            if (app.currentRecipe){
                                if (app.currentRecipe.leftmenutyp==="strength") {
                                    this.strengthScroller = new vscroller(thisBuilt.querySelector('.strengthScroller'), thisBuilt.querySelector('.strengthScroller_target'));
                                }
                                if (app.currentRecipe.rightmenutyp) {
                                    this.quantityScroller = new vscroller(thisBuilt.querySelector('.quantityScroller'), thisBuilt.querySelector('.quantityScroller_target'));
                                }
                                thisBuilt.querySelector('.backToMain').addEventListener('click', function (e) {
                                    app.loadPage("recettes", null);
                                });
                            }

                            if (app.currentRecipe.canx2) {
                                thisBuilt.querySelector('.plusMinusButton').addEventListener('click', function (e) {
                                    var svgUse = this.querySelector('use');
                                    console.log("PROD", app.currentRecipe);

                                    if (svgUse.href.baseVal == '#plusButton') {
                                        svgUse.setAttribute('href', '#minusButton');
                                        app.currentRecipe.x2 = true;
                                        console.log(thisBuilt.querySelector('img.recipeImage'));
                                        thisBuilt.querySelector('img.recipeImage').style.objectPosition = (`${'-'+((app.currentRecipe.spritexy_x2.split(';'))[0]*150)+'px'} ${'-'+((app.currentRecipe.spritexy_x2.split(';'))[1]*150)+'px'}`);

                                    } else if (svgUse.href.baseVal == '#minusButton') {
                                        svgUse.setAttribute('href', '#plusButton');
                                        app.currentRecipe.x2 = false;
                                        thisBuilt.querySelector('img.recipeImage').style.objectPosition = (`${'-'+((app.currentRecipe.spritexy_x1.split(';'))[0]*150)+'px'} ${'-'+((app.currentRecipe.spritexy_x1.split(';'))[1]*150)+'px'}`);
                                    }
                                });
                            }
                            thisBuilt.querySelector('.startButton').addEventListener('click', function (e) {
                                var seqOutput = thisBuilt.querySelector(".sequence span");
                                thisBuilt.classList.add("running");
                                var seq = [
                                    {fn:()=>{ seqOutput.innerHTML = _("preheat");},delay:0 },
                                ];
                                var addedseq = app.currentRecipe.sequences.split(';');
                                var intertime = recipeDuration/(addedseq.length+1);
                                addedseq.forEach(function(val){
                                    seq.push({fn:()=>{ seqOutput.innerHTML = _(val);},delay:intertime });
                                });
                                seq.push({fn:()=>{ seqOutput.innerHTML = "";},delay:intertime+200 });
                                zat.recipeSequence = new sequence(seq,(completed)=>{
                                    console.log('sync done');
                                    if (completed) {
                                        app.loadPage("ready", null);
                                    } else {
                                        console.log("stopped");
                                    }
                                    zat.recipeSequence = false;
                                });
                            });

                            thisBuilt.querySelector('.stopButton').addEventListener('click', function (e) {
                                console.log('stopping');
                                thisBuilt.classList.remove("running");
                                zat.recipeSequence.stop();
                                zat.recipeSequence = false;
                            });

                            


                            callback();
                        },
                        beforeShow: function () {
                            if (this.quantityScroller){
                            let a = this.built.querySelector('[data-val="'+app.currentRecipe.righmenudefault+'"]');
                            //debugger;
                            this.quantityScroller.scrollToFunction(a);
                        }
                        if (this.strengthScroller){
                            let a = this.built.querySelector('.strengthScroller .wheelItem:nth-child(3)');
                            this.strengthScroller.scrollToFunction(a);
                        }
                        //  debugger;
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
                        quit: function () {
                            console.log(this.recipeSequence);
                            //debugger;
                            if (this.recipeSequence) this.recipeSequence.stop();
                            this.built = false ;// We reset the built as next recipe will not be the same
                            //console.log('quitting '+this.name);
                            return true;
                        },
                        html:function(){ 
                        // var recipe = app.currentRecipe;
                        // console.log("RECIPE",recipe);
                            //debugger;
                            var rightMenu = '';
                            if (app.currentRecipe.rightmenutyp == 'ml' ) {
                            rightMenu = `
                            
                                <div class="target quantityScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:384px; top:160px"></div>

                                <div class="wheel vWheel right quantityScroller">
                                <div class="wheelItem noAction"></div>`;

                                (app.currentRecipe.rightmenuvalues.split(';')).forEach(function(val){
                                rightMenu +=  `
                                <div data-val="${val}" class="wheelItem">${val}</div>`;
                                });

                                rightMenu +=  `<div class="wheelItem noAction last"></div>
                                </div>
                                <div class="vwheelCenter right">&nbsp;</div>
                                <div class="vwheelUnit right">ml</div>
                                `;
                            } else if (app.currentRecipe.rightmenutyp == 'vol') {
                                rightMenu = `
                                <div class="target quantityScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:384px; top:160px"></div>

                                <div class="wheel vWheel right quantityScroller">
                                <div class="wheelItem"></div>

                                <div data-val="1" class="wheelItem selected">M</div>
                                <div data-val="2" class="wheelItem">L</div>
                                <div data-val="3" class="wheelItem">XL</div>

                                <div class="wheelItem last"></div>
                                </div>
                                <div class="vwheelCenter right">&nbsp;</div>
                                <div class="vwheelUnit right">ml</div>
                                `;
                            }
                            return( `
                    <div class="pageContent prepare ${app.currentRecipe.bkg}">
                    <div class="backToMain">
                    <svg style="" viewBox="0 0 26 26" >
                    <use href="#backArrow" />
                    </svg>

                    </div>

                    <div class="centralArea" style="position:absolute;width:222px;left:129px;height:100%;background-color:rgba(255,255,255,0.2)">
                        <div class="title" style="position: absolute; width: 173px;left: 25px; top: 0; height: 46px; border-bottom: solid 1px #8c8c8c;">
                            <span class="title">${_(app.currentRecipe.code)}</span>
                        </div>
                        <div class="sequence" style="position: absolute; width: 173px;left: 25px; top: 54px; height: 46px; text-align:center">
                            <span></span>
                        </div>

                    
                        <div class="imageHolder">

                        <img class="recipeImage" nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style="
                         object-position: ${'-'+((app.currentRecipe.spritexy_x1.split(';'))[0]*150)+'px'} ${'-'+((app.currentRecipe.spritexy_x1.split(';'))[1]*150)+'px'}
                        "/>
                        
                        <img class="recipeImage onrun" nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style="
                         object-position: ${'-'+((app.currentRecipe.spritexy.split(';'))[0]*150)+'px'} ${'-'+((app.currentRecipe.spritexy.split(';'))[1]*150)+'px'}
                        "/>

                        </div>
                        ${app.currentRecipe.canx2 ? `
                        <div class="plusMinusButton" style="position: absolute;
                        left: 151px;
                        top: 104px;
                        width: 32px;
                        height: 32px;">
                            <svg viewBox="0 0 32 32" class="">
                            <use href="#plusButton" />
                            </svg>
                        </div>
                        `:``  }

                        <div class="progressBarBkg">
                        <div class="progressBar">
                        </div>

                        </div>

                        <div class="stopButton borderOrange">${_('stop')}</div>

                        <div class="startButton borderOrange">${_('start')}</div>


                    </div>

                    ${rightMenu}

                    ${app.currentRecipe.leftmenutyp === "strength" ? `
                    <div class="target strengthScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:96px; top:160px"></div>
                    <div class="wheel vWheel left strengthScroller">
                        <div class="wheelItem noAction"></div>

                            <div class="wheelItem  strength">
                            <svg viewBox="0 0 57 54" class="">
                            <use href="#force1" />
                            </svg>
                        </div>

                        <div class="wheelItem selected strength">
                            <svg viewBox="0 0 57 54" class="">
                            <use href="#force2" />
                            </svg>
                        </div>

                        <div class="wheelItem strength">
                            <svg viewBox="0 0 57 54" class="">
                            <use href="#force3" />
                            </svg>
                        </div>

                        <div class="wheelItem noAction"></div>

                    </div>
                    <div class="vwheelCenter left">&nbsp;</div>
                    <!--<div class="vwheelUnit left">ml</div>-->

                    ` :''}

                </div>
                `);}
                    },
                
                    ready: {
                        name: "ready",
                        built:false,
                        build : function(callback){ callback(); },
                        beforeShow: function () { },
                        run: function () { },
                        quit: function () {
                            this.built = false ;// We reset the built as next recipe will not be the same
                           return true;
                        },
                        html:function(){ 
                            return(`
                            <div class="pageContent ready ${app.currentRecipe.bkg}">

                            <div class="centralArea" style="position:absolute;width:360px;left:60px;height:100%;background-color:rgba(255,255,255,0.2)">
                            <div class="title" style=" position: absolute;
                            width: 173px;
                            left: 91px;
                            top: 0;
                            height: 46px;
                            border-bottom: solid 1px #8c8c8c;">
                                <span class="title">${_(app.currentRecipe.code)}</span>
                            </div>
                            <div class="enjoy" style="position: absolute;
                            width: 100%;
                            left: 0;
                            top: 90px;
                            height: 46px;
                            text-align: center;
                            font-size: 24px;">
                                <span>Bonne Dégustation</span>
                            </div>
                            
                                <div class="imageHolder" style="
                                top: 133px;
                                left: 104px;
                                transform: scale(1.3);">
                                    <img class="recipeImage " nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style="
                                    object-position: ${'-'+((app.currentRecipe.spritexy.split(';'))[0]*150)+'px'} ${'-'+((app.currentRecipe.spritexy.split(';'))[1]*150)+'px'}
                            "/>
                            </div>
                            </div>
                            </div>
                            `);
                        }
                    },

                    userOne: {
                        name: "userOne",
                        built:false,
                        build : function(callback){ callback(); },
                        beforeShow: function () { },
                        run: function () { },
                        quit: function (){return true;},
                        html:function(){ 
                            return(`
                            <div class="pageContent ready bkg13">
                            USER ONE
                            
                            </div>
                            `);
                        }
                    },

                    userTwo: {
                        name: "userTwo",
                        built:false,
                        build : function(callback){ callback(); },
                        beforeShow: function () { },
                        run: function () { },
                        quit: function (){return true;},
                        html:function(){ 
                            return(`
                            <div class="pageContent ready bkg6">
                            USER TWO
                            </div>
                            `);
                        }
                    },


                },
                recipes:{
ristretto:{code:'ristretto',
spritexy:'0;0',
spritexy_x1:'1;0',
spritexy_x2:'2;0',
bkg:'bkg2',
family:'black',
sequences:'cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'ml',
rightmenuvalues:'20;25;30;35;40',
righmenudefault:'40',
runmenutyp:'ml',
runmenuvalues:'20;25;30;35;40',
runmenudefault:'60',
},
espresso:{code:'espresso',
spritexy:'3;0',
spritexy_x1:'4;0',
spritexy_x2:'5;0',
bkg:'bkg4',
family:'black',
sequences:'cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'ml',
rightmenuvalues:'40;50;60;70',
righmenudefault:'50',
runmenutyp:'ml',
runmenuvalues:'40;50;60;70',
runmenudefault:'130',
},
lungo:{code:'lungo',
spritexy:'0;1',
spritexy_x1:'1;1',
spritexy_x2:'2;1',
bkg:'bkg4',
family:'black',
sequences:'cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'ml',
rightmenuvalues:'80;90;100;110;120;130;140;150;160;170;180',
righmenudefault:'120',
runmenutyp:'ml',
runmenuvalues:'80;90;100;110;120;130;140;150;160;170;180',
runmenudefault:'60',
},
cafelong:{code:'cafelong',
spritexy:'3;1',
spritexy_x1:'4;1',
spritexy_x2:'5;1',
bkg:'bkg3',
family:'black',
sequences:'cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'ml',
rightmenuvalues:'20;25;30;35;40',
righmenudefault:'30',
runmenutyp:'ml',
runmenuvalues:'20;25;30;35;40',
runmenudefault:'60',
},
doppio:{code:'doppio',
spritexy:'0;2',
spritexy_x1:'1;2',
spritexy_x2:'2;2',
bkg:'bkg2',
family:'black',
sequences:'cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'ml',
rightmenuvalues:'20;30;40;50;60;70',
righmenudefault:'30',
runmenutyp:'ml',
runmenuvalues:'20;30;40;50;60;70',
runmenudefault:'60',
},
americano:{code:'americano',
spritexy:'3;2',
spritexy_x1:'3;2',
spritexy_x2:'3;2',
bkg:'bkg3',
family:'black',
sequences:'cafe;hotwater',
canx2:false,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'ml',
rightmenuvalues:'20;30;40;50;60;70',
righmenudefault:'30',
runmenutyp:'ml',
runmenuvalues:'20;30;40;50;60;70',
runmenudefault:'60',
},
emacchiato:{code:'emacchiato',
spritexy:'0;3',
spritexy_x1:'1;3',
spritexy_x2:'2;3',
bkg:'bkg7',
family:'latte',
sequences:'steam;cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
},
cappucino:{code:'cappucino',
spritexy:'3;3',
spritexy_x1:'4;3',
spritexy_x2:'5;3',
bkg:'bkg10',
family:'latte',
sequences:'foaming;steam;cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'L',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'L',
},
lattemacchiato:{code:'lattemacchiato',
spritexy:'0;4',
spritexy_x1:'1;4',
spritexy_x2:'2;4',
bkg:'bkg9',
family:'latte',
sequences:'steam;cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
},
laitmousse:{code:'laitmousse',
spritexy:'3;4',
spritexy_x1:'4;4',
spritexy_x2:'5;4',
bkg:'bkg8',
family:'latte',
sequences:'foaming;',
canx2:true,
leftmenutyp:'false',
leftmenuvalues:'1;2;3',
leftmenudefault:'false',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'sec',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
},
caffelatte:{code:'caffelatte',
spritexy:'0;5',
spritexy_x1:'1;5',
spritexy_x2:'2;5',
bkg:'bkg9',
family:'latte',
sequences:'steam;cafe',
canx2:true,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
},
flatwhite:{code:'flatwhite',
spritexy:'3;5',
spritexy_x1:'3;5',
spritexy_x2:'3;5',
bkg:'bkg10',
family:'latte',
sequences:'cafe;cafe;steam',
canx2:false,
leftmenutyp:'strength',
leftmenuvalues:'1;2;3',
leftmenudefault:'2',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
},
thevert:{code:'thevert',
spritexy:'4;5',
spritexy_x1:'4;5',
spritexy_x2:'4;5',
bkg:'bkg11',
family:'water',
sequences:'hotwater',
canx2:false,
leftmenutyp:'false',
leftmenuvalues:'false',
leftmenudefault:'false',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
},
thenoir:{code:'thenoir',
spritexy:'5;5',
spritexy_x1:'5;5',
spritexy_x2:'5;5',
bkg:'bkg12',
family:'water',
sequences:'hotwater',
canx2:false,
leftmenutyp:'false',
leftmenuvalues:'false',
leftmenudefault:'false',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
},
infusion:{code:'infusion',
spritexy:'5;2',
spritexy_x1:'5;2',
spritexy_x2:'5;2',
bkg:'bkg14',
family:'water',
sequences:'hotwater',
canx2:false,
leftmenutyp:'false',
leftmenuvalues:'false',
leftmenudefault:'false',
rightmenutyp:'vol',
rightmenuvalues:'M;L;XL',
righmenudefault:'M',
runmenutyp:'ml',
runmenuvalues:'M;L;XL',
runmenudefault:'M',
}

    }
            };
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
                    //todo include method for checking mouse events
                }, 500);
            });
            app.kxunit.querySelector("#kxUnitButtonStart").addEventListener('click', event => {
                if (app.currentPage.name=="off"){
                    app.bleep();
                    app.loadPage("starting", null); // Show first page
                } else {
                    app.beep();
                    app.loadPage("off", null); // Show first page
                    for (var [key, value] of Object.entries(app.data.pages)) {
                        //console.log(key,value.built); 
                        value.built = false;
                    }
                }
            });
            app.kxunit.querySelector("#kxUnitButtonHome").addEventListener('click', event => {
                if (app.currentPage.name=="off") return;
                console.log('click', this);
                app.loadPage("recettes", null);
            });
            app.kxunit.querySelector("#kxUnitButtonUserOne").addEventListener('click', event => {
                if (app.currentPage.name=="off") return;
                app.loadPage("userOne", null);

            });
            app.kxunit.querySelector("#kxUnitButtonUserTwo").addEventListener('click', event => {
                if (app.currentPage.name=="off") return;
                console.log('click', this);
                app.loadPage("userTwo", null);
            });
        };

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
            
            <g id="plusButton" class="plusMinus" fill-rule="evenodd"  viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
                <circle  cx="16" cy="16" r="13.5" fill="white"/>
                <circle class="userFIllColor" cx="16" cy="16" r="13" fill="#f38230"/>
                <path  d="M14.9,17.1h-3.8V15h3.8v-3.8h2.1V15h3.8v2.1h-3.8v3.8h-2.1V17.1z" fill="white"/>
            </g>

            <g id="minusButton" class="plusMinus"  fill-rule="evenodd"  viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
                <circle  cx="16" cy="16" r="13.5" fill="white"/>
                <circle class="profileColor"  class="userFIllColor" cx="16" cy="16" r="13" fill="#f38230"/>
                <rect x="12.2" y="15"  width="7.7" height="2.1" fill="white"/>
            </g>




            <g id="sizeM" fill="rgba(255,255,255,0.6)" viewBox="0 0 57 54">
            <path d="M43.085,19.825c-0.158-2.177-1.505-3.096-2.07-3.387c-0.836-0.442-1.621-0.527-2.029-0.538h-4.104v17.8
                c-0.006,0.629-0.115,1.136-0.332,1.551c-0.273,0.521-0.666,0.788-0.969,0.959c-0.353,0.19-0.708,0.286-1.34,0.375L21.63,36.547
                c-0.275-0.047-0.971-0.208-1.48-0.668c-0.379-0.346-0.815-0.905-0.822-2.171l-0.054-17.311H17.9v17.304
                c-0.006,0.878,0.171,1.656,0.526,2.312c0.485,0.898,1.189,1.357,1.56,1.548c0.879,0.47,1.708,0.532,2.031,0.538h10.204
                c0.241-0.005,1.099-0.057,1.984-0.531c0.379-0.193,1.088-0.652,1.576-1.553c0.357-0.66,0.534-1.438,0.526-2.307v-8.248h2.71
                c0.312-0.009,1.132-0.079,1.984-0.533c0.378-0.193,1.084-0.652,1.571-1.555c0.356-0.657,0.533-1.434,0.526-2.312L43.085,19.825z
                M42.173,21.066c-0.008,0.779-0.164,1.347-0.388,1.776c-0.313,0.597-0.762,0.934-1.182,1.17c-0.432,0.233-0.867,0.338-1.145,0.385
                l-3.226,0.055v-7.537h2.786c0.871,0.119,1.59,0.319,2.17,0.838c0.41,0.376,0.975,1.04,0.985,2.543V21.066z"/>
            <path d="M34.293,22.224H19.982v11.574c0,0.626,0.149,1.086,0.458,1.407c0.308,0.32,0.753,0.476,1.36,0.476h10.596
                c0.434,0,1.007-0.017,1.42-0.502c0.326-0.38,0.479-0.97,0.479-1.854L34.293,22.224z M31.773,33.262h-1.428V26.65h-0.024
                l-2.375,6.612h-1.236l-2.376-6.612h-0.024v6.612h-1.428v-8.568h2.112l2.364,6.708h0.024l2.304-6.708h2.088V33.262z"/>
        </g>


        <g id="sizeL" fill="rgba(255,255,255,0.6)" viewBox="0 0 57 54">
            <path d="M17.556,39.093h15.661c0.685-0.022,1.506,0,2.099-0.653c0.465-0.508,0.681-1.312,0.681-2.526l0.001-15.5H15v16.164
                c0,0.847,0.209,1.464,0.639,1.887C16.069,38.887,16.696,39.093,17.556,39.093z M29.376,32.75v1.75h-6.173v-9.994h2.119v8.244
                H29.376z"/>
            <path d="M49.078,16.901c-0.229-2.995-2.18-4.258-3.003-4.66c-1.211-0.608-2.358-0.726-2.947-0.741h-5.958v24.942
                c-0.01,0.908-0.177,1.645-0.512,2.249c-0.43,0.776-1.068,1.178-1.506,1.409c-0.556,0.286-1.116,0.42-1.489,0.481
                c-0.316,0.055-0.532,0.062-0.605,0.064l-15.192,0.003c-0.025,0-0.258-0.005-0.636-0.067c-0.513-0.087-1.484-0.329-2.231-0.97
                c-0.586-0.505-1.26-1.32-1.271-3.159V12.201H11.9v24.242c-0.009,1.212,0.248,2.285,0.765,3.191c0.703,1.232,1.723,1.86,2.261,2.122
                c1.27,0.645,2.479,0.735,2.95,0.744h15.182c0.354-0.008,1.606-0.084,2.893-0.734c0.549-0.267,1.574-0.898,2.277-2.131
                c0.519-0.904,0.776-1.977,0.767-3.181V24.69h4.176c0.457-0.013,1.653-0.11,2.891-0.736c0.548-0.267,1.572-0.899,2.275-2.132
                c0.517-0.904,0.774-1.976,0.765-3.188L49.078,16.901z M43.774,22.77c-0.331,0.055-0.55,0.062-0.621,0.064l-4.159,0.003v-9.484
                h4.141c0.021,0,0.258,0.004,0.64,0.069c0.406,0.066,1.438,0.294,2.227,0.964c0.586,0.509,1.261,1.329,1.274,3.167v1.08
                c-0.009,0.902-0.176,1.637-0.511,2.246c-0.423,0.766-1.034,1.16-1.513,1.414C44.708,22.571,44.147,22.706,43.774,22.77z"/>
        </g>



        <g id="sizeXL" fill="rgba(255,255,255,0.6)" viewBox="0 0 57 54">
            <path d="M55.471,13.321c-0.308-4.063-2.931-5.773-4.037-6.316C49.802,6.178,48.263,6.021,47.474,6h-8.008v33.793
                c-0.015,1.23-0.24,2.227-0.69,3.047c-0.568,1.036-1.384,1.567-2.023,1.91c-0.745,0.386-1.498,0.567-2,0.651
                c-0.429,0.074-0.72,0.084-0.815,0.088l-20.419,0.004c-0.003,0-0.324-0.002-0.854-0.092c-0.689-0.118-1.995-0.446-2.999-1.313
                c-0.788-0.684-1.693-1.789-1.709-4.28V6.95H5.5v32.844c-0.013,1.643,0.333,3.096,1.027,4.322c0.946,1.67,2.317,2.522,3.041,2.877
                c1.711,0.874,3.329,0.995,3.956,1.006h20.404c0.476-0.009,2.163-0.108,3.896-0.995c0.737-0.359,2.115-1.213,3.063-2.886
                c0.696-1.227,1.042-2.678,1.028-4.311V23.87l5.61,0c0.612-0.016,2.216-0.146,3.89-0.996c0.735-0.361,2.109-1.217,3.057-2.889
                c0.694-1.226,1.04-2.678,1.027-4.32L55.471,13.321z M53.047,14.2v1.464c-0.013,1.211-0.243,2.235-0.688,3.043
                c-0.568,1.037-1.39,1.571-2.033,1.916c-0.731,0.377-1.484,0.56-1.984,0.646c-0.433,0.072-0.723,0.084-0.827,0.087l-5.599,0.003
                V8.51h5.564c0.003,0,0.327,0.002,0.86,0.092c0.681,0.114,1.975,0.436,2.994,1.306C52.122,10.599,53.028,11.711,53.047,14.2z"/>
            <path d="M9.667,18.075v21.901c0,1.146,0.281,1.982,0.858,2.555c0.577,0.573,1.42,0.852,2.577,0.852h21.05
                c0.913-0.004,2.049-0.008,2.84-0.905c0.611-0.692,0.896-1.774,0.896-3.402v-21H9.667z M21.831,35.047l-1.641-2.944l-1.734,2.944
                h-2.098l2.777-4.4l-2.643-4.236h2.156l1.541,2.812l1.583-2.812h2.086l-2.643,4.166l2.807,4.471H21.831z M31.197,35.047H25.08
                v-8.636h1.805v7.083h4.312V35.047z"/>
        </g>



        <g id="force1"  viewBox="0 0 57 54">
            <path id="a_2_" d="M29.523,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C37.884,21.102,34.217,16.235,29.523,15.61z M20.616,27
                c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                C22.951,35.25,20.616,31.463,20.616,27z M28.5,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                c3.408,1.099,5.939,4.999,5.939,9.643C36.384,32.493,32.847,36.962,28.5,36.962z"/>
        </g>



        <g id="force2"  viewBox="0 0 57 54">
            <g id="b_1_">
                <path d="M19.388,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                    C12.755,16.099,8.982,21.018,8.982,27c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                    c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C27.749,21.102,24.083,16.235,19.388,15.61z M10.482,27
                    c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                    c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                    C12.817,35.25,10.482,31.463,10.482,27z M18.366,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                    c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                    c3.408,1.099,5.939,4.999,5.939,9.643C26.249,32.493,22.712,36.962,18.366,36.962z"/>
            </g>
            <g id="a_1_"  viewBox="0 0 57 54">
                <path d="M39.657,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                    c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                    c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C48.018,21.102,44.352,16.235,39.657,15.61z M30.751,27
                    c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                    c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                    C33.086,35.25,30.751,31.463,30.751,27z M38.635,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                    c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                    c3.408,1.099,5.939,4.999,5.939,9.643C46.518,32.493,42.981,36.962,38.635,36.962z"/>
            </g>
        </g>

        <g id="force3" viewBox="0 0 57 54">
            <g id="c">
                <g>
                    <g>
                        <path d="M10.756,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                            C4.122,16.099,0.349,21.018,0.349,27c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                            c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C19.116,21.102,15.45,16.235,10.756,15.61z M7.391,36.513
                            C4.184,35.25,1.849,31.463,1.849,27c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007
                            c0.759,1.392,1.367,3.199,1.095,5.211c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505
                            C6.576,32.681,6.945,34.741,7.391,36.513z M9.733,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                            c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                            c3.408,1.099,5.939,4.999,5.939,9.643C17.616,32.493,14.08,36.962,9.733,36.962z"/>
                    </g>
                </g>
            </g>
            <g id="b">
                <g>
                    <g>
                        <path d="M48.29,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                            c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                            c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C56.651,21.102,52.984,16.235,48.29,15.61z
                            M44.925,36.513c-3.207-1.263-5.542-5.05-5.542-9.513c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007
                            c0.759,1.392,1.367,3.199,1.095,5.211c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505
                            C44.11,32.681,44.48,34.741,44.925,36.513z M47.267,36.962c-0.23,0-0.457-0.019-0.682-0.044
                            c-0.499-1.804-0.983-4.075-0.851-5.772c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98
                            c0.26-1.925-0.137-3.659-0.753-5.101c3.408,1.099,5.939,4.999,5.939,9.643C55.151,32.493,51.614,36.962,47.267,36.962z"/>
                    </g>
                </g>
            </g>
            <g id="a">
                <g>
                    <path d="M29.523,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                        c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                        c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C37.884,21.102,34.217,16.235,29.523,15.61z M20.616,27
                        c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                        c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                        C22.951,35.25,20.616,31.463,20.616,27z M28.5,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                        c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                        c3.408,1.099,5.939,4.999,5.939,9.643C36.384,32.493,32.847,36.962,28.5,36.962z"/>
                </g>
            </g>
        </g>


    <g id="start" viewBox="0 0 64 64">
        <path fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M61.089,24.79
            C58.431,14.033,49.967,5.569,39.21,2.911"/>
        <path fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M2.911,39.21
            C5.569,49.967,14.033,58.431,24.79,61.089"/>
        <path fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M24.79,2.911
            C14.033,5.569,5.569,14.033,2.911,24.79"/>
        <path fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M39.21,61.089
            c10.757-2.658,19.221-11.122,21.879-21.879"/>
        <path fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M39.21,38.247"/>
        <path fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" d="M24.79,20.865
            C21.144,23.231,18.727,27.33,18.727,32c0,7.331,5.943,13.273,13.273,13.273S45.273,39.331,45.273,32
            c0-4.67-2.417-8.769-6.064-11.135"/>
        <line fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" x1="32" y1="30.069" x2="32" y2="12.843"/>
    </g>

    <g id="userTwo" viewBox="0 0 64 64">
        <circle fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" cx="32" cy="32" r="21.621"/>
        <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M46.36,39.518c-2.152-2.97-5.203-5.241-8.752-6.425
            c-1.568,1.165-3.504,1.863-5.608,1.863c-2.104,0-4.04-0.698-5.608-1.863c-3.549,1.185-6.6,3.456-8.752,6.425"/>
        <circle fill="none" stroke="#FFFFFF" stroke-miterlimit="10" cx="32" cy="25.534" r="6.756"/>
        <path fill="#FFFFFF" d="M29.595,44.89c1.863-1.563,3.116-2.665,3.116-3.603c0-0.629-0.391-0.973-1.073-0.973
            c-0.518,0-0.94,0.318-1.308,0.659l-0.809-0.813c0.675-0.682,1.327-1.029,2.322-1.029c1.369,0,2.299,0.819,2.299,2.072
            c0,1.095-1.125,2.261-2.386,3.359c0.373-0.038,0.844-0.073,1.181-0.073h1.541v1.266h-4.884V44.89z"/>
    </g>

    <g id="userOne" viewBox="0 0 64 64">
        <circle fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" cx="32" cy="32" r="21.621"/>
        <path fill="none" stroke="#FFFFFF" stroke-miterlimit="10" d="M46.36,39.518c-2.152-2.97-5.203-5.241-8.752-6.425
            c-1.568,1.165-3.504,1.863-5.608,1.863c-2.104,0-4.04-0.698-5.608-1.863c-3.549,1.185-6.6,3.456-8.752,6.425"/>
        <circle fill="none" stroke="#FFFFFF" stroke-miterlimit="10" cx="32" cy="25.534" r="6.756"/>
        <path fill="#FFFFFF" d="M32.492,45.935h-1.301v-4.908c-0.477,0.444-1.037,0.773-1.683,0.987v-1.182
            c0.34-0.111,0.709-0.322,1.107-0.633s0.672-0.673,0.82-1.087h1.056V45.935z"/>
    </g>

    <g id="home" viewBox="0 0 64 64">
        <circle fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" cx="32" cy="32" r="21.621"/>
        <polygon fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" points="42.119,39.874 21.881,39.874 
            21.881,29.3 32,20.126 42.119,29.3 	"/>
    </g>





            

            </svg>
            `;
            destination.appendChild(svgLib);

            var sheet = document.createElement('style');
            sheet.id = "kxstylesheet";
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


            .unitButton {
                position: absolute;
                opacity: 0.58;
                width: 72px;
                height: 72px;
            }

            .unitButton.kxUnitButtonStart{
                left: 30px;
                top: 86px;
            }

            .unitButton.kxUnitButtonHome{
                left: 673px;
                top: 86px;
            }

            .unitButton.kxUnitButtonUserOne{
                left: 30px;
                top: 254px;
            }

            .unitButton.kxUnitButtonUserTwo{
                left: 673px;
                top: 254px;
            }


            /*BACKGROUNDS*/

            .bkg1,.bkgDefault {background-position:0 0!important}
            .bkg2 {background-position:-480px 0!important}
            .bkg3 {background-position:-960px 0!important}
            .bkg4 {background-position:-1440px 0!important}
            .bkg5 {background-position:0 -320px!important}
            .bkg6 {background-position:-480px -320px!important}
            .bkg7 {background-position:-960px -320px!important}
            .bkg8 {background-position:-1440px -320px!important}
            .bkg9 {background-position:0 -640px!important}
            .bkg10 {background-position:-480px -640px!important}
            .bkg11 {background-position:-960px -640px!important}
            .bkg12 {background-position:-1440px -640px!important}
            .bkg13 {background-position:0 -960px!important}
            .bkg14 {background-position:-480px -960px!important}
            .bkg15 {background-position:-960px -960px!important}
            .bkg16 {background-position:-1440px -960px!important}



            /*COLORS*/
            .kxScreen {
                --orange:#f38230;
                --cyan:#13aec0;
                --turquoise:#0f8768;
                --green:#6c9106;
                --gold:#fffb01;
                --red:#c80000;
                --fushia:#c90563;
                --pink:#ef52bb;
                --violet:#8d3fcf;
                --blue:#2855ff;
            }

            .orange .userFIllColor{
                fill:var(--orange);
                background-color:var(--orange);
            }
            .orange .userBorderColor,.borderOrange{
                border-color:var(--orange)!important;
            }

            .cyan .userFIllColor{
                fill:#13aec0;
                background-color:#13aec0;
            }
            .cyan .userBorderColor{
                border-color:#13aec0;
            }

            .turquoise .userFIllColor{
                fill:#0f8768;
                background-color:#0f8768;
            }
            .turquoise .userBorderColor{
                border-color:#0f8768;
            }

            .green .userFIllColor{
                fill:#6c9106;
                background-color:#6c9106;
            }
            .green .userBorderColor{
                border-color:#6c9106;
            }

            .gold .userFIllColor{
                fill:#fffb01;
                background-color:#fffb01;
            }
            .gold .userBorderColor{
                border-color:#fffb01;
            }

            .red .userFIllColor{
                fill:#c80000;
                background-color:#c80000;
            }
            .red .userBorderColor{
                border-color:#c80000;
            }

            .fushia .userFIllColor{
                fill:#c90563;
                background-color:#c90563;
            }
            .fushia .userBorderColor{
                border-color:#c90563;
            }

            .pink .userFIllColor{
                fill:#ef52bb;
                background-color:#ef52bb;
            }
            .pink .userBorderColor{
                border-color:#ef52bb;
            }

            .violet .userFIllColor{
                fill:#8d3fcf;
                background-color:#8d3fcf;
            }
            .violet .userBorderColor{
                border-color:#8d3fcf;
            }

            .blue .userFIllColor{
                fill:#2855ff;
                background-color:#2855ff;
            }
            .blue .userBorderColor{
                border-color:#2855ff;
            }

            #kxUnit{
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

            .kxScreen .pageContent {
                background-image: url(${imag('bkgSheet')});
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
            .backToMain{
            position:absolute;
            left:12px;top:12px;
            width:26px;
            height:26px;
            transition:opacity .3s;
            }

            .running .backToMain{
             opacity : 0;
            }


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


            .strengthScroller.wheel.vWheel.left {
                width: 97px;
                left: 33px;
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

            .vWheel .wheelItem{
                fill:rgba(255,255,255,.6);
            }

            



            .vWheel .wheelItem.selected{
                color:white;
                text-shadow: 0 0 2px white, 0 0 4px white, 0 0 6px white;
            }

            
            


            .vWheel .wheelItem svg, .vWheel .wheelItem.noAction{
                pointer-events: none;       
            }

            .vWheel .wheelItem.selected svg{
                filter: drop-shadow(0 0 4px white);
                fill:rgba(255,255,255,1);
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

            .vWheel.strengthScroller .wheelItem{
                transition:opacity .3s;
            }

            .running .vWheel.strengthScroller .wheelItem:not(.selected){
                opacity:0;
            }

            .running .vWheel.strengthScroller .wheelItem{
                border-color:transparent!important;
            }

            .running .vWheel.quantityScroller .wheelItem.selected ~ .wheelItem{
                opacity:0;
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

            .imageHolder{
                position: absolute;
                width: 150px;
                height: 150px;
                top: 85px;
                left: 36px;
                overflow: hidden;
                transform-origin: 50% 35%;
                transform: scale(1.1);
            }

            img.recipeImage{
                width: 900px;
                position:absolute;
                height: 900px;
                pointer-events: none;
                opacity:1;
                transition:opacity .5s;

            }
            
            img.recipeImage.onrun {
                opacity:0;
            }
            
            .running img.recipeImage{
                opacity:0;
            }
            
            .running img.recipeImage.onrun {
                opacity:1;
            }

            .plusMinusButton{
                position: absolute;
                left: 151px;
                top: 104px;
                width: 32px;
                height: 32px
                transition:opacity .3s;
            }

            .running .plusMinusButton{
                opacity:0;
            }



            .startButton, .stopButton {
                position: absolute;
                width: 175px;
                height: 42px;
                left: 23px;
                top: 261px;
                line-height: 42px;
                border: solid 2px orange;
                text-align: center;
                font-weight: 600;
            }
            .stopButton {
                display:none;
            }
            .running .stopButton {
                display:block;
            }
            .running .startButton {
                display:none;
            }


            .progressBarBkg {
                position: absolute;
                width: 175px;
                height: 3px;
                left: 23px;
                top: 250px; background-color:rgba(255,255,255,0.2);
                opacity:0;
            }
            .running .progressBarBkg {
                opacity:1;
            }


            .progressBar{
                position: absolute;
                width: 0%;
                height: 3px;
                left: 0;
                top: 0;
                box-shadow: 0 0 5px rgba(255,255,255,1);
                transition: width 0ms linear 0ms;
                background-color: white;
            }

            .running .progressBar{
                width: 100%;
                transition: width 4000ms linear 100ms;

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
        transition:transform .8s;
        }

        .recetteScrollerItem:first-child{
        transition-delay:0;
        }
        .recetteScrollerItem:nth-child(2){
        transition-delay:.2s;
        }
        .recetteScrollerItem:nth-child(3){
        transition-delay:.4s;
        }

        .recetteScrollerItem .title{
            width: 120px;
            height: 45px;
            position: absolute;
            color: white;
            font-size: 16px;
            text-align: center;
            font-weight: bold;
            text-transform: uppercase;
            top: 0;
            border-bottom: solid 1px #8c8c8c;
            left: 18px;
            display: flex;
            align-items: center;
            justify-content: center;    
        }

        .pageContent.built .recetteScrollerItem{
        transform:translateX(0);
        }



        .recetteScrollerItem .thumb {
            position: absolute;
            width: 150px;
            height: 150px;
            top: 37px;
            left: 4px;
            overflow:hidden;
        }

    .recetteScrollerItem .thumb img {
        width: 900px;
        height: 900px;
        pointer-events: none;
    }


    .prepare span.title,.ready span.title{
                width: 120px;
                height: 32px;
                position: absolute;
                color: white;
                font-size: 16px;
                text-align: center;
                font-weight: bold;
                text-transform: uppercase;
                top: 14px;
                width:100%;
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
            border-bottom:solid 3px white;
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
                return app.imgDB[s].hsrc;
            } else {
                return "images/" + app.imgDB[s].uri;
            }
        }

        var sequence = function (anarray, callback) {
            var seq = this;
            var timout;
            seq.keepongoing = true;
            seq.stop = function () {
                seq.keepongoing = false;
                callback(false);
                //return(true);
            };
            var ret = function (t) {
                return new Promise((resolve, reject) => {
                    timout = setTimeout(function () {
                        if (seq.keepongoing) {
                            t.fn();
                            resolve(t);
                        } else {
                            clearTimeout(timout);
                        }
                    }, t.delay);
                });
            };
            var result = anarray.reduce((accumulatorPromise, nextID) => {
                return accumulatorPromise.then(() => {
                    return ret(nextID);
                });
            }, Promise.resolve());
            result.then(() => { callback(true); });
        };



    var hscroller = function (e) {
        var that = this;
        that.element = (e);
        that.isDown = false;
        that.startX = null;
        that.scrollLeft = null;
        that.mouseMove = false;
        that.element = (e);
        //that.isClicked = false;
        that.element.classList.add(app.pointingDevice);

        that.element.addEventListener('scroll', function (e) {
        // console.log('scroll');
        })

        that.element.addEventListener('mouseover', (e) => {
            console.log('mouseover');
            if (app.pointingDevice == "touch") return;
            that.element.style.scrollSnapType = "unset";
        });

        that.element.addEventListener('mousedown', (e) => {
            //console.log(app.pointingDevice,' mousedown');
            if (app.pointingDevice == "touch") return;
            that.isDown = true;
            that.mouseMove = false;
            //return;
            that.startX = e.pageX - that.element.offsetLeft;
            that.scrollLeft = that.element.scrollLeft;

        });

        that.element.addEventListener('mouseleave', (e) => {
            //return;
        // console.log('mouseleave');
            if (app.pointingDevice == "touch") return;
            that.isDown = false;
            that.mouseMove = false;
        });

        that.element.addEventListener('click', (e) => {
            if (that.mouseMove) return;
            console.log("oooo");
        // that.isClicked = true;
        });

        that.element.addEventListener('mouseup', (e) => {
            e.stopImmediatePropagation();
            e.preventDefault();
        //  console.log('mouseup');
            if (app.pointingDevice == "touch") return;
            
            that.isDown = false;
        });

        that.element.addEventListener('mousemove', (e) => {
            //console.log('mousemove',that.isDown);

            //e.stopImmediatePropagation();
            //console.log("move");
            if (app.pointingDevice === "touch") return;
            that.mouseMove = true;
            if (!that.isDown) return;
            // return;
            // console.log('mousemove',that.isDown);

            const x = e.pageX - that.element.offsetLeft;
            const walk = (x - that.startX) * 2; // increase to scroll faster
            that.element.scrollLeft = that.scrollLeft - walk;
        });

        that.element.addEventListener('wheel', function (e) {
            console.log(e);
            e.preventDefault();
        });

        that.element.addEventListener('touchstart', (e) => {
            app.pointingDevice = "touch";
        });

    }

    var vscroller = function (e,centerTarget) {
        var that = this;
        that.isDown = false;
        that.startY = null;
        that.scrollTop = null;
        that.mouseMove = false;
        that.element = (e);
        that.element.classList.add(app.pointingDevice);
        that.centerTarget = centerTarget;

        var timout;
        that.element.addEventListener('scroll', function (e) {
            clearTimeout(timout);
            timout = setTimeout(function () {
                if(that.element.querySelectorAll('.wheelItem.selected').length > 0) {
                that.element.querySelectorAll('.wheelItem.selected')[0].classList.remove("selected");
                } 
                that.bb = that.centerTarget.getBoundingClientRect(); // Should be set once at init...
                that.selected = document.elementFromPoint(that.bb.left, that.bb.top);
                //debugger;
                that.selected.classList.add("selected");
            }, 100);
        });

        that.scrollToFunction = function(thisItem, smooth) {
            if( thisItem == null) return;
            console.log(thisItem);
            if(that.element.querySelectorAll('.wheelItem.selected').length > 0) {
            that.element.querySelectorAll('.wheelItem.selected')[0].classList.remove("selected");
            }
            var offset = that.element.querySelector('.wheelItem').offsetHeight;
            that.element.scrollTo({ top: thisItem.offsetTop - offset, behavior: smooth?'smooth':'auto' });
            thisItem.classList.add("selected");
        };

        var divs = that.element.querySelectorAll('div.wheelItem');
        divs.forEach(el => el.addEventListener('click', event => {
            console.log('click', this);
            if (that.mouseMove) return;
            that.scrollToFunction(el,true);
        }));

        /*
        $(e+" .wheelItem").on('click',function(e){
        if(that.mouseMove) return;
        console.log('click');
        //  e.stopImmediatePropagation();
            that.scrollToFunction(this);
        }
        );
        */



        that.element.addEventListener('mouseover', (e) => {
            console.log('mouseover');
            if (app.pointingDevice == "touch") return;
            that.element.style.scrollSnapType = "unset";
        });

        that.element.addEventListener('mousedown', (e) => {
            if (app.pointingDevice == "touch") return;
            console.log('mousedown');
            that.isDown = true;
            that.mouseMove = false;
            that.startY = e.pageY - that.element.offsetTop;
            that.scrollTop = that.element.scrollTop;
        });

        that.element.addEventListener('mouseleave', (e) => {
            console.log('mouseleave');
            if (app.pointingDevice == "touch") return;
            that.isDown = false;
            that.mouseMove = false;
        });

        that.element.addEventListener('mouseup', (e) => {
            //return;
            // e.stopImmediatePropagation();
            console.log('mouseup');

            if (app.pointingDevice == "touch") return;

            //that.mouseMove = false;
            that.isDown = false;
            recenter();
        });

        that.element.addEventListener('mousemove', (e) => {
            // console.log('mousemove');

            //e.stopImmediatePropagation();
            //console.log("move");
            if (app.pointingDevice == "touch") return;
            that.mouseMove = true;
            if (!that.isDown) return;
            const y = e.pageY - that.element.offsetTop;
            const walk = (y - that.startY) * 1; // increase to scroll faster
            that.element.scrollTop = that.scrollTop - walk;
        });

        that.element.addEventListener('wheel', function (e) {
            console.log(e);
            e.preventDefault();
        });

        that.element.addEventListener('touchstart', (e) => {
            app.pointingDevice = "touch";
        });

        function recenter() {
            //return
            //console.log(that.scrollCenter.x, that.scrollCenter.y);
            that.bb = that.centerTarget.getBoundingClientRect(); // Should be set once at init...
            that.selected = document.elementFromPoint(that.bb.left, that.bb.top);

        // var selected = document.elementFromPoint(that.scrollCenter.x, that.scrollCenter.y);
        that.scrollToFunction(that.selected,true);
        }
    };
    };

    window.kx = new kxapp();
})();
