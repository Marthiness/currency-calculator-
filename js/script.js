{
    const form = document.querySelector(".js-form");
    const amount = document.querySelector(".js-amount");
    const result = document.querySelector(".js-result");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const eur = 4.56;
        const pln = +amount.value;

        const finalResult = pln / eur;

        console.log(finalResult);
        result.innerText = finalResult.toFixed(2);

    });
}
