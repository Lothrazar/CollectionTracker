game = 
{
    init:function()
    {
         
        Ext.create('Sam.grid.game',
		{
    		renderTo: 'grid'
   		});
   		
   		
   		
   		amplify.subscribe("create_game",function()
   		{
   			amplify.publish("show_form",{id:'Sam.form.game'});
   		});
    }  
    
    
    
    
    
};