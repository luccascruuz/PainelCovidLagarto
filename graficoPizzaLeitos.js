google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Ocupação', 'Número'],
          ['Leitos Vagos', 0],
          ['Leitos Ocupados', 20],
        ]);

        var options = {
          title: 'Taxa de ocupação de Leitos em Lagarto',
          titleTextStyle: {
            color: 'white'
          },
          pieHole: 0.4,
          backgroundColor: '#000f1a',
          legend: {
            textStyle: {color:'white'}
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('graficoLeitos'));
        chart.draw(data, options);
      }