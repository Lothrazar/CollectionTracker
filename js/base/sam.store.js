Ext.define('Sam.Store',
{
   extend: 'Ext.data.Store'
   ,xtype:'sstore'
   ,initComponent: function() {  this.callParent(arguments); }
   ,beforeRender:function() { this.callParent();}
   ,afterRender:function(){  this.callParent(); }
   ,constructor:function(config)
   { 
        config.proxy = 
        {
             type: 'ajax',
             url: config.url, //pass in to create url
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
 
 