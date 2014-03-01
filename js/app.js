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
                launch: function() {
                    Ext.create('Ext.container.Viewport', {
                        layout: 'fit',
                        items: [
                            {
                                title: 'Lothrazar\'s Collection Tracker',
                                html : 'Hello! Welcome to my project.'
                            }
                        ]
                    });
                }
            });
        
        
        }
    }
    
    
}




//jquery on ready event
$(document).ready(function()
{
    App.init();
});
