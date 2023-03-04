let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Whome do you love to??");
    if(!myName)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName}, Loves You More**`;
    } 
  }

  myButton.onclick = () => {
    setUserName();
  };