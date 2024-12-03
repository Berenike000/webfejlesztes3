

//az első rész a könyvajánlóhoz kell, a kód a 45. sornál kezdődik

const lista = ["H. G. Wells: Az időgép (1895)", "George Orwell: 1984 (1949)", "Adrian Tchaikovsky: Az idő gyermekei (2015)", "Andy Weir: A marsi (2011)", "James S. A. Corey: A térség (2011)", "Isaac Asimov: Az Alapítvány-sorozat", "Cixin Liu: Háromtest-probléma (2008)", "William Gibson: Neurománc (1984)", "Arthur C. Clarke: Űrodisszeia (1968)", "Frank Herbert: Dűne (1965)", "Aldous Hexley: Szép új világ (1932)", "Douglas Adams: Galaxis útikalauz stopposoknak (1979)", "Hugh Howley: Siló (2012)", "Diana Gabaldon: Outlander (1991)", "Mary Shelley: Frankenstein (1818)", "Richard Matheson: Legenda vagyok (1954)", "Veronica Roth: A beavatott (2011)", "Suzanne Collins: Az éhezők viadala (2008)"]

const descriptionlista = [
  "A történet helyszíne London, időpont - XIX. század. Az író, mint egy baráti társaság résztvevője számol be a köztük elhangzottakról. Kellemes csevejt folytatnak a térről és időről, illetve ezek határainak átjárhatóságáról. A következő találkozón a vendégek a házigazdára várakoznak, aki kisvártatva viseltes állapotban lép be az ajtón, úgy néz ki, mint aki nagy megpróbáltatásokon ment keresztül. Ezt követően az időjáró elmondja, hogy utazott az időben, és elmeséli, hogy miket tapasztalt.", 

  "Az 1984 egy szatirikus politikai regény és szerelmi történet George Orwelltől. Olyan disztópia (negatív utópia), amelyben a felügyelő állam tökéletes alkalmazkodást követel a polgároktól hazugságokkal, félelemkeltéssel és kegyetlen büntetésekkel.", 

  "Az emberi faj maradéka elhagyja a haldokló Földet, és kétségbeesetten kutat új otthon után a csillagok között. Ősei nyomában járva az egykori aranykor legnagyobb kincsére bukkan: egy olyan bolygóra, amelyet annak idején terraformálással tettek alkalmassá az emberi élet fenntartására. Ám a bolygó nem várja tárt karokkal az érkezőket, nem érintetlen, és főleg nem lakatlan. Két civilizáció kerül ütközési pályára, és mindkettő a határait feszegeti. Mivel a tét a faj fennmaradása, korántsem mindegy, ki lesz az új Föld birtokosa.",

  "Hat nappal ezelőtt Mark Watney az elsők között érkezett a Marsra. Most úgy fest, hogy ő lesz az első ember, aki ott is hal meg. Miután csaknem végez vele egy porvihar, ami evakuációra kényszeríti az őt halottnak gondoló társait, Mark teljesen egyedül a Marson ragad. Még arra is képtelen, hogy üzenetet küldjön a Földre, és tudassa a világgal, hogy életben van – de még ha üzenhetne is, a készletei elfogynának, mielőtt egy mentőakció a segítségére siethetne. Bár valószínűleg úgysem lesz ideje éhen halni. Sokkal valószínűbb, hogy még azelőtt vesztét okozzák a sérült berendezések, a könyörtelen környezet vagy egyszerűen csak a jó öreg „emberi tényező”. De Mark nem hajlandó feladni. Találékonyságát, mérnöki képességeit, és az élethez való hajthatatlan, makacs ragaszkodását latba…", 

  "Az ​emberiség már meghódította a naprendszert, a csillagok viszont továbbra is elérhetetlenek. Jim Holden a Szaturnusz és az Öv között ingázó egyik jégbányász hajó tisztje. Amikor véletlenül rábukkannak egy elhagyott űrhajóra, olyan titok birtokába kerülnek, amiért egyesek gyilkolni is hajlandóak. Olyan események láncreakciója indul el, amely az egész Naprendszert háborúval fenyegeti. Eközben Miller nyomozó egy lány után kutat. Amikor a nyomok a Scopulihoz és a lázadókkal szövetkező Holdenhez vezetnek, a szálak összefutnak…",

  "Isaac Asimov párját ritkító magabiztossággal vezet bennünket végig monumentális jövővízióján: a Föld pusztulásának, a Galaktikus Birodalom összeomlásának és az Alapítványok tündöklésének vászna előtt emberek, robotok, mutánsok és bolygólények dolgoznak és harcolnak sorsunk irányításáért és végzetünk beteljesítéséért.", 

  "1967-ben, ​a maoista kulturális forradalom alatt egy fiatal egyetemista lánynak, Ye Wenjiének végig kell néznie, ahogy a vörösgárdisták halálra verik édesapját. Negyven évvel később a pekingi rendőrség felkeresi Wang Miaot, hogy férkőzzön be egy tudósok alkotta, titkos társaságba. Ezekben a hetekben Kína-szerte több híres tudós lett öngyilkos, nem lehet tudni, miért. Wangot a nyomozás egy rejtélyes online számítógépes játékhoz vezeti el, és amikor játszani kezd, belemerül egy virtuális világba, ahol három, szabálytalan időközönként felkelő és lenyugvó nap határozza meg az élet kereteit. A három nap rapszodikus viselkedésének feltérképezése jelenti a háromtest-problémát, és ez a probléma a végső kulcs a halálesetek felderítéséhez is. ",

  "Vigyázz, ha jön a jövő! Case, a konzolcowboy, az adatmezők magányos vándora magára haragította megbízóit, s ezért a hibáért képességei legjavával kellett fizetnie. Azóta üzletel, a fennmaradásáért küzd a XXI. századi Japán alvilágában, ahol a pénz szava törvény, a könnyelműség büntetése pedig gyors, kíméletlen halál… Armitage, a kékszemű démon azonban nem az üzletkötés szándékával keresi fel Case-t. Neki az aranykezű számítógépvirtuózra van szüksége. Társnője az acélkarmú, harcra drótozott izomzatú Molly indítékai még különösebbek… Megbízójuk a világ legzseniálisabb komputere svájci állampolgár. Szabadparton, ebben a fura, égi Las Vegasban él, egy arisztokrata dinasztiát szolgál. Úgy határozott, kivívja szabadságát. Bármi áron…",

  "Clarke könyve végtelen távlatokat nyit az emberi fantázia számára. Képtelenség-e, hogy a mi helyi világmindenségünk, a Tejút csillagait is benépesítik velünk egyenlő vagy nálunk különb lények? Képtelenség-e, hogy egy napon a csillagok közt összetalálkozunk velük? Ezt a kérdést teszi fel Clarke könyve előszavában, amely lebilincselően él egy ugyancsak általa megfogalmazott gondolattal: „A lehetséges határait csak egyetlen módon fedezhetjük fel, ha megkockáztatjuk, hogy kevéssel túl is haladunk rajta, a lehetetlenbe.”",

  "Az ​univerzum legfontosabb terméke a fűszer, amely meghosszabbítja az életet, lehetővé teszi az űrutazást, és élő számítógépet csinál az emberből. Az emberlakta világokat uraló Impériumban azé a hatalom, aki a fűszert birtokolja. A Padisah Császár, a bolygókat uraló Nagy Házak, az Űrliga és a titokzatos rend, a Bene Gesserit kényes hatalmi egyensúlyának, a civilizáció egészének záloga, hogy a fűszerből nem lehet hiány. Ám ez az anyag csak egy helyen található, a sivatagos, kegyetlen Arrakison, amelyet lakói, a vad fremenek csak úgy ismernek: Dűne.",

  "A 26. századi Londonban játszódó történet világában a szaporítás, a genetika és a hipnózis hatalmas fejlődést mondhat magáénak, teljesen megváltoztatva az emberi társadalmat, amit kasztokra osztanak fel, rang szerint csökkenő sorrendben: Alfa, Béta, Gamma, Delta, illetve Epszilon. A leírt társadalom felfogható utópiának is, nagyon ironikus formában: az emberiség gondtalan, egészséges és technológiailag fejlett. Nincsenek többé háborúk és szegénység, mindenki folyamatosan boldog. Azonban ezzel számos dolgot elveszítettek: a családot, a kulturális sokszínűséget, a művészeteket, irodalmat, tudományt, vallást és filozófiát.",

  "Ez ​a történet a szörnyen ostoba csütörtökről és a rendkívüli következményeiről szól, és arról, hogy miért sokkal biztonságosabb a világegyetem, ha van nálunk egy törülköző. Ez a történet emellett egy könyvről is szól, melynek címe: Galaxis Útikalauz stopposoknak. Ez nem földi könyv, sosem adták ki a Földön, és a szörnyű katasztrófát megelőzően egyetlen földlakó se látta vagy hallott róla. A könyv mindazonáltal szerfelett figyelemreméltó. Valószínűleg ez a legfigyelemreméltóbb könyv, ami csak napvilágot látott a Kisgöncöl óriási kiadóhivatalainak gondozásában – bár a földlakók ezekről se hallottak.",

  "Ha ​az élet üres, inkább semmilyen se legyen? A Siló a túlélésért küzdő emberiség története. Kegyetlenné és mérgezővé vált a kinti világ. Látni nem sokat lehet belőle. Beszélni róla pedig egyenesen tilos. Az emberiség maradványa egy föld alatti silóban él. De mindig vannak olyanok, akik remélnek és álmodnak. Ők azok, akik veszélyesek, a lakók, akik másokat is megfertőznek az optimizmusukkal. Egyszerű büntetés vár rájuk. Éppen azt kapják, amit akarnak: kimehetnek a silóból.",

  "1945-öt írunk. Claire Randall, a volt hadiápolónő éppen a második nászútját tölti a férjével a háború után. Egészen addig, míg óvatlanul keresztül nem sétál a brit szigetek rengeteg ősi kőkörének egyikén. Hirtelen „sassenach” válik belőle, vagyis idegen – a háborútól és portyázó klánoktól sújtott Skót Felföldön Urunk… 1743. évében. Számára ismeretlen erők visszasodorták az időben. Claire olyan intrikák és veszedelmek között találja magát, amelyek az életét veszélyeztetik… és összetörhetik a szívét.",

  "A hátborzongató, mára már ikonikus történet szerint Victor Frankenstein életet lehel a holt anyagba, ám később megtagadja teremtményét – s ezért a szörny rettentő bosszút esküszik. A kétszáz évvel ezelőtt született mű – amelyet mindenki ismer, de csak kevesen olvastak -rákérdez a tudomány hatalmára, az emberek természetére, céljaira, a világban betöltött helyére, s magára a létezésre is. Bűnhődhet helyettünk más? Az emberiség védelmében sem? Mennyit bír el a lelkiismeret? Vajon ki az igazi rém: a teremtmény vagy teremtője?",

  "Robert Neville valószínűleg az egyetlen túlélője a világméretű járványnak, amely rajta kívül minden férfit, nőt és gyereket vérszomjas éjszakai lénnyé változtatott át, akik elszántan próbálnak végezni vele. Neville nappal étel és más szükséges holmik után kutat, miközben mindent megadna azért, hogy találjon még valakit, aki hozzá hasonlóan túlélte a járványt. Csakhogy mindeközben a fertőzöttek az árnyékban bujkálnak, figyelik minden mozdulatát, és csak arra várnak, hogy elkövessen egy hibát. Előbb egy kutya szegődik mellé, nemsokára pedig úgy tűnik, újabb túlélőre talált, valakire, aki igazi társa lehet…",

  "Beatrice Prior az antiutópisztikus Chicagóban él: az itteni társadalom öt csoportra tagolódik, melyek mindegyike egy-egy erény kiművelését írja elő tagjai számára. Ők az Őszinték, az Önfeláldozók, a Bátrak, a Barátságosak és a Műveltek. Az év egy bizonyos napján a mindenkori tizenhat éveseknek el kell dönteniük, melyik csoporthoz kívánnak tartozni. Ennek kell szentelniük életük hátralevő részét. Beatrice ingadozik aközött, hogy a családjával maradjon-e, vagy végre önmagává váljon. Ez a két lehetőség kizárja egymást. Végül olyan döntést hoz, amely mindenki számára meglepetést jelent – még önmagának is.",

  "A győztes jutalma hírnév. A vesztes büntetése halál. A közeljövő egy sötét világában tizenkét fiú és tizenkét lány küzd egymással egy élő televíziós show-ban, aminek a címe Az éhezők viadala. Egyetlen szabály van: ölj vagy megölnek. Amikor a tizenhat éves Katniss Everdeen a húgát mentve önként jelentkezik, hogy részt vegyen a viadalon, az felér egy halálos ítélettel. De Katniss már nem fél a haláltól. A túlélés a vérében van."
]

