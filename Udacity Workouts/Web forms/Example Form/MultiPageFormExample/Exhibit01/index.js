let currentLayer = "page1";

function showLayer(layer) {
  hideLayer(currentLayer);
  document.getElementById(layer).style.visibility = "visible";
  currentLayer = layer;
}

function hideLayer(layer) {
  document.getElementById(layer).style.visibility = "hidden";
}

function showwValues(form) {
  let values = "";
  let formLength = form.length - 1;
}
