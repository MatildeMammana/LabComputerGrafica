pages = {
  "pagInizio": {
    header: "C'era una volta...",
    left: "provare a scappare",
    goLeft: "pagScappa",
    center:"",
    goCenter:"",
    right: "nascondersi dietro l'albero",
    goRight: "pagAlbero",
    nome:"",
    goNome:"",
    content: "...un mercante di nome Alì Babà che, viaggiando verso la città di Persia, vide arrivare in lontananza un gruppo di ladroni armati fino ai denti. Decise quindi di:",
	  imm:'url(immagini/scene/01.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagScappa": {
    header: "Oh no! Sei stato preso!",
    left: "Ricomincia",
    goLeft: "pagInizio",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content: "Alì non è riuscito nell'impresa, i ladroni l'hanno raggiunto e ucciso.",
	  imm:'url(immagini/scene/03.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagAlbero": {
    header: "Ti sei nascosto bene!",
    left: "Sim Sala Bim",
    goLeft: "pagCrollo",
    center:"Apriti Sesamo",
    goCenter:"pagGrotta",
    right: "Abra Cadabra",
    goRight: "pagSultano",
    nome:"",
    goNome:"",
    content: "Dal suo nascondiglio Alì osservò i ladroni parlare fuori da una grande grotta. Con una parola magica essi riuscirono ad entrare e Alì vide le grandi ricchezze nascoste al suo interno. I ladroni se ne andarono poco dopo, e Alì decise di avvicinarsi intenzionato ad entrare... Ma qual è la parola magica?",
	  imm:'url(immagini/scene/02.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagCrollo": {
    header: "Oh no! La grotta è crollata!",
    left: "Ricomincia",
    goLeft: "pagInizio",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content: "La parola magica pronunciata fece tremare la grande grotta, che crollò e venne inghiottita dalla sabbia. Così, Alì non ebbe più speranze di arricchirsi.",
	  imm:'url(immagini/scene/04.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagSultano": {
    header: "Benvenuto a palazzo!",
    left: "",
    goLeft: "",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content: "Alì Babà si ritrovò magicamente all'interno del palazzo del sultano. Nella stanza c'erano molti tesori e, conservati sotto delle teche di vetro, tre strani oggetti... Oh no! Le guardie stanno arrivando, Alì deve scegliere in fretta quale prendere!",
	  imm:'url(immagini/scene/05.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome",
    sul:".sul",
    choiceSci:"pagPrigione",
    choiceLam:"pagGenio",
    choiceRub:"pagRubino"
  },
  "pagRubino": {
    header: "",
    game:"#gioco2",
	  gameStartFunction: gioco2,
    left: "",
    goLeft: "pagPrigione",
    center:"",
    goCenter:"",
    right: "",
    goRight: "pagCoda",
    nome:"",
    goNome:"",
    content: "",
	  imm:'',
	  layout:'url(immagini/elementi/layoutgame@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagGenio": {
    header: "Hai svegliato il genio!",
    left: "fuori dalla grotta",
    goLeft: "pagAlbero",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"Alì ha scelto la lampada d'oro e, sfregandola mentre fuggiva, ha svegliato il genio dal suo sonno millenario. Questi, molto infastidito, con un incantesimo lo rispedì...",
	  imm:'url(immagini/scene/06.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagPrigione": {
    header: "In prigione!",
    left: "Ricomincia",
    goLeft: "pagInizio",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"Le guardie hanno catturato il povero Alì. Finirà i suoi giorni nelle segrete del palazzo!",
	  imm:'url(immagini/scene/04.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagGrotta": {
    header: "",
    game:"#gioco1",
	  gameStartFunction: gioco1,
    left: "",
    goLeft: "pagScappa",
    center:"",
    goCenter:"",
    right: "",
    goRight: "pagFurto",
    nome:"",
    goNome:"",
    content:"",
	  imm:'',
	  layout:'url(immagini/elementi/layoutgame@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagFurto": {
    header: "Al ladro!",
    left: "Continua...",
    goLeft: "pagFurto2",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"Quando il capo dei ladroni, senza fiato, scoprì di essere stato derubato, urlò pieno di rabbia: <<La pagherà quel furfante! Parola di brigante!>>. Poi, calmatosi, notò un brandello di stoffa appartenente al ladro. Così decise di scovare il colpevole. ",
	  imm:'url(immagini/scene/09.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagFurto2": {
    header: "Abbiamo ospiti",
    left: "<<Con piacere!>>",
    goLeft: "pagOspiti",
    center:"",
    goCenter:"",
    right: "<<Mmm...No!>>",
    goRight: "pagMorte",
    nome:"",
    goNome:"",
    content:"Passeggiando giù in città e sbirciando tra le case, il brigante si accorse di una donna intenta a rammendare con cura una stoffa uguale a quella del brandello trovato nella caverna. Scovato Alì Babà, il capo dei ladroni andò da lui fingendosi un mercante e trasportando con sè degli orci in cui erano nascosti gli scagnozzi. E disse: <<Sono in viaggio da ieri, potreste ospitarmi per la notte?>> ",
	  imm:'url(immagini/scene/10.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagOspiti": {
    header: "Voci sospette",
    left: "Accoppia gli ingredienti",
    goLeft: "pagMemory",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"Ingenuo e generoso Alì offrì subito la sua ospitalità, ma sua moglie Morgiana, più furba e diffidente, osservò con attenzione quegli orci sospetti e avvicinandosi sentì una voce dire: <<Capo, è ora?>>. Lei, avendo compreso l'inganno, svelta rispose: <<Non ancora!>> e corse a preparare una pozione magica per uccidere i briganti.",
	  imm:'url(immagini/scene/11.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagMemory": {
    header: "",
    game:"#memory_board",
	  gameStartFunction: newBoard,
    left: "",
    goLeft: "pagMorte",
    center:"",
    goCenter:"pagFinale",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"",
	  imm:'',
	  layout:'url(immagini/elementi/layoutgame@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagFinale": {
    header: "Ce l'hai fatta!",
    left: "Continua...",
    goLeft: "pagCoda",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"Morgiana versò la pozione negli orci, riuscendo ad uccidere tutti i ladroni. Poi, danzando per l'ospite, con un colpo deciso uccise anche il capo e raccontò tutta la storia al marito stupito.",
	  imm:'url(immagini/scene/12.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagMorte": {
    header: "Sei stato ucciso!",
    left: "Ricomincia",
    goLeft: "pagInizio",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"Il capo dei ladroni, non riuscendo a trattenere la collera, sguainò la scimitarra e uccise Alì e la moglie.",
	  imm:'url(immagini/scene/03.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagCoda": {
    header: "E così...",
    left: "Torna alla copertina",
    goLeft: "pagHome",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"...si conclude la storia, che diede ad Alì ricchezza e gloria. <<Brindiamo alla fortuna, moglie mia, e ad un tesoro avuto per magia!>>.",
	  imm:'url(immagini/scene/13.png)',
	  layout:'url(immagini/elementi/layout@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
	"pagMappa": {
    header: "",
    left: "",
    goLeft: "",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"",
	  imm:'',
	  layout:'url(immagini/elementi/mappa@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome",
		codemappa:"#mappa",
		goUno:"pagInizio",
		goDue:"pagScappa",
		goTre:"pagAlbero",
		goQua:"pagCrollo",
		goCin:"pagSultano",
		goSei:"pagGenio",
		goSet:"pagRubino",
		goOtt:"pagPrigione",
		goNov:"pagGrotta",
		goDie:"pagFurto",
    goUnd:"pagFurto2",
		goDod:"pagOspiti",
		goTrd:"pagMemory",
    goQut:"pagMorte",
    goQui:"pagFinale",
    goSec:"pagCoda"
  },
	"pagHome": {
    header: "",
    left: "",
    goLeft: "",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"C'era una volta...",
    goNome:"pagInizio",
    content:"",
	  imm:'',
	  layout:'url(immagini/elementi/copertina@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome",
    puls:".puls",
    goAut:"pagAutori",
    goCre:"pagCrediti"
  },
  "pagAutori":{
    header: "",
    left: "",
    goLeft: "",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"",
	  imm:'',
	  layout:'url(immagini/elementi/autori@2x.png)',
	  mappa:"",
	  goMappa:"pagMappa",
	  home:"",
		goHome:"pagHome"
  },
  "pagCrediti":{
    header: "",
    left: "",
    goLeft: "",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"",
    imm:'',
    layout:'url(immagini/elementi/crediti@2x.png)',
    mappa:"",
    goMappa:"pagMappa",
    home:"",
    goHome:"pagHome",
    pro:"#cred",
    cred:"Continua...",
    goCred:"pagCrediti1"
  },
  "pagCrediti1":{
    header: "",
    left: "",
    goLeft: "",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"",
    imm:'',
    layout:'url(immagini/elementi/crediti1@2x.png)',
    mappa:"",
    goMappa:"pagMappa",
    home:"",
    goHome:"pagHome",
    pro:"#cred",
    cred:"Continua...",
    goCred:"pagCrediti2"
  },
  "pagCrediti2":{
    header: "",
    left: "",
    goLeft: "",
    center:"",
    goCenter:"",
    right: "",
    goRight: "",
    nome:"",
    goNome:"",
    content:"",
    imm:'',
    layout:'url(immagini/elementi/crediti2@2x.png)',
    mappa:"",
    goMappa:"pagMappa",
    home:"",
    goHome:"pagHome",
  }
}

var currentStatus = "pagHome";

function render () {

  currentPage = pages[currentStatus];

  $(".codemappa").css({display:"none"});
  $(".puls").css({display:"none"});
  $(".game").css({display:"none"});
  $(".pro").css({display:"none"});


  $("#header").text(currentPage.header);
  $("#left").text(currentPage.left);
  $("#right").text(currentPage.right);
  $("#center").text(currentPage.center);
  $("#nome").text(currentPage.nome);
  $("#cred").text(currentPage.cred);
  $("#icon_map").text(currentPage.mappa);
	$("#icon_cop").text(currentPage.home);
	$("#content").text(currentPage.content);
  $("#immagine").css({backgroundImage:currentPage.imm});
	$("#wrapper").css({backgroundImage:currentPage.layout});

  $("#lam").css({display:"none"});
  $("#sci").css({display:"none"});
  $("#rub").css({display:"none"});

  $("#icon_aut").css({display:"none"});
  $("#icon_cre").css({display:"none"});





	if(currentPage.game) {$(currentPage.game).fadeIn(); currentPage.gameStartFunction();}
	if(currentPage.codemappa) {$(currentPage.codemappa).fadeIn();}
  if(currentPage.sul) {$(currentPage.sul).fadeIn(3000);}
  if(currentPage.puls) {$(currentPage.puls).fadeIn();}
  if(currentPage.pro) {$(currentPage.pro).fadeIn();}


}

function changePage (direction) {
  currentStatus = pages[currentStatus][direction];
  render();
}

function goLeft () {
  changePage("goLeft");
}

function goNome () {
  changePage("goNome");
}

function goCred () {
  changePage("goCred");
}


function goCenter () {
  changePage("goCenter");
}

function goRight () {
  changePage("goRight");
}

function goMappa () {
  changePage("goMappa");
}

function goHome () {
  changePage("goHome");
}

function goUno(){
	changePage("goUno");
}

function goDue(){
	changePage("goDue");
}

function goTre(){
	changePage("goTre");
}

function goQua(){
	changePage("goQua");
}

function goCin(){
	changePage("goCin");
}

function goSei(){
	changePage("goSei");
}

function goSet(){
	changePage("goSet");
}

function goOtt(){
	changePage("goOtt");
}

function goNov(){
	changePage("goNov");
}

function goDie(){
	changePage("goDie");
}

function goUnd(){
	changePage("goUnd");
}

function goDod(){
	changePage("goDod");
}

function goTrd(){
	changePage("goTrd");
}

function goQut(){
	changePage("goQut");
}

function goQui(){
	changePage("goQui");
}

function goSec(){
	changePage("goSec");
}

function choiceSci(){
	changePage("choiceSci");
}

function choiceLam(){
	changePage("choiceLam");
}

function choiceRub(){
	changePage("choiceRub");
}

function goAut(){
	changePage("goAut");
}

function goCre(){
	changePage("goCre");
}


$("#icon_map").click(goMappa);
$("#icon_cop").click(goHome);
$("#icon_aut").click(goAut);
$("#icon_cre").click(goCre);

$("#left").click(goLeft);
$("#nome").click(goNome);
$("#cred").click(goCred);
$("#center").click(goCenter);
$("#right").click(goRight);

$("#uno").click(goUno);
$("#due").click(goDue);
$("#tre").click(goTre);
$("#qua").click(goQua);
$("#cin").click(goCin);
$("#sei").click(goSei);
$("#set").click(goSet);
$("#ott").click(goOtt);
$("#nov").click(goNov);
$("#die").click(goDie);
$("#und").click(goUnd);
$("#dod").click(goDod);
$("#trd").click(goTrd);
$("#qut").click(goQut);
$("#qui").click(goQui);
$("#sec").click(goSec);

$("#sci").click(choiceSci);
$("#lam").click(choiceLam);
$("#rub").click(choiceRub);

render();
