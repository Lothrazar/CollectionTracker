Ext.define('Sam.form.game',
{
    extend:'Sam.form'  
    ,constructor:function(config)
    {    
		 config.title = 'Games';
         
         
         
         config. items = [{
	       fieldLabel: 'First Name',
	        name: 'first',
	        allowBlank:false
	    },{
	        fieldLabel: 'Last Name',
	        name: 'last'
	    },{
	        fieldLabel: 'Company',
	        name: 'company'
	    }, {
	        fieldLabel: 'Email',
	        name: 'email',
	        vtype:'email'
	    }, {
	        fieldLabel: 'DOB',
	        name: 'dob',
	        xtype: 'datefield'
	    }, {
	        fieldLabel: 'Age',
	        name: 'age',
	        xtype: 'numberfield',
	        minValue: 0,
	        maxValue: 100
	    }, {
	        xtype: 'timefield',
	        fieldLabel: 'Time',
	        name: 'time',
	        minValue: '8:00am',
	        maxValue: '6:00pm'
	    }];
  
        this.callParent(arguments); 
     }//end of constructor
      
});//end of Ext.define
 
