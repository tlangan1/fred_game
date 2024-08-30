import { treasure } from "./game_nodes.js";

export function showTreasure() {
  var treasureListElement = document.getElementById("treasure");
  treasureListElement.replaceChildren();

  if (treasure.length == 0) {
    var ele = document.createElement("li");
    ele.innerHTML = "No treasure found yet.";
    treasureListElement.appendChild(ele);
    return;
  }

  treasure.forEach((item) => {
    var div = document.createElement("div");
    var span = document.createElement("span");
    span.innerHTML = item;
    var image = document.createElement("img");
    image.src = `./assets/${item}.png`;
    div.appendChild(image);
    div.appendChild(span);

    var li = document.createElement("li");
    li.appendChild(div);
    treasureListElement.appendChild(li);
  });
}
