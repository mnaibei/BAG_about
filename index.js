const feedbackForm = document.querySelector("form");

feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(feedbackForm);

  // Submit the form data to the server
  fetch("/feedback", {
    method: "POST",
    body: formData,
  }).then(() => {
    // Redirect to the success page
    window.location.href = "success.html";
  });
});
