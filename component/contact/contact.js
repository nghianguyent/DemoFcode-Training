// contact information
const renderContactElement = (iconClassName, text) => {
    let infoListElement = document.createElement('li');
    let infoLinkElement = document.createElement('a');
    let infoIconElement = document.createElement('i');
    let infoText = document.createTextNode(text);
    // create properties for element
    infoListElement.className = "info-item";
    infoLinkElement.className = "info-item__link";
    infoIconElement.className = iconClassName;
    infoLinkElement.href = "/#"

    // add child for element
    infoListElement.appendChild(infoIconElement);
    infoLinkElement.appendChild(infoText);
    infoListElement.appendChild(infoLinkElement);

    return infoListElement;
}

const renderContactItems = () => {
    DUMMY_CONTACT_ITEMS.forEach( (item) => {
        document.getElementById("contactInfoItems")
        .appendChild(renderContactElement(item.iconClassName, item.text));
    });
};

document.getElementById("contactInfoItems").onLoad = renderContactItems();

// contact form

const renderContactFormElement = (placeholder, type) => {
    let formListElement = document.createElement('li');
    let formInputElement = document.createElement('input');

    // create properties for element
    formListElement.className = "col-6 form-input";
    formInputElement.className = "form-control";
    formInputElement.type = type;
    formInputElement.placeholder = placeholder;

    // add child for element
    formListElement.appendChild(formInputElement);

    return formListElement;
}

const renderContactFormItems = () => {
    DUMMY_CONTACT_FORM.forEach( (item) => {
        document.getElementById('contactFeedbackItems').appendChild(renderContactFormElement(item.placeholder, item.type));
    });
};

document.getElementById("contactFeedbackItems").onLoad = renderContactFormItems();
