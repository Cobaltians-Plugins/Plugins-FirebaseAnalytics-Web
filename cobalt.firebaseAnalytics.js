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
        cobalt.plugins.send(this, 'logEvent', {
          event: eventName,
          params: eventParams
        });
      }

    },
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});
