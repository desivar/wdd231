// Function to fetch members data
const getMembersData = async () => {
    try {
        const response = await fetch('chamber/data/members.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.members;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
};

// Function to display directory members
const displayDirectory = (members) => {
    const container = document.querySelector('#directory');
    container.innerHTML = ''; // Clear existing content

    members.forEach(member => {
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let date = document.createElement('h3');
        let address = document.createElement('h4');
        let phone = document.createElement('h5');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('h6');

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');
        website.href = member.website_url;
        website.target = '_blank';
        name.textContent = member.name;
        date.textContent = `Since ${member.date}`;
        address.textContent = member.address;
        phone.textContent = member.phone_number;
        website.textContent = member.website_url;
        membershipLevel.textContent = `Membership Level: ${member.membership_level}`;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);

        container.appendChild(card);
    });
};

// Function to toggle between grid and list views
const toggleView = (view) => {
    const container = document.querySelector('#directory');
    if (view === 'grid') {
        container.classList.add('grid');
        container.classList.remove('list');
    } else {
        container.classList.add('list');
        container.classList.remove('grid');
    }
};

// Event listeners for view toggle buttons
document.querySelector('#gridView').addEventListener('click', () => {
    toggleView('grid');
});
document.querySelector('#listView').addEventListener('click', () => {
    toggleView('list');
});

// Fetch and display the directory data on page load
document.addEventListener('DOMContentLoaded', async () => {
    const membersData = await getMembersData();
    if (membersData) {
        displayDirectory(membersData);
    }
});

