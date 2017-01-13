(function($, anychart) {

  /**
   * Instances map.
   * Contains array of HTMLElement and chart instance by unique identifier.
   * @type {Object.<string, Array.<HTMLElement, Object>>}
   */
  var instances = {};

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
   * Dispose chart instance by uid.
   * @param {number|string} uid Uid.
   */
  var removeInstanceByUid = function(uid) {
    if (uid) {
      instances[uid][1].dispose();
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
  var mapTypes = ['bubbleMap', 'choropleth', 'connector', 'markerMap' ,'seatMap'];
  var isMapType = function(type) {
    return mapTypes.indexOf(type) != -1;
  };

  /**
   * ------------------------------------------------------------------------
   * AnyChart jQuery plugin
   * ------------------------------------------------------------------------
   */
  $.fn.anychart = function(var_args) {
    var chart;

    if (arguments.length) {
      var type = arguments[0];
      var geoData = arguments[1];
      var args;
      var isMap = isMapType(type);
      args = Array.prototype.slice.call(arguments, isMap ? 2 : 1);

      return this.each(function() {
        var id;
        if (id = getInstanceUid(/** @type {HTMLElement} */ (this)))
          removeInstanceByUid(id);

        chart = anychart[type].apply(null, args);
        if (isMap)
          chart.geoData(geoData);
        chart.container(this);
        chart.draw();

        instances[uid++] = [this, chart];
      });

    } else {
      return getInstanceByElem(this[0]);
    }
  };

})(jQuery, anychart);