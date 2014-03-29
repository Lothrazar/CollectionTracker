Ext.define('Sam.base.grid',
{
    extend:'Ext.grid.Panel' 
    ,xtype:'sgrid'
    ,constructor:function(config)
    {   
        //base class for all my grids
        
        if(!config.style) config.style = {};
        /*
        if(!config.store )
        {
        	//then we assume a url and model was passed in
        	
        	config.store = Ext.create('Sam.Store', 
            {
                 model: config.model
                 ,url: config.url 
            });
        }*/
        //else the object creator passed in their own data store
         
        this.callParent(arguments); 
     }//end of constructor
     
     //override certain functions, then call the parent method
     ,initComponent: function() {  this.callParent(arguments); } 
});//end of Ext.define
 