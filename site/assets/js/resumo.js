if (pathName == "/") {


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

  var left_section_image = "./imagens/imagem_perfil.png";

  var left_section_image_css = "height: 250px;border-radius:4px";

  const width = '70px';

  var left_section_html = `<div class='custom-row-profile' style='background:none;'>
                               <img src='${left_section_image}' style='${left_section_image_css}'/>
                             </div>
                             <div class='certificacoes'>    
                                <div style="text-align:center">
                                <img src='https://www.zend.com//sites/default/files/image/2019-09/zce-2017-php-155x155_0.png' 
                                width='${width}' title='Zend Certified Enginer' style='border-radius:5px;cursor: pointer' onclick="window.open('Gilvan Moraes De Moura.pdf')"/>                                                                
                                <img src='./imagens/sfc.png' width='${width}' style="cursor: pointer" 
                                onClick="javascript:window.open('https://www.scrumstudy.com/certification/verify?type=SFC&number=606550','_blank')"/>                                 
                                <img src='./imagens/yellow.png' width='${width}' style="cursor: pointer;" 
                                onClick="javascript:window.open('http://81cd1176253f3f59d435-ac22991740ab4ff17e21daf2ed577041.r77.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-GilvanMoraesDeMoura-588621.pdf','_blank')"/>
                               </div>

                             </div>                            
                            `;

  left_section[1].innerHTML = left_section_html;

  center_section_mobile.innerHTML = left_section_html;


}