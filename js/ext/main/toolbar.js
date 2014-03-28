Ext.define('Sam.main.toolbar',
{
    extend:'Ext.toolbar.Toolbar' 
    ,xtype:'main.toolbar'
    
    
    ,constructor:function(config)
    {  
		if(typeof config == 'undefined') {config = {}; }
    	//handler goes here instead of above in the scope so it is private
        var _handler = function()
	    {
	    	amplify.publish("tab_click",{tab_name: this.name});
	    }
        config.items = [];
        config.items.push(
        {
            xtype: 'sbutton',  
            text: 'Collection', 
            name:"collection",
            height:40,
            handler : _handler
        });
        config.items.push(
        {
            xtype: 'buttongroup',
            title: 'Data',
            columns: 2,
            defaults: { scale: 'small'     },
            items:
            [
                {
                    xtype: 'sbutton',  
                    text: 'Games', 
                    name:'game',
            		handler : _handler
                }
            ]
        
        });  
        config.items.push(
        {
            xtype: 'buttongroup',
            title: 'Lookups',
            columns: 2,
            defaults: { scale: 'small'     },
            items:
            [
                {
                    xtype: 'sbutton',  
                    text: 'Regions', 
                    name:'region',
                    handler : _handler
                }
                ,{
                    xtype: 'sbutton',  
                    text: 'Platform',  
                    name: 'platform', 
                    handler : _handler
                }
            ] 
        }); 
        
        config.items.push('->');   
                
                   
        //right side 


        this.callParent(arguments);//base class
     }//end of constructor
     
     //override certain functions, then call the parent method
     ,initComponent: function() {  this.callParent(arguments); }
     ,beforeRender:function() { this.callParent();}
     ,afterRender:function(){  this.callParent(); }
  
});//end of Ext.define
  

 
                    
              