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
   			alert('create game');
   		});
    }  
    
    
    
    
    
};