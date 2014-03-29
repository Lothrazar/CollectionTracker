Ext.define('Sam.main.viewport',
{
	extend:'Ext.container.Viewport' 
	
	,requires  : ['Sam.base.button','Sam.base.grid','Sam.grids.gamegrid']
	  
	,constructor:function(config)
	{ 
		if(typeof config == 'undefined') {config = {}; }
		config.layout = 'border';  //or try layout fit here http://mutinyworks.com/blog/2012/05/03/extjs-and-a-simple-mvc-model-view-controller-part-1/
		 var tbar_handler = function()
	    {
	    	//amplify.publish("toolbar_click",{name: this.name});
	    	
	    	switch(this.name)
	    	{
	    		case 'game':
	    		
	    		console.log('about to create grid');
	    			  Ext.create('Sam.grid.gamegrid',
{
     renderTo: 'grid'
    });
	    		
	    		break;
	    	}
	    }
		
	    config.items =  
	    [
		    {
		        region: 'north', 
		        title:'Collection Tracker',
		        height:  53,
		        tbar:[ 
		        {
                    xtype: 'sbutton',   
                    text: 'Games', 
                    name:'game',
            		handler : tbar_handler
                }]
		      //  items:   
		    // tbar:     Ext.create("Sam.main.toolbar") 
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
     //,beforeRender:function() { this.callParent();}
	 //,afterRender:function(){  this.callParent(); }
  
});//end of Ext.define
 