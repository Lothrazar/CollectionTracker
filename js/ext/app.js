(function() 
{
    Ext.Loader.setConfig(
    {
        enabled : true,
        paths   : 
        {
            Sam : 'js/ext'
        } 
    });
 
  //  Ext.require('MyApp.views.UserEditorWindow');
 
    Ext.onReady(function() 
    {
    	// 
    	 
    	 Ext.application(
    	 {
		   name: 'Sam',
		   appFolder:'js/ext',
		   launch: function() 
		   {
		 
		 	console.log('launched');
       		 Ext.create('Sam.main.viewport',
       		 {
       		 	renderTo:Ext.getBody() //the entire window
       		 }); 
        Ext.Msg.alert('Status', '<h1>Hello World!<\/h1>');
		 }
		});
    	 
    	 
    });
})();