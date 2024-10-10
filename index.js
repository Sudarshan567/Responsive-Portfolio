function menuClick()
{
    var mobileMenu=document.getElementById("mobileMenu")
    if(mobileMenu.classList.contains('hidden'))
    {
        mobileMenu.classList.remove('hidden');
    }
    else
    {
        mobileMenu.classList.add('hidden');
    }
}