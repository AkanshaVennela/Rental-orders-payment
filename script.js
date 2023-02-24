const rentalForm = document.getElementById('rental-form');
const orderSummarySection = document.getElementById('order-summary');
const customerDetailsSection = document.getElementById('customer-details');
const paymentSection = document.getElementById('payment');
const paymentMethodSelect = document.getElementById('payment-method');
const onlinePaymentDiv = document.getElementById('online-payment');
const codPaymentDiv = document.getElementById('cod-payment');
const submitButton = document.getElementById('submit-btn');


customerDetailsSection.classList.add('hidden');
// paymentSection.classList.remove('hidden');
orderSummarySection.classList.remove('hidden');
document.getElementById('submit-btn').classList.remove('hidden');

orderSummarySection.addEventListener('click', (event) => {
	event.preventDefault();
    customerDetailsSection.classList.remove('hidden');
	orderSummarySection.classList.add('hidden');
	
});

document.getElementById('detailsButton').addEventListener('click', (event) => {
	event.preventDefault();
	customerDetailsSection.classList.add('hidden');
	paymentSection.classList.remove('hidden');
});

paymentMethodSelect.addEventListener('change', () => {
	if (paymentMethodSelect.value === 'online') {
        document.getElementById('submit-btn').classList.remove('hidden');
		onlinePaymentDiv.classList.remove('hidden');
		codPaymentDiv.classList.add('hidden');
	} else {
        document.getElementById('submit-btn').classList.add('hidden');
		onlinePaymentDiv.classList.add('hidden');
		codPaymentDiv.classList.remove('hidden');
	}
});

submitButton.addEventListener('click', (event) => {
	event.preventDefault();
	const paymentMethod = paymentMethodSelect.value;
    // if(paymentMethod == 'cod') {
    //     document.getElementById('submit-btn').classList.add('hidden');
	// 	// alert('Payment successful!');
	// }
	if (paymentMethod === 'online') {
		const cardNumber = document.getElementById('card-number').value;
		const expiryDate = document.getElementById('expiry-date').value;
		const cvv = document.getElementById('cvv').value;
		if (cardNumber && expiryDate && cvv) {
			alert('Payment successful!');
		} else {
			alert('Please fill in all the required fields.');
		}
	}else {
        // document.getElementById('submit-btn').classList.add('hidden');
		alert('Payment successful!');
	}
});
