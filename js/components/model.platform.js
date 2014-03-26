Ext.define('Platform', 
{
     extend: 'Ext.data.Model',
     fields: 
     [
          {name: 'platform_id', type: 'int'}
         ,{name: 'platform_name',  type: 'string'}
         ,{name: 'platform_company_id',       type: 'int'} 
         ,{name: 'platform_company_name',  type: 'string'}
     ]
 });