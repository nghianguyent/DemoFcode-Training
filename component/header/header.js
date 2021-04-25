const renderMediaElements = (linkTo, iconClassName) => {
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

const renderMediaItems = () => {
    DUMMY_HEADER_ITEMS.forEach( (item) => {
        document.getElementById("headerMediaIcons")
        .appendChild(renderMediaElements(item.href, item.className));
    });
}

document.getElementById("headerMediaIcons").onload = renderMediaItems();