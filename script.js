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

}
