import "./partyButton.css";

export default class partyButton {
    buttonContainer = document.createElement("div");
    #buttonText = document.createElement("div");
    #button = document.createElement("button");


    #toggle = false;
    #intervalID;

    constructor() {
        this.buttonContainer.appendChild(this.#buttonText);
        this.buttonContainer.appendChild(this.#button);

        this.buttonContainer.classList.add('partyButton')

        this.#buttonText.innerText = 'This is the party button:';
        this.#button.innerText = 'PARTY';

        this.#button.addEventListener("click", () => {
            this.#toggle = !this.#toggle;

            if(this.#toggle) {
                this.#intervalID = setInterval(() => this.#changeBackground(), 500);
                this.#button.innerText = 'STOP PARTY';
            } else {
                clearInterval(this.#intervalID);
                document.body.style.backgroundColor = "rgb(255,255,255)";
                this.#button.innerText = 'PARTY';
            }
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