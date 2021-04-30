let form = document.querySelector(".js-form");
let amount = document.querySelector(".js-amount");
let result = document.querySelector(".js-result");
let submitElement = document.querySelector(".js-submit");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let eur = 4.56;
    let pln = +amount.value;

    let finalResult = pln / eur;

    console.log(finalResult);
    result.innerText = finalResult.toFixed(2);

});
