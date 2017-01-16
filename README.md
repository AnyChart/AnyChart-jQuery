[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](http://www.anychart.com)

AnyChart-jQuery Plugin
=========

A jQuery plugin for AnyChart.

## Table of Contents

* [Download and Install](#download-and-install)
* [Quick Start](#quick-start)
* [Contacts](#contacts)
* [Links](#links)
* [License](#license)

## Download and install

There are several ways to download/install AnyChart-jQuery.

#### Direct download

Binaries are located in [dist](https://github.com/AnyChart/AnyChart-jQuery/tree/master/dist) folder.

#### Package managers

You can install AnyChart-React using **npm**, **bower** or **yarn**:

* `npm install anychart-jquery`
* `bower install anychart-jquery`
* `yarn add anychart-jquery`

## Quick start
To create a line chart just call `anychart('line', data)` on selected element.

For example:
`$('#chart-container').anychart('line', [3, 1, 2])`

In terms of AnyChart it'll be equivalent to:

```
anychart.line(data).container('chart-container').draw()
```

If you want to obtain an instance of chart call `anychart()` without params.

```
var chart = $('#chart-container').anychart();
chart.background('red');
```

Please see `examples` folder for other common use cases.

## Contacts

* Web: [www.anychart.com](www.anychart.com)
* Email: [contact@anychart.com](mailto:contact@anychart.com)
* Twitter: [anychart](https://twitter.com/anychart)
* Facebook: [AnyCharts](https://www.facebook.com/AnyCharts)
* LinkedIn: [anychart](https://www.linkedin.com/company/anychart)

## Links

* [AnyChart Website](http://www.anychart.com)
* [Download AnyChart](http://www.anychart.com/download/)
* [AnyChart Licensing](http://www.anychart.com/buy/)
* [AnyChart Support](http://www.anychart.com/support/)
* [Report Issues](http://github.com/AnyChart/anychart/issues)
* [AnyChart Playground](http://playground.anychart.com)
* [AnyChart Documentation](http://docs.anychart.com)
* [AnyChart API Reference](http://api.anychart.com)
* [AnyChart Sample Solutions](http://www.anychart.com/solutions/)
* [AnyChart Integrations](http://www.anychart.com/integrations/)

## License

[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/ruby-sinatra-mysql-template/blob/master/LICENSE).