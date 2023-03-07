const car = {
  model: "BMW",
  currentSpeed: 30,
  color: "gray",
  fuel: "diesel",
  changeSpeed: function (newSpeed) {
    if (newSpeed < 0) {
      car.currentSpeed = 0;
    } else {
      car.currentSpeed = newSpeed;
    }

    return `O ${car.model} está à ${car.currentSpeed}km/h!`;
  },
};

car.changeSpeed(-10);
car.changeSpeed(100);

function createCharacter(name, primaryClass) {
  const classes = ["Warrior", "Mage", "Rougue", "Healer"];

  if (classes.includes(primaryClass) === false) {
    return `A classe ${primaryClass} não está disponível!`;
  }

  const Character = {
    name: name,
    class: primaryClass,
    level: 1,
    statusPoints: 10,
    lifePoints: 100,
    manaPoints: 50,
    strength: 5,
    defense: 5,
    speed: 5,
    levelUp: function () {
      Character.level += 1;
      // Character.level = Character.level + 1

      Character.statusPoints += 2;
      return `O level de ${Character.name} aumentou para ${Character.level}!`;
    },
    distributePoints: function (points, destination) {
      const atributes = [
        "lifePoints",
        "manaPoints",
        "strength",
        "defense",
        "speed",
      ];

      if (atributes.includes(destination) === false) {
        return `O atributo ${destination} não existe!`;
      } else if (points > Character.statusPoints) {
        return `Você possuí somente ${Character.statusPoints} pontos para distribuir!`;
      }

      Character.statusPoints -= points;

      // Com a utilização de  Objeto[chave]
      if (destination === "lifePoints" || destination === "manaPoints") {
        Character[destination] += points * 10;
      } else {
        Character[destination] += points;
      }

      // Com a utilização de Objeto.chave
      // if (destination === "lifePoints") {
      //   Character.lifePoints += points;
      // } else if (destination === "manaPoints") {
      //   Character.manaPoints += points;
      // } else if (destination === "defense") {
      //   Character.defense += points;
      // }
    },
  };

  return Character;
}

const golimar = createCharacter("golimar", "Mage");
const vilson = createCharacter("vilsun", "Healer");

console.log(golimar.levelUp());
console.log(vilson.levelUp());

golimar.distributePoints(10, "strength");

console.log(golimar["name"]);
