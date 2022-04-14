if(pathName == "/"){

   
    // var left_section_text = "Desenvolvedor Full Stack com foco em desenvolvimento de integrações API e Web";
    // left_section_text +="Development, possuindo mais de sete anos de experiência na área de desenvolvimento. ";
    // left_section_text +="Com competência no gerenciamento de todos os estágios do ciclo de desenvolvimento";
    // left_section_text +=", desde a coleta de requisitos e prototipação a implantação e manutenção,";
    // left_section_text +="realizando todos os testes necessários para garantir a funcionalidade do produto. ";
    // left_section_text +="Reconhecido por agilidade, raciocínio analítico e comunicação com as demais áreas e setores ";
    // left_section_text +="para garantir a qualidade do produto final.";
  

  
    var left_section = document.getElementsByClassName('md-sidebar__scrollwrap');
    var center_section_mobile = document.getElementById('perfil-mobile');

    left_section[1].innerHTML = "";
    
    var left_section_image = "./imagens/meuperfil.jpg";

    var left_section_image_css = "height: 300px;box-shadow: 17px 5px 29px 12px grey;border-radius:5px";

    var left_section_html  = "<div class='row custom-row-profile' >";
   
        left_section_html += "<div class='col'><img src='"+left_section_image+"'  style='"+left_section_image_css+"'/></div>";
        
        left_section_html += "</div>";

        left_section[1].innerHTML = left_section_html;

        center_section_mobile.innerHTML = left_section_html;


}