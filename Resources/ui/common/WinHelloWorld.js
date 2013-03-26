function GetWorldTab(){
	var helloWorldWin = Titanium.UI.createWindow();
	
	
var label = Titanium.UI.createLabel({
  color:'#999',
  text:'Hello World',
  font:{fontSize:20},
  textAlign:'left',
  height: 'auto' 
});

var editBox = Titanium.UI.createTextField({
	editable: true,
	width :'70%'
	
});

var okBox = Titanium.UI.createButton({
	title: 'Say Hello'
});
okBox.addEventListener('click',function(e) { 
	label.text = "Hello " + editBox.value+ "!";
	 
});

var vview = Ti.UI.createView({
    backgroundColor:'transparent',
    top:0,
    left:0,
    width:'100%',
    height: 'auto' ,
    layout:'vertical',
    
});

var hview = Ti.UI.createView({
    backgroundColor:'transparent',
    top:0,
    left:0,
    width:'100%',
    height: '10%',
    layout:'horizontal'
});

okBox.addEventListener('click',function(e)
{
   label.text = "Hello " + editBox.value + "!";
});

hview.add(editBox);
hview.add(okBox);
vview.add(hview);
vview.add(label); // add label to window

helloWorldWin.add(vview);
	return helloWorldWin;
};