const url = 'data/members.json';
const cards = document.querySelector('#members-container');

async function getMembersData() {
    try {
        console.log('Fetching data...');
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data fetched:', data);
        displayMembers(data.members);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const displayMembers = (members) => {
    console.log('Displaying members:', members);
    members.forEach((member) => {
        try {
            let card = document.createElement('section');
            let logo = document.createElement('img');
            let name = document.createElement('h2');
            let date = document.createElement('h3');
            let address = document.createElement('h4');
            let phone = document.createElement('h5');
            let website = document.createElement('a');
            let membershipLevel = document.createElement('h6');

            console.log('Creating card for:', member.name);

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

            cards.appendChild(card);
            console.log('Card appended for:', member.name);
        } catch (cardError) {
            console.error('Error creating card for member:', member.name, cardError);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    getMembersData();
});


