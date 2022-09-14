const pathName = window.location.pathname;

function insertAfter(newElement, referenceElement) {
   referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}


function formatMessage(nome, mensagem) {
   var text = "";
   text += "<h2>";
   text += "Olá, você recebeu um contato pelo CV online";
   text += "<h2>";
   text += "<p>" + nome + " escreveu a seguinte mensagem:</p>";
   text += "<p>" + mensagem + "</p>";

   return text;
}



function insertAfter(newElement, referenceElement) {
   referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}


function formatMessage(nome, mensagem) {
   var text = "";
   text += "<h2>";
   text += "Olá, você recebeu um contato pelo CV online";
   text += "<h2>";
   text += "<p>" + nome + " escreveu a seguinte mensagem:</p>";
   text += "<p>" + mensagem + "</p>";

   return text;
}

function sendMail() {


   const nome = document.getElementById("nome").value;
   const mensagem = document.getElementById("mensagem").value;

   const texto = formatMessage(nome, mensagem);

   const body = {
      "personalizations": [
         {
            "to": [
               {
                  "email": "gilvan.moura@outlook.com.br"
               }
            ]
         }
      ],
      "from": {
         "email": "cadastros.ferrazdemoura@gmail.com"
      },
      "subject": "Contato do CV Online",
      "content": [
         {
            "type": "text/html",
            "value": texto
         }
      ]
   }

   var myHeaders = new Headers({
      'Content-Type': 'application/json',
      'Authorization': `${secrets.SENDER}`
   });

   var request = {
      method: 'POST',
      headers: myHeaders,
      body: body
   };

   fetch('https://api.sendgrid.com/v3/mail/send', request)
      .then(function (response) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      });


}

//var button = document.getElementById("send");
//button.addEventListener("click", sendMail, false);

if (pathName == "/") {
   var els = document.getElementsByClassName("md-nav__item");

   var segundos = 2;

   for (var i = 0; i < els.length; i++) {
      //animate__animated animate__flipInX
      els[i].classList.add("animate__animated");
      els[i].classList.add("animate__flipInX");
      els[i].style["animation-duration"] = segundos + "s";

      segundos++;
   }

}

// .classList.add("animate__animated");
// document.getElementsByClassName('.md-nav__item').classList.add("animate__flipInX"); 

/* Envia para a impressão PDF*/

if (pathName == "/pdf/") {
   setTimeout(function(){
      document.getElementById("vlibras").style.display="none";
      window.print();
   },300);     
   
}

function fechar() {
   window.location.href = "/"
}


if (window.matchMedia) {
   var mediaQueryList = window.matchMedia('print');

   mediaQueryList.addListener(function (mql) {
      if (!mql.matches) {
         window.location.href = "/"
      }
   });
}

/**** LINK PARA WHATSAPP ***/
var _tag = document.createElement("a");
// var _text = document.createTextNode("This is link");
// _tag.appendChild(_text);
_tag.href = "https://wa.me/5561982449780";
_tag.target = "_blank";
_tag.className = "whatsapp";
_tag.title = "FALE COMIGO PELO WHATSAPP";
document.body.appendChild(_tag);



//Remover o título da Home e da página de Skills

if (pathName == "/") {
   setTimeout(function () {
      document.getElementById("inicio").style.display = "none";
      document.getElementsByClassName("md-nav__list")[0].classList.add("menu_lateral");
      var video = document.getElementsByTagName("video")[0];
      var live = document.getElementsByTagName("iframe")[0];
      if (video.getAttribute("status") == "off") {
         video.style.display = "none";
      }
      if (live.getAttribute("status") == "off") {
         live.style.display = "none";
      }
      if (video.getAttribute("status") == "on" && live.getAttribute("status") == "on") {
         video.style.display = "none";
         live.style.display = "none";
      }

   }, 300);
   /*
   Ajuste para o vídeo de fundo que impacta no menu lateral
     
   */
}

if (pathName == "/skills/") {
   setTimeout(function () {
      document.getElementById("skills").style.display = "none";
      document.getElementById("linguagens").style.cssText = "margin-top:0px;margin-bottom:15px";
   }, 300);
}



//Adiciona links das redes sociais
var header = document.getElementsByClassName("md-header__ellipsis");
var divSocial = document.createElement("div");
divSocial.style.cssText = "position: relative;float:right;color:white"
divSocial.innerHTML = `<a style="color:white !important" href="https://github.com/mouragilvan" target="_blank">
<div style="width:37px;position:relative:float:left !important">
<svg x="1056" y="192" viewBox="0 0 24 24" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
            <path fill="none" stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.36 3.36 0 00-.941-2.611l.001.001c3.14-.35 6.44-1.54 6.44-7a5.422 5.422 0 00-1.502-3.752L20 4.77a4.97 4.97 0 00.32-1.773c0-.722-.151-1.408-.423-2.03L19.91 1S18.73.65 16 2.48c-1.05-.296-2.255-.466-3.5-.466s-2.45.17-3.594.488L9 2.48C6.27.65 5.09 1 5.09 1a4.992 4.992 0 00-.41 1.997c0 .637.117 1.246.332 1.807L5 4.769A5.418 5.418 0 003.5 8.52v.03-.002c0 5.42 3.3 6.61 6.44 7a3.357 3.357 0 00-.939 2.591L9 18.128v3.87"></path>
        </svg>
</div>
</a>

`;

header[0].appendChild(divSocial);


if (pathName == "/sobre-mim/") {

   const dtNascimento = new Date(1985, 7, 11);
   const dtAtual = new Date();
   const idade = dtAtual.getMonth() >= dtNascimento.getMonth() && dtAtual.getDay() >= dtNascimento.getDay() ? dtAtual.getFullYear() - dtNascimento.getFullYear() : (dtAtual.getFullYear() - dtNascimento.getFullYear()) - 1;
   document.getElementById("idade").innerHTML = idade;

   //remover o menu da direita
   var menuDireita = document.getElementsByClassName("md-sidebar__scrollwrap")[1];
   menuDireita.style.cssText = "display: none";
}

var itemMenuLateral = document.getElementsByClassName("md-nav__link");

for (var i = 0; i <= itemMenuLateral.length; i++) {
   if (itemMenuLateral[i] != undefined) {
      itemMenuLateral[i].addEventListener('mouseover', function () {
         this.style.cssText = "border-bottom-style: outset";
      });

      itemMenuLateral[i].addEventListener('mouseout', function () {
         this.style.cssText = "border: none";
      });
   }
}

//altera a cor do menu na página home
if(pathName == "/"){
   var c = document.getElementsByClassName("md-nav__link");
   for(var i=0;i<=c.length;i++){
      c.style.cssText="color: white !important";    
   }
  
}


