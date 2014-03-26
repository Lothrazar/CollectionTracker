Ext.define('Sam.form',
{
    extend:'Ext.Panel' 
    ,xtype:'sform'
    ,layout: 'form'
    ,defaultType: 'textfield'
    ,bodyPadding: 5
    ,constructor:function(config)
    {  
      
        this.callParent(arguments);//base class
     }//end of constructor
     
     //override certain functions, then call the parent method
     ,initComponent: function() {  this.callParent(arguments); }
     //,beforeRender:function() { this.callParent();}
     //,afterRender:function(){  this.callParent(); }
  
});//end of Ext.define
  
