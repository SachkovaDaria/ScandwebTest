const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend',
};

const createElement = (template) => {
    const element = document.createElement('div');
    element.innerHTML = template;
    return element.firstChild;
};


const render = (parent, child, place) => {
    switch (place) {
        case RenderPosition.BEFOREBEGIN:
            parent.before(child);
            break;

        case RenderPosition.AFTERBEGIN:
            parent.prepend(child);
            break;

        case RenderPosition.BEFOREEND:
            parent.append(child);
            break;

        case RenderPosition.AFTEREND:
            parent.after(child);
            break;
    }
};

const renderElement = (template, parent, place) => {
    const cartTemplate = template;
    const cartElement = createElement(cartTemplate);

    render(parent, cartElement, place);
}


export { RenderPosition, renderElement };