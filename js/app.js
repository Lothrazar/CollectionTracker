App = 
{
    init:function()
    {
        if(typeof Ext == 'undefined') 
            alert('Ext.js undefined.  Site will not load correctly');
           else
        {
            console.log(Ext);
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
