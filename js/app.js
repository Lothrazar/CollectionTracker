App = 
{
    init:function()
    { 
        if(typeof Ext == 'undefined') 
        {
            //if this happens, the main_loading bar will still be visible
            alert('Ext.js undefined.  Could not find CDN hosted at http://cdn.sencha.com/ext/gpl/4.2.1/  Site will not load correctly');
        }
        else
        { 
            Ext.application(
            {
                name: 'Lothrazar\'s Collection Tracker',
                launch: function() 
                { 
                    
                    Ext.create('main.viewport', {}); 
                    
                    //hide loading bar after viewport is created
                    $("#main_loading").addClass('hidden');
                    
 
                    
                }
            }); //end Application
        
        
        }
    } // end App.init
    
    
};






