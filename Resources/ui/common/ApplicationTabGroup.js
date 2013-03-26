function ApplicationTabGroup(Window) {
	Ti.include('WinHelloWorld.js');
	Ti.include('WinHelloGeo.js');
	Ti.include('WinHelloCam.js');
	//create module instance
	var self = Ti.UI.createTabGroup();
	

	var helloWorldWin = GetWorldTab();
	var helloGeoWin = GetGeoTab();
	var helloCamWin = GetCamTab();
	
	//var helloWorldWin = Titanium.UI.createWindow();
	//var helloGeoWin = Titanium.UI.createWindow();
	//var helloCamWin = Titanium.UI.createWindow();
	
	//hello World Tab
	var worldTab = Ti.UI.createTab({
		title: 'World',
		icon: '/images/KS_nav_ui.png',
		window: helloWorldWin
	});
	helloWorldWin.containingTab = worldTab;
	
	//helloGeo Tab
	var geoTab = Ti.UI.createTab({
		title: 'Geo',
		icon: '/images/KS_nav_views.png',
		window: helloGeoWin
	});
	helloGeoWin.containingTab = geoTab;
	
	//HelloCam Tab
		var camTab = Ti.UI.createTab({
		title: 'Cam',
		icon: '/images/KS_nav_views.png',
		window: helloCamWin
	});
	helloCamWin.containingTab = camTab;
	
	self.addTab(worldTab);
	self.addTab(geoTab);
	self.addTab(camTab);
	
	return self;
};

module.exports = ApplicationTabGroup;
