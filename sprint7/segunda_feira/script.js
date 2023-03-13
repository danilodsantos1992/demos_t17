const userlist = [
  {
    username: "vilsonneto",
    password: "#Batata123",
    following: ["lore", "lp.reis", "wesley.matos"],
    favoriteLanguage: "JS",
  },
  {
    username: "lore",
    password: "Batatinha123",
    following: ["vilsonneto", "ale"],
    favoriteLanguage: "Java",
  },
  {
    username: "ale",
    password: "@Gasparzinho731",
    following: ["tk_dev", "wesley.matos"],
    favoriteLanguage: "Python",
  },
  {
    username: "tk_dev",
    password: "@Gasparzinho731",
    following: ["lore", "vilsonneto"],
    favoriteLanguage: "Java",
  },
  {
    username: "wesley.matos",
    password: "Batatinha123",
    following: ["ale", "lp.reis"],
    favoriteLanguage: "Python",
  },
  {
    username: "lp.reis",
    password: "@Gasparzinho731",
    following: ["lore", "tk_dev"],
    favoriteLanguage: "JS",
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

  const favoriteLanguage = document.createElement("p");
  favoriteLanguage.innerText = user.favoriteLanguage;
  favoriteLanguage.className = "language";
  userCard.appendChild(favoriteLanguage);

  // Adicionando função ao evento
  userCard.addEventListener("dblclick", function () {
    const isSelected = userCard.classList.contains("selected");
    console.log(isSelected);
    // if (isSelected) {
    //   userCard.classList.remove("selected");
    // } else {
    //   userCard.classList.add("selected");
    // }

    userCard.classList.toggle("selected", isSelected === false);
  });

  return userCard;
}

// const vilsonCard = createUserCard(userlist[0]);
// main.appendChild(vilsonCard);

function createUsersSection(users) {
  const userSection = document.createElement("section");
  userSection.id = "users";

  for (let i = 0; i < users.length; i++) {
    const card = createUserCard(users[i]);
    userSection.appendChild(card);
  }

  main.appendChild(userSection);
}

createUsersSection(userlist);

//------------------------ / Sprint 7 / ------------------------------

function register(username, password, favoriteLanguage) {
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
    favoriteLanguage: favoriteLanguage,
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

// register("golimar", "Batata123", "JS");

const buttonRegister = document.querySelector("#registe-button");

buttonRegister.addEventListener("click", function () {
  console.log("Houve um clique!");
  register("golimar", "Batata123", "JS");
  removeUsersSection();
  createUsersSection(userlist);
});

// Função que remove a seção users
function removeUsersSection() {
  const usersSection = document.querySelector("#users");
  usersSection.remove();
}

const buttonsFilter = document.querySelectorAll(".filter-button");

// Função que filtra o userlist com base na tecnologia favorita
function filterCards(techName) {
  if (techName === "All") {
    return userlist;
  }

  let usersFiltered = [];

  for (let i = 0; i < userlist.length; i++) {
    if (userlist[i].favoriteLanguage === techName) {
      usersFiltered.push(userlist[i]);
    }
  }

  return usersFiltered;
}

// const JSCards = filterCards("JS");
// console.log(JSCards);

for (let i = 0; i < buttonsFilter.length; i++) {
  buttonsFilter[i].addEventListener("click", function () {
    const tech = buttonsFilter[i].innerText;
    const cardsFiltered = filterCards(tech);

    removeUsersSection();
    createUsersSection(cardsFiltered);
  });
}
