App = 
{
    init:function()
    {
        if(typeof Ext == 'undefined') 
            alert('Ext.js undefined.  Site will not load correctly');
           else
        console.log(Ext);
    }
    
    
}




//jquery on ready event
$(document).ready(function()
{
    App.init();
});
