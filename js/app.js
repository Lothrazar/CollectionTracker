App = 
{
    init:function()
    {
        if(typeof Ext == 'undefined') 
        {
            alert('Ext.js undefined.  Could not find CDN hosted at http://cdn.sencha.com/ext/gpl/4.2.1/  Site will not load correctly');
        }
        else
        { 
            Ext.application(
            {
                name: 'Lothrazar\'s Collection Tracker',
                launch: function() 
                {
            console.log('Ext.application creating viewport');
                    Ext.create('main.viewport', {});
                     
                   /* Ext.create('Ext.container.Viewport', 
                    {
                        layout: 'border', //default was fit
                        items: 
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
                            items: {
                                title: 'Main',
                                html: 'The first tab\'s content. Others may be added dynamically'
                            }
                        }
                        ] 
                    });*/
                }
            }); //end Application
        
        
        }
    }
    
    
}




//jquery on ready event
$(document).ready(function()
{
    App.init();
});
