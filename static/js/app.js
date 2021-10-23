// Create Stacked Bar Graph

console.log(data);

var county_battery = []
var total_battery = []
var county_hydrogen = []
var total_hyrdogen = []
TECHNOLOGY = []

for(let index = 0; index < 146; index++){
    if (data["Technology"][index] == "battery") {
        county_battery.push(data["COUNTY"][index]);
        total_battery.push(data["Total"][index]);
    }
    else {
        county_hydrogen.push(data["COUNTY"][index]);
        total_hyrdogen.push(data["Total"][index]);
    }   
   
}

console.log(county_hydrogen)
console.log(total_hyrdogen)

var trace1 = {
    x: county_battery,
    y: total_battery,
    name: "Battery Charging Stations",
    type: "bar"
  };

var trace2 = {
    x: county_hydrogen,
    y: total_hyrdogen,
    name: "Hydrogen Fueling Stations",
    type: "bar"
}

var data = [trace1, trace2];

var layout = {barmode: 'stack'};

Plotly.newPlot("stackedBar", data, layout);

   

// Create Radial Chart with Apex Charts

 var options = {
    series: [74459, 119, 79],
    chart: {
    height: 390,
    type: 'radialBar',
    },
    plotOptions: {
    radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 240,
        hollow: {
        margin: 5,
        size: '25%',
        background: 'transparent',
        image: undefined,
        },
        dataLabels: {
        name: {
            show: false,
        },
        value: {
            show: false,
        }
        }
    }
    },
    colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
    labels: ['Battery Charging Stations', 'Planned Hydrogen Fueling Stations', 'Open Hydrogen Fueling Stations'],
    legend: {
    show: true,
    floating: true,
    fontSize: '10px',
    position: 'right',
    offsetX: 160,
    offsetY: 15,
    labels: {
        useSeriesColors: true,
    },
    markers: {
        size: 0
    },
    formatter: function(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
    },
    itemMargin: {
        vertical: 3
    }
    },
    responsive: [{
        breakpoint: 450,
        options: {
        legend: {
            show: false
        }
    }
    }]
    };
  
var chart = new ApexCharts(document.querySelector("#radialBar"), options)
chart.render();
        








