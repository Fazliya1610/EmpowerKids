const ctx = document.getElementById('barchart').getContext('2d');
  const barchart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Topic-1', 'Topic-2', 'Topic-3', 'Topic-4', 'Topic-5', 'Topic-6'],
      datasets: [{
        label: '# of childrights',
        data: [1000, 1500, 2000, 2500, 3000, 3500],
        backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(255,159,64,0.2)'
        ],
        borderColor:[
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(255,159,64,0.2)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });