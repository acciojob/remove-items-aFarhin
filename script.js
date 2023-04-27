//your JS code here. If required.
 // script.js file
function removeColor() {
  const select = document.getElementById("colorSelect");
  const selectedIndex = select.selectedIndex;
  select.options[selectedIndex].remove();
}
