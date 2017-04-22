function Player(name, options) {
  this.name = name
  this.health = 100 || options.health
  this.strength = 10 || options.strength

  this.stats = () => {
    console.log(`
    Your stats
    ----------
    
    Health: ${this.health}
    Strength: ${this.strength}
    `)
  }

  this.attack = (enemy, game) => {
    return () => {
      // attack the enemy
      let chanceOfHit = Math.floor(Math.random() * 3)
      if(chanceOfHit >= 1) {
        let attackPower = Math.floor(Math.random() * this.strength)
        enemy.health -= attackPower

        if(attackPower == 10) {
          console.log('Critical hit!')
        }

        if(enemy.health <= 0) {
          console.log(`The ${enemy.name} died!`)
          game.isCombat = false
        }else {
          console.log(`You hit the ${enemy.name}, it now has ${enemy.health} health points!`)
        }
      }else {
        console.log('Your attack missed!')
      }

      // once the player has attacked, the enemy will have a chance to attack the player
      enemy.attack(this, game)
    }
  }
}

module.exports = Player