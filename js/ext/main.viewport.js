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
		        html: '<h1 class="x-panel-header">Collection Tracker (Open Source project by Sam Bassett - Lothrazar)</h1>',
		        autoHeight: true,
		        border: false,
		        margins: '0 0 5 0'
		    }, {
		        region: 'west',
		        collapsible: true,
		        title: 'Navigation',
		        width: 200
		        // the west region might typically utilize a TreePanel or a Panel with Accordion layout
		    }, {
		        region: 'south',
		        title: 'Title for Panel',
		        collapsible: true,
		        html: 'Information goes here',
		        split: true,
		        height: 100,
		        minHeight: 100
		    }, {
		        region: 'east',
		        title: 'Title for the Grid Panel',
		        collapsible: true,
		        split: true,
		        width: 200,
		        //xtype: 'grid',
		        
		        html: 'Content goes here',
		        // remaining grid configuration not shown ...
		        // notice that the GridPanel is added directly as the region
		        // it is not "overnested" inside another Panel
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
	 ,afterRender:function(){   this.callParent(); }
 
 
 
});//end of Ext.define
 