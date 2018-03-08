var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
    
	   var callbackFn = function(location) {
    //alert('[js] Posición en background:  ' + location.latitude + ',' + location.longitude);
document.getElementById("mensaje").text = ' Posición en gps85 :  ' + location.latitude + ',' + location.longitude;
    // Aquí incluímos lo que queramos hacer con la información, incluso enviarla
    // a un servidor si queremos.
    // jQuery.post(url, JSON.stringify(location));
 
    // Debemos informar que hemos terminado para que el sistema operativo
    // cierre ordenadamente nuestra aplicación
   // backgroundGeolocation.finish();
  };
 
  var failureFn = function(error) {
    alert('Error');
  };
 
  // Configuramos el plugin, indicando nuestra función callback y algunas opciones
  backgroundGeolocation.configure(callbackFn, failureFn, {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      interval: 3000
  });
 
  // Activamos la geolocalización en segundo plano
  backgroundGeolocation.start();
  
		
 		
		
    },


};

app.initialize();
