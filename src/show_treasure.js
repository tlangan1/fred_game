import { treasure } from "./game_nodes.js";

export function showTreasure() {
  var treasureListElement = document.getElementById("treasure");
  treasureListElement.replaceChildren();

  if (treasure.length == 0) {
    document.createElement("li").innerHTML = "No treasure yet";
    treasureListElement.appendChild(ele);
    return;
  }

  treasure.forEach((item) => {
    var ele = document.createElement("li");
    ele.innerHTML = item;
    treasureListElement.appendChild(ele);
  });
}
