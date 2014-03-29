Ext.define('grids.game',
{
    extend:'Sam.grid'  
    ,constructor:function(config)
    {   
     
		 config.title = 'Games';
        
         config.model = 'Sam.model.game'
         config.url =  '/rest/game' 
         var btn_handler = function()
	     { 
	    	amplify.publish(this.name);
	     }
         config.columns = 
         [
             { text: 'id',  dataIndex: 'region_id' }
            ,{ text: 'Region', dataIndex: 'region_name', flex: 1 } 
            ,{ text: 'Company', dataIndex: 'company_name', flex: 1 } 
            ,{ text: 'Platform', dataIndex: 'platform_name', flex: 1 } 
            ,{ text: 'Released', dataIndex: 'release_date', flex: 1 } 
         ];
          
         //config.height= 200;
         config.width = 400;
   
  		config.dockedItems =  
  		[{
		    xtype: 'toolbar',
		    dock: 'top',
		    items: 
		    [
			    '->'
			    ,{
			        xtype: 'sbutton',
			        text: '',
			        ico:'add',
			        name:"create_game",
			        handler:btn_handler
			    }
		    ]
		}];
  
        this.callParent(arguments); 
     }//end of constructor
      
});//end of Ext.define
 