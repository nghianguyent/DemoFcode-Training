const renderServicesElement = (logoClassName, titleText, descriptionText) => {
    let itemsListContainerElement = document.createElement('div');
    let itemsContainerElement = document.createElement('li');
    // create icon element for card
    let iconLogoElement = document.createElement('i');
    // create title and description elements
    let titleElement = document.createElement('h4');
    let descriptionElement = document.createElement('p');
    // create text node for title and description
    let description = document.createTextNode(descriptionText);
    let title = document.createTextNode(titleText);

    // create properties for elements
    itemsListContainerElement.className = 'col-4 col-s-6';
    itemsContainerElement.className = 'services-item-container';
    // logo
    iconLogoElement.className = logoClassName;
    
    //add child for element
    titleElement.appendChild(title);
    descriptionElement.appendChild(description);
    // item container
    itemsContainerElement.appendChild(iconLogoElement);
    itemsContainerElement.appendChild(titleElement);
    itemsContainerElement.appendChild(descriptionElement);
    itemsListContainerElement.appendChild(itemsContainerElement);

    return itemsListContainerElement;
}

const renderServicesItems = () => {
    let textContent = "There are many variations of pssages of Lorm available, bu in some form, Lorem Ipsum is simply dummy text.";
    DUMMY_SERVICES_ITEMS.forEach ( (item) => {
        document.getElementById('servicesCardContainer')
            .appendChild(renderServicesElement(item.logoClassName, item.titleText, textContent));
    });
};

document.getElementById('servicesCardContainer').onload = renderServicesItems();