
export function get(element){
    if (!element || null){
        throw new Error(`There was an error finding this ${element} check ${element} to find out about the problem`)
        
    } else if (element) {
        return document.querySelector(element);}
}

export function gets(elements){
    if (elements){
        return document.querySelectorAll(elements);
    }
    else 
    throw new Error(`There was a error finding these ${elements} check ${elements} to find out about the problem`)
}
