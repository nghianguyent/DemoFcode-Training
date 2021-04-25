const renderServicesElement = (logoClassName, titleText, descriptionText) => {
    let itemsContainerElement = document.createElement('li');
    let iconContainerElement = document.createElement('div');
    // create icon element for card
    let iconLogoElement = document.createElement('i');
    // create title and description elements
    let contentContainerElement = document.createElement('div');
    let titleElement = document.createElement('h4');
    let descriptionElement = document.createElement('p');
    // create text node for title and description
    let description = document.createTextNode(descriptionText);
    let title = document.createTextNode(titleText);

    // create properties for elements
    itemsContainerElement.className = 'services-item-container';
    // logo
    iconContainerElement.className = 'services-item__logo';
    iconLogoElement.className = logoClassName;
    // content
    contentContainerElement.className = 'services-item__content';

    //add child for element
    //content
    titleElement.appendChild(title);
    descriptionElement.appendChild(description);
    contentContainerElement.appendChild(titleElement);
    contentContainerElement.appendChild(descriptionElement);
    // icon logo
    iconContainerElement.appendChild(iconLogoElement);
    // item container
    itemsContainerElement.appendChild(iconContainerElement);
    itemsContainerElement.appendChild(contentContainerElement);
    
    return itemsContainerElement;
}

const renderServicesItems = () => {
    let textContent = "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text.";
    DUMMY_SERVICES_ITEMS.forEach ( (item) => {
        document.getElementById('servicesCardContainer')
            .appendChild(renderServicesElement(item.logoClassName, item.titleText, textContent));
    });
};

document.getElementById('servicesCardContainer').onload = renderServicesItems();