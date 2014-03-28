Ext.namespace("Sam"); //this file only gets loaded once. so define namespace and global object


//TODO: put helpers and extensions  and namespace somewher else? maybe in a pre-init?
String.prototype.capitalizeFirst = function()
{ 
	return this.charAt(0).toUpperCase() + this.slice(1);
} 


//changing to factory pattern via http://addyosmani.com/resources/essentialjsdesignpatterns/book/#designpatternsjavascript
Sam.App = function()
{
	//DOM does not exist yet
	
	var setDefaults = function()
	{
		//Ext.Ajax.extraParams = {TOKEN:"TOKEN"};

		Ext.Ajax.on('requestexception', function(o, e)
		{

			if (e.status && e.responseText)// these may not exist
			{
				alert(e.responseText);
			}
			else//assume that database connection failed
			{
				alert("500 : Could not connect to database 'tracker'");
			}
		});

	};
	
	//anything outside of the returned object is private
	 
	var tabs =
	{
		_prefix : 'maintab_',
		//either make tab if not visible, or set as active tab
		set : function(tab_name)
		{
			//if(Ext.getCmp(App.tabs._prefix + tab_name))//itworks,but..
			if (Ext.getCmp('main_tabpanel').child("#" + tab_name))
			{
				tabs.select(tab_name);
			}
			else
				tabs.add(tab_name);
		},
		add : function(tab_name)
		{
		

			Ext.getCmp('main_tabpanel').add(Ext.create('Ext.panel.Panel', //'Ext.tab.Tab',///TODO: panel as its own extension in /index/ 
			{
				title : tab_name.capitalizeFirst(),
				id : tabs._prefix + tab_name,
				itemId : tab_name,
				closable : true,
				loader :
				{
					autoLoad : true,
					url : 'views/tabs/' + tab_name + '.html'
				},
				listeners :
				{
					afterrender : function()
					{
						//test getting ajax content
							console.log('afterrender on  '+tab_name);

						LazyLoad.js(
						[
							 "js/controllers/c_" + tab_name + ".js"
							,"js/components/model." + tab_name + ".js"
							,"js/components/grid." + tab_name + ".js"
						
						]//offical docs say v4.2.2 is out,  but the CDN only has up to 4.2.1
						, function()
						{
							console.log('eval on '+tab_name);
							eval(  tab_name + ".init();"); 
						}); 
					}
				}
			}));
			// now that it has been aded, select it as well
			tabs.select(tab_name);
		},
		select : function(tab_name)
		{
			var tabpanel = Ext.getCmp('main_tabpanel');

			tabpanel.setActiveTab(tabpanel.child("#" + tab_name));
		}
	};//end of tabs

	
	
	 
	
	
	//obj is what we will return
	var __return = {
	 
		init : function()
		{
			if ( typeof Ext == 'undefined')
			{
				//if this happens, the main_loading bar will still be visible
				alert('Ext.js undefined.  Could not find CDN hosted at http://cdn.sencha.com/ext/gpl/4.2.1/  Site will not load correctly');
			}
			else
			{
				setDefaults();
 
				Ext.application(
				{
					name : 'LCT',
					launch : function()
					{
	
						Ext.create('Main.viewport',{});
	
						//hide loading bar gif
						//TODO: put this inside some sort of Main.viewport.listeners.onRender event
						$("#main_loading").addClass('hidden');
						
						
						
						amplify.subscribe("tab_click",function(o)
						{ 
							tabs.set(o.tab_name);
						});
						
						
					}
				});
			}
		}// end App.init
		
 
		 
	};//end of returned object which acts as the constructor
		
		
	
	return __return;
	
}();





