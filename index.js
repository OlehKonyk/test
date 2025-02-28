form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    if (!isValidEmail(userEmailField.value)) {
      userEmailField.classList.add("error");
      return;
    }
  
    const formData = new FormData(form);
  
    launchBtn.setAttribute("disabled", true);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        showGooseAnim();
        setTimeout(() => {
          location.reload();
        }, 3000);
      })
      .catch((error) => console.log("Sending form failed"));
  });

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }