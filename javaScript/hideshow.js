var div = document.getElementById('td-subnav-cont');
var display = 0;

function hideshow() 
{
    if(display == 1)
    {
        div.style.display = 'inline-block';
        display = 0;
    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }
}