const url = 'data/members.json';
const cards = document.querySelector('#members-container');

async function getMembersData() {
    const response = await fetch(url); //Store the response from the fetch() method
    const data = await response.json(); //Convert the response to a JSON object
    displayMembers(data.members); //Calling the function to display the members
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let name = document.createElement('h2');
        let date = document.createElement('h3');
        let address = document.createElement('h4');
        let phone = document.createElement('h5');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('h6');

        // Build the image element by setting attributes using setAttribute()
        logo.setAttribute('src', member.imageUrl);
        logo.setAttribute('alt', `Logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', '150');

        website.href = member.websiteUrl; 
        website.target = '_blank';

        // Add text content to the heading element
        name.textContent = `${member.name}`;
        date.textContent = `Since ${member.date}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;
        website.textContent = `${member.website}`;
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;

        // Add elements to the card section
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membershipLevel);

        // Add tthe card section to the #cards element
        cards.appendChild(card);

    });
}

// Toogle view
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('#members-container');

gridButton.addEventListener('click', () => {
    cards.classList.remove('list');
    cards.style.display = 'grid';
    cards.style.flexDirection = 'initial';
    cards.style.alignItems = 'initial';
});

listButton.addEventListener('click', () => {
    cards.classList.add('list');
    cards.style.display = 'flex';
    cards.style.flexDirection = 'column';
    cards.style.alignItems = 'center';
});


//add event listener to menu button and nav links
const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

//add content to footer
const year = new Date().getFullYear();
const lastModified = document.lastModified;
const copyrightText = `&copy; ${year} Desire Vargas|Roatan, Honduras.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;