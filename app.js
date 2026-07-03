const ids = ['g1', 'g2', 'g3', 'g4'];

ids.forEach((id) => {
    new Chart(document.getElementById(id).getContext('2d'), {
        type: 'bar',
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
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});



