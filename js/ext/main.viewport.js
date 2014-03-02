Ext.define('main.viewport',
{
	extend:'Ext.container.Viewport' 
 
	
	
	,constructor:function(config)
	{ 
		config. layout = 'border';  
		
	    config.items =  
	    [
		    {
		        region: 'north', 
		        title:'Collection Tracker',
		        height:  60,
		        loader: 
                {
                    autoLoad:true,
                    url :'views/viewport/north.html'
                }
		    },  /* 
		    {
		        region: 'west',
		        collapsible: true,
		        title: 'Navigation',
		        width: 200,
                loader: 
                {
                    autoLoad:true,
                    url :'views/viewport/west.html'
                }
		        
		        // the west region might typically utilize a TreePanel or a Panel with Accordion layout
		    }, */
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
		        xtype: 'tabpanel', // TabPanel itself has no title
		        items: 
		        [
    		        {
    		            title: 'Collection', 
    		            loader: 
                        {
                            autoLoad:true,
                            url :'views/tabs/games.html'
                        }
    		        }
    		        , {
                        title: 'Types and Categories',
                        loader: 
                        {
                            autoLoad:true,
                            url :'views/tabs/types.html'
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
	 ,afterRender:function()
	 {   
	     
	     this.callParent(); 
	 }
 
 
 
 
});//end of Ext.define
 