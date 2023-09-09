export function word(){
    const text = document.createTextNode('Hello World');
    const h1 = document.createElement('h1');
    h1.appendChild(text);
    document.body.appendChild(h1);
    h1.style.textAlign = 'center';
}




