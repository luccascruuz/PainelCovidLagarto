google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);
    
    function drawBasic() {
    
          var data = new google.visualization.DataTable();
          data.addColumn('number', 'X');
          data.addColumn('number', 'Contaminados');
    
          data.addRows([
            [1, 1],
            [5, 2],
            [12, 7],
            [13, 8],
            [14, 11],
            [16, 13],
            [18, 13],
            [19, 17],
            [23, 18],
            [24, 25],
            [25, 25],
            [26, 27],
            [27, 29],
            [28, 29],
            [29, 31],
            [31, 32],
            [34, 95],
            [35, 99],
            [37, 110],
            [38, 118],
            [39, 118],
            [40, 126],
            [41, 127],
            [42, 133],
            [43, 138],
            [44, 146],
            [45, 148],
            [46, 161],
            [47, 161],
            [48, 167],
            [49, 167],
            [50, 178],
            [51, 191],
            [52, 195],
            [53, 200],
            [54, 210],
            [55, 217],
            [56, 242],
            [57, 248],
            [58, 272],
            [59, 285],
            [60, 300],
            [61, 305],
            [62, 340],
            [64, 354],
            [65, 377],
            [66, 380],
            [67, 393],
            [68, 414],
            [69, 432],
            [70, 456],
            [71, 467],
            [72, 489],
            [73, 524],
            [74, 526],
            [75, 559],
            [76, 565],
            [77, 568],
            [78, 631]
          ]);
    
          var options = {
            hAxis: {
              title: 'Dia',
              titleTextStyle: {
                color: 'white'
              }
            },
            vAxis: {
              title: 'Número de contaminados',
              titleTextStyle: {
                color: 'white'
              }
            },
            legend: {
                textStyle: {
                    color: 'white'
                }
            },
            
            chartArea: {
                backgroundColor: '#000f1a'
            },
            backgroundColor: '#000f1a',
            
            axes: {
              x: {
                0: {side: 'top'}
              }
            }
          };
    
          var chart = new google.visualization.LineChart(document.getElementById('graficoLinhaCasos'));
    
          chart.draw(data, options);
        }