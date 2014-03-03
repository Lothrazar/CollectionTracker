Ext.define('Sam.main.viewport',
{
	extend:'Ext.container.Viewport' 
  
	,constructor:function(config)
	{ 
		config.layout = 'border';  
		
	    config.items =  
	    [
		    {
		        region: 'north', 
		        title:'Collection Tracker',
		        height:  100,
		        items:
		        [{
		            xtype:'toolbar',  //Ext.create("Ext.toolbar.Toolbar", { 
                    items: 
                    [
                         {
                            xtype: 'sbutton',  
                            text: 'Collection', 
                            height:40,
                            handler : App.toolbar.collection
                        }
                        ,{
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
                        
                        }//end group
                        ,{
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
                            ]
                        
                        }//end group
                        
                        ,'->'   
                
                    ]  
                }] 
		    },   
		    {
		        region: 'west',
		        collapsible: true,
		        collapsed:true,
		        title: 'Navigation',
		        width: 200,
                loader: 
                {
                    autoLoad:true,
                    url :'views/viewport/west.html'
                }
		        
		        // the west region might typically utilize a TreePanel or a Panel with Accordion layout
		    }, 
		    {
		        region: 'east',
		        title: 'Forms',
		        collapsible: false,
		        split: true,
		        width: 200, 
		        loader: 
		        {
                    autoLoad:true,
                    url :'views/viewport/east.html'
                } 
		    }, 
            {
                region: 'south',
                title: 'About',
                collapsible: true, 
                split: true,
                height: 100,
                minHeight: 100,
                collapsed:true,
                loader: 
                {
                    autoLoad:true,
                    url :'views/viewport/south.html'
                }
            }, 
		    {
		        region: 'center',
		        id:"main_tabpanel",
		        xtype: 'tabpanel', // TabPanel itself has no title
		        items: 
		        [
		            {
    		            title: 'Welcome', 
    		            loader: 
                        {
                            autoLoad:true,
                            url :'views/tabs/welcome.html'
                        }
    		        } 
		        ]
		    }
	    ];
	     
	     this.callParent(arguments);//base class
	 }//end of constructor
	 
	 //override certain functions, then call the parent method
	 ,initComponent: function() {  this.callParent(arguments); }
     ,beforeRender:function() { this.callParent();}
	 ,afterRender:function(){  this.callParent(); }
  
});//end of Ext.define
 