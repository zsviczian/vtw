document.addEventListener('DOMContentLoaded', () => {
  // Function to set a cookie
  function setCookie(cookieName, cookieValue, expirationDays) {
      var d = new Date();
      d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  // Function to get a cookie value
  function getCookie(cookieName) {
      var name = cookieName + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookieArray = decodedCookie.split(';');
      for (var i = 0; i < cookieArray.length; i++) {
          var cookie = cookieArray[i];
          while (cookie.charAt(0) == ' ') {
              cookie = cookie.substring(1);
          }
          if (cookie.indexOf(name) == 0) {
              return cookie.substring(name.length, cookie.length);
          }
      }
      return "";
  }

  // Function to toggle font family and update cookie
  function toggleFontFamily() {
      const currentFont = getCookie("fontFamily");
      const newFont = currentFont === "default" ? "virgil" : "default"; 
      setCookie("fontFamily", newFont, 30);  
      document.body.classList.toggle("virgil");
  }

  // Create a button to toggle font family
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Font";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.borderColor = "#006666"; // Set border color
  toggleButton.className = "btn btn-outline-secondary"; // Bootstrap class
  toggleButton.onclick = toggleFontFamily;
  document.body.appendChild(toggleButton);

  // Check cookie on page load and apply font family if set
  const fontCookie = getCookie("fontFamily");
  if (fontCookie === "default") {
    document.body.classList.remove("virgil");
  } else {
    if(!document.body.classList.contains("virgil")) document.body.classList.add("virgil");
  }
});