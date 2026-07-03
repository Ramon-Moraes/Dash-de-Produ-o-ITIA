const graficos = [
    'prodGeral',
    'destino',
    'borda',
    'esp',
    'aco',
    'peso'
];

graficos.forEach((id, indice) => {

    const tipoGrafico = indice % 2 === 0 ? 'bar' : 'pie';

    new Chart(document.getElementById(id), {
        type: tipoGrafico,

        data: {
            labels: [
                'Turno 1',
                'Turno 2',
                'Turno 3'
            ],

            datasets: [
                {
                    label: id,
                    data: [0, 0, 0]
                }
            ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });

});