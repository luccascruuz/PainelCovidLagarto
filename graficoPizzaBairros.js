google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Bairro', 'Número de infectados'],
          ['Centro', 166],
          ['Povoado Colônia Treze', 94],
          ['Exposição', 29],
          ['Loiola', 29],
          ['Alto da Boa Vista', 21],
          ['Ademar de Carvalho', 21],
          ['Conjunto Laudelino Freire', 20],
          ['Novo Horizonte', 21],
          ['Jardim Campo Novo', 17],
          ['Libório', 17],
          ['Jenipapo', 15],
          ['Pratas', 12],
          ['Brejo', 12],
          ['Horta', 11],
          ['Outros', 83]
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