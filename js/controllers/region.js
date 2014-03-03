App.region = 
{
    init:function()
    {
        
        console.log('region controller');
        
        
        //create the grid
        Ext.create('Ext.grid.Panel', 
        {
            title: 'Regions',
            store:// Ext.data.StoreManager.lookup('simpsonsStore'),
                Ext.create('Ext.data.Store', {
                 model: 'Region',
                 proxy: {
                     type: 'ajax',
                     url: '/rest/region',
                     reader: {
                         //type: 'json'
                        // ,
                         root: 'rows'
                         
                     }
                 },
                  fields:['region_id', 'region_name'],
                 autoLoad: true
             }),
            columns: [
                { text: 'id',  dataIndex: 'region_id' },
                { text: 'n', dataIndex: 'region_name', flex: 1 } 
            ],
            height: 200,
            width: 400,
            renderTo: 'grid'
        });
    }  
    
    
};




