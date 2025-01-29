export default class partyButton {
    buttonContainer = document.createElement("div");
    #buttonText = document.createElement("div");
    #button = document.createElement("button");

    #toggle = false;
    #intervalID;

    constructor() {
        this.buttonContainer.appendChild(this.#buttonText);
        this.buttonContainer.appendChild(this.#button);

        this.#buttonText.innerText = 'This is the party button:';
        this.#button.innerText = 'PARTY';

        this.#button.addEventListener("click", () => {
            this.#toggle = !this.#toggle;
            this.#intervalID = this.#toggle 
            ? setInterval(this.#changeBackground,500) 
            : clearInterval(this.#intervalID), document.body.style.backgroundColor = "rgb(255,255,255)";
        })
    }

        #changeBackground = () => {
            let colorString = this.#randomColorString();
            document.body.style.backgroundColor = colorString;
        }
      
       #randomColorString = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`
      };
}