let Location = require('./location')

function Map() {

  let home = new Location('Wolfpine', 'Your home town.')
  let forest = new Location('Forest')
  let city = new Location('City')
  let city2 = new Location('City 2')
  let city3 = new Location('City 3')
  let town = new Location('Town')

  home.setNorth(forest)
  home.setSouth(city)
  home.setEast(town)
  home.setWest(city3)

  forest.setNorth(city2)
  city3.setNorth(town)

  this.getHome = () => home

  this.showMap = (currentLocation) => {
    return () => {
      let map = this.createMap(currentLocation)
    }
  }

  this.createMap = (node) => {
    let top = center = bottom = ''
    let spacing = Array(20).join(' ')
    let divider = '----'

    ;(node.getWest() != null) ? center += node.getWest().name : center += divider
    center += `${spacing}*${node.name}*${spacing}`
    ;(node.getEast() != null) ? center += node.getEast().name : center += divider

    if(node.getNorth() != null) {
      top += combineSpace()
      top += node.getNorth().name
    }else {
      top += combineSpace(top)
      top += divider
    }

    if(node.getSouth() != null) {
      bottom += combineSpace(bottom)
      bottom += node.getSouth().name
    }else {
      bottom += combineSpace(bottom)
      bottom += divider
    }

    function combineSpace() {
      if(node.getWest() != null) {
        return (Array(node.getWest().name.length + 1).join(' ') + spacing)
      }else {
        return (Array(divider.length + 1).join(' ') + spacing)
      }
    }

    console.log(`
    ${top}
    ${center}
    ${bottom}
    `)

  }

}

module.exports = Map