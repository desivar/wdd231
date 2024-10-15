// Fetch the data from the JSON file and display it
const randomAdvertising = async () => {
    const membersData = await getMembersData();
    if (!membersData) return; // Check if membersData is not null or undefined

    const filteredCompanies = membersData.filter(company => company.membershipLvl >= 2);
    const randomCompanies = shuffleCompanies(filteredCompanies);
    const selectedCompanies = randomCompanies.slice(0, 3);

    selectedCompanies.forEach(company => {
        advertising.innerHTML += `
        <article class="home-card ads">
            <div class="advertising-card-title">
                <h3>${company.name}</h3>
                <p>${company.tagline}</p>
            </div>
            <div class="advertising-info">
                <img src="${company.image}" alt="The icon of ${company.name}" width="110" height="110">
                <div>
                    <p>Email: ${company.email}</p>
                    <p>Phone: ${company.phoneNumber}</p>
                    <a href="${company.websiteUrl}">${company.websiteUrl}</a>
                </div>
            </div>
        </article>
        `;
    });
};


