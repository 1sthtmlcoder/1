let quickHideEnabled = true;
document.addEventListener('keydown', function(event) {
console.log(event)
if((event.key == "f" || event.key == "F") && event.altKey) {
  event.preventDefault();
  quickHideEnabled = !quickHideEnabled
} else if ((event.key == "f" || event.key == "F") && quickHideEnabled == true) {
  document.write()
  window.location = "https://clever.com/oauth/authorize?channel=clever&client_id=4c63c1cf623dce82caac&confirmed=true&district_id=5f3db951b83bd1000106f62e&redirect_uri=https%3A%2F%2Fclever.com%2Fin%2Fauth_callback&response_type=code&state=522ae63bab7ee0f35d2cdddb016248f4af5778eeb3bc1a47149fe83fb12bf94b"
}
})


