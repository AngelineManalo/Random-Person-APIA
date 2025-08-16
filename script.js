const getUserBtn = document.getElementById('getUserBtn');
const userInfoDiv = document.getElementById('userInfo');
const spinner = document.getElementById('spinner');

async function fetchRandomUser() {
    try {
        // Show spinner and hide user info
        spinner.style.display = 'block';
        userInfoDiv.style.display = 'none';
        userInfoDiv.innerHTML = '';

        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        const profilePicture = user.picture.large;
        const firstName = user.name.first;
        const lastName = user.name.last;
        const email = user.email;
        const city = user.location.city;
        const country = user.location.country;

        // Hide spinner
        spinner.style.display = 'none';

        // Show user info inside the box
        userInfoDiv.style.display = 'block';
        userInfoDiv.innerHTML = `
            <img src="${profilePicture}" alt="Profile Picture">
            <div class="fadeIn userText">
                <strong>First Name:</strong> ${firstName} <br>
                <strong>Last Name:</strong> ${lastName} <br>
                <strong>Email:</strong> ${email} <br>
                <strong>City:</strong> ${city} <br>
                <strong>Country:</strong> ${country}
            </div>
        `;
    } catch (error) {
        console.error("Error fetching user:", error);
        spinner.style.display = 'none';
        userInfoDiv.style.display = 'block';
        userInfoDiv.innerHTML = "<span style='color:red;'>Failed to fetch user data.</span>";
    }
}

getUserBtn.addEventListener('click', fetchRandomUser);
