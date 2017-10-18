(function(cobalt){
    var plugin = {
        'name': 'firebaseAnalytics',
        init: function (settings) {
            // Create shortcuts
            cobalt.firebaseAnalytics={
                logEvent: this.logEvent.bind(this)
            };

            if (settings) {
                this.config(settings);
            }
        },

        config: function(settings){},

        logEvent:function(eventName, eventParams){
			if (eventName) {
				var data = {
					event: eventName,
					params: eventParams
				};
				this.send('logEvent', data);
			} else {
				cobalt.log('no event name for firebaseAnalytics.logEvent')
			}
			
        },
        handleEvent:function(json){
            cobalt.log(this.name, ' plugin : unknown event received :', json)
        },

        send:function(action, data, callback){
            cobalt.send({ type : "plugin", name : this.name, action : action, data : data }, callback);
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});
