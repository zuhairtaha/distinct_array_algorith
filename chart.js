let ar1 = [];
let ar2 = [];


let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:            {text: ""},
    axisX:            {
        valueFormatString: ""
    },
    axisY:            {
        title:       "Time",
        includeZero: false,
        suffix:      ""
    },
    legend:           {
        cursor:    "pointer",
        fontSize:  16,
        itemclick: toggleDataSeries
    },
    toolTip:          {
        shared: true
    },
    data:             [{
        name:               "Algorithm (1)",
        type:               "spline",
        yValueFormatString: "",
        showInLegend:       true,
        dataPoints:         ar1
    },
        {
            name:               "Algorithm (2)",
            type:               "spline",
            yValueFormatString: "",
            showInLegend:       true,
            dataPoints:         ar2
        }
    ]
});
chart.render();

function toggleDataSeries(e) {
    e.dataSeries.visible = !(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible);
    chart.render();
}
/*
 {x: 5000, y: 53},
 {x: 10000, y: 164},
 {x: 20000, y: 643},
 {x: 30000, y: 1749},
 {x: 40000, y: 1683},
 {x: 50000, y: 2657},
 {x: 60000, y: 5710},
 */



