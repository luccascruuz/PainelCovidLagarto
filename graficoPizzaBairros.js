google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Bairro', 'Número de infectados'],
          ['Centro', 187],
          ['Povoado Colônia Treze', 99],
          ['Exposição', 35],
          ['Loiola', 32],
          ['Alto da Boa Vista', 25],
          ['Novo Horizonte', 25],
          ['Ademar de Carvalho', 23],
          ['Conjunto Laudelino Freire', 22],
          ['Libório', 20],
          ['Jardim Campo Novo', 19],
          ['Jenipapo', 17],
          ['Horta', 14],
          ['Pratas', 13],
          ['Brejo', 12],
          ['Outros', 88]
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