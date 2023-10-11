let a = document.querySelector("button");
a.addEventListener("click", () => {
  fetch("http://localhost:8000/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
});
