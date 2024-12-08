document.getElementById("destination-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const destination = document.getElementById("destination").value;
  const cost = document.getElementById("cost").value;

  // Create a destination card
  const destinationCard = document.createElement("div");
  destinationCard.className = "destination-card";
  destinationCard.innerHTML = `
    <h2>${destination}</h2>
    <p>Estimated Cost: $${cost}</p>
    <button class="remove-btn">Remove</button>
  `;

  // Add event listener to the remove button
  destinationCard.querySelector(".remove-btn").addEventListener("click", function () {
    destinationCard.remove();
  });

  // Add card to the list
  document.getElementById("destinations-list").appendChild(destinationCard);

  // Clear form fields
  document.getElementById("destination-form").reset();
});
// Save to localStorage
function saveToLocalStorage(destination, cost) {
  const destinations = JSON.parse(localStorage.getItem("destinations")) || [];
  destinations.push({ destination, cost });
  localStorage.setItem("destinations", JSON.stringify(destinations));
}

// Load from localStorage
window.addEventListener("load", function () {
  const savedDestinations = JSON.parse(localStorage.getItem("destinations")) || [];
  savedDestinations.forEach(({ destination, cost }) => {
    // Reuse the logic to create cards
  });
});
function filterDestinations(keyword) {
  const cards = document.querySelectorAll(".destination-card");
  cards.forEach(card => {
    const destination = card.querySelector("h2").innerText.toLowerCase();
    if (destination.includes(keyword.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
