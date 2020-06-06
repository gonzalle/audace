(function() {
    'use strict';
  
    var kxapp = function() {
      var app = this;
      app.lg = 'fr';
      const kxLg = {
        en: {
          unsupported:'Feature unavailable<br>in this demonstrator',
          ristretto: 'Ristretto',
          espresso: 'Espresso',
          lungo: 'Lungo',
          cafelong: 'Café Long',
          doppio: 'Doppio',
          americano: 'Americano',
          espressomacchiato: 'e.Macchiato',
          cappucino: 'Cappucino',
          lattemacchiato: 'Latte Macchiato',
          laitmousse: 'Lait Moussé',
          caffelatte: 'Caffe Latte',
          flatwhite: 'Flat White',
          thevert: 'Thé Vert',
          thenoir: 'Thé Noir',
          infusion: 'Infusion',
          drink: 'Drinks',
          profile: 'Profile',
          start: 'Start',
          foaming: 'Milk Foaming',
          cafe: 'Coffee Making',
          hotwater: 'Hot Water',
          steam: 'Steam',
          preheat: 'Pre Heating',
          none: 'None',
          week: 'Week',
          weekend: 'Week-end',
          morning: 'Morning',
          lunch: 'Lunch',
          afternoon: 'Afternoon',
          dinner: 'Evening',
          short: 'Short',
          normal: 'Normal',
          long: 'Long',
          xlong: 'Extra-Long',
          light: 'Light',
          strong: 'Strong',
          energy: 'Energy',
          sweet: 'Sweet',
          yummy: 'Yummy',
          enjoy:'Enjoy your beverage',
          selectYourProfile:'Select your Profile',
          selectKeyword:"Choose Keyword",
          finnished:"Finnished",
  
        },
        fr: {
          unsupported:"Cette fonction n'est pas disponible<br>dans le cadre de ce démonstrateur",
          ristretto: 'Ristretto',
          espresso: 'Espresso',
          lungo: 'Lungo',
          cafelong: 'Café Long',
          doppio: 'Doppio',
          americano: 'Americano',
          espressomacchiato: 'e.Macchiato',
          cappucino: 'Cappucino',
          lattemacchiato: 'Latte Macchiato',
          laitmousse: 'Lait Moussé',
          caffelatte: 'Caffe Latte',
          flatwhite: 'Flat White',
          thevert: 'Thé Vert',
          thenoir: 'Thé Noir',
          infusion: 'Infusion',
          drink: 'Boissons',
          profile: 'Profile',
          start: 'Démarrer',
          foaming: 'Moussage lait',
          cafe: 'Café en cours',
          hotwater: 'Eau Chaude',
          steam: 'Vapeur',
          preheat: 'Préchauffage',
          none: 'Aucun',
          week: 'Semaine',
          weekend: 'Week-end',
          morning: 'Matin',
          lunch: 'Midi',
          afternoon: 'Après-midi',
          dinner: 'Soir',
          short: 'Court',
          normal: 'Normal',
          long: 'Long',
          xlong: 'Extra-long',
          light: 'Léger',
          strong: 'Corsé',
          energy: 'Energie',
          sweet: 'Douceur',
          yummy: 'Gourmand',
          enjoy:'Bonne dégustation',
          selectYourProfile:'Sélectionnez votre profil',
          selectKeyword:"Choisissez un mot-clef",
          finnished:"Terminé",
  
  
        },
      };
      const kxkeywords = [
          'none',
        'week',
        'weekend',
        'morning',
        'lunch',
        'afternoon',
        'dinner',
        'short',
        'normal',
        'long',
        'xlong',
        'light',
        'strong',
        'energy',
        'sweet',
        'yummy',
      ];
  
      const kxColors = {
        orange: '#f38230',
        cyan: '#13aec0',
        turquoise: '#0f8768',
        green: '#6c9106',
        gold: '#fffb01',
        red: '#c80000',
        fushia: '#c90563',
        pink: '#ef52bb',
        violet: '#8d3fcf',
        blue: '#2855ff',
      };
      const recipeDuration = 4000; // ms
  
      // Check ES6
      // return false;
      app.ratio = 1;
      app.currentPage = false;
      app.currentRecipe = false;
      app.currentProfile = false;
      app.pointingDevice = 'mouse';
      app.imgDB = {
        unitbkg: { uri: 'unitbkg.png', hsrc: false },
        unitfrg: { uri: 'unitfrg.png', hsrc: false },
        bkgSheet: { uri: 'bkgSheet.jpg', hsrc: false },
        recipesSheet: { uri: 'recipesSheet.png', hsrc: false },
        beep: { uri: 'beep.mp3', hsrc: false },
        bleep: { uri: 'bleep.mp3', hsrc: false },
      };
      app.profiles = {
        userOne: {
          name: 'PROFILE 1',
          color: 'red',
          bkg: 'bkg13',
          favs: [
            {
              recipe: 'ristretto',
              rightmenuvalues: '2',
              leftmenuvalues: '3',
              keyword: 'morning',
            },
            {
              recipe: 'americano',
              rightmenuvalues: '2',
              leftmenuvalues: '3',
              keyword: 'yummy',
            },
          ],
        },
        userTwo: {
          name: 'PROFILE 2',
          color: 'green',
          bkg: 'bkg6',
          favs: [
            {
              recipe: 'ristretto',
              rightmenuvalues: '2',
              leftmenuvalues: '3',
              keyword: 'morning',
            },
            {
              recipe: 'americano',
              rightmenuvalues: '2',
              leftmenuvalues: '3',
              keyword: 'yummy',
            },
          ],
        },
      };
  
      if (Cookies.get('lg') !== undefined) {
        app.lg = Cookies.get('lg');
      } else {
        Cookies.set('lg', app.lg);
      }
  
      var Clock = function() {
        var thisClock = this;
        thisClock.getTime = function() {
          console.log('tick');
          var now = new Date();
          thisClock.time =
            (now.getHours() < 10 ? '0' : '') + now.getHours() + ':' + 
            (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
          return thisClock.time;
        };
        thisClock.time = thisClock.getTime;
        thisClock.run = function(clockDom) {
          clearInterval(thisClock.timout);
          clockDom.innerHTML = thisClock.getTime();
          // On ne va rafarichir que toutes les 3 secondes.
          thisClock.timout = setInterval(
            () => (clockDom.innerHTML = thisClock.getTime()), 3000
          );
        };
        thisClock.stop = function() {
          clearInterval(thisClock.timout);
        };
        //thisClock.display = function() {};
      };
  
      app.clock = new Clock();
  
      var _ = app.loc = function(string) {
        if (kxLg[app.lg][string]) return kxLg[app.lg][string];
        return string;
      };
  
      app.beep = function() {
        var snd = new Audio('images/beep.mp3');
        snd.loop = false;
        snd.play();
      };
  
      app.bleep = function() {
        var snd = new Audio('images/bleep.mp3');
        snd.loop = false;
        snd.play();
      };
  
    var baseHtml = (`
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
            </div>
        
        <div class="kxToast" style="display:none">
            <span class="msg"></span>
        </div>
        <div id="kxFrg"></div>
        </div> 
    `);
  
  
    app.toast = function(msg) {
        Object.assign(app.toaster.style, {
            display: '',
        });
        setTimeout(()=>{
            app.toaster.querySelector('span').innerHTML=msg;
            app.toaster.classList.add('show');
            setTimeout(()=>{
                app.toaster.classList.add('hide');
                setTimeout(()=>{
                    app.toaster.classList.remove('show','hide');
                },500)
            },1500)
        },1)
    };
  
    app.fit = function() {
    // 768 x 400 (was 480x320)
        app.ratio = window.innerWidth / 768;
        console.log(app.ratio);
        Object.assign(app.kxunit.style, {
            transform: 'scale(' + Math.min(1.5, app.ratio) + ') translateX(-50%)',
        });
        // if (app.currentPage.name != undefined) app.reloadPage()
    };
  
    app.reloadPage = function() {
        app.loadPage(app.currentPage.name, null);
    };
  
    app.buildPage = function(pageId, data, callback) {
    var tempBuild = new DOMParser().parseFromString(
        app.data.pages[pageId].html(),
        'text/html',
    ).body.firstChild;
    app.data.pages[pageId].built = tempBuild;
    app.data.pages[pageId].build(function() {
        callback();
    });
    };
  
    app.showPage = function(page, fade) {
    page.classList.remove('onScreen'); // if any
    if (fade) {
        var timout = clearTimeout();
        var speed = 500;
        Object.assign(app.pageHolderB.style, {
        opacity: 0,
        transition: 'opacity 500ms',
        });
        app.pageHolderB.innerHTML = '';
        var pageB = page.cloneNode(true);

        app.pageHolderB.appendChild(pageB);
        //app.currentPage.beforeShow(pageB);

        setTimeout(function() {
        Object.assign(app.pageHolderB.style, { opacity: 1 });
        timout = setTimeout(function() {
            // The timout before class transition
            app.pageHolder.innerHTML = '';
            console.log('displaying page contents');
            app.pageHolder.appendChild(page);
            app.currentPage.beforeShow();
            app.pageHolderB.innerHTML = '';
            Object.assign(app.pageHolderB.style, { opacity: 0 });
            setTimeout(function() {
            page.classList.add('built');
            page.classList.add('onScreen');
            app.currentPage.run();
            //debugger;
            var clockDom = page.querySelector('.clock');
            app.clock.stop();
            if (clockDom !== null) {
                app.clock.run(clockDom);
            }
            //app.currentPage.run();
            }, 100);
        }, 500);
        }, 10);
        //app.pageHolder.appendChild(page);
    } else {
        app.pageHolder.innerHTML = '';
        app.pageHolder.appendChild(page);
        page.classList.add('built', 'onScreen');
        app.currentPage.run();
    }
    //app.currentPage = app.data.pages[pageId];
    //if ()
    };
  
    app.loadPage = function(pageId, data) {
    console.log('loading ' + pageId);

    if (app.currentPage) {
        //  app.currentPage.built = app.pageHolder.innerHTML;
        //debugger;
        if (app.currentPage.quit()) {
        if (app.currentPage.built)
            app.currentPage.built.classList.remove('onScreen');
        } else {
        //console.log("quitting screen is forbidden");
        return;
        }
    }

    if (app.data.pages[pageId].built == false) {
        app.buildPage(pageId, data, function() {
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

    app.init = function(kxhost) {
    // return;
    console.log('init');
    app.data = {
        pages: {
        off: {
            name: 'off',
            built: false,
            build: function(callback) {
            callback();
            },
            beforeShow: function() {},
            run: function() {},
            quit: function() {
            return true;
            },
            html: function() {
            return `
                            <div class="pageContent" style="background-image:none; background-color:black;">
                            </div>`;
            },
        },

        starting: {
            name: 'starting',
            built: false,
            build: function(callback) {
            callback();
            },
            beforeShow: function() {},
            run: function() {
            var delay = 800;

            Object.assign(document.querySelector('.glowPoint').style, {
                transitionDuration: delay + 'ms',
                left: '350px',
            });

            //$(".glowPoint").css({"left":'350px',"transition-duration":delay+"s"});
            Object.assign(document.querySelector('.bar').style, {
                width: '350px',
                'transition-duration': delay + 'ms',
            });
            var delayStartup = setTimeout(function() {
                app.loadPage('recettes', null);
            }, delay);
            /* $(".button.start").on("click", function(){
                                // app.loadPage("recettes");
                            })*/
            },
            quit: function() {
            return true;
            },

            html: function() {
            return `
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
                `;
            },
        },

        recettes: {
            name: 'recettes',
            built: false,
            build: function(callback) {
            var selection = new hscroller(
                this.built.querySelector('#recetteScroller'),
            );

            // Here we can work on app.pageNode before inserting it then callback to keep on
            //debugger;
            var recipes = this.built.querySelectorAll('.recetteScrollerItem');
            recipes.forEach(el =>
                el.addEventListener('click', event => {
                // console.log("CLICK",selection.isClicked);
                if (!selection.mouseMove) {
                    app.currentRecipe = app.data.recipes[el.dataset.val];
                    app.loadPage('prepare', el.dataset.val);
                }
                }),
            );

            //debugger

            callback();
            },
            beforeShow: function() {},
            run: function() {
            console.log('running recettes');
            },
            quit: function() {
            // fn called on quit ,, Must send true to allow quitting.
            console.log('quitting ' + this.name);
            return true;
            },
            html: function() {
            var rhtml = `
                <div class="pageContent">
                <!--   
                <svg style="position:absolute; width:31px;height:25px;top:12px;left:31px" viewBox="0 0 32 27" >
                <use href="#recette" />
                </svg>

                <div style="position:absolute; height:25px;top:12px;left:31px;font-size:18px;padding-left:36px;height:34px;  border-bottom: solid 2px orange;">${_(
                'drink',
                )}</div>
                -->
                <div class="clock borderOrange">00:00</div>
                <!--
                <svg style="position:absolute; width:26px;height:25px;top:12px;right:29px" viewBox="0 0 26 25" >
                <use href="#fav" />
                </svg>
                <div style="position:absolute; height:25px;top:12px;right:31px;font-size:18px;padding-right:36px;text-align:right;height:34px;  border-bottom: solid 2px transparent;">${_(
                'profile',
                )}</div>
                -->

                <section id="recetteScroller" class="hScroller" >
                    `;
            for (var [key, value] of Object.entries(app.data.recipes)) {
                // console.log(`${key}: ${value}`);
                rhtml += `
                    <div class="recetteScrollerItem" data-val="${key}"><div class="title"><span>${_(
                value.code,
                )}</span></div><div class="thumb"><img nopin = "nopin" data-alt="${imag(
                'recipesSheet',
                )}" src="${imag(
                'recipesSheet',
                )}" style="object-position: ${'-' +
                value.spritexy.split(';')[0] * 150 +
                'px'} ${'-' +
                value.spritexy.split(';')[1] * 150 +
                'px'}"></div></div> 
                    `;
            }

            rhtml += `
                </section>
                </div>
                `;
            return rhtml;
            },
        },

        prepare: {
            name: 'prepare',
            built: false,
            build: function(callback) {
            //this.recipe = app.data.recipes[data];
            //console.log("PREP " , this.recipe);
            var thisBuilt = this.built;
            var zat = this;
            zat.recipeSequence = false;
            if (app.currentRecipe) {
                if (app.currentRecipe.leftmenutyp === 'strength') {
                this.strengthScroller = new vscroller(
                    thisBuilt.querySelector('.strengthScroller'),
                    thisBuilt.querySelector('.strengthScroller_target'),
                );
                }
                if (app.currentRecipe.rightmenutyp) {
                this.quantityScroller = new vscroller(
                    thisBuilt.querySelector('.quantityScroller'),
                    thisBuilt.querySelector('.quantityScroller_target'),
                );
                }
                thisBuilt.querySelector('.backToMain').addEventListener('click', function(e) {
                    app.loadPage('recettes', null);
                });
            }

            if (app.currentRecipe.canx2) {
                thisBuilt
                .querySelector('.plusMinusButton')
                .addEventListener('click', function(e) {
                    var svgUse = this.querySelector('use');
                    console.log('PROD', app.currentRecipe);

                    if (svgUse.href.baseVal == '#plusButton') {
                    svgUse.setAttribute('href', '#minusButton');
                    app.currentRecipe.x2 = true;
                    console.log(thisBuilt.querySelector('img.recipeImage'));
                    thisBuilt.querySelector(
                        'img.recipeImage',
                    ).style.objectPosition = `${'-' +
                        app.currentRecipe.spritexy_x2.split(';')[0] * 150 +
                        'px'} ${'-' +
                        app.currentRecipe.spritexy_x2.split(';')[1] * 150 +
                        'px'}`;
                    } else if (svgUse.href.baseVal == '#minusButton') {
                    svgUse.setAttribute('href', '#plusButton');
                    app.currentRecipe.x2 = false;
                    thisBuilt.querySelector(
                        'img.recipeImage',
                    ).style.objectPosition = `${'-' +
                        app.currentRecipe.spritexy_x1.split(';')[0] * 150 +
                        'px'} ${'-' +
                        app.currentRecipe.spritexy_x1.split(';')[1] * 150 +
                        'px'}`;
                    }
                });
            }
            thisBuilt.querySelector('.startButton').addEventListener('click', function(e) {
                var seqOutput = thisBuilt.querySelector('.sequence span');
                thisBuilt.classList.add('running');
                var seq = [
                    {
                    fn: () => {
                        seqOutput.innerHTML = _('preheat');
                    },
                    delay: 0,
                    },
                ];
                var addedseq = app.currentRecipe.sequences.split(';');
                var intertime = recipeDuration / (addedseq.length + 1);
                addedseq.forEach(function(val) {
                    seq.push({
                    fn: () => {
                        seqOutput.innerHTML = _(val);
                    },
                    delay: intertime,
                    });
                });
                seq.push({
                    fn: () => {
                    seqOutput.innerHTML = '';
                    },
                    delay: intertime + 200,
                });
                zat.recipeSequence = new sequence(seq, completed => {
                    console.log('sync done');
                    if (completed) {
                    app.loadPage('ready', null);
                    } else {
                    console.log('stopped');
                    }
                    zat.recipeSequence = false;
                });
                });

            thisBuilt.querySelector('.stopButton').addEventListener('click', function(e) {
                console.log('stopping');
                thisBuilt.classList.remove('running');
                zat.recipeSequence.stop();
                zat.recipeSequence = false;
                });

            callback();
            },
            beforeShow: function() {
            if (this.quantityScroller) {
                let a = this.built.querySelector(
                '[data-val="' + app.currentRecipe.righmenudefault + '"]',
                );
                //debugger;
                this.quantityScroller.scrollToFunction(a);
            }
            if (this.strengthScroller) {
                let a = this.built.querySelector(
                '.strengthScroller .wheelItem:nth-child(3)',
                );
                this.strengthScroller.scrollToFunction(a);
            }
            //  debugger;
            },
            run: function() {
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
            quit: function() {
            console.log(this.recipeSequence);
            //debugger;
            if (this.recipeSequence) this.recipeSequence.stop();
            this.built = false; // We reset the built as next recipe will not be the same
            //console.log('quitting '+this.name);
            return true;
            },
            html: function() {
            // var recipe = app.currentRecipe;
            // console.log("RECIPE",recipe);
            //debugger;
            var rightMenu = '';
            if (app.currentRecipe.rightmenutyp == 'ml') {
                rightMenu = `
                            
                                <div class="target quantityScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:384px; top:160px"></div>

                                <div class="wheel vWheel right quantityScroller">
                                <div class="wheelItem noAction"></div>`;

                app.currentRecipe.rightmenuvalues
                .split(';')
                .forEach(function(val) {
                    rightMenu += `
                                <div data-val="${val}" class="wheelItem">${val}</div>`;
                });

                rightMenu += `<div class="wheelItem noAction last"></div>
                                </div>
                                <div class="vwheelCenter right">&nbsp;</div>
                                <div class="vwheelUnit right">ml</div>
                                `;
            } else if (app.currentRecipe.rightmenutyp == 'vol') {
                rightMenu = `
                                <div class="target quantityScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:384px; top:160px"></div>

                                <div class="wheel vWheel right quantityScroller">
                                <div class="wheelItem"></div>

                                <div data-val="1" class="wheelItem size selected">
                                    <svg viewBox="0 0 32 32" class="">
                                        <use href="#sizeM" />
                                    </svg>
                                </div>

                                <div data-val="2" class="wheelItem size">
                                    <svg viewBox="0 0 32 32" class="">
                                        <use href="#sizeL" />
                                    </svg>
                                </div>

                                <div data-val="3" class="wheelItem size">
                                    <svg viewBox="0 0 32 32" class="">
                                        <use href="#sizeXL" />
                                    </svg>
                                </div>

                                <div class="wheelItem last"></div>
                                </div>
                                <div class="vwheelCenter right">&nbsp;</div>
                                <div class="vwheelUnit right">ml</div>
                                `;
            }
            return `
                    <div class="pageContent prepare ${app.currentRecipe.bkg}">
                    <div class="backToMain backButton">
                    <svg style="" viewBox="0 0 26 26" >
                    <use href="#backArrow" />
                    </svg>
                    </div>

                    <div class="centralArea" style="position:absolute;width:222px;left:129px;height:100%;background-color:rgba(255,255,255,.15)">
                        
                        <div class="sequence" style="position: absolute; width: 173px;left: 25px; top: 54px; height: 46px; text-align:center">
                            <span></span>
                        </div>

                    
                        <div class="imageHolder">

                        <img class="recipeImage" nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style=" object-position: ${'-' +
                            app.currentRecipe.spritexy_x1.split(';')[0] * 150 +
                            'px'} ${'-' +
                app.currentRecipe.spritexy_x1.split(';')[1] * 150 +
                'px'}
                        "/>
                        
                        <img class="recipeImage onrun" nopin = "nopin" data-alt="${imag(
                        'recipesSheet',
                        )}" src="${imag('recipesSheet')}" style="
                        object-position: ${'-' +
                            app.currentRecipe.spritexy.split(';')[0] * 150 +
                            'px'} ${'-' +
                app.currentRecipe.spritexy.split(';')[1] * 150 +
                'px'}
                        "/>

                        </div>
                        ${
                        app.currentRecipe.canx2
                            ? `
                        <div class="plusMinusButton" style="position: absolute;
                        left: 151px;
                        top: 104px;
                        width: 32px;
                        height: 32px;">
                            <svg viewBox="0 0 32 32" class="">
                            <use href="#plusButton" />
                            </svg>
                        </div>
                        ` : ``
                        }

                        <div class="progressBarBkg">
                        <div class="progressBar">
                        </div>

                        </div>

                    </div>
                    <div class="stopButton borderOrange">${_('stop')}</div>
                    <div class="startButton borderOrange">${_('start')}</div>

                    ${rightMenu}

                    ${
                    app.currentRecipe.leftmenutyp === 'strength'
                        ? `
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

                    `
                        : ''
                    }
                    <div class="titleBlock">
                    <span class="title">${_(
                    app.currentRecipe.code
                    )}</span>
                </div>
                </div>
                `;
            },
        },

        ready: {
            name: 'ready',
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                thisBuilt.querySelector('.profileButton').addEventListener('click', function(e) {
                    console.log('ADD TO PROFILE');
                    app.loadPage("profileSelection",null);
                });
                
            callback();
            },
            beforeShow: function() {},
            run: function() {},
            quit: function() {
            this.built = false; // We reset the built as next recipe will not be the same
            return true;
            },
            html: function() {
            return `

            <div class="pageContent ready bkg5">

            <div class="centralArea" style="position:absolute;width:360px;left:60px;height:100%;background-color:rgba(255,255,255,.15)">

            <div class="enjoy" style="position: absolute;
            width: 100%;
            left: 0;
            top: 90px;
            height: 46px;
            text-align: center;
            font-size: 24px;">
                <span>${_("enjoy")}</span>
            </div>
            
            <div class="imageHolder" style=" top: 133px; left: 104px; transform: scale(1.3);">
                <img class="recipeImage " nopin = "nopin" data-alt="${imag(
                    'recipesSheet',
                )}" src="${imag('recipesSheet')}" style="
                object-position: ${'-' +
                    app.currentRecipe.spritexy.split(';')[0] * 150 + 'px'} ${'-' + app.currentRecipe.spritexy.split(';')[1] * 150 + 'px'} "/>
            </div>
                <div class="profileButton"  style="position:absolute;top: 232px; left: 274px; width:60px;height:60px">
                    <svg style="" viewBox="0 0 32 32">
                        <use href="#profileButton" />
                    </svg>
                </div>
            </div>
            <div class="titleBlock">
            <span class="title">${_(
                app.currentRecipe.code,
            )}</span>
            </div>
            </div>
                

                            `;
            },
        },


        profileSelection: {
            name: 'profileSelection',
            built: false,
            build: function(callback) {
                debugger;
                var thisBuilt = this.built;
                thisBuilt.querySelector('.profileOneButton').addEventListener('click', function(e) {
                    console.log('ADD TO PROFILE');
                    app.currentProfile = app.profiles.userOne;
                    app.loadPage("keywordSelection",null);
                });
                thisBuilt.querySelector('.profileTwoButton').addEventListener('click', function(e) {
                    console.log('ADD TO PROFILE');
                    app.currentProfile = app.profiles.userTwo;
                    app.loadPage("keywordSelection",null);
                });

                thisBuilt.querySelector('.backToMain').addEventListener('click', function(e) {
                    app.loadPage('recettes', null);
                });

                
            callback();
            },
            beforeShow: function() {},
            run: function() {},
            quit: function() {
            this.built = false; // We reset the built as next recipe will not be the same
            return true;
            },
            html: function() {
            return `
                        
            <div class="pageContent profileSelection bkg5">

            <div class="backToMain backButton">
            <svg style="" viewBox="0 0 26 26" >
            <use href="#backArrow" />
            </svg>
            </div>

            <div class="titleBlock light">
                <span class="title">${_(app.currentRecipe.code)}</span>
            </div>
            <div class="enjoy" style="    position: absolute;
            width: 360px;
            left: 101px;
            top: 59px;
            height: 46px;
            font-size: 24px; text-align:center">

            <div style="
            display: inline-block;
            position: relative;
            top: 0;
            left: 0;
            text-align: initial;
            transform-origin: 50% 50%;
            width: 50px;
            height: 50px;
            vertical-align: middle;
            overflow: hidden;
            margin-left: -100px;
            margin-right: 10px;
            transform: scale(1.3);">
                <img class="recipeImage " nopin = "nopin" data-alt="${imag('recipesSheet')}"
                    src="${imag('recipesSheet')}" style="width:300px;height:300px; object-position: ${'-' +
                    app.currentRecipe.spritexy.split(';')[0] * 50 + 'px'} ${'-' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px'} "/>
            </div>


                <span>${_("selectYourProfile")}</span>
            </div>
            
            
                <div class="profileOneButton"  style="border:solid 1px white; box-sizing:border-box; position:absolute;top: 141px; left: 38px; width:404px;height:60px; color:white;background-color:rgba(0,0,0,0.4)">
                    
                    <svg viewBox="0 0 32 32" style="position:absolute;width 24px; height:24px; fill:white; top:18px;left:18px">
                        <use href="#profileIcon" />
                    </svg>
                    <div style="
                        text-align: center;
                        line-height: 60px;
                        font-size: 23px;
                        font-weight: 400;
                    "> ${app.profiles.userOne.name}</div>
                    </div>

                    <div class="profileTwoButton"  style="border:solid 1px white; box-sizing:border-box; position:absolute;top: 213px; left: 38px; width:404px;height:60px; color:white;background-color:rgba(0,0,0,0.4)">
                    
                    <svg viewBox="0 0 32 32" style="position:absolute;width 24px; height:24px; fill:white; top:18px;left:18px">
                        <use href="#profileIcon" />
                    </svg>
                    <div style="
                        text-align: center;
                        line-height: 60px;
                        font-size: 23px;
                        font-weight: 400;
                    "> ${app.profiles.userTwo.name} </div>
                    </div>

            </div>


                            `;
            },
        },


        keywordSelection: {
            name: 'keywordSelection',
            built: false,
            build: function(callback) {
                debugger;
                var thisBuilt = this.built;
                var keywordSelection = new hscroller(
                    thisBuilt.querySelector('.keywords.hScroller'),
                );

                var keywordsElems = thisBuilt.querySelectorAll('.kword');
                //console.log(keywordsElems);
                keywordsElems.forEach(el =>
                el.addEventListener('click', event => {
                    console.log('click', el);
                    if(thisBuilt.querySelector('.kword.selected')){
                        thisBuilt.querySelector('.kword.selected').classList.remove('selected');
                    }
                    //if (that.mouseMove) return;
                    //that.scrollToFunction(el, true);
                    el.classList.add("selected");
                    app.lastSelectedKeyword = el.getAttribute("data-id");
                }),
                );

                thisBuilt.querySelector('.backbutton').addEventListener('click', function(e) {
                app.loadPage('profileSelection', null);
                });


                thisBuilt.querySelector('.validateKeyWord').addEventListener('click', function(e) {
                    console.log('validating keyword');
                    app.loadPage('profileSuccess');
                });
                /* thisBuilt.querySelector('.profileOneButton').addEventListener('click', function(e) {
                    console.log('ADD TO PROFILE');
                    app.currentProfile = app.profiles.userOne;
                    loadPage("keywordSelection",null);
                });
                thisBuilt.querySelector('.profileTwoButton').addEventListener('click', function(e) {
                    console.log('ADD TO PROFILE');
                    app.currentProfile = app.profiles.userTwo;
                    loadPage("keywordSelection",null);
                });
                */
                
            callback();
            },
            beforeShow: function() {},
            run: function() {},
            quit: function() {
            this.built = false; // We reset the built as next recipe will not be the same
            return true;
            },
            html: function() {
            return `
                        
            <div class="pageContent keywordSelection bkg5 ${app.currentProfile.color}">


            <div class="backButton">
            <svg style="" viewBox="0 0 26 26" >
            <use href="#backArrow" />
            </svg>
            </div>

            <div class="titleBlock light">
                <span class="title">${_(app.currentRecipe.code)}</span>
                <div class="userTitleClip userBorderColor"></div>
            </div>
            <div class="enjoy" 
            style="position: absolute;
            width: 360px;
            left: 101px;
            top: 59px;
            height: 46px;
            font-size: 24px; text-align:center">

            <div style="
            display: inline-block;
            position: relative;
            top: 0;
            left: 0;
            text-align: initial;
            transform-origin: 50% 50%;
            width: 50px;
            height: 50px;
            vertical-align: middle;
            overflow: hidden;
            margin-left: -100px;
            margin-right: 10px;
            transform: scale(1.3);">
                <img class="recipeImage " nopin = "nopin" data-alt="${imag('recipesSheet')}"
                    src="${imag('recipesSheet')}" style="width:300px;height:300px; object-position: ${'-' +
                    app.currentRecipe.spritexy.split(';')[0] * 50 + 'px'} ${'-' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px'} "/>
            </div>


                <span>${_("selectKeyword")}</span>
            </div>
            
            
                <div class="keywords hScroller" style="position:absolute; top:159px;height:43px;width:100%">
                ${
                    (function(){
                        var keywordList = '';
                        kxkeywords.forEach(function(val) {
                            keywordList += '<div class="kword" data-id='+val+'>'+_(val)+'</div>';
                        })
                        return(keywordList)
                    })()
                }
                </div>

                <div class="validateKeyWord startButton userBorderColor">
                    ${_('finnished')}
                </div>

            </div>


                            `;
            },
        },



        profileSuccess: {
            name: 'profileSuccess',
            built: false,
            build: function(callback) {
                debugger;
                var thisBuilt = this.built;
                callback();
            },
            beforeShow: function() {},
            run: function() {},
            quit: function() {
            this.built = false; // We reset the built as next recipe will not be the same
            return true;
            },
            html: function() {
            return `
                        
            <div class="pageContent profileSuccess bkg5 ${app.currentProfile.color}">


            <div class="titleBlock light" style="
            width: 188px;
            left: 147px;
            top: 35px;
            text-align:center;
            height: 125px;
            padding-top: 8px;
            border-bottom: none;
            ">
                <span class="title" style="width: 100%; left: 0;">
                    ${_(app.currentRecipe.code)}
                </span>
                <div class="userTitleClip userBorderColor" style="
                    bottom: initial;
                    top: 38px; left:78px;
                "></div>
            <div style="
            position: absolute;
            top: 53px;
            left: 68px;
            text-align: initial;
            width: 50px;
            height: 50px;
            overflow: hidden;
            transform: scale(1.8);
            ">
                <img class="recipeImage " nopin="nopin" data-alt="images/recipesSheet.png" src="${imag('recipesSheet')}" style="width:300px;height:300px; object-position: ${'-' +
                app.currentRecipe.spritexy.split(';')[0] * 50 + 'px'} ${'-' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px'} ">
            </div>
            <div class="keyword" style="
            position: absolute;
            width: 100%;
            bottom: 5px;
        ">${_(app.lastSelectedKeyword)}</div>


                
            </div>

            
                <div class="tak" style="top: 200px;
                height: 43px;
                width: 100%;
                text-align: center;
                position: absolute;
                font-size: 20px;
                font-weight: 400;">
                    Thanks for ${_(app.lastSelectedKeyword)} ${_(app.currentRecipe.code)}
                </div>



            </div>


                            `;
            },
        },


        

        profile: {
            name: 'profile',
            built: false,
            build: function(callback) {
            callback();
            },
            beforeShow: function() {},
            run: function() {},
            quit: function() {
            this.built = false;
            return true;
            },
            html: function() {
            return `
                <div class="pageContent profile ${app.currentProfile.bkg} ${app.currentProfile.color}">
                <div class="titleBlock light">
                <span class="title">${_(app.currentProfile.name)}</span>
                <div class="userTitleClip userBorderColor"></div>
                </div>
                
                </div>
                `;
            },
        },
        },
        recipes: {
        ristretto: {
            code: 'ristretto',
            spritexy: '0;0',
            spritexy_x1: '1;0',
            spritexy_x2: '2;0',
            bkg: 'bkg2',
            family: 'black',
            sequences: 'cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'ml',
            rightmenuvalues: '20;25;30;35;40',
            righmenudefault: '40',
            runmenutyp: 'ml',
            runmenuvalues: '20;25;30;35;40',
            runmenudefault: '60',
        },
        espresso: {
            code: 'espresso',
            spritexy: '3;0',
            spritexy_x1: '4;0',
            spritexy_x2: '5;0',
            bkg: 'bkg4',
            family: 'black',
            sequences: 'cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'ml',
            rightmenuvalues: '40;50;60;70',
            righmenudefault: '50',
            runmenutyp: 'ml',
            runmenuvalues: '40;50;60;70',
            runmenudefault: '130',
        },
        lungo: {
            code: 'lungo',
            spritexy: '0;1',
            spritexy_x1: '1;1',
            spritexy_x2: '2;1',
            bkg: 'bkg4',
            family: 'black',
            sequences: 'cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'ml',
            rightmenuvalues: '80;90;100;110;120;130;140;150;160;170;180',
            righmenudefault: '120',
            runmenutyp: 'ml',
            runmenuvalues: '80;90;100;110;120;130;140;150;160;170;180',
            runmenudefault: '60',
        },
        cafelong: {
            code: 'cafelong',
            spritexy: '3;1',
            spritexy_x1: '4;1',
            spritexy_x2: '5;1',
            bkg: 'bkg3',
            family: 'black',
            sequences: 'cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'ml',
            rightmenuvalues: '20;25;30;35;40',
            righmenudefault: '30',
            runmenutyp: 'ml',
            runmenuvalues: '20;25;30;35;40',
            runmenudefault: '60',
        },
        doppio: {
            code: 'doppio',
            spritexy: '0;2',
            spritexy_x1: '1;2',
            spritexy_x2: '2;2',
            bkg: 'bkg2',
            family: 'black',
            sequences: 'cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'ml',
            rightmenuvalues: '20;30;40;50;60;70',
            righmenudefault: '30',
            runmenutyp: 'ml',
            runmenuvalues: '20;30;40;50;60;70',
            runmenudefault: '60',
        },
        americano: {
            code: 'americano',
            spritexy: '3;2',
            spritexy_x1: '3;2',
            spritexy_x2: '3;2',
            bkg: 'bkg3',
            family: 'black',
            sequences: 'cafe;hotwater',
            canx2: false,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'ml',
            rightmenuvalues: '20;30;40;50;60;70',
            righmenudefault: '30',
            runmenutyp: 'ml',
            runmenuvalues: '20;30;40;50;60;70',
            runmenudefault: '60',
        },
        emacchiato: {
            code: 'emacchiato',
            spritexy: '0;3',
            spritexy_x1: '1;3',
            spritexy_x2: '2;3',
            bkg: 'bkg7',
            family: 'latte',
            sequences: 'steam;cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        cappucino: {
            code: 'cappucino',
            spritexy: '3;3',
            spritexy_x1: '4;3',
            spritexy_x2: '5;3',
            bkg: 'bkg10',
            family: 'latte',
            sequences: 'foaming;steam;cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'L',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'L',
        },
        lattemacchiato: {
            code: 'lattemacchiato',
            spritexy: '0;4',
            spritexy_x1: '1;4',
            spritexy_x2: '2;4',
            bkg: 'bkg9',
            family: 'latte',
            sequences: 'steam;cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        laitmousse: {
            code: 'laitmousse',
            spritexy: '3;4',
            spritexy_x1: '4;4',
            spritexy_x2: '5;4',
            bkg: 'bkg8',
            family: 'latte',
            sequences: 'foaming;',
            canx2: true,
            leftmenutyp: 'false',
            leftmenuvalues: '1;2;3',
            leftmenudefault: 'false',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'sec',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        caffelatte: {
            code: 'caffelatte',
            spritexy: '0;5',
            spritexy_x1: '1;5',
            spritexy_x2: '2;5',
            bkg: 'bkg9',
            family: 'latte',
            sequences: 'steam;cafe',
            canx2: true,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        flatwhite: {
            code: 'flatwhite',
            spritexy: '3;5',
            spritexy_x1: '3;5',
            spritexy_x2: '3;5',
            bkg: 'bkg10',
            family: 'latte',
            sequences: 'cafe;cafe;steam',
            canx2: false,
            leftmenutyp: 'strength',
            leftmenuvalues: '1;2;3',
            leftmenudefault: '2',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        thevert: {
            code: 'thevert',
            spritexy: '4;5',
            spritexy_x1: '4;5',
            spritexy_x2: '4;5',
            bkg: 'bkg11',
            family: 'water',
            sequences: 'hotwater',
            canx2: false,
            leftmenutyp: 'false',
            leftmenuvalues: 'false',
            leftmenudefault: 'false',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        thenoir: {
            code: 'thenoir',
            spritexy: '5;5',
            spritexy_x1: '5;5',
            spritexy_x2: '5;5',
            bkg: 'bkg12',
            family: 'water',
            sequences: 'hotwater',
            canx2: false,
            leftmenutyp: 'false',
            leftmenuvalues: 'false',
            leftmenudefault: 'false',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        infusion: {
            code: 'infusion',
            spritexy: '5;2',
            spritexy_x1: '5;2',
            spritexy_x2: '5;2',
            bkg: 'bkg14',
            family: 'water',
            sequences: 'hotwater',
            canx2: false,
            leftmenutyp: 'false',
            leftmenuvalues: 'false',
            leftmenudefault: 'false',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            righmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
        },
    };
    app.kxhost = document.getElementById(kxhost);
    //debugger;
    app.kxhost.innerHTML = baseHtml;
    addStyles(app.kxhost);
    app.kxunit = app.kxhost.querySelector('#kxUnit');
    app.holder = app.kxhost.querySelector('#kxScreen');
    app.pageHolder = app.kxhost.querySelector('#pageHolder');
    app.pageHolderB = app.kxhost.querySelector('#pageHolderB');
    app.toaster = app.kxhost.querySelector('.kxToast');
    app.fit();
    app.loadPage('recettes', null); // Show first page

    // Global events
    window.addEventListener('resize', function() {
        clearTimeout(app.resizeWindowTimeOut);
        app.resizeWindowTimeOut = setTimeout(function() {
        console.log('resized');
        app.fit();
        //todo include method for checking mouse events
        }, 500);
    });
    app.kxunit
        .querySelector('#kxUnitButtonStart')
        .addEventListener('click', event => {
        if (app.currentPage.name == 'off') {
            app.bleep();
            app.loadPage('starting', null); // Show first page
        } else {
            app.beep();
            app.loadPage('off', null); // Show first page
            for (var [key, value] of Object.entries(app.data.pages)) {
            //console.log(key,value.built);
            value.built = false;
            }
        }
        });

    app.kxunit
        .querySelector('#kxUnitButtonHome')
        .addEventListener('click', event => {
        if (app.currentPage.name == 'off') return;
        console.log('click', this);
        app.loadPage('recettes', null);
        });
    app.kxunit
        .querySelector('#kxUnitButtonUserOne')
        .addEventListener('click', event => {
        if (app.currentPage.name == 'off') return;
        app.currentProfile = app.profiles.userOne;
        app.loadPage('profile', null);
        });
    app.kxunit
        .querySelector('#kxUnitButtonUserTwo')
        .addEventListener('click', event => {
        if (app.currentPage.name == 'off') return;
        app.currentProfile = app.profiles.userTwo;
        app.loadPage('profile', null);
        });
    };

    function addStyles(destination) {
    var link = document.createElement('link');
    link.id = 'id2';
    link.rel = 'stylesheet';
    link.href =
        'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap';
    document.head.appendChild(link);

    var svgLib = document.createElement('div');
    svgLib.style = 'display:none';
    var data = `
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
                
                <g id="plusButton" class="plusMinus" fill-rule="evenodd" viewBox="0 0 32 32"  preserveAspectRatio="xMidYMid meet">
                    <circle  cx="16" cy="16" r="13.5" fill="white"/>
                    <circle class="userFIllColor" cx="16" cy="16" r="13" fill="#f38230"/>
                    <path  d="M14.9,17.1h-3.8V15h3.8v-3.8h2.1V15h3.8v2.1h-3.8v3.8h-2.1V17.1z" fill="white"/>
                </g>

                <g id="minusButton" class="plusMinus"  fill-rule="evenodd"  viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
                    <circle  cx="16" cy="16" r="13.5" fill="white"/>
                    <circle class="profileColor"  class="userFIllColor" cx="16" cy="16" r="13" fill="#f38230"/>
                    <rect x="12.2" y="15"  width="7.7" height="2.1" fill="white"/>
                </g>

                    <g id="sizeXL"  viewBox="0 0 32 32">
                    <path  d="M27.1,3.2h-5.4V25c0,1.8-1.5,3.3-3.3,3.3H5c-1.8,0-3.3-1.5-3.3-3.3V3.2H0V25c0,2.8,2.3,5,5,5h13.4
                        c2.8,0,5-2.3,5-5V14.7h3.6c2.7,0,4.9-2.2,4.9-4.9V8.1C32,5.4,29.8,3.2,27.1,3.2z M30.3,9.7c0,1.8-1.5,3.2-3.2,3.2h-3.6V4.9h3.6
                        c1.8,0,3.2,1.5,3.2,3.2V9.7z"/>
                    <path  d="M2.7,10.8V25c0,1.3,1.1,2.4,2.4,2.4h13.4c1.3,0,2.4-1.1,2.4-2.4V10.8H2.7z M10.7,22.3L9.3,20H9.3
                        l-1.4,2.3H6.3L8.4,19l-1.9-3.1H8L9.3,18h0.1l1.2-2.1h1.5L10.1,19l2.1,3.4H10.7z M17.1,22.3h-3.9v-6.4h1.2v5.3h2.7V22.3z"/>
                </g>

                <g id="sizeL" viewBox="0 0 32 32">
                    <path  d="M24.1,6.7h-3.9v16.1c0,1.3-1.1,2.4-2.4,2.4H7.9c-1.3,0-2.4-1.1-2.4-2.4V6.7H4.2v16.1
                        c0,2,1.7,3.7,3.7,3.7h9.8c2,0,3.7-1.7,3.7-3.7v-7.6h2.7c2,0,3.6-1.6,3.6-3.6v-1.2C27.8,8.3,26.1,6.7,24.1,6.7z M26.5,11.6
                        c0,1.3-1.1,2.4-2.4,2.4h-2.7V8h2.7c1.3,0,2.4,1.1,2.4,2.4V11.6z"/>
                    <path d="M6.2,12.4v10.5c0,1,0.8,1.7,1.7,1.7h9.8c1,0,1.7-0.8,1.7-1.7V12.4H6.2z M14.8,21.6h-4v-6.5h1.2v5.3
                        h2.8V21.6z"/>
                </g>

                <g id="sizeM" viewBox="0 0 32 32">
                    <path  d="M21.8,9.6H19V21c0,0.9-0.8,1.7-1.7,1.7h-7c-0.9,0-1.7-0.8-1.7-1.7V9.6H7.7V21c0,1.4,1.2,2.6,2.6,2.6
                        h7c1.4,0,2.6-1.2,2.6-2.6v-5.4h1.9c1.4,0,2.6-1.2,2.6-2.6v-0.9C24.3,10.8,23.2,9.6,21.8,9.6z M23.4,13c0,0.9-0.8,1.7-1.7,1.7h-1.9
                        v-4.2h1.9c0.9,0,1.7,0.8,1.7,1.7V13z"/>
                    <path  d="M9.1,13.6V21c0,0.7,0.5,1.2,1.2,1.2h7c0.7,0,1.2-0.5,1.2-1.2v-7.4H9.1z M17.1,21.2h-1.2V18l0.1-1.1
                        h-0.1l-1.6,4.3h-1l-1.7-4.3h-0.1l0.1,1.1v3.2h-1.2v-6.5H12l1.7,4.6h0.1l1.7-4.6h1.6V21.2z"/>
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
                    <path d="M19.388,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                        C12.755,16.099,8.982,21.018,8.982,27c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                        c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C27.749,21.102,24.083,16.235,19.388,15.61z M10.482,27
                        c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                        c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                        C12.817,35.25,10.482,31.463,10.482,27z M18.366,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                        c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                        c3.408,1.099,5.939,4.999,5.939,9.643C26.249,32.493,22.712,36.962,18.366,36.962z"/>
                        <path d="M39.657,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                        c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                        c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C48.018,21.102,44.352,16.235,39.657,15.61z M30.751,27
                        c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                        c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                        C33.086,35.25,30.751,31.463,30.751,27z M38.635,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                        c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                        c3.408,1.099,5.939,4.999,5.939,9.643C46.518,32.493,42.981,36.962,38.635,36.962z"/>
                </g>

                <g id="force3" viewBox="0 0 57 54">
                        <path d="M10.756,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                        C4.122,16.099,0.349,21.018,0.349,27c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                        c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C19.116,21.102,15.45,16.235,10.756,15.61z M7.391,36.513
                        C4.184,35.25,1.849,31.463,1.849,27c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007
                        c0.759,1.392,1.367,3.199,1.095,5.211c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505
                        C6.576,32.681,6.945,34.741,7.391,36.513z M9.733,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                        c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                        c3.408,1.099,5.939,4.999,5.939,9.643C17.616,32.493,14.08,36.962,9.733,36.962z"/>
    
                        <path d="M48.29,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                            c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                            c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C56.651,21.102,52.984,16.235,48.29,15.61z
                            M44.925,36.513c-3.207-1.263-5.542-5.05-5.542-9.513c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007
                            c0.759,1.392,1.367,3.199,1.095,5.211c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505
                            C44.11,32.681,44.48,34.741,44.925,36.513z M47.267,36.962c-0.23,0-0.457-0.019-0.682-0.044
                            c-0.499-1.804-0.983-4.075-0.851-5.772c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98
                            c0.26-1.925-0.137-3.659-0.753-5.101c3.408,1.099,5.939,4.999,5.939,9.643C55.151,32.493,51.614,36.962,47.267,36.962z"/>
                        <path d="M29.523,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                            c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                            c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C37.884,21.102,34.217,16.235,29.523,15.61z M20.616,27
                            c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                            c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                            C22.951,35.25,20.616,31.463,20.616,27z M28.5,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                            c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                            c3.408,1.099,5.939,4.999,5.939,9.643C36.384,32.493,32.847,36.962,28.5,36.962z"/>
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


                    <g id="profileButton" viewBox="0 0 32 32">
                    <rect id="Rectangle" x="0.5" y="0.5" style="fill:none;stroke:#F38230;stroke-width:0.9887;" width="31" height="31"/>
                    <path id="Shape" style="fill:#FFFFFF;" d="M20.3,19.1c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4s-0.4-1.8-1-2.4c-0.6-0.6-1.5-1-2.4-1
                        c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4c0,0.9,0.4,1.8,1,2.4C18.5,18.8,19.4,19.1,20.3,19.1L20.3,19.1z M20.3,13.2
                        c0.6,0,1.3,0.3,1.7,0.7c0.5,0.5,0.7,1.1,0.7,1.7c0,0.6-0.3,1.3-0.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7c-0.6,0-1.3-0.3-1.7-0.7
                        c-0.5-0.5-0.7-1.1-0.7-1.7c0-0.6,0.3-1.3,0.7-1.7C19.1,13.5,19.7,13.2,20.3,13.2L20.3,13.2z"/>
                    <path style="fill:#FFFFFF;" d="M14.9,26.1c0-3,2.4-5.5,5.5-5.5s5.5,2.4,5.5,5.5h1c0-1.7-0.7-3.4-1.9-4.6c-1.2-1.2-2.9-1.9-4.6-1.9
                        c-1.7,0-3.4,0.7-4.6,1.9c-1.2,1.2-1.9,2.9-1.9,4.6H14.9z"/>
                    <polygon style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" points="8.8,12.7 6.4,12.7 6.4,11.3 8.8,11.3 8.8,8.8 10.2,8.8 
                        10.2,11.3 12.7,11.3 12.7,12.7 10.2,12.7 10.2,15.1 8.8,15.1 "/>
                    </g>
                    <g id="profileIcon" viewBox="0 0 32 32">
                        <path id="Shape" class="st0" d="M16,16.1c2,0,4-0.8,5.4-2.2c1.4-1.4,2.2-3.4,2.2-5.4s-0.8-4-2.2-5.4C20,1.6,18,0.8,16,0.8 s-4,0.8-5.4,2.2C9.2,4.5,8.4,6.5,8.4,8.5c0,2,0.8,4,2.2,5.4S14,16.1,16,16.1L16,16.1z M16,3.1c1.4,0,2.8,0.6,3.8,1.6 c1,1,1.6,2.4,1.6,3.8c0,1.4-0.6,2.8-1.6,3.8c-1,1-2.4,1.6-3.8,1.6c-1.4,0-2.8-0.6-3.8-1.6c-1-1-1.6-2.4-1.6-3.8 c0-1.4,0.6-2.8,1.6-3.8C13.2,3.7,14.6,3.1,16,3.1L16,3.1z"/>
                        <path class="st0" d="M3.9,31.4c0-6.6,5.4-12.1,12.1-12.1s12.1,5.4,12.1,12.1h2.3c0-3.8-1.5-7.4-4.2-10.1c-2.7-2.7-6.3-4.2-10.1-4.2 s-7.4,1.5-10.1,4.2c-2.7,2.7-4.2,6.3-4.2,10.1H3.9z"/>
                    </g>
                </svg>
    `;
    svgLib.innerHTML = data;
    data = null;
    destination.appendChild(svgLib);

    var sheet = document.createElement('style');
    sheet.id = 'kxstylesheet';
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



            .kxToast{
                background-color: black;
                background-color: #925700;
                display: block;
                width: 40%;
                position: absolute;
                text-align: center;
                padding: 20px;
                border-radius: 3px;
                left: 50%;
                top: 50%;
                color: white;
                font-family: 'Open Sans', sans-serif;
                color: #fff;
                font-size: 18px;
                font-weight: 100;
                opacity: 0;
                transform: translate(-50%, 50%);
                transition: transform .5s, opacity .5s;
                pointer-events: none;
                z-index: 10;
                font-weight: 900;
            }

            .kxToast.show{
                transform: translate(-50%, -50%);
                opacity: 1;            
            }

            .kxToast.show.hide{
                transform: translate(-50%, -100%);
                opacity: 0;
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
                transform: translate(-50%, -50%);

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

            .titleBlock{
            position: absolute;
            width: 173px;
            left: 151px;
            top: 0;
            height: 46px;
            border-bottom: solid 1px rgba(255, 255, 255, 0.3);
            }

            .titleBlock.light{
                background-color:rgba(255,255,255,.15)
            }


            .titleBlock span.title{
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

            .userTitleClip {
                position: absolute;
                width: 30px;
                border-bottom-style: solid;
                border-bottom-width: 3px;
                bottom: -2px;
                left: 72px;
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


        /* .kxScreen.centered{
                top: 0;
                left: 0;
                position: relative;
                margin: 0;
                margin-left:50%;
            
            }*/
            .backButton{
            position:absolute;
            left:12px;top:12px;
            width:26px;
            height:26px;
            transition:opacity .3s;
            }

            .running .backButton{
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

            .vWheel .wheelItem:first-child{
            }

            
            .vWheel .wheelItem svg, .vWheel .wheelItem.noAction{
                pointer-events: none;       
            }

            .vWheel .wheelItem.size {
                width: 58px;
                height: 58px;
            }

            .vWheel .wheelItem.size svg {
                margin-top: 1px;
                width: 52px;
                margin-left: 7px;
            }

            .wheelItem:nth-last-child(2) {
                border-bottom: none;
            }


            .vWheel .wheelItem.selected svg{
                filter: drop-shadow(0 0 4px white);
                fill:rgba(255,255,255,1);
            }


            .vWheel .wheelItem:first-child{ 
                height:133.33px;
                border-bottom:none;
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
                left:16px;
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
                left: 152px;
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
                top: 250px; background-color:rgba(255,255,255,.15);
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
        .hScroller{
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;
            scroll-snap-type: x mandatory;
            white-space: nowrap;
        }   

        .hScroller::-webkit-scrollbar {
            display: none;
        }

        #recetteScroller{
            position: absolute;
            top: 71px;
            height: 220px;
            width: 100%;
            left: 0;
            background: none;
            font-size: 0;
            white-space: nowrap;
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



        .keyWords.hScroller{
            position: absolute;
            top: 159px;
            height: 43px;
            width: 100%;
        }
        .kword{
            border-left: solid 1px rgba(255,255,255,.25);
            display: inline-block;
            position: relative;
            height: 100%;
            margin-right: 0;
            padding: 0 10px;
            font-size: 22px;
            padding: 0 32px;
            font-weight: 100;
            height: 43px;
            line-height: 43px;
            color:rgba(255, 255, 255, 0.64);
        }

        .kword:first-child{
            border-left:none;
        }

        .kword.selected{
            color:rgb(255, 255, 255);
            text-shadow: 0 0 2px #ffffff57, 0 0 6px #ffffff91, 0 0 10px white;
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
        return 'images/' + app.imgDB[s].uri;
    }
    }
  
    var sequence = function(anarray, callback) {
    var seq = this;
    var timout;
    seq.keepongoing = true;
    seq.stop = function() {
        seq.keepongoing = false;
        callback(false);
    };
    var ret = function(t) {
        return new Promise((resolve, reject) => {
        timout = setTimeout(function() {
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
    result.then(() => {
        callback(true);
    });
    };
  
    var hscroller = function(e) {
    var that = this;
    that.element = e;
    that.isDown = false;
    that.startX = null;
    that.scrollLeft = null;
    that.mouseMove = false;
    that.element = e;
    that.element.classList.add(app.pointingDevice);

    that.element.addEventListener('scroll', function(e) {
        // console.log('scroll');
    });

    that.element.addEventListener('mouseover', e => {
        //console.log('mouseover');
        if (app.pointingDevice == 'touch') return;
        that.element.style.scrollSnapType = 'unset';
    });

    that.element.addEventListener('mousedown', e => {
        //console.log(app.pointingDevice,' mousedown');
        if (app.pointingDevice == 'touch') return;
        that.isDown = true;
        that.mouseMove = false;
        that.startX = e.pageX - that.element.offsetLeft;
        that.scrollLeft = that.element.scrollLeft;
    });

    that.element.addEventListener('mouseleave', e => {
        // console.log('mouseleave');
        if (app.pointingDevice == 'touch') return;
        that.isDown = false;
        that.mouseMove = false;
    });

    that.element.addEventListener('click', e => {
        if (that.mouseMove) return;
        // that.isClicked = true;
    });

    that.element.addEventListener('mouseup', e => {
        e.stopImmediatePropagation();
        e.preventDefault();
        //  console.log('mouseup');
        if (app.pointingDevice == 'touch') return;
        that.isDown = false;
    });

    that.element.addEventListener('mousemove', e => {
        //console.log('mousemove',that.isDown);
        //e.stopImmediatePropagation();
        if (app.pointingDevice === 'touch') return;
        that.mouseMove = true;
        if (!that.isDown) return;
        const x = e.pageX - that.element.offsetLeft;
        const walk = (x - that.startX) * 2; // increase to scroll faster
        that.element.scrollLeft = that.scrollLeft - walk;
    });

    that.element.addEventListener('wheel', function(e) {
        console.log(e);
        e.preventDefault();
    });

    that.element.addEventListener('touchstart', e => {
        app.pointingDevice = 'touch';
    });
    };
  
    var vscroller = function(e, centerTarget) {
        var that = this;
        that.isDown = false;
        that.startY = null;
        that.scrollTop = null;
        that.mouseMove = false;
        that.element = e;
        that.element.classList.add(app.pointingDevice);
        that.centerTarget = centerTarget;

        var timout;
        that.element.addEventListener('scroll', function(e) {
            clearTimeout(timout);
            timout = setTimeout(function() {
            if (that.element.querySelectorAll('.wheelItem.selected').length > 0) {
                that.element
                .querySelectorAll('.wheelItem.selected')[0]
                .classList.remove('selected');
            }
            that.bb = that.centerTarget.getBoundingClientRect(); // Should be set once at init...
            that.selected = document.elementFromPoint(that.bb.left, that.bb.top);
            //debugger;
            that.selected.classList.add('selected');
            }, 100);
        });

        that.scrollToFunction = function(thisItem, smooth) {
            if (thisItem == null) return;
            console.log(thisItem);
            if (that.element.querySelectorAll('.wheelItem.selected').length > 0) {
            that.element
                .querySelectorAll('.wheelItem.selected')[0]
                .classList.remove('selected');
            }
            var offset = that.element.querySelector('.wheelItem').offsetHeight;
            that.element.scrollTo({
            top: thisItem.offsetTop - offset,
            behavior: smooth ? 'smooth' : 'auto',
            });
            thisItem.classList.add('selected');
        };

        var divs = that.element.querySelectorAll('div.wheelItem');
        divs.forEach(el => el.addEventListener('click', event => {
            console.log('click', this);
            if (that.mouseMove) return;
            that.scrollToFunction(el, true); }),
        );
    
    
        that.element.addEventListener('mouseover', e => {
        console.log('mouseover');
        if (app.pointingDevice == 'touch') return;
        that.element.style.scrollSnapType = 'unset';
        });

        that.element.addEventListener('mousedown', e => {
        if (app.pointingDevice == 'touch') return;
        console.log('mousedown');
        that.isDown = true;
        that.mouseMove = false;
        that.startY = e.pageY - that.element.offsetTop;
        that.scrollTop = that.element.scrollTop;
        });

        that.element.addEventListener('mouseleave', e => {
        console.log('mouseleave');
        if (app.pointingDevice == 'touch') return;
        that.isDown = false;
        that.mouseMove = false;
        });

        that.element.addEventListener('mouseup', e => {
        //return;
        // e.stopImmediatePropagation();
        console.log('mouseup');

        if (app.pointingDevice == 'touch') return;

        //that.mouseMove = false;
        that.isDown = false;
        recenter();
        });

        that.element.addEventListener('mousemove', e => {
        // console.log('mousemove');

        //e.stopImmediatePropagation();
        //console.log("move");
        if (app.pointingDevice == 'touch') return;
        that.mouseMove = true;
        if (!that.isDown) return;
        const y = e.pageY - that.element.offsetTop;
        const walk = (y - that.startY) * 1; // increase to scroll faster
        that.element.scrollTop = that.scrollTop - walk;
        });

        that.element.addEventListener('wheel', function(e) {
        console.log(e);
        e.preventDefault();
        });

        that.element.addEventListener('touchstart', e => {
        app.pointingDevice = 'touch';
        });

        function recenter() {
        //return
        //console.log(that.scrollCenter.x, that.scrollCenter.y);
        that.bb = that.centerTarget.getBoundingClientRect(); // Should be set once at init...
        that.selected = document.elementFromPoint(that.bb.left, that.bb.top);

        // var selected = document.elementFromPoint(that.scrollCenter.x, that.scrollCenter.y);
        that.scrollToFunction(that.selected, true);
        }
    };
    };
  
    window.kx = new kxapp();

})();
  