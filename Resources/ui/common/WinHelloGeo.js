function GetGeoTab(){
	var helloWorldWin = Titanium.UI.createWindow();
	
	var geoLocationButton = Titanium.UI.createButton({
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
	
	var textLong = Titanium.UI.createLabel({
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
	    top:'20%',
	  left:'0%'
	});

	var textLat = Titanium.UI.createLabel({
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

	helloWorldWin.add(geoLocationButton);
	helloWorldWin.add(labellong);
	helloWorldWin.add(textLong);
	helloWorldWin.add(labellat);
	helloWorldWin.add(textLat);

	return helloWorldWin;
};

function geoButtonClick(foobar){
	
	if (Ti.Geolocation.locationServicesEnabled) 
	{
		Titanium.Geolocation.purpose = 'Get Current Location';
		Titanium.Geolocation.getCurrentPosition(function(e)
		{
			if (!e.success || e.error)
			{
				//textLong.text = 'error: ' + JSON.stringify(e.error);
				//Ti.API.info("Code translation: "+translateErrorCode(e.code));
				alert('error ' + JSON.stringify(e.error));
				alert(e.error);
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
  
 			alert(longitude);
                // we use the above data the way we need it
		});
	} 	
};
