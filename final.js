function st(m) {
    document.getElementById('status').textContent = 'Status: ' + m;
}

function exportarPDF() {
    st('Exportação PDF (estrutura)');
}

function exportarExcel() {
    st('Exportação Excel (estrutura)');
}

function exportarPNG() {
    st('Exportação PNG (estrutura)');
}

function atualizarDashboard() {
    st('Atualizando...');
    setTimeout(() => st('Atualizado com sucesso'), 1000);
}
