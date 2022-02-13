window.addEventListener('load', () => {
    document.getElementById('phone-minus').addEventListener('click', () => {
        plusMinus("phone", "minus", 1219);
    });
    document.getElementById('phone-plus').addEventListener('click', () => {
        plusMinus("phone", "plus", 1219);
    });
    document.getElementById('case-minus').addEventListener('click', () => {
        plusMinus("case", "minus", 59);
    });
    document.getElementById('case-plus').addEventListener('click', () => {
        plusMinus("case", "plus", 59);
    });
});

function plusMinus(itemName, operator, perItemValue) {
    const input = document.getElementById(`${itemName}-input`);
    const itemValue = document.getElementById(`${itemName}-value`);

    if (operator == "minus" && parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        itemValue.innerText = parseInt(itemValue.innerText) - perItemValue;
    } else if (operator == "plus") {
        input.value = parseInt(input.value) + 1;
        itemValue.innerText = parseInt(itemValue.innerText) + perItemValue;
    }

    totalAmount();
}

function totalAmount() {
    const phoneValue = document.getElementById('phone-value');
    const caseValue = document.getElementById('case-value');
    const subTotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    subTotal.innerText = parseInt(phoneValue.innerText) + parseInt(caseValue.innerText);
    tax.innerText = parseInt(subTotal.innerText) / 10;
    total.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}