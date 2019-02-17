menu.onclick = function myFunction() {
    let x = document.getElementById('myTopnav');

    if(x.className==='topnav'){
        x.className+=' responsive';
        x.classList.remove('topnav');
    }
    else {
        x.className='topnav';
    }
};

