
function equipmentLoop() {

  alert("Following this alert will be a list equipment you may use as a forceful protester. You will only be shown this list once, remember which piece of equipment you would like to use from the list and enter that selection when prompted.")
  var equipment = ["Spray Paint", "Umbrella", "Brick", "Gas Mask", "Telegram", "Camera"];
  var i;
  for (i = 0; i < equipment.length; i++) {
    alert(equipment[i]);
  }
  equipmentInput = prompt("Enter your Equipment choice.")
  if (equipmentInput === "Spray Paint" || equipmentInput === "Umbrella" || equipmentInput === "Brick" || equipmentInput === "Gas Mask" || equipmentInput === "Telegram" || equipmentInput === "Camera") {
      alert("You chose: " + equipmentInput)
    } else {
      alert("That was not an equipment choice you were given. Game over, you lose...") + Environment.Exit(0);
    }
};