const sorozate = document.getElementById("sorozattagja").checked
const kortarse = document.getElementById("kortars").checked
const humorose = Number(document.getElementById("humorose").value)
const urutazas = document.getElementById("urutaz").checked
const tarskritika = document.getElementById("tarskrit").checked
const idoutazas = document.getElementById("idoutaz").checked
const ufo = document.getElementById("ufo").checked
const ai = document.getElementById("ai").checked
const tudomanyos = document.getElementById("tudomanyos").checked
const disztopia = document.getElementById("disz").checked
const posztapok = document.getElementById("poszta").checked
const uropera = document.getElementById("urop").checked
const krimi = document.getElementById("krimi").checked

document.getElementById("ajanlogomb").addEventListener("click", konyvajanlas)
//Array.includes()
//fruits.push("Lemon");  // Adds a new element (Lemon) to fruits 

const eredmeny = [];
const kiiras = [];
let kellrandom = false;

function konyvajanlas(){
  if(sorozate==true){

      if(kortarse == true){
        //sorozat és kortárs is 
          if(humorose >= 7){
            //RANDOM SZAM
            kellrandom = true;
          }
          else{
            if(ai==true && tudomanyos==true && posztapok==true && uropera==true) {
              if(!(eredmeny.includes(2))){eredmeny.push(2)}}

            if(uropera==true && urutazas==true){
              if(!(eredmeny.includes(4))){eredmeny.push(4)}}
  
            if(ufo==true && krimi==true){
              if(!(eredmeny.includes(6))){eredmeny.push(6)}}
            
            if(disztopia==true && ai==true && krimi==true){
              if(!(eredmeny.includes(7))){eredmeny.push(7)}} 
            
            if(disztopia==true && posztapok==true){
              if(!(eredmeny.includes(12))){eredmeny.push(12)}
              if(!(eredmeny.includes(16))){eredmeny.push(16)}}

            if(idoutazas==true){
              if(!(eredmeny.includes(13))){eredmeny.push(13)}}
                  
            if(disztopia==true && posztapok==true && tarskritika==true){
              if(!(eredmeny.includes(17))){eredmeny.push(17)}}
          }
      }
      else{
        //sorozat, de klasszikus
        if(humorose >= 7){
          eredmeny.push(11)
        }
        else{
          if(uropera==true) {
            if(!(eredmeny.includes(5))){eredmeny.push(5)}}

          if(ai==true && uropera==true && urutazas==true){
            if(!(eredmeny.includes(8))){eredmeny.push(8)}}

          if(tarskritika==true){
            if(!(eredmeny.includes(9))){eredmeny.push(9)}}

          if(ufo==true && urutazas==true){
            if(!(eredmeny.includes(11))){eredmeny.push(11)}}
        }
      }
  }
  else{
    if(kortarse==true){
      //nem sorozat, de kortárs
      if(humorose >= 7){
        eredmeny.push(3)
      }
      else{
        if(urutazas==true) {
          if(!(eredmeny.includes(3))){eredmeny.push(3)}}
      }

    }
    else{
      //nem sorozat, és klasszikus
      if(humorose >= 7){
        //RANDOM
        kellrandom = true;
      }
      else{
        if(disztopia==true && idoutazas==true) {
          if(!(eredmeny.includes(0))){eredmeny.push(0)}}

          if(disztopia==true && tarskritika==true){
            if(!(eredmeny.includes(1))){eredmeny.push(1)}
            if(!(eredmeny.includes(10))){eredmeny.push(10)}}

        if(krimi==true){
          if(!(eredmeny.includes(14))){eredmeny.push(14)}}

        if(posztapok==true && disztopia==true){
          if(!(eredmeny.includes(15))){eredmeny.push(15)}}
      }
    }
  }

  if(kellrandom){
    // Returns a random integer from 0 to 16:
    randomszam = Math.floor(Math.random() * 16);
    kiiras = "Sajnos nem találtunk Önnek a választásainak megfelelő könyvajánlást, így választottunk Önnek egy véletlenszerű olvasmányt!" + lista[randomszam] + descriptionlista[randomszam]
  }
  else{ 
    kiiras = "Az Ön számára választott olvasmány(ok): "
    for(i=0; i<eredmeny.length; i++){
      kiiras = kiiras + lista[eredmeny[i]] + descriptionlista[eredmeny[i]]
    }
  }
document.getElementById("konyvajanlaskiiras").innerHTML= "xxxxxx"
  document.getElementById("konyvajanlaskiiras").innerHTML = kiiras

}





$(document).ready(function(){
    //http://www.sitepoint.com/basic-jquery-form-validation-tutorial/
    $("#kerdoiv").validate({
      rules: {
        nev: "required",
        emailcim: {
          required: true,
          email: true
         },
        jelszo: {
          required: true,
          minlength: 5
         },
        jelszo2: {
            required: true,
            minlength: 5
           },
        idoutazas: "required",
        },

      messages: {
         nev: " Írd be a neved!",
         emailcim: " Kérlek valós email címet adj meg!",
         jelszo: {
          required: " Add meg a jelszavad!",
          minlength: " A jelszavad legalább 5 karakter hosszú legyen!"
         },
         jelszo2: {
          required: " Add meg a jelszavad!",
          minlength: " A jelszavad legalább 5 karakter hosszú legyen!"
         },
         idoutazas: " Kérem adjon meg egy évet!"
        },
       });
     })