// Add your code here
function submitData(name, email) {
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  };

  return fetch("http://localhost:3000/users", configObj)
    .then(function (response) {
      return response.json();
    })
    .then((object) => {
      document.body.innerHTML += `<p><b>UserName:</b>${object.name}<br><b>E-mail:</b>${object.email}<br><b>UserId:</b>${object.id}</p>`;
    })
    .catch(function (error) {
      alert("Error! But do not forget, persistance powers passion!");
      document.body.innerHTML = error.message;
    });
}

submitData("Sukare", "sukare@sukare.com");
