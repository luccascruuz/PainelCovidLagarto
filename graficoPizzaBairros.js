google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Bairro', 'Número de infectados'],
          ['Centro', 132],
          ['Povoado Colônia Treze', 78],
          ['Loiola', 23],
          ['Exposição', 22],
          ['Alto da Boa Vista', 18],
          ['Conjunto Laudelino Freire', 16],
          ['Ademar de Carvalho', 16],
          ['Jardim Campo Novo', 15],
          ['Jenipapo', 14],
          ['Novo Horizonte', 14],
          ['Libório', 13],
          ['Horta', 10],
          ['Brejo', 10],
          ['Pratas', 10],
          ['Outros', 68]
        ]);

        var options = {
          title: 'Número de infectados por Bairro',
          titleTextStyle: {
            color: 'white'
          },
          is3D: true,
          backgroundColor: '#000f1a',
          legend: {
            textStyle: {color:'white'}
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('graficoBairros'));
        chart.draw(data, options);
      }