function exploreRecipes () {
  var recipes = [
    '../pages/retete/ciorba-burta.html',
    '../pages/retete/ciorba-grec.html',
    '../pages/retete/cosulete-crema.html',
    '../pages/retete/cupcake-zmeura.html',
    '../pages/retete/ardei-umpluti.html',
    '../pages/retete/briose-ciocolata.html',
    '../pages/retete/caramele-sarate.html',
    '../pages/retete/chiftele-dovlecei.html',
    '../pages/retete/ciocanele-pui.html',
    '../pages/retete/ciorba-miel.html',
    '../pages/retete/fasole-verde.html',
    '../pages/retete/frigarui-dovlecel.html',
    '../pages/retete/friptura-miel.html',
    '../pages/retete/fursecuri-nutella.html',
    '../pages/retete/onion-rings.html',
    '../pages/retete/pui-rosii.html',
    '../pages/retete/pizza-ciuperci.html',
    '../pages/retete/prajitura-lamaie.html',
    '../pages/retete/pui-soia.html',
    '../pages/retete/pulpa-porc.html',
    '../pages/retete/sarmale.html',
    '../pages/retete/shashuka.html',
    '../pages/retete/spaghete-aglio.html',
    '../pages/retete/spaghete-rosii.html',
    '../pages/retete/supa-de-legume.html',
    '../pages/retete/supa-linte.html',
    '../pages/retete/supa-legume.html',
    '../pages/retete/supa-gaina.html',
    '../pages/retete/supa-minestrone.html',
    '../pages/retete/supa-rosii.html',
    '../pages/retete/tarta-lamaie.html',
    '../pages/retete/waffe-vanilie.html'
  ]

  var randomIndex = Math.floor(Math.random() * recipes.length)
  var randomRecipe = recipes[randomIndex]
  window.location.href = randomRecipe
}
