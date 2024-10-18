// JSON data defined directly in the script
const membersData = 
        [
            { 
              "name": "The Roatan Chocolate Factory",
              "address": "Main Street, West End, Roatan",
              "phone": "9661-0813",
              "website": "https://theroatanchocolatefactory.com/in-store-menu",
              "image": "https://img1.wsimg.com/isteam/ip/2b7e3d0b-e14d-44a0-b845-2f5061238abe/logo/c3a2146e-ed12-4826-b519-a08b63177108.png/:/rs=w:366,h:80,cg:true,m/cr=w:366,h:80/qt=q:95",
              "membershipLevel": 3
            },
            {
              "name": "Bananarama Dive & Beach Resort",
              "address": "West Bay Beach Roatan",
              "phone": " 9456-3382",
              "website": "https://bananarama.com/",
              "image": "http://bananarama.com/wp-content/uploads/2019/06/200_bananarama_logo-shadow.png",
              "membershipLevel": 2
            },
            {
              "name": "Gumbalimba Park",
              "address": "West Bay, Roatan 3410",
              "phone": "9914-9196",
              "website": "https://gumbalimbapark.com/",
              "image": "https://images.squarespace-cdn.com/content/v1/5d25cb6ebea3f300010df370/1570571212610-NCYF8VIQDWPTHJCGZCXI/IMG_0001.JPG?format=500",
              "membershipLevel": 1
            },
            {
              "name": "RIMS Roatan Institute for Marine Sciences",
              "address": "sandy bay, Roatan 3410",
              "phone": " 2445-7636",
              "website": "https://www.roatanims.org/roatan-museum",
              "image": "https://static.wixstatic.com/media/0149d6_c88fd434d1ae4f989d68d9eb28af8d7e~mv2.png/v1/crop/x_99,y_711,w_2174,h_889/fill/w_319,h_130,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/Rims%20White.png",
              "membershipLevel": 2
            },
            {
              "name": "Galaxy Wave Ferry",
              "address": "Roatan, Honduras",
              "phone": "3193-0000",
              "website": "https://www.roatanferry.com/",
              "image": "https://www.roatanferry.com/img/logowhite.svg",
              "membershipLevel": 3
            },
            {
              "name": "Luma Muna Restaurant",
              "address": "Tamarind Drive, West Bay",
              "phone": "9551-0324",
              "website": "https://www.ibagarihotel.com/dining/luna-muna-restaurant",
              "image": "https://image-tc.galaxy.tf/wipng-5sml2uoj9ry0aklehuxa2lupx/new-logo-scroll.png?width=500",
              "membershipLevel": 1
            },
            {
              "name": "Made in Roatan",
              "address": "Roatan, Honduras",
              "phone": "9999-9999",
              "website": "https://madeinroatan.com/",
              "image": "https://madeinroatan.com/wp-content/uploads/2020/04/cropped-Banner-Logo-4-23-2020.jpg",
              "membershipLevel": 2
            }
          ];

// Asynchronous function to "fetch" the members data
async function fetchMembers() {
    // Simulate a delay to mimic a real fetch call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(membersData);
        }, 1000); // 1-second delay
    });
}

// Function to display members data
async function displayMembers() {
    try {
        const members = await fetchMembers(); // Asynchronously "fetch" the data
        const membersContainer = document.getElementById("members-container");
        membersContainer.innerHTML = ''; // Clear the container

        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");

            memberCard.innerHTML = `
                <h4>${member.name}</h4>
                <p>${member.description}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            membersContainer.appendChild(memberCard);
        });
    } catch (error) {
        console.error("Error displaying the members data:", error);
    }
}

// Display the members when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    displayMembers();
});

