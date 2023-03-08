// Lista de usuários
const userlist = [
  {
    username: "vilsonneto",
    password: "#Batata123",
    following: [],
  },
  {
    username: "edu",
    password: "#Batata321",
    following: [],
  },
  {
    username: "ale",
    password: "@Gasparzinho731",
    following: [],
  },
  {
    username: "tk_dev",
    password: "@Gasparzinho731",
    following: [],
  },
];

// Função que cadastra novo usuário
function register(username, password) {
  if (username.length < 3) {
    return "O username precisa ter no mínimo 3 caracteres!";
  } else if (password.length < 7) {
    return "O password precisa ter no mínimo 7 caracteres!";
  }

  for (let i = 0; i < userlist.length; i++) {
    let currentUser = userlist[i];

    if (currentUser.username === username) {
      return `O username ${username} já existe!`;
    }
  }

  const User = {
    username: username,
    password: password,
    following: [],
    follow: function (username) {
      for (let i = 0; i < User.following.length; i++) {
        if (User.following[i] === username) {
          return `Você já segue ${username}!`;
        }
      }

      for (let i = 0; i < userlist.length; i++) {
        if (userlist[i].username === username) {
          User.following.push(username);
          return `Você começou a seguir ${username}!`;
        }
      }

      return `O username ${username} não existe!`;
    },
  };

  userlist.push(User);
  return "Usuário cadastrado com sucesso!";
}

console.log(register("golimar", "Batata123"));

// const golimar = userlist[4];
// console.log(golimar.follow("vils"));
// console.log(golimar.follow("edu"));

// Função para usuário já cadastrado realizar o login
function login(username, password) {
  for (let i = 0; i < userlist.length; i++) {
    if (
      userlist[i].username === username &&
      userlist[i].password === password
    ) {
      return userlist[i];
    }
  }

  console.log("Username ou senha incorretos.");
}

const ale = login("ale", "@Gasparzinho731");
const golimar = login("golimar", "Batata123");
// const golimar = userlist[4]
golimar.follow("ale");

golimar.password = "Batatinha";
// userlist[4].password = "Batatinha"

golimar.username = "Batatinha";

// console.log(userlist);
// console.log(golimar);

// Função para pesquisar perfil de um usuário
function search(username) {
  let user = {};

  for (let i = 0; i < userlist.length; i++) {
    if (userlist[i].username === username) {
      user.username = userlist[i].username;
      user.following = userlist[i].following;
    }
  }

  return user;
}

const edu = search("edu");
edu.username = "edu_marinho";
console.log(edu);
// console.log(userlist);
