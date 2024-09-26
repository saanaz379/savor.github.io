function reserveItem(restaurantName) {
    document.getElementById("confirmation-message").textContent = `You have reserved food from ${restaurantName}. Please pick it up within the next hour!`;
    document.getElementById("restaurant-list").style.display = 'none';
    document.getElementById("confirmation").style.display = 'block';
}

function goBack() {
    document.getElementById("restaurant-list").style.display = 'flex';
    document.getElementById("confirmation").style.display = 'none';
}
