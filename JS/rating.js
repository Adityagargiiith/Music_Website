const ratingForm = document.querySelector("#rating-form");
const post = document.querySelector(".post");
const editBtn = document.querySelector("#edit-btn");

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usernameValue = document.querySelector('input[name="username"]').value;
  const ratingValue = document.querySelector('input[name="rate"]:checked').value;
  const commentValue = document.querySelector('textarea[name="comment"]').value;

  document.querySelector("#username").textContent = usernameValue;
  document.querySelector("#rating").textContent = ratingValue;
  document.querySelector("#comment").textContent = commentValue;

  ratingForm.style.display = "none";
  post.style.display = "block";
});

editBtn.addEventListener("click", () => {
  post.style.display = "none";
  ratingForm.style.display = "block";
});
