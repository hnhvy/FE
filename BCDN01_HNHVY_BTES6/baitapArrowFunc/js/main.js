const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"]
let makeButtons = () => {
  let html = ''
  colorList.map((color, index) => {
    html += `<button class="color-button ${color}" onclick="changeColor('${color}',${index})"></button>`
  })

  return document.getElementById('colorContainer').innerHTML = html
}
makeButtons()
document.querySelectorAll('.color-button')[0].classList.add('active')
let changeColor = (colorChanged, index) => {
  let house = document.querySelector('.house')
  let buttons = document.querySelectorAll('.color-button')
  buttons.forEach(() => {
    let active = document.querySelector('.active')
    if (active === null) {
      buttons[index].classList.add('active')
    }
    else {
      active.classList.remove('active')
    }
  })
  for (let i = 0; i < colorList.length + 1; i++) {
    const color = colorList[i];
    if (house.classList.contains(color)) {
      house.classList.remove(color)
    }
    else {
      house.classList.add(colorChanged)
    }
  }
}



