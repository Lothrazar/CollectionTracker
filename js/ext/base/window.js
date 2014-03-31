Ext.define('Sam.base.window',
{
    extend:'Ext.window.Window' 
    ,xtype:'swindow'
    ,layout: 'fit' 
    ,bodyPadding: 5
    ,constructor:function(config)
    {  
      
      	
        this.callParent(arguments);//base class
     }//end of constructor
     
     //override certain functions, then call the parent method
     ,initComponent: function() {  this.callParent(arguments); } 
  
});//end of Ext.define
  
