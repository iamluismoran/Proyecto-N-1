document.getElementById("contactForm").addEventListener("submit", function (e) { e.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()
    const phone = document.getElementById("phone").value.trim()

    const successMessage = document.getElementById("successMessage");
    const userName = document.getElementById("userName");

    if (name.toLowerCase() === "ironhack") {
    errorMessage.textContent = "You cannot be Ironhack, because I am Ironhack.";
    errorMessage.classList.add("show");

    setTimeout(() => {
      errorMessage.classList.remove("show");
    }, 5000);

    return;
  }

    if (!name || !email || !message) {
        alert("Please fill in all required fields.")
        return
    }

    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number");
    return;
    }

    userName.textContent = name
    successMessage.classList.add("show")
    
    
    this.reset()
    
    setTimeout(() => {
    successMessage.classList.remove("show")
  }, 5000)
});