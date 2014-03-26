Ext.define('Sam.model.game', 
{
     extend: 'Ext.data.Model',
     fields: 
     [
          {name: 'game_id', type: 'int'}
         ,{name: 'game_name',  type: 'string'}
         ,{name: 'company_id',       type: 'int'}  
         ,{name: 'platform_id',       type: 'int'}  
         ,{name: 'company_name',  type: 'string'}
         ,{name: 'platform_name',  type: 'string'}
         ,{name: 'release_date',       type: 'date'}   
         ,{name: 'region_id',       type: 'int'} 
         ,{name: 'region_name',  type: 'string'}
     ]
 });