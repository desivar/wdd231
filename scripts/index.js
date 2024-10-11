//const currentYear = document.getElementById('currentYear');
//currentYear.textContent = new Date().getUTCFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.innerHTML = `Last Updated on <i>${document.lastModified}</i>`;

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];


const coursesList = document.querySelector('.courses-section');

function populateClasses(filter) {
    coursesList.innerHTML = '';
    courses
    .filter(c => 
        filter.toLowerCase() === 'all' || filter.toLowerCase() === c.subject.toLowerCase()
    )
    .forEach(c => {
        const block = document.createElement('div');
        block.classList.add('courseBlock');
        block.innerHTML = `${c.subject} ${c.number}<br>${c.credits} credit hours`;
        block.classList.add(c.completed === true ? 'complete' : 'incomplete');
        
        block.addEventListener('click', () => {
            displayCourseDetails(c)
        });
        
        coursesList.appendChild(block);
    });
}

const filterButtons = document.querySelectorAll('.filterButton');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        populateClasses(btn.getAttribute('value'));
    });
});


populateClasses('All');

const navBar = document.querySelector('#navBar');
function toggleNav() {
    if (navBar.style.display === "none") {
        navBar.style.display = "block";
    } 
    else {
        navBar.style.display = "none";
    }
}

const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    toggleNav();
});

window.addEventListener('resize', function(event) {
    if (window.innerWidth >= 640)
        navBar.style.display = "block";
}, true);

const totalCredits = document.querySelector('#totalCredits');

function calcTotalCredits() {
    const initialVal = 0;
    const total = courses.reduce((accumulator, currentValue) => currentValue.credits + accumulator, initialVal,);
    const h3 = document.createElement('h3');
    h3.innerHTML = `<h3>Total Credits: ${total}</h3>`;
    totalCredits.appendChild(h3);
}

calcTotalCredits();

const courseDetails = document.querySelector('#courseDetails');

courseDetails.addEventListener('click', (event) => {
    if (event.target.id !== 'dialogDiv') {
        courseDetails.close();
    }
});

function displayCourseDetails(course) {
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
    `

    courseDetails.showModal();

    closeModal.addEventListener('click', () => {
        courseDetails.close();
    })
}

