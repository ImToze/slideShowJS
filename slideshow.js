'use strict';

const images = [
    { 'id': '1', 'url':'./img/snk.jpg'},
    { 'id': '2', 'url':'./img/demonslayer.jpg'},
    { 'id': '3', 'url':'./img/jk.jpg'},
    { 'id': '4', 'url':'./img/onepiece.jpg'},
    { 'id': '5', 'url':'./img/onepunchman.jpg'},
    { 'id': '6', 'url':'./img/deathnote.jpg'},
]

const containerItems = document.querySelector( '#container-items' );

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'>
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1 ];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#next').addEventListener('click', previous);
document.querySelector('#previous').addEventListener('click', next);
