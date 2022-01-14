function imc(weight, height) {
    return weight / (height * height);
}

function interpretIMC(nb) {

    if (nb < 18.5)
        return "underweight";

    if (nb >= 18.5 && nb <= 24.9)
        return "Healthy";

    if (nb >= 25.0 && nb <= 29.9)
        return "Overweight";

    if (nb >= 30.0)
        return "obese";

}

module.exports = {
    imc,
    interpretIMC
}