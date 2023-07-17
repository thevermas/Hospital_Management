function toggleDetails(header) {
  const description = header.nextElementSibling;
  description.style.display = description.style.display === 'none' ? 'block' : 'none';
}
function redirectToLoginPage() {
  window.location.href = "login.html";
}
function redirectToSignUp() {
  window.location.href = "signup.html";
}