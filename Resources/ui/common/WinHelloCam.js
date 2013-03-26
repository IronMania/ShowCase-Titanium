function GetCamTab(){
	var helloWorldWin = Titanium.UI.createWindow();
	
	var takePictureButton = Titanium.UI.createButton({
		title: 'Take Picture',
		width: '100%',
		height: '10%',
		top: '0%'
	});
	takePictureButton.addEventListener('click',function (event){
		Ti.Media.showCamera({
			success : function (e)
			{
				imageView.image = e.media;
			},
			
			cancel:function(){
    		},
		});
	});
		
	var imageView = Ti.UI.createImageView();
	
	helloWorldWin.add(takePictureButton);
	helloWorldWin.add(imageView);
	
	
	return helloWorldWin;
};