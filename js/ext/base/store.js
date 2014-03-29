Ext.define('Sam.base.Store',
{
   extend: 'Ext.data.Store'
   ,xtype:'sstore'
   ,singleton : true
   ,initComponent: function() {  this.callParent(arguments); }
  
   ,constructor:function(config)
   {  
        config.proxy = 
        {
             type: 'ajax',
             url: config.url, //pass in to create url
             //disable the extra arguments, such as  //?_dc=1396027541916&page=1&start=0&limit=25
             limitParam: undefined, // disable &limit=25
			 pageParam: undefined,//disable &page=1
			 startParam: undefined,//disable &start=0
			 noCache: false, //disable ?_dc=139602754...
             reader: 
             {
                  type: 'json'
                 ,root: 'rows' 
             }
        };
        
        config.autoLoad = true;
        
        // if config.model is not set, do what?
        
        //config.fields should be like fields:['region_id', 'region_name'],
        
        this.callParent(arguments);//base class
   }
});
 
 