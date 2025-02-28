form.addEventListener("submit", function (e) {
    e.preventDefault();
  
   
  
    const formData = new FormData(form);
  
    launchBtn.setAttribute("disabled", true);
  
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {})
      .catch((error) => console.log("Sending form failed"));
  });

 