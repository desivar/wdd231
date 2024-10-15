// Fetch the data from the JSON file and display it
fetch('..data/members.json')
    .then(response => response.json())
    .then(data => displayDirectory(data));

// Function to display the data
function displayDirectory(data) {
    const directory = document.getElementById('directory');
    directory.innerHTML = data.map(company => `
        <div class="card">
            <img src="${company.image || 'default-image.png'}" alt="${company.name}" style="width:100%">
            <h3>${company.name}</h3>
            <p>${company.address}</p>
            <p>Phone: ${company.phone_number}</p>
            <a href="${company.website_url}" target="_blank">Visit Website</a>
        </div>
    `).join('');
}

// Toggle between grid and list views
document.getElementById('gridView').addEventListener('click', () => {
    document.getElementById('directory').className = 'grid';
});

document.getElementById('listView').addEventListener('click', () => {
    document.getElementById('directory').className = 'list';
});
