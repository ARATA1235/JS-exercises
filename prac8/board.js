"use strict";
const post = document.getElementById('post');

post.addEventListener('click', function() {
    const fortune = document.getElementById('fortune').value;
    const fun = document.getElementById('fun').value;
    const title = document.getElementById('title');
    const date = new Date();
    const createElement = document.createElement('div');
    createElement.innerHTML = `<p>${fortune}の投稿<br>${fun}<br>${date.toLocaleString()}</p>`
    title.prepend(createElement);
});