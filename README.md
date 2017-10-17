[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://www.anychart.com)

jQuery Plugin for AnyChart.
=========

jQuery plugin for AnyChart provides an easy way to use [AnyChart JavaScript Charts](https://www.anychart.com) with jQuery library.

## Table of Contents

* [Download and Install](#download-and-install)
* [Quick Start](#quick-start)
* [Examples Overview](#examples-overview)
* [API Overview](#api-overview)
* [Contacts](#contacts)
* [Links](#links)
* [License](#license)

## Download and install

There are several ways to download/install AnyChart-jQuery.

#### Direct download

Binaries are located in [dist](https://github.com/AnyChart/AnyChart-jQuery/tree/master/dist) folder.

#### Package managers

You can install AnyChart-jQuery using **npm**, **bower** or **yarn**:

* `npm install anychart-jquery`
* `bower install anychart-jquery`
* `yarn add anychart-jquery`

## Quick start
Here is a basic sample that shows how to add a column chart:

```
<!doctype html>
<html>
<head>
    <!-- Add jQuery -->
    <script src="path/to/node_modules/jquery/dist/jquery.min.js"></script>
    <!-- Add anychart-bundle -->
    <script src="path/to/node_modules/anychart/dist/js/anychart-base.min.js"></script>
    <!-- Add AnyChart jQuery plugin -->
    <script src="js/anychart-jquery.min.js"></script>
</head>
<body>
<div id="container" style="width: 640px; height: 480px;"></div>
<script>
	// Render a column chart to a #container
	$('#container').anychart('column', [3, 1, 2]);
</script>
</body>
</html>
```

## API Overview
#### `$(selector).anychart();`
Returns an instance of a chart if it is rendered to a container. Returns `null` otherwise.

```
$(selector).anychart('line', [3, 1, 2]);
var chart = $(selector).anychart();
chart.background('red');
```

#### `$(selector).anychartStage();`
Returns an instance of a stage if it was rendered to a container. Returns `null` otherwise.

```
// e.g. create and setup chart1, chart2, chart3
$(selector).anychartStage(chart1, chart2, chart3);

var stage = $(selector).anychartStage();
stage.width(400);
```

#### `$(selector).anychart(type, var_args);`
Renders `type` chart to a container.

`type` can be any of AnyChart chart types or `stock`, `ganttProject`, `ganttResource`.

`var_args` are data that is passed to the chart constructor.

```
// create a line chart with 2 series
$(selector).anychart('line', [3, 1, 2], [5, 4, 3]);
```
Other use cases you can find in [AnyChart jQuery examples](https://github.com/AnyChart/AnyChart-jQuery/tree/master/examples) folder

#### `$(selector).anychart(type, geoData, var_args);`
Renders a map to a container.

`type` can be: `bubbleMap`, `choropleth`, `connector`, `markerMap`, `seatMap`

`geoData` can be a string or an object with geo data.

`var_args` are chart data.

```
// create a choropleth series on the australia map
$(selector).anychart('choropleth', 'anychart.maps.australia', data);
```

#### `$(selector).anychartStage(var_args);`
Renders preconfigured charts to a [stage](http://docs.anychart.com/latest/Graphics/Basics).

`var_args` are charts to be rendered to on a stage.

```
// create and setup chart1, chart2, chart3
// ....
// Render them to a stage.
$(selector).anychartStage(chart1, chart2, chart3);
```



## Examples Overview
See examples to learn how things work:

* **[async_data_load.html](https://github.com/anychart/anychart-jquery/blob/master/examples/async_data_load.html)**: Async data loading.
* **[choropleth_map.html](https://github.com/anychart/anychart-jquery/blob/master/examples/choropleth_map.html)**: Choropleth (colored) map.
* **[gantt.html](https://github.com/anychart/anychart-jquery/blob/master/examples/gantt.html)**: A gantt chart.
* **[multiple_charts.html](https://github.com/anychart/anychart-jquery/blob/master/examples/multiple_charts.html)**: Handling multiple charts.
* **[simple_chart_update.html](https://github.com/anychart/anychart-jquery/blob/master/examples/simple_chart_update.html)**: Simple chart which can be updated (switch type, change background).
* **[simple_dashboard.html](https://github.com/anychart/anychart-jquery/blob/master/examples/simple_dashboard.html)**: A simple dashboard.
* **[stock.html](https://github.com/anychart/anychart-jquery/blob/master/examples/stock.html)**: A stock chart.


## Contacts

* Web: [www.anychart.com](https://www.anychart.com)
* Email: [contact@anychart.com](mailto:contact@anychart.com)
* Twitter: [anychart](https://twitter.com/anychart)
* Facebook: [AnyCharts](https://www.facebook.com/AnyCharts)
* LinkedIn: [anychart](https://www.linkedin.com/company/anychart)

## Links

* [AnyChart Website](https://www.anychart.com)
* [Download AnyChart](https://www.anychart.com/download/)
* [AnyChart Licensing](https://www.anychart.com/buy/)
* [AnyChart Support](https://www.anychart.com/support/)
* [Report Issues](https://github.com/AnyChart/AnyChart-jQuery/issues)
* [AnyChart Playground](https://playground.anychart.com)
* [AnyChart Documentation](https://docs.anychart.com)
* [AnyChart API Reference](https://api.anychart.com)
* [AnyChart Sample Solutions](https://www.anychart.com/solutions/)
* [AnyChart Integrations](https://www.anychart.com/integrations/)

## License

AnyChart jQuery plugin sample includes two parts:
- code of the plugin sample that allows to use Javascript library (in this case, AnyChart) with jQuery Library. You can use, edit, modify it, use it with other Javascript libraries without any restrictions. It is released under [Apache 2.0 License](https://github.com/AnyChart/AnyChart-jQuery/blob/master/LICENSE)
- AnyChart JavaScript library. It is released under Commercial license. You can test this plugin with the trial version of AnyChart. Our trial version is not limited by time and doesn't contain any feature limitations. Check details [here](https://www.anychart.com/buy/)

If you have any questions regarding licensing - please contact us. <sales@anychart.com>
