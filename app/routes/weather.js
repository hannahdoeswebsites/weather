import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
		return Ember.$.ajax('https://api.forecast.io/forecast/00d1f7903b5ff975462192ac10df5eaa/'+params.lat+','+params.lng,
			{dataType: 'jsonp'}).then(function(response) {
        console.log(response);
        return response;

			});
	}

});
