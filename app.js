const saveButton = document.getElementById('save-button');
const stockLevelInput = document.getElementById('stock-level');
const alertMessage = document.getElementById('alert-message');
const productNameAlert = document.getElementById('product-name-alert');

saveButton.addEventListener('click', () => {
    const stockLevel = parseInt(stockLevelInput.value);
    const productName = document.getElementById('product-name').value;

    if (stockLevel < 10) {
        alertMessage.classList.remove('hidden');
        productNameAlert.textContent = productName;
    } else {
        alertMessage.classList.add('hidden');
    }
});

