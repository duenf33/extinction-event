const lineThru = (event) => {
    event.target.style.textDecoration = 'line-through';
}
const opaCity = (event) => {
    event.target.style.opacity = 0;
}
const image = (event) => {
    event.target.style.width = 0;
}
const all = (func, action) => {
    for(const list of func){
        list.addEventListener('click', action);
    }
}

    for(const list of document.querySelectorAll('ol>li')){
        list.addEventListener('click', lineThru);
    }

    for(const list of document.querySelectorAll('ul>li')){
        list.addEventListener('click', opaCity);
    }

    for(const list of document.querySelectorAll('img')){
        list.addEventListener('click', image);
    }