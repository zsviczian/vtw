document.addEventListener('DOMContentLoaded', () => {
  function setCookie(cookieName, cookieValue, expirationDays) {
      var d = new Date();
      d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

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

  const toggleButton = document.createElement("button");

  const setButtonFont = (font) => {
    if(font === "virgil") {
      toggleButton.classList.remove("virgil");
      toggleButton.classList.add("default");
    } else {
      toggleButton.classList.remove("default");
      toggleButton.classList.add("virgil");
    }
  }

  function toggleFontFamily() {
      const currentFont = getCookie("fontFamily");
      const newFont = (currentFont === "default") ? "virgil" : "default"; 
      setCookie("fontFamily", newFont, 30);  
      document.body.classList.toggle("virgil");
      setButtonFont(newFont);
  }


  toggleButton.textContent = "Toggle Font";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.borderColor = "#006666";
  toggleButton.className = "btn btn-outline-secondary";
  toggleButton.onclick = toggleFontFamily;
  document.body.appendChild(toggleButton);

  const fontCookie = getCookie("fontFamily");
  if (fontCookie === "default") {
    document.body.classList.remove("virgil");
    setButtonFont("default");
  } else {
    if(!document.body.classList.contains("virgil")) document.body.classList.add("virgil");
    setButtonFont("virgil");
  }
});