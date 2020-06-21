(function() {
'use strict';

var kxapp = function() {
    // Check ES6
    // return false;
    var app = this;
    app.lg = 'fr';

    const kxLg = {
    en: {
        display : "english",
        strings:{
        unsupported:'Feature unavailable<br>in this demonstrator',
        ristretto: 'Ristretto',
        espresso: 'Espresso',
        lungo: 'Lungo',
        cafelong: 'Café Long',
        doppio: 'Doppio',
        americano: 'Americano',
        espressomacchiato: 'e.Macchiato',
        cappucino: 'Cappucino',
        lattemacchiato: 'LMacchiato',
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
        seqCanceled : 'Drink canceled',
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
        beforeThxs : "Your drink ",
        afterThxs : "has&nbsp;been added to your profile",
        settings:"settings",
        setups : "Setups",
        care : "Care",
        informations : "informations",
        help : "Help & Tutorials",
        language : "Language",
        dateTime : "Date/Time",
        screenLight : "Backlight",
        light : "Light",
        display : "Display",
        autoOff : "Auto Off",
        volUnity : "Volume Unity",
        autoRinse : " Auto Rinse",
        waterHardness : "Water Hardness",
        coffeeTemp : "Coffee Temp",
        teaTemp :"Tea Temp",
        cafeTyp : "Coffee type",
        greasyCoffee : "Greasy Coffee",
        standardCoffee : "Stadard Coffee",
        reset : "Init unit",
        firstName: "first name",
        typeYourName : "Type your Name",
        remain:"carachter left",
        remains:"carachters left",
        color:"Color",
        planning:"Planning",
        on:"On",
        off:"Off",
        chooseColor:"Choose your color",
        afterInactivity:"Shutdown after",
        waterHardnessDesc:'Setup Water Hardness',


    }},
    fr: {
        display:"français",
        strings :  {
        unsupported:"Cette fonction n'est pas disponible<br>dans le cadre de ce démonstrateur",
        ristretto: 'Ristretto',
        espresso: 'Espresso',
        lungo: 'Lungo',
        cafelong: 'Café Long',
        doppio: 'Doppio',
        americano: 'Americano',
        espressomacchiato: 'e.Macchiato',
        cappucino: 'Cappucino',
        lattemacchiato: 'LMacchiato',
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
        seqCanceled : 'Boisson interrompue',
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
        beforeThxs : "Votre boisson",
        afterThxs : "a&nbsp;été ajoutée à votre profil",
        settings:"Paramètres",
        setups : "Réglages",
        care : "Entretien",
        informations : "Informations",
        help : "Aide & Tutoriels",
        language : "Langue",
        dateTime : "Date/Heure",
        screenLight : "Lumière écran",
        light : "Lumière",
        display : "affichage",
        autoOff : "Arrêt auto",
        volUnity : "Unité Volume",
        autoRinse : "Rinçage auto",
        waterHardness : "Dureté eau",
        coffeeTemp : "Température Café",
        teaTemp :"température Thé",
        cafeTyp : "type de café",
        greasyCoffee : "Café huileux",
        standardCoffee : "Café Standard",
        reset : "Réinitialiser produit",
        firstName: "Prénom",
        typeYourName : "Tapez votre prénom",
        remain:"caractère restant",
        remains:"caractères restants",
        color:"couleur",
        planning:"programmation",
        on:"actif",
        off:"inactif",
        chooseColor:"Choisissez votre couleur",
        afterInactivity:"Après une période d'inactivité de :",
        waterHardnessDesc:"Régler la dureté de l'eau",



}

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

    app.sliders = {
        backlight:{
            steps:false,
            default:50,
            icons:{left:"backLightSmall",right:"backLightSmall"},
            title:("screenLight"),
            desc:("BackLightDesc"),
        },
        autoOff :  {
        steps:[
            {val:null, desc1 : "15", desc2 : "min"},
            {val:null, desc1 : "30", desc2 : "min"},
            {val:null, desc1 : "60", desc2 : "min"},
            {val:null, desc1 : "90", desc2 : "min"},
            {val:null, desc1 : "120", desc2 : "min"},
        ],
        default:3,
        title:("autoOff"),
        desc:("afterInactivity"),
    },
    waterHardness :  {
        steps:[
            {val:null, desc1 : "0", desc2 : ""},
            {val:null, desc1 : "1", desc2 : ""},
            {val:null, desc1 : "2", desc2 : ""},
            {val:null, desc1 : "3", desc2 : ""},
            {val:null, desc1 : "4", desc2 : ""},
        ],
        default:4,
        title:("waterHardness"),
        desc:("waterHardnessDesc"),
    },
    };

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

    app.ratio = 1;
    app.currentPage = false;
    app.currentRecipe = false;
    app.currentProfile = false;
    app.pointingDevice = 'mouse';

    app.imgDB = {
    unitbkg: { uri: 'unitbkg.png', hsrc: false },
    unitfrg: { uri: 'unitfrg2.png', hsrc: false },
    bkgSheet: { uri: 'bkgSheet.jpg', hsrc: false },
    recipesSheet: { uri: 'recipesSheet.png', hsrc: false },
    beep: { uri: 'beep.mp3', hsrc: false },
    bleep: { uri: 'bleep.mp3', hsrc: false },
    };

    app.profiles = {
    userOne: {
        name: 'LUCY',
        color: 'blue',
        bkg: 'bkg13',
        favs: [
        {
            recipe: 'lattemacchiato',
            rightmenuval: '2',
            leftmenuval: '3',
            keyword: 'morning',
            x2 : false,

        },
        {
            recipe: 'americano',
            rightmenuval: '2',
            leftmenuval: '3',
            keyword: 'yummy',
            x2 : false,

        },
        {
            recipe: 'americano',
            rightmenuval: '2',
            leftmenuval: '3',
            keyword: 'yummy',
            x2 : false,
            },

        ],
    },
    userTwo: {
        name: 'BEN',
        color: 'green',
        bkg: 'bkg6',
        favs: [
        {
            recipe: 'espresso',
            rightmenuval: '40',
            leftmenuval: '3',
            keyword: 'morning',
            x2 : false,

        },
        {
            recipe: 'lattemacchiato',
            rightmenuval: '2',
            leftmenuval: '3',
            keyword: 'yummy',
            x2 : false,

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
    if (kxLg[app.lg].strings[string]) return kxLg[app.lg].strings[string];
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
        <div id="kxBackdrop"></div>          

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
                <div class="pageHolder currentHolder"></div>
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
  
    app.buildPage = function(pageId, data, callback) {
        app.data.pages[pageId].data = data;
        var tempBuild = new DOMParser().parseFromString(
            app.data.pages[pageId].html(),
            'text/html',
        ).body.firstChild;
        app.data.pages[pageId].built = tempBuild;
        app.data.pages[pageId].build(function() {
            callback();
        });
    };
  
    app.isFading = false;

    app.showPage = function(page, fade) {
        if(app.isFading) {
            console.log("wait a second !");
            return false
        };
        page.classList.remove('onScreen'); // if any
        if (fade) {
                app.isFading = true;
                var newholder = document.createElement("div");
                newholder.classList.add("pageHolder","newPageHolder");
                app.screen.insertBefore(newholder, app.pageHolder );
                newholder.appendChild(page);
                app.pageHolder = newholder;
                var prevHolder = app.kxhost.querySelector('.currentHolder');
                    Object.assign(prevHolder.style, {opacity: 0,transition: 'opacity 500ms',pointerEvents:"none"});
                    app.currentPage.beforeShow();
                
                app.ttimout = setTimeout(()=>{
                    console.log("TIMOUT",app.ttimout)
                    prevHolder.remove();
                    // TODO : remove all prevholders that should have been created by hysterical multiple clicks....
                    app.pageHolder.classList.add('currentHolder');
                    app.pageHolder.classList.remove('newPageHolder');
                    page.classList.add('built','onScreen');
                    app.currentPage.run();
                    app.isFading = false;
                },600);

        } else {
            app.pageHolder.innerHTML = '';
            app.pageHolder.appendChild(page);
            page.classList.add('built', 'onScreen');
            app.currentPage.beforeShow();
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
            app.data.pages.recettes.sliderPosition = 0;
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
            sliderPosition : 0,
            built: false,
            build: function(callback) {
            app.currentProfile = false;
            var selection = new hscroller(
                this.built.querySelector('#recetteScroller'),
            );

            // Here we can work on app.pageNode before inserting it then callback to keep on
            //debugger;
            var recipes = this.built.querySelectorAll('.recetteScrollerItem.recette');
            recipes.forEach(el =>
                el.addEventListener('click', event => {
                // console.log("CLICK",selection.isClicked);
                if (!selection.mouseMove) {
                    app.currentRecipe = app.data.recipes[el.dataset.val];
                    app.loadPage('prepare', el.dataset.val);
                }
                }),
            );

            this.built.querySelector('.recetteScrollerItem.plus').addEventListener('click',
            event => {app.loadPage("settings")});

            //debugger

            callback();
            },
            beforeShow: function() {
                document.querySelector('#recetteScroller').scrollTo({left:this.sliderPosition})
            },
            run: function() {
                app.currentProfile = false;
                console.log('running recettes');
                var zeClock = this.built.querySelector('.clock');
                //debugger;
                app.clock.run(zeClock);
            },
            quit: function() {
            // fn called on quit, Must send true to allow quitting.
                this.sliderPosition = document.querySelector('#recetteScroller').scrollLeft;
                console.log('quitting ');
                console.log( this);
                app.clock.stop();
                return true;
            },
            html: function() {
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
                <div style="position:absolute; height:25px;top:12px;right:31px;font-size:18px;padding-right:36px;text-align:right;height:34px;  border-bottom: solid 2px transparent;">${_('profile')}</div>
                -->

                <section id="recetteScroller" class="hScroller" >
                    `;
            for (var [key, value] of Object.entries(app.data.recipes)) {
                // console.log(`${key}: ${value}`);
                rhtml += `
                <div class="recetteScrollerItem recette" data-val="${key}">
                <div class="title">
                <span>${_(value.code)}</span>
                </div><div class="thumb">
                <img nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style="object-position: ${'-' + value.spritexy.split(';')[0] * 150 + 'px'} ${'-' + value.spritexy.split(';')[1] * 150 + 'px'}">
                </div>
                </div>`;
            }

            rhtml += `
                <div class="recetteScrollerItem plus" data-val="">
                <div class="thumb" style="width: 75px; top: 67px; left: 40px;">
                <svg style="" viewBox="0 0 44 44">
                <use href="#settings"></use>
                </svg>
                </div>
                </div>

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
            var that = this;
            that.recipeSequence = false;

            var showSingle = function(){
                thisBuilt.querySelector( 'img.recipeImage', ).style.objectPosition = `${'-' +
                app.currentRecipe.spritexy.split(';')[0] * 150 +
                'px'} ${'-' +
                app.currentRecipe.spritexy.split(';')[1] * 150 +
                'px'}`;
            };

            var showDoubleDimmed = function(){
                thisBuilt.querySelector( 'img.recipeImage', ).style.objectPosition = `${'-' +
                    app.currentRecipe.spritexy_x1.split(';')[0] * 150 +
                    'px'} ${'-' +
                    app.currentRecipe.spritexy_x1.split(';')[1] * 150 +
                    'px'}`;
            };

            var showDoubleFull = function(){
                thisBuilt.querySelector('img.recipeImage').style.objectPosition = `${'-' +
                app.currentRecipe.spritexy_x2.split(';')[0] * 150 +
                'px'} ${'-' +
                app.currentRecipe.spritexy_x2.split(';')[1] * 150 +
                'px'}`;
            };

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


            if (app.currentRecipe.canx2 && !app.currentProfile) {
                
                thisBuilt.querySelector('.plusMinusButton')
                .addEventListener('click', function(e) {
                    var svgUse = this.querySelector('use');
                    //console.log('PROD', app.currentRecipe);
                    if (svgUse.href.baseVal == '#plusButton') {
                    svgUse.setAttribute('href', '#minusButton');
                    app.currentRecipe.x2 = true;
                    showDoubleFull();
                } else if (svgUse.href.baseVal == '#minusButton') {
                    svgUse.setAttribute('href', '#plusButton');
                    app.currentRecipe.x2 = false;
                     showDoubleDimmed();
                    }
                });

            }

            thisBuilt.querySelector('.startButton').addEventListener('click', function(e) {
                runRecipe();
            });

            thisBuilt.querySelector('.stopButton').addEventListener('click', function(e) {
                console.log('stopping');
                thisBuilt.querySelector('.sequence span').innerHTML = _('seqCanceled')
                thisBuilt.classList.remove('running');
                thisBuilt.classList.add('canceled');
                that.recipeSequence.stop();
                that.recipeSequence = false;
                that.canceltimout = setTimeout(()=>{
                    app.loadPage("recettes",null);
                },4000)
                //debugger;
            });


            function runRecipe(){
                if (app.currentRecipe.x2){
                    showDoubleFull();
                } else {
                    showSingle();
                }
                var seqOutput = thisBuilt.querySelector('.sequence span');
                app.currentRecipe.lastSelectedQuantity = thisBuilt.querySelector('.quantityScroller .wheelItem.selected').dataset.val;
                if(app.currentRecipe.leftmenutyp === 'strength') {
                    app.currentRecipe.lastSelectedStrength = thisBuilt.querySelector('.strengthScroller .wheelItem.selected').dataset.val;
                }
                var seq = [
                    { fn: () => { 
                        seqOutput.innerHTML = "Préchauffage";
                        thisBuilt.classList.add('preheat');
                        app.showSpinner();
                    }, delay: 0}, // DELAY : TRIGGERED AFTER THIS DELAY !
                    { fn: () => { 
                        app.hideSpinner();
                        thisBuilt.classList.remove('preheat');
                        thisBuilt.classList.add('running');
                    }, delay: 1000},
                    { fn: () => { 
                        seqOutput.innerHTML = "Café";
                    }, delay: 0},
                    { fn: () => {
                        seqOutput.innerHTML = _("Lait");
                    }, delay: 2000},
                    { fn: () => {
                        seqOutput.innerHTML = _("");
                        //thisBuilt.classList.add('running');
                    }, delay: 2000},
                    { fn: () => {
                        seqOutput.innerHTML = _("");
                        //seqOutput.innerHTML = _("Fin");
                        //thisBuilt.classList.add('running');
                    }, delay: 100},
                ];
                var addedseq = app.currentRecipe.sequences.split(';');
                console.log(addedseq);
                var intertime = recipeDuration / (addedseq.length );
                addedseq.forEach(function(val) {
                   // console.log(intertime, val);
                  //  seq.push({ fn: () => { seqOutput.innerHTML = _(val); }, delay: intertime });
                });

                console.log("SEQUENCE:",seq);

                that.recipeSequence = new sequence(seq, completed => {
                    console.log('sync done');
                    if (completed) {
                        app.loadPage('ready', null);
                    } else {
                        app.hideSpinner();
                        console.log('stopped');
                    }
                    that.recipeSequence = false;
                });
            }

            } else {
                console.warn("ERROR");
            }

            callback();


            },
            beforeShow: function() {
                if (app.currentProfile) {
                    this.built.querySelector('.startButton').style.display="none";
                    this.built.querySelector('.stopButton').style.display="initial";
                }
                if (this.quantityScroller) {
                    let a = this.built.querySelector(
                    '[data-val="' + app.currentRecipe.rightmenudefault + '"]'
                    );
                    //debugger;
                    this.quantityScroller.scrollToFunction(a);
                    this.lastSelectedQuantity = app.currentRecipe.rightmenudefault;

                }
                if (this.strengthScroller) {
                    let a = this.built.querySelector(
                        '[data-val="' + app.currentRecipe.leftmenudefault + '"]'
                    );
                    this.strengthScroller.scrollToFunction(a);
                    this.lastSelectedStrength = app.currentRecipe.leftmenudefault;

                }

                if (app.currentProfile) {

                }
                //  debugger;
            },
            run: function() {

                console.log('running prepare');
                if (app.currentProfile) {
                    this.strengthScroller.pause = true;
                    this.quantityScroller.pause = true;
                    this.built.querySelector('.startButton').click(); // Olé !
                }
            },
            quit: function() {
                console.log(this.recipeSequence);
                //debugger;
                clearTimeout(this.canceltimout);
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

                    <div class="wheel vWheel right quantityScroller hideOnCancel">
                    <div class="wheelItem noAction"></div>`;

                app.currentRecipe.rightmenuvalues
                .split(';')
                .forEach(function(val) {
                    rightMenu += `
                                <div data-val="${val}" class="wheelItem">${val}</div>
                               `;

                });

                rightMenu += `<div class="wheelItem noAction last"></div>
                                </div>
                                <div class="vwheelCenter hideOnCancel right userBorderColor">&nbsp;</div>
                                <div class="vwheelUnit hideOnCancel right">ml</div>
                                `;
            } else if (app.currentRecipe.rightmenutyp == 'vol') {
                rightMenu = `
                    <div class="target quantityScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:384px; top:160px"></div>

                    <div class="wheel vWheel right quantityScroller hideOnCancel">
                    <div class="wheelItem"></div>

                    <div data-val="M" class="wheelItem size">
                        <svg viewBox="0 0 32 32" class="">
                            <use href="#sizeM" />
                        </svg>
                    </div>

                    <div data-val="L" class="wheelItem size">
                        <svg viewBox="0 0 32 32" class="">
                            <use href="#sizeL" />
                        </svg>
                    </div>

                    <div data-val="XL" class="wheelItem size">
                        <svg viewBox="0 0 32 32" class="">
                            <use href="#sizeXL" />
                        </svg>
                    </div>

                    <div class="wheelItem last"></div>
                    </div>
                    <div class="vwheelCenter hideOnCancel userBorderColor right">&nbsp;</div>
                    `;
            }
            return `
                    <div class="pageContent prepare ${app.currentRecipe.bkg} ${(app.currentProfile)?app.currentProfile.color + ' userMode':'orange'}">
                    <style>
                    .canceled .hideOnCancel{
                        opacity:0;
                    }
                    .canceled .dimOnCancel{
                        opacity:0.3;
                    }
                    .cancelIcon{
                        display:none;
                        position:absolute;
                        width:80px;
                        height:80px;
                        left:73px;
                        top:130px
                    }

                    .canceled .cancelIcon{
                        display:block;
                    }

                    </style>
                    <div class="backToMain backButton hideOnCancel">
                      <svg style="" viewBox="0 0 26 26" > <use href="#backArrow" /> </svg>
                    </div>


                    <div class="centralArea" style="position:absolute;width:222px;left:129px;height:100%;background-color:rgba(255,255,255,.15)">
                        
                        <div class="titleBlock">
                            <span class="title">${_(app.currentRecipe.code)} </span>
                       ${(app.currentProfile)?'<div class="userTitleClip userBorderColor"></div>':''}
                        </div>

                        <div class="sequence" style="position: absolute; width: 173px;left: 25px; top: 54px; height: 46px; text-align:center">
                            <span></span>
                        </div>

                        <div class="imageHolder dimOnCancel">
                            <img class="recipeImage " nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style=" object-position:${
                                    app.currentProfile ?
                                        app.currentRecipe.x2 ? 
                                        ' -' + app.currentRecipe.spritexy_x2.split(';')[0] * 150 + 'px'+
                                        ' -' + app.currentRecipe.spritexy_x2.split(';')[1] * 150 + 'px'
                                        : 
                                        ' -' + app.currentRecipe.spritexy.split(';')[0] * 150 + 'px'+
                                        ' -' + app.currentRecipe.spritexy.split(';')[1] * 150 + 'px'
                                    : 
                                    ' -' + app.currentRecipe.spritexy_x1.split(';')[0] * 150 + 'px'+
                                    ' -' + app.currentRecipe.spritexy_x1.split(';')[1] * 150 + 'px'

                                }
                            
                            "/>
                        </div>

                        <div class="cancelIcon">
                            <svg viewBox="0 0 64.4 64.4" class="">
                                <use href="#canceled" />
                            </svg>
                        </div>

                        ${ app.currentRecipe.canx2 && !app.currentProfile
                            ? `
                        <div class="plusMinusButton hideOnCancel" style="position: absolute; left: 151px; top: 104px; width: 32px; height: 32px;">
                            <svg viewBox="0 0 32 32" class="">
                            <use href="#plusButton" />
                            </svg>
                        </div>
                        ` : ``
                        }

                        <div class="progressBarBkg hideOnCancel">
                            <div class="progressBar">
                            </div>
                        </div>

                    </div>
                    <div class="stopButton userBorderColor hideOnCancel" style="text-transform:uppercase">${_('stop')}</div>
                    <div class="startButton userBorderColor hideOnCancel" style="text-transform:uppercase">${_('start')}</div>

                    ${rightMenu}

                    ${
                    app.currentRecipe.leftmenutyp === 'strength'
                        ? `
                    <div class="target strengthScroller_target " style = "position:absolute; width:5px; height:5px;background-color:transparent; left:96px; top:160px"></div>
                    <div class="wheel vWheel left strengthScroller hideOnCancel">
                        <div class="wheelItem noAction"></div>
                            <div class="wheelItem  strength"  data-val="1">
                            <svg viewBox="0 0 57 54" class="">
                            <use href="#force1" />
                            </svg>
                        </div>
                        <div class="wheelItem strength " data-val="2">
                            <svg viewBox="0 0 57 54" class="">
                            <use href="#force2" />
                            </svg>
                        </div>
                        <div class="wheelItem strength" data-val="3">
                            <svg viewBox="0 0 57 54" class="">
                            <use href="#force3" />
                            </svg>
                        </div>
                        <div class="wheelItem noAction"></div>
                    </div>
                    <div class="vwheelCenter left userBorderColor hideOnCancel">&nbsp;</div>
                    `
                        : ''
                    }

                </div>
                `;
            },
        },

        ready: {
            name: 'ready',
            built: false,
            thisTimeOut : null,
            build: function(callback) {
                var thisBuilt = this.built;
                thisBuilt.querySelector('.profileButton').addEventListener('click', function(e) {
                    console.log('ADD TO PROFILE');
                    app.loadPage("profileSelection",null);
                });
                
            callback();
            },
            beforeShow: function() {},
            run: function() {
                this.thisTimeOut = setTimeout(()=>{
                    app.loadPage("recettes",null);
                },4000)
                
            },
            quit: function() {
                clearTimeout(this.thisTimeOut);
                this.built = false; // We reset the built as next recipe will not be the same
                return true;
            },
            html: function() {
            return `

            <div class="pageContent ready ${app.currentRecipe.bkg} ${(app.currentProfile)?app.currentProfile.color + ' userMode':'orange'}">

            <div class="centralArea" style="position:absolute;width:360px;left:60px;height:100%;background-color:rgba(255,255,255,.15)">

            <div class="ready" style="position: absolute;
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
                object-position: ${
                    (!app.currentRecipe.x2)
                    ?  ('-' + app.currentRecipe.spritexy.split(';')[0] * 150 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 150 + 'px')
                    :  ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 150 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 150 + 'px')
                } "/>
            </div>
                <div class="profileButton" style="${app.currentProfile?'display:none;':'' }position:absolute;top: 232px; left: 274px; width:60px;height:60px">
                    <svg style="" viewBox="0 0 32 32">
                        <use href="#profileButton" />
                    </svg>
                </div>
            </div>
            <div class="titleBlock">
            <span class="title">${_(
                app.currentRecipe.code,
            )}</span>
            ${(app.currentProfile)?'<div class="userTitleClip userBorderColor"></div>':''}

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
            run: function() {

            },
            quit: function() {
            this.built = false; // We reset the built as next recipe will not be the same
            return true;
            },
            html: function() {
            return `
                        
            <div class="pageContent profileSelection bkg5 orange">

            <div class="backToMain backButton">
            <svg style="" viewBox="0 0 26 26" >
            <use href="#backArrow" />
            </svg>
            </div>

            <div class="titleBlock light">
                <span class="title">${_(app.currentRecipe.code)}</span>
            </div>
            
            <div class="enjoy settingsDesc" style="padding-left: 32px;">

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
                    src="${

                        imag('recipesSheet')}" style="width:300px;height:300px; object-position: ${
                            
                            (!app.currentRecipe.x2)
                            ?  ('-' + app.currentRecipe.spritexy.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px')
                            :  ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 50 + 'px')
                    
                
                } "/>
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
                keywordsElems.forEach(function(el,k) {
                    el.addEventListener('click', event => {
                        console.log('click', el);

                        if(thisBuilt.querySelector('.kword.selected')){
                            thisBuilt.querySelector('.kword.selected').classList.remove('selected');
                        }
                        //if (that.mouseMove) return;
                        //that.scrollToFunction(el, true);
                        el.classList.add("selected");
                        app.lastSelectedKeyword = el.dataset.id;
                    })
                }
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
                    src="${imag('recipesSheet')}" style="width:300px;height:300px; object-position: ${
                        (!app.currentRecipe.x2)
                        ?  ('-' + app.currentRecipe.spritexy.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px')
                        :  ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 50 + 'px')
                
                } "/>
            </div>


                <span>${_("selectKeyword")}</span>
            </div>
            
            
                <div class="keywords hScroller" style="position:absolute; top:159px;height:43px;width:100%">
                ${
                    (function(){
                        var keywordList = '';
                        kxkeywords.forEach(function(val,key) {
                            keywordList += '<div class="kword '+(key==0?'selected':'')+'" data-id='+val+'>'+_(val)+'</div>';
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
                //debugger;
                var thisBuilt = this.built;
                //debugger;
                callback();
                var newFav = {
                    keyword: app.lastSelectedKeyword,
                    leftmenuval: app.currentRecipe.lastSelectedStrength,
                    recipe: app.currentRecipe.code,
                    rightmenuval: app.currentRecipe.lastSelectedQuantity,
                    x2 : app.currentRecipe.x2
                };
                app.currentProfile.favs.push(newFav);

                setTimeout(function(){
                    app.loadPage('profile',null)
                },2000)
            },
            beforeShow: function() {},
            run: function() {},
            quit: function() {
            this.built = false; // We reset the built as next recipe will not be the same
            return true;
            },
            html: function() {
            return `
                        
            <div class="pageContent profileSuccess bkg5 ${app.currentProfile.color}" style="display: flex;
            justify-content: center;">


            <div style="background: rgba(255,255,255,.2);
            height: 125px;
            text-align: center;
            padding: 4px 20px;
            margin-top: 35px;">
                <span class="title" style="    text-transform: uppercase;
                font-weight: bold;">
                    ${_(app.currentRecipe.code)}
                </span>
                <div class=" userBorderColor" style="    width: 30px;
                display: block;
                border-bottom-style: solid;
                border-bottom-width: 3px;
                bottom: -2px;
                left: 72px;
                margin: 6px auto 0;"></div>
            <div style="
            position: relative;
            display: block;
            width: 50px;
            height: 50px;
            overflow: hidden;
            transform: scale(1.3);
            margin: 0 auto;
            text-align: left;
            top: 12px;
                        ">
                <img class="recipeImage " nopin="nopin" data-alt="images/recipesSheet.png" src="${imag('recipesSheet')}" style="width:300px;height:300px; text-align:left;object-position: ${
                    (!app.currentRecipe.x2)
                    ?  ('-' + app.currentRecipe.spritexy.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px')
                    :  ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 50 + 'px')
            } 
                
                ">
            </div>
            <div class="keyword" style="width: 100%;margin-top:25px">${_(app.lastSelectedKeyword)}</div>


                
            </div>

            
                <div class="tak" style="top: 200px;
                height: 43px;
                width: 100%;
                text-align: center;
                position: absolute;
                font-size: 28px;
                font-weight: 100;">
                ${_("beforeThxs")} <span style="font-weight:600">${_(app.currentRecipe.code)} ${_(app.lastSelectedKeyword)}</span> ${_("afterThxs")}
                </div>
                
            </div>


                            `;
            },
        },

        profile: {
            built: false,
            build: function(callback) {
            var recipes = this.built.querySelectorAll('.atile.userRecipe');
            recipes.forEach(el => el.addEventListener('click', event => {
               // debugger;
                    var thisFav = app.currentProfile.favs[el.dataset.val];
                    app.currentRecipe = Object.assign({}, app.data.recipes[thisFav.recipe]);
                    console.log("click", app.currentRecipe);
                    app.currentRecipe.leftmenudefault=thisFav.leftmenuval;
                    app.currentRecipe.rightmenudefault=thisFav.rightmenuval;
                    app.currentRecipe.x2 = thisFav.x2;
                    app.loadPage('prepare',null);
                }),
            );

            var favorites = new hscroller(
                this.built.querySelector('.slides'),
            );

            this.built.querySelector('.userSettings').addEventListener('click', event => {
                console.log("userSettings");
                app.loadPage('userSettingsHome', null);
            });


            this.built.querySelector('.addFavToUser').addEventListener('click', event => {
                console.log("addFavToUser");
                app.toast(_("unsupported"))
            })

            
            callback();
            },
            beforeShow: function() {},
            run: function() {
            console.log('running recettes');
            },
            quit: function() {
            // fn called on quit ,, Must send true to allow quitting.
            console.log('quitting ' + this.name);
            this.built = false;
            return true;
            },
            html: function() {
            var rhtml = `
            <div class="pageContent profile ${app.currentProfile.bkg} ${app.currentProfile.color}">
            <div class="titleBlock light">
            <span class="title">${_(app.currentProfile.name)}</span>
            <div class="userTitleClip userBorderColor"></div>
            </div>
                <style>


                </style>

                <section class="slides" >
                    `;
                    var chunks = [];
                    for(var i = 0; i < app.currentProfile.favs.length+2; i += 8) {
                        chunks.push(app.currentProfile.favs.slice(i, i+8));
                    }
                    chunks.forEach(function(aChunk,key) {
                        rhtml += `<div class="tilesBlock"><div class="tiles" data-key="${key}">`;

                        aChunk.forEach(function(v,k) {
                            var thisRecipe = app.data.recipes[v.recipe];
                                rhtml += `
                                <div class="atile userRecipe" data-val="${k}">
                                <div class="titleBlock">
                                <div class="title">
                                <span>${_(thisRecipe.code)}</span>
                                </div>
                                <div class="userTitleClip userBorderColor"></div>
                                </div>
                                <div class="keyword"><span>${_(v.keyword)}</span></div>
                                <div class="thumb">
                                <img nopin = "nopin" data-alt="${imag('recipesSheet')}"
                                src="${imag('recipesSheet')}" 
                                style="object-position: 
                                ${
                                (!v.x2)
                                ?  ('-' + thisRecipe.spritexy.split(';')[0] * 75 + 'px -' + thisRecipe.spritexy.split(';')[1] * 75 + 'px')
                                :  ('-' + thisRecipe.spritexy_x2.split(';')[0] * 75 + 'px -' + thisRecipe.spritexy_x2.split(';')[1] * 75 + 'px')
                                }
                                "></div></div>`;

                        })
                        if (key+1 == chunks.length) {
                            rhtml += `
                            <div class="atile addFavToUser">
                                <div class="tileIcon">
                                    <svg style="" viewBox="0 0 44 44">
                                        <use href="#plus" />
                                    </svg>
                                </div>
                            </div>
                            <div class="atile userSettings">
                            <div class="tileIcon">
                                <svg style="" viewBox="0 0 44 44">
                                    <use href="#userSettings" />
                                </svg>
                                </div>
                            </div>`;
                        }

                        rhtml += `</div></div>`;
                    })
                    // console.log(chunks);


            rhtml += `</section>
            </div>
            `;
            return rhtml;
            },
        },

        settings: {
            built: false,
            build: function(callback) {


                var buttons = this.built.querySelectorAll('.paramMenuButton');
                //console.log(keywordsElems);
                buttons.forEach(function(el,k) {
                    el.addEventListener('click', event => {
                        //console.log('click', el.dataset.target);
                        app.loadPage(el.dataset.target,null)
                    })
                }
            )
            
            callback();
            },
            beforeShow: function() {


            },
            run: function() {
            console.log('running settings');
            },
            quit: function() {
            // fn called on quit ,, Must send true to allow quitting.
            console.log('quitting ' + this.name);
            //this.built = false;
            return true;
            },
            html: function() {
            var rhtml = `
            <div class="pageContent settings bkg16">
            <div class="titleBlock light" style="left:99px;width:282px">
            <span class="title">${_("settings")}</span>
            </div>
                


                <section class="params" >
                <div class ="paramMenuButton" data-target="setups"> ${_("setups")} </div>
                <div class ="paramMenuButton" data-target="care"> ${_("care")} </div>
                <div class ="paramMenuButton" data-target="informations"> ${_("informations")} </div>
                <div class ="paramMenuButton" data-target="help"> ${_("help")} </div>

                </section>

                </div>

                `;
            return rhtml;
            },
        },

        setups: {
            name:"setups",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('settings', null);
                });

                var slider = new hslider(
                    thisBuilt.querySelector('.slides'),
                    function(c){
                        console.log(c);
                        thisBuilt.querySelector('.pager.selected').classList.remove('selected');
                        thisBuilt.querySelector('.pager_'+c).classList.add('selected');
                    }
                )

                var buttons = this.built.querySelectorAll('.atile.settings.active');
                //console.log(keywordsElems);
                buttons.forEach(function(el,k) {
                    el.addEventListener('click', event => {
                        app.loadPage(el.dataset.target,(el.dataset.data?el.dataset.data:null))
                    })
                });

                callback();
            },
            beforeShow: function() {},
            run: function() {console.log('running' + this.name);},
            quit: function() {
                console.log('quitting ' + this.name);
                this.built = false;
                return true;
            },
            html: function() {
            var rhtml = `

            <div class="pageContent ${this.name} bkg16">
            <div class="titleBlock light wide">
            <span class="title">${_(this.name)}</span>
            </div>
            <div class="backButton">
                <svg style="" viewBox="0 0 26 26" >
                <use href="#backArrow" />
            </div>

            <section class="slides">

                <div class="tilesBlock">
                <div class="tiles" data-key="0">

                
                <div class="atile settings active" data-target="language" data-val="0">
                <div class="titleBlock">
                <div class="title">
                <span>${_('language')}</span>
                </div>
                </div>
                    <div class="atileContents">
                    <div>${kxLg[app.lg].display.toUpperCase()}</div>
                    </div>
                </div>

                <div class="atile settings" data-val="0">
                <div class="titleBlock">
                <div class="title">
                <span>${_('dateTime')}</span>
                </div>
                </div>
                    <div class="tileIcon">
                    <svg style="" viewBox="0 0 44 44">
                        <use href="#plus"></use>
                    </svg>
                    </div>
                </div>


                <div class="atile settings" data-val="0">
                <div class="titleBlock">
                <div class="title">
                <span>${_('screenLight')}</span>
                </div>
                </div>
                    <div class="tileIcon">
                    <svg style="" viewBox="0 0 44 44">
                        <use href="#backLight"></use>
                    </svg>
                    </div>
                </div>

                <div class="atile settings">
                <div class="titleBlock">
                <div class="title">
                <span>${_('light')}</span>
                </div>
                </div>
                    <div class="tileIcon ">
                    <svg style="" viewBox="0 0 44 44">
                        <use href="#lightOn"></use>
                    </svg>
                    </div>
                </div>



                <div class="atile settings active" data-val="0">
                <div class="titleBlock">
                <div class="title">
                <span>${_('display')}</span>
                </div>
                </div>
                    <div class="tileIcon" style="width: 64px;
                    height: 64px;
                    left: 23px;
                    top: 42px;">
                    <svg viewBox="0 0 64 64">
                        <use href="#tiles"></use>
                    </svg>
                    </div>
                </div>

                <div class="atile settings active" data-target="slider" data-data="autoOff">
                <div class="titleBlock">
                <div class="title">
                <span>${_('autoOff')}</span>
                </div>
                </div>
                <div class="atileContents">
                <div>${"15mn."}</div>
                </div>
                </div>

                <div class="atile settings" data-val="0">
                <div class="titleBlock">
                <div class="title">
                <span>${_('volUnity')}</span>
                </div>
                </div>
                <div class="atileContents">
                <div>${"ml."}</div>
                </div>
                </div>


                <div class="atile settings" data-val="0">
                <div class="titleBlock">
                <div class="title">
                <span>${_('autoRinse')}</span>
                </div>
                </div>
                    <div class="atileContents">
                    <div>${_("off").toUpperCase()}</div>
                    </div>
                </div>


                </div>
                </div>
                <div class="tilesBlock">

            <div class="tiles" data-key="0">


            <div class="atile settings active" data-target="slider" data-data="waterHardness">
            <div class="titleBlock">
            <div class="title">
            <span>${_('waterHardness')}</span>
            </div>
            </div>
                <div class="atileContents">
                <div>${"3"}</div>
                </div>
            </div>

            <div class="atile settings" data-val="0">
            <div class="titleBlock">
            <div class="title">
            <span>${_('coffeeTemp')}</span>
            </div>
            </div>
                <div class="atileContents">
                <div>${"T°2"}</div>
                </div>
            </div>


            <div class="atile settings" data-val="0">
            <div class="titleBlock">
            <div class="title">
            <span>${_('teaTemp')}</span>
            </div>
            </div>
            <div class="atileContents">
            <div>${"T°3"}</div>
            </div>
            </div>

            <div class="atile settings" data-val="0">
            <div class="titleBlock">
            <div class="title">
            <span>${_('cafeTyp')}</span>
            </div>
            </div>
                <div class="atileContents">
                <div>${_("greasyCoffee")}</div>
                </div>
            </div>          

            <div class="atile settings" data-val="0">
            <div class="titleBlock">
            <div class="title">
            <span>${_('reset')}</span>
            </div>
            </div>
                <div class="tileIcon">
                <svg style="" viewBox="0 0 44 44">
                    <use href="#reset"></use>
                </svg>
                </div>
            </div>


                </div>
                </div>

                </section>
                <style>
                .slides {
                    scroll-snap-type: x mandatory;
                }
                .tilesBlock{
                    scroll-snap-align: start;
                }
                .pagers{
                    position:absolute;
                    width:100%;
                    bottom:8px;
                    height:9px;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-content: stretch;
                    align-items: flex-end;
                }

                .pager{
                    width:8px;
                    height:8px;
                    border-radius:4px;
                    box-sizing:border-box;
                    border:solid 1px orange;
                    margin:0 3px;
                }
                .pager.selected{
                    background-color: orange;
                }
                </style>


                <div class="pagers">
                    <div class="pager pager_1 selected"></div>
                    <div class="pager pager_2"></div>
                </div>


                </div>



                `;
            return rhtml;
            },
        },

        care: {
            name:"care",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('settings', null);
                });

                callback();
            },
            beforeShow: function() {},
            run: function() {console.log('running' + this.name);},
            quit: function() {console.log('quitting ' + this.name);return true;},
            html: function() {
            var rhtml = `
            <div class="pageContent ${this.name} bkg16">
            <div class="titleBlock light" style="left:99px;width:282px">
            <span class="title">${_(this.name)}</span>
            </div>
            <div class=" backButton">
                <svg style="" viewBox="0 0 26 26" >
            <use href="#backArrow" />
                <style>
            
                </style>

                </div>

                `;
            return rhtml;
            },
        },

        informations: {
            name:"informations",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('settings', null);
                });

                callback();
            },
            beforeShow: function() {},
            run: function() {console.log('running' + this.name);},
            quit: function() {console.log('quitting ' + this.name);return true;},
            html: function() {
            var rhtml = `
            <div class="pageContent ${this.name} bkg16">
            <div class="titleBlock light" style="left:99px;width:282px">
            <span class="title">${_(this.name)}</span>
            </div>
            <div class=" backButton">
                <svg style="" viewBox="0 0 26 26" >
            <use href="#backArrow" />
                <style>
            
                </style>

                </div>

                `;
            return rhtml;
            },
        },

        help: {
            name:"help",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('settings', null);
                });

                callback();
            },
            beforeShow: function() {},
            run: function() {console.log('running' + this.name);},
            quit: function() {console.log('quitting ' + this.name);return true;},
            html: function() {
            var rhtml = `
            <div class="pageContent ${this.name} bkg16">
            <div class="titleBlock light" style="left:99px;width:282px">
            <span class="title">${_(this.name)}</span>
            </div>
            <div class="backToMain backButton">
                <svg style="" viewBox="0 0 26 26" >
            <use href="#backArrow" />
                <style>
            
                </style>

                </div>

                `;
            return rhtml;
            },
        },

        language: {
            name:"language",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('settings', null);
                });

                thisBuilt.querySelector('.okButton').addEventListener('click', function(e) {
                    app.lg = thisBuilt.querySelector('.langScroller .wheelItem.selected').dataset.val;
                    Cookies.set('lg', app.lg);
                    //console.log(app.lg);
                    app.resetBuilds();
                    app.loadPage("language",null)
                })

                this.lgScroller = new vscroller(
                    thisBuilt.querySelector('.langScroller'),
                    thisBuilt.querySelector('.langScroller_target'),
                );

                callback();
            },
            beforeShow: function() {
                if (this.lgScroller) {
                    let a = this.built.querySelector(
                        '[data-val="' + app.lg + '"]',
                    );
                    this.lgScroller.scrollToFunction(a);
                    //this.lastSelectedStrength = app.currentRecipe.leftmenudefault;
                }
            },
            run: function() {console.log('running' + this.name);},
            quit: function() {console.log('quitting ' + this.name);return true;},
            html: function() {
            
            var lgScrollerItems = '';

            for (var [k, v] of Object.entries(kxLg)) {
                lgScrollerItems +=`<div class="wheelItem langScroller" data-val="${k}">${v.display}</div>
                `;
            }

            var rhtml = `

            <div class="pageContent ${this.name} orange bkg16">
            <div class="titleBlock light" style="left:99px;width:282px">
            <span class="title">${_(this.name)}</span>
            </div>
                <div class="backToMain backButton">
                    <svg style="" viewBox="0 0 26 26" >
                    <use href="#backArrow" />
                </div>
                <style>
                .langScroller.wheel.vWheel.left {
                    width: 208px;
                    left: 45px;
                    height: 271px;
                    top: 47px;
                }

                .language .vWheel .wheelItem:first-child {
                    height: 83.33px;
                }

                .language .vWheel .wheelItem:last-child {
                    height: 129.33px;
                }

                .vWheel .wheelItem {
                    text-align: left;
                    text-transform:uppercase;
                }

                .okButton{
                    position: absolute;
                    right: 36px;
                    bottom: 36px;
                    border: solid 2px;
                    height: 60px;
                    width: 60px;
                    text-transform: uppercase;
                    line-height: 60px;
                    text-align: center;
                    font-weight: bold;
                }


                </style>



                <div class="target langScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:96px; top:160px"></div>
                <div class="wheel vWheel left langScroller">

                    <div class="wheelItem noAction"></div>
                        ${lgScrollerItems}
                    <div class="wheelItem noAction"></div>
                </div>
                <div class="vwheelCenter left userBorderColor">&nbsp;</div>

                <div class="okButton borderOrange">${_('ok')}</div>
                </div>

                `;
            return rhtml;
            },
        },

        firstName: {
            name:"firstName",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                var name = app.currentProfile.name;
                var maxChar = 12;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('userSettingsHome', null);
                });

                thisBuilt.querySelector('.okButton').addEventListener('click', function(e) {
                    app.currentProfile.name = name;
                    app.loadPage('userSettingsHome', null);

                })

                this.lgScroller = new hscroller(
                    thisBuilt.querySelector('.langScroller'),
                );

                var nameField = thisBuilt.querySelector('.nameField')
                var backSpace = thisBuilt.querySelector('.backSpaceButton')
                var keys = this.built.querySelectorAll('.hScrollerItem');
                var remain = this.built.querySelector('.remain');
                //console.log(keywordsElems);
                function nameToField(n){
                    name = n = n.substring(0, maxChar);
                    var strlength = maxChar - n.length
                    var str2field = name;
                    for (var i = 0; i < strlength; i++) {
                        str2field += '<span class="dash"> _ </span>';
                    }
                    console.log(maxChar - n.length);
                    nameField.innerHTML=str2field;
                   // debugger;
                    remain.innerHTML = (maxChar - n.length <=1)
                    ? '( '+(maxChar - n.length) +' '+ _('remain')+' )'
                    : '( '+(maxChar - n.length) +' '+ _('remains')+' )'  ;
                }

                keys.forEach(function(el,k) {
                    el.addEventListener('click', event => {
                        name = name + el.dataset.val;
                        nameToField(name);
                        //app.loadPage(el.dataset.target,null);

                    })
                });

                backSpace.addEventListener('click', event => {
                    name = name.slice(0, -1);
                    nameToField(name);
                })


                nameToField(name);

                callback();
            },
            beforeShow: function() {
               // if (this.lgScroller) {
               // }
            },
            run: function() {console.log('running' + this.name);},
            quit: function() {this.built = false;return true;},
            html: function() {
            
            var lgScrollerItems = '';
            var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ&-123567890".split('');
            alpha.forEach(function(char,k) {
                lgScrollerItems +=`<div class="hScrollerItem" data-val="${char}"><span>${char}</span></div>`;
            })



            var rhtml = `

           <div class="pageContent firstName ${app.currentProfile.bkg} ${app.currentProfile.color}">
           <div class="titleBlock wide light">
           <span class="title">${_('firstName')}</span>
           <div class="userTitleClip wide userBorderColor"></div>
           </div>


            <div class="backToMain backButton">
                <svg style="" viewBox="0 0 26 26" >
                <use href="#backArrow" />
            </div>
                <style>
                .firstName .hScroller{
                    top: 185px;
                    height: 50px;
                    padding-top: 10px;
                }

                .firstName .hScrollerItem {
                    width: 47px;
                    height: 42px;
                    text-align: center;
                    margin-right: 0;
                    background-color: transparent;
                    border-right: solid 1px rgba(255,255,255,0.2);
                    box-sizing: border-box;
                }


                .firstName .hScrollerItem:last-child {
                    border-right:none;
                }

                .firstName .hScrollerItem span {
                    font-size:28px;
                    line-height:36px;
                }

                /*span.dash{
                    font-size:21px
                }*/

                </style>

                <div class="settingsDesc">${_('typeYourName')}</div>

                <div class = "nameFieldHolder" style="position:absolute;height:60px; width:282px;top:109px;left:99px;  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.5);
                background-color: rgba(0, 0, 0, 0.3);">
                    <div class = "nameField" style="width: 200px;
                    position: absolute;
                    top: 14px;
                    left: 14px;
                    font-size: 20px;
                    text-overflow: clip;
                    white-space: nowrap;
                    text-align: center;
                    line-height: 32px;
                    overflow: hidden;">_____</div>
                    <div class="backSpaceButton" style="    position: absolute;
                    right: 18px;
                    width: 32px;
                    height: 32px;
                    top: 13px;">
                        <svg style="" viewBox="0 0 32 32">
                        <use href="#backspace" />
                        </svg>
                    </div>
                </div>
                <div class="remain" style="position:absolute;height:60px;top:169px;left:99px;  width: 282px;
                height: 19px;
                font-size: 14px;
                font-weight: 300;
                text-align: center;
                color: #9b9b9b;"></div>

                <div class=" hScroller langScroller">

                        ${lgScrollerItems}
                </div>

                <div class="okButton startButton bottom userBorderColor">${_('OK')}</div>

                </div>

                `;
            return rhtml;
            },
        },

        color: {
            name:"color",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                var color = app.currentProfile.color;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('userSettingsHome', null);
                });

                thisBuilt.querySelector('.okButton').addEventListener('click', function(e) {
                    app.currentProfile.color = color;
                    app.loadPage('userSettingsHome', null);
                })

                this.colorScroller = new hscroller(
                    thisBuilt.querySelector('.colorScroller'),
                );

                var colors = this.built.querySelectorAll('.hScrollerItem');

                colors.forEach(function(el,k) {
                    el.addEventListener('click', event => {
                        thisBuilt.querySelector('.hScrollerItem.selected').classList.remove('selected');
                        color =  el.dataset.name;
                        el.classList.add('selected');
                        console.log(color);
                    })
                });

                callback();
            },
            beforeShow: function() {
                var selected = this.built.querySelector('[data-name="' + app.currentProfile.color + '"]');
                selected.classList.add("selected");
                    //debugger;
                    this.built.querySelector('.colorScroller').scrollTo({left:selected.offsetLeft-200});
               // if (this.lgScroller) {
               // }
            },
            run: function() {console.log('running' + this.name);},
            quit: function() {
                this.built = false;
                return true;
            },
            html: function() {
            
            var colorScrollerItems = '';

            for (var [key, value] of Object.entries(kxColors)) {
                colorScrollerItems +=`<div class="hScrollerItem" data-name="${key}" data-val="${value}">
                    <div style="background-color:${value}">&nbsp;</div>
                </div>`;
            }



            var rhtml = `

           <div class="pageContent colors ${app.currentProfile.bkg} ${app.currentProfile.color}">
           <div class="titleBlock wide light">
           <span class="title">${_('color')}</span>
           <div class="userTitleClip wide userBorderColor"></div>
           </div>


            <div class="backToMain backButton">
                <svg style="" viewBox="0 0 26 26" >
                <use href="#backArrow" />
            </div>
                <style>
                .colors .hScroller{
                    top: 161px;
                    height: 50px;
                    padding-top: 10px;
                }

                .colors .hScrollerItem {
                    width: 100px;
                    height: 62px;
                    text-align: center;
                    margin-right: 0;
                    background-color: transparent;
                    border-right: solid 1px rgba(255,255,255,0.2);
                    box-sizing: border-box;
                }


                .colors .hScrollerItem:last-child {
                    border-right:none;
                }

                .colors .hScrollerItem div {
                    display: inline-block;
                    font-size: 6px;
                    line-height: 37px;
                    width: 70px;
                    height: 9px;
                    margin-top: 20px;
                }

                .colors .hScrollerItem.selected div {
                    box-shadow: 0 0 22px 2px;
                }



                </style>

                <div class="settingsDesc">${_('chooseColor')}</div>
                
                

                <div class=" hScroller colorScroller">
                        ${colorScrollerItems}
                </div>

                <div class="okButton startButton bottom userBorderColor">${_('OK')}</div>

                </div>

                `;
            return rhtml;
            },
        },

        userSettingsHome: {
            name:"userSettingsHome",
            built: false,
            build: function(callback) {
                var thisBuilt = this.built;
                var name = app.currentProfile.name;
                var maxChar = 12;
                thisBuilt.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('profile', null);
                });

                var buttons = thisBuilt.querySelectorAll('.atile.settings.active');
                console.log(buttons);
                buttons.forEach(function(el,k) {
                    console.log('->',el.dataset.target)
                    el.addEventListener('click', event => {
                        app.loadPage(el.dataset.target,null)
                    })
                });

                /*thisBuilt.querySelector('.okButton').addEventListener('click', function(e) {
                    app.currentProfile.name = name;
                })*/

               // this.lgScroller = new hscroller(
                  //  thisBuilt.querySelector('.langScroller'),
               // );

               

                callback();
            },
            beforeShow: function() {
               // if (this.lgScroller) {
               // }
            },
            run: function() {console.log('running' + this.name);},
            quit: function() {this.built = false;return true;},
            html: function() {
            


            var rhtml = `

           <div class="pageContent userSettingsHome ${app.currentProfile.bkg} ${app.currentProfile.color}">
           <div class="titleBlock wide light">
           <span class="title">${app.currentProfile.name}</span>
           <div class="userTitleClip wide userBorderColor"></div>
           </div>

            <div class="backToMain backButton">
                <svg style="" viewBox="0 0 26 26" >
                <use href="#backArrow" />
            </div>

            <style>
            </style>

            <section class="slides">


            <div class="tilesBlock">
            <div class="tiles" data-key="0">

            
            <div class="atile settings active" data-target="color" data-val="0" style="">
            <div class="titleBlock">
            <div class="title">
            <span>${_('color')}</span>
            </div>
            </div>
            <div class="atileContents">
            <div class="ellipsis ">
                <div class="userFIllColor" style="width : 51px;display:inline-block;height:3px;"></div>
            </div>
            </div>


            </div>

            <div class="atile settings active" data-target="firstName" data-val="0" style="">
                <div class="titleBlock">
                    <div class="title ">
                        <span>${_('firstName')}</span>
                    </div>
                </div>
                    <div class="atileContents">
                        <div class="ellipsis">${app.currentProfile.name}</div>
                    </div>
            </div>

            <div class="atile settings" data-val="0">
            <div class="titleBlock">
            <div class="title">
            <span>${_('display')}</span>
            </div>
            </div>
                <div class="tileIcon" style="width: 64px;
                height: 64px;
                left: 23px;
                top: 42px;">
                <svg viewBox="0 0 64 64">
                    <use href="#tiles"></use>
                </svg>
                </div>
            </div>


            
            <div class="atile settings" data-val="0">
            <div class="titleBlock">
            <div class="title">
            <span>${_('light')}</span>
            </div>
            </div>
                <div class="tileIcon ">
                <svg style="" viewBox="0 0 44 44">
                    <use href="#lightOn"></use>
                </svg>
                </div>
            </div>

            <div class="atile double settings" data-val="0">
            <div class="titleBlock">
            <div class="title">
            <span>${_('planning')}</span>
            </div>
            </div>

                <div class="atileContents">
                <div>${_('week')}<br>${_('on').toUpperCase()}</div>
                </div>

                <div class="atileContents">
                <div>${_('weekend')}<br>${_('off').toUpperCase()}</div>
                </div>

            </div>


            </div>
            </div>
   

            </section>
            </div>
                `;
            return rhtml;
            },
        },

        slider : {
            name:"slider",
            built: false,
            build: function(callback) {
                console.log("BUILD");
                //debugger;
                this.built.querySelector('.backButton').addEventListener('click', function(e) {
                    app.loadPage('setups', null);
                });
                callback();
            },
            beforeShow: function() {
                console.log("BEFORESHOW");


            },
            run: function() {},
            quit: function() {
                console.log("QUIT");

            // fn called on quit ,, Must send true to allow quitting.
            console.log('quitting ' + this.name);
            this.data = false;
            this.built = false;
            return true;
            },

            html: function() {
            var slider  = kx.sliders[this.data];
            var width = 320;
            var steps='';
            function pxForPos(pos) {
              //  return ((width+(width/(slider.steps.length-1)))/slider.steps.length*pos)-(width/(slider.steps.length-1));
                return (pos-1) * (width)/(slider.steps.length-1);
            }
            slider.steps.forEach(function(el,k) {
                 steps += `<div class="astep" style="left:${pxForPos(k+1)}px"><div class="l">${el.desc1}</div><div class="l l2">${el.desc2}</div></div>`
            })

            var rhtml = `

            <div class="pageContent settings bkg16 orange">
            <style>
            .astep {
                width:3px;
                height:21px;
                background-color:white;
                position:absolute;
                overflow:visible;
                top:-8px;
            }
            .astep .l{
                    position: absolute;
                    margin-top: 34px;
                    text-align: center;
                    display: block;
                    width: 60px;
                    margin-left: -30px;
                    font-weight:900;
                    font-size:24px;
            }

            .astep .l2 {
                margin-top: 60px;
                font-weight:300;
            }

            .sliderPointer{
                position: absolute;
                width: 44px;
                height: 44px;
                background-color: rgba(0, 0, 0, 0.4);
                top: -21px;
                border-radius: 50%;
                margin-left: -22px;
            }

            .sliderPointer:after{
                content: " ";
                position: absolute;
                width: 20px;
                height: 20px;
                left: 12px;
                background-color: white;
                border-radius: 50%;
                top: 13px;
            }
            
            </style>
            <div class="backToMain backButton">
                <svg style="" viewBox="0 0 26 26" >
                <use href="#backArrow" />
            </div>
            <div class="titleBlock light" style="left:99px;width:282px">
            <span class="title">${_(slider.title)}</span>
            </div>
            <div class="settingsDesc">${_(slider.desc)}</div>
                <div class="barBkg userFIllColor" style="position:absolute;width:${width}px;height:5px;top:163px;left:81px">

                <div class="fill" style="background-color:#FFFFFF;position:absolute;height:5px;width:${pxForPos(slider.default)}px"></div>
                ${steps}
                <div class="sliderPointer" style="left:${pxForPos(slider.default)}px"></div>
                </div>
            </div>
            
            </div>
                `;
            return rhtml;
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
            rightmenudefault: '20',
            runmenutyp: 'ml',
            runmenuvalues: '20;25;30;35;40;',
            runmenudefault: '40',
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
            leftmenudefault: '3',
            rightmenutyp: 'ml',
            rightmenuvalues: '40;50;60;70',
            rightmenudefault: '60',
            runmenutyp: 'ml',
            runmenuvalues: '40;50;60;70',
            runmenudefault: '70',
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
            rightmenudefault: '120',
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
            rightmenudefault: '30',
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
            rightmenudefault: '30',
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
            rightmenudefault: '30',
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
            rightmenudefault: 'M',
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
            leftmenudefault: '1',
            rightmenutyp: 'vol',
            rightmenuvalues: 'M;L;XL',
            rightmenudefault: 'M',
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
            rightmenudefault: 'M',
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
            rightmenudefault: 'L',
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
            rightmenudefault: 'M',
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
            rightmenudefault: 'M',
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
            rightmenudefault: 'M',
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
            rightmenudefault: 'M',
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
            rightmenudefault: 'M',
            runmenutyp: 'ml',
            runmenuvalues: 'M;L;XL',
            runmenudefault: 'M',
        },
    },
    };
    app.kxhost = document.querySelector(kxhost);
    //debugger;
    app.kxhost.innerHTML = baseHtml;
    addStyles(app.kxhost);
    app.kxunit = app.kxhost.querySelector('#kxUnit');
    app.screen = app.kxhost.querySelector('#kxScreen');
    app.pageHolder = app.kxhost.querySelector('.pageHolder');
    app.toaster = app.kxhost.querySelector('.kxToast');
    app.loadPage('recettes', null); // Show first page

    // Global events    

    app.fit = function() {
        // 768 x 400 (was 480x320)
            //const kxScaler = document.querySelector('#kxScaler');
            var parentRatio = app.kxunit.parentElement.offsetHeight / app.kxunit.parentElement.offsetWidth;
            console.log("parentRatio:"+parentRatio);

            var screenW = app.kxunit.offsetWidth;
            var screenH = app.kxunit.offsetHeight;
            var screenRatio = screenH / screenW;
      
            console.log("screenRatio:"+screenRatio);

            /*app.ratio = parentRatio > screenRatio
            ? app.kxunit.parentElement.offsetWidth / screenW
            : app.kxunit.parentElement.offsetHeight / screenH;*/

            app.ratio = parentRatio > screenRatio
            ? app.kxunit.parentElement.offsetWidth / screenW
            : app.kxunit.parentElement.offsetHeight / screenH;
            console.log("ratio:"+app.ratio);

            //var shift = document.querySelector('#kxBackdrop').getBoundingClientRect().y;
            // var shift = ;
            //var shift = ((400-330)*ratio)>0?((400-330)*ratio):0;
            //console.log(shift);


            //app.ratio = window.innerWidth / 768;
            Object.assign(app.kxunit.style, {
                transform: 'scale(' + Math.min(1.5, app.ratio) + ') translate(-50%, -50%)',
            });
            // if (app.currentPage.name != undefined) app.reloadPage()
    };

    app.fit();

    window.addEventListener('resize', function() {
        clearTimeout(app.resizeWindowTimeOut);
        app.resizeWindowTimeOut = setTimeout(function() {
        console.log('resized');
        app.fit();
        //todo include method for checking mouse events
        }, 100);
    });
      
    app.reloadPage = function() {
        app.loadPage(app.currentPage.name, null);
    };

    app.resetBuilds = function() {
        for (var [key, value] of Object.entries(app.data.pages)) {
            value.built = false;
        }
    }

    app.kxunit.querySelector('#kxUnitButtonStart').addEventListener('click', event => {
        if (app.currentPage.name == 'off') {
            app.bleep();
            app.loadPage('starting', null); // Show first page
        } else {
            app.beep();
            app.loadPage('off', null); // Show first page
            app.resetBuilds();
        }
        });

    app.kxunit.querySelector('#kxUnitButtonHome').addEventListener('click', event => {
        if (app.currentPage.name == 'off') return;
        console.log('click', this);
        app.loadPage('recettes', null);
        });
        app.kxunit
        .querySelector('#kxUnitButtonUserOne').addEventListener('click', event => {
        if (app.currentPage.name == 'off') return;
        app.currentProfile = app.profiles.userOne;
        app.loadPage('profile', null);
        });
        app.kxunit.querySelector('#kxUnitButtonUserTwo').addEventListener('click', event => {
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
            'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap';
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
                    <circle class="userFIllColor"  cx="16" cy="16" r="13"/>
                    <path  d="M14.9,17.1h-3.8V15h3.8v-3.8h2.1V15h3.8v2.1h-3.8v3.8h-2.1V17.1z" fill="white"/>
                </g>

                <g id="minusButton" class="plusMinus"  fill-rule="evenodd"  viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
                    <circle  cx="16" cy="16" r="13.5" fill="white"/>
                    <circle class="profileColor"  class="userFIllColor" cx="16" cy="16" r="13"/>
                    <rect x="12.2" y="15"  width="7.7" height="2.1" fill="white"/>
                </g>

                    <g id="sizeXL" style="fill:white" viewBox="0 0 32 32">
                    <path  d="M27.1,3.2h-5.4V25c0,1.8-1.5,3.3-3.3,3.3H5c-1.8,0-3.3-1.5-3.3-3.3V3.2H0V25c0,2.8,2.3,5,5,5h13.4
                        c2.8,0,5-2.3,5-5V14.7h3.6c2.7,0,4.9-2.2,4.9-4.9V8.1C32,5.4,29.8,3.2,27.1,3.2z M30.3,9.7c0,1.8-1.5,3.2-3.2,3.2h-3.6V4.9h3.6
                        c1.8,0,3.2,1.5,3.2,3.2V9.7z"/>
                    <path  d="M2.7,10.8V25c0,1.3,1.1,2.4,2.4,2.4h13.4c1.3,0,2.4-1.1,2.4-2.4V10.8H2.7z M10.7,22.3L9.3,20H9.3
                        l-1.4,2.3H6.3L8.4,19l-1.9-3.1H8L9.3,18h0.1l1.2-2.1h1.5L10.1,19l2.1,3.4H10.7z M17.1,22.3h-3.9v-6.4h1.2v5.3h2.7V22.3z"/>
                </g>

                <g id="sizeL" style="fill:white" viewBox="0 0 32 32">
                    <path  d="M24.1,6.7h-3.9v16.1c0,1.3-1.1,2.4-2.4,2.4H7.9c-1.3,0-2.4-1.1-2.4-2.4V6.7H4.2v16.1
                        c0,2,1.7,3.7,3.7,3.7h9.8c2,0,3.7-1.7,3.7-3.7v-7.6h2.7c2,0,3.6-1.6,3.6-3.6v-1.2C27.8,8.3,26.1,6.7,24.1,6.7z M26.5,11.6
                        c0,1.3-1.1,2.4-2.4,2.4h-2.7V8h2.7c1.3,0,2.4,1.1,2.4,2.4V11.6z"/>
                    <path d="M6.2,12.4v10.5c0,1,0.8,1.7,1.7,1.7h9.8c1,0,1.7-0.8,1.7-1.7V12.4H6.2z M14.8,21.6h-4v-6.5h1.2v5.3
                        h2.8V21.6z"/>
                </g>

                <g id="sizeM" style="fill:white" viewBox="0 0 32 32">
                    <path  d="M21.8,9.6H19V21c0,0.9-0.8,1.7-1.7,1.7h-7c-0.9,0-1.7-0.8-1.7-1.7V9.6H7.7V21c0,1.4,1.2,2.6,2.6,2.6
                        h7c1.4,0,2.6-1.2,2.6-2.6v-5.4h1.9c1.4,0,2.6-1.2,2.6-2.6v-0.9C24.3,10.8,23.2,9.6,21.8,9.6z M23.4,13c0,0.9-0.8,1.7-1.7,1.7h-1.9
                        v-4.2h1.9c0.9,0,1.7,0.8,1.7,1.7V13z"/>
                    <path  d="M9.1,13.6V21c0,0.7,0.5,1.2,1.2,1.2h7c0.7,0,1.2-0.5,1.2-1.2v-7.4H9.1z M17.1,21.2h-1.2V18l0.1-1.1
                        h-0.1l-1.6,4.3h-1l-1.7-4.3h-0.1l0.1,1.1v3.2h-1.2v-6.5H12l1.7,4.6h0.1l1.7-4.6h1.6V21.2z"/>
                </g>

                <g id="force1"  style="fill:white"  viewBox="0 0 57 54">
                    <path d="M29.523,15.61c-0.336-0.045-0.677-0.071-1.023-0.071c-0.277,0-0.549,0.022-0.82,0.051
                        c-4.791,0.51-8.564,5.429-8.564,11.411c0,5.539,3.234,10.172,7.517,11.232c0.531,0.132,1.081,0.199,1.64,0.215
                        c0.076,0.002,0.15,0.014,0.227,0.014c5.174,0,9.383-5.142,9.383-11.461C37.884,21.102,34.217,16.235,29.523,15.61z M20.616,27
                        c0-5.493,3.537-9.962,7.884-9.962c0.039,0,0.077,0.007,0.116,0.007c0.759,1.392,1.367,3.199,1.095,5.211
                        c-0.249,1.841-1.154,3.02-2.113,4.267c-0.971,1.264-1.976,2.571-2.126,4.505c-0.129,1.652,0.241,3.712,0.686,5.484
                        C22.951,35.25,20.616,31.463,20.616,27z M28.5,36.962c-0.23,0-0.457-0.019-0.682-0.044c-0.499-1.804-0.983-4.075-0.851-5.772
                        c0.117-1.49,0.906-2.518,1.821-3.708c0.988-1.286,2.108-2.744,2.41-4.98c0.26-1.925-0.137-3.659-0.753-5.101
                        c3.408,1.099,5.939,4.999,5.939,9.643C36.384,32.493,32.847,36.962,28.5,36.962z"/>
                </g>

                <g id="force2" style="fill:white" viewBox="0 0 57 54">
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

                <g id="force3" style="fill:white" viewBox="0 0 57 54">
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
                        <path id="Shape" fill="white" class="st0" d="M16,16.1c2,0,4-0.8,5.4-2.2c1.4-1.4,2.2-3.4,2.2-5.4s-0.8-4-2.2-5.4C20,1.6,18,0.8,16,0.8 s-4,0.8-5.4,2.2C9.2,4.5,8.4,6.5,8.4,8.5c0,2,0.8,4,2.2,5.4S14,16.1,16,16.1L16,16.1z M16,3.1c1.4,0,2.8,0.6,3.8,1.6 c1,1,1.6,2.4,1.6,3.8c0,1.4-0.6,2.8-1.6,3.8c-1,1-2.4,1.6-3.8,1.6c-1.4,0-2.8-0.6-3.8-1.6c-1-1-1.6-2.4-1.6-3.8 c0-1.4,0.6-2.8,1.6-3.8C13.2,3.7,14.6,3.1,16,3.1L16,3.1z"/>
                        <path fill="white" class="st0" d="M3.9,31.4c0-6.6,5.4-12.1,12.1-12.1s12.1,5.4,12.1,12.1h2.3c0-3.8-1.5-7.4-4.2-10.1c-2.7-2.7-6.3-4.2-10.1-4.2 s-7.4,1.5-10.1,4.2c-2.7,2.7-4.2,6.3-4.2,10.1H3.9z"/>
                    </g>

                    <g id="userSettings" viewBox="0 0 44 44">
                    <path style="fill:#FFFFFF;" d="M41.3,13.4c-0.1-0.2-0.2-0.3-0.4-0.4c-0.7-0.3-1.3-0.7-2-1l-0.1-0.9c0.4-0.5,0.8-1.1,1.2-1.6
                        c0.1-0.1,0.1-0.2,0.2-0.3L40.3,9c0-0.1,0-0.2,0-0.4c0-0.2-0.1-0.4-0.2-0.5l-2-2.6l-0.3-0.4c-0.2-0.2-0.6-0.3-0.9-0.2
                        c-0.7,0.3-1.5,0.6-2.2,0.9c0,0,0,0,0,0l-0.5-0.3c-0.2-0.6-0.3-1.2-0.5-1.8l-0.1-0.3c-0.1-0.4-0.5-0.7-0.9-0.7H29
                        c-0.4,0-0.8,0.3-0.9,0.7c-0.2,0.7-0.4,1.4-0.6,2.1L27,5.8L25,5c-0.1,0-0.2-0.1-0.3-0.1c-0.3-0.1-0.7,0-0.9,0.2l-2,2.6l-0.3,0.4
                        c-0.1,0.2-0.2,0.3-0.2,0.5c0,0.2,0,0.4,0.1,0.6c0.5,0.6,0.9,1.2,1.4,1.9c0,0,0,0,0,0l-0.1,0.9c-0.6,0.3-1.1,0.6-1.7,0.9
                        c-0.1,0-0.2,0.1-0.3,0.1c-0.2,0.1-0.3,0.3-0.4,0.4c-0.1,0.2-0.1,0.4,0,0.6c0.2,1,0.4,2,0.6,3.1l0.1,0.4c0,0.2,0.2,0.4,0.3,0.5
                        c0.2,0.1,0.3,0.2,0.5,0.2c0.7,0.1,1.5,0.1,2.2,0.2l0.4,0.6c-0.1,0.7-0.2,1.3-0.2,2l0,0.3c0,0.3,0.2,0.7,0.4,0.8l2.8,1.4l0.4,0.2
                        c0.2,0.1,0.4,0.1,0.6,0.1c0.2,0,0.4-0.1,0.5-0.3l1.4-1.5h0.9l1.2,1.3c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.1,0.3,0.2,0.5,0.3
                        c0.2,0,0.4,0,0.6-0.1c0.9-0.5,1.9-0.9,2.8-1.4c0.1-0.1,0.3-0.1,0.4-0.2c0.3-0.1,0.5-0.5,0.4-0.8c-0.1-0.7-0.2-1.5-0.3-2.2
                        c0,0,0,0,0-0.1l0.4-0.6c0.6-0.1,1.2-0.1,1.9-0.2l0.3,0c0.2,0,0.4-0.1,0.5-0.2c0.1-0.1,0.3-0.3,0.3-0.5c0.2-1,0.4-2,0.6-3.1
                        c0-0.1,0.1-0.3,0.1-0.4C41.4,13.8,41.4,13.6,41.3,13.4z M36.8,16.6c-0.2,0.1-0.4,0.2-0.5,0.4l0,0.1L36,17.4
                        c-0.2,0.2-0.3,0.5-0.5,0.7c-0.1,0.2-0.2,0.3-0.2,0.6c0,0,0,0.1,0,0.1c0,0.3,0.1,0.5,0.1,0.8l0.1,1.1l-2,1c-0.2-0.2-0.3-0.4-0.5-0.5
                        c-0.2-0.2-0.4-0.4-0.6-0.6l-0.2-0.2c-0.2-0.2-0.4-0.3-0.7-0.3c-0.5,0-1,0-1.6,0c-0.3,0-0.5,0.1-0.8,0.3c0,0-0.1,0.1-0.1,0.1
                        l-0.5,0.6L28,21.6l-2-1l0.1-0.8c0-0.3,0.1-0.6,0.1-0.9c0-0.3,0.1-0.5-0.1-0.8c-0.3-0.4-0.6-0.8-0.8-1.2c-0.1-0.2-0.3-0.4-0.5-0.4
                        c-0.2-0.1-0.2,0-0.2,0c0,0,0,0-0.1,0l-0.2,0c-0.3,0-0.6,0-0.8-0.1l-0.8-0.1c-0.1-0.7-0.3-1.4-0.4-2.1c0.2-0.1,0.5-0.2,0.7-0.3
                        l0.8-0.4c0.3-0.2,0.6-0.3,0.7-0.7c0.1-0.5,0.2-1.1,0.3-1.6c0-0.3,0.1-0.6-0.1-0.8c0,0-0.1-0.1-0.1-0.1l-0.5-0.7
                        c-0.2-0.3-0.4-0.6-0.6-0.9l1.5-1.9l0.7,0.3c0.4,0.2,0.9,0.4,1.3,0.5c0.4,0.1,0.8-0.1,1.1-0.3L28.6,7c0.2-0.1,0.4-0.3,0.5-0.6
                        c0,0,0-0.1,0-0.1c0.1-0.3,0.1-0.5,0.2-0.8l0.3-0.9H32l0.2,0.6c0.1,0.3,0.2,0.6,0.2,0.9c0.1,0.3,0.2,0.7,0.5,0.8
                        c0.4,0.2,0.8,0.4,1.2,0.7c0.2,0.1,0.5,0.2,0.8,0.1l0.2-0.1c0.3-0.1,0.5-0.2,0.8-0.3c0.3-0.1,0.6-0.2,0.9-0.4l1.5,1.9
                        c-0.3,0.3-0.5,0.7-0.8,1c-0.1,0.2-0.3,0.4-0.4,0.6C36.9,10.6,37,11,37,11.2l0.1,0.5c0.1,0.3,0.1,0.7,0.2,1c0,0.2,0.2,0.4,0.4,0.5
                        c0,0,0,0,0.1,0c0.6,0.3,1.1,0.6,1.7,0.9c-0.1,0.7-0.3,1.4-0.4,2.1c-0.6,0.1-1.3,0.1-1.9,0.2C37,16.5,37,16.5,36.8,16.6z"/>
                    <path style="fill:#FFFFFF;" d="M13.2,29.9c1.5,0,2.9-0.6,4-1.7c1.1-1.1,1.6-2.5,1.6-4s-0.6-3-1.6-4c-1.1-1.1-2.5-1.7-4-1.7
                        c-1.5,0-2.9,0.6-4,1.7c-1.1,1.1-1.6,2.5-1.6,4c0,1.5,0.6,3,1.7,4C10.3,29.3,11.7,29.9,13.2,29.9z M13.2,20.2c1,0,2.1,0.4,2.8,1.2
                        c0.7,0.8,1.2,1.8,1.2,2.8c0,1.1-0.4,2.1-1.2,2.8c-0.7,0.8-1.7,1.2-2.8,1.2s-2.1-0.4-2.8-1.2c-0.7-0.8-1.2-1.8-1.2-2.8
                        c0-1.1,0.4-2.1,1.2-2.8C11.1,20.6,12.2,20.2,13.2,20.2C13.2,20.2,13.2,20.2,13.2,20.2z M4.3,41.4c0-5,4-9,8.9-9c4.9,0,8.9,4,8.9,9
                        h1.7c0-2.8-1.1-5.6-3.1-7.6c-2-2-4.7-3.1-7.5-3.1s-5.5,1.1-7.5,3.1c-2,2-3.1,4.7-3.1,7.6H4.3z"/>
                    <g>
                        <path style="fill:#FFFFFF;" d="M30.8,17.5c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3S33.2,17.5,30.8,17.5z
                            M30.8,10.9c-1.3,0-2.3,1.1-2.3,2.3s1.1,2.3,2.3,2.3c1.3,0,2.3-1.1,2.3-2.3S32.1,10.9,30.8,10.9z"/>
                    </g>
                </g>

                <g id="settings" viewBox="0 0 44 44">
                <circle style="fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" cx="22" cy="22" r="6.5"/>
                <polygon style="fill:none;stroke:#FFFFFF;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;" points="36.3,20.3 
                    35.7,17.6 38.6,13.4 34.2,7.9 29.4,9.8 27,8.6 25.5,3.7 18.5,3.7 17,8.6 14.6,9.8 9.8,7.9 5.4,13.4 8.3,17.6 7.7,20.3 3.2,22.8 
                    4.8,29.7 9.9,30 11.6,32.2 10.8,37.2 17.2,40.3 20.6,36.5 23.4,36.5 26.8,40.3 33.2,37.3 32.4,32.2 34.1,30 39.2,29.7 40.8,22.8 "/>
                </g>


                <g id="plus" viewBox="0 0 44 44">
                    <path style="fill:#FFFFFF;" d="M42.1,21.1H22.9V1.9C22.9,1.4,22.5,1,22,1s-0.9,0.4-0.9,0.9v19.2H1.9C1.4,21.1,1,21.5,1,22
                        s0.4,0.9,0.9,0.9h19.2v19.2c0,0.5,0.4,0.9,0.9,0.9s0.9-0.4,0.9-0.9V22.9h19.2c0.5,0,0.9-0.4,0.9-0.9S42.6,21.1,42.1,21.1z"/>
                </g>

                <g id="backspace" viewBox="0 0 32 32">
                    <path style="fill:#FFFFFF;" d="M7.9,6C7.8,6,7.7,6,7.6,6.2l-7.5,9.5c-0.1,0.2-0.1,0.4,0,0.6l7.4,9.5C7.6,26,7.8,26,7.9,26h23.6
                        c0.3,0,0.5-0.2,0.5-0.5V6.5C32,6.2,31.8,6,31.5,6H7.9z M31.1,25.1H8.2L1.1,16l7.1-9.1h22.9L31.1,25.1L31.1,25.1z"/>
                    <path style="fill:#FFFFFF;" d="M16.7,20l3.3-3.3l3.3,3.3l0.7-0.7L20.7,16l3.3-3.3L23.3,12L20,15.3L16.7,12L16,12.7l3.3,3.3L16,19.3
                        L16.7,20z"/>
                </g>
                <g id="backLight" viewBox="0 0 44 44">

                    <path style="fill:#FFFFFF;" d="M12.6,30.3c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-3.3,3.3c-0.2,0.2-0.3,0.2-0.6,0.2
                    c-0.2,0-0.4-0.1-0.6-0.2C9,34.4,9,33.9,9.3,33.6L12.6,30.3z M30.3,30.2c0.3-0.3,0.8-0.3,1.1,0l3.3,3.3c0.3,0.3,0.3,0.8,0,1.1
                    c-0.2,0.2-0.3,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.2l-3.3-3.3C30,31,30,30.5,30.3,30.2z M39.2,21.2c0.4,0,0.8,0.3,0.8,0.8
                    s-0.3,0.8-0.8,0.8h-4.7c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H39.2z M9.5,21.2c0.5,0,0.8,0.3,0.8,0.8c0,0.4-0.4,0.8-0.9,0.8H4.8
                    C4.3,22.8,4,22.5,4,22s0.3-0.8,0.8-0.8H9.5z M33.5,9.2c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-3.2,3.2c-0.2,0.2-0.3,0.2-0.6,0.2
                    c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.3-0.3-0.8,0-1.1L33.5,9.2z M9.3,9.2c0.3-0.3,0.8-0.3,1.1,0l3.2,3.2c0.3,0.3,0.3,0.8,0,1.1
                    c-0.2,0.2-0.3,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.2l-3.1-3.2C9,10,9,9.5,9.3,9.2L9.3,9.2z M22,3.9c0.5,0,0.8,0.3,0.8,0.8v4.4
                    c0,0.5-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8V4.7C21.2,4.2,21.5,3.9,22,3.9z M22,40.1c-0.5,0-0.8-0.3-0.8-0.8v-4.4
                    c0-0.5,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v4.4C22.8,39.8,22.5,40.1,22,40.1z"/>
                <path style="fill:#FFFFFF;" d="M22,14.218c4.291,0,7.782,3.491,7.782,7.782S26.291,29.782,22,29.782S14.218,26.291,14.218,22
                    S17.709,14.218,22,14.218 M22,12.718c-5.126,0-9.282,4.156-9.282,9.282s4.156,9.282,9.282,9.282s9.282-4.156,9.282-9.282
                    S27.126,12.718,22,12.718L22,12.718z"/>
                </g>

<g id="backLightBig" viewBox="0 0 32 32">
	<g>
		<g>
			<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;stroke:#FFFFFF;stroke-linecap:square;" d="M17.1,24.9v4.5h-2.2
				v-4.5c0.4,0,0.7,0.1,1.1,0.1C16.4,24.9,16.8,24.9,17.1,24.9z M24.9,14.9h4.5v2.2h-4.5c0-0.4,0.1-0.7,0.1-1.1S24.9,15.2,24.9,14.9
				z M7.1,14.9c0,0.4-0.1,0.7-0.1,1.1c0,0.4,0,0.8,0.1,1.1H2.6v-2.2H7.1z M17.1,2.6v4.5c-0.4,0-0.7-0.1-1.1-0.1s-0.8,0-1.1,0.1V2.6
				H17.1z M10.5,23.1l-3.2,3.2l-1.6-1.6l3.2-3.2c0.2,0.3,0.5,0.6,0.7,0.8C9.9,22.6,10.2,22.8,10.5,23.1z M23.1,21.5l3.2,3.2
				l-1.6,1.6l-3.2-3.2c0.3-0.2,0.6-0.5,0.8-0.7C22.6,22.1,22.8,21.8,23.1,21.5L23.1,21.5z M10.5,8.9c-0.3,0.2-0.6,0.5-0.8,0.7
				c-0.3,0.3-0.5,0.5-0.7,0.8L5.7,7.3l1.6-1.6L10.5,8.9z M26.3,7.3l-3.2,3.2c-0.2-0.3-0.5-0.6-0.7-0.8c-0.3-0.3-0.5-0.5-0.8-0.7
				l3.2-3.2L26.3,7.3L26.3,7.3z"/>
		</g>
		<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M16,21c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S18.8,21,16,21z"
			/>
	</g>
</g>

<g id="backLightSmall" viewBox="0 0 32 32">
	<g>
		<g>
			<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;stroke:#FFFFFF;stroke-linecap:square;" d="M16.7,21.6l0,2.9h-1.4
				v-2.9c0.2,0,0.5,0,0.7,0C16.2,21.6,16.5,21.6,16.7,21.6z M21.6,15.3l2.9,0v1.4h-2.9c0-0.2,0-0.5,0-0.7
				C21.6,15.8,21.6,15.5,21.6,15.3z M10.4,15.3c0,0.2,0,0.5,0,0.7c0,0.2,0,0.5,0,0.7l-2.9,0v-1.4L10.4,15.3z M16.7,7.5v2.9
				c-0.2,0-0.5,0-0.7,0c-0.2,0-0.5,0-0.7,0l0-2.9H16.7z M12.5,20.5l-2,2l-1-1l2-2c0.1,0.2,0.3,0.4,0.5,0.5
				C12.2,20.2,12.4,20.3,12.5,20.5L12.5,20.5z M20.5,19.5l2,2l-1,1l-2-2c0.2-0.1,0.4-0.3,0.5-0.5C20.2,19.8,20.3,19.6,20.5,19.5
				L20.5,19.5z M12.5,11.5c-0.2,0.1-0.4,0.3-0.5,0.5c-0.2,0.2-0.3,0.3-0.5,0.5l-2-2l1-1L12.5,11.5z M22.5,10.5l-2,2
				c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.3-0.3-0.5-0.5l2-2L22.5,10.5L22.5,10.5z"/>
		</g>
		<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M16,19.2c-1.7,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2
			c1.7,0,3.2,1.4,3.2,3.2S17.7,19.2,16,19.2z"/>
	</g>
</g>

<g id="checkMark" viewBox="0 0 32 32">
	<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M5,15.4l2-2l6.4,6.4L24.9,8.2l2.1,2.1L13.5,23.8
		C13.5,23.8,5,15.4,5,15.4z"/>
</g>

<g id="wrench" viewBox="0 0 32 32">
	<path style="fill:#FFFFFF;" d="M15.7,23.1l8.2,8.1c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2c0.3-0.3,0.3-0.8,0-1.1L16.9,22
		c-1.3-1.3-3.1-2-5.1-1.8c-2.6,0.2-5.2-0.8-7-2.6c-2-2-3-4.9-2.6-7.7l3.4,3.3c0.8,0.7,1.7,1.1,2.8,1.1c1.1,0,2-0.4,2.8-1.1l1.8-1.8
		c1.6-1.5,1.6-4,0-5.5L9.4,2.4c3-0.7,6.2,0.2,8.4,2.4c2,1.9,2.9,4.6,2.6,7.4c-0.2,2,0.4,3.9,1.9,5.3l7.8,7.8c0.3,0.3,0.8,0.3,1.2,0
		c0.3-0.3,0.3-0.8,0-1.1l-7.8-7.8c-1-1-1.6-2.5-1.4-3.9c0.4-3.2-0.8-6.4-3.1-8.7C16,0.8,11.9-0.2,8,1.1C7.6,1.2,7.3,1.5,7.3,1.9
		c-0.1,0.4,0,0.8,0.3,1l4.3,4.2c0.9,0.9,0.9,2.3,0,3.2L10,12.1c-0.4,0.4-1,0.7-1.6,0.7c-0.6,0-1.2-0.2-1.6-0.7l-4-4
		C2.5,7.8,2.1,7.7,1.7,7.8C1.3,7.9,1,8.2,0.9,8.6c-0.9,3.7,0.1,7.4,2.8,10.1c2.1,2.1,5.2,3.2,8.3,3C13.4,21.7,14.8,22.2,15.7,23.1
		L15.7,23.1z"/>
</g>
<g id="lightOff" viewBox="0 0 44 44">
<path style="fill:#FFFFFF;" d="M22,9.3c-0.4,0-0.8,0-1.2,0.1c-4.5,0.5-8.3,4.1-9,8.6c-0.5,2.9,0.3,5.8,2.1,8c2,2.5,3,5.3,3,8.1
c0,0.5,0.3,0.8,0.8,0.8h8.7c0.5,0,0.8-0.3,0.8-0.8c0-3,0.9-5.7,2.7-7.8c1.6-1.9,2.4-4.3,2.4-6.7C32.3,14,27.7,9.3,22,9.3z
 M26.1,38.3c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8h-8.2c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H26.1z M26.1,35.9
c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8h-8.2c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H26.1z M22,10.8c4.8,0,8.8,4,8.8,8.8
c0,2.1-0.8,4.1-2.1,5.7c-1.8,2.1-2.9,5-3.1,8h-7.1c-0.2-2.9-1.3-5.8-3.3-8.3c-1.5-1.9-2.1-4.4-1.7-6.8c0.6-3.8,3.8-6.9,7.6-7.3
C21.3,10.9,21.7,10.8,22,10.8L22,10.8z"/>
<path style="fill:#FFFFFF;" d="M9.8,32.9c0.2,0,0.4-0.1,0.6-0.2L34.8,8.2c0.3-0.3,0.3-0.8,0-1.1c-0.3-0.3-0.8-0.3-1.1,0L9.2,31.6
c-0.3,0.3-0.3,0.8,0,1.1C9.4,32.8,9.6,32.9,9.8,32.9z"/>
</g>

<g id="lightOn" viewBox="0 0 44 44">
<path style="fill:#FFFFFF;" d="M22,9.2c-0.4,0-0.8,0-1.2,0.1c-4.5,0.5-8.3,4.1-9,8.6c-0.5,2.9,0.3,5.8,2.1,8c2,2.5,3,5.3,3,8.1
c0,0.5,0.3,0.8,0.8,0.8h8.7c0.5,0,0.8-0.3,0.8-0.8c0-3,0.9-5.7,2.7-7.8c1.6-1.9,2.4-4.3,2.4-6.7C32.3,13.9,27.7,9.2,22,9.2z
 M26.1,38.2c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8h-8.2c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H26.1z M26.1,35.8
c0.4,0,0.8,0.3,0.8,0.8s-0.3,0.8-0.8,0.8h-8.2c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H26.1z M22,10.7c4.8,0,8.8,4,8.8,8.8
c0,2.1-0.8,4.1-2.1,5.7c-1.8,2.1-2.9,5-3.1,8h-7.1c-0.2-2.9-1.3-5.8-3.3-8.3c-1.5-1.9-2.1-4.4-1.7-6.8c0.6-3.8,3.8-6.9,7.6-7.3
C21.3,10.8,21.7,10.7,22,10.7L22,10.7z M12.6,28.2c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-3.3,3.3c-0.2,0.2-0.3,0.2-0.6,0.2
c-0.2,0-0.4-0.1-0.6-0.2C9,32.3,9,31.8,9.3,31.5L12.6,28.2z M30.3,28.1c0.3-0.3,0.8-0.3,1.1,0l3.3,3.3c0.3,0.3,0.3,0.8,0,1.1
c-0.2,0.2-0.3,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.2l-3.3-3.3C30,28.9,30,28.4,30.3,28.1z M39.2,19.1c0.4,0,0.8,0.3,0.8,0.8
s-0.3,0.8-0.8,0.8h-4.7c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H39.2z M9.5,19.1c0.5,0,0.8,0.3,0.8,0.8c0,0.4-0.4,0.8-0.9,0.8H4.8
c-0.5,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8H9.5z M33.5,7.1c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-3.2,3.2c-0.2,0.2-0.3,0.2-0.6,0.2
c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.3-0.3-0.8,0-1.1L33.5,7.1z M9.3,7.1c0.3-0.3,0.8-0.3,1.1,0l3.2,3.2c0.3,0.3,0.3,0.8,0,1.1
c-0.2,0.2-0.3,0.2-0.6,0.2c-0.2,0-0.4-0.1-0.6-0.2L9.3,8.2C9,7.9,9,7.4,9.3,7.1L9.3,7.1z M22,1.8c0.5,0,0.8,0.3,0.8,0.8V7
c0,0.5-0.3,0.8-0.8,0.8S21.2,7.5,21.2,7V2.6C21.2,2.1,21.5,1.8,22,1.8z"/>
</g>

<g id="cleanK" viewBox="0 0 44 44">
<path style="fill:#FFFFFF;" d="M30.6,12.6h-4.6l-6.8,8.1v-8.1h-3.8v18.9h3.8v-8.8
	h0.1l6.8,8.8h4.9l-8.1-10L30.6,12.6L30.6,12.6z M38.6,22c0,9.1-7.4,16.6-16.6,16.6c-9.2,0-16.6-7.4-16.6-16.6
    c0-9.2,7.4-16.6,16.6-16.6C31.2,5.4,38.6,12.8,38.6,22z"/>
</g>

<g id="reset" viewBox="0 0 44 44">
	<path style="fill:#FFFFFF;" d="M21.5,14.7c-1.4,0-2.5,0.5-3.2,1.5c-0.9,1.2-1.4,3.1-1.4,5.8c0,2.7,0.4,4.7,1.3,5.7
		c0.9,1.1,2,1.6,3.4,1.6c1.4,0,2.5-0.5,3.2-1.5c0.9-1.2,1.4-3.1,1.4-5.8c0-2.7-0.5-4.7-1.4-5.8C24,15.2,22.9,14.7,21.5,14.7z
		 M23,25.6c-0.1,0.5-0.3,0.9-0.6,1.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.3,0-0.6-0.1-0.9-0.3s-0.5-0.6-0.6-1.3c-0.2-0.6-0.3-1.8-0.3-3.5
		s0.1-2.9,0.3-3.6c0.1-0.5,0.3-0.9,0.6-1.1c0.3-0.2,0.6-0.3,0.9-0.3c0.3,0,0.6,0.1,0.9,0.3c0.3,0.2,0.5,0.6,0.6,1.3
		c0.2,0.6,0.3,1.8,0.3,3.5S23.2,24.9,23,25.6z"/>
	<polygon style="fill:#FFFFFF;" points="42.5,19.6 34.9,19.6 37.9,16.6 36.5,15.2 31.1,20.6 36.5,26 37.9,24.6 34.9,21.6 42.5,21.6 
			"/>
	<polygon style="fill:#FFFFFF;" points="7.5,15.2 6.1,16.6 9.1,19.6 1.5,19.6 1.5,21.6 9.1,21.6 6.1,24.6 7.5,26 12.9,20.6 	"/>
</g>

<g id="cleanMilkAcc" viewBox="0 0 44 44">
	<path style="fill:#FFFFFF;" d="M6.1,5.3h13.4c2.6,0,4.8,2.1,4.8,4.8v24.9c0,0.5-0.4,1-1,1H2.3
		c-0.5,0-1-0.4-1-1V10C1.4,7.4,3.5,5.3,6.1,5.3z M4.2,36.8h3.8v1.9H4.2V36.8z M17.6,36.8h3.8v1.9h-3.8V36.8z"/>
	<rect x="2.3" y="12" style="fill:#010101;" width="21.1" height="1"/>
	<g>
		<polygon style="fill:#010101;" points="7.9,20.7 7,20.7 5.8,22.1 5.8,20.7 5.2,20.7 5.2,24 5.8,24 5.8,22.5 5.9,22.5 7,24 7.9,24 
			6.5,22.2 		"/>
		<path style="fill:#010101;" d="M10.9,21.7L10.9,21.7c0-0.6-0.5-1-1-1H8.4V24h0.7v-1.6l1.2,1.6h0.9l-1.1-1.3
			C10.5,22.5,10.9,22.2,10.9,21.7z M9.6,22.3H9.1v-1.1h0.5c0.3,0,0.5,0.2,0.5,0.5C10.2,22,9.9,22.3,9.6,22.3z"/>
		<path style="fill:#010101;" d="M16.7,20.7h-1.3V24H16l0-1.3h0.7c0.5,0,1-0.5,1-1C17.7,21.1,17.2,20.7,16.7,20.7z M16.5,22.3H16
			l0-1.1l0.5,0c0.3,0,0.5,0.2,0.5,0.6C17,22.1,16.8,22.3,16.5,22.3z"/>
		<path style="fill:#010101;" d="M19.1,21.6c0-0.4,0.3-0.5,0.5-0.5c0.2,0,0.5,0.1,0.7,0.1v-0.6c-0.2-0.1-0.5-0.1-0.7-0.1
			c-0.6,0-1.1,0.3-1.1,1c0,1.1,1.4,0.8,1.4,1.5c0,0.3-0.3,0.4-0.6,0.4c-0.3,0-0.6-0.1-0.9-0.2v0.5c0.3,0.1,0.5,0.2,0.9,0.2
			c0.7,0,1.2-0.3,1.2-1C20.5,21.9,19.1,22.1,19.1,21.6z"/>
		<path style="fill:#010101;" d="M13.7,22.9L13.7,22.9c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7v-2.2h-0.7v2.1
			c0,0.9,0.5,1.2,1.3,1.2c0.8,0,1.3-0.4,1.3-1.2v-2.1h-0.7V22.9z"/>
	</g>
	<rect x="25.1" y="23" style="fill:#FFFFFF;" width="1" height="1"/>
		<rect x="26" y="22.5" style="fill:#FFFFFF;" width="1.9" height="1.9"/>
		<polygon style="fill:#FFFFFF;" points="34.9,22.1 34,22.1 34,21.5 33,21.5 33,22.1 
			28.2,22.1 28.2,24.8 33,24.8 33,25.3 34,25.3 34,24.8 34.9,24.8 		"/>
	<path style="fill:none;stroke:#FFFFFF;stroke-width:1.9138;" d="M35.3,23.4c3.8-0.1,6.3,3.2,7.3,9.9"/>
</g>
<g id="rinseCoffee" viewBox="0 0 44 44">
			<rect x="20.4" y="34.1" style="fill:#FFFFFF;" width="3.1" height="4.6"/>
			<polygon style="fill:#FFFFFF;" points="29.5,31.7 32.2,31.1 30.7,24.6 28.3,25.1 			"/>
				<polygon style="fill:#FFFFFF;" points="5.9,14.1 8.3,13.7 4.4,-3.5 2.8,-3.2 				"/>
			<polygon style="fill:#FFFFFF;" points="23.1,23.1 20.7,23.1 21.1,5.4 22.7,5.4 			"/>
				<polygon style="fill:#FFFFFF;" points="5.3,1.6 2.3,1 3.4,-3.5 6.1,-2.9 				"/>
				<polygon style="fill:#FFFFFF;" points="3.2,1.6 6.2,1 5.2,-3.5 2.4,-2.9 				"/>
			<path style="fill:#FFFFFF;" d="M23.3,31.9h-2.8l0.1-6.7l2.5,0L23.3,31.9z M14.5,31.7
				l-2.7-0.6l1.5-6.5l2.4,0.5L14.5,31.7z"/>
				<polygon style="fill:#FFFFFF;" points="5.1,14.1 2.7,13.7 6.6,-3.5 8.2,-3.2 				"/>
</g>
<g id="rinseMilk" viewBox="0 0 44 44">
			<rect x="12.1" y="38.7" style="fill:#FFFFFF;" width="3.1" height="4.6"/>
		<g>
			<polygon style="fill:#FFFFFF;" points="21.2,36.2 23.9,35.7 22.4,29.2 20,29.6 			"/>
				<polygon style="fill:#FFFFFF;" points="-2.4,18.7 0,18.2 -3.9,1 -5.5,1.4 				"/>
			<polygon style="fill:#FFFFFF;" points="14.8,27.6 12.4,27.6 12.8,10 14.4,10 			"/>
				<polygon style="fill:#FFFFFF;" points="-3,6.2 -6,5.6 -4.9,1.1 -2.2,1.7 				"/>
				<polygon style="fill:#FFFFFF;" points="-5.1,6.2 -2.1,5.6 -3.1,1.1 -5.9,1.7 				"/>
			<path style="fill:#FFFFFF;" d="M15,36.4h-2.8l0.1-6.7l2.5,0L15,36.4z M6.2,36.2l-2.7-0.6
				L5,29.2l2.4,0.5L6.2,36.2z"/>
				<polygon style="fill:#FFFFFF;" points="-3.2,18.7 -5.6,18.2 -1.7,1 -0.1,1.4 				"/>
		</g>
			<path style="fill:#FFFFFF;" d="M-2.3,3.6h5.6V1.7h-5.6V3.6L-2.3,3.6z M-6,18.2v10.1
				c-0.1,1.3,0.9,2.4,2.2,2.4h8.6c1.3-0.1,2.3-1.1,2.2-2.4V18.2c0-1.8-0.3-3.7-1-5.4L3.4,4.5h0.4C4,4.5,4.2,4.3,4.2,4V1.2
				C4.2,1,4,0.7,3.7,0.7h-6.5C-3,0.7-3.2,1-3.2,1.2V4c0,0.3,0.2,0.5,0.5,0.5h0.4L-5,12.8C-5.7,14.5-6,16.3-6,18.2z"/>
		</g>
	</g>
</g>
<g id="filter" viewBox="0 0 44 44">
	<path style="fill:#FFFFFF;" d="M27.5,6.4l-1.3,30.9h-0.7v3.3H26v1.4l-0.5,0V43h-6.8v-1.1
		l-0.5,0v-1.4h0.5v-3.3H18L16.6,6.4H27.5z M26.4,1c0.6,0,1,0.4,1,1v1.7h1.4v1.4H15.2V3.7h1.4V2c0-0.6,0.4-1,1-1H26.4L26.4,1z"/>
</g>

<g id="tiles" viewBox="0 0 64 64">
	<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M8.1,14.9H21c0.4,0,0.6,0.3,0.6,0.6v14.2
		c0,0.4-0.3,0.6-0.6,0.6H8.1c-0.4,0-0.6-0.3-0.6-0.6V15.5C7.4,15.2,7.7,14.9,8.1,14.9z M8.1,33.6H21c0.4,0,0.6,0.3,0.6,0.6v14.2
		c0,0.4-0.3,0.6-0.6,0.6H8.1c-0.4,0-0.6-0.3-0.6-0.6V34.3C7.4,33.9,7.7,33.6,8.1,33.6z M25.5,14.9h12.9c0.4,0,0.6,0.3,0.6,0.6v14.2
		c0,0.4-0.3,0.6-0.6,0.6H25.5c-0.4,0-0.6-0.3-0.6-0.6V15.5C24.9,15.2,25.2,14.9,25.5,14.9z M43,14.9h12.9c0.4,0,0.6,0.3,0.6,0.6
		v14.2c0,0.4-0.3,0.6-0.6,0.6H43c-0.4,0-0.6-0.3-0.6-0.6V15.5C42.3,15.2,42.6,14.9,43,14.9z M25.5,33.6h12.9c0.4,0,0.6,0.3,0.6,0.6
		v14.2c0,0.4-0.3,0.6-0.6,0.6H25.5c-0.4,0-0.6-0.3-0.6-0.6V34.3C24.9,33.9,25.2,33.6,25.5,33.6z M43,33.6h12.9
		c0.4,0,0.6,0.3,0.6,0.6v14.2c0,0.4-0.3,0.6-0.6,0.6H43c-0.4,0-0.6-0.3-0.6-0.6V34.3C42.3,33.9,42.6,33.6,43,33.6z"/>
</g>
<g id="slider" viewBox="0 0 64 64">
	<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M9.1,22.9h12.3c0.4,0,0.6,0.3,0.6,0.6v16.8
		c0,0.4-0.3,0.6-0.6,0.6H9.1c-0.4,0-0.6-0.3-0.6-0.6V23.6C8.4,23.2,8.7,22.9,9.1,22.9z"/>
	<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M25.9,22.9h12.3c0.4,0,0.6,0.3,0.6,0.6v16.8
		c0,0.4-0.3,0.6-0.6,0.6H25.9c-0.4,0-0.6-0.3-0.6-0.6V23.6C25.2,23.2,25.5,22.9,25.9,22.9z"/>
	<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M42.7,22.9h12.3c0.4,0,0.6,0.3,0.6,0.6v16.8
		c0,0.4-0.3,0.6-0.6,0.6H42.7c-0.4,0-0.6-0.3-0.6-0.6V23.6C42,23.2,42.3,22.9,42.7,22.9z"/>
	<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M64,32l-5.2,5.2V26.8L64,32z"/>
	<path style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M0,32l5.2,5.2V26.8L0,32z"/>
</g>


<g id="canceled" viewBox="0 0 64.4 64.4">
	<circle style="fill:none;stroke:#FFFFFF;stroke-width:2.8828;" cx="32.2" cy="32.2" r="30.8"/>
	<path style="fill:none;stroke:#FFFFFF;stroke-width:2.0847;" d="M16.7,19.2l27.5,28.1 M22.3,21.2v18.6c0.1,2.2,1,3.3,2.8,3.3h13.3
		c1.8,0,2.7-1.1,2.7-3.3V21.2 M42.1,22.3h3.2c1.4,0.2,2.1,1.2,2.1,3.1c0,2.8,0.6,6.3-2.1,6.3h-3.4"/>
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
                opacity: 0.38;
                width: 90px;
                height: 90px;
            }

            .unitButton.kxUnitButtonStart{
                left: 27px;
                top: 78px;
            }

            .unitButton.kxUnitButtonHome{
                left: 658px;
                top: 78px;
            }

            .unitButton.kxUnitButtonUserOne{
                left: 27px;
                top: 244px;
            }

            .unitButton.kxUnitButtonUserTwo{
                left: 658px;
                top: 244px;
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

            .orange .userFIllColor, .orange use{
                fill:var(--orange)!important;
                background-color:var(--orange)!important;
            }
            .orange .userBorderColor,.borderOrange{
                border-color:var(--orange)!important;
            }

            .cyan .userFIllColor{
                fill:#13aec0;
                background-color:#13aec0;
            }
            .cyan .userBorderColor{
                border-color:#13aec0!important;
            }

            .turquoise .userFIllColor{
                fill:#0f8768;
                background-color:#0f8768;
            }
            .turquoise .userBorderColor{
                border-color:#0f8768!important;
            }

            .green .userFIllColor, .green use{
                fill:#6c9106;
                background-color:#6c9106;
            }
            .green .userBorderColor{
                border-color:#6c9106!important;
            }

            .gold .userFIllColor{
                fill:#fffb01;
                background-color:#fffb01;
            }
            .gold .userBorderColor{
                border-color:#fffb01!important;
            }

            .red .userFIllColor, .red use{
                fill:#c80000!important;
                background-color:#c80000;
            }
            .red .userBorderColor{
                border-color:#c80000!important;
            }

            .fushia .userFIllColor{
                fill:#c90563;
                background-color:#c90563;
            }
            .fushia .userBorderColor{
                border-color:#c90563!important;
            }

            .pink .userFIllColor{
                fill:#ef52bb;
                background-color:#ef52bb;
            }
            .pink .userBorderColor{
                border-color:#ef52bb!important;
            }

            .violet .userFIllColor{
                fill:#8d3fcf;
                background-color:#8d3fcf;
            }
            .violet .userBorderColor{
                border-color:#8d3fcf!important;
            }

            .blue .userFIllColor{
                fill:#2855ff;
                background-color:#2855ff;
            }
            .blue .userBorderColor{
                border-color:#2855ff!important;
            }

            #kxUnit{
                position:absolute;
                background-color: rgb(41, 41, 41);
                width: 768px;
                height: 400px;
                /* opacity: 0; */
                border-radius: 16px;
                transition: transform .5s;
                transform-origin: 0 0;
                transform: scale(1) translate(-50%, -50%);
                left: 50%;
                top: 50%;
                overflow: visible;
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

            }

            #kxBackdrop{
                position: absolute;
                width: 1789px;
                height: 1789px;
                background-image: url(images/kbkg.png);
                top: -781px;
                left: -512px;
                /* opacity: .2; */
                background-size: cover;
              }

            #kxFrg {
                background-image: url(${imag('unitfrg')});
                position: absolute;
                top: 40px;
                left: 144px;
                width: 480px;
                height: 320px;
                pointer-events: none;
                opacity: 0.5;
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

            #pageHolder, .pageContent{
            width: 100%;
            height: 100%;
            position:absolute;
            }


            .titleBlock{
            position: absolute;
            width: 173px;
            left: 151px;
            top: 0;
            height: 46px;
            border-bottom: solid 1px rgba(255, 255, 255, 0.3);
            }

            .titleBlock.wide{
                width: 282px;
                left: 99px;
                }


            .prepare .titleBlock {
                left: 25px;
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

            .userTitleClip.wide {

                left: 124px;
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
                color:rgba(255,255,255,0.5)
            } 

            .vWheel .wheelItem{
                fill:rgba(255,255,255,.5);
            }

            
            .vWheel .wheelItem.selected{
                color:white;
                /*text-shadow: 0 0 2px white, 0 0 4px white, 0 0 6px white;*/
            }

            .vWheel .wheelItem svg{
                opacity:.5;
            }


            .vWheel .wheelItem.selected svg{
                opacity:1;
            }


            .vWheel .wheelItem:first-child, .vWheel .wheelItem:last-child{
                pointer-events: none;       
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

            .running .backButton{
                opacity : 0;
            }

            .running .vWheel.strengthScroller .wheelItem:not(.selected){
                opacity:0;
            }

            .userMode .vWheel .wheelItem:not(.selected) {
                opacity:0!important;
            }
            .userMode .vWheel .wheelItem {
                border-color:transparent!important;
            }


            .running .vWheel.strengthScroller .wheelItem{
                border-color:transparent!important;
            }

            .running .vWheel.quantityScroller .wheelItem.selected ~ .wheelItem{
                opacity:0;
            }


        .vwheelCenter{
            position: absolute;
            width: 26px;
            height: 0;
            top: 159px;
            border-bottom: solid 3px;
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
            /*
            img.recipeImage.onrun {
                opacity:0;
            }
            
            .running img.recipeImage{
                opacity:0;
            }
            
            .running img.recipeImage.onrun {
                opacity:1;
            }
            */
            .plusMinusButton{
                position: absolute;
                left: 151px;
                top: 104px;
                width: 32px;
                height: 32px
                transition:opacity .3s;
            }

            .running .plusMinusButton, .preheat .plusMinusButton{
                opacity:0;
            }

            .preheat .imageHolder {
                opacity:0.25;
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
            .running .stopButton, .preheat .stopButton{
                display:block;
            }
            .running .startButton, .preheat .startButton{
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

        }   

        .hScroller::-webkit-scrollbar {
            display: none;
        }



        .hScroller{
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
            white-space: nowrap;
            }
        .recetteScrollerItem, .hScrollerItem{
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
        margin-left: 19px;
        transition-delay:0;
        }
        .recetteScrollerItem:nth-child(2){
        transition-delay:.2s;
        }
        .recetteScrollerItem:nth-child(3){
        transition-delay:.4s;
        }
        .recetteScrollerItem:last-child{
            margin-right: 19px;
            transition-delay:0;
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

        .slides::-webkit-scrollbar {
            /*display: none;*/
            height:0;
        }

        .slides {
            position: absolute;
            width: 480px;
            height: 267px;
            top: 53px;
            overflow-x: scroll;
            white-space: nowrap;
            -ms-overflow-style: none;
            scrollbar-width: 0;
            scrollbar-height: 0;
        }

          .tilesBlock {
            display: inline-block;
            width: 480px;
            height: 256px;
            position: relative;
        }

        .tiles {
            display: flex;
            flex-flow: row wrap;
            flex-grow: initial;
            position: absolute;
            top: 0;
            height: 253px;
            overflow: hidden;
            width: 452px;
            left: 16px;
          }

          .tiles .atile {
            background: rgba(255,255,255,.2);
            margin: 0 0 3px 0;
            height: 125px;
            width: 110px;
            padding: 3px 8px 8px 8px;
            box-sizing: border-box;
            position:relative;
            margin-right:3px;
          }
          .atile .thumb {
            position: absolute;
            width: 75px;
            height: 75px;
            top: 30px;
            left: 16px;
            overflow: hidden;
        }

          .atile .thumb img {
            width: 450px;
            height: 450px;
            pointer-events: none;
        }

        .atile .titleBlock {
            position: relative;
            left: 0;
            width: 100%;
            border-bottom:none;
            height:21px;
        }

            .atile .titleBlock .title {
                text-align: center;
                position:absolute;
                left:0;
                width:100%;
                height: 21px;
                white-space: nowrap;
                line-height: 20px;
                border-bottom: solid 1px rgba(255, 255, 255, 0.2);
            }

            .atile .titleBlock .title span {
                font-weight: bold;
                text-transform: uppercase;
                font-size: 14px;
                white-space: initial;
            }

            .atile .titleBlock .userTitleClip{
                left:32px;
                bottom:-3px;
            }

            .atile .tileIcon{
                position:absolute;
                width:44px;
                height:44px;
                left:33px;
                top:49px;
            }
            .atile .tileIcon.small{
                position:absolute;
                width:32px;
                height:32px;
                left:28px;
                top:38px;
            }
            .atile .keyword{
                position: absolute;
                width: 44px;
                left: 0;
                bottom: 3px;
                top: unset;
                width: 100%;
                text-align: center;
                font-size: 14px;
            }

            .atile.double {
                width:223px;
            }

            .atileContents{
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                height: 97px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: normal;
            }
            .atileContents .ellipsis{

            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            }

            .atile.double .atileContents{
                width: 103px;
                position: absolute;
            }
            .atile.double .atileContents:first-child{
            }
            .atile.double .atileContents:last-child{

                left:110px;
            }

            .atile.double .atileContents:last-child div{
                width:100%;
                border-left:solid 1px rgba(255,255,255,0.2);
            }

            .settingsDesc{ font-size:24px;position:absolute;top:70px;left:10px;width:460px;text-align:center}

            .params {
                margin-top: 56px;
            }
                .paramMenuButton{
                    position:relative;
                    width:412px;
                    height:60px;
                    line-height:60px;
                    box-sizing:border-box;
                    background-color: rgba(0, 0, 0, 0.4);
                    border:solid 1px white;
                    margin-left:38px;
                    text-align:center;
                    font-size:20px;
                    font-weight:bold;
                    text-transform:uppercase;
                    margin-bottom:5px;
                }

                svg.kxSpin {
                    width: 64px;
                    position: absolute;
                    left: calc(50% - 32px);
                    top: calc(50% - 8px);
                  }
                  svg.kxSpin circle {
                    animation: pulse .6s linear 0s infinite alternate;
                    opacity: .2
                  }
                  svg.kxSpin .c2{animation-delay:.2s;}
                  svg.kxSpin .c3{animation-delay:.4s;}
                  
                  @-webkit-keyframes pulse {
                    from {opacity: .2}
                    50% {opacity: .4}
                    to {opacity:1}
                  }

        `;
    document.head.appendChild(sheet);
    }

    function imag(s) {
    //debugger;
    //console.log(app.imgDB);
    //console.log(s);
    //console.log(app.imgDB[s]);
    //console.log('-' + app.imgDB[s].hsrc);
    //debugger;
    if (app.imgDB[s].hsrc) {
        return app.imgDB[s].hsrc;
    } else {
        return 'images/' + app.imgDB[s].uri;
    }
    }

    app.showSpinner = function(){
        console.log(app.currentPage.built);
        var spinnerSvg = `
        <svg class="kxSpin" viewbox="0 0 64 16">
            <circle class="c1" r="6" cx="8" cy="8" fill="white"/> 
            <circle class="c2" r="6" cx="32" cy="8" fill="white"/> 
            <circle class="c3" r="6" cx="56" cy="8" fill="white"/> 
        </svg>`;
        var template = document.createElement('div');
        template.innerHTML = spinnerSvg.trim();
        app.spinner = template.firstChild;
        app.currentPage.built.appendChild(app.spinner);
    }

    app.hideSpinner = function(){
        if(app.spinner) app.spinner.remove();
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
            t.fn();
            return new Promise((resolve, reject) => {
            timout = setTimeout(function() {
                if (seq.keepongoing) {
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

    var hslider = function(e, callback) {
        var that = this;
        that.element = e;
        that.isDown = false;
        that.startX = null;
        that.scrollLeft = null;
        that.mouseMove = false;
        that.element = e;
        that.isScrolling = false;

        //that.element.classList.add(app.pointingDevice);
        
        that.align = function(automove){
            console.log("align!");
            console.log(that.element.scrollLeft);
            if (that.element.scrollLeft >= 242) {
               if (automove) that.element.scrollTo({ left: 484, behavior:'smooth'});
                callback(2)
            } else {
                if (automove) that.element.scrollTo({ left: 0, behavior:'smooth'});
                callback(1)
            }
        };


        that.element.addEventListener('scroll', function(e) {
          //   e.preventDefault();
          //   console.log('scroll');
        });

        that.element.addEventListener('touchmove', function(e) {
                window.clearTimeout( that.isScrolling );
                that.isScrolling = setTimeout(function() {
                    console.log( 'Scrolling has stopped.' );
                    that.align(false);
                }, 600);
            }, { passive:false });

    
        that.element.addEventListener('mouseover', e => {
            //console.log('mouseover');
           // if (app.pointingDevice == 'touch') return;
            that.element.style.scrollSnapType = 'unset';
        });
    
        that.element.addEventListener('mousedown', e => {
            //console.log(app.pointingDevice,' mousedown');
           // if (app.pointingDevice == 'touch') return;
            that.isDown = true;
            that.mouseMove = false;
            that.startX = e.pageX - that.element.offsetLeft;
            that.scrollLeft = that.element.scrollLeft;
        });
    
        that.element.addEventListener('mouseleave', e => {
            // console.log('mouseleave');
           // if (app.pointingDevice == 'touch') return;
            that.isDown = false;
            that.mouseMove = false;
            that.align(true);
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
            that.align(true);
        });
    
        that.element.addEventListener('mousemove', e => {
            console.log('mousemove',that.isDown);
            //e.stopImmediatePropagation();
          //  if (app.pointingDevice === 'touch') return;
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
          //  app.pointingDevice = 'touch';
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
        that.pause = false;
        var timout;
        that.element.addEventListener('scroll', function(e) {
            if (that.pause) return;
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
            if (that.element.querySelector('.wheelItem.selected')) {
               that.element.querySelector('.wheelItem.selected').classList.remove('selected');
            }
            var offset = that.element.querySelector('.wheelItem').offsetHeight;
            thisItem.classList.add('selected');
            that.element.scrollTo({ top: thisItem.offsetTop - offset, behavior: smooth ? 'smooth' : 'auto'});
            //console.log("SELECTEEEEEEED!")
            //console.log(thisItem);
        };

        var divs = that.element.querySelectorAll('div.wheelItem');
        divs.forEach(el => el.addEventListener('click', event => {
            console.log('click', this);
            if (that.mouseMove||that.pause) return;
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
        if (that.pause) return;

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
  