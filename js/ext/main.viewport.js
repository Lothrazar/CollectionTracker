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
		        title:'title',
		        height:75 ,
		        loader: 
                {
                    autoLoad:true,
                    url :'views/viewport/north.html'
                }
		    }, {
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
		    }, {
		        region: 'south',
		        title: '',
		        collapsible: true, 
		        split: true,
		        height: 100,
		        minHeight: 100,
		        loader: 
                {
                    autoLoad:true,
                    url :'views/viewport/south.html'
                }
		    }, {
		        region: 'east',
		        title: 'Title for the Grid Panel',
		        collapsible: true,
		        split: true,
		        width: 200, 
		        loader: 
		        {
                    autoLoad:true,
                    url :'views/viewport/east.html'
                }
	 
		    }, {
		        region: 'center',
		        xtype: 'tabpanel', // TabPanel itself has no title
		        items: 
		        {
		            title: 'Main',
		            html: 'The first tab\'s content. Others may be added dynamically'
		        }
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
 