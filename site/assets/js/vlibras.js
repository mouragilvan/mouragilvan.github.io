
var vlibras = document.createElement("div");
vlibras.id="vlibras";
vlibras.innerHTML = `<div vw class="enabled">
<div vw-access-button class="active"></div>
<div vw-plugin-wrapper>
  <div class="vw-plugin-top-wrapper"></div>
</div>
</div>`;

document.body.appendChild(vlibras);

new window.VLibras.Widget('https://vlibras.gov.br/app');