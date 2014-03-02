Ext.define('Platform', 
{
     extend: 'Ext.data.Model',
     fields: 
     [
          {name: 'platform_id', type: 'int'}
         ,{name: 'platform_name',  type: 'string'}
         ,{name: 'company_id',       type: 'int'} 
         ,{name: 'company_name',  type: 'string'}
     ]
 });