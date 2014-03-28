Ext.namespace("Sam"); //this file only gets loaded once. so define namespace and global object


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
				App.tabs.select(tab_name);
			}
			else
				App.tabs.add(tab_name);
		},
		add : function(tab_name)
		{
			//TODO: move to helpers
			function capitaliseFirstLetter(string)
			{
				return string.charAt(0).toUpperCase() + string.slice(1);
			}

			//TODO:
			/*String.prototype.capitalizeFirst = function() {
			 return this.charAt(0).tcoUpperCase() + this.slice(1);
			 }*/

			Ext.getCmp('main_tabpanel').add(Ext.create('Ext.panel.Panel', //'Ext.tab.Tab',
			{
				title : capitaliseFirstLetter(tab_name),
				id : App.tabs._prefix + tab_name,
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

						LazyLoad.js(
						[
							 "js/controllers/c_" + tab_name + ".js"
							,"js/components/model." + tab_name + ".js"
							,"js/components/grid." + tab_name + ".js"
						
						]//offical docs say v4.2.2 is out,  but the CDN only has up to 4.2.1
						, function()
						{
							eval("App." + tab_name + ".init();"); 
						}); 
					}
				}
			}));
			// now that it has been aded, select it as well
			App.tabs.select(tab_name);
		},
		select : function(tab_name)
		{
			var tabpanel = Ext.getCmp('main_tabpanel');

			tabpanel.setActiveTab(tabpanel.child("#" + tab_name));
		}
	};//end of tabs

	
	
	 
	
	
	
	var obj = {
	 
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
					}
				});
			}
		}// end App.init
		
		,toolbar :
		{
			region : function()
			{
				var tab_name = 'region';
	
				tabs.set(tab_name);
			},
			collection : function()
			{
				var tab_name = 'collection';
	
				tabs.set(tab_name);
			},
			game : function()
			{
				var tab_name = 'game';
	
				tabs.set(tab_name);
			},
			platform : function()
			{
				var tab_name = 'platform';
	
				tabs.set(tab_name);
			}
		}
		 
	};//end of returned object which acts as the constructor
		
		
	
	return obj;
	
}();





