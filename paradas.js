// ETAPA 4 - Estrutura dos gráficos de paradas

const TURNOS = {
    NOITE: { inicio: 23, fim: 7 },
    MANHA: { inicio: 7, fim: 15 },
    TARDE: { inicio: 15, fim: 23 }
};

function identificarTurno(data) {
    const h = new Date(data).getHours();

    if (h >= TURNOS.NOITE.inicio || h < TURNOS.NOITE.fim)
       return 'Noite';
    if (h >= TURNOS.MANHA.inicio && h < TURNOS.MANHA.fim) 
        return 'Manhã';
    
    return 'Tarde'; // Identação corrigida para o escopo principal da função
}

function duracaoHoras(valor) {
    return typeof valor === 'number' ? valor * 24 : 0;
}

const graficosParadas = ['paradasTotal', 'natureza', 'tipoParada', 'prodHora'];
const instanciasGraficos = {}; // Armazena as instâncias para evitar erros de duplicidade

graficosParadas.forEach(id => {
    const canvas = document.getElementById(id);
    if (!canvas) return; // Segurança: evita erro caso o elemento não exista no HTML

    // Destrói o gráfico anterior se já existir um no mesmo canvas
    if (instanciasGraficos[id]) {
        instanciasGraficos[id].destroy();
    }

    // Cria e guarda a nova instância
    instanciasGraficos[id] = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: ['Noite', 'Manhã', 'Tarde'],
            datasets: [{
                label: id.charAt(0).toUpperCase() + id.slice(1), // Deixa a primeira letra maiúscula para o label
                data: [0, 0, 0],
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)'] // Cores para diferenciar
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
