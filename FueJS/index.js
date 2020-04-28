const FueJs = {};


FueJs.createElement = function (type, props, ...children) {
    const element = document.createElement(type);
    Object.assign(element.style, props.style);
    if (children) {
        for (let i=0;i<children.length;i++){
            const child = children[i]
            element.append(child)
        }
    }
    return element
}



