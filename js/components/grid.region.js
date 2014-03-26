Ext.define('Sam.grid.region',
{
    extend:'Sam.grid'  
    ,constructor:function(config)
    {   
     
		 config.title = 'Regions';
        
         config.model= 'Sam.model.region'
         config.url= '/rest/region' 
           
         config.columns= [
            { text: 'id',  dataIndex: 'region_id' },
            { text: 'Name', dataIndex: 'region_name', flex: 1 } 
         ];
         config.height= 200;
         config.width= 400;
  
        this.callParent(arguments); 
     }//end of constructor
      
});//end of Ext.define
 

 