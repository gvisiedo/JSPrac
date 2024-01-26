const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

document.getElementById('pid')
document.getElementsByClassName('parrafito')


h1.innerHTML = 'Patito';
h1.innerText = 'Patito <br> feo';
//h1.getAttribute('pantalla')
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde')
h1.classList.toggle('verde')
h1.classList.contains('verde')

input.value = '456'
const img = document.createElement('img');

img.setAttribute('src', 'https://www.lavanguardia.com/')
pid.append(img)



