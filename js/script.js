{
    const resultElement = document.querySelector(".js-result");
    const conditionElement = document.querySelector(".js-condition");


    const calculateResult = (weight, height) => {
        return weight / (height / 100) ** 2;
    }

    const changeText = (bmi) => {

        if (bmi >= 25.0 && bmi <= 29.9)
            return "nadwaga";
        else if (bmi >= 18.5 && bmi <= 24.9)
            return "waga prawidłowa";
        else if (bmi >= 30.0 && bmi <= 100.0)
            return "otyłość I stopnia";
        else
            return "wychudzenie";
    }


    const init = () => {
        const formElement = document.querySelector(".js-form");
        const weightElement = document.querySelector(".js-weight");
        const heightElement = document.querySelector(".js-height");

        formElement.addEventListener("submit", (event) => {
            event.preventDefault();


            let bmi = calculateResult(weightElement.value, heightElement.value);
            conditionElement.innerText = changeText(bmi);
            resultElement.innerText = `${bmi.toFixed(2)}`;

        });

    }
    init();
}