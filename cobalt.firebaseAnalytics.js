(function(cobalt) {
  var plugin = {
    name: 'CobaltFirebaseAnalyticsPlugin',
    classes: {
      ios: 'FirebaseAnalyticsPlugin',
      android: 'io.kristal.firebaseanalyticscobaltplugin.FirebaseAnalyticsPlugin'
    },
    init: function(settings) {
      cobalt.firebaseAnalytics = {
        logEvent: this.logEvent.bind(this)
      };
    },
    logEvent: function(eventName, eventParams) {
      if (eventName) {
        var data = {
          event: eventName,
          params: eventParams
        };
        cobalt.plugins.send(this, 'logEvent', data);
      } else {
        cobalt.log('no event name for firebaseAnalytics.logEvent')
      }

    },
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});
