var win = Ti.UI.createWindow();
win.open();

var ti_amplify = require('ti.amplify');
win.addEventListener("open", function(){
	ti_amplify.initialize();
	ti_amplify.log({
		eventName: "customEvent",
		propertyName: "property",
		propertyValue: "value"
	});
})
