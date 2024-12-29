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

    // var count = 0;
    // let navigator = document.querySelectorAll('.navigator');
    // navigator.style.display = 'block';


    // count++;
}

// function toggle(){
//     var sun = document.querySelector('.fa-sun');
//     var moon = document.querySelector('.fa-moon');

//     var normal_moon = document.getElementById('normal-moon');
//     var mobile_moon = document.getElementById('mobile-moon');

//     var normal_sun = document.getElementById('normal-sun');
//     var mobile_sun = document.getElementById('mobile-sun');

//     var mobile_sun_display = window.getComputedStyle(mobile_sun).display;
//     var normal_sun_display = window.getComputedStyle(normal_sun).display;

//     var body = document.body;
//     var mobile_menu = document.querySelector('#mobile_menu');

//     var header = document.querySelector('header');
//     var menu = document.querySelector('#menu');
//     var hamburger = document.querySelector('#hamburger');
//     var navtitle = document.querySelector('header span');


//     var main = document.querySelector('main');


//     var footer = document.querySelector('footer');


//     //if sun is present, take it to light theme
//     //mobile
//     if( mobile_sun_display )
//     {
//         mobile_sun.style.display = 'none';
//         mobile_moon.style.display = 'flex';

//         //boddy stuff
//         body.style.backgroundColor = 'var(--bg-light)';

//         //header stuff
//         header.style.backgroundColor = 'var(--header-bg-light)';

//         // mobile_menu.style

//         //main stuff
        

//         //footer stuff
//         footer.style.backgroundColor = 'var(--footer-bg-light)';



//     } else{


//     }

//     //normal

//     //else

//     //take it to dark theme
// }