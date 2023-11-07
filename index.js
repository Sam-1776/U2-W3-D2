window.addEventListener("DOMContentLoaded", () => {
  const save = document.getElementById("save");
  const cancel = document.getElementById("cancel");
  

  save.onclick = saveRegister;
  cancel.onclick = cancelRegister;
  loadName();
  passedTime();
});


const passedTime = () =>{
    let times = 0;
    const timer = sessionStorage.getItem("timer")
    let counter = parseInt(timer);
    console.log( typeof timer);
    
    
    if (timer === null) {
        sessionStorage.setItem("timer" , times);
        startTime(times);
    } else{
        startTime(counter)
    }

}


const startTime =(x)=>{
    setInterval(() => {
        x++
        sessionStorage.setItem("timer", x);
    }, 1000);
}

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
  loadName();
};

const cancelRegister = (e) => {
  e.preventDefault();
  localStorage.removeItem("userName");
  const item = document.querySelector("p");
  item.remove();
};
