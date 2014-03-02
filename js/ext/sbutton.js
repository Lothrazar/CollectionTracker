Ext.define('Sam.button',
{
    extend:'Ext.button.Button' 
    ,xtype:'sbutton'
    ,constructor:function(config)
    {  
        config.border = 1;
        config.cls = 'x-btn-default-small';
        
        if(!config.style) config.style = {};
        
        config.style.borderColor = '#D1D1D1';
        config.style.borderStyle = 'solid';
 
        this.callParent(arguments);//base class
     }//end of constructor
     
     //override certain functions, then call the parent method
     ,initComponent: function() {  this.callParent(arguments); }
     ,beforeRender:function() { this.callParent();}
     ,afterRender:function(){  this.callParent(); }
  
});//end of Ext.define
  
