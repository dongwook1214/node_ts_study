const logoutButton = document.querySelector("button");

button.addEventListener("click", logOut);

async function logOut() {
  const req = {
    id: id.value,
    password: password.value,
  };
  let fetchResponse = await fetch("/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  let responseData = await fetchResponse.json();
  alert(responseData["message"]);
  location.href = "/login";
}
