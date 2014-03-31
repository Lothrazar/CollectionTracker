Ext.define('Sam.base.button',
{
    extend:'Ext.button.Button' 
    ,xtype:'sbutton'
    ,constructor:function(config)
    {  
    	console.log('button creating');
        config.border = 1;
        config.cls = 'x-btn-default-small';
        
        if(!config.style) config.style = {};
        
        config.style.borderColor = '#D1D1D1';
        config.style.borderStyle = 'solid';
        
        //shortcut to grab an icon from the 'ico' folder
        if(config.ico && !config.icon)
        {
        	config.icon = "img/ico/"+config.ico+'.png';
        }
 
        this.callParent(arguments);//base class
     }//end of constructor
     
     //override certain functions, then call the parent method
     ,initComponent: function() {  this.callParent(arguments); }
     //,beforeRender:function() { this.callParent();}
     //,afterRender:function(){  this.callParent(); }
  
});//end of Ext.define
  
 
