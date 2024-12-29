function Hamburger()
{
    //make hamburger turn into 'x'

    //bring out the menu (at the bottom: just under the nav bar)
    var menu = document.getElementById('mobile_menu');
    let hamburger = document.querySelector('.hamburger');
    
    let bar = document.querySelectorAll('.hamburger .bar');
    if( menu.style.display === 'block' )
    {
        //close the menu
        menu.style.display = 'none';

        document.body.style.overflow = '';

        //turn the hamburger to normal
        bar[0].style.rotate = '0deg';
        bar[0].style.position = 'static';

        bar[1].style.opacity = 1;

        bar[2].style.rotate = '0deg';
        bar[2].style.position = 'static';

        //add ease
        // bar.style.transition = '0.3s ease';
    } else{
        //bring out the menu
        menu.style.display = "block";

        document.body.style.overflow = 'hidden';

        //turn the hamburger to 'x'
        bar[0].style.rotate = '45deg';
        bar[0].style.position = 'relative';
        bar[0].style.top = '15px';

        bar[1].style.opacity = 0;

        bar[2].style.rotate = '-45deg';
        bar[2].style.position = 'relative';
        bar[2].style.bottom = '15px';

        //add ease
        // bar.style.transition = '0.3s ease';
    }

    var count = 0;
    // let navigator = document.querySelectorAll('.navigator');
    // navigator.style.display = 'block';


    count++;
}