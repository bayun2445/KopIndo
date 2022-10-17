function changeMenuListVisible(){
    var menuList = document.getElementsByClassName('menu-list')[0];
    var show = menuList.getAttribute('class');

    if (show.includes('open')){
        menuList.setAttribute('class', 'menu-list');
    } else {
        menuList.setAttribute('class', 'menu-list open');
    }
}

var menuIcon = document.getElementsByClassName('menu-icon-container')[0];

menuIcon.addEventListener('click', function(event) {
    changeMenuListVisible();
});

var menuElements = document.getElementsByClassName('menu-element');
for (var i = 0; i < menuElements.length; i++) {
    let element = menuElements[i];
    let value = element.innerHTML.toLowerCase()
    element.addEventListener('click', function(event){
        window.location.href = '#' + value;
        changeMenuListVisible();
    });
}