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
                    
                    Ext.create('Sam.main.viewport', {});  
                }
            }); //end Application
        
        
            //set Ajax defaults
        
            //Ext.Ajax.extraParams = {TOKEN:"TOKEN"}; 
            
            Ext.Ajax.on('requestexception', function(o,e)
            {
                
                if(e.status && e.responseText) // these may not exist
                {
                    alert(e.status + ":" + e.responseText);
                }
                else //assume that database connection failed
                {
                    alert("500 : Could not connect to database 'tracker'"); 
                } 
            });
            
            
        }
    } // end App.init
    
    
    //click events
    ,toolbar:
    {
        region:function()
        {
            var tabs = Ext.getCmp('main_tabpanel');
            
            //tabs.add
            tabs.add(Ext.create( 'Ext.panel.Panel', //'Ext.tab.Tab',
            {
                 title: 'test', 
                 closable:true, 
                loader: 
                {
                    autoLoad:true,
                    url :'views/tabs/games.html'
                }
              //, bodyStyle: 'background: none' 
            }));
            
            Ext.Ajax.request(
            {
               url: 'rest/region',
               success: function(response, opts) 
               {
                  var obj = Ext.decode(response.responseText);
                  
                  console.log('GET REQUEST RESULT:');
                  
                  console.dir(obj);
                   
               } 
            }); 
        } 
        ,collection:function(){}
        ,games:function(){}
    }
    
};






