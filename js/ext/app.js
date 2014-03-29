(function() 
{
	//TODO: put helpers and extensions and namespace somewher else? maybe in a pre-init?
 	//contents of old setDefaults
	String.prototype.capitalizeFirst = function()
	{
		return this.charAt(0).toUpperCase() + this.slice(1);
	} 
	
	Ext.QuickTips.init();
	
    Ext.Loader.setConfig(
    {
        enabled : true,
        paths   : 
        {
            Sam : 'js/ext'
        } 
    });
 	
	
	Ext.Ajax.defaultHeaders =
	{
		'Accept' : 'application/json',
		'Content-Type' : 'application/json'
	};
	Ext.Ajax.on('requestexception', function(o, e)
	{
		console.log(o);
		console.log(e);
		if (e.status && e.responseText)// these may not exist
		{
			Ext.Msg.alert('Error',e.responseText);
		}
		else//assume that database connection failed
		{
			Ext.Msg.alert('Error',"500 : Could not connect to database 'tracker'");
		}
	}); 

 
    Ext.onReady(function() 
    {
    	// 
    	 
    	 Ext.application(
    	 {
		   name: 'Sam',
		   appFolder:'js/ext',
		   launch: function() 
		   { 
       		 Ext.create('Sam.main.viewport',
       		 {
       		 	renderTo:Ext.getBody() //the entire window
       		 	,	listeners :
				{
				afterrender : function()
				{ 
					$("#main_loading").addClass('hidden');
					
					// Ext.Msg.alert('Status', 'Hello World!');
					 
					/*	amplify.subscribe("tab_click",function(o)
{
tabs.set(o.tab_name);
});


amplify.subscribe("show_form",function(o)
{
console.log(o.id);

Ext.create(o.id,
{
renderTo:'ctr_east'
});

}); */
				}
				
				}
       		 }); 
       
        
        
        //$("#main_loading").addClass('hidden');
        
		 }
		});
    	 
    	 
    });
})();