window.addEventListener("DOMContentLoaded", () => {
  const save = document.getElementById("save");
  const cancel = document.getElementById("cancel");
  

  save.onclick = saveRegister;
  cancel.onclick = cancelRegister;
  loadName();
});

const loadName = () =>{
    const main = document.querySelector("main");
    const registerName = localStorage.getItem("userName")
    if (registerName) {
        const p = document.createElement("p")
        p.innerHTML = registerName;

        main.appendChild (p);
    } 
}

const saveRegister = (e) => {
  e.preventDefault();
  const textInput = document.getElementById("nome");

  const name = textInput.value;
  console.log(name);
  localStorage.setItem("userName", name);
};

const cancelRegister = (e) => {
  e.preventDefault();
  localStorage.removeItem("userName");
};
