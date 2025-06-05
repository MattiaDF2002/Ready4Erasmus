
document.addEventListener("DOMContentLoaded", () => {
  fetch('sedi.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('sedi-container');
      if (!container) return;
      container.innerHTML = '';
      data.forEach(sede => {
        const div = document.createElement('div');
        div.className = 'sede-card';
        div.innerHTML = `
          <h2>${sede.nome}</h2>
          <p><strong>Nazione:</strong> ${sede.nazione}</p>
          <p><strong>Città:</strong> ${sede.città}</p>
          <a href="sedi/${sede.nome.toLowerCase().replace(/\s+/g, '-')}.html">Vai alla pagina</a>
        `;
        container.appendChild(div);
      });
    });
});
