const userlist = [
  {
    username: "vilsonneto",
    password: "#Batata123",
    following: ["lore", "lp.reis", "wesley.matos"],
  },
  {
    username: "lore",
    password: "Batatinha123",
    following: ["vilsonneto", "ale"],
  },
  {
    username: "ale",
    password: "@Gasparzinho731",
    following: ["tk_dev", "wesley.matos"],
  },
  {
    username: "tk_dev",
    password: "@Gasparzinho731",
    following: ["lore", "vilsonneto"],
  },
  {
    username: "wesley.matos",
    password: "Batatinha123",
    following: ["ale", "lp.reis"],
  },
  {
    username: "lp.reis",
    password: "@Gasparzinho731",
    following: ["lore", "tk_dev"],
  },
];

// Elementos Base

const main = document.querySelector("main");

// Funções que criam elementos

function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.id = user.username;

  // Opções de estilização
  userCard.className = "user-card";
  // userCard.style = `
  //   width: 200px;
  //   background-color: #eee;
  // `;

  const userImage = document.createElement("img");
  userImage.src = "./assets/rubber-duck.jpg";
  // userImage.src = user.image;
  userImage.alt = "Rubber duck";
  userCard.appendChild(userImage);

  const usernameText = document.createElement("p");
  usernameText.innerText = user.username;
  userCard.appendChild(usernameText);

  const followingList = document.createElement("ul");

  for (let i = 0; i < user.following.length; i++) {
    const followingItem = document.createElement("li");
    followingItem.innerText = user.following[i];
    followingList.appendChild(followingItem);
  }

  userCard.appendChild(followingList);

  return userCard;
}

// const vilsonCard = createUserCard(userlist[0]);
// main.appendChild(vilsonCard);

function createUsersSection() {
  const userSection = document.createElement("section");
  userSection.id = "users";

  for (let i = 0; i < userlist.length; i++) {
    const card = createUserCard(userlist[i]);
    userSection.appendChild(card);
  }

  main.appendChild(userSection);
}

// createUsersSection();

//------------------------ / Esquenta Sprint 7 / ------------------------------

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

register("golimar", "Batata123");

createUsersSection();
