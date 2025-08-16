const getUserBtn = document.getElementById('getUserBtn');
const userInfoDiv = document.getElementById('userInfo');
const spinner = document.getElementById('spinner');

// Fetch multiple users (e.g., 5 users)
async function fetchRandomUsers() {
    try {
        spinner.style.display = 'block';
        userInfoDiv.style.display = 'none';
        userInfoDiv.innerHTML = '';

        // Fetch 5 users at once
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const users = data.results;

        spinner.style.display = 'none';
        userInfoDiv.style.display = 'block';

        // Build a list of users
        const usersList = users.map(user => `
            <div class="fadeIn userText" style="margin-bottom: 30px; border-bottom: 1px dashed #B2DFDB; padding-bottom: 20px;">
                <img src="${user.picture.large}" alt="Profile Picture" style="width:100px;height:100px;margin-bottom:10px;">
                <div>
                    <strong>First Name:</strong> ${user.name.first} <br>
                    <strong>Last Name:</strong> ${user.name.last} <br>
                    <strong>Email:</strong> ${user.email} <br>
                    <strong>City:</strong> ${user.location.city} <br>
                    <strong>Country:</strong> ${user.location.country}
                </div>
            </div>
        `).join('');

        userInfoDiv.innerHTML = usersList;
    } catch (error) {
        console.error("Error fetching users:", error);
        spinner.style.display = 'none';
        userInfoDiv.style.display = 'block';
        userInfoDiv.innerHTML = "<span style='color:red;'>Failed to fetch user data.</span>";
    }
}

getUserBtn.addEventListener('click', fetchRandomUsers);