(function() {
  'use strict';
  const kxapp = function() {
      // Check ES6
      // return false;

      const app = this;
      app.lg = 'fr';
      const kxLg = {
        bg:{display:'български',strings:{espresso:'Еспресо',cappucino:'Капучино',laitmousse:'Мляко с пяна',caffelatte:'Кафе лате',flatwhite:'Флет уайт',lungo:'Лунго',ristretto:'Ристрето',doppio:'Допио',cafelong:'Дълго кафе',americano:'Американо',thevert:'Зелен чай',thenoir:'Черен чай',lattemacchiato:'Лате макиато',infusion:'Билков чай',espresso_short:'Еспресо',cappucino_short:'Капучино',laitmousse_short:'Мляко с пяна',caffelatte_short:'Кафе лате',flatwhite_short:'Флет уайт',lungo_short:'Лунго',ristretto_short:'Ристрето',doppio_short:'Допио',cafelong_short:'Дълго кафе',americano_short:'Американо',thevert_short:'Зелен чай',thenoir_short:'Черен чай',lattemacchiato_short:'Лате макиато',infusion_short:'Билков чай',profileSettings:'Настройки на профила',profileSettings_short:'Настройки на профила',setups:'Регулиране',informations:'Информация',ml:'ml',oz:'oz',sec:'s',yes:'Да',no:'Не',ok:'ОК',beforeThxs:'Вашата напитка <BOLD>',afterThxs:'</BOLD> е добавена към предпочитаните Ви напитки!',drink:'Напитки',emacchiato:'Кафе макиато',emacchiato_short:'Кафе макиато',addDrink:'Добавете напитка',chooseColor:'Изберете Вашия цвят',typeYourName:'Въведете името си',next:'НАПРЕД',finnished:'ЗАВЪРШВАНЕ',color:'Цвят',firstName:'Име',display:'Дисплей',display_short:'Дисплей',planning:'Програмиране ',slider:'ПЛЪЗГАЧ',tiles:'МОЗАЙКА',on:'ВКЛ.',off:'ИЗКЛ.',displayDesc:'Презентиране на',deviceLightDesc:'Активирайте светлинните указания',selectKeyword:'Изберете ключова дума',enjoy:'Насладете се!',coffeeTemp:'Температура на кафето',coffeeTemp_short:'Температура на кафето',teaTemp:'Температура на чая',teaTemp_short:'Температура на чая',waterTemp:'Температура на водата',waterTemp_short:'Температура на водата',tempDesc:'Изберете температура',selectYourProfile:'Изберете профил',start:'Стартиране',stop:'Спиране',remains:'(остават %s символа)',date:'Дата',settings:'Настройки',help:'Помощ и инструкции',language:'Език',dateTime:'Дата/час',dateTime_short:'Дата/час',dateTimeDesc:'Дата/час',deviceLight_short:'Светлина',deviceLight:'Светлина',autoOff:'Автоматично спиране',autoOff_short:'Автоматично изключване',volUnity:'Единица за обем',volUnity_short:'Единица за обем',autoRinse:'Автоматично изплакване',autoRinse_short:'Автоматично изплакване',waterHardness:'Твърдост на водата',waterHardness_short:'Твърдост на водата',backLightDesc:'Регулиране на фоновото осветяване',screenLight:'Яркост на екрана',screenLight_short:'Яркост на екрана',afterInactivity:'Когато не е използван за:',waterHardnessDesc:'Регулиране на твърдостта на водата ',cafeTypDesc:'Избор на вид зърна ',cafeTyp:'Вид кафе',cafeTyp_short:'вид кафе',moreInfos:'Повече информация',VolUnitDesc:'Изберете единицата за показване <wbr>на обем',resetDesc:'Нулирането ще изтрие Вашите предпочитания и настройки.',reset:'Нулиране на продукта',reset_short:'Нулиране на продукта',profileSettingsDesc:'Изберете профил за конфигурация<br>',cleanup_5_desc:'Поставете контейнер от<br>600 ml под дюзите',cleanup_9_desc:'Почистването е завършено',cleanup_6_desc:'В процес на почистване,<br> остават <span class="cd">-</span> минути',cleanup_7_desc:'Изпразнете контейнера',cleanup_8_desc:'Изпразнете тавата за отцеждане',cleanup_3_desc:'Напълнете резервоара за вода ',cleanup_4_desc:'Отворете капака и поставете таблетка<br>за почистване в улея<br>',cleanup_1_desc:'Необходима е таблетка за<br>почистване XS3000.<br>Очаквана продължителност: 13 минути',descaling:'Премахване на котлен камък',autoRinseDesc:'Стартирайте цикъл на изплакване<br>при всяко стартиране',coffeeRinse:'Изплакване от кафе',coffeeRinse_short:'Изплакване от кафе',care:'Поддръжка на машината',standardCoffee:'Нормално кафе',greasyCoffee:'Мазно кафе',cleanup_2_desc:'Изпразнете 2-та контейнера',pleaseWait:'Моля, изчакайте ...',hourShort:'ч',minuteShort:'мин',selectDrink:'Изберете напитка',preheat:'Загряване',cafe:'Приготвя се кафето',foaming:'Разпенване на мляко',hotwater:'гореща вода',seqCanceled:'Напитката е спряна',week:'седмица',weekend:'уикенд',morning:'сутрин',lunch:'обед',dinner:'вечер',light:'светлина',strong:'силно',short:'късо',long:'дълго',none:'няма',sweet:'гладко',programDesc:'Задайте автоматичното включване',cleanup:'Почистване',descaling_short:'Премахване на котлен камък',filter:'Филтър',milkRinse:'Изплакване от мляко',milkRinse_short:'Изплакване от мляко',milkAccClean:'Почистване на принадлежностите за мляко',milkAccClean_short:'Почистване на принадлежностите за мляко',help_fav:'Как да създавате и управлявате предпочитаните си напитки',help_service:'Как да поддържате Вашата машина',help_recipe:'Как да приготвяте напитките си',videos:'%s видеоклипове',roundsDesc:'Брой цикли',teaRinse:'Предварително изплакване при приготвяне на чай',teaRinse_short:'Предварително изплакване при приготвяне на чай',profile:'Профил',addToFavs:'Добави в любими напитки',calendarMonths:'Ян;Фев;Март;Апр;Май;Юни;Юли;Авг;Септ;Окт;Ноем;Дек',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	cs:{display:'Čeština',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Mléčná pěna',caffelatte:'Cafe latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Káva ',americano:'Americano',thevert:'Zelený čaj',thenoir:'Černý čaj',lattemacchiato:'Latte macchiato',infusion:'Bylinný čaj',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Mléčná pěna',caffelatte_short:'Cafe latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Káva ',americano_short:'Americano',thevert_short:'Zelený čaj',thenoir_short:'Černý čaj',lattemacchiato_short:'L.Macchiato',infusion_short:'Bylinný čaj',profileSettings:'Nastavení profilu',profileSettings_short:'Nastavení profilu',setups:'Nastavení',informations:'Informace',ml:'ml',oz:'oz',sec:'s',yes:'Ano',no:'Ne',ok:'OK',beforeThxs:'Nápoj <BOLD>',afterThxs:'</BOLD> byl přidán do vašeho profilu!',drink:'Nápoje',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Přidejte nápoj',chooseColor:'Zvolte barvu',typeYourName:'Zadejte své jméno',next:'DALŠÍ',finnished:'DOKONČIT',color:'Barva',firstName:'Jméno',display:'Zobrazení',display_short:'Zobrazení',planning:'Programování ',slider:'POSUVNÍK',tiles:'MOZAIKA',on:'ZAP',off:'VYP',displayDesc:'Představení',deviceLightDesc:'Aktivujte světelného průvodce',selectKeyword:'Zvolte klíčové slovo',enjoy:'Dobrou chuť!',coffeeTemp:'Teplota kávy',coffeeTemp_short:'Teplota kávy',teaTemp:'Teplota čaje',teaTemp_short:'Teplota čaje',waterTemp:'Teplota vody',waterTemp_short:'Teplota vody',tempDesc:'Zvolte teplotu',selectYourProfile:'Vyberte svůj profil',start:'Start',stop:'Stop',remains:'(zbývá znaků: %s)',date:'Datum',settings:'Nastavení',help:'Nápověda a postupy',language:'Jazyk',dateTime:'Datum a čas',dateTime_short:'Datum a čas',dateTimeDesc:'Datum a čas',deviceLight_short:'Kontrolka',deviceLight:'Kontrolka',autoOff:'Automatické zastavení',autoOff_short:'Automatické vypnutí',volUnity:'Jednotka objemu',volUnity_short:'Jednotka objemu',autoRinse:'Automatické vyplachování',autoRinse_short:'Automatické vyplachování',waterHardness:'Tvrdost vody',waterHardness_short:'Tvrdost vody',backLightDesc:'Nastavte podsvícení',screenLight:'Jas displeje',screenLight_short:'Jas obrazovky',afterInactivity:'Po nečinnosti trvající:',waterHardnessDesc:'Nastavte tvrdost vody ',cafeTypDesc:'Vyberte typ kávových zrn ',cafeTyp:'Typ kávy',cafeTyp_short:'typ kávy',moreInfos:'Další informace',VolUnitDesc:'Zvolte jednotku zobrazení objemu',resetDesc:'Při resetování budou odstraněny vaše předvolby a nastavení.',reset:'Resetování produktu',reset_short:'Resetování produktu',profileSettingsDesc:'Vyberte profil ke konfiguraci<br>',cleanup_5_desc:'Umístěte 600ml nádobu pod trysky<br>',cleanup_9_desc:'Čištění dokončeno',cleanup_6_desc:'Probíhá čištění, <br>zbývá <span class="cd">-</span> min',cleanup_7_desc:'Vyprázdněte nádobu',cleanup_8_desc:'Vyprázdněte odkapávací misku',cleanup_3_desc:'Naplňte nádržku na vodu ',cleanup_4_desc:'Otevřete kryt a vložte čisticí<br>tabletu do žlábku<br>',cleanup_1_desc:'Je nutné použít čisticí<br>tabletu XS3000.<br>Odhadovaná doba trvání: 13 minut ',descaling:'Odvápnění',autoRinseDesc:'Při každém zapnutí spusťte<br>cyklus vyplachování',coffeeRinse:'Vypláchnutí kávy',coffeeRinse_short:'Vypláchnutí kávy',care:'Údržba zařízení',standardCoffee:'Běžná káva',greasyCoffee:'Olejnatá káva',cleanup_2_desc:'Vyprázdněte 2 nádoby',pleaseWait:'Čekejte...',hourShort:'h',minuteShort:'min',selectDrink:'Zvolte nápoj',preheat:'předehřev',cafe:'připravuje se káva ',foaming:'pěnění mléka',hotwater:'horká voda',seqCanceled:'Příprava nápoje zastavena',week:'týden',weekend:'víkend',morning:'ráno',lunch:'poledne',dinner:'večer',light:'slabá',strong:'silná',short:'krátké',long:'dlouhé',none:'žádný',sweet:'jemná',programDesc:'Nastavte automatické zapínání',cleanup:'Čištění',descaling_short:'Odvápnění',filter:'Filtr',milkRinse:'Vypláchnutí mléka',milkRinse_short:'Vypláchnutí mléka',milkAccClean:'Čištění příslušenství pro mléko',milkAccClean_short:'Čištění příslušenství pro mléko',help_fav:'Jak vytvářet oblíbené nápoje a provádět jejich správu?',help_service:'Jak provádět údržbu zařízení?',help_recipe:'Jak postupovat při přípravě nápojů?',videos:'%s videí',roundsDesc:'Počet cyklů',teaRinse:'Propláchnutí pro čaj',teaRinse_short:'Propláchnutí pro čaj',profile:'Profil',addToFavs:'Přidejte k oblíbeným',calendarMonths:'Led;Úno;Bře;Dub;Kvě;Čvn;Čvc;Srp;Zář;Říj;Lis;Pro',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	en:{display:'English',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Frothy milk',caffelatte:'Caffe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Long coffee',americano:'Americano',thevert:'Green tea',thenoir:'Black tea',lattemacchiato:'Latte Macchiato',infusion:'Herbal tea',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Frothy milk',caffelatte_short:'Caffe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Long coffee',americano_short:'Americano',thevert_short:'Green tea',thenoir_short:'Black tea',lattemacchiato_short:'L.Macchiato',infusion_short:'Herbal tea',profileSettings:'Profile settings',profileSettings_short:'Profile settings',setups:'Adjustments',informations:'Information',ml:'ml',oz:'oz',sec:'s',yes:'Yes',no:'No',ok:'OK',beforeThxs:'Your drink <BOLD>',afterThxs:'</BOLD> has been added to your profile!',drink:'Drinks',emacchiato:'E. Macchiato',emacchiato_short:'E. Macchiato',addDrink:'Add drink',chooseColor:'Choose your colour',typeYourName:'Enter your name',next:'NEXT',finnished:'FINISH',color:'Colour',firstName:'Name',display:'Display',display_short:'Display',planning:'Programing',slider:'SLIDER',tiles:'MOSAIC',on:'ON',off:'OFF',displayDesc:'Drink presentation',deviceLightDesc:'Activate the lighting guide',selectKeyword:'Choose a keyword',enjoy:'Enjoy!',coffeeTemp:'Coffee temperature',coffeeTemp_short:'Coffee temperature',teaTemp:'Tea temperature',teaTemp_short:'Tea temperature',waterTemp:'Water temperature',waterTemp_short:'Water temperature',tempDesc:'Choose temperature',selectYourProfile:'Select your profile',start:'Start',stop:'Stop',remains:'',date:'Date',settings:'Settings',help:'Help and tutorials',language:'Language',dateTime:'Date/Time',dateTime_short:'Date/Time',dateTimeDesc:'Date/Time',deviceLight_short:'Light',deviceLight:'Light',autoOff:'Automatic stop',autoOff_short:'Auto off',volUnity:'Volume unit',volUnity_short:'Volume Unit',autoRinse:'Auto rinsing',autoRinse_short:'Auto rinsing',waterHardness:'Water hardness',waterHardness_short:'Water hardness',backLightDesc:'Adjust the backlight',screenLight:'Screen brightness',screenLight_short:'Screen brigthness',afterInactivity:'When idle for:',waterHardnessDesc:'Adjust water hardness',cafeTypDesc:'Select bean type',cafeTyp:'Coffee type',cafeTyp_short:'Coffee type',moreInfos:'More information',VolUnitDesc:'Choose the volume display unit',resetDesc:'Resetting will delete your preferences and settings.',reset:'Product reset',reset_short:'Product reset',profileSettingsDesc:'Select the profile <br>to configure',cleanup_5_desc:'Place a 600ml container<br>below the coffee nozzles',cleanup_9_desc:'Cleaning completed',cleanup_6_desc:'Cleaning in progress <br><span class="cd">-</span> minutes remaining',cleanup_7_desc:'Empty the container',cleanup_8_desc:'Empty the drip tray',cleanup_3_desc:'Fill the water tank to maximum level',cleanup_4_desc:'Open the cover and insert<br>a cleaning tablet into the chute<br>',cleanup_1_desc:'A XS3000 cleaning tablet<br>is required.<br>Estimated duration: 13 minutes',descaling:'Descaling',autoRinseDesc:'Launch a rinsing<br>at every startup',coffeeRinse:'Coffee rinsing',coffeeRinse_short:'Coffee rinsing',care:'Machine maintenance',standardCoffee:'Regular coffee',greasyCoffee:'Oily coffee',cleanup_2_desc:'Empty the two containers',pleaseWait:'Please wait…',hourShort:'hr',minuteShort:'min.',selectDrink:'Choose your drink',preheat:'Preheating',cafe:'Coffee in progress',foaming:'Milk frothing',hotwater:'Hot water',seqCanceled:'Drink stopped',week:'Week',weekend:'Week-end',morning:'Morning',lunch:'Noon',dinner:'Evening',light:'Light',strong:'Strong',short:'Short',long:'Long',none:'None',sweet:'Smooth',programDesc:'Set the auto-on',cleanup:'Cleaning',descaling_short:'Descaling',filter:'Filter',milkRinse:'Milk rinsing',milkRinse_short:'Milk rinsing',milkAccClean:'Milk acc. cleaning',milkAccClean_short:'Milk acc. cleaning',help_fav:'How to create and manage your favourites',help_service:'How to maintain your machine?',help_recipe:'How to make your drinks?',videos:'%s videos',roundsDesc:'Number of cycles',teaRinse:'Tea pre-rinsing',teaRinse_short:'Tea pre-rinsing',profile:'Profile',addToFavs:'Add to favourites',calendarMonths:'Jan;Feb;Mar;Apr;May;Jun;Jul;Aug;Sept;Oct;Nov;Dec',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	da:{display:'Dansk',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Mælkeskum',caffelatte:'Caffe latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Sort kaffe',americano:'Americano',thevert:'Grøn te',thenoir:'Sort te',lattemacchiato:'Latte macchiato',infusion:'Urtete',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Mælkeskum',caffelatte_short:'Caffe latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Sort kaffe',americano_short:'Americano',thevert_short:'Grøn te',thenoir_short:'Sort te',lattemacchiato_short:'L.Macchiato',infusion_short:'Urtete',profileSettings:'Profil-indstillinger',profileSettings_short:'Profil<wbr>indstillinger',setups:'Justeringer',informations:'Oplysninger',ml:'ml',oz:'oz',sec:'s',yes:'Ja',no:'Nej',ok:'OK',beforeThxs:'Din drik <BOLD>',afterThxs:'</BOLD> er blevet føjet til din profil!',drink:'Drikke',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Tilføj drik',chooseColor:'Vælg din farve',typeYourName:'Indtast dit navn',next:'NÆSTE',finnished:'AFSLUT',color:'Farve',firstName:'Navn',display:'Display',display_short:'Display',planning:'Programmering ',slider:'SKYDER',tiles:'MOSAIK',on:'TÆND',off:'SLUK',displayDesc:'Drik',deviceLightDesc:'Aktivér lysguiden',selectKeyword:'Vælg et søgeord',enjoy:'God fornøjelse!',coffeeTemp:'Kaffens temperatur',coffeeTemp_short:'Kaffens temperatur',teaTemp:'Teens temperatur',teaTemp_short:'Teens temperatur',waterTemp:'Vandets temperatur',waterTemp_short:'Vandets temperatur',tempDesc:'Vælg temperatur',selectYourProfile:'Vælg din profil',start:'Start',stop:'Stop',remains:'(%s tegn tilbage)',date:'Dato',settings:'Indstillinger',help:'Hjælp og vejledninger',language:'Sprog',dateTime:'Dato/klokkeslæt',dateTime_short:'Dato<wbr>/klokkeslæt',dateTimeDesc:'Dato/klokkeslæt',deviceLight_short:'Lys',deviceLight:'Lys',autoOff:'Automatisk stop',autoOff_short:'Autosluk',volUnity:'Mængdeenhed',volUnity_short:'Mængde<wbr>enhed',autoRinse:'Automatisk skylning',autoRinse_short:'Automatisk skylning',waterHardness:'Vandets hårdhedsgrad',waterHardness_short:'Vandets hårdhedsgrad',backLightDesc:'Juster skærmens lysstyrke',screenLight:'Skærmlysstyrke',screenLight_short:'Skærmens lysstyrke',afterInactivity:'Når inaktiv i:',waterHardnessDesc:'Juster vandets hårdhedsgrad ',cafeTypDesc:'Vælg bønnetype ',cafeTyp:'Kaffetype',cafeTyp_short:'kaffe<wbr>type',moreInfos:'Flere oplysninger',VolUnitDesc:'Vælg mængdeenhed',resetDesc:'Nulstilling sletter dine præferencer og indstillinger ',reset:'Produktet nulstilles',reset_short:'Produktet nulstilles',profileSettingsDesc:'Vælg den profil, <br>der skal konfigureres',cleanup_5_desc:'Sæt en 600 ml beholder under dyserne<br>',cleanup_9_desc:'Rengøring udført',cleanup_6_desc:'Rengøring i gang, <br><span class="cd">-</span> minutter tilbage',cleanup_7_desc:'Tøm beholderen',cleanup_8_desc:'Tøm drypbakken',cleanup_3_desc:'Fyld vandbeholderen ',cleanup_4_desc:'Åbn dækslet, og placer <br>en rengøringstablet i slisken<br>',cleanup_1_desc:'Du skal bruge en XS3000<br>rengøringstablet.<br>Forventet varighed: 13 minutter ',descaling:'Afkalkning',autoRinseDesc:'Start en gennemskylningscyklus <br>ved hver opstart',coffeeRinse:'Skylning af kaffesystem',coffeeRinse_short:'Skylning af kaffesystem',care:'Vedligeholdelse af maskinen',standardCoffee:'Almindelig kaffe',greasyCoffee:'Olieholdig kaffe',cleanup_2_desc:'Tøm de to beholdere',pleaseWait:'Vent ...',hourShort:'t.',minuteShort:'min.',selectDrink:'Vælg din drik',preheat:'forvarmning',cafe:'kaffebrygning ',foaming:'mælkeskumning',hotwater:'varmt vand',seqCanceled:'Drik stoppet',week:'hverdag',weekend:'weekend',morning:'morgen',lunch:'middag',dinner:'aften',light:'mild',strong:'stærk',short:'lille',long:'stor',none:'ingen',sweet:'blød',programDesc:'Indstil autotænd',cleanup:'Rengøring',descaling_short:'Afkalkning',filter:'Filter',milkRinse:'Skylning af mælkesystem',milkRinse_short:'Skylning af mælkesystem',milkAccClean:'Rengøring af mælketilbehør',milkAccClean_short:'Rengøring af mælketilbehør',help_fav:'Sådan gemmer og administrerer du dine favoritter',help_service:'Sådan vedligeholder du maskinen',help_recipe:'Sådan laver du dine kaffedrikke',videos:'%s videoer',roundsDesc:'Antal cyklusser',teaRinse:'Forskylning af tesystem',teaRinse_short:'Forskylning af tesystem',profile:'Profil',addToFavs:'Føj til favoritter',calendarMonths:'Jan;Feb;Mar;Apr;Maj;Jun;Jul;Aug;Sep;Okt;Nov;Dec',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	de:{display:'Deutsch',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Milchschaum',caffelatte:'Café Latte',flatwhite:'Flat White',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Long Coffee',americano:'Americano',thevert:'Grüner Tee',thenoir:'Schwarztee',lattemacchiato:'Latte Macchiato',infusion:'Kräutertee',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Milchschaum',caffelatte_short:'Café Latte',flatwhite_short:'Flat White',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Long Coffee',americano_short:'Americano',thevert_short:'Grüner Tee',thenoir_short:'Schwarztee',lattemacchiato_short:'L.Macchiato',infusion_short:'Kräutertee',profileSettings:'Profil-Einstellungen',profileSettings_short:'Profil Einstellungen',setups:'Einstellungen',informations:'Informationen',ml:'ml',oz:'oz',sec:'s',yes:'Ja',no:'Nein',ok:'OK',beforeThxs:'Ihr Getränk <BOLD>',afterThxs:'</BOLD> wurde Ihrem Profil hinzugefügt!',drink:'Getränke',emacchiato:'E. Macchiato',emacchiato_short:'E. Macchiato',addDrink:'Getränk hinzufügen',chooseColor:'Wählen Sie Ihre Farbe',typeYourName:'Geben Sie Ihren Namen ein',next:'WEITER',finnished:'FERTIG',color:'Farbe',firstName:'Name',display:'Anzeige',display_short:'Anzeige',planning:'Programmierung ',slider:'REGLER',tiles:'MOSAIK',on:'EIN',off:'AUS',displayDesc:'Getränk',deviceLightDesc:'Beleuchtungshilfe aktivieren',selectKeyword:'Schlüsselwort wählen',enjoy:'Genießen Sie es!',coffeeTemp:'Kaffeetemperatur',coffeeTemp_short:'Kaffee<wbr>temperatur',teaTemp:'Teetemperatur',teaTemp_short:'Tee<wbr>temperatur',waterTemp:'Wassertemperatur',waterTemp_short:'Wasser<wbr>temperatur',tempDesc:'Temperatur wählen',selectYourProfile:'Wählen Sie Ihr Profil aus',start:'Start',stop:'Stopp',remains:'(%s verbleibende Zeichen)',date:'Datum',settings:'Einstellungen',help:'Hilfe und Tutorials',language:'Sprache',dateTime:'Datum/Uhrzeit',dateTime_short:'Datum<wbr>/Uhrzeit',dateTimeDesc:'Datum/Uhrzeit',deviceLight_short:'Leicht',deviceLight:'Leicht',autoOff:'Automatischer Stopp',autoOff_short:'Automatische Abschaltung',volUnity:'Volumeneinheit',volUnity_short:'Volumen<wbr>einheit',autoRinse:'Automatisch spülen',autoRinse_short:'Automatisch spülen',waterHardness:'Wasserhärte',waterHardness_short:'Wasser<wbr>härte',backLightDesc:'Beleuchtung anpassen',screenLight:'Bildschirmhelligkeit',screenLight_short:'Bildschirm- helligkeit',afterInactivity:'Wenn keine Eingabe für:',waterHardnessDesc:'Wasserhärte einstellen ',cafeTypDesc:'Bohnentyp auswählen ',cafeTyp:'Kaffeesorte',cafeTyp_short:'Kaffee<wbr>sorte',moreInfos:'Weitere Informationen',VolUnitDesc:'Wählen Sie die <wbr>Volumenanzeigeeinheit aus',resetDesc:'Beim Zurücksetzen werden Ihre Einstellungen gelöscht',reset:'Produkt Zurücksetzen',reset_short:'Produkt Zurücksetzen',profileSettingsDesc:'Wählen Sie das<br>zu konfigurierende Profil aus',cleanup_5_desc:'Stellen Sie einen 600-ml-<br>Behälter unter die Düsen',cleanup_9_desc:'Reinigung abgeschlossen',cleanup_6_desc:'Reinigung läuft, <br>noch <span class="cd">-</span> Minuten',cleanup_7_desc:'Leeren Sie den Behälter',cleanup_8_desc:'Leeren Sie die Abtropfschale',cleanup_3_desc:'Füllen Sie den Wassertank ',cleanup_4_desc:'Öffnen Sie die Abdeckung und<br> geben Sie eine Reinigungstablette<br> in die Rutsche',cleanup_1_desc:'Eine XS3000-<br>Reinigungstablette ist erforderlich.<br>Geschätzte Dauer: 13 Minuten ',descaling:'Entkalken',autoRinseDesc:'Beginnen Sie bei jedem <br>Start einen Spülzyklus',coffeeRinse:'Kaffeespülung',coffeeRinse_short:'Kaffee<wbr>spülung',care:'Maschinenwartung',standardCoffee:'Normaler Kaffee',greasyCoffee:'Öliger Kaffee',cleanup_2_desc:'Die 2 Behälter leeren',pleaseWait:'Bitte warten...',hourShort:'Std',minuteShort:'Min',selectDrink:'Wählen Sie Ihr Getränk',preheat:'Vorheizen',cafe:'Kaffee läuft ',foaming:'Milch wird aufgeschäumt',hotwater:'Heißes Wasser',seqCanceled:'Getränk angehalten',week:'Woche',weekend:'Wochenende',morning:'Morgen',lunch:'Mittag',dinner:'Abend',light:'Leicht',strong:'Stark',short:'Kurz',long:'Lang',none:'Keine',sweet:'Glatt',programDesc:'Automatische Einschaltung aktivieren',cleanup:'Reinigung',descaling_short:'Entkalken',filter:'Filter',milkRinse:'Milchspülung',milkRinse_short:'Milch<wbr>spülung',milkAccClean:'Milch-Zubehör-Reinigung',milkAccClean_short:'Milch-Zubehör-Reinigung',help_fav:'So erstellen und verwalten Sie Favoriten',help_service:'So warten Sie Ihre Maschine',help_recipe:'So bereiten Sie Ihre Getränke zu',videos:'%s Videos',roundsDesc:'Anzahl der Zyklen',teaRinse:'Teevorspülung',teaRinse_short:'Tee<wbr>vorspülung',profile:'Profil',addToFavs:'Zu Favoriten hinzufügen',calendarMonths:'Jan;Feb;Mär;Apr;Mai;Jun;Juli;Aug;Sep;Okt;Nov;Dez',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	es:{display:'Español',strings:{espresso:'Espresso',cappucino:'Capuchino',laitmousse:'Espuma de leche',caffelatte:'Caffe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Café largo',americano:'Americano',thevert:'Té verde',thenoir:'Té negro',lattemacchiato:'Latte macchiato',infusion:'Infusión',espresso_short:'Espresso',cappucino_short:'Capuchino',laitmousse_short:'Espuma de leche',caffelatte_short:'Caffe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Café largo',americano_short:'Americano',thevert_short:'Té verde',thenoir_short:'Té negro',lattemacchiato_short:'L.Macchiato',infusion_short:'Infusión',profileSettings:'Configurar perfil',profileSettings_short:'Configurar Perfil',setups:'Ajustes',informations:'Información',ml:'ml',oz:'oz',sec:'s',yes:'Sí',no:'No',ok:'OK',beforeThxs:'La bebida <BOLD> ',afterThxs:'</BOLD> se ha añadido al perfil',drink:'Bebidas',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Añadir bebida',chooseColor:'Elige tu color',typeYourName:'Introduce tu nombre',next:'SIGUIENTE',finnished:'FINALIZAR',color:'Color',firstName:'Nombre',display:'Pantalla',display_short:'Pantalla',planning:'Programar',slider:'DESLIZADOR',tiles:'MOSAICO',on:'ON',off:'OFF',displayDesc:'Presentación',deviceLightDesc:'Activar la guía luminosa',selectKeyword:'Elige una palabra clave',enjoy:'¡A disfrutar!',coffeeTemp:'Temperatura del café',coffeeTemp_short:'Temperatura del café',teaTemp:'Temperatura del té',teaTemp_short:'Temperatura del té',waterTemp:'Temperatura del agua',waterTemp_short:'Temperatura del agua',tempDesc:'Elegir temperatura',selectYourProfile:'Selecciona tu perfil',start:'Iniciar',stop:'Detener',remains:'(quedan %s caracteres)',date:'Fecha',settings:'Configuración',help:'Ayuda y tutoriales',language:'Idioma',dateTime:'Fecha/hora',dateTime_short:'Fecha<wbr>/hora',dateTimeDesc:'Fecha/hora',deviceLight_short:'Luz',deviceLight:'Luz',autoOff:'Detención auto.',autoOff_short:'Apagado automático',volUnity:'Unidad de volumen',volUnity_short:'Unidad de volumen',autoRinse:'Enjuagado automático',autoRinse_short:'Enjuagado automático',waterHardness:'Dureza del agua',waterHardness_short:'Dureza del agua',backLightDesc:'Ajustar la retroiluminación',screenLight:'Brillo de la pantalla',screenLight_short:'Brillo de pantalla',afterInactivity:'Tras un periodo de inactividad de:',waterHardnessDesc:'Ajustar dureza del agua ',cafeTypDesc:'Seleccionar tipo de grano ',cafeTyp:'Tipo de café',cafeTyp_short:'Tipo de café',moreInfos:'Más información',VolUnitDesc:'Selecciona la unidad <wbr>de visualización de volumen',resetDesc:'Al restablecer se eliminarán las preferencias y la configuración. ',reset:'Restablecer producto',reset_short:'Restablecer producto',profileSettingsDesc:'Selecciona el perfil <br>que deseas configurar',cleanup_5_desc:'Coloca un recipiente <br>de 600 ml bajo las boquillas',cleanup_9_desc:'Limpieza completa',cleanup_6_desc:'Limpieza en curso, <br>quedan <span class="cd">-</span> minutos',cleanup_7_desc:'Vacía el depósito',cleanup_8_desc:'Vacía la bandeja recogegotas',cleanup_3_desc:'Llena el depósito de agua ',cleanup_4_desc:'Abre la tapa e inserta <br>una pastilla de limpieza <br>en el conducto',cleanup_1_desc:'Se necesita <br>una pastilla de limpieza XS3000.<br>Duración estimada: 13 minutos ',descaling:'Descalci<wbr>ficación',autoRinseDesc:'Iniciar un ciclo de enjuagado <br>en cada puesta en marcha',coffeeRinse:'Enjuagado de café',coffeeRinse_short:'Enjuagado de café',care:'Mantenimiento',standardCoffee:'Café normal',greasyCoffee:'Café oleoso',cleanup_2_desc:'Vacía depósitos',pleaseWait:'Espera...',hourShort:'h',minuteShort:'min',selectDrink:'Elige la bebida',preheat:'Precalentamiento',cafe:'Café en curso ',foaming:'Espuma de leche',hotwater:'Agua caliente',seqCanceled:'Bebida detenida',week:'semana',weekend:'fin semana',morning:'mañana',lunch:'mediodía',dinner:'tarde',light:'ligero',strong:'fuerte',short:'corto',long:'largo',none:'ninguno',sweet:'suave',programDesc:'Configurar encendido auto.',cleanup:'Limpieza',descaling_short:'Descalc.',filter:'Filtro',milkRinse:'Enjuag. leche',milkRinse_short:'Enjuag. leche',milkAccClean:'Limpieza acc. leche',milkAccClean_short:'Limpieza acc. leche',help_fav:'Cómo crear y administrar favoritos',help_service:'Cómo mantener la cafetera',help_recipe:'Cómo preparar tus bebidas',videos:'%s vídeos',roundsDesc:'Número de ciclos',teaRinse:'Enjuagado té',teaRinse_short:'Enjuagado té',profile:'Perfil',addToFavs:'Añadir a favoritos',calendarMonths:'Ene;Feb;Mar;Abr;May;Jun;Jul;Ago;Sep;Oct;Nov;Dic',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	fr:{display:'Français',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Lait Moussé',caffelatte:'Caffe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Café Long',americano:'Americano',thevert:'Thé vert',thenoir:'Thé noir',lattemacchiato:'Latte Macchiato',infusion:'Infusion',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Lait Moussé',caffelatte_short:'Caffe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Café Long',americano_short:'Americano',thevert_short:'Thé vert',thenoir_short:'Thé noir',lattemacchiato_short:'L.Macchiato',infusion_short:'Infusion',profileSettings:'Réglages profils',profileSettings_short:'Réglages profils',setups:'Réglages',informations:'Informations',ml:'ml',oz:'oz',sec:'s',yes:'Oui',no:'Non',ok:'OK',beforeThxs:'Votre boisson <BOLD>',afterThxs:'</BOLD> a été ajoutée à votre profil !',drink:'Boissons',emacchiato:'E. Macchiato',emacchiato_short:'E. Macchiato',addDrink:'Ajout de boisson',chooseColor:'Choisissez votre couleur',typeYourName:'Tapez votre prénom',next:'SUIVANT',finnished:'TERMINER',color:'Couleur',firstName:'Prénom',display:'Affichage',display_short:'Affichage',planning:'Programmation ',slider:'SLIDER',tiles:'MOSAIQUE',on:'ON',off:'OFF',displayDesc:'Choisir la présentation',deviceLightDesc:'Activer le guide lumineux',selectKeyword:'Choisissez un mot clef',enjoy:'Bonne dégustation !',coffeeTemp:'Température du café',coffeeTemp_short:'Température café',teaTemp:'Température du thé',teaTemp_short:'Température thé',waterTemp:'Température de l\'eau',waterTemp_short:'Température eau',tempDesc:'Choisir la température',selectYourProfile:'Sélectionner votre profil',start:'Start',stop:'Stop',remains:'(%s caractères restants)',date:'Date',settings:'Paramètres',help:'Aide et tutoriels',language:'Langue',dateTime:'Date/Heure',dateTime_short:'Date/Heure',dateTimeDesc:'Date/Heure',deviceLight_short:'Lumière',deviceLight:'Lumière',autoOff:'Arrêt automatique',autoOff_short:'Arrêt auto',volUnity:'Unité de volume',volUnity_short:'Unité volume',autoRinse:'Rinçage automatique',autoRinse_short:'Rinçage auto',waterHardness:'Dureté de l\'eau',waterHardness_short:'Dureté eau',backLightDesc:'Régler le rétro-éclairage',screenLight:'Luminosité écran',screenLight_short:'Luminosité écran',afterInactivity:'Après une période d\'inactivité de :',waterHardnessDesc:'Régler la dureté de l\'eau ',cafeTypDesc:'Sélectionner le type de grain ',cafeTyp:'Type de café',cafeTyp_short:'type de café',moreInfos:'Plus d\'infos',VolUnitDesc:'Choisir l\'affichage lors des réglages',resetDesc:'La réinitialisation effacera vos préférences et vos réglages.',reset:'Réinitialiser Produit',reset_short:'Réinitialiser Produit',profileSettingsDesc:'Sélectionner le profil à paramétrer<br>',cleanup_5_desc:'Placez un récipient de 600 ml sous les buses',cleanup_9_desc:'Nettoyage terminé',cleanup_6_desc:'Nettoyage en cours <br><span class="cd">-</span> minutes restantes',cleanup_7_desc:'Videz le recipient',cleanup_8_desc:'Videz le bac recolte gouttes',cleanup_3_desc:'Remplissez le réservoir ',cleanup_4_desc:'Ouvrez la trappe et insérez une pastille de nettoyage dans la glissière<br><br>',cleanup_1_desc:'Une pastille de nettoyage XS3000 est nécessaire.<br><br>Durée estimée : 13 minutes ',descaling:'Détartrage',autoRinseDesc:'Lancer un rinçage à chaque démarrage<br>',coffeeRinse:'Rinçage café',coffeeRinse_short:'Rinçage café',care:'Entretien machine',standardCoffee:'Café standard',greasyCoffee:'Café huileux',cleanup_2_desc:'Videz les 2 bacs',pleaseWait:'Veuillez patienter ...',hourShort:'H',minuteShort:'min',selectDrink:'Choisissez votre boisson',preheat:'préchauffage',cafe:'café en cours ',foaming:'moussage lait',hotwater:'eau chaude',seqCanceled:'Boisson interrompue',week:'semaine',weekend:'weekend',morning:'matin',lunch:'midi',dinner:'soir',light:'léger',strong:'fort',short:'court',long:'long',none:'aucun',sweet:'onctueux',programDesc:'Programmer l\'allumage auto',cleanup:'Nettoyage',descaling_short:'Détartrage',filter:'Filtre',milkRinse:'Rinçage lait',milkRinse_short:'Rinçage lait',milkAccClean:'Nettoyage acc. lait',milkAccClean_short:'Nettoyage acc. lait',help_fav:'Comment créer et gérer vos favoris ?',help_service:'Comment entretenir votre machine?',help_recipe:'Comment réaliser vos boissons ?',videos:'%s vidéos',roundsDesc:'Nombre de cycles',teaRinse:'Rinçage thé',teaRinse_short:'Rinçage thé',profile:'Profil',addToFavs:'Ajout aux favoris',calendarMonths:'Janv;Fév;Mars;Avril;Mai;Juin;Juil;Août;Sept;Oct;Nov;Déc',unsupported:'Cette fonction n\'est pas disponible <br> dans le démonstrateur',onlyCleanup:'Seule la fonction "Nettoyage" est présentée dans ce démonstrateur',pleaseRotate:'Pour une meilleure expérience,<br> mettez votre écran en mode paysage',}},	el:{display:'Ελληνικά',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Αφρόγαλα',caffelatte:'Cafe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Μεγ. καφές',americano:'Americano',thevert:'Πράσινο τσάι',thenoir:'Μαύρο τσάι',lattemacchiato:'Latte macchiato',infusion:'Τσάι βοτάνων',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Αφρόγαλα',caffelatte_short:'Cafe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Μεγ. καφές',americano_short:'Americano',thevert_short:'Πράσινο τσάι',thenoir_short:'Μαύρο τσάι',lattemacchiato_short:'L.Macchiato',infusion_short:'Τσάι βοτάνων',profileSettings:'Ρυθμίσεις προφίλ',profileSettings_short:'Ρυθμίσεις προφίλ',setups:'Ρυθμίσεις',informations:'Πληροφορίες',ml:'ml',oz:'oz',sec:'s',yes:'Ναι',no:'Όχι',ok:'OK',beforeThxs:'Το ρόφημα <BOLD>',afterThxs:'</BOLD> έχει προστεθεί στο προφίλ σας!',drink:'Ροφήματα',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Προσθέστε ρόφημα',chooseColor:'Επιλέξτε χρώμα',typeYourName:'Εισαγάγετε το όνομά σας',next:'ΕΠΟΜΕΝΟ',finnished:'ΤΕΛΟΣ',color:'Χρώμα',firstName:'Όνομα',display:'Προβολή',display_short:'Προβολή',planning:'Προγραμματισμός ',slider:'ΡΥΘΜΙΣΤΙΚΟ',tiles:'ΜΩΣΑΪΚΟ',on:'ΕΝΕΡΓΟΠ.',off:'ΑΠΕΝΕΡΓΟΠ.',displayDesc:'Παρουσίαση',deviceLightDesc:'Ενεργοποίηση του οδηγού φωτισμού',selectKeyword:'Επιλέξτε λέξη-κλειδί',enjoy:'Απολαύστε!',coffeeTemp:'Θερμοκρασία του καφέ',coffeeTemp_short:'Θερμοκρασία του καφέ',teaTemp:'Θερμοκρασία τσαγιού',teaTemp_short:'Θερμοκρασία τσαγιού',waterTemp:'Θερμοκρασία νερού',waterTemp_short:'Θερμοκρασία νερού',tempDesc:'Επιλέξτε θερμοκρασία',selectYourProfile:'Επιλέξτε προφίλ',start:'Έναρξη',stop:'Διακοπή',remains:'(απομένουν %s χαρακτήρες)',date:'Ημερομηνία',settings:'Ρυθμίσεις',help:'Βοήθεια και εκπ. οδηγίες',language:'Γλώσσα',dateTime:'Ημερομηνία/ώρα',dateTime_short:'Ημερομηνία<wbr>/ώρα',dateTimeDesc:'Ημερομηνία/ώρα',deviceLight_short:'Φωτ. ένδειξη',deviceLight:'Φωτ. ένδειξη',autoOff:'Αυτόματη διακοπή',autoOff_short:'Αυτόματη απενεργοπ.',volUnity:'Μονάδα όγκου',volUnity_short:'Μονάδα όγκου',autoRinse:'Αυτόματη έκπλυση',autoRinse_short:'Αυτόματη έκπλυση',waterHardness:'Σκληρότητα νερού',waterHardness_short:'Σκληρότητα νερού',backLightDesc:'Ρύθμιση οπισθοφωτισμού',screenLight:'Φωτεινότητα οθόνης',screenLight_short:'Φωτεινότητα οθόνης',afterInactivity:'Όταν είναι σε αδράνεια για:',waterHardnessDesc:'Ρύθμιση σκληρότητας νερού ',cafeTypDesc:'Επιλογή τύπου κόκκων ',cafeTyp:'Τύπος καφέ',cafeTyp_short:'τύπος καφέ',moreInfos:'Περισσότερες πληροφορίες',VolUnitDesc:'Επιλέξτε την μονάδα όγκου που <wbr>θα εμφανίζεται στην οθόνη',resetDesc:'Με την επαναφορά θα διαγραφούν οι προτιμήσεις και οι ρυθμίσεις σας.',reset:'Επαναφορά προϊόντος',reset_short:'Επαναφορά προϊόντος',profileSettingsDesc:'Επιλέξτε προφίλ για διαμόρφωση<br>',cleanup_5_desc:'Τοποθετήστε ένα δοχείο 600 ml<br>κάτω από τα ακροφύσια',cleanup_9_desc:'Ο καθαρισμός ολοκληρώθηκε',cleanup_6_desc:'Καθαρισμός σε εξέλιξη, απομένουν<br> <span class="cd">-</span> λεπτά',cleanup_7_desc:'Αδειάστε το δοχείο',cleanup_8_desc:'Αδειάστε τον δίσκο απόνερων',cleanup_3_desc:'Γεμίστε το δοχείο νερού ',cleanup_4_desc:'Ανοίξτε το καπάκι και τοποθετήστε<br>μια ταμπλέτα καθαρισμού στον σωλήνα<br>',cleanup_1_desc:'Χρειάζεται μια ταμπλέτα καθαρισμού<br>XS3000.<br>Εκτιμώμενη διάρκεια: 13 λεπτά ',descaling:'Αφαλάτωση',autoRinseDesc:'Ξεκίνημα κύκλου έκπλυσης σε<br>κάθε εκκίνηση',coffeeRinse:'Έκπλυση συστήματος καφέ',coffeeRinse_short:'Έκπλυση συστήματος καφέ',care:'Συντήρηση της μηχανής',standardCoffee:'Κανονικός καφές',greasyCoffee:'Λιπαρός καφές',cleanup_2_desc:'Αδειάστε τα 2 δοχεία',pleaseWait:'Περιμένετε...',hourShort:'ώ',minuteShort:'λ',selectDrink:'Επιλέξτε ρόφημα',preheat:'προθέρμανση',cafe:'προετοιμασία καφέ ',foaming:'άφρισμα γάλακτος',hotwater:'καυτό νερό',seqCanceled:'Διακοπή ροφήματος',week:'εβδομάδα',weekend:'σαββατ/κο',morning:'πρωί',lunch:'μεσημέρι',dinner:'βράδυ',light:'ελαφρύς',strong:'δυνατός',short:'μικρός',long:'μεγάλος',none:'κανένας',sweet:'με κρεμώδη υφή',programDesc:'Ρύθμιση αυτόματης ενεργοποίησης',cleanup:'Καθαρισμός',descaling_short:'Αφαλάτωση',filter:'Φίλτρο',milkRinse:'Έκπλυση του συστήματος γάλακτος',milkRinse_short:'Έκπλυση του συστήματος γάλακτος',milkAccClean:'Καθαρισμός εξαρτημάτων γάλακτος',milkAccClean_short:'Καθαρισμός εξαρτημάτων γάλακτος',help_fav:'Πώς να δημιουργήσετε και να διαχειριστείτε τα Αγαπημένα σας',help_service:'Πώς να συντηρήσετε τη μηχανή σας',help_recipe:'Πώς να φτιάξετε ροφήματα',videos:'%s βίντεο',roundsDesc:'Αριθμός κύκλων',teaRinse:'Προέκπλυση για τσάι',teaRinse_short:'Προέκπλυση για τσάι',profile:'Προφίλ',addToFavs:'Προσθήκη στα Αγαπημένα',calendarMonths:'Ιαν.;Φεβ.;Μάρ.;Απρ.;Μάι.;Ιούν.;Ιούλ.;Αύγ.;Σεπ.;Οκτ.;Νοέ.;Δεκ.',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	hr:{display:'Hrvatski',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Zapjenjeno mlijeko',caffelatte:'Cafe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Duga kava',americano:'Americano',thevert:'Zeleni čaj',thenoir:'Crni čaj',lattemacchiato:'Latte macchiato',infusion:'Biljni čaj',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Zapjenjeno mlijeko',caffelatte_short:'Cafe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Duga kava',americano_short:'Americano',thevert_short:'Zeleni čaj',thenoir_short:'Crni čaj',lattemacchiato_short:'L. macchiato',infusion_short:'Biljni čaj',profileSettings:'Postavke profila',profileSettings_short:'Postavke profila',setups:'Prilagodbe',informations:'Informacije',ml:'ml',oz:'oz',sec:'s',yes:'Da',no:'Ne',ok:'U redu',beforeThxs:'Napitak <BOLD>',afterThxs:'</BOLD> dodan je u vaš profil!',drink:'Napitci',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Dodaj napitak',chooseColor:'Odaberite svoju boju',typeYourName:'Unesite svoje ime',next:'SLJEDEĆE',finnished:'KRAJ',color:'Boja',firstName:'Ime',display:'Prikaz',display_short:'Prikaz',planning:'Programiranje ',slider:'KLIZAČ',tiles:'MOZAIK',on:'UKLJUČENO',off:'ISKLJUČENO',displayDesc:'Prezentacija',deviceLightDesc:'Aktivirajte pomoć za svjetlo',selectKeyword:'Odaberite ključnu riječ',enjoy:'Uživajte!',coffeeTemp:'Temperatura kave',coffeeTemp_short:'Temperatura kave',teaTemp:'Temperatura čaja',teaTemp_short:'Temperatura čaja',waterTemp:'Temperatura vode',waterTemp_short:'Temperatura vode',tempDesc:'Odaberite temperaturu',selectYourProfile:'Odaberite svoj profil',start:'Pokreni',stop:'Zaustavi',remains:'(preostalo znakova: %s)',date:'Datum',settings:'Postavke',help:'Pomoć i vodiči',language:'Jezik',dateTime:'Datum/vrijeme',dateTime_short:'Datum<wbr>/vrijeme',dateTimeDesc:'Datum/vrijeme',deviceLight_short:'Svjetlo',deviceLight:'Svjetlo',autoOff:'Automatsko zaustavljanje',autoOff_short:'Automatsko isključivanje',volUnity:'Jedinica za količinu',volUnity_short:'Jedinica za količinu',autoRinse:'Automatsko ispiranje',autoRinse_short:'Automatsko ispiranje',waterHardness:'Tvrdoća vode',waterHardness_short:'Tvrdoća vode',backLightDesc:'Prilagodite pozadinsko svjetlo',screenLight:'Svjetlina zaslona',screenLight_short:'Svjetlina zaslona',afterInactivity:'Kad nije aktivno:',waterHardnessDesc:'Prilagodite tvrdoću vode ',cafeTypDesc:'Odaberite vrstu zrna ',cafeTyp:'Vrsta kave',cafeTyp_short:'vrsta kave',moreInfos:'Više informacija',VolUnitDesc:'Odaberite jedinicu za prikaz <wbr>količine',resetDesc:'Ponovnim postavljanjem izbrisat ćete svoje preferencije i postavke.',reset:'Ponovno postavljanje',reset_short:'Ponovno postavljanje',profileSettingsDesc:'Odaberite profil koji želite<br>konfigurirati',cleanup_5_desc:'Stavite spremnik od 600 ml ispod<br>mlaznica',cleanup_9_desc:'Čišćenje dovršeno',cleanup_6_desc:'U tijeku je čišćenje, <br>preostalo <span class="cd">-</span> min',cleanup_7_desc:'Ispraznite spremnik',cleanup_8_desc:'Ispraznite podložak za kapanje',cleanup_3_desc:'Napunite spremnik za vodu ',cleanup_4_desc:'Otvorite poklopac i stavite tabletu<br>za čišćenje u otvor<br>',cleanup_1_desc:'Potrebne su tablete za<br>čišćenje XS3000.<br>Procijenjeno trajanje: 13 minuta ',descaling:'Uklanjanje kamenca',autoRinseDesc:'Pokrenite ciklus ispiranja pri<br>svakom pokretanju',coffeeRinse:'Ispiranje kave',coffeeRinse_short:'Ispiranje kave',care:'Održavanje uređaja',standardCoffee:'Obična kava',greasyCoffee:'Masna kava',cleanup_2_desc:'Ispraznite dva spremnika',pleaseWait:'Pričekajte...',hourShort:'h',minuteShort:'min',selectDrink:'Odaberite svoj napitak',preheat:'Zagrijavanje',cafe:'Kava u radu',foaming:'pjenjenje mlijeka',hotwater:'vruća voda',seqCanceled:'Priprema napitka zaustavljena',week:'tjedan',weekend:'vikend',morning:'jutro',lunch:'podne',dinner:'večer',light:'lagana',strong:'jaka',short:'kratka',long:'duga',none:'ništa',sweet:'glatko',programDesc:'Postavi autom. uklj.',cleanup:'Čišćenje',descaling_short:'Uklanjanje kamenca',filter:'Filtar',milkRinse:'Ispiranje mlijeka',milkRinse_short:'Ispiranje mlijeka',milkAccClean:'Čišćenje pribora za mlijeko',milkAccClean_short:'Čišćenje pribora za mlijeko',help_fav:'Kako stvoriti i upravljati favoritima',help_service:'Kako održavati vaš uređaj',help_recipe:'Kako pripremiti napitke',videos:'% videozapisa',roundsDesc:'Broj ciklusa',teaRinse:'Prethodno ispiranje čaja',teaRinse_short:'Prethodno ispiranje čaja',profile:'Profil',addToFavs:'Dodajte u favorite',calendarMonths:'Sij;Velj;Ožu;Tra;Svi;Lip;Srp;Kol;Ruj;Lis;Stu;Pro',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	it:{display:'Italiano',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Schiuma di latte',caffelatte:'Cafe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Caffè lungo',americano:'Americano',thevert:'Tè verde',thenoir:'Tè nero',lattemacchiato:'Latte macchiato',infusion:'Infuso',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Schiuma di latte',caffelatte_short:'Cafe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Caffè lungo',americano_short:'Americano',thevert_short:'Tè verde',thenoir_short:'Tè nero',lattemacchiato_short:'L.Macchiato',infusion_short:'Infuso',profileSettings:'Impostazioni profilo',profileSettings_short:'Impostazioni profilo',setups:'Regolazioni',informations:'Informazioni',ml:'ml',oz:'oz',sec:'s',yes:'Sì',no:'No',ok:'OK',beforeThxs:'La bevanda <BOLD>',afterThxs:'</BOLD> è stata aggiunta al tuo profilo',drink:'Bevande',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Aggiungi bevanda',chooseColor:'Scegli il tuo colore',typeYourName:'Inserisci il tuo nome',next:'AVANTI',finnished:'FINE',color:'Colore',firstName:'Nome',display:'Display',display_short:'Display',planning:'Programma ',slider:'SLIDER',tiles:'MOSAICO',on:'ON',off:'OFF',displayDesc:'Bevanda',deviceLightDesc:'Attiva la guida all\'illuminazione',selectKeyword:'Scegli una parola chiave',enjoy:'Pronto!',coffeeTemp:'Temperatura del caffè',coffeeTemp_short:'Caffè temperatura',teaTemp:'Temperatura del tè',teaTemp_short:'Tè temperatura',waterTemp:'Temperatura dell\'acqua',waterTemp_short:'Acqua temperatura',tempDesc:'Scegli la temperatura',selectYourProfile:'Seleziona il tuo profilo',start:'Avvio',stop:'Stop',remains:'(%s caratteri rimanenti)',date:'Data',settings:'Impostazioni',help:'Guida e tutorial',language:'Lingua',dateTime:'Data/ora',dateTime_short:'Data/ora',dateTimeDesc:'Data/ora',deviceLight_short:'Luce',deviceLight:'Luce',autoOff:'Arresto automatico',autoOff_short:'Spegnimento Automatico',volUnity:'Unità volume',volUnity_short:'Volume unità',autoRinse:'Automatico risciacquo',autoRinse_short:'Automatico risciacquo',waterHardness:'Durezza dell\'acqua',waterHardness_short:'Acqua durezza',backLightDesc:'Regola la retroilluminazione',screenLight:'Luminosità dello schermo',screenLight_short:'Schermo luminosità',afterInactivity:'Se inattivo per:',waterHardnessDesc:'Regola la durezza dell\'acqua ',cafeTypDesc:'Seleziona il tipo di chicco ',cafeTyp:'Tipo di caffè',cafeTyp_short:'caffè tipo',moreInfos:'Ulteriori informazioni',VolUnitDesc:'Scegli l\'unità di visualizzazione <wbr>del volume',resetDesc:'La reimpostazione eliminerà le preferenze e le impostazioni.',reset:'prodotto reimposta',reset_short:'prodotto reimposta',profileSettingsDesc:'Seleziona il profilo da configurare<br>',cleanup_5_desc:'Posiziona un contenitore <br>da 600 ml sotto gli ugelli',cleanup_9_desc:'Pulizia completata',cleanup_6_desc:'Pulizia in corso, <br><span class="cd">-</span> minuti rimanenti',cleanup_7_desc:'Svuota il contenitore',cleanup_8_desc:'Svuota il vassoio raccogligocce',cleanup_3_desc:'Riempi il serbatoio dell\'acqua ',cleanup_4_desc:'Apri il coperchio e inserisci <br>una pastiglia per la pulizia <br>nel piano inclinato',cleanup_1_desc:'Utilizza una pastiglia <br>per la pulizia XS3000.<br>Durata stimata: 13 minuti ',descaling:'Decalci<wbr>ficazione',autoRinseDesc:'Attiva un ciclo <br>di risciacquo a ogni avvio',coffeeRinse:'Risciacquo del caffè',coffeeRinse_short:'Risciacquo del caffè',care:'Manutenzione della macchina',standardCoffee:'Caffè normale',greasyCoffee:'Caffè oleoso',cleanup_2_desc:'Svuota i 2 contenitori',pleaseWait:'Attendi...',hourShort:'h',minuteShort:'min.',selectDrink:'Scegli la tua bevanda',preheat:'preriscaldamento',cafe:'preparazione caffè ',foaming:'schiumatura latte',hotwater:'acqua calda',seqCanceled:'Stop preparazione',week:'settimana',weekend:'week-end',morning:'mattina',lunch:'mezzogiorno',dinner:'sera',light:'leggero',strong:'forte',short:'ristretto',long:'lungo',none:'nessuno',sweet:'liscio',programDesc:'Imposta l\'accensione automatica',cleanup:'Pulizia',descaling_short:'Decalcificazione',filter:'Filtro',milkRinse:'Risciacquo del latte',milkRinse_short:'Risciacquo del latte',milkAccClean:'Pulizia acc. latte',milkAccClean_short:'Pulizia acc. latte',help_fav:'Come creare e gestire i preferiti',help_service:'Come eseguire la manutenzione della macchina',help_recipe:'Come preparare le bevande',videos:'%s video',roundsDesc:'Numero di cicli',teaRinse:'Prerisciacquo del tè',teaRinse_short:'Prerisciacquo del tè',profile:'Profilo',addToFavs:'Aggiungi ai preferiti',calendarMonths:'Gen;Feb;Mar;Apr;Mag;Giu;Lug;Ago;Set;Ott;Nov;Dic',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	hu:{display:'Magyar',strings:{espresso:'Eszpresszó',cappucino:'Cappuccino',laitmousse:'Tejhab',caffelatte:'Cafe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Hosszú kávé',americano:'Americano',thevert:'Zöld tea',thenoir:'Fekete tea',lattemacchiato:'Latte macchiato',infusion:'Gyógynöv.tea',espresso_short:'Eszpresszó',cappucino_short:'Cappuccino',laitmousse_short:'Tejhab',caffelatte_short:'Cafe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Hosszú kávé',americano_short:'Americano',thevert_short:'Zöld tea',thenoir_short:'Fekete tea',lattemacchiato_short:'L.Macchiato',infusion_short:'Gyógynöv.tea',profileSettings:'Profil<wbr>beállítások',profileSettings_short:'Profil beállítása',setups:'Beállítások',informations:'Információk',ml:'ml',oz:'oz',sec:'mp',yes:'Igen',no:'Nem',ok:'OK',beforeThxs:'Az Ön <BOLD>',afterThxs:'</BOLD> itala bekerült a profiljába!',drink:'Italok',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Ital hozzáadása',chooseColor:'Válasszon színt',typeYourName:'Adja meg a nevét',next:'TOVÁBB',finnished:'KÉSZ',color:'Szín',firstName:'Név',display:'Kijelző',display_short:'Kijelző',planning:'Programozás ',slider:'CSÚSZKA',tiles:'MOZAIK',on:'BE',off:'KI',displayDesc:'Ital',deviceLightDesc:'Fényjelzéses útmutatás aktiválása',selectKeyword:'Kulcsszó kiválasztása',enjoy:'Egészségére!',coffeeTemp:'Kávé hőmérséklete',coffeeTemp_short:'Kávé hőmérséklete',teaTemp:'Tea hőmérséklete',teaTemp_short:'Tea hőmérséklete',waterTemp:'Víz hőmérséklete',waterTemp_short:'Víz hőmérséklete',tempDesc:'Hőmérséklet kiválasztása',selectYourProfile:'Profil kiválasztása',start:'Indítás',stop:'Leállítás',remains:'(%s karakter maradt)',date:'Dátum',settings:'Beállítások',help:'Súgó és oktatóanyagok',language:'Nyelv',dateTime:'Dátum/Idő',dateTime_short:'Dátum<wbr>/Idő',dateTimeDesc:'Dátum/Idő',deviceLight_short:'Fény',deviceLight:'Fény',autoOff:'Automatikus leállítás',autoOff_short:'Automatikus kikapcsolás',volUnity:'Térfogat mértékegysége',volUnity_short:'Térfogat mértékegység',autoRinse:'Automatikus öblítés',autoRinse_short:'Automatikus öblítés',waterHardness:'Vízkeménység',waterHardness_short:'Víz keménysége',backLightDesc:'Háttérvilágítás beállítása',screenLight:'Képernyő fényereje',screenLight_short:'Képernyő fényereje',afterInactivity:'Ha alapjáraton van:',waterHardnessDesc:'Vízkeménység módosítása ',cafeTypDesc:'Kávébab típusának kiválasztása ',cafeTyp:'Kávé típusa',cafeTyp_short:'kávé típus',moreInfos:'További információk',VolUnitDesc:'Válassza ki a térfogat <wbr>mértékegységét',resetDesc:'A visszaállítás az Ön valamennyi beállítását törölni fogja.',reset:'Termék visszaállítás',reset_short:'Termék visszaállítás',profileSettingsDesc:'Konfigurálandó profil kiválasztása<br>',cleanup_5_desc:'Helyezzen egy 600 ml-es<br>tartályt a fúvókák alá',cleanup_9_desc:'Tisztítás kész',cleanup_6_desc:'Tisztítás folyamatban,<br><span class="cd">-</span> perc van hátra',cleanup_7_desc:'Ürítse ki a tartályt',cleanup_8_desc:'Ürítse ki a csepegtető tálcát',cleanup_3_desc:'Töltse fel a víztartályt ',cleanup_4_desc:'Nyissa fel a fedelet, és helyezzen<br>egy tisztítótablettát a garatba<br>',cleanup_1_desc:'XS3000 tisztítótabletta szükséges.<br><br>Becsült időtartam: 13 perc ',descaling:'Vízkőmen<wbr>tesítés',autoRinseDesc:'Minden indításkor indítson el<br>egy öblítési ciklust',coffeeRinse:'Kávéöblítés',coffeeRinse_short:'Kávéöblítés',care:'Készülék karbantartása',standardCoffee:'Normál kávé',greasyCoffee:'Olajos kávé',cleanup_2_desc:'Ürítse ki a 2 tartályt',pleaseWait:'Várjon...',hourShort:'óra',minuteShort:'perc',selectDrink:'Válasszon italt',preheat:'előmelegítés',cafe:'Kávékészítés…',foaming:'tejhabosítás',hotwater:'forró víz',seqCanceled:'Italkészítés leállt',week:'hét',weekend:'hétvége',morning:'reggel',lunch:'dél',dinner:'este',light:'gyenge',strong:'erős',short:'rövid',long:'hosszú',none:'nincs',sweet:'selymes',programDesc:'Automatikus bekapcsolás beállítása',cleanup:'Tisztítás',descaling_short:'Vízkőmentesítés',filter:'Szűrő',milkRinse:'Tejöblítés',milkRinse_short:'Tejöblítés',milkAccClean:'Tejadagoló tart. tisztítása',milkAccClean_short:'Tejadagoló tart. tisztítása',help_fav:'Hogyan hozza létre és kezelje a kedvenceit',help_service:'Hogyan tartsa karban a készülékét',help_recipe:'Hogyan készítse el italait',videos:'%s videó',roundsDesc:'Ciklusok száma',teaRinse:'Tea előöblítés',teaRinse_short:'Tea előöblítés',profile:'Profil',addToFavs:'Hozzáadás a kedvencekhez',calendarMonths:'Jan;Feb;Márc;Ápr;Máj;Jún;Júl;Aug;Szept;Okt;Nov;Dec',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	nl:{display:'Nederlands',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Melkschuim',caffelatte:'Cafe latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Koffie',americano:'Americano',thevert:'Groene thee',thenoir:'Zwarte thee',lattemacchiato:'Latte macchiato',infusion:'Kruidenthee',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Melkschuim',caffelatte_short:'Cafe latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Koffie',americano_short:'Americano',thevert_short:'Groene thee',thenoir_short:'Zwarte thee',lattemacchiato_short:'L.Macchiato',infusion_short:'Kruidenthee',profileSettings:'Profiel settings',profileSettings_short:'Profiel settings',setups:'Aanpassingen',informations:'Informatie',ml:'ml',oz:'oz',sec:'s',yes:'Ja',no:'Nee',ok:'OK',beforeThxs:'Uw drankje <BOLD>',afterThxs:'</BOLD> is toegevoegd aan uw profiel!',drink:'Drankjes',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Voeg een drankje toe',chooseColor:'Kies uw kleur',typeYourName:'Voer uw naam in',next:'VOLGENDE',finnished:'VOLTOOIEN',color:'Kleur',firstName:'Naam',display:'Weergave',display_short:'Weergave',planning:'Programmeren ',slider:'SCHUIFKNOP',tiles:'MOZAÏEK',on:'AAN',off:'UIT',displayDesc:'Drankje',deviceLightDesc:'Activeer de lichtindicatoren',selectKeyword:'Kies een trefwoord',enjoy:'Geniet!',coffeeTemp:'Koffietemperatuur',coffeeTemp_short:'Koffie temperatuur',teaTemp:'Theetemperatuur',teaTemp_short:'Thee temperatuur',waterTemp:'Watertemperatuur',waterTemp_short:'Water temperatuur',tempDesc:'Kies de temperatuur',selectYourProfile:'Selecteer uw profiel',start:'Starten',stop:'Stoppen',remains:'(%s tekens resterend)',date:'Datum',settings:'Instellingen',help:'Hulp en handleidingen',language:'Taal',dateTime:'Datum/tijd',dateTime_short:'Datum/tijd',dateTimeDesc:'Datum/tijd',deviceLight_short:'Verlichting',deviceLight:'Verlichting',autoOff:'Automatisch stoppen',autoOff_short:'Automatisch uitschakelen',volUnity:'Volume-eenheid',volUnity_short:'Volume eenheid',autoRinse:'Automatisch spoelen',autoRinse_short:'Automatisch spoelen',waterHardness:'Waterhardheid',waterHardness_short:'Water hardheid',backLightDesc:'De schermverlichting <wbr>aanpassen',screenLight:'Helderheid scherm',afterInactivity:'Indien inactief gedurende:',waterHardnessDesc:'Pas de waterhardheid aan ',cafeTypDesc:'Selecteer het type boon ',cafeTyp:'Koffietype',cafeTyp_short:'koffie type',moreInfos:'Meer informatie',VolUnitDesc:'Kies de volume-eenheid',resetDesc:'Als u een reset uitvoert, worden uw  voorkeuren en instellingen ',reset:'Product reset',reset_short:'Product reset',profileSettingsDesc:'Selecteer het profiel dat u <br>wilt configureren',cleanup_5_desc:'Plaats een reservoir <br>van 600 ml onder de koffie-uitloop',cleanup_9_desc:'Reinigen voltooid',cleanup_6_desc:'Bezig met reinigen, <br><span class="cd">-</span> minuten resterend',cleanup_7_desc:'Leeg het reservoir',cleanup_8_desc:'Leeg de lekbak',cleanup_3_desc:'Vul het waterreservoir ',cleanup_4_desc:'Open de klep en plaats een <br>reinigingstablet in de trechter<br>',cleanup_1_desc:'Een XS3000-reinigingstablet <br>is vereist.<br>Geschatte duur: 13 minuten ',descaling:'Ontkalken',autoRinseDesc:'Start een spoelcyclus <br>bij elke start',coffeeRinse:'Koffiespoelbeurt',coffeeRinse_short:'Koffie<wbr>spoelbeurt',care:'Onderhoud van de machine',standardCoffee:'Normale koffie',greasyCoffee:'Vette koffie',cleanup_2_desc:'Leeg de twee reservoirs',pleaseWait:'Een ogenblik geduld...',hourShort:'uur',minuteShort:'min.',selectDrink:'Kies uw drankje',preheat:'voorverwarmen',cafe:'koffie wordt bereid ',foaming:'melk opschuimen',hotwater:'heet water',seqCanceled:'Drankje gestopt',week:'week',weekend:'weekend',morning:'ochtend',lunch:'middag',dinner:'avond',light:'slap',strong:'sterk',short:'kort',long:'lang',none:'geen',sweet:'vettig',programDesc:'Zet de functie voor automatisch inschakelen aan',cleanup:'Reinigen',descaling_short:'Ontkalken',filter:'Filter',milkRinse:'Melkspoelbeurt',milkRinse_short:'Melk<wbr>spoelbeurt',milkAccClean:'Melkaccessoire reinigen',milkAccClean_short:'Melkaccessoire reinigen',help_fav:'Hoe maak en beheer ik mijn favorieten?',help_service:'Hoe onderhoud ik mijn machine?',help_recipe:'Drankjes maken',videos:'%s-video\'s',roundsDesc:'Aantal cycli',teaRinse:'Voorspoelen voor thee',teaRinse_short:'Voorspoelen voor thee',profile:'Profiel',addToFavs:'Voeg toe aan favorieten',calendarMonths:'Jan;Feb;Mrt;Apr;Mei;Jun;Jul;Aug;Sep;Okt;Nov;Dec',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	no:{display:'Norsk',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Skummet melk',caffelatte:'Kaffe latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Lang kaffe',americano:'Americano',thevert:'Grønn te',thenoir:'Svart te',lattemacchiato:'Latte macchiato',infusion:'Urtete',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Skummet melk',caffelatte_short:'Kaffe latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Lang kaffe',americano_short:'Americano',thevert_short:'Grønn te',thenoir_short:'Svart te',lattemacchiato_short:'L.Macchiato',infusion_short:'Urtete',profileSettings:'Profilinnstillinger',profileSettings_short:'Profil<wbr>innstillinger',setups:'Justeringer',informations:'Informasjon',ml:'ml',oz:'oz',sec:'s',yes:'Ja',no:'Nei',ok:'OK',beforeThxs:'Drikken din <BOLD> ',afterThxs:'</BOLD> har blitt lagt til i profilen din!',drink:'Drikker',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Legg til drikk',chooseColor:'Velg farge',typeYourName:'Skriv inn navnet ditt',next:'NESTE',finnished:'FULLFØR',color:'Farge',firstName:'Navn',display:'Skjerm',display_short:'Skjerm',planning:'Programmering ',slider:'BRYTER',tiles:'MOSAIKK',on:'PÅ',off:'AV',displayDesc:'Drikk',deviceLightDesc:'Aktiver lysveiledningen',selectKeyword:'Velg et nøkkelord',enjoy:'Nyt!',coffeeTemp:'Kaffetemperatur',coffeeTemp_short:'Kaffe temperatur',teaTemp:'Tetemperatur',teaTemp_short:'Te temperatur',waterTemp:'Vanntemperatur',waterTemp_short:'Vann temperatur',tempDesc:'Velg temperatur',selectYourProfile:'Velg profil',start:'Start',stop:'Stopp',remains:'(% tegn gjenstår)',date:'Dato',settings:'Innstillinger',help:'Hjelp og opplæring',language:'Språk',dateTime:'Dato/klokkeslett',dateTime_short:'Dato<wbr>/klokkeslett',dateTimeDesc:'Dato/klokkeslett',deviceLight_short:'Lys',deviceLight:'Lys',autoOff:'Automatisk stopp',autoOff_short:'Auto av',volUnity:'Volumenhet',volUnity_short:'Volum enhet',autoRinse:'Auto skylling',autoRinse_short:'Auto skylling',waterHardness:'Vannhardhet',waterHardness_short:'Vann hardhet',backLightDesc:'Juster<wbr>bakgrunnsbelysningen',screenLight:'Lysstyrke på skjermen',screenLight_short:'Skjerm- lysstyrke',afterInactivity:'Når den har vært inaktiv i:',waterHardnessDesc:'Juster vannhardheten ',cafeTypDesc:'Velg bønnetype ',cafeTyp:'Kaffetype',cafeTyp_short:'kaffe type',moreInfos:'Mer informasjon',VolUnitDesc:'Velg volumvisningsenhet',resetDesc:'Preferansene og innstillingene dine slettes hvis du tilbakestiller. ',reset:'Produkt tilbakestill',reset_short:'Produkt tilbakestill',profileSettingsDesc:'Velg profilen du vil konfigurere<br>',cleanup_5_desc:'Plasser en beholder på <br>600 ml under dysene',cleanup_9_desc:'Rengjøring fullført',cleanup_6_desc:'Rengjøring pågår,<br><span class="cd">-</span> minutter gjenstår',cleanup_7_desc:'Tøm beholderen',cleanup_8_desc:'Tøm dryppbrettet',cleanup_3_desc:'Fyll vanntanken ',cleanup_4_desc:'Åpne dekselet og sett en <br>rengjøringstablett inn i sjakten<br>',cleanup_1_desc:'Bruk en XS3000-rengjøringstablett.<br><br>Beregnet varighet: 13 minutter ',descaling:'Avkalking',autoRinseDesc:'Start en skyllesyklus ved <br>hver oppstart',coffeeRinse:'Kaffeskylling',coffeeRinse_short:'Kaffe<wbr>skylling',care:'Vedlikehold av maskinen',standardCoffee:'Vanlig kaffe',greasyCoffee:'Oljete kaffe',cleanup_2_desc:'Tøm de to beholderne',pleaseWait:'Vent litt ...',hourShort:'t',minuteShort:'min',selectDrink:'Velg drikk',preheat:'forvarming',cafe:'kaffe tilberedes ',foaming:'melkeskumming',hotwater:'varmt vann',seqCanceled:'Drikken stoppet',week:'uke',weekend:'helg',morning:'morgen',lunch:'ettermiddag',dinner:'kveld',light:'lys',strong:'sterk',short:'kort',long:'lang',none:'ingen',sweet:'jevn',programDesc:'Angi auto på',cleanup:'Rengjøring',descaling_short:'Avkalking',filter:'Filter',milkRinse:'Melkeskylling',milkRinse_short:'Melke<wbr>skylling',milkAccClean:'Rengjøring av melkeutstyr med rensetabletter',milkAccClean_short:'Rengjøring av melkeutstyr med rensetabletter',help_fav:'Slik lager og administrerer du favorittene dine',help_service:'Slik vedlikeholder du maskinen',help_recipe:'Slik lager du drikker',videos:'%s videoer',roundsDesc:'Antall sykluser',teaRinse:'Forhåndsskylling av te',teaRinse_short:'Forhåndsskyll<wbr>ing av te',profile:'Profil',addToFavs:'Legg til i favoritter',calendarMonths:'Jan;Feb;Mar;Apr;Mai;Jun;Jul;Aug;Sep;Okt;Nov;Des',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	pl:{display:'Polski',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Spienione mleko',caffelatte:'Caffe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Duża kawa',americano:'Americano',thevert:'Zielona herb.',thenoir:'Czarna herbata',lattemacchiato:'Latte macchiato',infusion:'Herb. ziołowa',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Spienione mleko',caffelatte_short:'Caffe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Duża kawa',americano_short:'Americano',thevert_short:'Zielona herb.',thenoir_short:'Czarna herbata',lattemacchiato_short:'L.Macchiato',infusion_short:'Herb. ziołowa',profileSettings:'Ustawienia profilu',profileSettings_short:'Ustawienia profilu',setups:'Personalizacja',informations:'Informacje',ml:'ml',oz:'oz',sec:'s',yes:'Tak',no:'Nie',ok:'OK',beforeThxs:'Napój został dodany <BOLD>',afterThxs:'do </BOLD> Twojego profilu!',drink:'Napoje',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Dodaj napój',chooseColor:'Wybierz kolor',typeYourName:'Wprowadź nazwę',next:'DALEJ',finnished:'ZAKOŃCZ',color:'Kolor',firstName:'Nazwa',display:'Wyświetlacz',display_short:'Wyświetlacz',planning:'Programowanie ',slider:'SLIDER',tiles:'KAFELKI',on:'ON',off:'OFF',displayDesc:'Wygląd',deviceLightDesc:'Włącz nawigację za pomocą podświetlenia',selectKeyword:'Wybierz słowo kluczowe',enjoy:'Smacznego!',coffeeTemp:'Temperatura kawy',coffeeTemp_short:'Temperatura kawy',teaTemp:'Temperatura herbaty',teaTemp_short:'Temperatura herbaty',waterTemp:'Temperatura wody',waterTemp_short:'Temperatura wody',tempDesc:'Wybierz temperaturę',selectYourProfile:'Wybierz swój profil',start:'Rozpocznij',stop:'Zatrzymaj',remains:'(pozostało znaków: %s)',date:'Data',settings:'Ustawienia',help:'Pomoc i samouczki',language:'Język',dateTime:'Data/godzina',dateTime_short:'Data<wbr>/godzina',dateTimeDesc:'Data/godzina',deviceLight_short:'Światło',deviceLight:'Światło',autoOff:'Automatyczne zatrzymanie',autoOff_short:'Automatyczne wyłączanie',volUnity:'Jednostka objętości',volUnity_short:'Jednostka objętości',autoRinse:'Automatyczne płukanie',autoRinse_short:'Automatyczne płukanie',waterHardness:'Twardość wody',waterHardness_short:'Twardość wody',backLightDesc:'Dostosuj podświetlenie',screenLight:'Jasność ekranu',screenLight_short:'Jasność wyświetlacza',afterInactivity:'Gdy bezczynny przez:',waterHardnessDesc:'Dostosuj twardość wody ',cafeTypDesc:'Wybierz typ ziarna ',cafeTyp:'Rodzaj kawy',cafeTyp_short:'typ kawy',moreInfos:'Więcej informacji',VolUnitDesc:'Wybierz jednostkę wyświetlania <wbr>objętości',resetDesc:'Zresetowanie spowoduje usunięcie preferencji i ustawień.',reset:'Resetowanie produktu',reset_short:'Resetowanie produktu',profileSettingsDesc:'Wybierz profil, który chcesz<br>skonfigurować',cleanup_5_desc:'Umieść pojemnik o pojemności<br>600 ml pod dyszą',cleanup_9_desc:'Czyszczenie zakończone',cleanup_6_desc:'Trwa czyszczenie, <br>pozostało minut: <span class="cd">-</span>',cleanup_7_desc:'Opróżnij pojemnik',cleanup_8_desc:'Opróżnij tackę ociekową',cleanup_3_desc:'Napełnij zbiornik na wodę ',cleanup_4_desc:'Otwórz pokrywę i włóż tabletkę<br>czyszczącą do odpowiedniego otworu<br>',cleanup_1_desc:'Wymagana jest tabletka<br>czyszcząca XS3000.<br>Szacowany czas trwania: 13 min. ',descaling:'Usuwanie kamienia',autoRinseDesc:'Uruchom cykl płukania przy każdym uruchomieniu<br>',coffeeRinse:'Płukanie przewodu',coffeeRinse_short:'Płukanie przewodu',care:'Konserwacja maszyny',standardCoffee:'Zwykła kawa',greasyCoffee:'Ziarna oleiste',cleanup_2_desc:'Opróżnij oba zbiorniki',pleaseWait:'Proszę czekać...',hourShort:'godz.',minuteShort:'min',selectDrink:'Wybierz napój',preheat:'nagrzewanie wstępne',cafe:'Przygotowanie kawy',foaming:'spienianie mleka',hotwater:'gorąca woda',seqCanceled:'Zatrzymano napój',week:'tydzień',weekend:'weekend',morning:'rano',lunch:'południe',dinner:'wieczór',light:'podświetlenie',strong:'mocna',short:'mała',long:'duża',none:'brak',sweet:'gładka',programDesc:'Ustaw automatyczne włączenie',cleanup:'Czyszczenie',descaling_short:'Usuwanie kamienia',filter:'Filtr',milkRinse:'Płukanie wężyka do mleka',milkRinse_short:'Płukanie wężyka do mleka',milkAccClean:'Czyszczenie akcesorium do mleka',milkAccClean_short:'Czyszczenie akcesorium do mleka',help_fav:'Jak tworzyć ulubione napoje i nimi zarządzać?',help_service:'Jak zadbać o maszynę?',help_recipe:'Jak przygotować napój?',videos:'filmy: %s',roundsDesc:'Liczba cykli',teaRinse:'Wstępne płukanie',teaRinse_short:'Wstępne płukanie',profile:'Profil',addToFavs:'Dodaj do ulubionych',calendarMonths:'sty;lut;mar;kwi;maj;cze;lip;sie;wrz;paź;lis;gru',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	pt:{display:'Português',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Espuma de leite',caffelatte:'Cafe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Café longo',americano:'Americano',thevert:'Chá verde',thenoir:'Chá preto',lattemacchiato:'Latte Macchiato',infusion:'Chá de ervas',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Espuma de leite',caffelatte_short:'Cafe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Café longo',americano_short:'Americano',thevert_short:'Chá verde',thenoir_short:'Chá preto',lattemacchiato_short:'L.Macchiato',infusion_short:'Chá de ervas',profileSettings:'Definições de perfil',profileSettings_short:'Definições de perfil',setups:'Ajustes',informations:'Informação',ml:'ml',oz:'oz',sec:'s',yes:'Sim',no:'Não',ok:'OK',beforeThxs:'A bebida <BOLD>',afterThxs:'</BOLD> foi adicionada ao seu perfil!',drink:'Bebidas',emacchiato:'E. Macchiato',emacchiato_short:'E. Macchiato',addDrink:'Adicionar bebida',chooseColor:'Escolha a sua cor',typeYourName:'Introduza o seu nome',next:'SEGUINTE',finnished:'TERMINAR',color:'Cor',firstName:'Nome',display:'Ecrã',display_short:'Ecrã',planning:'Programação ',slider:'ROTATIVO',tiles:'MOSAICO',on:'ON',off:'OFF',displayDesc:'Bebida',deviceLightDesc:'Ativar o guia luminoso',selectKeyword:'Escolha uma palavra-chave',enjoy:'Desfrute!',coffeeTemp:'Temperatura do café',coffeeTemp_short:'Café temperatura',teaTemp:'Temperatura do chá',teaTemp_short:'Chá temperatura',waterTemp:'Temperatura da água',waterTemp_short:'Água temperatura',tempDesc:'Escolher temperatura',selectYourProfile:'Selecionar o seu perfil',start:'Iniciar',stop:'Parar',remains:'(restam %s carateres)',date:'Data',settings:'Definições',help:'Ajuda e tutoriais',language:'Idioma',dateTime:'Data/Hora',dateTime_short:'Data/Hora',dateTimeDesc:'Data/Hora',deviceLight_short:'Luz',deviceLight:'Luz',autoOff:'Parar automático',autoOff_short:'Desligar automático',volUnity:'Unidade de volume',volUnity_short:'Unidade de volume',autoRinse:'Enxaguamento automático',autoRinse_short:'Enxaguamento automático',waterHardness:'Dureza da água',waterHardness_short:'Dureza da água',backLightDesc:'Ajustar a luz de fundo',screenLight:'Luminosidade do ecrã',screenLight_short:'Brilho do ecrã',afterInactivity:'Quando inativo para:',waterHardnessDesc:'Ajustar dureza da água ',cafeTypDesc:'Selecionar tipo de grão ',cafeTyp:'Tipo de café',cafeTyp_short:'Tipo de café',moreInfos:'Mais informação',VolUnitDesc:'Escolha a unidadede <wbr>volume apresentada',resetDesc:'A reposição irá eliminar as suas preferências e definições.',reset:'Reposição de produto',reset_short:'Reposição de produto',profileSettingsDesc:'Selecione o perfil a configurar<br>',cleanup_5_desc:'Coloque um recipientede <br>600 ml por baixo das saídas de café',cleanup_9_desc:'Limpeza concluída',cleanup_6_desc:'Limpeza em curso,<br>restam <span class="cd">-</span> minutos',cleanup_7_desc:'Esvazie o recipiente',cleanup_8_desc:'Esvazie a gaveta de recolha de pingos',cleanup_3_desc:'Encha o reservatório de água ',cleanup_4_desc:'Abra a tampa e insira uma pastilha<br>de limpeza no compartimento<br>',cleanup_1_desc:'É necessária uma pastilha<br>de limpeza XS3000.<br>Duração prevista: 13 minutos ',descaling:'Descalci<wbr>ficação',autoRinseDesc:'Iniciar um ciclo de enxaguamento<br>a cada colocação em funcionamento',coffeeRinse:'Enxaguamento do café',coffeeRinse_short:'Enxaguamento do café',care:'Manutenção da máquina',standardCoffee:'Café normal',greasyCoffee:'Café oleoso',cleanup_2_desc:'Esvazie os dois recipientes',pleaseWait:'Aguarde...',hourShort:'hr',minuteShort:'min.',selectDrink:'Escolha a sua bebida',preheat:'pré-aquecimento',cafe:'do café em curso ',foaming:'espuma de leite',hotwater:'água quente',seqCanceled:'A bebida parou',week:'semana',weekend:'fim de semana',morning:'manhã',lunch:'meio-dia',dinner:'noite',light:'luz',strong:'forte',short:'curto',long:'longo',none:'nenhum',sweet:'suave',programDesc:'Definir ligar automático',cleanup:'Limpeza',descaling_short:'Descalcificação',filter:'Filtro',milkRinse:'Enxaguamento do leite',milkRinse_short:'Enxagua. do leite',milkAccClean:'Limpeza acess leite',milkAccClean_short:'Limpeza acess leite',help_fav:'Como criar e gerir os seus favoritos',help_service:'Como efetuar a manutenção da máquina',help_recipe:'Como preparar as suas bebidas',videos:'%s vídeos',roundsDesc:'Número de ciclos',teaRinse:'Pré-enxaguamento do chá',teaRinse_short:'Pré-enxaguamento do chá',profile:'Perfil',addToFavs:'Adicionar aos favoritos',calendarMonths:'Jan;Fev;Mar;Abr;Mai;Jun;Jul;Ago;Set;Out;Nov;Dez',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	ro:{display:'Română',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Spumă din lapte',caffelatte:'Cafe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Cafea lungă',americano:'Americano',thevert:'Ceai verde',thenoir:'Ceai negru',lattemacchiato:'Latte macchiato',infusion:'Ceai din plante',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Spumă din lapte',caffelatte_short:'Cafe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Cafea lungă',americano_short:'Americano',thevert_short:'Ceai verde',thenoir_short:'Ceai negru',lattemacchiato_short:'L. macchiato',infusion_short:'Ceai din plante',profileSettings:'Setări profil',profileSettings_short:'Set. profil',setups:'Reglări',informations:'Informații',ml:'ml',oz:'oz',sec:'s',yes:'Da',no:'Nu',ok:'OK',beforeThxs:'Băutura <BOLD>',afterThxs:'</BOLD> a fost adăugată la profilul dvs.!',drink:'Băuturi',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Adăugați băutură',chooseColor:'Alegeți o culoare',typeYourName:'Introduceți numele',next:'URMĂTOR',finnished:'FINALIZARE',color:'Culoare',firstName:'Nume',display:'Afișaj',display_short:'Afișaj',planning:'Programare ',slider:'CURSOR',tiles:'MOZAIC',on:'PORNIRE',off:'OPRIRE',displayDesc:'Prezentare',deviceLightDesc:'Activare ghid luminos',selectKeyword:'Alegeți un cuvânt cheie',enjoy:'Poftă bună!',coffeeTemp:'Temperatură cafea',coffeeTemp_short:'Temperatură cafea',teaTemp:'Temperatură ceai',teaTemp_short:'Temperatură ceai',waterTemp:'Temperatură apă',waterTemp_short:'Temperatură apă',tempDesc:'Alegeți temperatura',selectYourProfile:'Selectați-vă profilul',start:'Start',stop:'Stop',remains:'(%s caractere rămase)',date:'Dată',settings:'Setări',help:'Ajutor și tutoriale',language:'Limbă',dateTime:'Dată/Oră',dateTime_short:'Dată<wbr>/Oră',dateTimeDesc:'Dată/Oră',deviceLight_short:'Lumină',deviceLight:'Lumină',autoOff:'Oprire automată',autoOff_short:'Oprire automată',volUnity:'Unitate de volum',volUnity_short:'Unitate de volum',autoRinse:'Clătire automată',autoRinse_short:'Clătire automată',waterHardness:'Duritate apă',waterHardness_short:'Duritate apă',backLightDesc:'Reglare lumină de fundal',screenLight:'Luminozitate ecran',screenLight_short:'Luminozitate ecran',afterInactivity:'După o perioadă de inactivitate de:',waterHardnessDesc:'Reglare duritate apă ',cafeTypDesc:'Selectare tip de boabe ',cafeTyp:'Tip de cafea',cafeTyp_short:'Tip de cafea',moreInfos:'Mai multe informații',VolUnitDesc:'Alegeți unitatea de afișare<wbr>a volumului',resetDesc:'Resetarea vă va șterge preferințele și setările.',reset:'Resetare produs',reset_short:'Resetare produs',profileSettingsDesc:'Selectați profilul de configurat<br>',cleanup_5_desc:'Puneți un vas de 600 ml sub duze<br>',cleanup_9_desc:'Curățare finalizată',cleanup_6_desc:'Curățare în curs,<br> <span class="cd">-</span> minute rămase',cleanup_7_desc:'Goliți recipientul',cleanup_8_desc:'Goliți tava de picături',cleanup_3_desc:'Umpleți rezervorul de apă ',cleanup_4_desc:'Deschideți capacul și introduceți<br>o tabletă de curățare în pâlnie<br>',cleanup_1_desc:'Este necesară o tabletă de<br>curățare XS3000.<br>Durată estimată: 13 minute ',descaling:'Eliminarea calcarului',autoRinseDesc:'Lansați un ciclu de clătire<br>la fiecare pornire',coffeeRinse:'Clătire cafea',coffeeRinse_short:'Clătire cafea',care:'Întreținerea aparatului',standardCoffee:'Cafea obișnuită',greasyCoffee:'Cafea uleioasă',cleanup_2_desc:'Goliți cele 2 rezervoare',pleaseWait:'Așteptați...',hourShort:'h',minuteShort:'min.',selectDrink:'Alegeți băutura',preheat:'preîncălzire',cafe:'cafea în curs ',foaming:'spumare lapte',hotwater:'apă caldă',seqCanceled:'Băutura s-a oprit',week:'săptămână',weekend:'weekend',morning:'dimineață',lunch:'prânz',dinner:'seară',light:'slabă',strong:'tare',short:'scurtă',long:'lungă',none:'lipsă',sweet:'fină',programDesc:'Setați pornire auto',cleanup:'Curățare',descaling_short:'Eliminarea calcarului',filter:'Filtru',milkRinse:'Clătire sistem de lapte',milkRinse_short:'Clătire sistem de lapte',milkAccClean:'Curățare acc. lapte',milkAccClean_short:'Curățare acc. lapte',help_fav:'Cum să vă creați și gestionați favoritele',help_service:'Cum să vă întrețineți aparatul',help_recipe:'Cum să vă preparați băuturile',videos:'%s videoclipuri',roundsDesc:'Număr de cicluri',teaRinse:'Preclătire ceai',teaRinse_short:'Preclătire ceai',profile:'Profil',addToFavs:'Adăugare la favorite',calendarMonths:'Ian;Feb;Mar;Apr;Mai;Iun;Iul;Aug;Sept;Oct;Noi;Dec',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	ru:{display:'Русский',strings:{espresso:'Эспрессо',cappucino:'Капучино',laitmousse:'Молочная пена',caffelatte:'Латте',flatwhite:'Флэт уайт',lungo:'Лунго',ristretto:'Ристретто',doppio:'Доппио',cafelong:'Черный кофе',americano:'Американо',thevert:'Зеленый чай',thenoir:'Черный чай',lattemacchiato:'Латт.макиато',infusion:'Травяной чай',espresso_short:'Эспрессо',cappucino_short:'Капучино',laitmousse_short:'Молочная пена',caffelatte_short:'Латте',flatwhite_short:'Флэт уайт',lungo_short:'Лунго',ristretto_short:'Ристретто',doppio_short:'Доппио',cafelong_short:'Черный кофе',americano_short:'Американо',thevert_short:'Зеленый чай',thenoir_short:'Черный чай',lattemacchiato_short:'Латт.макиато',infusion_short:'Травяной чай',profileSettings:'Настройки профиля',profileSettings_short:'Настройки профиля',setups:'Настройки',informations:'Информация',ml:'мл',oz:'унция',sec:'с',yes:'Да',no:'Нет',ok:'OK',beforeThxs:'Напиток <BOLD>',afterThxs:'</BOLD> добавлен в ваш профиль!',drink:'Напитки',emacchiato:'Эспр.макиато',emacchiato_short:'Эспр.макиато',addDrink:'Добавить напиток',chooseColor:'Выберите цвет',typeYourName:'Введите свое имя',next:'ДАЛЕЕ',finnished:'ЗАВЕРШИТЬ',color:'Цвет',firstName:'Имя',display:'Отображение',display_short:'Отображение',planning:'Программирование ',slider:'СЛАЙДЕР',tiles:'МОЗАИКА',on:'ВКЛ.',off:'ВЫКЛ.',displayDesc:'Режим',deviceLightDesc:'Активировать световой индикатор',selectKeyword:'Выберите ключевое слово',enjoy:'Наслаждайтесь!',coffeeTemp:'Температура кофе',coffeeTemp_short:'Температура кофе',teaTemp:'Температура чая',teaTemp_short:'Температура чая',waterTemp:'Температура воды',waterTemp_short:'Температура воды',tempDesc:'Выбрать температуру',selectYourProfile:'Выберите свой профиль',start:'Старт',stop:'Стоп',remains:'(осталось символов: %s)',date:'Дата',settings:'Настройки',help:'Справка и руководства',language:'Язык',dateTime:'Дата/время',dateTime_short:'Дата<wbr>/время',dateTimeDesc:'Дата/время',deviceLight_short:'Световой индикатор',deviceLight:'Световой индикатор',autoOff:'Автоматическая остановка',autoOff_short:'Автовыкл.',volUnity:'Единица измерения объема',volUnity_short:'Единица изм. объема',autoRinse:'Промывка системы кофе',autoRinse_short:'Промывка системы кофе',waterHardness:'Жесткость воды',waterHardness_short:'Жесткость воды',backLightDesc:'Настроить подсветку',screenLight:'Яркость экрана',screenLight_short:'Яркость экрана',afterInactivity:'При простое в течение:',waterHardnessDesc:'Отрегулировать жесткость воды ',cafeTypDesc:'Выбрать тип зерен ',cafeTyp:'Вид кофе',cafeTyp_short:'вид кофе',moreInfos:'Дополнительн. информация',VolUnitDesc:'Выбрать режим отображения<br>единицы измерения объема',resetDesc:'При выполнении сброса будут удалены<br>заданные настройки.',reset:'Сброс настроек',reset_short:'Сброс настроек',profileSettingsDesc:'Выберите профиль для настройки<br>',cleanup_5_desc:'Поместите емкость 600 млпод сопла<br>',cleanup_9_desc:'Очистка завершена',cleanup_6_desc:'Выполняется очистка, <br> осталось <span class="cd">-</span> мин',cleanup_7_desc:'Опустошите контейнер',cleanup_8_desc:'Опустошите поддон для капель',cleanup_3_desc:'Заполните резервуар для воды ',cleanup_4_desc:'Откройте крышку и опустите<br>чистящую таблетку<br>',cleanup_1_desc:'Требуется чистящая таблетка XS3000.<br><br>Предполагаемая продолжительность: 13 мин ',descaling:'Удаление накипи',autoRinseDesc:'Запускайте цикл промывки<br>при каждом использовании',coffeeRinse:'Промывка после приготовления кофе',coffeeRinse_short:'Промывка после приготовления кофе',care:'Техническое обслуживание прибора',standardCoffee:'Обычный кофе',greasyCoffee:'Маслянистый кофе',cleanup_2_desc:'Опустошите 2 контейнера',pleaseWait:'Подождите…',hourShort:'ч',minuteShort:'мин',selectDrink:'Выберите напиток',preheat:'подогрев',cafe:'приготовление кофе ',foaming:'вспенивание молока',hotwater:'горячая вода',seqCanceled:'Приготовлениенапитка остановлено',week:'неделя',weekend:'выходные',morning:'утро',lunch:'полдень',dinner:'вечер',light:'легкий',strong:'крепкий',short:'короткий',long:'длинный',none:'нет',sweet:'мягкий',programDesc:'Задать автоматическое включение',cleanup:'Очистка',descaling_short:'Удаление накипи',filter:'Фильтр',milkRinse:'Промывка после приготовления напитка с молоком',milkRinse_short:'Промывка после приготовления напитка с молоком',milkAccClean:'Очистка молочного блока',milkAccClean_short:'Очистка молочного блока',help_fav:'Как создавать рецепты любимых напитков',help_service:'Как ухаживать за прибором',help_recipe:'Как готовить свои напитки',videos:'%s видео',roundsDesc:'Количество циклов',teaRinse:'Промывка перед приготовлением чая',teaRinse_short:'Промывка перед приготовлением чая',profile:'Профиль',addToFavs:'Добавить в избранное',calendarMonths:'Янв;Фев;Мар;Апр;Май;Июн;Июл;Авг;Сен;Окт;Ноя;Дек',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	fi:{display:'Suomi',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Maitovaahto',caffelatte:'Cafe Latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Long coffee',americano:'Americano',thevert:'Vihreä tee',thenoir:'Musta tee',lattemacchiato:'Latte macchiato',infusion:'Yrttitee',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Maitovaahto',caffelatte_short:'Cafe Latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Long coffee',americano_short:'Americano',thevert_short:'Vihreä tee',thenoir_short:'Musta tee',lattemacchiato_short:'L.Macchiato',infusion_short:'Yrttitee',profileSettings:'Profiiliasetukset',profileSettings_short:'Profiili<wbr>asetukset',setups:'Säädöt',informations:'Tiedot',ml:'ml',oz:'oz',sec:'s',yes:'Kyllä',no:'Ei',ok:'OK',beforeThxs:'Juoma <BOLD> ',afterThxs:'</BOLD> on lisätty profiiliin',drink:'Juomat',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Lisää juoma',chooseColor:'Valitse väri',typeYourName:'Kirjoita nimesi',next:'SEUR.',finnished:'LOPETA',color:'Väri',firstName:'Nimi',display:'Näyttö',display_short:'Näyttö',planning:'Ohjelma ',slider:'LIUKU',tiles:'RUUTU',on:'ON',off:'OFF',displayDesc:'Juoman',deviceLightDesc:'Aktivoi apuvalo',selectKeyword:'Valitse avainsana',enjoy:'Nauti!',coffeeTemp:'Kahvin lämpötila',coffeeTemp_short:'Kahvin lämpötila',teaTemp:'Teen lämpötila',teaTemp_short:'Teen lämpötila',waterTemp:'Veden lämpötila',waterTemp_short:'Veden lämpötila',tempDesc:'Valitse lämpötila',selectYourProfile:'Valitse profiili',start:'Käynnistä',stop:'Pysäytä',remains:'(%s merkkiä jäljellä)',date:'Päivämäärä',settings:'Asetukset',help:'Ohjeet',language:'Kieli',dateTime:'Päivämäärä/aika',dateTime_short:'Päivämäärä<wbr>/aika',dateTimeDesc:'Päivämäärä',deviceLight_short:'Merkkivalo',deviceLight:'Merkkivalo',autoOff:'Autom. katkaisu',autoOff_short:'Autom. sammutus',volUnity:'Tilavuusyksikkö',volUnity_short:'Tilavuus<wbr>yksikkö',autoRinse:'Autom. huuhtelu',autoRinse_short:'Autom. huuhtelu',waterHardness:'Veden kovuus',waterHardness_short:'Veden kovuus',backLightDesc:'Säädä taustavaloa',screenLight:'Näytön kirkkaus',screenLight_short:'Näytön kirkkaus',afterInactivity:'Kun ollut käyttämättömänä:',waterHardnessDesc:'Säädä veden kovuutta ',cafeTypDesc:'Valitse paputyyppi ',cafeTyp:'Kahvityyppi',cafeTyp_short:'kahvi<wbr>tyyppi',moreInfos:'Lisätietoja',VolUnitDesc:'Valitse tilavuuden näyttöyksikkö',resetDesc:'Nollaaminen poistaa asetukset ja valinnat.',reset:'Laitteen nollaus',reset_short:'Laitteen nollaus',profileSettingsDesc:'Valitse määritettävä profiili<br>',cleanup_5_desc:'Aseta 600 ml:n <br>säiliösuuttimien alapuolelle',cleanup_9_desc:'Puhdistus valmis',cleanup_6_desc:'Puhdistus käynnissä,<br><span class="cd">-</span> minuuttia jäljellä',cleanup_7_desc:'Tyhjennä säiliö',cleanup_8_desc:'Tyhjennä valumisastia',cleanup_3_desc:'Täytä vesisäiliö ',cleanup_4_desc:'Avaa kansi ja aseta<br>puhdistustabletti lokeroon<br>',cleanup_1_desc:'XS3000-puhdistustabletti tarvitaan.<br><br>Arvioitu kesto: 13 minuuttia ',descaling:'Kalkin<wbr>poisto',autoRinseDesc:'Käynnistä huuhtelu aina<br>käynnistyksen yhteydessä',coffeeRinse:'Kahvin huuhtelu',coffeeRinse_short:'Kahvin huuhtelu',care:'Laitteen kunnossapito',standardCoffee:'Tavallinen kahvi',greasyCoffee:'Öljyinen kahvi',cleanup_2_desc:'Tyhjennä molemmat säiliöt',pleaseWait:'Odota...',hourShort:'h',minuteShort:'min',selectDrink:'Valitse juoma',preheat:'Esilämmitys',cafe:'Kahvin valmistus ',foaming:'Maidon vaahdotus',hotwater:'Kuuma vesi',seqCanceled:'Juoma pysäytetty',week:'viikko',weekend:'viikonloppu',morning:'aamu',lunch:'keskipäivä',dinner:'ilta',light:'laimea',strong:'vahva',short:'pieni',long:'suuri',none:'ei mitään',sweet:'pehmeä',programDesc:'Määritä automaattinen<br>käynnistys',cleanup:'Puhdistus',descaling_short:'Kalkinpoisto',filter:'Suodatin',milkRinse:'Maidon huuhtelu',milkRinse_short:'Maidon huuhtelu',milkAccClean:'Maitolisäos. puhd.',milkAccClean_short:'Maitolisäos. puhd.',help_fav:'Suosikkien lisääminen ja hallinta',help_service:'Laitteen kunnossapito',help_recipe:'Juomien valmistaminen',videos:'%s videota',roundsDesc:'Jaksojen lukumäärä',teaRinse:'Teen esihuuhtelu',teaRinse_short:'Teen esihuuhtelu',profile:'Profiili',addToFavs:'Lisää suosikkeihin',calendarMonths:'Tammi;Helmi;Maa;Huhti;Touko;Kesä;Heinä;Elo;Syys;Loka;Marras;Joulu',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	sk:{display:'Slovenčina',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Mliečna pena',caffelatte:'Cafe latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Káva',americano:'Americano',thevert:'Zelený čaj',thenoir:'Čierny čaj',lattemacchiato:'Latte macchiato',infusion:'Bylinný čaj',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Mliečna pena',caffelatte_short:'Cafe latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Káva',americano_short:'Americano',thevert_short:'Zelený čaj',thenoir_short:'Čierny čaj',lattemacchiato_short:'L.Macchiato',infusion_short:'Bylinný čaj',profileSettings:'Nastavenia profilu',profileSettings_short:'Nastavenia profilu',setups:'Úpravy',informations:'Informácie',ml:'ml',oz:'oz',sec:'s',yes:'Áno',no:'Nie',ok:'OK',beforeThxs:'Váš nápoj <BOLD> ',afterThxs:'</BOLD> bol pridaný do vášho profilu!',drink:'Nápoje',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Pridať nápoj',chooseColor:'Vyberte si farbu',typeYourName:'Zadajte svoje meno',next:'ĎALEJ',finnished:'KONIEC',color:'Farba',firstName:'Názov',display:'Zobraziť',display_short:'Zobraziť',planning:'Programovanie ',slider:'POSÚVAČ',tiles:'MOZAIKA',on:'ZAP',off:'VYP',displayDesc:'Prezentácia',deviceLightDesc:'Aktivovať sprievodné svetlo',selectKeyword:'Vyberte kľúčové slovo',enjoy:'Príjemný zážitok!',coffeeTemp:'Teplota kávy',coffeeTemp_short:'Teplota kávy',teaTemp:'Teplota čaju',teaTemp_short:'Teplota čaju',waterTemp:'Teplota vody',waterTemp_short:'Teplota vody',tempDesc:'Zvoľte teplotu',selectYourProfile:'Vyberte váš profil',start:'Spustiť',stop:'Zastaviť',remains:'(zostáva znakov:%s)',date:'Dátum',settings:'Nastavenia',help:'Nápoveda a postupy',language:'Jazyk',dateTime:'Dátum/čas',dateTime_short:'Dátum<wbr>/čas',dateTimeDesc:'Dátum/čas',deviceLight_short:'Svetlo',deviceLight:'Svetlo',autoOff:'Automatické zastavenie',autoOff_short:'Automatické vypnutie',volUnity:'Jednotka objemu',volUnity_short:'Jednotka objemu',autoRinse:'Automatické oplachovanie',autoRinse_short:'Automatické oplachovanie',waterHardness:'Tvrdosť vody',waterHardness_short:'Tvrdosť vody',backLightDesc:'Nastavenie podsvietenia',screenLight:'Jas obrazovky',screenLight_short:'Jas obrazovky',afterInactivity:'Ak sa nepoužíva:',waterHardnessDesc:'Nastavte tvrdosť vody ',cafeTypDesc:'Zvoľte typ zŕn ',cafeTyp:'Typ kávy',cafeTyp_short:'Typ kávy',moreInfos:'Viac informácií',VolUnitDesc:'Vyberte jednotku zobrazovania objemu',resetDesc:'Resetovaním odstránite svoje preferencie a nastavenia.',reset:'Resetovanie produktu',reset_short:'Resetovanie produktu',profileSettingsDesc:'Vyberte profil na konfiguráciu<br>',cleanup_5_desc:'Položte pod trysky nádobu s<br>objemom 600 ml',cleanup_9_desc:'Čistenie dokončené',cleanup_6_desc:'Prebieha čistenie,<br> ostáva <span class="cd">-</span> min',cleanup_7_desc:'Vyprázdnite nádobu',cleanup_8_desc:'Vyprázdnite odkvapkávaciu misku',cleanup_3_desc:'Naplňte nádržku na vodu ',cleanup_4_desc:'Otvorte kryt a vložte čistiacu<br>tabletu do žliabku<br>',cleanup_1_desc:'Použite čistiacu tabletu XS3000.<br><br>Odhadovaná dĺžka: 13 minút ',descaling:'Odvápnenie',autoRinseDesc:'Nastavte oplachovací cyklus pri<br>každom spustení',coffeeRinse:'Oplachovanie po káve',coffeeRinse_short:'Oplachovanie po káve',care:'Údržba zariadenia',standardCoffee:'Bežná káva',greasyCoffee:'Olejnatá káva',cleanup_2_desc:'Vyprázdnite obe nádoby',pleaseWait:'Čakajte, prosím...',hourShort:'h',minuteShort:'min',selectDrink:'Zvoľte si nápoj',preheat:'predhrievanie',cafe:'predohrev ',foaming:'mliečna pena',hotwater:'horúca voda',seqCanceled:'nápoj zastavený',week:'týždeň',weekend:'víkend',morning:'ráno',lunch:'poludnie',dinner:'večer',light:'svetlo',strong:'silné',short:'malé',long:'veľké',none:'žiadny',sweet:'jemná',programDesc:'Nastavte automatické zapnutie',cleanup:'Čistenie',descaling_short:'Odvápnenie',filter:'Filter',milkRinse:'Oplachovanie po mlieku',milkRinse_short:'Oplachova<wbr>nie po mlieku',milkAccClean:'Čistenie príslušenstva na mlieko',milkAccClean_short:'Čistenie príslušenstva na mlieko',help_fav:'Ako vytvoriť a spravovať obľúbené nápoje',help_service:'Správna údržba zariadenia',help_recipe:'Postup na prípravu nápojov',videos:'%s videá',roundsDesc:'Počet cyklov',teaRinse:'Preplachovanie pred čajom',teaRinse_short:'Preplachovanie pred čajom',profile:'Profil',addToFavs:'Pridať do obľúbených',calendarMonths:'Jan;Feb;Mar;Apr;Máj;Jún;Júl;Aug;Sep;Okt;Nov;Dec',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	sv:{display:'Svenska',strings:{espresso:'Espresso',cappucino:'Cappuccino',laitmousse:'Skummad mjölk',caffelatte:'Cafe latte',flatwhite:'Flat white',lungo:'Lungo',ristretto:'Ristretto',doppio:'Doppio',cafelong:'Stor kaffe',americano:'Americano',thevert:'Grönt te',thenoir:'Svart te',lattemacchiato:'Latte macchiato',infusion:'Örtte',espresso_short:'Espresso',cappucino_short:'Cappuccino',laitmousse_short:'Skummad mjölk',caffelatte_short:'Cafe latte',flatwhite_short:'Flat white',lungo_short:'Lungo',ristretto_short:'Ristretto',doppio_short:'Doppio',cafelong_short:'Stor kaffe',americano_short:'Americano',thevert_short:'Grönt te',thenoir_short:'Svart te',lattemacchiato_short:'L.Macchiato',infusion_short:'Örtte',profileSettings:'Profilinställningar',profileSettings_short:'Profil- inställning',setups:'Justeringar',informations:'Information',ml:'ml',oz:'oz',sec:'s',yes:'Ja',no:'Nej',ok:'OK',beforeThxs:'Drycken <BOLD>',afterThxs:'</BOLD> har lagts till i din profil.',drink:'Drycker',emacchiato:'E. macchiato',emacchiato_short:'E. macchiato',addDrink:'Lägg till dryck',chooseColor:'Välj färg',typeYourName:'Ange ditt namn',next:'NÄSTA',finnished:'SLUTFÖR',color:'Färg',firstName:'Namn',display:'Skärm',display_short:'Skärm',planning:'Programmering ',slider:'REGLAGE',tiles:'MOSAIK',on:'PÅ',off:'AV',displayDesc:'Presentation av',deviceLightDesc:'Aktivera indikatorshjälpen',selectKeyword:'Välj nyckelord',enjoy:'Njut!',coffeeTemp:'Kaffetemperatur',coffeeTemp_short:'Kaffets temperatur',teaTemp:'Teets temperatur',teaTemp_short:'Teets temperatur',waterTemp:'Vattentemperatur',waterTemp_short:'Vattnets temperatur',tempDesc:'Välj temperatur',selectYourProfile:'Välj profil',start:'Starta',stop:'Avbryt',remains:'(%s tecken återstår)',date:'Datum-',settings:'inställningar',help:'Hjälp och övningsexempel',language:'Språk',dateTime:'Datum/tid',dateTime_short:'Datum<wbr>/tid',dateTimeDesc:'Datum/tid',deviceLight_short:'Lampa',deviceLight:'Lampa',autoOff:'Automatiskt stopp',autoOff_short:'Automatisk  avstängning',volUnity:'Volymenhet',volUnity_short:'Volym<wbr>enhet',autoRinse:'Automatisk sköljning',autoRinse_short:'Automatisk sköljning',waterHardness:'Vattenhårdhet',waterHardness_short:'Vattnets hårdhet',backLightDesc:'Justera <wbr>bakgrundsbelysningen',screenLight:'Skärmens ljusstyrka',screenLight_short:'Skärmens ljusstyrka',afterInactivity:'Vid inaktivitet under:',waterHardnessDesc:'Justera vattenhårdheten ',cafeTypDesc:'Välj kaffeböna ',cafeTyp:'Kaffetyp',cafeTyp_short:'för typ av kaffe',moreInfos:'Mer information',VolUnitDesc:'Välj volymvisningsenheten',resetDesc:'Alla dina inställningar tas bort vid återställning.',reset:'Produkt- återställn.',reset_short:'Produkt- återställn.',profileSettingsDesc:'Välj den profil som <br>ska konfigureras.',cleanup_5_desc:'Ställ en behållare som rymmer <br>600 ml under munstyckena',cleanup_9_desc:'Rengöring slutförd',cleanup_6_desc:'Rengöring pågår.<br><span class="cd">-</span> minuter återstår',cleanup_7_desc:'Töm behållaren',cleanup_8_desc:'Töm droppskålen',cleanup_3_desc:'Fyll vattentanken ',cleanup_4_desc:'Öppna luckan och lägg <br>en rengöringstablett i inkastet<br>',cleanup_1_desc:'Använd en XS3000-rengöringstablett.<br> <br>Beräknad tidsåtgång: 13 minuter ',descaling:'Avkalkning',autoRinseDesc:'Starta en sköljningscykel <br>vid varje start',coffeeRinse:'Sköljning av kaffesystem',coffeeRinse_short:'Sköljning av kaffesystem',care:'Maskinunderhåll',standardCoffee:'Vanligt kaffe',greasyCoffee:'Oljigt kaffe',cleanup_2_desc:'Töm de två behållarna',pleaseWait:'Vänta ...',hourShort:'tim',minuteShort:'min',selectDrink:'Välj dryck',preheat:'förvärmning',cafe:'kaffet tillreds ',foaming:'mjölkskumning',hotwater:'varmt vatten',seqCanceled:'Tillredningen  avbröts',week:'vecka',weekend:'helg',morning:'morgon',lunch:'Klockan 12',dinner:'kväll',light:'svagt',strong:'starkt',short:'liten',long:'stor',none:'ingen',sweet:'krämig',programDesc:'Ställ in automatisk start',cleanup:'Rengöring',descaling_short:'Avkalkning',filter:'Filter',milkRinse:'Sköljning av mjölksystemet',milkRinse_short:'Sköljning av mjölksystemet',milkAccClean:'Rengöring av mjölktillbehör',milkAccClean_short:'Rengöring av mjölktillbehör',help_fav:'Så här skapar och hanterar du dina favoriter',help_service:'Så här underhåller du maskinen',help_recipe:'Så här tillreder du drycker',videos:'%s videor',roundsDesc:'Antal cykler',teaRinse:'Försköljning vid tetillredning',teaRinse_short:'Försköljning vid tetillredning',profile:'Profil',addToFavs:'Lägg till i favoriter',calendarMonths:'Jan;Feb;Mar;Apr;Maj;Jun;Jul;Aug;Sep;Okt;Nov;Dec',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},
        uk:{display:'Українська',strings:{espresso:'Еспресо',cappucino:'Капучино',laitmousse:'Пінисте молоко',caffelatte:'Кава лате',flatwhite:'Кава з молоком',lungo:'Лунго',ristretto:'Рістрето',doppio:'Допіо',cafelong:'Лонг блек',americano:'Американо',thevert:'Зелений чай',thenoir:'Чорний чай',lattemacchiato:'Лате макіато',infusion:'Трав. чай',espresso_short:'Еспресо',cappucino_short:'Капучино',laitmousse_short:'Пінисте молоко',caffelatte_short:'Кава лате',flatwhite_short:'Кава з молоком',lungo_short:'Лунго',ristretto_short:'Рістрето',doppio_short:'Допіо',cafelong_short:'Лонг блек',americano_short:'Американо',thevert_short:'Зелений чай',thenoir_short:'Чорний чай',lattemacchiato_short:'Лате макіато',infusion_short:'Трав. чай',profileSettings:'Налаштування профілю',profileSettings_short:'Налаштування профілю',setups:'Налаштування',informations:'Інформація',ml:'мл',oz:'oz',sec:'с',yes:'Так',no:'Ні',ok:'OK',beforeThxs:'Ваш напій <BOLD>',afterThxs:'</BOLD> додано до вашого профілю!',drink:'Напої',emacchiato:'Есп. макіато',emacchiato_short:'Есп. макіато',addDrink:'Додати напій',chooseColor:'Виберіть ваш колір',typeYourName:'Введіть ваше ім’я',next:'ДАЛІ',finnished:'ЗАВЕРШИТИ',color:'Колір',firstName:'Ім’я',display:'Дисплей',display_short:'Дисплей',planning:'Програмування ',slider:'СПИСОК',tiles:'МОЗАЇКА',on:'ВВІМКНЕННЯ',off:'ВИМКНЕННЯ',displayDesc:'Відображення',deviceLightDesc:'Переглянути посібник з налаштування',selectKeyword:'Виберіть ключове слово',enjoy:'Смачного!',coffeeTemp:'Температура кави',coffeeTemp_short:'Температура кави',teaTemp:'Температура чаю',teaTemp_short:'Температура чаю',waterTemp:'Температура води',waterTemp_short:'Температура води',tempDesc:'Оберіть температуру',selectYourProfile:'Виберіть профіль',start:'Почати',stop:'Завершити',remains:'(залишилось % симв.)',date:'Дата',settings:'Налаштування',help:'Допомога й навчання',language:'Мова',dateTime:'Дата / час',dateTime_short:'Дата / час',dateTimeDesc:'Дата / час',deviceLight_short:'Світловий індикатор',deviceLight:'Світловий індикатор',autoOff:'Автоматичне припинення роботи',autoOff_short:'Автоматичне вимкнення',volUnity:'Одиниці об’єму',volUnity_short:'Одиниці об’єму',autoRinse:'Автоматичне промивання',autoRinse_short:'Автоматичне промивання',waterHardness:'Жорсткість води',waterHardness_short:'Жорсткість води',backLightDesc:'Налаштування<br>підсвічування екрана',screenLight:'Яскравість екрана',screenLight_short:'Яскравість екрана',afterInactivity:'У режимі очікування:',waterHardnessDesc:'Виберіть жорсткість води ',cafeTypDesc:'Виберіть тип зерен ',cafeTyp:'Тип кави',cafeTyp_short:'Тип кави',moreInfos:'Додаткова інформація',VolUnitDesc:'Виберіть одиниці відображення об’єму',resetDesc:'Перезапуск видалить ваші вподобання й налаштування.',reset:'Перезапуск приладу',reset_short:'Перезапуск приладу',profileSettingsDesc:'Виберіть профіль для налаштування<br>',cleanup_5_desc:'Помістіть контейнер ємністю<br>600 млпід сопла',cleanup_9_desc:'Очищення завершено',cleanup_6_desc:'Триває очищення:<br>залишилось <span class="cd">-</span> хвилин',cleanup_7_desc:'Спорожніть контейнер',cleanup_8_desc:'Спорожніть лоток для крапель',cleanup_3_desc:'Наповніть резервуар для води ',cleanup_4_desc:'Відкрите кришку та помістіть в отвір<br>таблетку для очищення<br>',cleanup_1_desc:'Необхідна таблетка для<br>очищення XS3000.<br>Приблизна тривалість: 13 хвилин ',descaling:'Видалення накипу',autoRinseDesc:'Запускати промивання при кожному<br>ввімкненні приладу',coffeeRinse:'Промивання після кави',coffeeRinse_short:'Промивання після кави',care:'Обслуговування машини',standardCoffee:'Звичайна кава',greasyCoffee:'Масляниста кава',cleanup_2_desc:'Спорожніть 2 контейнери',pleaseWait:'Зачекайте…',hourShort:'год',minuteShort:'хв',selectDrink:'Виберіть напій',preheat:'попереднє<br>нагрівання',cafe:'приготування кави ',foaming:'Вспінювання молока',hotwater:'гаряча вода',seqCanceled:'Приготуваннянапою зупинено',week:'тиждень',weekend:'вихідні',morning:'ранок',lunch:'день',dinner:'вечір',light:'індикатор',strong:'міцна',short:'маленька',long:'велика',none:'ні',sweet:'м’яка',programDesc:'Задати автом. ввімкнення',cleanup:'Очищення',descaling_short:'Видалення накипу',filter:'Фільтр',milkRinse:'Промивання молочної системи',milkRinse_short:'Промивання молочної системи',milkAccClean:'Очищення молочної системи',milkAccClean_short:'Очищення молочної системи',help_fav:'Як створювати й зберігати рецепти улюблених напоїв',help_service:'Як обслуговувати машину',help_recipe:'Як готувати напої',videos:'%s відео',roundsDesc:'Кількість циклів',teaRinse:'Попереднє промивання перед приготуванням чаю',teaRinse_short:'Попереднє промивання перед приготуванням чаю',profile:'Профіль',addToFavs:'Додати до улюбленого',calendarMonths:'січ.;лют.;бер.;квіт.;трав.;черв.;лип.;серп.;вер.;жовт.;лист.;груд.',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	
        zh:{display:'廣東話',strings:{espresso:'特濃咖啡',cappucino:'意式泡沫咖啡',laitmousse:'奶泡',caffelatte:'牛奶咖啡',flatwhite:'鮮奶濃縮咖啡',lungo:'濃黑咖啡',ristretto:'超濃咖啡',doppio:'雙份特濃咖啡',cafelong:'淡咖啡',americano:'美式咖啡',thevert:'綠茶',thenoir:'紅茶',lattemacchiato:'奶泡牛奶咖啡',infusion:'草本茶',espresso_short:'特濃咖啡',cappucino_short:'意式泡沫咖啡',laitmousse_short:'奶泡',caffelatte_short:'牛奶咖啡',flatwhite_short:'鮮奶濃縮咖啡',lungo_short:'濃黑咖啡',ristretto_short:'超濃咖啡',doppio_short:'雙份特濃咖啡',cafelong_short:'淡咖啡',americano_short:'美式咖啡',thevert_short:'綠茶',thenoir_short:'紅茶',lattemacchiato_short:'奶泡牛奶咖啡',infusion_short:'草本茶',profileSettings:'檔案設定',profileSettings_short:'檔案設定',setups:'調整',informations:'資料',ml:'毫升',oz:'安士',sec:'秒',yes:'是',no:'否',ok:'好的',beforeThxs:'飲品<BOLD>',afterThxs:'</BOLD>已加至你的檔案！',drink:'飲品',emacchiato:'奶泡特濃咖啡',emacchiato_short:'奶泡特濃咖啡',addDrink:'加入飲品',chooseColor:'選擇顏色',typeYourName:'輸入名稱',next:'下一步',finnished:'完成',color:'顏色',firstName:'名稱',display:'顯示',display_short:'顯示',planning:'正在編制 ',slider:'滑動板',tiles:'馬賽克',on:'開',off:'關',displayDesc:'飲品',deviceLightDesc:'啟動燈光指示',selectKeyword:'選擇關鍵字',enjoy:'好好享受吧！',coffeeTemp:'咖啡溫度',coffeeTemp_short:'咖啡 溫度',teaTemp:'茶溫',teaTemp_short:'茶 溫度',waterTemp:'水溫',waterTemp_short:'水 溫度',tempDesc:'選擇溫度',selectYourProfile:'選擇檔案',start:'開始',stop:'停止',remains:'（剩餘 %s 個字符）',date:'日期',settings:'設定',help:'協助及教學',language:'語言',dateTime:'日期/時間',dateTime_short:'日期/時間',dateTimeDesc:'日期/時間',deviceLight_short:'燈光',deviceLight:'燈光',autoOff:'自動停止',autoOff_short:'自動關閉',volUnity:'容量單位',volUnity_short:'容量單位',autoRinse:'自動 正在沖洗',autoRinse_short:'自動 正在沖洗',waterHardness:'水硬度',waterHardness_short:'水 硬度',backLightDesc:'調整背光',screenLight:'屏幕光度',screenLight_short:'屏幕光度',afterInactivity:'閒置時：',waterHardnessDesc:'調整水硬度 ',cafeTypDesc:'選擇咖啡豆類型 ',cafeTyp:'咖啡類型',cafeTyp_short:'咖啡 類型',moreInfos:'更多資訊',VolUnitDesc:'選擇容量顯示單位',resetDesc:'重設將刪除你的偏好及設定。',reset:'產品 重設',reset_short:'產品 重設',profileSettingsDesc:'選擇檔案以進行配置<br>',cleanup_5_desc:'放置 600 毫升的容器在噴嘴下<br>',cleanup_9_desc:'清潔完成',cleanup_6_desc:'正在清潔<br>剩餘 <span class="cd">-</span> 分鐘',cleanup_7_desc:'清空容器',cleanup_8_desc:'清空滴盤',cleanup_3_desc:'加滿水箱 ',cleanup_4_desc:'打開蓋子並將清潔片插入滑槽<br><br>',cleanup_1_desc:'需要使用 XS3000 清潔片。<br><br>預計時間： 13 分鐘 ',descaling:'正在除垢',autoRinseDesc:'於每次啟動時進行沖洗循環<br>',coffeeRinse:'咖啡沖洗',coffeeRinse_short:'咖啡沖洗',care:'機器保養',standardCoffee:'一般咖啡',greasyCoffee:'油性咖啡',cleanup_2_desc:'清空兩個容器',pleaseWait:'請稍候……',hourShort:'小時',minuteShort:'分鐘',selectDrink:'選擇飲品',preheat:'預熱',cafe:'正在製作咖啡 ',foaming:'沖打奶泡',hotwater:'熱水',seqCanceled:'飲品已停止',week:'平日',weekend:'週末',morning:'早上',lunch:'中午',dinner:'晚上',light:'燈光',strong:'強',short:'短',long:'長',none:'無',sweet:'順滑',programDesc:'設定自動開啟',cleanup:'正在清潔',descaling_short:'正在除垢',filter:'過濾器',milkRinse:'奶類沖洗',milkRinse_short:'奶類沖洗',milkAccClean:'清潔奶類配件',milkAccClean_short:'清潔奶類配件',help_fav:'如何建立及管理你的最愛',help_service:'如何保養機器',help_recipe:'如何製作飲品',videos:'%s 段影片',roundsDesc:'循環次數',teaRinse:'茶預先沖洗',teaRinse_short:'茶預先沖洗',profile:'輪廓',addToFavs:'加入最愛',calendarMonths:'一月;二月;三月;四月;五月;六月;七月;八月;九月;十月;十一月;十二月',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},	
        ko:{display:'조선말',strings:{espresso:'에스프레소',cappucino:'카푸치노',laitmousse:'스팀밀크',caffelatte:'카페라떼 ',flatwhite:'플랫 화이트',lungo:'룽고',ristretto:'리스트레토',doppio:'도피오',cafelong:'롱 커피',americano:'아메리카노',thevert:'녹차',thenoir:'홍차',lattemacchiato:'라떼 마키아토',infusion:'허브차',espresso_short:'에스프레소',cappucino_short:'카푸치노',laitmousse_short:'스팀밀크',caffelatte_short:'카페라떼 ',flatwhite_short:'플랫 화이트',lungo_short:'룽고',ristretto_short:'리스트레토',doppio_short:'도피오',cafelong_short:'롱 커피',americano_short:'아메리카노',thevert_short:'녹차',thenoir_short:'홍차',lattemacchiato_short:'라떼 마키아토',infusion_short:'허브차',profileSettings:'프로필 설정',profileSettings_short:'프로필 설정',setups:'조절',informations:'정보',ml:'ml',oz:'oz',sec:'초',yes:'예',no:'아니요',ok:'OK',beforeThxs:'<BOLD>',afterThxs:'</BOLD>이(가) 프로필에 추가됐습니다!',drink:'음료',emacchiato:'에스프레소 마키아토',emacchiato_short:'에스프레소 마키아토',addDrink:'음료 추가',chooseColor:'색상 선택',typeYourName:'이름 입력',next:'다음',finnished:'마침',color:'색상',firstName:'이름',display:'디스플레이',display_short:'디스플레이',planning:'프로그래밍 ',slider:'슬라이더',tiles:'모자이크',on:'켜기',off:'끄기',displayDesc:'음료',deviceLightDesc:'조명 가이드 활성화',selectKeyword:'키워드 선택',enjoy:'맛있게 드세요!',coffeeTemp:'커피 온도',coffeeTemp_short:'커피 온도',teaTemp:'차 온도',teaTemp_short:'차 온도',waterTemp:'물 온도',waterTemp_short:'물 온도',tempDesc:'온도 선택',selectYourProfile:'프로필을 선택하십시오.',start:'시작',stop:'멈춤',remains:'(%s자 남음)',date:'날짜',settings:'설정',help:'도움말 및 튜토리얼',language:'언어',dateTime:'날짜/시간',dateTime_short:'날짜/시간',dateTimeDesc:'날짜/시간',deviceLight_short:'조명',deviceLight:'조명',autoOff:'자동 멈춤',autoOff_short:'자동 꺼짐',volUnity:'양 단위 ',volUnity_short:'양 <wbr>단위',autoRinse:'자동 헹굼',autoRinse_short:'자동 헹굼',waterHardness:'물 경도',waterHardness_short:'물 경도',backLightDesc:'백라이트 조정',screenLight:'화면 밝기',screenLight_short:'화면밝기',afterInactivity:'다음의 경우 멈춤:',waterHardnessDesc:'물 경도 조절 ',cafeTypDesc:'원두 유형 선택 ',cafeTyp:'커피 유형',cafeTyp_short:'커피 유형',moreInfos:'추가 정보',VolUnitDesc:'양 표시 단위 선택',resetDesc:'재설정하면 사용자 설정이 삭제됩니다.',reset:'제품 재설정',reset_short:'제품 재설정',profileSettingsDesc:'설정할 프로필 선택<br>',cleanup_5_desc:'600ml 용기 1개를 노즐 아래에 두십시오.<br>',cleanup_9_desc:'세척 완료',cleanup_6_desc:'세척 진행 중,<br><span class="cd">-</span> 분 남음',cleanup_7_desc:'용기를 비우십시오.',cleanup_8_desc:'물받이를 비우십시오.',cleanup_3_desc:'물 탱크를 채우십시오. ',cleanup_4_desc:'뚜껑을 열고 세척용 알약을 알약 투입구에 넣으십시오.<br><br>',cleanup_1_desc:'XS3000 세척용 알약이 필요합니다.<br><br>예상 시간: 13분 ',descaling:'물때 제거',autoRinseDesc:'사용할 때마다 헹굼 사이클 시작<br>',coffeeRinse:'커피 헹굼',coffeeRinse_short:'커피 헹굼',care:'기기 유지관리',standardCoffee:'일반 커피',greasyCoffee:'기름기 있는 커피',cleanup_2_desc:'2개 용기를 비우십시오.',pleaseWait:'기다려 주십시오...',hourShort:'시간',minuteShort:'분',selectDrink:'음료를 선택하십시오.',preheat:'예열',cafe:'커피 추출 중 ',foaming:'스팀밀크 만들기',hotwater:'온수',seqCanceled:'음료 중단',week:'주',weekend:'주말',morning:'아침',lunch:'점심',dinner:'저녁',light:'조명',strong:'강함',short:'짧음',long:'긺',none:'없음',sweet:'부드러움',programDesc:'자동으로 시작하게 설정합니다. ',cleanup:'세척',descaling_short:'물때 제거',filter:'필터',milkRinse:'우유 헹굼',milkRinse_short:'우유 헹굼',milkAccClean:'우유 시스템 세척',milkAccClean_short:'우유 시스템 세척',help_fav:'즐겨찾기 생성 및 관리 방법',help_service:'기기 유지관리 방법',help_recipe:'음료 제조 방법',videos:'%s 비디오',roundsDesc:'사이클 수',teaRinse:'차 준비 헹굼',teaRinse_short:'차 준비 헹굼',profile:'프로필',addToFavs:'즐겨찾기에 추가',calendarMonths:'1월;2월;3월;4월;5월;6월;7월;8월;9월;10월;11월;12월',unsupported:'Unavailable feature <br> for this the demonstrator',onlyCleanup:'You can only try the "Cleaning" feature.',pleaseRotate:'For a better experience,<br>Please turn your device to landscape',}},
      };
      const kxkeywords = ['none', 'week', 'weekend', 'morning', 'lunch', 'dinner', 'short', 'long', 'light', 'strong', 'sweet', ];

      app.sliders = {
          backlight: {
              steps: false,
              default: 50,
              icons: {
                  left: 'backLightSmall',
                  right: 'backLightBig'
              },
              title: ('screenLight'),
              desc: ('backLightDesc'),
          },
          autoOff: {
              steps: [{
                  val: null,
                  desc1: '15',
                  desc2: 'min'
              }, {
                  val: null,
                  desc1: '30',
                  desc2: 'min'
              }, {
                  val: null,
                  desc1: '60',
                  desc2: 'min'
              }, {
                  val: null,
                  desc1: '90',
                  desc2: 'min'
              }, {
                  val: null,
                  desc1: '120',
                  desc2: 'min'
              }, ],
              default: 3,
              title: ('autoOff'),
              desc: ('afterInactivity'),
          },
          waterHardness: {
              steps: [{
                  val: null,
                  desc1: '0',
                  desc2: ''
              }, {
                  val: null,
                  desc1: '1',
                  desc2: ''
              }, {
                  val: null,
                  desc1: '2',
                  desc2: ''
              }, {
                  val: null,
                  desc1: '3',
                  desc2: ''
              }, {
                  val: null,
                  desc1: '4',
                  desc2: ''
              }, ],
              default: 4,
              title: ('waterHardness'),
              desc: ('waterHardnessDesc'),
              backSlide: 2,
          },

          coffeeTemp: {
              steps: [{
                  val: null,
                  desc1: 'T° 1',
                  desc2: ''
              }, {
                  val: null,
                  desc1: 'T° 2',
                  desc2: ''
              }, {
                  val: null,
                  desc1: 'T° 3',
                  desc2: ''
              }, ],
              default: 2,
              title: ('coffeeTemp'),
              desc: ('tempDesc'),
              backSlide: 2,
          },

          waterTemp: {
              steps: [{
                  val: null,
                  desc1: 'T° 1',
                  desc2: ''
              }, {
                  val: null,
                  desc1: 'T° 2',
                  desc2: ''
              }, {
                  val: null,
                  desc1: 'T° 3',
                  desc2: ''
              }, ],
              default: 2,
              title: ('waterTemp'),
              desc: ('tempDesc'),
              backSlide: 2,
          },
      };

      app.switches = {
          deviceLight: {
              iconLeft: 'lightOff',
              iconRight: 'lightOn',
              textLeft: 'off',
              textRight: 'on',
              title: ('deviceLight'),
              desc: ('deviceLightDesc'),
              default: 2,
          },
          display: {
              iconLeft: 'slider',
              iconRight: 'tiles',
              textLeft: 'slider',
              textRight: 'tiles',
              title: 'display',
              desc: 'displayDesc',
              default: 2,
          },
          unit: {
              iconLeft: false,
              iconRight: false,
              textLeft: 'oz',
              textRight: 'ml',
              title: 'volUnity',
              desc: 'VolUnitDesc',
              default: 2,
          },
          autoRinse: {
              iconLeft: false,
              iconRight: false,
              textLeft: 'yes',
              textRight: 'no',
              title: 'autoRinse',
              desc: 'autoRinseDesc',
              default: 2,
          },
          cafeTyp: {
              iconLeft: false,
              iconRight: false,
              textLeft: 'greasyCoffee',
              textRight: 'standardCoffee',
              title: 'cafeTyp',
              desc: 'cafeTypDesc',
              default: 2,
              backSlide: 2,

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

      //const recipeDuration = 4000; // ms

      app.ratio = 1;
      app.currentPage = false;
      app.currentRecipe = false;
      app.currentProfile = false;
      app.pointingDevice = 'mouse';

      app.imgDB = {
          kbkg: {
              uri: 'kbkg.png',
              hsrc: false
          },
          unitfrg: {
              uri: 'unitfrg2.png',
              hsrc: false
          },
          bkgSheet: {
              uri: 'bkgSheet.jpg',
              hsrc: false
          },
          recipesSheet: {
              uri: 'recipesSheet.png',
              hsrc: false
          },
          care: {
              uri: 'care.png',
              hsrc: false
          },
          beep: {
              uri: 'beep.mp3',
              hsrc: false
          },
          bleep: {
              uri: 'bleep.mp3',
              hsrc: false
          },
      };

      app.profiles = {
          userOne: {
              name: 'LUCY',
              color: 'blue',
              bkg: 'bkg13',
              favs: [{
                  recipe: 'lattemacchiato',
                  rightmenuval: '2',
                  leftmenuval: '3',
                  keyword: 'morning',
                  x2: false,
              },
              {
                  recipe: 'americano',
                  rightmenuval: '100',
                  leftmenuval: '3',
                  keyword: 'sweet',
                  x2: false,
              },
              ],
          },
          userTwo: {
              name: 'BEN',
              color: 'green',
              bkg: 'bkg6',
              favs: [{
                  recipe: 'espresso',
                  rightmenuval: '40',
                  leftmenuval: '3',
                  keyword: 'morning',
                  x2: false,

              }, {
                  recipe: 'lattemacchiato',
                  rightmenuval: 'XL',
                  leftmenuval: '3',
                  keyword: 'strong',
                  x2: false,
              }, ],
          },
      };

        if (localStorage.getItem('profiles'))  {
            app.profiles = JSON.parse(localStorage.getItem('profiles'));
        } else {
            localStorage.setItem('profiles', JSON.stringify(app.profiles));
        }

        if (localStorage.getItem('lg'))  {
            app.lg = localStorage.getItem('lg');
        } else {
            localStorage.setItem('lg', app.lg);
        }

        app.saveProfile = function(){
            localStorage.setItem('profiles', JSON.stringify(app.profiles));
        } 

      const Clock = function() {
          const thisClock = this;
          thisClock.getTime = function() {
              const now = new Date();
              thisClock.time = (now.getHours() < 10 ? '0' : '') + now.getHours() 
              + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
              return thisClock.time;
          }
          ;
          thisClock.getDate = function() {
              const now = new Date();
              thisClock.date = (now.getDate() < 10 ? '0' : '') + now.getDate() 
              + '/' + (now.getMonth() + 1 < 10 ? '0' : '') + (now.getMonth() + 1) + '/' + now.getFullYear();
              return thisClock.date;
          }
          ;
          thisClock.time = thisClock.getTime;
          thisClock.date = thisClock.getDate;
          thisClock.run = function(clockDom) {
              clearInterval(thisClock.timout);
              clockDom.innerHTML = thisClock.getTime();
              thisClock.timout = setInterval(()=>(clockDom.innerHTML = thisClock.getTime()), 3000, );
          }
          ;
          thisClock.runDate = function(dateDom) {
              clearInterval(thisClock.dateTimout);
              dateDom.innerHTML = thisClock.getDate();
              thisClock.dateTimout = setInterval(()=>(dateDom.innerHTML = thisClock.getDate()), 3000, );
          }
          ;
          thisClock.stop = function() {
              clearInterval(thisClock.timout);
              clearInterval(thisClock.dateTimout);
          }
          ;
      };

      app.clock = new Clock();

      const _ = app.loc = function(string) {
          if (kxLg[app.lg].strings[string])
              return kxLg[app.lg].strings[string];
          return string;
      }
      ;

      app.beep = function() {
          const snd = new Audio('images/beep.mp3');
          snd.loop = false;
          snd.play();
      }
      ;

      app.bleep = function() {
          const snd = new Audio('images/bleep.mp3');
          snd.loop = false;
          snd.play();
      }
      ;

      const baseHtml = (`
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

          <div class="unitButton kxUnitButtonUserOne"
           id="kxUnitButtonUserOne">
              <svg style="" viewBox="0 0 64 64">
              <use href="#userOne" />
              </svg>
          </div>

          <div class="unitButton kxUnitButtonUserTwo" 
          id="kxUnitButtonUserTwo">
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

      // app.toastTimeout = null;
      app.toast = function(msg) {
          clearTimeout(app.toastTimeout);
          clearTimeout(app.tastTimeOutOff);
          Object.assign(app.toaster.style, {
              display: '',
          });
          app.toastTimeout = setTimeout(()=>{
              app.toaster.querySelector('span').innerHTML = msg;
              app.toaster.classList.add('show');
              app.toastTimeout = setTimeout(()=>{
                  app.toaster.classList.add('hide');
                  app.tastTimeOutOff = setTimeout(()=>{
                      app.toaster.classList.remove('show', 'hide');
                  }
                  , 500);
              }
              , 1500);
          }
          , 1);
      }
      ;

      app.buildPage = function(pageId, data, callback) {
          app.pages[pageId].data = data;
          const tempBuild = new DOMParser().parseFromString(app.pages[pageId].html(), 'text/html', ).body.firstChild;
          app.pages[pageId].built = tempBuild;
          app.pages[pageId].build(function() {
              callback();
          });
      };

      app.isFading = false;

      app.showPage = function(page, fade) {
          // app.canSwitchPage = false;

          page.classList.remove('onScreen');
          if (fade) {
              app.isFading = true;
              const newholder = document.createElement('div');
              newholder.classList.add('pageHolder', 'newPageHolder');
              app.screen.insertBefore(newholder, app.pageHolder);
              newholder.appendChild(page);
              app.pageHolder = newholder;
              const prevHolder = app.kxhost.querySelector('.currentHolder');
              Object.assign(prevHolder.style, {
                  opacity: 0,
                  transition: 'opacity 500ms',
                  pointerEvents: 'none',
              });
              app.currentPage.beforeShow();

              app.ttimout = setTimeout(()=>{
                  prevHolder.remove();
                  // TODO : remove all prevholders that should have been created by hysterical multiple clicks....
                  app.pageHolder.classList.add('currentHolder');
                  app.pageHolder.classList.remove('newPageHolder');
                  page.classList.add('built', 'onScreen');
                  app.currentPage.run();
                  app.isFading = false;
                  app.canSwitchPage = true;
              }
              , 600);
          } else {
              app.pageHolder.innerHTML = '';
              app.pageHolder.appendChild(page);
              page.classList.add('built', 'onScreen');
              app.currentPage.beforeShow();
              app.currentPage.run();
              app.isFading = false;
              app.canSwitchPage = true;
          }
      }
      ;
      app.canSwitchPage = true;

      app.loadPage = function(pageId, data) {
          if (!app.canSwitchPage) {
              console.warn("can't switch page");
              return false;
          }
          app.canSwitchPage = false;
          console.log('loading ' + pageId);
          if (app.currentPage) {
              if (app.currentPage.quit()) {
                  // app.canSwitchPage = true;
                  if (app.currentPage.built) {
                      app.currentPage.built.classList.remove('onScreen');
                  }
                  let option = false;
                  if (app.currentPage.option) {
                      option = app.currentPage.option;
                  }
                  app.pages[pageId].referrer = {
                      pageId: app.currentPage.name,
                      option: option
                  };
              } else {
                  return;
              }
          }

          if (app.pages[pageId].built == false) {
              app.buildPage(pageId, data, function() {
                  app.currentPage = app.pages[pageId];
                  app.showPage(app.currentPage.built, true);
              });
          } else {
              app.currentPage = app.pages[pageId];
              // TODO Remove values for following function;
              app.showPage(app.currentPage.built, true);
          }

          return;
      }
      ;

      app.pages = {
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
                  const delay = 800;
                  if (app.pages.recettes) app.pages.recettes.sliderPosition = 0;

                  Object.assign(document.querySelector('.glowPoint').style, {
                      transitionDuration: delay + 'ms',
                      left: '350px',
                  });

                  // $(".glowPoint").css({"left":'350px',"transition-duration":delay+"s"});
                  Object.assign(document.querySelector('.bar').style, {
                      'width': '350px',
                      'transition-duration': delay + 'ms',
                  });

                  Object.assign(document.querySelector('.logoGroup').style, {
                    'transform': 'translateX(-470px)',
                    'transition': 'transform ' + delay + 'ms linear 1000ms' ,
                    'position': 'absolute',
                    'top': 0,
                    'left': 0,
                });

                  Object.assign(document.querySelector('.intuition').style, {
                    'opacity': '1',
                });

                  setTimeout(function() {
                      app.loadPage('recettes', null);
                  }, delay+300);
              },
              quit: function() {
                  return true;
              },

              html: function() {
                  return `
              <div class="pageContent">
          
              <div class="logoGroup">
                <svg style="position:absolute; top:110px; left:167px; width:146px;height:34px;" viewBox="0 0 146 34">
                <use href="#krupsLogo" style="fill: white;" />
                </svg>
                <div class="barBkg" style="position:absolute; left:69px; top:159px; width:350px; height:1px; background-color:rgba(255,255,255,.3); overflow:visible">
                    <div class="bar" style="width:0;height:1px;background-color:white; transition:width linear 2500ms">
                    <div class="glowPoint" style="position:absolute; left:0; top:-1px; background-color:white; width:3px;height:3px; box-shadow: 0 0 6px 1px white;  transition:left linear 2500ms; border-radius:2px;">
                    </div>
                    </div>
                </div>
                <div class="intuition" style="opacity:0; transition:opacity 500ms; transition-delay:100ms; position:absolute; top:171px; width:480px; height:34px; font-size:24px;text-align:center">
                INTUITION PREFERENCE +
                </div>
              </div>
              <div>
              </div>
              </div>
              `;
              },
          },

          recettes: {
              name: 'recettes',
              sliderPosition: 0,
              built: false,
              build: function(callback) {
                  app.currentProfile = false;
                  const selection = new Hscroller(this.built.querySelector('#recetteScroller'),);

                  const recipes = this.built.querySelectorAll('.recetteScrollerItem.recette');
                  recipes.forEach((el)=>el.addEventListener('click', ()=>{
                      if (!selection.mouseMove) {
                          app.currentRecipe = app.recipes[el.dataset.val];
                          app.loadPage('prepare', 'fromHome');
                      }
                  }
                  ), );

                  this.built.querySelector('.recetteScrollerItem.plus').addEventListener('click', ()=>{
                      app.loadPage('settings');
                  }
                  );
                  callback();
              },
              beforeShow: function() {
                  document.querySelector('#recetteScroller').scrollTo({
                      left: this.sliderPosition
                  });
                  const zeClock = this.built.querySelector('.clock');
                  app.clock.run(zeClock);

              },
              run: function() {
                  app.currentProfile = false;
              },
              quit: function() {
                  // fn called on quit, Must send true to allow quitting.
                  if (document.querySelector('#recetteScroller'))
                      this.sliderPosition = document.querySelector('#recetteScroller').scrollLeft;
                  if (app.clock)
                      app.clock.stop();
                  return true;
              },
              html: function() {
                  let rhtml = `
              <div class="pageContent recettes home">
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
                  for (const [key,value] of Object.entries(app.recipes)) {
                      rhtml += `
              <div class="recetteScrollerItem recette" data-val="${key}">
              <div class="title">
              <span>${_(value.code + '_short')}</span>
              </div>
              <div class="sep"></div>
              <div class="thumb">
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

          addRecipe: {
              name: 'addRecipe',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  const selection = new Hscroller(thisBuilt.querySelector('#recetteScroller'),);
                  thisBuilt.querySelector('.validaterecipe').addEventListener('click', function() {
                      app.loadPage('prepare', null);
                  });
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('profile', null);
                      app.currentRecipe = false;
                  });
                  const recipes = this.built.querySelectorAll('.recetteScrollerItem.recette');
                  recipes.forEach((el)=>el.addEventListener('click', ()=>{
                      if (!selection.mouseMove) {
                          app.currentRecipe = app.recipes[el.dataset.val];
                          thisBuilt.classList.add('selection');
                          if (this.built.querySelector('.recetteScrollerItem.selected')) {
                              this.built.querySelector('.recetteScrollerItem.selected').classList.remove('selected');
                          }
                          el.classList.add('selected');
                      }
                  }
                  ), );
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.built = false;
                  return true;
              },
              html: function() {
                  let rhtml = `
          <div class="pageContent addRecipe ${app.currentProfile.bkg} ${app.currentProfile.color}">
          <style>
          .validaterecipe{
              opacity:.3;
              pointer-events: none;
          }
          .selection .validaterecipe{
              opacity:initial;
              pointer-events: initial;
          }
          .addRecipe .recetteScrollerItem{
              width:110px;
              overflow:hidden;
          }

          .addRecipe .recetteScrollerItem .title{
              left: 2px;
              font-size: 13px;
              width: 105px;
              height: 23px;
          }

          .addRecipe .recetteScrollerItem .userTitleClip{
              left : 40px;
              top : 29px;
          }

          .addRecipe .recetteScrollerItem .thumb{
              transform: scale(0.6);
              transform-origin: 0 0;
              top: 26px;
              left: 10px;
          }

          .recetteScrollerItem.selected {
              background: rgba(255, 255, 255, 0.38);
          }
          .addRecipe .hScroller{
              top:113px;
              height:125px;
          }
          .addRecipe .recetteScrollerItem:first-child {
              margin-left: 71px;
              transition-delay: 0;
          }



          </style>
          <div class="titleBlock wide light">
          <span class="title">${_('addDrink')}</span>
          </div>
          <div class="userTitleClip wide userBorderColor"></div>

          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>
          <div class="settingsDesc">${_('selectDrink')}</div>
          <section id="recetteScroller" class="hScroller" >
                  `;
                  for (const [key,value] of Object.entries(app.recipes)) {
                      rhtml += `
              <div class="recetteScrollerItem recette" data-val="${key}">
              <div class="title">
              <span>${_(value.code + '_short')}</span>
              </div>
              <div class="userTitleClip userBorderColor"></div>
              <div class="thumb">
              <img nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style="object-position: ${'-' + value.spritexy.split(';')[0] * 150 + 'px'} ${'-' + value.spritexy.split(';')[1] * 150 + 'px'}">
              </div>
              </div>`;
                  }

                  rhtml += `


              </section>
              <div class="validaterecipe startButton userBorderColor">
              ${_('next')}
              </div>
              </div>
              `;
                  return rhtml;
              },
          },

          prepare: {
              name: 'prepare',
              built: false,
              build: function(callback) {
                  let adding = false;
                  if (this.referrer.pageId == 'addRecipe') {
                      adding = true;
                  }
                  const thisBuilt = this.built;
                  const that = this;
                  that.recipeSequence = false;

                  const showSingle = function() {
                      thisBuilt.querySelector('img.recipeImage').style.objectPosition = `${'-' + app.currentRecipe.spritexy.split(';')[0] * 150 + 'px'} ${'-' + app.currentRecipe.spritexy.split(';')[1] * 150 + 'px'}`;
                  };

                  const showDoubleDimmed = function() {
                      thisBuilt.querySelector('img.recipeImage').style.objectPosition = `${'-' + app.currentRecipe.spritexy_x1.split(';')[0] * 150 + 'px'} ${'-' + app.currentRecipe.spritexy_x1.split(';')[1] * 150 + 'px'}`;
                  };

                  const showDoubleFull = function() {
                      thisBuilt.querySelector('img.recipeImage').style.objectPosition = `${'-' + app.currentRecipe.spritexy_x2.split(';')[0] * 150 + 'px'} ${'-' + app.currentRecipe.spritexy_x2.split(';')[1] * 150 + 'px'}`;
                  };

                  if (app.currentRecipe) {
                      this.secondaryScroller = false;
                      if (app.currentRecipe.leftmenutyp === 'strength') {
                          this.strengthScroller = new vscroller(thisBuilt.querySelector('.strengthScroller'),thisBuilt.querySelector('.strengthScroller_target'),);
                      }
                      if (app.currentRecipe.rightmenutyp) {
                          this.quantityScroller = new vscroller(thisBuilt.querySelector('.quantityScroller.primary'),thisBuilt.querySelector('.quantityScroller_target'),);
                          if (app.currentRecipe.step2Typ !== 'false') {
                              this.secondaryScroller = new vscroller(thisBuilt.querySelector('.quantityScroller.secondary'),thisBuilt.querySelector('.quantityScroller_target'),);
                          }
                      }

                      thisBuilt.querySelector('.backToMain').addEventListener('click', function() {
                          if (adding) {
                              app.loadPage('addRecipe', null);
                          } else if (app.currentProfile) {
                              app.loadPage('profile', null);
                          } else {
                              app.loadPage('recettes', null);
                          }
                      });

                      if (app.currentRecipe.canx2 && (!app.currentProfile || adding)) {
                          thisBuilt.querySelector('.plusMinusButton').addEventListener('click', function() {
                              const svgUse = this.querySelector('use');
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

                      thisBuilt.querySelector('.startButton').addEventListener('click', function() {
                          runRecipe();
                      });

                      thisBuilt.querySelector('.nextButton').addEventListener('click', function() {
                          app.currentRecipe.lastSelectedQuantity = thisBuilt.querySelector('.quantityScroller.primary .wheelItem.selected').dataset.val;
                          if (app.currentRecipe.leftmenutyp === 'strength') {
                              app.currentRecipe.lastSelectedStrength = thisBuilt.querySelector('.strengthScroller .wheelItem.selected').dataset.val;
                          }
                          app.loadPage('keywordSelection', null);
                      });

                      thisBuilt.querySelector('.stopButton').addEventListener('click', function() {
                          thisBuilt.querySelector('.sequence span').innerHTML = _('seqCanceled');
                          thisBuilt.classList.remove('running');
                          thisBuilt.classList.add('canceled');
                          if (that.recipeSequence)
                              that.recipeSequence.stop();
                          that.recipeSequence = false;
                          that.canceltimout = setTimeout(()=>{
                              app.loadPage('recettes', null);
                          }
                          , 4000);
                      });

                      var runRecipe = function() {
                          if (adding)
                              return;
                          if (that.quantityScroller)
                              that.quantityScroller.pause = true;
                          if (that.strengthScroller)
                              that.strengthScroller.pause = true;
                          if (that.secondaryScroller) {
                              that.secondaryScroller.pause = true;

                              const aaa = that.built.querySelector('.quantityScroller.secondary [data-val="' + app.currentRecipe.step2Default + '"]');
                              that.secondaryScroller.scrollToFunction(aaa);
                          }

                          if (app.currentRecipe.x2) {
                              showDoubleFull();
                          } else {
                              showSingle();
                          }
                          const seqOutput = thisBuilt.querySelector('.sequence span');
                          app.currentRecipe.lastSelectedQuantity = thisBuilt.querySelector('.quantityScroller.primary .wheelItem.selected').dataset.val;
                          if (app.currentRecipe.leftmenutyp === 'strength') {
                              app.currentRecipe.lastSelectedStrength = thisBuilt.querySelector('.strengthScroller .wheelItem.selected').dataset.val;
                          }
                          const seq = [{
                              fn: ()=>{
                                  seqOutput.innerHTML = _('preheat');
                                  thisBuilt.classList.add('preheat');
                                  app.showSpinner();
                              }
                              ,
                              delay: 1000
                              }, {
                              fn: ()=>{
                                  app.hideSpinner();
                                  thisBuilt.classList.remove('preheat');
                                  thisBuilt.classList.add('running');
                              }
                              ,
                              delay: 0 }, ];


                          if (app.currentRecipe.step2Typ == 'false' && app.currentRecipe.step2Typ !== 'vol') {
                              seq.push({
                                  fn: ()=>{
                                      seqOutput.innerHTML = (app.currentRecipe.code == "laitmousse")?_('foaming'):'';
                                  }
                                  ,
                                  delay: 4000
                              }, );
                          } else if (app.currentRecipe.step2Typ !== 'vol') {
                              seq.push({
                                  fn: ()=>{
                                      seqOutput.innerHTML = _('cafe');
                                      thisBuilt.querySelectorAll('.secondary').forEach((el)=>{
                                          el.style.opacity = 1;
                                      }
                                      );
                                      thisBuilt.querySelectorAll('.primary').forEach((el)=>{
                                          el.style.opacity = 0;
                                      }
                                      );
                                  }
                                  ,
                                  delay: 2000
                              }, {
                                  fn: ()=>{
                                      seqOutput.innerHTML = _('foaming');
                                      thisBuilt.querySelectorAll('.secondary').forEach((el)=>{
                                          el.style.opacity = 0;
                                      }
                                      );
                                      thisBuilt.querySelectorAll('.primary').forEach((el)=>{
                                          el.style.opacity = 1;
                                      }
                                      );
                                  },
                                  delay: 2000
                              }, );
                          } 

                          if (app.currentRecipe.step2Typ === 'vol') {
                              seq.push({
                                  fn: ()=>{
                                      seqOutput.innerHTML = _('foaming');
                                  }, delay: 2000},
                                  {
                                  fn: ()=>{
                                      seqOutput.innerHTML = _('cafe');
                                      thisBuilt.querySelectorAll('.primary').forEach((el)=>{
                                          el.style.opacity = 0;
                                      }
                                      );
                                      thisBuilt.querySelectorAll('.secondary').forEach((el)=>{
                                          el.style.opacity = 1;
                                      }
                                      );
                                  }, delay: 2000 }, );
                          }

                          seq.push({
                              fn: ()=>{
                                  seqOutput.innerHTML = _('');
                              },
                              delay: 100
                          }, );

                          //const addedseq = app.currentRecipe.sequences.split(';');
                          //const intertime = recipeDuration / (addedseq.length );
                          //addedseq.forEach(function() {
                          //});

                          //console.log('SEQUENCE:', seq);

                          that.recipeSequence = new sequence(seq,(completed)=>{
                              //  console.log('sequence done');
                              if (completed) {
                                  app.loadPage('ready', null);
                              } else {
                                  app.hideSpinner();
                              }
                              that.recipeSequence = false;
                          }
                          );
                      };
                  } else {
                      console.warn('ERROR');
                  }

                  callback();
              },
              beforeShow: function() {
                  let adding = false;
                  if (this.referrer.pageId == 'addRecipe') {
                      adding = true;
                  }
                  if (app.currentProfile && !adding) {
                      this.built.querySelector('.startButton').style.display = 'none';
                      this.built.querySelector('.stopButton').style.display = 'initial';
                      this.built.querySelector('.nextButton').style.display = 'none';
                  }
                  if (app.currentProfile && adding) {
                      this.built.querySelector('.startButton').style.display = 'none';
                      this.built.querySelector('.stopButton').style.display = 'none';
                      this.built.querySelector('.nextButton').style.display = 'initial';
                  }
                  if (this.quantityScroller) {
                      const a = this.built.querySelector('.quantityScroller.primary [data-val="' + app.currentRecipe.rightmenudefault + '"]', );
                      this.quantityScroller.scrollToFunction(a);
                      this.lastSelectedQuantity = app.currentRecipe.rightmenudefault;
                  }

                  if (this.secondaryScroller) {
                      const a = this.built.querySelector('.quantityScroller.secondary [data-val="' + app.currentRecipe.step2Default + '"]', );
                      this.secondaryScroller.scrollToFunction(a);
                  }

                  if (this.strengthScroller) {
                      const a = this.built.querySelector('[data-val="' + app.currentRecipe.leftmenudefault + '"]', );
                      this.strengthScroller.scrollToFunction(a);
                      this.lastSelectedStrength = app.currentRecipe.leftmenudefault;
                  }
              },
              run: function() {
                  let adding = false;
                  if (this.referrer.pageId == 'addRecipe') {
                      adding = true;
                  }
                  if (app.currentProfile && !adding) {
                      if (this.strengthScroller)
                          this.strengthScroller.pause = true;
                      this.quantityScroller.pause = true;
                      this.built.querySelector('.startButton').click();
                      // Olé !
                  }
              },
              quit: function() {
                  this.built = false;
                  clearTimeout(this.canceltimout);
                  if (this.recipeSequence)
                      this.recipeSequence.stop();
                  return true;
              },
              html: function() {
                  let adding = false;
                  if (this.referrer.pageId == 'addRecipe') {
                      adding = true;
                  }

                  const mlScroller = function(position, data) {
                      let menu = `
              <div class="wheel vWheel right quantityScroller hideOnCancel ${position}">
              <div class="wheelItem noAction"></div>`;

                      data.split(';').forEach(function(val) {
                          menu += `<div data-val="${val}" class="wheelItem">${val}</div>`;
                      });

                      menu += `
              <div class="wheelItem noAction last"></div>
              </div>
              <div class="vwheelCenter ${position} hideOnCancel right userBorderColor">&nbsp;</div>
              <div class="vwheelUnit ${position} hideOnCancel right">ml</div>
              `;
                      return menu;
                  };

                  const volScroller = function(position) {
                      return `
                 <div class="wheel vWheel right quantityScroller hideOnCancel ${position}">
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
                  };

                  let rightMenu = '';
                  let secondaryMenu = '';

                  if (app.currentRecipe.rightmenutyp == 'ml') {
                      rightMenu += mlScroller('primary', app.currentRecipe.rightmenuvalues);
                  }
                  if (app.currentRecipe.rightmenutyp == 'vol') {
                      rightMenu += volScroller('primary');
                  }
                  if (app.currentRecipe.step2Typ) {
                      secondaryMenu += mlScroller('secondary', app.currentRecipe.step2Values);
                  }

                  let additionnalClass = ' ';
                  if (app.currentProfile && !adding) {
                      additionnalClass = app.currentProfile.color + ' userMode ';
                  }
                  if (app.currentProfile && adding) {
                      additionnalClass = ' ' + app.currentProfile.color + ' adding';
                  }
                  if (!app.currentProfile) {
                      additionnalClass = 'orange';
                  }

                  return `
                  <div class="pageContent prepare ${app.currentRecipe.bkg} ${additionnalClass}">
                  <style>
                  .canceled .hideOnCancel{
                      opacity:0!important;
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
                          ${(app.currentProfile) ? '<div class="userTitleClip userBorderColor"></div>' : ''}
                      </div>

                      <div class="sequence" style="position: absolute; width: 173px;left: 25px; top: 54px; height: 46px; text-align:center">
                          <span></span>
                      </div>
                      <div class="imageHolder dimOnCancel">
                          <img class="recipeImage " nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style=" object-position:${app.currentProfile && !adding ? app.currentRecipe.x2 ? ' -' + app.currentRecipe.spritexy_x2.split(';')[0] * 150 + 'px' + ' -' + app.currentRecipe.spritexy_x2.split(';')[1] * 150 + 'px' : ' -' + app.currentRecipe.spritexy.split(';')[0] * 150 + 'px' + ' -' + app.currentRecipe.spritexy.split(';')[1] * 150 + 'px' : ' -' + app.currentRecipe.spritexy_x1.split(';')[0] * 150 + 'px' + ' -' + app.currentRecipe.spritexy_x1.split(';')[1] * 150 + 'px'}
                          "/>
                      </div>
                      <div class="cancelIcon">
                          <svg viewBox="0 0 64.4 64.4" class="">
                              <use href="#canceled" />
                          </svg>
                      </div>

                      ${app.currentRecipe.canx2 && (!app.currentProfile || adding) ? `
                      <div class="plusMinusButton hideOnCancel" style="position: absolute; left: 151px; top: 104px; width: 32px; height: 32px;">
                          <svg viewBox="0 0 32 32" class="">
                          <use href="#plusButton" />
                          </svg>
                      </div>
                      ` : ``}

                      <div class="progressBarBkg hideOnCancel">
                          <div class="progressBar">
                          </div>
                      </div>
                  </div>
                  <div class="stopButton userBorderColor hideOnCancel" style="text-transform:uppercase">${_('stop')}</div>
                  <div class="startButton userBorderColor hideOnCancel" style="text-transform:uppercase">${_('start')}</div>
                  <div class="nextButton userBorderColor hideOnCancel" style="text-transform:uppercase">${_('next')}</div>
                  <div class="target quantityScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:384px; top:160px"></div>
                  
                  ${secondaryMenu}
                  ${rightMenu}

                  ${app.currentRecipe.leftmenutyp === 'strength' ? `
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
                  ` : ''}

              </div>
              `;
              },
          },

          ready: {
              name: 'ready',
              built: false,
              thisTimeOut: null,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.profileButton').addEventListener('click', function() {
                      app.loadPage('profileSelection', null);
                  });

                  callback();
              },
              beforeShow: function() {},
              run: function() {
                  this.thisTimeOut = setTimeout(()=>{
                      app.loadPage('recettes', null);
                  }
                  , 4000);
              },
              quit: function() {
                  clearTimeout(this.thisTimeOut);
                  this.built = false;
                  return true;
              },
              html: function() {
                  return `

          <div class="pageContent ready ${app.currentRecipe.bkg} ${(app.currentProfile) ? app.currentProfile.color + ' userMode' : 'orange'}">

          <div class="centralArea" style="position:absolute;width:360px;left:60px;height:100%;background-color:rgba(255,255,255,.15)">

          <div class="ready" style="position: absolute;
          width: 100%;
          left: 0;
          top: 90px;
          height: 46px;
          text-align: center;
          font-size: 24px;">
              <span>${_('enjoy')}</span>
          </div>
          
          <div class="imageHolder" style=" top: 133px; left: 104px; transform: scale(1.3);">
              <img class="recipeImage " nopin = "nopin" data-alt="${imag('recipesSheet', )}" src="${imag('recipesSheet')}" style="
              object-position: ${(!app.currentRecipe.x2) ? ('-' + app.currentRecipe.spritexy.split(';')[0] * 150 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 150 + 'px') : ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 150 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 150 + 'px')} "/>
          </div>
              <div class="profileButton" style="${app.currentProfile ? 'display:none;' : ''}position:absolute;top: 232px; left: 274px; width:60px;height:60px">
                  <svg style="" viewBox="0 0 32 32">
                      <use href="#profileButton" />
                  </svg>
              </div>
          </div>
          <div class="titleBlock">
          <span class="title">${_(app.currentRecipe.code, )}</span>
          ${(app.currentProfile) ? '<div class="userTitleClip userBorderColor"></div>' : ''}

          </div>
          </div>`;
              },
          },

          profileSelection: {
              name: 'profileSelection',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.profileOneButton').addEventListener('click', function() {
                      app.currentProfile = app.profiles.userOne;
                      app.loadPage('keywordSelection', null);
                  });
                  thisBuilt.querySelector('.profileTwoButton').addEventListener('click', function() {
                      app.currentProfile = app.profiles.userTwo;
                      app.loadPage('keywordSelection', null);
                  });

                  thisBuilt.querySelector('.backToMain').addEventListener('click', function() {
                      app.loadPage('recettes', null);

                  });

                  callback();
              },
              beforeShow: function() {},
              run: function() {
              },
              quit: function() {
                  this.built = false;
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
                  (!app.currentRecipe.x2) ? ('-' + app.currentRecipe.spritexy.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px') : ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 50 + 'px')} "/>
          </div>
              <span>${_('selectYourProfile')}</span>
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
                  const thisBuilt = this.built;
                  this.keywordSelection = new Hscroller(thisBuilt.querySelector('.keywords.hScroller'),);

                  const keywordsElems = thisBuilt.querySelectorAll('.kword');
                  keywordsElems.forEach(function(el) {
                      el.addEventListener('click', ()=>{
                          if (thisBuilt.querySelector('.kword.selected')) {
                              thisBuilt.querySelector('.kword.selected').classList.remove('selected');
                          }
                          el.classList.add('selected');
                          app.lastSelectedKeyword = el.dataset.id;
                      }
                      );
                  }, );

                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('profileSelection', null);
                  });

                  thisBuilt.querySelector('.validateKeyWord').addEventListener('click', function() {
                      app.loadPage('profileSuccess');
                  });

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
                      
          <div class="pageContent keywordSelection ${app.currentProfile.bkg} ${app.currentProfile.color}">


          <div class="backButton">
          <svg style="" viewBox="0 0 26 26" >
          <use href="#backArrow" />
          </svg>
          </div>
          <div class="titleBlock light wide">
              <span class="title">${_('addToFavs')}</span>
          </div>
          <div class="userTitleClip userBorderColor"></div>
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
                  src="${imag('recipesSheet')}" style="width:300px;height:300px; object-position: ${(!app.currentRecipe.x2) ? ('-' + app.currentRecipe.spritexy.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px') : ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 50 + 'px')
                  } "/>
          </div>
              <span>${_('selectKeyword')}</span>
          </div>
              <div class="keywords hScroller" style="position:absolute; top:159px;height:43px;width:100%">
              ${(function() {
                      let keywordList = '';
                      kxkeywords.forEach(function(val, key) {
                          keywordList += '<div class="kword ' + (key == 0 ? 'selected' : '') + '" data-id=' + val + '>' + _(val) + '</div>';
                      });
                      return (keywordList);
                  }
                  )()}
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

                  callback();
                  const newFav = {
                      keyword: app.lastSelectedKeyword,
                      leftmenuval: app.currentRecipe.lastSelectedStrength,
                      recipe: app.currentRecipe.code,
                      rightmenuval: app.currentRecipe.lastSelectedQuantity,
                      x2: app.currentRecipe.x2,
                  };
                  app.currentProfile.favs.push(newFav);
                  app.saveProfile();
                  setTimeout(function() {
                      app.loadPage('profile', null);
                  }, 2000);
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.built = false;
                  return true;
              },
              html: function() {
                  return `
                      
          <div class="pageContent profileSuccess ${app.currentProfile.bkg} ${app.currentProfile.color}" style="display: flex;
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
              <img class="recipeImage " nopin="nopin" data-alt="images/recipesSheet.png" src="${imag('recipesSheet')}" style="width:300px;height:300px; text-align:left;object-position: ${(!app.currentRecipe.x2) ? ('-' + app.currentRecipe.spritexy.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy.split(';')[1] * 50 + 'px') : ('-' + app.currentRecipe.spritexy_x2.split(';')[0] * 50 + 'px -' + app.currentRecipe.spritexy_x2.split(';')[1] * 50 + 'px')} 

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
              ${_('beforeThxs')} <span style="font-weight:600">${_(app.currentRecipe.code)} ${_(app.lastSelectedKeyword)}</span> ${_('afterThxs')}
              </div>
              
          </div>
    `;
              },
          },

          profile: {
              name: 'profile',
              built: false,
              build: function(callback) {
                  const recipes = this.built.querySelectorAll('.atile.userRecipe');
                  recipes.forEach((el)=>el.addEventListener('click', ()=>{
                      const thisFav = app.currentProfile.favs[el.dataset.val];
                      app.currentRecipe = Object.assign({}, app.recipes[thisFav.recipe]);
                      app.currentRecipe.leftmenudefault = thisFav.leftmenuval;
                      app.currentRecipe.rightmenudefault = thisFav.rightmenuval;
                      app.currentRecipe.x2 = thisFav.x2;
                      app.loadPage('prepare', null);
                  }
                  ), );

                  this.favorites = new Hscroller(this.built.querySelector('.slides'),);

                  this.built.querySelector('.userSettings').addEventListener('click', ()=>{
                      app.loadPage('userSettingsHome', null);
                  }
                  );

                  this.built.querySelector('.addFavToUser').addEventListener('click', ()=>{
                      app.loadPage('addRecipe', null);
                  }
                  );

                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.built = false;
                  return true;
              },
              html: function() {
                  let rhtml = `
          <div class="pageContent profile ${app.currentProfile.bkg} ${app.currentProfile.color}">
          <div class="titleBlock light wide">
          <span class="title">${_(app.currentProfile.name)}</span>
          </div>
          <div class="userTitleClip userBorderColor"></div>
              <style>


              </style>

              <section class="slides" >
                  `;
                  const chunks = [];
                  for (let i = 0; i < app.currentProfile.favs.length + 2; i += 8) {
                      chunks.push(app.currentProfile.favs.slice(i, i + 8));
                  }
                  chunks.forEach(function(aChunk, key) {
                      rhtml += `<div class="tilesBlock"><div class="tiles" data-key="${key}">`;

                      aChunk.forEach(function(v, k) {
                          const thisRecipe = app.recipes[v.recipe];
                          rhtml += `
                              <div class="atile userRecipe" data-val="${k}">
                              <div class="titleBlock">
                              <div class="title">
                              <span>${_(thisRecipe.code + '_short')}</span>
                              </div>
                              </div>
                              <div class="userTitleClip userBorderColor"></div>
                              <div class="keyword"><span>${_(v.keyword)}</span></div>
                              <div class="thumb">
                              <img nopin = "nopin" data-alt="${imag('recipesSheet')}"
                              src="${imag('recipesSheet')}" 
                              style="object-position: 
                              ${(!v.x2) ? ('-' + thisRecipe.spritexy.split(';')[0] * 75 + 'px -' + thisRecipe.spritexy.split(';')[1] * 75 + 'px') : ('-' + thisRecipe.spritexy_x2.split(';')[0] * 75 + 'px -' + thisRecipe.spritexy_x2.split(';')[1] * 75 + 'px')}
                              "></div></div>`;
                      });
                      if (key + 1 == chunks.length) {
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
                  });

                  rhtml += `</section>
          </div>
          `;
                  return rhtml;
              },
          },

          settings: {
              built: false,
              build: function(callback) {
                  const buttons = this.built.querySelectorAll('.paramMenuButton');
                  buttons.forEach(function(el) {
                      el.addEventListener('click', ()=>{
                          app.loadPage(el.dataset.target, null);
                      }
                      );
                  }, );

                  callback();
              },
              beforeShow: function() {
              },
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent settings bkg16">
          <div class="titleBlock light" style="left:99px;width:282px">
          <span class="title">${_('settings')}</span>
          </div>
              
              <section class="params" >
              <div class ="paramMenuButton" data-target="setups"> ${_('setups')} </div>
              <div class ="paramMenuButton" data-target="care"> ${_('care')} </div>
              <div class ="paramMenuButton" data-target="informations"> ${_('informations')} </div>
              <div class ="paramMenuButton" data-target="help"> ${_('help')} </div>

              </section>

              </div>

              `;
                  return rhtml;
              },
          },

          setups: {
              name: 'setups',
              built: false,
              build: function(callback) {
                  var thatpage = this;
                  if (!thatpage.data || thatpage.data == null)
                      thatpage.data = {};
                  if (!thatpage.data.slide)
                      thatpage.data.slide = 1;
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('settings', null);
                  });

                  this.slider = new hslider(thisBuilt.querySelector('.slides'),function(c) {
                      thisBuilt.querySelector('.pager.selected').classList.remove('selected');
                      thisBuilt.querySelector('.pager_' + c).classList.add('selected');
                      thatpage.data.slide = c;
                  }
                  ,);

                  const buttons = this.built.querySelectorAll('.atile.settings.active');
                  buttons.forEach(function(el) {
                      el.addEventListener('click', ()=>{
                          app.loadPage(el.dataset.target, (el.dataset.data ? el.dataset.data : null));
                      }
                      );
                  });

                  callback();
              },
              beforeShow: function() {
                  var thatpage = this;
                  if (thatpage.data.slide == 2) {
                      this.slider.element.scrollLeft = 480;
                      this.built.querySelector('.pager_1').classList.remove('selected');
                      this.built.querySelector('.pager_2').classList.add('selected');
                  }
                  const clockDom = this.built.querySelector('span.ftime');
                  app.clock.run(clockDom);
                  const dateDom = this.built.querySelector('span.fdate');
                  app.clock.runDate(dateDom);
              },
              run: function() {},
              quit: function() {
                  app.clock.stop();
                  this.built = false;
                  return true;
              },
              html: function() {
                  const rhtml = `
              
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
              <span>${_('language')}</span>
              </div>
              <div class="hsep"></div>
                  <div class="atileContents">
                  <div>${kxLg[app.lg].display.toUpperCase()}</div>
                  </div>
              </div>

              <div class="atile settings active" data-target="dateTime" data-val="0">
              <div class="titleBlock">
              <span>${_('dateTime_short')}</span>
              </div>
              <div class="hsep"></div>
                  <div class="atileContents">
                  <div class="dateTimeFormated"><span class="fdate"></span><br><span class="ftime"></span></div>
                  </div>
              </div>


              <div class="atile settings active" data-target="slider" data-data="backlight" data-val="0">
              <div class="titleBlock">
              <span>${_('screenLight_short')}</span>
              </div>
              <div class="hsep"></div>
                  <div class="tileIcon">
                  <svg style="" viewBox="0 0 44 44">
                      <use href="#backLight"></use>
                  </svg>
                  </div>
              </div>

              <div class="atile settings active" data-target="switch" data-data="deviceLight">
                  <div class="titleBlock">
                      <span>${_('deviceLight_short')}</span>
                  </div>
                  <div class="hsep"></div>
                  <div class="tileIcon">
                      <svg style="" viewBox="0 0 44 44">
                          <use href="#lightOn"></use>
                      </svg>
                  </div>
              </div>


              <div class="atile settings active" data-val="0" data-target="switch" data-data="display">
              <div class="titleBlock">
              <span>${_('display_short')}</span>
              </div>
              <div class="hsep"></div>
                  <div class="tileIcon" style="width: 65px;
                  height: 44px;
                  left: 24px;
                  top: 42px;">
                  <svg viewBox="0 0 44 44" style="width:100%">
                      <use href="#tiles"></use>
                  </svg>
                  </div>
              </div>

              <div class="atile settings active" data-target="slider" data-data="autoOff">
              <div class="titleBlock">
              <span>${_('autoOff_short')}</span>
              </div>
              <div class="hsep"></div>
              <div class="atileContents">
              <div>${'15mn.'}</div>
              </div>
              </div>

              <div class="atile settings active" data-target="switch" data-data="unit">
              <div class="titleBlock">
              <span>${_('volUnity_short')}</span>
              </div>
              <div class="hsep"></div>
              <div class="atileContents">
              <div>${'ml'}</div>
              </div>
              </div>


              <div class="atile settings active" data-target="switch" data-data="autoRinse">
              <div class="titleBlock">
              <span>${_('autoRinse_short')}</span>
              </div>
              <div class="hsep"></div>
                  <div class="atileContents">
                  <div>${_('off').toUpperCase()}</div>
                  </div>
              </div>


              </div>
              </div>
              <div class="tilesBlock">

          <div class="tiles" data-key="0">


          <div class="atile settings active" data-target="slider" data-data="waterHardness">
          <div class="titleBlock">
          <span>${_('waterHardness_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="atileContents">
              <div>${'3'}</div>
              </div>
          </div>

          <div class="atile settings active" data-target="slider" data-data="coffeeTemp">
          <div class="titleBlock">
          <span>${_('coffeeTemp_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="atileContents">
              <div>${'T°2'}</div>
              </div>
          </div>


          <div class="atile settings active" data-val="0" data-target="slider" data-data="waterTemp">
          <div class="titleBlock">
          <span>${_('teaTemp_short')}</span>
          </div>
          <div class="hsep"></div>
          <div class="atileContents">
          <div>${'T°3'}</div>
          </div>
          </div>

          <div class="atile settings active" data-val="0" data-target="switch" data-data="cafeTyp">
          <div class="titleBlock">
          <span>${_('cafeTyp_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="atileContents">
              <div>${_('greasyCoffee')}</div>
              </div>
          </div>          

          <div class="atile settings active" data-val="0" data-target="selectProfile" data-data="">
          <div class="titleBlock">
          <span>${_('profileSettings_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#userSettings"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings active" data-val="0" data-target="reset" data-data="">
          <div class="titleBlock">
          <span>${_('reset_short')}</span>
          </div>
          <div class="hsep"></div>
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
              name: 'care',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('settings', null);
                  });

                  thisBuilt.querySelector('.atile.cleanup').addEventListener('click', function() {
                      app.loadPage('cleanup', null);
                  });

                  (this.built.querySelectorAll('.atile.settings.inactive')).forEach(function(el) {
                      el.addEventListener('click', ()=>{
                          app.toast(_('onlyCleanup'));
                      }
                      );
                  });

                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
          <div class="titleBlock light" style="left:99px;width:282px">
          <span class="title">${_(this.name)}</span>
          </div>

          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>

          <section class="slides">

          <div class="tilesBlock">
          <div class="tiles" data-key="0">

          <div class="atile settings inactive" data-target="unavailable">
          <div class="titleBlock">
          
          <span>${_('coffeeRinse_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon ">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#rinseCoffee"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings active cleanup" data-target="available">
          <div class="titleBlock">
          
          <span>${_('cleanup')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon ">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#cleanK"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings inactive" data-target="unavailable" >
          <div class="titleBlock">
          <span>${_('descaling')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon ">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#descaling"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings inactive" data-target="unavailable" >
          <div class="titleBlock">
          <span>${_('filter')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon ">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#filter"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings inactive" data-target="unavailable" >
          <div class="titleBlock">
          <span>${_('milkRinse_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#rinseMilk"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings inactive" data-target="unavailable" >
          <div class="titleBlock">
          <span>${_('milkAccClean_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon ">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#cleanMilkAcc"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings inactive" data-target="unavailable" >
          <div class="titleBlock">
          <span>${_('teaRinse_short')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon ">
              <svg style="" viewBox="0 0 44 44">
                  <use href="#rinseCoffee"></use>
              </svg>
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

          informations: {
              name: 'informations',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('settings', null);
                  });

                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  let rhtml = `
          <div class="pageContent ${this.name} bkg16">
          <div class="titleBlock light" style="left:99px;width:282px">
          <span class="title">${_(this.name)}</span>
          </div>
          <div class=" backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>
              <style>

                  .InfoBlock{
                      width:350px;
                      height:213px;
                      display:inline-block;
                      box-sizing:border-box;
                      border-right : solid 1px white;
                  }

                  .InfoBlock:last-child{
                      border-right : unset;
                  }

                  .InfoBlock .infoScrollerItem{
                      width: 305px;
                      height:75px;
                      top:0;
                      font-size:18px;
                      padding-left:27px;
                      position: absolute;
                  }

                  .InfoBlock .infoScrollerItem:nth-child(2){
                      top:75px;
                  }

                  .InfoBlock .infoScrollerItem:nth-child(3){
                      top:150px;
                  }

                  .InfoBlock .infoScrollerItem .title{
                      position: absolute;
                      left: 100px;
                      top: 25px;
                      font-size: 20px;
                  }

                  .InfoBlock .infoScrollerItem.totalLine .title{
                      left: 24px;
                      font-weight:bold;
                  }

                  .InfoBlock .infoScrollerItem .counter{
                      position: absolute;
                      right: 25px;
                      top:25px;
                      font-size: 20px;
                      font-weight:bold;
                  }

                  .infoScrollerItem .thumb{
                      position: absolute;
                      width: 150px;
                      height: 150px;
                      top: 0;
                      left: 0;
                      overflow: hidden;
                      transform: scale(0.5);
                      transform-origin: 0 0;
                  }

                  .infoScrollerItem .thumb img {
                      width: 900px;
                      height: 900px;
                      pointer-events: none;
                  }
              </style>

              <section id="infoScroller" class="hScroller" >
                  `;
                  let i = 0;
                  for (const [key,value] of Object.entries(app.recipes)) {
                      i++;
                      // TODO : BOF BOF BOF....
                      rhtml += `
              ${(i == 1 || i == 3 || i == 6 || i == 9 || i == 12 || i == 15) ? '<div class="InfoBlock">' : ''}
              ${(i == 1) ? ` <div class="infoScrollerItem totalLine"><div class="title">${_('roundsDesc')}</div><div class="counter">0</div></div>` : ''}
              <div class="infoScrollerItem" data-val="${key}">
                  <div class="thumb">
                      <img nopin = "nopin" data-alt="${imag('recipesSheet')}" src="${imag('recipesSheet')}" style="object-position: ${'-' + value.spritexy.split(';')[0] * 150 + 'px'} ${'-' + value.spritexy.split(';')[1] * 150 + 'px'}">
                  </div>
                  <div class="title">
                      <span>${_(value.code)}</span>
                  </div>
                  <div class="counter">0</div>

              </div>
              ${(i == 2 || i == 5 || i == 8 || i == 11 || i == 14 || i == 15) ? '</div>' : ''}
              `;
                  }
                  rhtml += `

          </section>
              </div>

              `;
                  return rhtml;
              },
          },

          language: {
              name: 'language',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('setups', null);
                  });

                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.lg = thisBuilt.querySelector('.langScroller .wheelItem.selected').dataset.val;
                      //Cookies.set('lg', app.lg);
                      localStorage.setItem('lg', app.lg);
                      app.resetBuilds();
                      app.loadPage('setups', null);
                  });

                  this.lgScroller = new vscroller(thisBuilt.querySelector('.langScroller'),thisBuilt.querySelector('.langScroller_target'),);

                  callback();
              },
              beforeShow: function() {
                  if (this.lgScroller) {
                      const a = this.built.querySelector('[data-val="' + app.lg + '"]', );
                      this.lgScroller.scrollToFunction(a);
                  }
              },
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  let lgScrollerItems = '';

                  for (const [k,v] of Object.entries(kxLg)) {
                      lgScrollerItems += `<div class="wheelItem langScroller" data-val="${k}">${v.display}</div>
              `;
                  }

                  const rhtml = `

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
              </style>
              <div class="target langScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:96px; top:160px"></div>
              <div class="wheel vWheel left langScroller">

                  <div class="wheelItem noAction"></div>
                      ${lgScrollerItems}
                  <div class="wheelItem noAction"></div>
              </div>
              <div class="vwheelCenter left userBorderColor">&nbsp;</div>

              <div class="okButton square borderOrange">${_('ok')}</div>

              </div>

              `;
                  return rhtml;
              },
          },

          firstName: {
              name: 'firstName',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  let name = app.currentProfile.name;
                  const maxChar = 12;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('userSettingsHome', null);
                  });

                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.currentProfile.name = name;
                      app.saveProfile();
                      app.loadPage('userSettingsHome', null);
                  });

                  this.lgScroller = new Hscroller(thisBuilt.querySelector('.langScroller'),);

                  const nameField = thisBuilt.querySelector('.nameField');
                  const backSpace = thisBuilt.querySelector('.backSpaceButton');
                  const keys = this.built.querySelectorAll('.hScrollerItem');
                  const remain = this.built.querySelector('.remain');
                  function nameToField(n) {
                      name = n = n.substring(0, maxChar);
                      const strlength = maxChar - n.length;
                      let str2field = name;
                      for (let i = 0; i < strlength; i++) {
                          str2field += '<span class="dash"> _ </span>';
                      }

                      nameField.innerHTML = str2field;
                      remain.innerHTML = (maxChar - n.length <= 1) ? _('remains').replace('%s', maxChar - n.length) : _('remains').replace('%s', maxChar - n.length);
                  }

                  keys.forEach(function(el) {
                      el.addEventListener('click', ()=>{
                          name = name + el.dataset.val;
                          nameToField(name);
                      }
                      );
                  });

                  backSpace.addEventListener('click', ()=>{
                      name = name.slice(0, -1);
                      nameToField(name);
                  }
                  );

                  nameToField(name);

                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.built = false;
                  return true;
              },
              html: function() {
                  let lgScrollerItems = '';
                  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&-123567890'.split('');
                  alpha.forEach(function(char) {
                      lgScrollerItems += `<div class="hScrollerItem" data-val="${char}"><span>${char}</span></div>`;
                  });

                  const rhtml = `

      <div class="pageContent firstName ${app.currentProfile.bkg} ${app.currentProfile.color}">
      <div class="titleBlock wide light">
      <span class="title">${_('firstName')}</span>
      </div>
      <div class="userTitleClip wide userBorderColor"></div>


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
              name: 'color',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  let color = app.currentProfile.color;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('userSettingsHome', null);
                  });

                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.currentProfile.color = color;
                      app.saveProfile();
                      app.loadPage('userSettingsHome', null);
                  });

                  this.colorScroller = new Hscroller(thisBuilt.querySelector('.colorScroller'),);

                  const colors = this.built.querySelectorAll('.hScrollerItem');

                  colors.forEach(function(el) {
                      el.addEventListener('click', ()=>{
                          thisBuilt.querySelector('.hScrollerItem.selected').classList.remove('selected');
                          color = el.dataset.name;
                          el.classList.add('selected');
                          thisBuilt.classList.remove('orange', 'cyan', 'turquoise', 'green', 'gold', 'red', 'fushia', 'pink', 'violet', 'blue');
                          thisBuilt.classList.add(color);
                      }
                      );
                  });

                  callback();
              },
              beforeShow: function() {
                  const selected = this.built.querySelector('[data-name="' + app.currentProfile.color + '"]');
                  selected.classList.add('selected');
                  this.built.querySelector('.colorScroller').scrollTo({
                      left: selected.offsetLeft - 200
                  });
              },
              run: function() {},
              quit: function() {
                  this.built = false;
                  return true;
              },
              html: function() {
                  let colorScrollerItems = '';

                  for (const [key,value] of Object.entries(kxColors)) {
                      colorScrollerItems += `<div class="hScrollerItem" data-name="${key}" data-val="${value}">
                  <div style="background-color:${value}">&nbsp;</div>
              </div>`;
                  }

                  const rhtml = `
          <div class="pageContent colors ${app.currentProfile.bkg} ${app.currentProfile.color}">
          <div class="titleBlock wide light">
          <span class="title">${_('color')}</span>
          </div>
          <div class="userTitleClip wide userBorderColor"></div>

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
                  box-shadow: 0 0 5px 2px, 0 0 12px 2px;
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

          program: {
              name: 'program',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  const color = app.currentProfile.color;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('userSettingsHome', null);
                  });

                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.currentProfile.color = color;
                      app.loadPage('userSettingsHome', null);
                  });

                  (thisBuilt.querySelectorAll('.unsupported')).forEach((el)=>el.addEventListener('click', ()=>{
                    app.toast(_('unsupported'));}
                  , ));


                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.built = false;
                  return true;
              },
              html: function() {
                  const rhtml = `

          <div class="pageContent colors ${app.currentProfile.bkg} ${app.currentProfile.color}">
          <div class="titleBlock wide light">
          <span class="title">${_('planning')}</span>
          </div>
          <div class="userTitleClip wide userBorderColor"></div>

              <div class="backToMain backButton">
                  <svg style="" viewBox="0 0 26 26" >
                  <use href="#backArrow" />
              </div>
              <style>
              .block{
                  position:absolute; left:20px; width:210px;top:119px;height:130px;
                  background:rgba(255,255,255,0.2);
              }
              .block.right{
                  left:249px;
              }
              .block .checkbox{
                  position:absolute;
                  width:25px;
                  height:25px;
                  top:10px;
                  left:12px;
                  background-color:white;

              }


              .block .checkbox .inner{
                  display:none;
                  position:absolute;
                  width:100%;
                  height:100%;
              }

              .block .checkbox.checked .inner{
                  display:block;
              }


              .block .drink{
                  position: absolute;
                  width: 49px;
                  height: 49px;
                  top: 73px;
                  left: 140px;
              }

              .block .separator{
                  width: 1px;
                  height: 62px;
                  background-color: #ffffff85;
                  position: absolute;
                  left: 104px;
                  top: 59px;
              }

              .block .checkboxtitle{
                  position: absolute;
                  left: 48px;
                  font-size: 18px;
                  font-weight: bold;
                  top: 10px;
              }

              .block .time{
                  position: absolute;
                  left: 2px;
                  font-size: 18px;
                  font-weight: bold;
                  top: 76px;
                  width: 101px;
                  text-align: center;
              }

              </style>

              <div class="settingsDesc">${_('programDesc')}</div>
              

              <div class="block" >
              <div class="checkbox unsupported"></div>
              <div class="checkboxtitle">${_('week')}</div>
              <div class="time unsupported" >07:30</div>
              <div class="separator"></div>
              <div class="drink unsupported">
                  <svg style="" viewBox="0 0 32 32" style="width:100%" >
                  <use href="#recette" />
              </div>
          </div>


              <div class= "block right" >
                  <div class="checkbox checked unsupported">
                      <div class="inner userFIllColor">
                          <svg style="" viewBox="0 0 32 32" style="width:100%" >
                          <use href="#checkMark" />
                      </div>
                  </div>
                  <div class="checkboxtitle">${_('weekend')}</div>
                  <div class="time unsupported" >10:00</div>
                  <div class="separator"></div>
                  <div class="drink unsupported" style="
                  top: 53px;
                  left: 114px;
                  overflow: hidden;
                  width: 73px;
                  height: 73px;
                  ">
                  <img nopin="nopin" src="${imag('recipesSheet')}" style="
                  object-position:-225px -150px;
                  width: 450px;
                  height: 450px;
                  ">
                  </div>
              </div>




              <div class="okButton startButton bottom userBorderColor">${_('OK')}</div>

              </div>

              `;
                  return rhtml;
              },
          },

          userSettingsHome: {
              name: 'userSettingsHome',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('profile', null);
                  });



                  const buttons = this.built.querySelectorAll('.atile.settings.active');
                  buttons.forEach(function(el) {
                      el.addEventListener('click', ()=>{
                          app.loadPage(el.dataset.target, (el.dataset.data ? el.dataset.data : null));
                      }
                      );
                  });

                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.built = false;
                  return true;
              },
              html: function() {
                  const rhtml = `

      <div class="pageContent userSettingsHome ${app.currentProfile.bkg} ${app.currentProfile.color}">
      <div class="titleBlock wide light">
      <span class="title">${app.currentProfile.name}</span>
      </div>
      <div class="userTitleClip wide userBorderColor"></div>

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
          
          <span>${_('color')}</span>
          </div>
          <div class="hsep"></div>
          <div class="atileContents">
          <div class="ellipsis ">
              <div class="userFIllColor" style="width : 51px;display:inline-block;height:3px;"></div>
          </div>
          </div>


          </div>

          <div class="atile settings active" data-target="firstName" data-val="0" style="">
              <div class="titleBlock">
                  <span>${_('firstName')}</span>
              </div>
              <div class="hsep"></div>
              <div class="atileContents">
                  <div class="ellipsis">${app.currentProfile.name}</div>
              </div>
          </div>

          <div class="atile settings active" data-val="0" data-target="switch" data-data="display">
          <div class="titleBlock">
          <span>${_('display')}</span>
          </div>
          <div class="hsep"></div>
              <div class="tileIcon" style="width: 65px;
              height: 44px;
              left: 24px;
              top: 42px;">
              <svg viewBox="0 0 44 44" style="width:100%">
                  <use href="#slider"></use>
              </svg>
              </div>
          </div>

          <div class="atile settings active" data-target="switch" data-data="deviceLight">
          <div class="titleBlock">
          <span>${_('deviceLight')}</span>
          </div>
          <div class="hsep"></div>
          <div class="tileIcon ">
          <svg style="" viewBox="0 0 44 44">
              <use href="#lightOn"></use>
          </svg>
          </div>
          </div>

          <div class="atile double settings active" data-val="0" data-target="program">
              <div class="titleBlock">
              <span>${_('planning')}</span>
              </div>
              <div class="hsep"></div>

              <div class="atileContents">
              <div>${_('week')}<br>${_('off').toUpperCase()}</div>
              </div>

              <div class="atileContents">
              <div>${_('weekend')}<br>${_('on').toUpperCase()}</div>
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

          dateTime: {
              name: 'dateTime',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  this.built.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('setups', null);
                  });

                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('setups', null);
                  });

                  this.dayScroller = new vscroller(thisBuilt.querySelector('.dayScroller'),thisBuilt.querySelector('.dayScroller_target'),);

                  this.monthScroller = new vscroller(thisBuilt.querySelector('.monthScroller'),thisBuilt.querySelector('.monthScroller_target'),);

                  this.yearScroller = new vscroller(thisBuilt.querySelector('.yearScroller'),thisBuilt.querySelector('.yearScroller_target'),);
                  thisBuilt.querySelectorAll('.vWheel.wheel').forEach((el)=>{
                      el.addEventListener('click', function() {
                          app.toast(_('unsupported'));
                      }, );
                  }
                  );

                  callback();
              },
              beforeShow: function() {
                  const date = new Date;
                  this.dayScroller.scrollToFunction(this.built.querySelector('.dayScrollerItem[data-val="' + date.getDate() + '"]'));
                  this.monthScroller.scrollToFunction(this.built.querySelector('.monthScrollerItem[data-val="' + (date.getMonth() + 1) + '"]'));
                  this.yearScroller.scrollToFunction(this.built.querySelector('.yearScrollerItem[data-val="' + (date.getFullYear()) + '"]'));

                  this.dayScroller.pause = true;
                  this.monthScroller.pause = true;
                  this.yearScroller.pause = true;
              },
              run: function() {},
              quit: function() {
                  this.data = false;
                  this.built = false;
                  return true;
              },

              html: function() {
                  const daysArray = function() {
                      const today = new Date();
                      const month = today.getMonth();
                      const year = today.getFullYear();
                      const date = new Date(year,month,1);
                      const days = [];
                      while (date.getMonth() === month || days.length > 31) {
                          days.push(new Date(date));
                          date.setDate(date.getDate() + 1);
                      }
                      return (days);
                  };

                  let dayScrollerItems = '';
                  let monthScrollerItems = '';
                  let yearScrollerItems = '';
                  const days = daysArray();
                  for (let i = 0, len = days.length; i < len; i++) {
                      const el = days[i];
                      dayScrollerItems += `<div class="wheelItem dayScrollerItem" data-val="${el.getDate()}">${el.getDate()}</div>
                  `;
                  }
                  ((_('calendarMonths')).split(';')).forEach(function(el, k) {
                      monthScrollerItems += `<div class="wheelItem monthScrollerItem" data-val="${k + 1}">${el}</div>
                  `;
                  });
                  for (let y = 2010; y < 2041; y++) {
                      yearScrollerItems += `<div class="wheelItem yearScrollerItem" data-val="${y}">${y}</div>
                  `;
                  }
                  const rhtml = `

          <div class="pageContent settings bkg16 orange">
          <style>

          .vwheelMask.wTitle{
              position: absolute;
              height: 274px;
              top: 49px;
              width: 80px;
              left: 40px;
              overflow: hidden;
          }

          .vWheel .wheelItem {
           
          }

          .vwheelMask.wTitle .wheel.vWheel{
              left:0;
              top:-49px;
          }
          </style>

          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>

          <div class="titleBlock dateTime light" style="left:99px;width:282px">
              <span class="title">${_('dateTime')}</span>
          </div>

          <!-- <div class="settingsDesc">${_('dateTimeDesc')}</div> -->


              <div class="target dayScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:90px; top:160px"></div>

              <div class="vwheelMask wTitle">
              <div class="wheel vWheel left dayScroller">
                  <div class="wheelItem noAction"></div>
                      ${dayScrollerItems}
                  <div class="wheelItem noAction"></div>
              </div>
              </div>


              <div class="target monthScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:190px; top:160px"></div>

              <div class="vwheelMask wTitle" style="left:155px">
              <div class="wheel vWheel left monthScroller">
                  <div class="wheelItem noAction"></div>
                      ${monthScrollerItems}
                  <div class="wheelItem noAction"></div>
              </div>
              </div>

              <div class="target yearScroller_target" style = "position:absolute; width:5px; height:5px;background-color:transparent; left:311px; top:160px"></div>

              <div class="vwheelMask wTitle" style="left:269px">
              <div class="wheel vWheel left yearScroller">
                  <div class="wheelItem noAction"></div>
                      ${yearScrollerItems}
                  <div class="wheelItem noAction"></div>
              </div>
              </div>

              <div class="vwheelCenter left userBorderColor">&nbsp;</div>

              <div class="okButton square borderOrange">${_('ok')}</div>



          </div>
              `;
                  return rhtml;
              },
          },

          slider: {
              name: 'slider',
              built: false,
              build: function(callback) {
                  var that = this;
                  this.built.querySelector('.backButton').addEventListener('click', function() {
                      if (app.sliders[that.data].backSlide == 2) {
                          app.loadPage('setups', {
                              slide: 2
                          });
                      } else {
                          app.loadPage(app.currentPage.referrer.pageId, null);
                      }
                  });

                  this.built.querySelector('.okButton').addEventListener('click', function() {
                      if (app.sliders[that.data].backSlide == 2) {
                          app.loadPage('setups', {
                              slide: 2
                          });
                      } else {
                          app.loadPage(app.currentPage.referrer.pageId, null);
                      }
                  });

                  (this.built.querySelectorAll('.unsupported')).forEach((el)=>el.addEventListener('click', ()=>{
                      app.toast(_('unsupported'));
                  }
                  , ));

                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.data = false;
                  this.built = false;
                  return true;
              },

              html: function() {
                  const slider = app.sliders[this.data];
                  const width = 320;
                  let steps = '';
                  function pxForPos(pos) {
                      if (slider.steps) {
                          return (pos - 1) * (width) / (slider.steps.length - 1);
                      } else {
                          return width * (pos / 100);
                      }
                  }
                  if (slider.steps) {
                      slider.steps.forEach(function(el, k) {
                          steps += `<div class="astep unsupported" style="left:${pxForPos(k + 1)}px"><div class="l">${el.desc1}</div><div class="l l2">${el.desc2}</div></div>`;
                      });
                  }

                  const rhtml = `

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

          .sliderIcon{
              position: absolute;
              width: 32px;
              height: 32px;
              left: 40px;
              top: 149px;
          }

          .sliderIcon.sliderIconRight {
              left:415px;
          }
          
          </style>
          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>
          <div class="titleBlock light" style="left:99px;width:282px">
              <span class="title">${_(slider.title)}</span>
          </div>

          ${slider.icons ? `<div class="sliderIcon sliderIconLeft unsupported">
          <svg style="" viewBox="0 0 32 32" >
          <use href="#${slider.icons.left}" />
          </div>` : ''}

          ${slider.icons ? `<div class="sliderIcon sliderIconRight unsupported">
          <svg style="" viewBox="0 0 32 32" >
          <use href="#${slider.icons.right}" />
          </div>` : ''}

          <div class="settingsDesc">${_(slider.desc)}</div>
              <div class="barBkg userFIllColor theSlider unsupported" style="position:absolute;width:${width}px;height:5px;top:163px;left:81px">

              <div class="fill" style="background-color:#FFFFFF;position:absolute;height:5px;width:${pxForPos(slider.default)}px"></div>
              ${steps}
              <div class="sliderPointer unsupported" style="left:${pxForPos(slider.default)}px"></div>
              </div>

              <div class="startButton userBorderColor okButton">${_('ok')}</div>

          </div>
          

              `;
                  return rhtml;
              },
          },

          switch: {
              name: 'switch',
              built: false,
              build: function(callback) {
                  var that = this;
                  this.built.querySelector('.backButton').addEventListener('click', function() {
                      if (app.switches[that.data].backSlide == 2) {
                          app.loadPage('setups', {
                              slide: 2
                          });
                      } else {
                          app.loadPage(app.currentPage.referrer.pageId, null);
                      }
                  });
                  this.built.querySelector('.okButton').addEventListener('click', function() {
                      if (app.switches[that.data].backSlide == 2) {
                          app.loadPage('setups', {
                              slide: 2
                          });
                      } else {
                          app.loadPage(app.currentPage.referrer.pageId, null);
                      }
                  });
                  (this.built.querySelectorAll('.unsupported')).forEach((el)=>el.addEventListener('click', ()=>{
                      app.toast(_('unsupported'));
                  }
                  , ));

                  callback();
              },

              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  this.data = false;
                  this.built = false;
                  return true;
              },

              html: function() {
                  const thisSwitch = app.switches[this.data];
                  const largeTextStyle = ((_(thisSwitch.textLeft)).length > 11 || (_(thisSwitch.textRight)).length > 8) ? 'largeTextStyle' : '';

                  const rhtml = `
          <div class="pageContent switch_${thisSwitch.title} ${(app.currentProfile) ? app.currentProfile.color : 'orange'} ${(app.currentProfile) ? app.currentProfile.bkg : 'bkg16'}">
          <style>
          
          .switchIcon{
              position: absolute;
              width: 44px;
              height: 44px;
              left: 139px;
              top: 196px;
          }

          .switchIcon.switchIconRight {
              left:300px;
          }

          .switchText{
              position: absolute;
              width: 160px;
              height: 44px;
              left: 79px;
              top: 159px;
              text-align: center;
              overflow:hidden;
              font-size:18px;
          }

          .switchText.switchTextRight {
              left:240px;
          }

          .aSwitch.active .switchText.textOnly {
              text-shadow: 0 0 9px white, 0 0 11px white;
          }

          .switchText.textOnly {
              top: 190px;
              font-size: 20px;
          }

          .switchText.largeTextStyle{
              width: 218px;
              left: 1px;
              text-align: right;
          }

          .switchText.largeTextStyle.switchTextRight{
              left:259px;
              text-align:left;
          }
          .separator{
              position:absolute;
              width:1px;
              height:80px;
              top:161px;
              left:239px;
              background-color:rgba(255,255,255,.25);
          }

          .aSwitch.active .switchText{
              font-weight:bold;
          }

          .aSwitch.active .switchIcon svg{
              filter:drop-shadow(0 0 4px white) drop-shadow(0 0 6px white);
          }
          
          
          </style>
          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>
          <div class="titleBlock light" style="left:99px;width:282px">
              <span class="title">${_(thisSwitch.title)}</span>
          </div>
               ${(app.currentProfile) ? '<div class="userTitleClip wide userBorderColor"></div>' : ''}
         <div class="aSwitch switchLeft">
              <div class="switchText switchTextLeft ${thisSwitch.iconRight ? '' : 'textOnly'} ${largeTextStyle} unsupported">
              ${_(thisSwitch.textLeft)}
              </div>
              ${thisSwitch.iconLeft ? `<div class="switchIcon switchIconLeft unsupported">
              <svg viewBox="0 0 44 44" >
              <use href="#${thisSwitch.iconLeft}" />
              </div>` : ''}
          </div>
          <div class="separator"></div>
          <div class="aSwitch switchRight active">
              <div class="switchText switchTextRight ${thisSwitch.iconRight ? '' : 'textOnly'} ${largeTextStyle} unsupported">
              ${_(thisSwitch.textRight)}
              </div>

              ${thisSwitch.iconRight ? `<div class="switchIcon switchIconRight unsupported">
              <svg style="" viewBox="0 0 44 44" >
              <use href="#${thisSwitch.iconRight}" />
              </div>` : ''}
          </div>
          <div class="settingsDesc">${_(thisSwitch.desc)}</div>
             

              <div class="startButton userBorderColor okButton">${_('ok')}</div>

          </div>
          

              `;
                  return rhtml;
              },
          },

          reset: {
              name: 'reset',
              built: false,
              build: function(callback) {
                  this.built.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('setups', {
                          slide: 2
                      });

                  });
                  this.built.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('setups', {
                          slide: 2
                      });

                  });
                  callback();
              },

              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },

              html: function() {
                  const rhtml = `
          <div class="pageContent reset bkg16 orange">
          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>
          <div class="titleBlock light" style="left:99px;width:282px">
              <span class="title">${_('reset')}</span>
          </div>
          <div class="settingsDesc">${_('resetDesc')}</div>
          <div class="startButton userBorderColor okButton">${_('ok')}</div>
          </div>
          `;
                  return rhtml;
              },
          },

          selectProfile: {
              name: 'selectProfile',
              built: false,
              build: function(callback) {
                  this.built.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('setups', {
                          slide: 2
                      });
                  });
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.profileOneButton').addEventListener('click', function() {
                      app.currentProfile = app.profiles.userOne;
                      app.loadPage('userSettingsHome', null);
                  });
                  thisBuilt.querySelector('.profileTwoButton').addEventListener('click', function() {
                      app.currentProfile = app.profiles.userTwo;
                      app.loadPage('userSettingsHome', null);
                  });
                  callback();
              },

              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },

              html: function() {
                  const rhtml = `
          <div class="pageContent selectProfile bkg16 orange">
          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>
          <div class="titleBlock light" style="left:99px;width:282px">
              <span class="title">${_('profileSettings')}</span>
          </div>
          <div class="settingsDesc">${_('profileSettingsDesc')}</div>
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
                  return rhtml;
              },
          },

          help: {
              name: 'help',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('settings', null);
                  });
                  (this.built.querySelectorAll('.unsupported')).forEach((el)=>el.addEventListener('click', ()=>{
                      app.toast(_('unsupported'));
                  }
                  , ));
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent help bkg16 orange">
          <div class="titleBlock wide light">
          <span class="title">${_('help')}</span>
          </div>

          <div class="backToMain backButton">
              <svg style="" viewBox="0 0 26 26" >
              <use href="#backArrow" />
          </div>
              <style>
              .help .hScroller{
                  top: 71px;
                  height: 220px;
                  padding-top: 10px;
              }

              .help .hScrollerItem {
                  width: 157px;
                  height: 220px;
                  text-align: center;
                  margin-right: 5px;
                  background-color : rgba(255,255,255,0.2);
                  box-sizing: border-box;
                  font-size:14px;
              }

              .help .hScrollerItem:first-child {
                  margin-left:29px;
              }

              .help .hScrollerItem:last-child {
                  margin-right:29px;
              }

              .help .hScrollerItem .icon {
                  width: 122px;
                  height: 40px;
                  position: absolute;
                  left: 19px;
                  /* background: black; */
                  top: 10px;
                  border-bottom: solid 1px rgba(255, 255, 255, 0.4);
              }

              .help .hScrollerItem .video.icon {
                  width: 122px;
                  height: 40px;
                  position: absolute;
                  left: 19px;
                  /* background: black; */
                  top: 10px;
                  border-bottom: solid 1px rgba(255, 255, 255, 0.4);
              }

              .help .hScrollerItem .icon svg {
                  width:32px;
                  height:32px;
              }

              .help .hScrollerItem .desc {
                  position: absolute;
                  top: 67px;
                  width: 138px;
                  left: 10px;
                  font-size: 20px;
                  font-weight: 300;
                  text-align: center;
                  white-space: initial;
              }

              .playBlock{
                  position: absolute;
                  width: 90%;
                  height: 18px;
                  bottom: 12px;
                  font-size: 18px;
                  line-height: 18px;
              }

              .playBlock .videoIcon{
                  width: 25px;
                  height: 19px;
                  display: inline-block;
                  vertical-align: top;
                  line-height: 19px;
              }

              .playBlock .videoIcon svg{
                  width:100%;
                  height:100%;
              }

              </style>
                  <div class=" hScroller helpScroller">

                      <div class="hScrollerItem unsupported"> 
                          <div class="icon">
                              <svg  viewBox="0 0 32 32" >
                              <use href="#recette" />
                          </div>
                          <div class="desc"> ${_('help_recipe')} </div>
                          <div class="playBlock">
                              <div class="videoIcon">
                                  <svg viewBox="0 0 32 32" >
                                  <use href="#play" />
                              </div>
                              ${_('videos').replace('%s', '2')}
                          </div>
                      </div>

                      <div class="hScrollerItem unsupported"> 
                          <div class="icon">
                              <svg  viewBox="0 0 32 32" >
                              <use href="#fav" />
                          </div>
                          <div class="desc"> ${_('help_fav')} </div>
                          <div class="playBlock">
                              <div class="videoIcon">
                                  <svg viewBox="0 0 32 32" >
                                  <use href="#play" />
                              </div>
                              ${_('videos').replace('%s', '3')}
                          </div>
                      </div>
                      
                      <div class="hScrollerItem unsupported"> 
                          <div class="icon">
                              <svg  viewBox="0 0 32 32" >
                              <use href="#wrench" />
                          </div>
                          <div class="desc"> ${_('help_service')} </div>
                          <div class="playBlock">
                              <div class="videoIcon">
                                  <svg viewBox="0 0 32 32" >
                                  <use href="#play" />
                              </div>
                              ${_('videos').replace('%s', '5')}
                          </div>
                      </div>

                          
                  </div>


              </div>

              `;
                  return rhtml;
              },
          },

          cleanup: {
              name: 'cleanup',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.backButton').addEventListener('click', function() {
                      app.loadPage('care', null);
                  });
                  callback();
                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('cleanup_2', null);
                  });
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>
              <div class="backButton">
                  <svg style="" viewBox="0 0 26 26" >
                  <use href="#backArrow" />
              </div>
              <div class="settingsDesc">${_('cleanup_1_desc')}</div>
              <div class="okButton startButton bottom userBorderColor">${_('OK')}
          </div>
              `;
                  return rhtml;
              },
          },

          cleanup_2: {
              name: 'cleanup_2',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('cleanup_3', null);
                  });
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
          <style>

          </style>
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>
              <div class="careImg">
                  <img nopin="nopin"  src="${imag('care')}" style="object-position: -0px -0px">
              </div>

              <div class="settingsDesc care">${_('cleanup_2_desc')}</div>
              <div class="okButton startButton bottom userBorderColor">${_('OK')}
          </div>
              `;
                  return rhtml;
              },
          },

          cleanup_3: {
              name: 'cleanup_3',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('cleanup_4', null);
                  });
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>

              <div class="careImg">
              <img nopin="nopin"  src="${imag('care')}" style="object-position: -600px -0px">
          </div>

              <div class="settingsDesc care">${_('cleanup_3_desc')}</div>
              <div class="okButton startButton bottom userBorderColor">${_('OK')}
          </div>
              `;
                  return rhtml;
              },
          },

          cleanup_4: {
              name: 'cleanup_4',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('cleanup_5', null);
                  });
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>

              <div class="settingsDesc care">${_('cleanup_4_desc')}</div>
              <div class="okButton startButton bottom userBorderColor">${_('OK')}
          </div>
              `;
                  return rhtml;
              },
          },

          cleanup_5: {
              name: 'cleanup_5',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('cleanup_6', null);
                  });
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>

              <div class="careImg">
              <img nopin="nopin"  src="${imag('care')}" style="object-position: -800px -0px">
          </div>

              <div class="settingsDesc care">${_('cleanup_5_desc')}</div>
              <div class="okButton startButton bottom userBorderColor">${_('OK')}
          </div>
              `;
                  return rhtml;
              },
          },

          cleanup_6: {
              name: 'cleanup_6',
              built: false,
              build: function(callback) {
                  callback();
              },
              beforeShow: function() {
                this.built.querySelector('.cd').innerHTML = "13";
              },
              run: function() {
                  this.built.classList.add('running');
                  let x = 13;
                  const cdspan = this.built.querySelector('.cd');
                  this.countdown = setInterval(()=>{
                      cdspan.innerHTML = x;
                      x--;
                      if (x == 0) {
                          clearInterval(this.countdown);
                          this.countdown = null;
                          app.loadPage('cleanup_7', null);
                      }
                  }
                  , 4000 / 13);
              },
              quit: function() {
                  clearInterval(this.countdown);
                  this.built = false;
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
              <style>
              .${this.name}.running .startButton{
                  display:block;
              }
              .${this.name}.running .progressBarBkg{
                  left:154px;
              }
              </style>
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>

              <div class="settingsDesc care">${_('cleanup_6_desc')}</div>

              <div class="progressBarBkg">
              <div class="progressBar"></div>
              </div>

              <div class="okButton startButton bottom userBorderColor">${(_('pause')).toUpperCase()}
          </div>
              `;

                  return rhtml;
              },
          },

          cleanup_7: {
              name: 'cleanup_7',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('cleanup_8', null);
                  });
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>

              <div class="careImg">
              <img nopin="nopin"  src="${imag('care')}" style="object-position: -1000px -0px">
          </div>

              <div class="settingsDesc">${_('cleanup_7_desc')}</div>
              <div class="okButton startButton bottom userBorderColor">${_('OK')}
          </div>
              `;
                  return rhtml;
              },
          },

          cleanup_8: {
              name: 'cleanup_8',
              built: false,
              build: function(callback) {
                  const thisBuilt = this.built;
                  thisBuilt.querySelector('.okButton').addEventListener('click', function() {
                      app.loadPage('cleanup_9', null);
                  });
                  callback();
              },
              beforeShow: function() {},
              run: function() {},
              quit: function() {
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>

              <div class="careImg">
              <img nopin="nopin"  src="${imag('care')}" style="object-position: -410px -0px">
          </div>

              <div class="settingsDesc">${_('cleanup_8_desc')}</div>
              <div class="okButton startButton bottom userBorderColor">${_('OK')}
          </div>
              `;
                  return rhtml;
              },
          },

          cleanup_9: {
              name: 'cleanup_9',
              built: false,
              build: function(callback) {
                  callback();
              },
              beforeShow: function() {},
              run: function() {
                  this.timout = setTimeout(function() {
                      app.loadPage('recettes', null);
                  }, 3000, );
              },
              quit: function() {
                  clearTimeout(this.timout);
                  return true;
              },
              html: function() {
                  const rhtml = `
          <div class="pageContent ${this.name} bkg16">
          <style>
              .iconAllGood{
                  width:64px;
                  height:64px;
                  position:absolute;
                  top:94px;
                  left:216px;
              }
              .iconAllGood svg{
                  width:100%;
              }

              .settingsDesc{
                  top:190px;
                  font-weight:bold;
              }
          </style>
              <div class="titleBlock light wide">
              <span class="title">${_('cleanup')}</span>
              </div>
              <div class="settingsDesc">${_('cleanup_9_desc')}</div>
              <div class="iconAllGood">
                  <svg style="" viewBox="0 0 64 64" >
                  <use href="#allGood" />
              </div>

              `;
                  return rhtml;
              },
          },
      };

      app.recipes = {
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
              rightmenudefault: '25',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
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
              rightmenudefault: '40',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
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
              rightmenuvalues: '70; 80;90;100',
              rightmenudefault: '70',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
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
              rightmenuvalues: '80;90;100;110;120;130;140;150;160;170;180',
              rightmenudefault: '120',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
          },
          doppio: {
              code: 'doppio',
              spritexy: '0;2',
              spritexy_x1: '0;2',
              spritexy_x2: '0;2',
              bkg: 'bkg2',
              family: 'black',
              sequences: 'cafe',
              canx2: false,
              leftmenutyp: 'strength',
              leftmenuvalues: '1;2;3',
              leftmenudefault: '2',
              rightmenutyp: 'ml',
              rightmenuvalues: '20;30;40;50;60;70',
              rightmenudefault: '50',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
          },
          americano: {
              code: 'americano',
              spritexy: '3;2',
              spritexy_x1: '3;2',
              spritexy_x2: '3;2',
              bkg: 'bkg3',
              family: 'black',
              sequences: 'cafe',
              canx2: false,
              leftmenutyp: 'strength',
              leftmenuvalues: '1;2;3',
              leftmenudefault: '2',
              rightmenutyp: 'ml',
              rightmenuvalues: '80;90;100;110;120;120;140;150',
              rightmenudefault: '120',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
          },
          emacchiato: {
              code: 'emacchiato',
              spritexy: '0;3',
              spritexy_x1: '1;3',
              spritexy_x2: '2;3',
              bkg: 'bkg7',
              family: 'latte',
              sequences: 'foaming;cafe',
              canx2: true,
              leftmenutyp: 'strength',
              leftmenuvalues: '1;2;3',
              leftmenudefault: '2',
              rightmenutyp: 'vol',
              rightmenuvalues: 'M;L;XL',
              rightmenudefault: 'L',
              step2Typ: 'ml',
              step2Values: '40;50;60;70',
              step2Default: '50',
              invertSteps: false,
          },
          cappucino: {
              code: 'cappucino',
              spritexy: '3;3',
              spritexy_x1: '4;3',
              spritexy_x2: '5;3',
              bkg: 'bkg10',
              family: 'latte',
              sequences: 'foaming;cafe',
              canx2: true,
              leftmenutyp: 'strength',
              leftmenuvalues: '1;2;3',
              leftmenudefault: '2',
              rightmenutyp: 'vol',
              rightmenuvalues: 'M;L;XL',
              rightmenudefault: 'L',
              step2Typ: 'ml',
              step2Values: '20;30;40;50;60;70;80;190;100;110;120;130;140;150;160',
              step2Default: '70',
              invertSteps: false,
          },
          lattemacchiato: {
              code: 'lattemacchiato',
              spritexy: '0;4',
              spritexy_x1: '1;4',
              spritexy_x2: '2;4',
              bkg: 'bkg9',
              family: 'latte',
              sequences: 'foaming;cafe',
              canx2: true,
              leftmenutyp: 'strength',
              leftmenuvalues: '1;2;3',
              leftmenudefault: '2',
              rightmenutyp: 'vol',
              rightmenuvalues: 'M;L;XL',
              rightmenudefault: 'L',
              step2Typ: 'ml',
              step2Values: '20;30;40;50;60;70;80;90;100;110;120;130;140;150;160',
              step2Default: '70',
              invertSteps: false,
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
              step2Typ: 'false',
              step2Values: '',
              step2Default: 'false',
              invertSteps: false,
          },
          caffelatte: {
              code: 'caffelatte',
              spritexy: '0;5',
              spritexy_x1: '1;5',
              spritexy_x2: '2;5',
              bkg: 'bkg9',
              family: 'latte',
              sequences: 'foaming;cafe',
              canx2: true,
              leftmenutyp: 'strength',
              leftmenuvalues: '1;2;3',
              leftmenudefault: '2',
              rightmenutyp: 'vol',
              rightmenuvalues: 'M;L;XL',
              rightmenudefault: 'M',
              step2Typ: 'vol',
              step2Values: '20;30;40;50;60;70;80;90;100;110;120;130;140;150;160',
              step2Default: '70',
              invertSteps: true,
          },
          flatwhite: {
              code: 'flatwhite',
              spritexy: '3;5',
              spritexy_x1: '3;5',
              spritexy_x2: '3;5',
              bkg: 'bkg10',
              family: 'latte',
              sequences: 'cafe;foaming',
              canx2: false,
              leftmenutyp: 'strength',
              leftmenuvalues: '1;2;3',
              leftmenudefault: '2',
              rightmenutyp: 'vol',
              rightmenuvalues: 'M;L;XL',
              rightmenudefault: 'M',
              step2Typ: 'vol',
              step2Values: '20;30;40;50;60;70;80;90;100;110;120;130;140;150;160',
              step2Default: '70',
              invertSteps: true,
          },
          thevert: {
              code: 'thevert',
              spritexy: '4;5',
              spritexy_x1: '4;5',
              spritexy_x2: '4;5',
              bkg: 'bkg11',
              family: 'water',
              sequences: 'water',
              canx2: false,
              leftmenutyp: 'false',
              leftmenuvalues: 'false',
              leftmenudefault: 'false',
              rightmenutyp: 'ml',
              rightmenuvalues: '200; 210;220;230;240;250;260;270;280;290;300',
              rightmenudefault: '200',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
          },
          thenoir: {
              code: 'thenoir',
              spritexy: '5;5',
              spritexy_x1: '5;5',
              spritexy_x2: '5;5',
              bkg: 'bkg12',
              family: 'water',
              sequences: 'water',
              canx2: false,
              leftmenutyp: 'false',
              leftmenuvalues: 'false',
              leftmenudefault: 'false',
              rightmenutyp: 'ml',
              rightmenuvalues: '200; 210;220;230;240;250;260;270;280;290;300',
              rightmenudefault: '200',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
          },
          infusion: {
              code: 'infusion',
              spritexy: '5;2',
              spritexy_x1: '5;2',
              spritexy_x2: '5;2',
              bkg: 'bkg14',
              family: 'water',
              sequences: 'water',
              canx2: false,
              leftmenutyp: 'false',
              leftmenuvalues: 'false',
              leftmenudefault: 'false',
              rightmenutyp: 'ml',
              rightmenuvalues: '200; 210;220;230;240;250;260;270;280;290;300',
              rightmenudefault: '200',
              step2Typ: 'false',
              step2Values: 'false',
              step2Default: 'false',
              invertSteps: false,
          },

      };

      app.init = function(kxhost) {
          console.log('init');
          app.kxhost = document.querySelector(kxhost);
          app.kxhost.innerHTML = baseHtml;
          addStyles(app.kxhost);
          app.kxunit = app.kxhost.querySelector('#kxUnit');
          app.screen = app.kxhost.querySelector('#kxScreen');
          app.pageHolder = app.kxhost.querySelector('.pageHolder');
          app.toaster = app.kxhost.querySelector('.kxToast');
          app.loadPage('recettes', null);

          app.fit = function() {
              const parentRatio = app.kxunit.parentElement.offsetHeight / app.kxunit.parentElement.offsetWidth;

              const screenW = app.kxunit.offsetWidth;
              const screenH = app.kxunit.offsetHeight;
              const screenRatio = screenH / screenW;

              app.ratio = parentRatio > screenRatio ? app.kxunit.parentElement.offsetWidth / screenW : app.kxunit.parentElement.offsetHeight / screenH;
              //console.log('ratio:' + app.ratio);

              Object.assign(app.kxunit.style, {
                  transform: 'scale(' + Math.min(1.5, app.ratio) + ') translate(-50%, -50%)',
              });
          }
          ;

          app.fit();

          window.addEventListener('resize', function() {
              clearTimeout(app.resizeWindowTimeOut);
              app.resizeWindowTimeOut = setTimeout(function() {
                  app.fit();
              }, 100);
          });

          app.reloadPage = function() {
              app.loadPage(app.currentPage.name, null);
          }
          ;

          app.resetBuilds = function() {
              for (const [k] of Object.entries(app.pages)) {
                  app.pages[k].built = false;
              }
          }
          ;
          app.kxunit.querySelector('#kxUnitButtonStart').addEventListener('click', ()=>{
              if (!app.canSwitchPage)
                  return;
              if (app.currentPage.name == 'off') {
                  app.bleep();
                  app.loadPage('starting', null);
              } else {
                  app.beep();
                  app.loadPage('off', null);
                  app.resetBuilds();
              }
          }
          );

          app.kxunit.querySelector('#kxUnitButtonHome').addEventListener('click', ()=>{
              if (!app.canSwitchPage)
                  return;

              app.pages.recettes.sliderPosition = 0;
              if (app.currentPage.name == 'recettes') {
                  if (document.querySelector('#recetteScroller'))
                      document.querySelector('#recetteScroller').scrollTo({
                          left: 0
                      });
              }
              if (app.currentPage.name == 'off')
                  return;
              app.loadPage('recettes', null);
          }
          );

          app.kxunit.querySelector('#kxUnitButtonUserOne').addEventListener('click', ()=>{
              if (!app.canSwitchPage)
                  return;
              if (app.currentPage.name == 'off')
                  return;
              app.currentProfile = app.profiles.userOne;
              app.loadPage('profile', null);
          }
          );

          app.kxunit.querySelector('#kxUnitButtonUserTwo').addEventListener('click', ()=>{
              if (!app.canSwitchPage)
                  return;
              if (app.currentPage.name == 'off')
                  return;
              app.currentProfile = app.profiles.userTwo;
              app.loadPage('profile', null);
          }
          );
      }
      ;

      function addStyles(destination) {
          const link = document.createElement('link');
          link.id = 'id2';
          link.rel = 'stylesheet';
          link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap';
          document.head.appendChild(link);

          const svgLib = document.createElement('div');
          svgLib.style = 'display:none';
          let data = `    
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" style="display:none">

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
        <circle cx="16" cy="16" r="13.5" fill="white"/>
        <circle class="userFIllColor"  cx="16" cy="16" r="13"/>
        <path d="M14.9,17.1h-3.8V15h3.8v-3.8h2.1V15h3.8v2.1h-3.8v3.8h-2.1V17.1z" fill="white"/>
      </g>

      <g id="minusButton" class="plusMinus"  fill-rule="evenodd"  viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet">
        <circle  cx="16" cy="16" r="13.5" fill="white"/>
        <circle class="profileColor"  class="userFIllColor" cx="16" cy="16" r="13"/>
        <rect x="12.2" y="15"  width="7.7" height="2.1" fill="white"/>
      </g>

      <g id="sizeXL" style="fill:white" viewBox="0 0 32 32">
        <path d="M27.1,3.2h-5.4V25c0,1.8-1.5,3.3-3.3,3.3H5c-1.8,0-3.3-1.5-3.3-3.3V3.2H0V25c0,2.8,2.3,5,5,5h13.4
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
        21.881,29.3 32,20.126 42.119,29.3  "/>
      </g>


      <g id="profileButton" viewBox="0 0 32 32">
        <rect id="Rectangle" x="0.5" y="0.5" style="fill:none;stroke:#F38230;stroke-width:0.9887;" width="31" height="31"/>
        <path id="Shape" style="fill:#FFFFFF;" d="M20.3,19.1c0.9,0,1.8-0.4,2.4-1c0.6-0.6,1-1.5,1-2.4s-0.4-1.8-1-2.4c-0.6-0.6-1.5-1-2.4-1
        c-0.9,0-1.8,0.4-2.4,1c-0.6,0.6-1,1.5-1,2.4c0,0.9,0.4,1.8,1,2.4C18.5,18.8,19.4,19.1,20.3,19.1L20.3,19.1z M20.3,13.2
        c0.6,0,1.3,0.3,1.7,0.7c0.5,0.5,0.7,1.1,0.7,1.7c0,0.6-0.3,1.3-0.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7c-0.6,0-1.3-0.3-1.7-0.7
        c-0.5-0.5-0.7-1.1-0.7-1.7c0-0.6,0.3-1.3,0.7-1.7C19.1,13.5,19.7,13.2,20.3,13.2L20.3,13.2z"/>
        <path style="fill:#FFFFFF;" d="M14.9,26.1c0-3,2.4-5.5,5.5-5.5s5.5,2.4,5.5,5.5h1c0-1.7-0.7-3.4-1.9-4.6c-1.2-1.2-2.9-1.9-4.6-1.9
        c-1.7,0-3.4,0.7-4.6,1.9c-1.2,1.2-1.9,2.9-1.9,4.6H14.9z"/>
        <polygon style="fill:#FFFFFF;" points="8.8,12.7 6.4,12.7 6.4,11.3 8.8,11.3 8.8,8.8 10.2,8.8 
        10.2,11.3 12.7,11.3 12.7,12.7 10.2,12.7 10.2,15.1 8.8,15.1 "/>
      </g>

      <g id="profileIcon" viewBox="0 0 32 32">
        <path id="Shape" fill="white" class="st0" d="M16,16.1c2,0,4-0.8,5.4-2.2c1.4-1.4,2.2-3.4,2.2-5.4s-0.8-4-2.2-5.4C20,1.6,18,0.8,16,0.8 s-4,0.8-5.4,2.2C9.2,4.5,8.4,6.5,8.4,8.5c0,2,0.8,4,2.2,5.4S14,16.1,16,16.1L16,16.1z M16,3.1c1.4,0,2.8,0.6,3.8,1.6 c1,1,1.6,2.4,1.6,3.8c0,1.4-0.6,2.8-1.6,3.8c-1,1-2.4,1.6-3.8,1.6c-1.4,0-2.8-0.6-3.8-1.6c-1-1-1.6-2.4-1.6-3.8 c0-1.4,0.6-2.8,1.6-3.8C13.2,3.7,14.6,3.1,16,3.1L16,3.1z"/>
        <path fill="white" class="st0" d="M3.9,31.4c0-6.6,5.4-12.1,12.1-12.1s12.1,5.4,12.1,12.1h2.3c0-3.8-1.5-7.4-4.2-10.1c-2.7-2.7-6.3-4.2-10.1-4.2 s-7.4,1.5-10.1,4.2c-2.7,2.7-4.2,6.3-4.2,10.1H3.9z"/>
      </g>

      <g id="userSettings" viewBox="0 0 44 44">
        <circle style="fill:none;stroke:#FFFFFF;stroke-width:1.6719;stroke-linejoin:round;stroke-miterlimit:10;" cx="30.3" cy="11" r="3.6"/>
        <polygon style="fill:none;stroke:#FFFFFF;stroke-width:1.6719;stroke-linejoin:round;stroke-miterlimit:10;" points="38.2,10.1 
        37.9,8.6 39.5,6.2 37.1,3.2 34.4,4.2 33,3.6 32.2,0.8 28.3,0.8 27.5,3.6 26.1,4.2 23.5,3.2 21,6.2 22.6,8.6 22.3,10.1 19.8,11.5 
        20.7,15.3 23.5,15.5 24.5,16.7 24,19.5 27.6,21.2 29.5,19.1 31,19.1 32.9,21.2 36.5,19.6 36.1,16.7 37,15.5 39.8,15.3 40.7,11.5 
        "/>
        <circle style="fill:none;stroke:#FFFFFF;stroke-width:1.6719;stroke-linejoin:round;stroke-miterlimit:10;" cx="11.2" cy="22.5" r="5.2"/>
        <path style="fill:none;stroke:#FFFFFF;stroke-width:1.6719;stroke-linejoin:round;stroke-miterlimit:10;" d="M0.8,39.9
        c0-5.7,4.6-10.2,10.2-10.2s10.2,4.6,10.2,10.2"/>
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
        <path style="fill:#FFFFFF;stroke:#FFFFFF;stroke-linecap:square;" d="M17.1,24.9v4.5h-2.2
        v-4.5c0.4,0,0.7,0.1,1.1,0.1C16.4,24.9,16.8,24.9,17.1,24.9z M24.9,14.9h4.5v2.2h-4.5c0-0.4,0.1-0.7,0.1-1.1S24.9,15.2,24.9,14.9
        z M7.1,14.9c0,0.4-0.1,0.7-0.1,1.1c0,0.4,0,0.8,0.1,1.1H2.6v-2.2H7.1z M17.1,2.6v4.5c-0.4,0-0.7-0.1-1.1-0.1s-0.8,0-1.1,0.1V2.6
        H17.1z M10.5,23.1l-3.2,3.2l-1.6-1.6l3.2-3.2c0.2,0.3,0.5,0.6,0.7,0.8C9.9,22.6,10.2,22.8,10.5,23.1z M23.1,21.5l3.2,3.2
        l-1.6,1.6l-3.2-3.2c0.3-0.2,0.6-0.5,0.8-0.7C22.6,22.1,22.8,21.8,23.1,21.5L23.1,21.5z M10.5,8.9c-0.3,0.2-0.6,0.5-0.8,0.7
        c-0.3,0.3-0.5,0.5-0.7,0.8L5.7,7.3l1.6-1.6L10.5,8.9z M26.3,7.3l-3.2,3.2c-0.2-0.3-0.5-0.6-0.7-0.8c-0.3-0.3-0.5-0.5-0.8-0.7
        l3.2-3.2L26.3,7.3L26.3,7.3z"/>
        <path style="fill:#FFFFFF;" d="M16,21c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S18.8,21,16,21z"
        />
      </g>

      <g id="backLightSmall" viewBox="0 0 32 32">
        <path style="fill:#FFFFFF;stroke:#FFFFFF;stroke-linecap:square;" d="M16.7,21.6l0,2.9h-1.4
        v-2.9c0.2,0,0.5,0,0.7,0C16.2,21.6,16.5,21.6,16.7,21.6z M21.6,15.3l2.9,0v1.4h-2.9c0-0.2,0-0.5,0-0.7
        C21.6,15.8,21.6,15.5,21.6,15.3z M10.4,15.3c0,0.2,0,0.5,0,0.7c0,0.2,0,0.5,0,0.7l-2.9,0v-1.4L10.4,15.3z M16.7,7.5v2.9
        c-0.2,0-0.5,0-0.7,0c-0.2,0-0.5,0-0.7,0l0-2.9H16.7z M12.5,20.5l-2,2l-1-1l2-2c0.1,0.2,0.3,0.4,0.5,0.5
        C12.2,20.2,12.4,20.3,12.5,20.5L12.5,20.5z M20.5,19.5l2,2l-1,1l-2-2c0.2-0.1,0.4-0.3,0.5-0.5C20.2,19.8,20.3,19.6,20.5,19.5
        L20.5,19.5z M12.5,11.5c-0.2,0.1-0.4,0.3-0.5,0.5c-0.2,0.2-0.3,0.3-0.5,0.5l-2-2l1-1L12.5,11.5z M22.5,10.5l-2,2
        c-0.1-0.2-0.3-0.4-0.5-0.5c-0.2-0.2-0.3-0.3-0.5-0.5l2-2L22.5,10.5L22.5,10.5z"/>
        <path style="fill:#FFFFFF;" d="M16,19.2c-1.7,0-3.2-1.4-3.2-3.2s1.4-3.2,3.2-3.2
        c1.7,0,3.2,1.4,3.2,3.2S17.7,19.2,16,19.2z"/>
      </g>

      <g id="checkMark" viewBox="0 0 32 32">
        <path style="fill:#FFFFFF;" d="M5,15.4l2-2l6.4,6.4L24.9,8.2l2.1,2.1L13.5,23.8
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
        <polygon style="fill:#FFFFFF;" points="7.5,15.2 6.1,16.6 9.1,19.6 1.5,19.6 1.5,21.6 9.1,21.6 6.1,24.6 7.5,26 12.9,20.6  "/>
      </g>

      <g id="cleanMilkAcc" viewBox="0 0 44 44">
        <path style="fill:#FFFFFF;" d="M6.1,5.3h13.4c2.6,0,4.8,2.1,4.8,4.8v24.9c0,0.5-0.4,1-1,1H2.3
        c-0.5,0-1-0.4-1-1V10C1.4,7.4,3.5,5.3,6.1,5.3z M4.2,36.8h3.8v1.9H4.2V36.8z M17.6,36.8h3.8v1.9h-3.8V36.8z"/>
        <rect x="2.3" y="12" style="fill:#010101;" width="21.1" height="1"/>
        <g>
        <polygon style="fill:#010101;" points="7.9,20.7 7,20.7 5.8,22.1 5.8,20.7 5.2,20.7 5.2,24 5.8,24 5.8,22.5 5.9,22.5 7,24 7.9,24 
        6.5,22.2 "/>
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
        28.2,22.1 28.2,24.8 33,24.8 33,25.3 34,25.3 34,24.8 34.9,24.8 "/>
        <path style="fill:none;stroke:#FFFFFF;stroke-width:1.9138;" d="M35.3,23.4c3.8-0.1,6.3,3.2,7.3,9.9"/>
      </g>

      <g id="rinseCoffee" fill="white" viewBox="0 0 44 44">
        <path style="" d="M29.2,31.3l2.6-0.5l-1.4-6.2L28,24.9L29.2,31.3z"/>
        <path style="" d="M27.7,23l2.3-0.5L26.2,6l-1.5,0.3L27.7,23z"/>
        <path style="" d="M23.1,23h-2.3l0.4-16.9h1.6L23.1,23z"/>
        <path style="" d="M13.7,37.7l-2.9-0.6l1-4.2l2.7,0.6L13.7,37.7z"/>
        <path style="" d="M23.4,38h-2.9l0.1-4.4h2.7L23.4,38z"/>
        <path style="" d="M30.3,37.7l2.9-0.6l-1-4.2l-2.7,0.6L30.3,37.7z"/>
        <polygon style="" points="23.3,31.4 20.6,31.4 20.7,25 23.1,25  "/>
        <polygon style="" points="14.8,31.3 12.2,30.7 13.6,24.5 16,24.9  "/>
        <path style="" d="M16.3,23l-2.3-0.5L17.8,6l1.5,0.3L16.3,23z"/>
      </g>

      <g id="rinseMilk"  fill="white" viewBox="0 0 44 44">
        <path style="" d="M23,32.1l-1-5.8l2.1-0.4l1.3,5.7L23,32.1z"/>
        <path style="" d="M21.6,24.5L18.9,9.2l1.4-0.3l3.4,15.1L21.6,24.5z"/>
        <path style="" d="M17.4,24.5L17.1,9h-1.4l-0.3,15.5H17.4z"/>
        <path style="" d="M8.8,38l0.7-3.9l-2.4-0.5l-0.9,3.9L8.8,38z"/>
        <path style="" d="M17.8,38.3l-0.1-4h-2.5l-0.1,4H17.8z"/>
        <path style="" d="M24.1,38l-0.7-3.9l2.4-0.5l0.9,3.9L24.1,38z"/>
        <polygon style="" points="17.6,32.3 17.5,26.4 15.3,26.4 15.2,32.3 "/>
        <polygon style="" points="9.9,32.1 10.9,26.3 8.8,25.9 7.5,31.6 "/>
        <path style="" d="M11.3,24.5L14,9.2l-1.4-0.3L9.2,24.1L11.3,24.5z"/>
        <path style="" d="M33.2,3.4L33.2,3.4V1.7h4.9v1.7H33.2z M29.9,16.2
        c0-1.6,0.3-3.2,0.9-4.7l2.3-7.3h-0.3c-0.2,0-0.4-0.2-0.4-0.4V1.3c0-0.2,0.2-0.4,0.4-0.4h5.7c0.2,0,0.4,0.2,0.4,0.4v2.5
        c0,0.2-0.2,0.4-0.4,0.4h-0.3l2.3,7.3c0.6,1.5,0.9,3.1,0.9,4.7v8.9c0,1.1-0.8,2.1-2,2.1h-7.5c-1.1-0.1-2-1-2-2.1V16.2z"/>
      </g>

      <g id="descaling" fill="white" viewBox="0 0 44 44">
        <path style="" d="M21.6,40.1c-2.5,0-4.5-1.8-4.5-4.1c0-3.5,4.3-11.1,4.6-11.5
        c0.2,0.4,4.5,8,4.5,11.5C26.1,38.3,24.1,40.1,21.6,40.1"/>
        <circle style="" cx="13.8" cy="5.6" r="2"/>
        <circle style="" cx="21.6" cy="5.6" r="2"/>
        <circle style="" cx="18.1" cy="12" r="2"/>
        <circle style="" cx="25.9" cy="12" r="2"/>
        <circle style="" cx="21.6" cy="18.7" r="2"/>
        <circle style="" cx="29.3" cy="5.6" r="2"/>
      </g>

      <g id="filter" viewBox="0 0 44 44">
        <path style="fill:#FFFFFF;" d="M27.5,6.4l-1.3,30.9h-0.7v3.3H26v1.4l-0.5,0V43h-6.8v-1.1
        l-0.5,0v-1.4h0.5v-3.3H18L16.6,6.4H27.5z M26.4,1c0.6,0,1,0.4,1,1v1.7h1.4v1.4H15.2V3.7h1.4V2c0-0.6,0.4-1,1-1H26.4L26.4,1z"/>
      </g>

      <g id="tiles" viewBox="0 0 44 44">
        <path style="fill:#FFFFFF;" d="M5.7,9.9h8.8c0.3,0,0.4,0.2,0.4,0.4V20c0,0.3-0.2,0.4-0.4,0.4
        H5.7c-0.3,0-0.4-0.2-0.4-0.4v-9.7C5.3,10.1,5.5,9.9,5.7,9.9z M5.7,22.6h8.8c0.3,0,0.4,0.2,0.4,0.4v9.7c0,0.3-0.2,0.4-0.4,0.4H5.7
        c-0.3,0-0.4-0.2-0.4-0.4v-9.6C5.3,22.8,5.5,22.6,5.7,22.6z M17.6,9.9h8.8c0.3,0,0.4,0.2,0.4,0.4V20c0,0.3-0.2,0.4-0.4,0.4h-8.8
        c-0.3,0-0.4-0.2-0.4-0.4v-9.7C17.2,10.1,17.4,9.9,17.6,9.9z M29.5,9.9h8.8c0.3,0,0.4,0.2,0.4,0.4V20c0,0.3-0.2,0.4-0.4,0.4h-8.8
        c-0.3,0-0.4-0.2-0.4-0.4v-9.7C29,10.1,29.2,9.9,29.5,9.9z M17.6,22.6h8.8c0.3,0,0.4,0.2,0.4,0.4v9.7c0,0.3-0.2,0.4-0.4,0.4h-8.8
        c-0.3,0-0.4-0.2-0.4-0.4v-9.6C17.2,22.8,17.4,22.6,17.6,22.6z M29.5,22.6h8.8c0.3,0,0.4,0.2,0.4,0.4v9.7c0,0.3-0.2,0.4-0.4,0.4
        h-8.8c-0.3,0-0.4-0.2-0.4-0.4v-9.6C29,22.8,29.2,22.6,29.5,22.6z"/>
      </g>

      <g id="slider" viewBox="0 0 44 44" style="fill:inherit">
        <path style="fill:#FFFFFF;" d="M6.4,15.3h8.4c0.3,0,0.4,0.2,0.4,0.4v11.4
        c0,0.3-0.2,0.4-0.4,0.4H6.4c-0.3,0-0.4-0.2-0.4-0.4V15.8C5.9,15.6,6.1,15.3,6.4,15.3z"/>
        <path style="fill:#FFFFFF;" d="M17.8,15.3h8.4c0.3,0,0.4,0.2,0.4,0.4v11.4
        c0,0.3-0.2,0.4-0.4,0.4h-8.4c-0.3,0-0.4-0.2-0.4-0.4V15.8C17.4,15.6,17.6,15.3,17.8,15.3z"/>
        <path style="fill:#FFFFFF;" d="M29.3,15.3h8.4c0.3,0,0.4,0.2,0.4,0.4v11.4
        c0,0.3-0.2,0.4-0.4,0.4h-8.4c-0.3,0-0.4-0.2-0.4-0.4V15.8C28.8,15.6,29,15.3,29.3,15.3z"/>
        <path style="fill:#FFFFFF;" d="M43.8,21.5l-3.5,3.5V18L43.8,21.5z"/>
        <path style="fill:#FFFFFF;" d="M0.2,21.5l3.5,3.5V18L0.2,21.5z"/>
      </g>

      <g id="canceled" viewBox="0 0 64.4 64.4">
        <circle style="fill:none;stroke:#FFFFFF;stroke-width:2.8828;" cx="32.2" cy="32.2" r="30.8"/>
        <path style="fill:none;stroke:#FFFFFF;stroke-width:2.0847;" d="M16.7,19.2l27.5,28.1 M22.3,21.2v18.6c0.1,2.2,1,3.3,2.8,3.3h13.3
        c1.8,0,2.7-1.1,2.7-3.3V21.2 M42.1,22.3h3.2c1.4,0.2,2.1,1.2,2.1,3.1c0,2.8,0.6,6.3-2.1,6.3h-3.4"/>
      </g>

      <g id="play" viewBox="0 0 32 32">
        <circle style="fill:#F38230;" cx="16" cy="16" r="15.4"/>
        <path style="fill:#FFFFFF;" d="M25.2,16l-14.3,7.2V8.8L25.2,16z"/>
      </g>

      <g id="allGood" viewBox="0 0 64 64">

      <circle style="fill:#00000055;stroke:#7ED321;stroke-width:2.3;" cx="32" cy="32" r="30"/>
        <path style="fill:#FFFFFF;" d="M19.9,29.3l9.2,9.2l17.4-17.4l2.9,2.9L32,41.4l0.1,0.1l-2.9,2.9
          l-0.1-0.1L29,44.4l-2.9-2.9l0.1-0.1L17,32.2L19.9,29.3L19.9,29.3z"/>
      </g>



    </svg>
    `;
          svgLib.innerHTML = data;
          data = null;
          destination.appendChild(svgLib);

          const sheet = document.createElement('style');
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

          .cyan .userFIllColor, .cyan use{
              fill:#13aec0;
              background-color:#13aec0;
          }
          .cyan .userBorderColor{
              border-color:#13aec0!important;
          }

          .turquoise .userFIllColor, .turquoise use{
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

          .gold .userFIllColor, .gold use{
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

          .fushia .userFIllColor, .fushia use{
              fill:#c90563;
              background-color:#c90563;
          }
          .fushia .userBorderColor{
              border-color:#c90563!important;
          }

          .pink .userFIllColor, .pink use{
              fill:#ef52bb;
              background-color:#ef52bb;
          }
          .pink .userBorderColor{
              border-color:#ef52bb!important;
          }

          .violet .userFIllColor, .violet use{
              fill:#8d3fcf;
              background-color:#8d3fcf;
          }
          .violet .userBorderColor{
              border-color:#8d3fcf!important;
          }

          .blue .userFIllColor, .blue use{
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
              background-image: url(${imag('kbkg')});
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
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              text-align: center;
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
              width: calc(100% - 4px);
              color: white;
              font-size: 16px;
              text-align: center;
              font-weight: bold;
              text-transform: uppercase;
              margin: 5px;
              line-height: 46px;
          }

          .userTitleClip {
              position: absolute;
              width: 30px;
              border-bottom-style: solid;
              border-bottom-width: 3px;
              top: 45px;
              left: 225px;
          }

          .userTitleClip.wide {

              left: 224px;
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

          .secondary {
              opacity:0;
              pointer-events: none;       
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

        /*  .running .vWheel.quantityScroller .wheelItem.selected ~ .wheelItem{
              opacity:0;
          }*/

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

          .startButton, .stopButton, .nextButton {
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

          .stopButton, .nextButton {
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
          overflow:hidden;
      }

      .home .recetteScrollerItem:nth-child(1), .home .recetteScrollerItem:nth-child(2), .home .recetteScrollerItem:nth-child(3){
      transform:translateX(480px);
      transition:transform .8s;
      }

      .home .recetteScrollerItem:first-child{
      margin-left: 19px;
      transition-delay:0;
      }
      .home .recetteScrollerItem:nth-child(2){
      transition-delay:.2s;
      }
      .home .recetteScrollerItem:nth-child(3){
      transition-delay:.4s;
      }
      .home .recetteScrollerItem:last-child{
          margin-right: 19px;
          transition-delay:0;
      }

      .recetteScrollerItem .title{
          width: 153px;
          height: 29px;
          position: absolute;
          font-size: 16px;
          text-align: center;
          font-weight: bold;
          text-transform: uppercase;
          top: 8px;
          left: 2px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
      }

      .recetteScrollerItem .sep{
          width: 120px;
          top: 40px;
          position: absolute;
          border-bottom: solid 1px #8c8c8c;
          left: 18px;
      }

      .pageContent.built .recetteScrollerItem{
      transform:translateX(0);
      }


      .pageContent.built .recetteScrollerItem{
      transform:translateX(0);
      }

      .recetteScrollerItem .thumb {
          position: absolute;
          width: 150px;
          height: 150px;
          top: 44px;
          left: 3px;
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
          padding: 3px 0 0;
          box-sizing: border-box;
          position:relative;
          margin-right:3px;
          overflow:hidden;
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
          width: 104px;
          left: 4px;
          border-bottom: none;
          height: 52px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
      }

      .atile.userRecipe .titleBlock {
          position: absolute;
          width: 106px;
          top:2px;
          left: 2px;
          border-bottom: none;
          height: 52px;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
      }

          .atile .titleBlock span {
              font-weight: bold;
              text-transform: uppercase;
              font-size: 14px;
              white-space: initial;
          }



        .atile .hsep {
              position: absolute;
              left: 18px;
              width: 76px;
              height: 1px;
              top: 25px;
              border-bottom: solid 1px rgba(255, 255, 255, 0.2);
          }



          .atile .titleBlock .userTitleClip{
              left:32px;
              bottom:-2px;
          }

          .atile.userRecipe .userTitleClip{
              left: 40px;
              top: 28px;
          }

          .atile .tileIcon{
              position:absolute;
              width:44px;
              height:44px;
              left:33px;
              top:59px;
          }
          .atile.addFavToUser .tileIcon, .atile.userSettings .tileIcon{
              top:40px;
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
              position: absolute;
              top: 24px;
              width: 100%;
          }
          .atileContents .ellipsis{
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
          }

          .atile.double .titleBlock {
              width: 100%;
          }
          .atile.double .hsep {
              left: 36px;
              width: 156px;
              }
      

          .atile.double .atileContents{
              width: 106px;
              position: absolute;
          }

          .atile.double .atileContents:last-child{

              left:116px;
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
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
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

                .okButton.square{
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


          .settingsDesc.care{
              top:60px
          }

          
          .careImg{
              width: 200px;
              height: 150px;
              position: absolute;
              top: 118px;
              left: 143px;
              overflow: hidden;
          }

          .careImg img{
              width:1200px;
              height:150px;
          }

      `;
          document.head.appendChild(sheet);
      }

      function imag(s) {
          if (app.imgDB[s].hsrc) {
              return app.imgDB[s].hsrc;
          } else {
              return 'images/' + app.imgDB[s].uri;
          }
      }

      app.showSpinner = function() {
          const spinnerSvg = `
      <svg class="kxSpin" viewbox="0 0 64 16">
          <circle class="c1" r="6" cx="8" cy="8" fill="white"/> 
          <circle class="c2" r="6" cx="32" cy="8" fill="white"/> 
          <circle class="c3" r="6" cx="56" cy="8" fill="white"/> 
      </svg>`;
          const template = document.createElement('div');
          template.innerHTML = spinnerSvg.trim();
          app.spinner = template.firstChild;
          app.currentPage.built.appendChild(app.spinner);
      }
      ;

      app.hideSpinner = function() {
          if (app.spinner)
              app.spinner.remove();
      }
      ;

      var sequence = function(anarray, callback) {
          const seq = this;
          let timout;
          seq.keepongoing = true;
          seq.stop = function() {
              seq.keepongoing = false;
              callback(false);
          }
          ;
          const ret = function(t) {
              t.fn();
              return new Promise((resolve)=>{
                  timout = setTimeout(function() {
                      if (seq.keepongoing) {
                          resolve(t);
                      } else {
                          clearTimeout(timout);
                      }
                  }, t.delay);
              }
              );
          };
          const result = anarray.reduce((accumulatorPromise,nextID)=>{
              return accumulatorPromise.then(()=>{
                  return ret(nextID);
              }
              );
          }
          , Promise.resolve());
          result.then(()=>{
              callback(true);
          }
          );
      };

      var hslider = function(e, callback) {
          const that = this;
          that.element = e;
          that.isDown = false;
          that.startX = null;
          that.scrollLeft = null;
          that.mouseMove = false;
          that.element = e;
          that.isScrolling = false;
          that.align = function(automove) {
              if (that.element.scrollLeft >= 242) {
                  if (automove)
                      that.element.scrollTo({
                          left: 484,
                          behavior: 'smooth'
                      });
                  callback(2);
              } else {
                  if (automove)
                      that.element.scrollTo({
                          left: 0,
                          behavior: 'smooth'
                      });
                  callback(1);
              }
          }
          ;

          //that.element.addEventListener('scroll', function(e) {
          //});

          that.element.addEventListener('touchmove', function() {
              window.clearTimeout(that.isScrolling);
              that.isScrolling = setTimeout(function() {
                  that.align(false);
              }, 600);
          }, {
              passive: false
          });

          that.element.addEventListener('mouseover', ()=>{
              that.element.style.scrollSnapType = 'unset';
          }
          );

          that.element.addEventListener('mousedown', (e)=>{
              that.isDown = true;
              that.mouseMove = false;
              that.startX = e.pageX - that.element.offsetLeft;
              that.scrollLeft = that.element.scrollLeft;
          }
          );

          that.element.addEventListener('mouseleave', ()=>{
              that.isDown = false;
              that.mouseMove = false;
              that.align(true);
          }
          );

          that.element.addEventListener('click', ()=>{
              if (that.mouseMove)
                  return;
          }
          );

          that.element.addEventListener('mouseup', (e)=>{
              e.stopImmediatePropagation();
              e.preventDefault();
              if (app.pointingDevice == 'touch')
                  return;
              that.isDown = false;
              that.align(true);
          }
          );

          that.element.addEventListener('mousemove', (e)=>{
              //if(e.movementX > 5);

              that.mouseMove = true;
              if (!that.isDown)
                  return;
              const x = e.pageX - that.element.offsetLeft;
              const walk = (x - that.startX) * 2;
              that.element.scrollLeft = that.scrollLeft - walk;
          }
          );

          that.element.addEventListener('wheel', function(e) {
              e.preventDefault();
          });

          that.element.addEventListener('touchstart', ()=>{}
          );
      };

      var Hscroller = function(e) {
          const that = this;
          that.element = e;
          that.isDown = false;
          that.startX = null;
          that.scrollLeft = null;
          that.mouseMove = false;
          that.element = e;
          that.element.classList.add(app.pointingDevice);

          that.element.addEventListener('scroll', function() {});

          that.element.addEventListener('mouseover', ()=>{
              if (app.pointingDevice == 'touch')
                  return;
              that.element.style.scrollSnapType = 'unset';
          }
          );

          that.element.addEventListener('mousedown', (e)=>{
              if (app.pointingDevice == 'touch')
                  return;
              that.isDown = true;
              that.mouseMove = false;
              that.startX = e.pageX - that.element.offsetLeft;
              that.scrollLeft = that.element.scrollLeft;
          }
          );

          that.element.addEventListener('mouseleave', ()=>{
              if (app.pointingDevice == 'touch')
                  return;
              that.isDown = false;
              that.mouseMove = false;
          }
          );

          that.element.addEventListener('click', ()=>{
              if (that.mouseMove)
                  return;
          }
          );

          that.element.addEventListener('mouseup', (e)=>{
              e.stopImmediatePropagation();
              e.preventDefault();
              if (app.pointingDevice == 'touch')
                  return;
              that.isDown = false;
          }
          );

          that.element.addEventListener('mousemove', (e)=>{
              if (app.pointingDevice === 'touch')
                  return;
              that.mouseMove = true;
              if (!that.isDown)
                  return;
              const x = e.pageX - that.element.offsetLeft;
              const walk = (x - that.startX) * 2;
              that.element.scrollLeft = that.scrollLeft - walk;
          }
          );

          that.element.addEventListener('wheel', function(e) {
              e.preventDefault();
          });

          that.element.addEventListener('touchstart', ()=>{
              app.pointingDevice = 'touch';
          }
          );
      };

      var vscroller = function(e, centerTarget) {
          const that = this;
          that.isDown = false;
          that.startY = null;
          that.scrollTop = null;
          that.mouseMove = false;
          that.element = e;
          that.element.classList.add(app.pointingDevice);
          that.centerTarget = centerTarget;
          that.pause = false;
          let timout;
          that.element.addEventListener('scroll', function() {
              if (that.pause)
                  return;
              clearTimeout(timout);
              timout = setTimeout(function() {
                  if (that.element.querySelectorAll('.wheelItem.selected').length > 0) {
                      that.element.querySelector('.wheelItem.selected').classList.remove('selected');
                  }
                  that.bb = that.centerTarget.getBoundingClientRect();
                  // TODO Should be set once at init...
                  that.selected = document.elementFromPoint(that.bb.left, that.bb.top);
                  that.selected.classList.add('selected');
              }, 100);
          });

          that.scrollToFunction = function(thisItem, smooth) {
              if (thisItem == null)
                  return;
              if (that.element.querySelector('.wheelItem.selected')) {
                  that.element.querySelector('.wheelItem.selected').classList.remove('selected');
              }
              const offset = that.element.querySelector('.wheelItem').offsetHeight;
              thisItem.classList.add('selected');
              that.element.scrollTo({
                  top: thisItem.offsetTop - offset,
                  behavior: smooth ? 'smooth' : 'auto'
              });
          }
          ;

          const divs = that.element.querySelectorAll('div.wheelItem');
          divs.forEach((el)=>el.addEventListener('click', ()=>{
              if (that.mouseMove || that.pause)
                  return;
              that.scrollToFunction(el, true);
          }
          ), );

          that.element.addEventListener('mouseover', ()=>{
              if (that.pause)
                  return;
              if (app.pointingDevice == 'touch' || that.pause)
                  return;
              that.element.style.scrollSnapType = 'unset';
          }
          );

          that.element.addEventListener('mousedown', (e)=>{
              if (app.pointingDevice == 'touch' || that.pause)
                  return;
              that.isDown = true;
              that.mouseMove = false;
              that.startY = e.pageY - that.element.offsetTop;
              that.scrollTop = that.element.scrollTop;
          }
          );

          that.element.addEventListener('mouseleave', ()=>{
              if (app.pointingDevice == 'touch' || that.pause)
                  return;
              that.isDown = false;
              that.mouseMove = false;
          }
          );

          that.element.addEventListener('mouseup', ()=>{
              if (app.pointingDevice == 'touch' || that.pause)
                  return;
              that.isDown = false;
              recenter();
          }
          );

          that.element.addEventListener('mousemove', (e)=>{
              if (that.pause) return;
              if (app.pointingDevice == 'touch') return;
              that.mouseMove = true;

              if (!that.isDown) return;
              //console.log(e.movementY);
              const y = e.pageY - that.element.offsetTop;
              const walk = (y - that.startY) * 1;
              // increase to scroll faster
              that.element.scrollTop = that.scrollTop - walk;
          }
          );

          that.element.addEventListener('wheel', function(e) {
              e.preventDefault();
          });

          that.element.addEventListener('touchstart', ()=>{
              app.pointingDevice = 'touch';
          }
          );

          function recenter() {
              that.bb = that.centerTarget.getBoundingClientRect();
              // Should be set once at init...
              that.selected = document.elementFromPoint(that.bb.left, that.bb.top);
              that.scrollToFunction(that.selected, true);
          }
      };
      // Scroll Polyfill

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
  };


  window.kx = new kxapp();
}
)();

