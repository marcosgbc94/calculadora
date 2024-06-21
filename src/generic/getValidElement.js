export const getValidElement = (element, multiple = false) => {
    if (!element || !element.toString().trim().length) return null;

    let nodeElement = null;

    // Comprueba si el elemento enviado existe
    if (typeof element === 'string') {
        nodeElement = multiple ? document.querySelectorAll(element) : document.querySelector(element);
        if (!nodeElement) {
            nodeElement = multiple ? document.querySelectorAll(`#${element}`) : document.querySelector(`#${element}`);
            if (!nodeElement) return false;
        }
    } else if (element instanceof Node) {
        nodeElement = element;
    } else {
        return false;
    }

    return nodeElement;
}