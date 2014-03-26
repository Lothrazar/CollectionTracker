Ext.define('Main.toolbar',
{
    extend:'Ext.toolbar.Toolbar' 
    ,xtype:'main.toolbar'
    ,constructor:function(config)
    {  
        
        config.items = [];
        config.items.push(
        {
            xtype: 'sbutton',  
            text: 'Collection', 
            height:40,
            handler : App.toolbar.collection
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
                    handler : App.toolbar.game
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
                    handler : App.toolbar.region
                }
                ,{
                    xtype: 'sbutton',  
                    text: 'platform', 
                    handler : App.toolbar.platform
                }
            ] 
        }); 
        
        config.items.push('->');   
                
                    


        this.callParent(arguments);//base class
     }//end of constructor
     
     //override certain functions, then call the parent method
     ,initComponent: function() {  this.callParent(arguments); }
     ,beforeRender:function() { this.callParent();}
     ,afterRender:function(){  this.callParent(); }
  
});//end of Ext.define
  

 
                    
              