const id = document.querySelector("#id");
const password = document.querySelector("#password");
const button = document.querySelector("button");

button.addEventListener("click", login);

async function login() {
  const req = {
    id: id.value,
    password: password.value,
  };
  let fetchResponse = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let responseData = await fetchResponse.json();
  if (responseData["succeed"]) {
    alert(responseData["message"]);

    location.href = "/";
  } else {
    alert(responseData["message"]);
  }
}
