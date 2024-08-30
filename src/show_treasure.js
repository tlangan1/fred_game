import { treasure } from "./game_nodes.js";

export function showTreasure() {
  var treasureListElement = document.getElementById("treasure");
  for (ele in treasureListElement.children) {
    ele.remove();
  }

  if (treasure.length == 0) {
    document.createElement("li").innerHTML = "No treasure yet";
    treasureListElement.appendChild(ele);
    return;
  }

  for (item in treasure) {
    document.createElement("li").innerHTML = item;
    treasureListElement.appendChild(ele);
  }
}
