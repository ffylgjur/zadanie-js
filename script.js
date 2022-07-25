const maintitle = document.getElementById("topic");
const createTitle = (myName) => {
    const titleDiv = document.createElement ("div");
    titleDiv.classList.add("titleDiv");



    const workTopic = document.createElement ("h1");
    workTopic.textContent = `Praca zaliczeniowa API`;
    
    const myData = document.createElement ("h2");
    myData.textContent = myName;

    maintitle.appendChild(myData);
    maintitle.appendChild(workTopic);

    maintitle.appendChild(titleDiv);

}

createTitle("Barbara Ślęczka");

const btn = document.getElementById("Btn");

btn.addEventListener("click",()=> location.href="https://pl.wikipedia.org/wiki/Lawenda")