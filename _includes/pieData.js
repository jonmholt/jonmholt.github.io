{% raw %}
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
{% endraw %}