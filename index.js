let data = {};
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((d) => {
    data = [...d];
    showData();
  });
const container = document.querySelector("#users");

function myElement(element, data) {
  let name = document.createElement(element);
  name.innerText = data;
  return name;
}

function showData() {
  data.forEach((user) => {
    let box = document.createElement("div");
    box.style.border = "1px solid black";
    box.style.margin = "10px";
    box.style.padding = "10px";
    box.style.width = "300px";
    box.appendChild(myElement("h1", user.name));
    box.appendChild(myElement("p", user.username));
    box.appendChild(myElement("p", user.email));
    box.appendChild(myElement("p", user.phone));
    container.appendChild(box);
  });
}
