(function(){
  console.log("Hello World!")
  let carrousel = document.querySelector('.carrousel')
  let bouton = document.querySelector('.bouton__ouvrir')
  let carrousel__x = document.querySelector('.carrousel__x')
  let galerie = document.querySelector('.galerie')
  let carrousel__figure = document.querySelector('.carrousel__figure')
  // Création dynamique d'une image du carrousel
  let carrousel__img = document.createElement('img')
  carrousel__img.classList.add('carrousel__img')
  let galerie__img = galerie.querySelector('img')
  console.log(galerie__img)
  
  carrousel__img.src = galerie__img.src
  carrousel__figure.appendChild(carrousel__img)


  let carrousel_img = document.createElement('img')
  carrousel_img.classList.add('carrousel__img')

  console.log('carrousel__x' + carrousel__x.tagName)

  // Écouteur d'événement sur le bouton ouvrir
  bouton.addEventListener('mousedown', function(){
    carrousel.classList.add('carrousel--ouvrir')
  })

  // Écouteur d'événement sur le bouton fermer
  carrousel__x.addEventListener('mousedown', function(){
    carrousel.classList.remove('carrousel--ouvrir')
  })


  
})()