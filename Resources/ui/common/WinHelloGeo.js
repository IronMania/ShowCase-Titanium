	var textLong;
	var textLat;
	var textStatus;
	var geoLocationButton;
	var locating = false;

function GetGeoTab(){
	var helloWorldWin = Titanium.UI.createWindow();
	
	geoLocationButton = Titanium.UI.createButton({
		title: 'Start Locating',
		width: '100%',
		height: '10%',
		top: '0%'
	});
	
	var labellong = Titanium.UI.createLabel({
	  color:'#999',
	  text:'Longitude',
	  font:{fontSize:20},
	  textAlign:'left',
	  height: 'auto' ,
	  width: '20%',
	  top:'10%',
	  left:'0%'
	});
	
	textLong = Titanium.UI.createLabel({
	  color:'#999',
	  font:{fontSize:20},
	  textAlign:'left',
	  height: 'auto' ,
	  width: '80%',
	  top:'10%',
	  left:'20%'
	});
	
	var labellat = Titanium.UI.createLabel({
	  color:'#999',
	  text:'Latitude',
	  font:{fontSize:20},
	  textAlign:'left',
	  height: 'auto' ,
	  width: '20%',
	    top:'15%',
	  left:'0%'
	});

	textLat = Titanium.UI.createLabel({
	  color:'#999',
	  font:{fontSize:20},
	  textAlign:'left',
	  height: 'auto' ,
	  width: '80%',
      top:'15%',
  	  left:'20%'
	});

	var labelStatus = Titanium.UI.createLabel({
	  color:'#999',
	  text:'Status',
	  font:{fontSize:20},
	  textAlign:'left',
	  height: 'auto' ,
	  width: '20%',
	    top:'20%',
	  left:'0%'
	});

	textStatus = Titanium.UI.createLabel({
	  color:'#999',
	  font:{fontSize:20},
	  textAlign:'left',
	  height: 'auto' ,
	  width: '80%',
      top:'20%',
  	  left:'20%'
	});
	var gpsProvider = Ti.Geolocation.Android.createLocationProvider({
	   	name: Ti.Geolocation.PROVIDER_GPS,
	   	minUpdateTime: 60, 
    	minUpdateDistance: 100
	});
	
	Ti.Geolocation.Android.addLocationProvider(gpsProvider);
	Ti.Geolocation.preferredProvider = "gps";
	geoLocationButton.addEventListener('click',geoButtonClick);

	var gpsRule = Ti.Geolocation.Android.createLocationRule({
		provider:Ti.Geolocation.PROVIDER_GPS,
		accuracy:100,
		maxAge: 300000,
		minAge: 10000
	});

	Ti.Geolocation.Android.addLocationRule(gpsRule);
	
	helloWorldWin.add(geoLocationButton);
	helloWorldWin.add(labellong);
	helloWorldWin.add(textLong);
	helloWorldWin.add(labellat);
	helloWorldWin.add(textLat);
	helloWorldWin.add(labelStatus);
	helloWorldWin.add(textStatus);
	
	return helloWorldWin;
};

function geoButtonClick(foobar){
	
	// if (Ti.Geolocation.locationServicesEnabled) 
	// {
		if(!locating)
		{
		Titanium.Geolocation.purpose = 'Get Current Location';
		Titanium.Geolocation.addEventListener('location', LocationReceived);
		locating = true;
		geoLocationButton.title = 'Stop Locating';
		textStatus.text = 'aquireing Location';
	}else{
		locating = false;
		Titanium.Geolocation.removeEventListener('location', LocationReceived);
		geoLocationButton.title = 'Start Locating';
		textStatus.text = 'Stopped Service';
	}
		// Titanium.Geolocation.getCurrentPosition(function(e)
		// {
			// if (!e.success || e.error)
			// {
				// //textLong.text = 'error: ' + JSON.stringify(e.error);
				// //Ti.API.info("Code translation: "+translateErrorCode(e.code));
				// alert('error ' + JSON.stringify(e.error));
				// alert(e.error);
				// return;
			// }
// 	 
			// var longitude = e.coords.longitude;
			// var latitude = e.coords.latitude;
			// var altitude = e.coords.altitude;
			// var heading = e.coords.heading;
			// var accuracy = e.coords.accuracy;
			// var speed = e.coords.speed;
			// var timestamp = e.coords.timestamp;
			// var altitudeAccuracy = e.coords.altitudeAccuracy;
//   
 			// alert(longitude);
                // // we use the above data the way we need it
		// });
	// } 	
};

function LocationReceived(e){
	if (e.error)
				{
					alert('error ' + JSON.stringify(e.error));
					return;
				}
			var longitude = e.coords.longitude;
			var latitude = e.coords.latitude;
			var altitude = e.coords.altitude;
			var heading = e.coords.heading;
			var accuracy = e.coords.accuracy;
			var speed = e.coords.speed;
			var timestamp = e.coords.timestamp;
			var altitudeAccuracy = e.coords.altitudeAccuracy;	
			textLong.text = longitude;
			textLat.text = latitude;
					textStatus.text = 'found Location';
}
