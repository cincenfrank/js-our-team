const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

const teamContainer = document.querySelector(".team-container");
const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const imageInput = document.getElementById("image");
const addMemberButton = document.getElementById("addMemberButton");
initializeTeamList(team);
addMemberButton.addEventListener("click", onAddMemberClick);

/**
 * Callback for add button click.
 * If it is possible to create a valid employee record, adds it to team list and adds the employee card to HTML
 * If it is not possible to generate a valid employee returns an alert to the user
 */
function onAddMemberClick() {
  const employee = createEmployeeFromInput();
  if (employee.name) {
    team.push(employee);
    const employeeCard = createTeamCard(
      employee.name,
      employee.role,
      employee.image
    );
    teamContainer.appendChild(employeeCard);
  } else {
    alert("Input fields cannot be empty.");
  }
}

/**
 * Generate an employee object from form input
 * If any input is empty, returns an empty object
 * @returns {object}
 */
function createEmployeeFromInput() {
  if (
    nameInput.value !== "" &&
    roleInput.value !== "" &&
    imageInput.value !== ""
  ) {
    return {
      name: nameInput.value,
      role: roleInput.value,
      image: imageInput.value,
    };
  }
  return {};
}

/**
 * Loops the given list and creates and appends team cards to team container
 * @param {[object]} teamList
 */
function initializeTeamList(teamList) {
  for (let i = 0; i < teamList.length; i++) {
    const employee = teamList[i];
    const teamCard = createTeamCard(
      employee.name,
      employee.role,
      employee.image
    );
    teamContainer.appendChild(teamCard);
  }
}

/**
 * Creates and returns a card element
 * @param {string} name
 * @param {string} role
 * @param {string} image
 * @returns {HTMLDivElement}
 */
function createTeamCard(name, role, image) {
  // Team card
  const teamCard = document.createElement("div");
  teamCard.classList.add("team-card");

  // Card Image
  const cardImage = document.createElement("div");
  cardImage.classList.add("card-image");
  const img = document.createElement("img");
  img.src = "img/" + image;
  img.alt = name;
  cardImage.appendChild(img);

  // Card Text
  const cardText = document.createElement("div");
  cardText.classList.add("card-text");
  const nameElement = document.createElement("h3");
  nameElement.textContent = name;
  const roleElement = document.createElement("p");
  roleElement.textContent = role;

  cardText.appendChild(nameElement);
  cardText.appendChild(roleElement);

  // Append card image and card text to team card
  teamCard.appendChild(cardImage);
  teamCard.appendChild(cardText);

  return teamCard;
}
