const userProfile = {
  name: "Alibek",
  birthYear: 2007,
  birthMonth: 11,
  isDeveloper: true,
  hobbies: ["coding", "football", "music"]
};

function showProfile() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  const monthsOld = (currentYear - userProfile.birthYear) * 12 + (currentMonth - userProfile.birthMonth);
  const age = Math.floor(monthsOld / 12);
  const hobbiesCount = userProfile.hobbies.length;

  console.log(userProfile);
  console.log("Age:", age);
  console.log("Months old:", monthsOld);
  console.log("Hobbies count:", hobbiesCount);

  document.getElementById("profileInfo").innerHTML = "<p>Name: " + userProfile.name + "</p>" +
    "<p>Age: " + age + "</p>" +
    "<p>Months old: " + monthsOld + "</p>" +
    "<p>Hobbies: " + hobbiesCount + "</p>";
}

showProfile();

const form = document.getElementById("profileForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const birthYear = document.getElementById("birthYear").value;
  const birthMonth = document.getElementById("birthMonth").value;

  userProfile.name = username;
  userProfile.birthYear = Number(birthYear);
  userProfile.birthMonth = Number(birthMonth);

  showProfile();
});

const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function(){
  const text = itemInput.value;

  if(text === ""){
    alert("Please type something first");
    return;
  }

  const newItem = document.createElement("li");   
  newItem.textContent = text;                    
  itemList.appendChild(newItem);                  

  itemInput.value = "";      
});

removeBtn.addEventListener("click", function(){
  const lastItem = itemList.lastElementChild;  

  if(lastItem !== null){
    itemList.removeChild(lastItem); 
  }
});