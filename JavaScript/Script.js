let button = document.querySelector('.button');
let inContent = document.querySelector('.in-content');
let counter = 4;

button.onclick = function() {
	let article = document.createElement('article');
	let h3 = document.createElement('h3');
	let p = document.createElement('p');
	

	h3.textContent = 'Block of content #' + counter++;
	p.textContent = 'There is some text here...';

	article.classList.add('box');

	article.append(h3);
	article.append(p);
	
	inContent.append(article);
}
