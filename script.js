document.addEventListener('DOMContentLoaded', function () {
    // Generate team members' information
    const teamMembers = [
        { name: 'John Doe', role: 'CEO', image: 'john_doe.jpg' },
        { name: 'Jane Smith', role: 'Marketing Manager', image: 'jane_smith.jpg' },
        { name: 'Alex Johnson', role: 'Head Baker', image: 'alex_johnson.jpg' }
        // Add more team members as needed
    ];

    const teamMembersContainer = document.querySelector('.team-members');
    teamMembers.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('team-member');
        memberElement.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h4>${member.name}</h4>
            <p>${member.role}</p>
        `;
        teamMembersContainer.appendChild(memberElement);
    });

    // JavaScript validation for the sign-up form can be implemented here
});


