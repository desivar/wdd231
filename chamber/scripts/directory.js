// Fetch the data from the JSON file and display it
// Fetch the data from the JSON file and display it
fetch('../data/members.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => displayDirectory(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

// Function to display the data
function displayDirectory(data) {
    const container = document.querySelector('#members-container');
    data.members.forEach(member => {
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
}
