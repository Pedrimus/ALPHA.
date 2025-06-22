function toggleMode() {
 const html = document.documentElement
 html.classList.toggle("light")

 // pegar a tag da img
 const img = document.querySelector("#profile img")

 // substituir a imagem
 if(html.classList.contains('light')) {
 // se estiver light mode, adicionar imagem light
  img.setAttribute('src', 'assets/avatar-light.png')
 } else {
 // se estiver sem light mode, manter img original
  img.setAttribute('src', 'assets/avatar.png')
 }

 if(html.classList.contains('light')) {
    img.setAttribute('alt', 'Foto de Pedro Dias, com a mão direita escorada no rosto barbado, sorrindo de óculos escuros, atrás um fundo artistico de plantas verdes e roxas.')
 }

}
