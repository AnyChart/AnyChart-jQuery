(function($, anychart) {

  /**
   * Instances map.
   * Contains array of HTMLElement and chart instance by unique identifier or stage and its charts.
   * @type {Object.<string, Array.<HTMLElement, Object, Array>>}
   */
  var instances = {};

  /**
   * Global stage instance.
   * @type {Object}
   */
  var stage = null;

  /**
   * Unique identifier.
   * @type {number}
   */
  var uid = 0;

  /**
   * Get instance uid by HTMLElement.
   * @param {HTMLElement} element Element.
   * @return {?string} Uid or null if element is not a chart container.
   */
  var getInstanceUid = function(element) {
    for (var key in instances) {
      if (instances.hasOwnProperty(key)) {
        var instance = instances[key];
        if (instance[0] === element)
          return key;
      }
    }
    return null;
  };

  /**
   * Returns charts by uid.
   * @param {number} uid
   * @return {Array.<Object>}
   */
  var getChartsByUid = function(uid) {
    if (uid) {
      return instances[uid][2];
    } else {
      return [];
    }
  };

  /**
   * Returns chart instance by uid.
   * @param {string|number} uid Uid.
   * @return {?Object}
   */
  var getInstanceByUid = function(uid) {
    if (uid) {
      return instances[uid][1];
    } else
      return null;
  };

  /**
   * Checker for stage instance.
   * @param {Object} instance Instance to check.
   * @return {boolean} Stage or not.
   */
  var isStage = function(instance) {
    return (instance && typeof instance.draw != 'function');
  };

  /**
   * Dispose chart instance by uid.
   * @param {number|string} uid Uid.
   */
  var removeInstanceByUid = function(uid) {
    if (uid) {
      var instance = instances[uid][1];
      if (isStage(instance)) {
        var charts = instances[uid][2];
        for (var i = 0; i < charts.length; i++)
          charts[i].container(null);
        instance.container(null);
      } else {
        instances[uid][1].dispose();
      }
      delete instances[uid];
    }
  };

  /**
   * Returns chart instance by element.
   * @param {HTMLElement} element
   * @return {?Object} Chart instance or null if element is not a chart container.
   */
  var getInstanceByElem = function(element) {
    return getInstanceByUid(getInstanceUid(element));
  };

  /**
   * Types representing maps.
   * @type {Array.<string>}
   */
  var mapTypes = ['bubbleMap', 'choropleth', 'connector', 'markerMap', 'seatMap'];
  var isMapType = function(type) {
    return mapTypes.indexOf(type) != -1;
  };

  /**
   * Types representing gantt charts.
   * @type {Array.<string>}
   */
  var ganttTypes = ['ganttProject', 'ganttResource'];
  var isGanttType = function(type) {
    return ganttTypes.indexOf(type) != -1;
  };

  var id;

  /**
   * ------------------------------------------------------------------------
   * AnyChart jQuery plugin
   * ------------------------------------------------------------------------
   */

  /**
   * Working with anychart, anymap, anygantt, anystock
   */
  $.fn.anychart = function(var_args) {
    var chart;

    if (arguments.length) {
      var type = arguments[0];
      var geoOrGanttData = arguments[1];
      var args;
      var isMap = isMapType(type);
      var isGantt = isGanttType(type);
      args = Array.prototype.slice.call(arguments, isMap ? 2 : 1);

      return this.each(function() {
        if (id = getInstanceUid(/** @type {HTMLElement} */ (this)))
          removeInstanceByUid(id);

        chart = anychart[type].apply(null, args);
        if (isMap)
          chart.geoData(geoOrGanttData);
        else if (isGantt)
          chart.data(geoOrGanttData);
        chart.container(this);
        chart.draw();

        instances[uid++] = [this, chart];
      });

    } else {
      return getInstanceByElem(this[0]);
    }
  };

  /**
   * Working with stage.
   * @param {...Object} var_args charts.
   */
  $.fn.anychartStage = function(var_args) {
    if (arguments.length) {
      var i;
      var charts;
      var newCharts = Array.prototype.slice.call(arguments, 0);

      if (id = getInstanceUid(/** @type {HTMLElement} */ (this[0]))) {
        if (isStage(getInstanceByUid(id))) {
          charts = getChartsByUid(id);
          stage.suspend();
          for (i = 0; i < charts.length; i++) {
            if (newCharts.indexOf(charts[i]) == -1)
              charts[i].container(null);
          }
          for (i = 0; i < newCharts.length; i++) {
            newCharts[i].container(stage).draw();
          }
          stage.resume();
          instances[id][2] = newCharts;
        } else {
          removeInstanceByUid(id);
          stage.suspend();
          stage.container(this[0]);
          for (i = 0; i < newCharts.length; i++) {
            newCharts[i].container(stage).draw();
          }
          stage.resume();
          instances[uid++] = [this[0], stage, newCharts];
        }

      } else {
        stage = stage || anychart.graphics.create(this[0]);
        stage.suspend();
        for (i = 0; i < newCharts.length; i++) {
          newCharts[i].container(stage).draw();
        }
        stage.resume();

        instances[uid++] = [this[0], stage, newCharts];
      }
    } else {
      var instance = getInstanceByElem(this[0]);
      return isStage(instance) ? instance : null;
    }
  }

})(jQuery, anychart);