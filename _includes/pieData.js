{% raw %}
<script>
var pieData = [
    {
        value: 62800.00,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "NRCB"
    },
    {
        value: 18651.43,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "CUCA"
    },
    {
        value: 20340.00,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "AUMA"
    },
    {
        value: 4944.00,
        color: "#5CB4FD",
        highlight: "#FFC870",
        label: "DHR"
    },
    {
        value: 41128.40,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Servus"
    },
    {
        value: 11846.55,
        color: "#4D5360",
        highlight: "#616774",
        label: "EPSB"
    },
    {
        value: 5700.00,
        color: "#efefef",
        highlight: "#616774",
        label: "Premium Rentals"
    }
];
var postData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Blog posts",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [1, 0, 0, 0, 13, 20, 17, 16, 10, 0, 0, 0]
        }
    ]
};
var barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
        {
            label: "Servus",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [15, 7, 16, 48, 60, 7, 0, 4, 32, 15, 8, 15]
        },
        {
            label: "CUCA",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [0, 18, 0, 24, 18, 96, 0, 0, 28, 19, 72, 24]
        },
        {
            label: "AUMA",
            fillColor: "rgba(240,73,73,0.5)",
            strokeColor: "rgba(240,73,73,0.8)",
            highlightFill: "rgba(240,73,73,0.75)",
            highlightStroke: "rgba(240,73,73,1)",
            data: [90, 79.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        },
        {
            label: "NRCB",
            fillColor: "rgba(205,73,187,0.5)",
            strokeColor: "rgba(205,73,187,0.8)",
            highlightFill: "rgba(205,73,187,0.75)",
            highlightStroke: "rgba(205,73,187,1)",
            data: [54, 49, 60, 63, 60.5, 40, 62, 50, 50, 59.5, 40, 52.5]
        },
        {
            label: "Premium Rentals",
            fillColor: "rgba(187,220,151,0.5)",
            strokeColor: "rgba(187,220,151,0.8)",
            highlightFill: "rgba(187,220,151,0.75)",
            highlightStroke: "rgba(187,220,151,1)",
            data: [0, 0, 27, 10.5, 2.5, 5.5, 4, 4, 4, 0, 0, 1.5]
        },
        {
            label: "DHR",
            fillColor: "rgba(40,40,40,0.5)",
            strokeColor: "rgba(40,40,40,0.8)",
            highlightFill: "rgba(40,40,40,0.75)",
            highlightStroke: "rgba(40,40,40,1)",
            data: [15, 15, 15, 15, 15, 15, 45, 0, 45, 45, 45, 45]
        }
    ]
};

window.onload = function () {
    var posts = document.getElementById("posts-area").getContext("2d");
    window.postsChart = new Chart(posts)
    window.postsChart.Bar(postData);
    var income = document.getElementById("income-area").getContext("2d");
    window.incomeChart = new Chart(income)
    window.incomeChart.PolarArea(pieData, {
        scaleShowLabels: true,
        scaleShowLabelBackdrop: false,
        scaleLabel: "<%=value/1000%>K",
        tooltipTemplate: "<%if (label){%><%=label%><%}%>"
    });
    var hours = document.getElementById("hours-area").getContext("2d");
    window.hoursChart = new Chart(hours).StackedBar(barChartData, {
        multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>"
    });
};

