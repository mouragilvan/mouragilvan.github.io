const pathName = window.location.pathname;

//const env = require(["../env"]);

function insertAfter(newElement, referenceElement) {
   referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

// if(pathName === "/"){

// var img = document.createElement("img");
// img.src = "./imagens/meuperfil.jpg";
// img.style = "width:150px;height:200px;border-radius:2%";
// img.id = "user-picture";

// var el = document.querySelector(".md-sidebar--primary");

// insertAfter(img,el);

// }

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



//const env = require(["../env"]);

function insertAfter(newElement, referenceElement) {
   referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

// if(pathName === "/"){

// var img = document.createElement("img");
// img.src = "./imagens/meuperfil.jpg";
// img.style = "width:150px;height:200px;border-radius:2%";
// img.id = "user-picture";

// var el = document.querySelector(".md-sidebar--primary");

// insertAfter(img,el);

// }

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



