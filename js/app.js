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
                    //hide loading bar gif
                    $("#main_loading").addClass('hidden');
                    
                    Ext.create('main.viewport', {}); 
                    
                 
                }
            }); //end Application
        
        
            //set Ajax defaults
            
           /* Ext.Ajax.defaultHeaders = {
                'Powered-By': 'Ext Core'
            }; 
             Ext.Ajax.extraParams = {TOKEN:"TOKEN"};*/
            Ext.Ajax.on('requestexception', function(o){console.log(o);alert("404 ");});
           
        
        
        }
    } // end App.init
    
    
};






