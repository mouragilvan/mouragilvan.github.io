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

if(pathName == "/pdf/"){
    window.print();
}

function fechar(){
    window.location.href="/"
}


if (window.matchMedia) {
   var mediaQueryList = window.matchMedia('print');
   
   mediaQueryList.addListener(function(mql) {
      if (!mql.matches) {
        window.location.href="/"
      } 
  });
}

/**** LINK PARA WHATSAPP ***/
var _tag = document.createElement("a");
// var _text = document.createTextNode("This is link");
// _tag.appendChild(_text);
_tag.href="https://wa.me/5561982449780"; 
_tag.target="_blank";
_tag.className = "whatsapp";
_tag.title= "FALE COMIGO PELO WHATSAPP";
 document.body.appendChild(_tag); 