// const user = [
//   "Vilson Padilha Neto",
//   "vilsonneto",
//   "#Batata123",
//   24,
//   true,
//   ["Alessandra", "Eduardo", "Luiz", "Lorena", "Thiago", "Wesley"],
// ];

let user = {
  name: "Vilson Padilha Neto",
  username: "vilsonneto",
  password: "#Batata123",
  age: 24,
  hasBeard: true,
  friendList: ["Alessandra", "Eduardo", "Luiz", "Lorena", "Thiago", "Wesley"],
  pet: {
    name: "Lady",
    specie: "cat",
  },
};

// Criando uma lista de usuários
const userlist = [
  {
    id: 1,
    name: "Vilson Padilha Neto",
    username: "vilsonneto",
    password: "#Batata123",
    age: 24,
    hasBeard: true,
    friendList: ["Alessandra", "Eduardo", "Luiz", "Lorena", "Thiago", "Wesley"],
    pet: {
      name: "Lady",
      specie: "cat",
    },
  },
  {
    id: 2,
    name: "Eduardo Marinho",
    username: "vilsonneto",
    password: "#Batata123",
    age: 24,
    hasBeard: true,
    friendList: ["Alessandra", "Eduardo", "Luiz", "Lorena", "Thiago", "Wesley"],
    pet: {
      name: "Lady",
      specie: "cat",
    },
  },
];

// user.name
// user["name"]
// user.friendList[3]

// user.username = "golimar";
// user["username"] = "golimar2";
// user.hasComputer = false;
// user["hasComputer"] = true;

// user.pet
// user.pet.name
// user.pet.name = "Roger"

// delete user.hasBeard;

function addFriend(newFriend) {
  if (user.friendList.includes(newFriend)) {
    return `${newFriend} já foi adicionado a lista de amigos!`;
  } else if (user.friendList.length < 7) {
    user.friendList.push(newFriend);
    return `${newFriend} foi adicionado a lista de amigos!`;
  }

  return "O limite de amigos foi excedido!";
}

addFriend("Lucas");
console.log(addFriend("Lucas"));
console.log(addFriend("Gustavo"));
console.log(addFriend("Gabriel"));
console.log(addFriend("Alex"));

console.log(user.username.toUpperCase());
