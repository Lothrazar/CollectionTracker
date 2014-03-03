App.region = 
{
    init:function()
    {
        
        console.log('region controller');
        
        
        //create the grid
        Ext.create('Ext.grid.Panel', 
        {
            title: 'Regions',
            store:  
                Ext.create('Sam.Store', 
                {
                     model: 'Region'
                     ,url: '/rest/region' 
                 }),
            columns: [
                { text: 'id',  dataIndex: 'region_id' },
                { text: 'Name', dataIndex: 'region_name', flex: 1 } 
            ],
            height: 200,
            width: 400,
            renderTo: 'grid'
        });
    }  
    
    
};