//Stacked bar chart
(function () {
            "use strict";

        var root = this,
        Chart = root.Chart,
        helpers = Chart.helpers;

    var defaultConfig = {
            scaleBeginAtZero: true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - If there is a stroke on each bar
        barShowStroke: true,

        //Number - Pixel width of the bar stroke
        barStrokeWidth: 2,

        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,

        //Boolean - Whether bars should be rendered on a percentage base
        relativeBars: false,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul > "

    };

Chart.Type.extend({
    name: "StackedBar",
    defaults: defaultConfig,
    initialize: function (data) {
        //Expose options as a scope variable here so we can access it in the ScaleClass
        var options = this.options;

        this.ScaleClass = Chart.Scale.extend({
            offsetGridLines: true,
            calculateBarX: function (barIndex) {
                return this.calculateX(barIndex);
            },
            calculateBarY: function (datasets, dsIndex, barIndex, value) {
                var offset = 0,
                    sum = 0;

                for (var i = 0; i < datasets.length; i++) {
                    sum += datasets[i].bars[barIndex].value;
                }
                for (i = dsIndex; i < datasets.length; i++) {
                    if (i === dsIndex && value) {
                        offset += value;
                    } else {
                        offset += datasets[i].bars[barIndex].value;
                    }
                }

                if (options.relativeBars) {
                    offset = offset / sum * 100;
                }

                return this.calculateY(offset);
            },
            calculateBaseWidth: function () {
                return (this.calculateX(1) - this.calculateX(0)) - (2 * options.barValueSpacing);
            },
            calculateBaseHeight: function () {
                return (this.calculateY(1) - this.calculateY(0));
            },
            calculateBarWidth: function (datasetCount) {
                //The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
                return this.calculateBaseWidth();
            },
            calculateBarHeight: function (datasets, dsIndex, barIndex, value) {
                var sum = 0;

                for (var i = 0; i < datasets.length; i++) {
                    sum += datasets[i].bars[barIndex].value;
                }

                if (!value) {
                    value = datasets[dsIndex].bars[barIndex].value;
                }

                if (options.relativeBars) {
                    value = value / sum * 100;
                }

                return this.calculateY(value);
            }
        });

        this.datasets = [];

        //Set up tooltip events on the chart
        if (this.options.showTooltips) {
            helpers.bindEvents(this, this.options.tooltipEvents, function (evt) {
                var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

                this.eachBars(function (bar) {
                    bar.restore(['fillColor', 'strokeColor']);
                });
                helpers.each(activeBars, function (activeBar) {
                    activeBar.fillColor = activeBar.highlightFill;
                    activeBar.strokeColor = activeBar.highlightStroke;
                });
                this.showTooltip(activeBars);
            });
        }

        //Declare the extension of the default point, to cater for the options passed in to the constructor
        this.BarClass = Chart.Rectangle.extend({
            strokeWidth: this.options.barStrokeWidth,
            showStroke: this.options.barShowStroke,
            ctx: this.chart.ctx
        });

        //Iterate through each of the datasets, and build this into a property of the chart
        helpers.each(data.datasets, function (dataset, datasetIndex) {

            var datasetObject = {
                label: dataset.label || null,
                fillColor: dataset.fillColor,
                strokeColor: dataset.strokeColor,
                bars: []
            };

            this.datasets.push(datasetObject);

            helpers.each(dataset.data, function (dataPoint, index) {
                if (helpers.isNumber(dataPoint)) {
                    //Add a new point for each piece of data, passing any required data to draw.
                    datasetObject.bars.push(new this.BarClass({
                        value: dataPoint,
                        label: data.labels[index],
                        datasetLabel: dataset.label,
                        strokeColor: dataset.strokeColor,
                        fillColor: dataset.fillColor,
                        highlightFill: dataset.highlightFill || dataset.fillColor,
                        highlightStroke: dataset.highlightStroke || dataset.strokeColor
                    }));
                }
            }, this);

        }, this);

        this.buildScale(data.labels);

        this.eachBars(function (bar, index, datasetIndex) {
            helpers.extend(bar, {
                base: this.scale.endPoint,
                height: 0,
                width: this.scale.calculateBarWidth(this.datasets.length),
                x: this.scale.calculateBarX(index),
                y: this.scale.endPoint
            });
            bar.save();
        }, this);

        this.render();
    },
    update: function () {
        this.scale.update();
        // Reset any highlight colours before updating.
        helpers.each(this.activeElements, function (activeElement) {
            activeElement.restore(['fillColor', 'strokeColor']);
        });

        this.eachBars(function (bar) {
            bar.save();
        });
        this.render();
    },
    eachBars: function (callback) {
        helpers.each(this.datasets, function (dataset, datasetIndex) {
            helpers.each(dataset.bars, callback, this, datasetIndex);
        }, this);
    },
    getBarsAtEvent: function (e) {
        var barsArray = [],
            eventPosition = helpers.getRelativePosition(e),
            datasetIterator = function (dataset) {
                barsArray.push(dataset.bars[barIndex]);
            },
            barIndex;

        for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++) {
            for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++) {
                if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x, eventPosition.y)) {
                    helpers.each(this.datasets, datasetIterator);
                    return barsArray;
                }
            }
        }

        return barsArray;
    },
    buildScale: function (labels) {
        var self = this;

        var dataTotal = function () {
            var values = [];
            helpers.each(self.datasets, function (dataset) {
                helpers.each(dataset.bars, function (bar, barIndex) {
                    if (!values[barIndex]) values[barIndex] = 0;
                    if (self.options.relativeBars) {
                        values[barIndex] = 100;
                    } else {
                        values[barIndex] += bar.value;
                    }
                });
            });
            return values;
        };

        var scaleOptions = {
            templateString: this.options.scaleLabel,
            height: this.chart.height,
            width: this.chart.width,
            ctx: this.chart.ctx,
            textColor: this.options.scaleFontColor,
            fontSize: this.options.scaleFontSize,
            fontStyle: this.options.scaleFontStyle,
            fontFamily: this.options.scaleFontFamily,
            valuesCount: labels.length,
            beginAtZero: this.options.scaleBeginAtZero,
            integersOnly: this.options.scaleIntegersOnly,
            calculateYRange: function (currentHeight) {
                var updatedRanges = helpers.calculateScaleRange(
                    dataTotal(),
                    currentHeight,
                    this.fontSize,
                    this.beginAtZero,
                    this.integersOnly
                );
                helpers.extend(this, updatedRanges);
            },
            xLabels: this.options.xLabels || labels,
            font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
            lineWidth: this.options.scaleLineWidth,
            lineColor: this.options.scaleLineColor,
            gridLineWidth: (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
            gridLineColor: (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
            padding: (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
            showLabels: this.options.scaleShowLabels,
            display: this.options.showScale
        };

        if (this.options.scaleOverride) {
            helpers.extend(scaleOptions, {
                calculateYRange: helpers.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
            });
        }

        this.scale = new this.ScaleClass(scaleOptions);
    },
    addData: function (valuesArray, label) {
        //Map the values array for each of the datasets
        helpers.each(valuesArray, function (value, datasetIndex) {
            if (helpers.isNumber(value)) {
                //Add a new point for each piece of data, passing any required data to draw.
                this.datasets[datasetIndex].bars.push(new this.BarClass({
                    value: value,
                    label: label,
                    x: this.scale.calculateBarX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[datasetIndex].strokeColor,
                    fillColor: this.datasets[datasetIndex].fillColor
                }));
            }
        }, this);

        this.scale.addXLabel(label);
        //Then re-render the chart.
        this.update();
    },
    removeData: function () {
        this.scale.removeXLabel();
        //Then re-render the chart.
        helpers.each(this.datasets, function (dataset) {
            dataset.bars.shift();
        }, this);
        this.update();
    },
    reflow: function () {
        helpers.extend(this.BarClass.prototype, {
            y: this.scale.endPoint,
            base: this.scale.endPoint
        });
        var newScaleProps = helpers.extend({
            height: this.chart.height,
            width: this.chart.width
        });
        this.scale.update(newScaleProps);
    },
    draw: function (ease) {
        var easingDecimal = ease || 1;
        this.clear();

        var ctx = this.chart.ctx;

        this.scale.draw(easingDecimal);

        //Draw all the bars for each dataset
        helpers.each(this.datasets, function (dataset, datasetIndex) {
            helpers.each(dataset.bars, function (bar, index) {
                var y = this.scale.calculateBarY(this.datasets, datasetIndex, index, bar.value),
                    height = this.scale.calculateBarHeight(this.datasets, datasetIndex, index, bar.value);

                //Transition then draw
                bar.transition({
                    base: this.scale.endPoint - (Math.abs(height) - Math.abs(y)),
                    x: this.scale.calculateBarX(index),
                    y: Math.abs(y),
                    height: Math.abs(height),
                    width: this.scale.calculateBarWidth(this.datasets.length)
                }, easingDecimal).draw();
            }, this);
        }, this);
    }
});
}).call(this);  
</script>
{% endraw %}