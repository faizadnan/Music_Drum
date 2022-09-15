
window.addEventListener("load", function () {
    const pads = document.querySelectorAll(".pads div");
    const sound = document.querySelectorAll(".sounds");
    const visuals = this.document.getElementById("Visuals");
    
    let color =["pink","red", "yellow","aqua","violet","darkgray"]

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sound[index].currentTime = 0;   
            sound[index].play();
            bubbles(index);
        })
    })

    const bubbles = (index) =>{

       let bubble = document.createElement("div");
        visuals.appendChild(bubble);
        bubble.style.backgroundColor = color[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function(){
            visuals.removeChild(bubble);
        })
    }

   
})
