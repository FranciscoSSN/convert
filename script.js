// Cotação das moedas.
const USD = 5.76;
const EUR = 6.23;
const GBP = 7.50;

// Guardando os elementos do formulário.
const inputAmount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.querySelector("#description");
const result = document.querySelector("#result");

// Manipulando o input amount para receber somente números.
inputAmount.addEventListener("input", () => {
    
    inputAmount.value;

    const hasCharacterRegex = /\D+/g;

    inputAmount.value = inputAmount.value.replace(hasCharacterRegex, "");
})

// Capturar o evento de submit (enviar) do formulário.
form.addEventListener("submit", (event) => {
    event.preventDefault();

    switch(currency.value) {
        case "USD":
            convertCurrency(inputAmount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(inputAmount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(inputAmount.value, GBP, "£")
            break;
        
    }
})

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo cotação da moeda
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calcula o total
        let total = (amount * price).toFixed(2);

        // Formatar valor total
        total = formatCurrencyBRL(total)

        // Verifica se o resultado não é um número
        if(isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        // Exibe o total
        result.textContent = `R$ ${total}`;


        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")

    } catch (error) {
        // Remove a classe do footer removendo ele da tela.
        footer.classList.remove("show-result")
        
        console.log(error);
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }
}

// Formatando a moeda para Real Brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}