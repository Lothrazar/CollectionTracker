App = 
{
    preinit:function()
    {
        
        
    }
    ,init:function()
    { 
        if(typeof Ext == 'undefined') 
        {
            //if this happens, the main_loading bar will still be visible
            alert('Ext.js undefined.  Could not find CDN hosted at http://cdn.sencha.com/ext/gpl/4.2.1/  Site will not load correctly');
        }
        else
        { 
           App.setDefaults();
           
           Ext.application(
           {
               name: 'LCT',
                 launch: function() 
               {
                    
                    Ext.create('Sam.main.viewport', {});  
                    
                    
                    //hide loading bar gif
                    $("#main_loading").addClass('hidden');
                 }
            });  
        
    
        
          
        }
    } // end App.init
    
    ,setDefaults:function()
    {
        //Ext.Ajax.extraParams = {TOKEN:"TOKEN"}; 
            
        Ext.Ajax.on('requestexception', function(o,e)
        {
            
            if(e.status && e.responseText) // these may not exist
            {
                alert(e.responseText);
            }
            else //assume that database connection failed
            {
                alert("500 : Could not connect to database 'tracker'"); 
            } 
        });
        
    }
    
    //click events
    ,toolbar:
    {
        region:function()
        {
     
           
           var tab_name = 'region';
           
         
            App.tabs.set(tab_name);
        } 
        ,collection:function()
        {
            var tab_name = 'collection';
           
         
            App.tabs.set(tab_name);
        }
        ,games:function()
        {
            var tab_name = 'games';
           
         
            App.tabs.set(tab_name);
        }
    }
    
    
    ,tabs:
    {
        _prefix : 'maintab_',
        //either make tab if not visible, or set as active tab
        set:function(tab_name)
        {
            //if(Ext.getCmp(App.tabs._prefix + tab_name))//itworks,but..
            if(Ext.getCmp('main_tabpanel').child("#"+tab_name))
           {
               App.tabs.select(tab_name);
           }
           else App.tabs.add(tab_name);
        }
        ,add:function(tab_name)
        {
            console.log(tab_name);
            
             var tabs = Ext.getCmp('main_tabpanel');
            tabs.add(Ext.create( 'Ext.panel.Panel', //'Ext.tab.Tab',
            {
                 title: tab_name
                 ,id:App.tabs._prefix + tab_name
                 ,itemId:tab_name
                 ,closable:true
                ,loader: 
                {
                    autoLoad:true,
                    url :'views/tabs/'+tab_name+'.html'
                }
                ,listeners:
                {
                    afterrender:function()
                    { 
                        //test getting ajax content
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
                } 
            }));
           // now that it has been aded, select it as well
            App.tabs.select(tab_name);
        }
        
        ,select:function(tab_name)
        {
            var tabs = Ext.getCmp('main_tabpanel');
         
             tabs.setActiveTab(tabs.child("#"+tab_name));
         //tabs.setActiveTab(users);   
        }
    }
    
};






