const p = document.querySelector("p");
const h1 = document.querySelector("h1");
const btn = document.querySelector("div");

btn.addEventListener("click", (event) => {
    event.preventDefault();

    rollDice();
});



async function rollDice() {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice`)
        if (!response.ok) {
            throw new error("Network response was not ok")
        }

        const data = await response.json()
        console.log(data);
        h1.innerHTML = `Advice #${data.slip.id}`;
        p.innerHTML = `"${data.slip.advice}"`;
    } catch (error) {
        console.log(error);
        alert(error);
    }
}