App.region = 
{
    init:function()
    {
        
        console.log('region controller');
        
        
        //create the grid
        Ext.create('Ext.grid.Panel', 
        {
            title: 'Regions',
            store:  // Ext.data.StoreManager.lookup('simpsonsStore'),
                Ext.create('Sam.Store', 
                {
                     model: 'Region'
                     ,url: '/rest/region'
                     ,fields:['region_id', 'region_name'] 
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




