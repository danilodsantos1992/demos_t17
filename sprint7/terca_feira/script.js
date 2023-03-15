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

//------------------------ / Sprint 7 - Segunda/ ------------------------------

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

// const buttonRegister = document.querySelector("#registe-button");

// buttonRegister.addEventListener("click", function () {
//   console.log("Houve um clique!");
//   register("golimar", "Batata123", "JS");
//   removeUsersSection();
//   createUsersSection(userlist);
// });

function removeUsersSection() {
  const usersSection = document.querySelector("#users");
  usersSection.remove();
}

const buttonsFilter = document.querySelectorAll(".filter-button");

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

//------------------------ / Sprint 7 - Terça / ------------------------------

const testSection = document.querySelector("#test");
// console.log(testSection);

const classSectionTest = "test2";

testSection.insertAdjacentHTML(
  "afterend",
  `
  <section class="${classSectionTest}">
      <h2>Teste 2</h2>
  </section>
  `
);

const buttonRegister = document.querySelector("#registe-button");

buttonRegister.addEventListener("click", function () {
  createForm();
});

function createForm() {
  const sectionRegister = document.querySelector("#register-section");
  console.log(sectionRegister);

  if (sectionRegister === null) {
    main.insertAdjacentHTML(
      "beforebegin",
      `
    <section id='register-section'></section>
  `
    );

    document.querySelector("#register-section").insertAdjacentHTML(
      "afterbegin",
      `
    <form class="form-register">
      <div class="input-container">
        <label for="username">Username:</label>
        <input type="text" name="username" id="username" required />
      </div>
      <div class="input-container">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div class="input-container">
        <label for="favorite-language">Favorite language:</label>
        <select name="language" id="favorite-language" required>
          <option value="JS">JS</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  `
    );

    document
      .querySelector("#register-section")
      .insertAdjacentHTML("afterbegin", `<h2>Register User</h2>`);

    const formRegister = document.querySelector(".form-register");
    formRegister.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const language = document.getElementById("favorite-language").value;

      register(username, password, language);
      removeUsersSection();
      createUsersSection(userlist);

      const section = document.querySelector("#register-section");
      section.remove();
    });
  }
}

// main.style = `
//   background-color: #ffffff5e;
// `;
