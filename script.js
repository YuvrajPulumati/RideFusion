// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Simulate booking rides across multiple services
    let rideDetails = document.getElementById("ride-details");

    setTimeout(() => {
        rideDetails.innerHTML = `
            <h3>Best Option Found</h3>
            <p>Service: <strong>Uber</strong></p>
            <p>Estimated Time: <strong>5 mins</strong></p>
            <p>Cost: <strong>$10</strong></p>
            <p>Other bookings are being canceled...</p>
        `;
    }, 2000); // Simulate a 2-second delay for finding the best ride
});

function confirmBooking() {
    alert("Your ride is confirmed with Uber. Other bookings have been canceled.");
    window.location.href = "index.html"; // Redirect back to the homepage
}
