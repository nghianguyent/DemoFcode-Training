window.addEventListener('scroll', () => {
    let navbar = document.getElementById('navbarContainer');
    let windowsOffset = window.scrollY > 0;
    navbar.classList.toggle('nav-scroll', windowsOffset);
});

// render menu items in navbar

const renderMenuElements = (sectionName, linkTo) => {
    let menuListElement = document.createElement('li');
    let menuLinkElement = document.createElement('a');
    let menuLinkText = document.createTextNode(sectionName);
    //create properties for element
    // menuListElement.className = 'menu-item';
    menuListElement.className = 'nav-item';
    menuLinkElement.className = 'nav-link ' + sectionName.toLowerCase();
    menuLinkElement.href = linkTo;
    //add child for element
    menuLinkElement.appendChild(menuLinkText);
    menuListElement.appendChild(menuLinkElement);

    return menuListElement;
};

const renderMenuItems = () => {
    DUMMY_MENU_ITEMS.forEach( (item) => {
        document.getElementById('menuItems')
        .appendChild(renderMenuElements(item.name, item.linkTo));
    });
}

document.getElementById('menuItems').onLoad = renderMenuItems();

const renderFooterMediaElements = (linkTo, iconClassName) => {
    let mediaLinkElement = document.createElement('a');
    let mediaIconElement = document.createElement('i');

    // create properties for element
    mediaLinkElement.className = 'media-icon';
    mediaLinkElement.href = linkTo;
    mediaIconElement.className = iconClassName;

    // combine elements
    mediaLinkElement.appendChild(mediaIconElement);

    return mediaLinkElement;
}

const renderFooterMediaItems = () => {
    DUMMY_HEADER_ITEMS.forEach( (item) => {
        document.getElementById('footerMediaIcons')
        .appendChild(renderFooterMediaElements(item.href, item.className));
    });
}

document.getElementById('footerMediaIcons').onload = renderFooterMediaItems();

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('.menu-items li a');
navLink[0].className += ' active';
window.addEventListener('scroll',  () => {
    let current = '';
    sections.forEach( (section) => {
        let sectionYOffset = section.offsetTop - 80;
        if (pageYOffset >= sectionYOffset){
            current = section.getAttribute('id');
        };
    })

    navLink.forEach( (link) => {
        link.classList.remove('active');
        if (link.classList.contains(current)){
            link.className += ' active';
        }
    });
});

// action for hamburger button 

let hamburgerMenu = document.getElementById('hamburgerMenu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    document.getElementById('menuItems').classList.toggle('active');
});