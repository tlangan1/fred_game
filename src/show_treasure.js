import { treasure } from "./game_nodes.js";

export function showTreasure() {
  var treasureListElement = document.getElementById("treasure");
  treasureListElement.replaceChildren();

  if (treasure.length == 0) {
    var ele = document.createElement("li");
    ele.innerHTML = "No treasure found!";
    treasureListElement.appendChild(ele);
    return;
  }

  treasure.forEach((item) => {
    var ele = document.createElement("li");
    ele.innerHTML = item;
    treasureListElement.appendChild(ele);
  });
}
