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

    } else{
        //bring out the menu
        menu.style.display = "block";

        document.body.style.overflow = 'hidden';

        //turn the hamburger to 'x'
        bar[0].style.rotate = '45deg';
        bar[0].style.position = 'relative';
        bar[0].style.top = '12.2px';

        bar[1].style.opacity = 0;

        bar[2].style.rotate = '-45deg';
        bar[2].style.position = 'relative';
        bar[2].style.bottom = '12.2px';
    }
}

const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

//use user's previously saved theme, else use their system default theme
if( savedTheme )
{
    document.documentElement.setAttribute('data-theme', savedTheme);
} else{
    document.documentElement.setAttribute('data-theme', systemTheme);
}

var mobile_sun = document.getElementById('mobile-sun');
var normal_sun = document.getElementById('normal-sun');
var mobile_moon = document.getElementById('mobile-moon');
var normal_moon = document.getElementById('normal-moon');

var mobile_sun_display = window.getComputedStyle(mobile_sun).display;
var mobile_moon_display = window.getComputedStyle(mobile_moon).display;
var normal_sun_display = window.getComputedStyle(normal_sun).display;
var normal_moon_display = window.getComputedStyle(normal_moon).display;

let bar = document.querySelectorAll('.hamburger .bar');

if( localStorage.getItem('theme') === 'dark' )
{
    //if mobile
    if( mobile_sun_display != 'none' )//mobile_moon_display === 'flex' )//it means the moon's there
    {
        mobile_moon.style.display = 'none';
        mobile_sun.style.display = 'flex';
        normal_moon.style.display = 'none';
        normal_sun.style.display = 'none';
        // bar[0].style.backgroundColor = "#fff";
        // bar[1].style.backgroundColor = "#fff";
        // bar[2].style.backgroundColor = "#fff";
    }else{
        //if not mobile
        if( normal_sun_display != 'none' )//normal_moon_display === 'flex' )
        {
            normal_moon.style.display = 'none';
            normal_sun.style.display = 'flex';
            mobile_moon.style.display = 'none';
            mobile_sun.style.display = 'none';
        }
    }
} else if( localStorage.getItem('theme') === 'light' ){
    //if mobile
    if( /*mobile_moon_display != 'none' )//*/mobile_sun_display === 'flex' )
    {
        mobile_sun.style.display = 'none';
        mobile_moon.style.display = 'flex';
        normal_moon.style.display = 'none';
        normal_sun.style.display = 'none';
        // bar[0].style.backgroundColor = "#000";
        // bar[1].style.backgroundColor = "#000";
        // bar[2].style.backgroundColor = "#000";
    }else{
        //if not mobile
        if( /*normal_moon_display != 'none' )//*/normal_sun_display === 'flex' )
        {
            normal_sun.style.display = 'none';
            normal_moon.style.display = 'flex';
            mobile_moon.style.display = 'none';
            mobile_sun.style.display = 'none';
        }
    }
}

function toggle(){
    //now, when they toggle
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    var mobile_sun = document.getElementById('mobile-sun');
    var normal_sun = document.getElementById('normal-sun');
    var mobile_moon = document.getElementById('mobile-moon');
    var normal_moon = document.getElementById('normal-moon');
    
    var mobile_sun_display = window.getComputedStyle(mobile_sun).display;
    var mobile_moon_display = window.getComputedStyle(mobile_moon).display;
    var normal_sun_display = window.getComputedStyle(normal_sun).display;
    var normal_moon_display = window.getComputedStyle(normal_moon).display;

    if( newTheme === 'light' )
    {
        //if mobile
        if( mobile_sun_display === 'flex' )
        {
            mobile_sun.style.display = 'none';
            mobile_moon.style.display = 'flex';
            normal_moon.style.display = 'none';
            normal_sun.style.display = 'none';
            bar[0].style.backgroundColor = "#000";
            bar[1].style.backgroundColor = "#000";
            bar[2].style.backgroundColor = "#000";
        }else{
            //if not mobile
            if( normal_sun_display === 'flex' )
            {
                normal_sun.style.display = 'none';
                normal_moon.style.display = 'flex';
                mobile_moon.style.display = 'none';
                mobile_sun.style.display = 'none';
            }
        }
    } else if( newTheme === 'dark' )
    {
        //if mobile
        if( mobile_moon_display === 'flex' )//it means the moon's there
        {
            mobile_moon.style.display = 'none';
            mobile_sun.style.display = 'flex';
            normal_moon.style.display = 'none';
            normal_sun.style.display = 'none';
            bar[0].style.backgroundColor = "#fff";
            bar[1].style.backgroundColor = "#fff";
            bar[2].style.backgroundColor = "#fff";
        }else{
            //if not mobile
            if( normal_moon_display === 'flex' )
            {
                normal_moon.style.display = 'none';
                normal_sun.style.display = 'flex';
                mobile_moon.style.display = 'none';
                mobile_sun.style.display = 'none';
            }
        }
        
    }

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}