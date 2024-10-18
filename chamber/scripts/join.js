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
const copyrightText = `&copy; ${year} Desire Vargas|🪼Roatan, Honduras🪼.<br><span class ="last-modified">Last Modification: ${lastModified}</span>`;
const footerElement = document.getElementById('footer');
footerElement.innerHTML = copyrightText;


document.addEventListener('DOMContentLoaded', () => {
    const memberships = [
        {
            id: "modalNP",
            title: "Non-Profit Membership",
            cost: "Free",
            description: "This category is designed for organizations that wish to be part of the community without commercial purposes. It is ideal for NGOs, cooperatives, or community groups looking to support the ice cream industry in Rosario.",
            benefits: 
                ["Inclusion in the chamber of commerce directory.",
                    "Access to community events.",
                    "Opportunity to collaborate in non-profit initiatives.",
                    "Access to free informational materials and training."]
        },
        {
            id: "modalBronze",
            title: "Bronze Membership",
            cost: "500 USD / year",
            description: "The Bronze category is perfect for small businesses or entrepreneurs who want to be part of the ice cream business network, with access to basic resources and promotion within the community.",
            benefits: 
                ["Inclusion in the chamber\u2019s business directory.",
                    "Access to basic online training.",
                    "Participation in local industry events.",
                    "Discounts on products and services related to the ice cream industry."]
        },
        {
            id: "modalSilver",
            title: "Silver Membership",
            cost: "800 USD / year",
            description: "The Silver membership offers additional benefits for businesses seeking to increase their visibility and take advantage of better growth opportunities in the industry.",
            benefits: 
                ["All benefits of Bronze membership.",
                    "Featured promotion in the chamber's directory.",
                    "Priority participation in trade events and fairs.",
                    "Access to advanced training and strategic consulting.",
                    "Special promotions in the chamber's advertising campaigns."]
        },
        {
            id: "modalGold",
            title: "Gold Membership",
            cost: "1000 USD / year",
            description: "The Gold category is ideal for businesses that want to maximize their presence and get the most out of the chamber of commerce's resources. With a focus on growth and expansion, this category provides exclusive benefits.",
            benefits: 
                ["All benefits of Silver membership.",
                    "Personalized consulting for business growth.",
                    "Featured visibility in the chamber's advertising campaigns.",
                    "Exclusive access to networking opportunities and strategic alliances.",
                    "VIP invitations to ice cream industry events.",
                    "Priority in sponsorship opportunities."]
        }
    ]

    // Open Modal
    const openButtons = document.querySelectorAll('.learnMore');
    const membershipDetailsModal = document.getElementById('membership-details');


    openButtons.forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.parentNode;
            const membershipTitle = card.querySelector('h2').textContent;
            const membership = memberships.find(m => m.title === membershipTitle);
            displayMembershipsDetails(membership);

            membershipDetailsModal.classList.add('open');
        });
    });

    function displayMembershipsDetails(membership) {
        membershipDetailsModal.innerHTML = '';
        membershipDetailsModal.innerHTML = `

            <h2>${membership.title}<button id="closeButton">❌</button></h2>
            <h3>${membership.cost}</h3>
            <p><strong>Description</strong> <br>${membership.description}</p>
            <p><strong>Benefits</strong></p>
            <ul>
                ${membership.benefits.map(benefits => `<li>${benefits}</li>`).join('')}
            </ul>
        `;

        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', () => {
            membershipDetailsModal.classList.remove('open');
            membershipDetailsModal.close();
        });

        membershipDetailsModal.showModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const timestampInput = document.getElementById("timestamp");
    const currentTime = new Date();
    timestampInput.value = currentTime.toLocaleString();
});

document.addEventListener("DOMContentLoaded", function() {
    const membershipCards = document.querySelectorAll(".membership-cards div");
    membershipCards.forEach(card => card.classList.add("loaded"));
});





