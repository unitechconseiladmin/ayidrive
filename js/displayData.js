function displayUsers() {
  const usersRef = database.ref('chauffeurs');  // Reference to 'chauffeurs' in Firebase
  
  // Get all users from Firebase
  usersRef.once('value', function(snapshot) {
      const usersData = snapshot.val();
      
      const usersList = document.getElementById('chauffeur');
      usersList.innerHTML = ''; // Clear the list before adding new data

      if (usersData) {
          // Loop through each user and display them
          Object.keys(usersData).forEach(userId => {
              const user = usersData[userId];
              
              const div = document.createElement('div');
              div.innerHTML = `
                  <strong>Nom:</strong> ${user.Nom} <br>
                  <strong>Numéro:</strong> ${user.Numero} <br>
                  <strong>Adresse:</strong> ${user.Adresse} <br>
                  <strong>Localisation:</strong> ${user.Localisation} <br>
                  <strong>Couleur de la moto:</strong> ${user.MotoCouleur} <br>
                  <strong>Numéro de plaque:</strong> ${user.Plaque} <br>
                  <hr>
                  <div>
                      <button>Whatsapp</button>
                      <button>Bip</button>
                      <button>Sms</button>
                  </div>
              `;
              usersList.appendChild(div); // Append the div to the usersList container
          });
      } else {
          usersList.innerHTML = '<p>Aucun chauffeur enregistré.</p>'; // If no data is found
      }
  });
}

// Call displayUsers function to load users initially
displayUsers();

// Optionally, refresh the list every 5 seconds or on new user submission
setInterval(displayUsers, 5000);
