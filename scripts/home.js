//add event listener to menu button and nav links
const hamButton = document.querySelector('#menu');
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


document.addEventListener('DOMContentLoaded', () => {
    const selectCourses = document.querySelectorAll('.card3 .filter-course');
    const coursesContainer = document.querySelector('.courses');
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

    const filteredCourses = courses;
    coursesContainer.innerHTML = '';

    filteredCourses.forEach(course => {
        const cardHTML = `
            <div class="card ${course.completed ? 'completed' : 'not-completed'}">
            <button class="openButton"><h2>${course.subject} ${course.number}</h2></button>
            </div>
        `;
        coursesContainer.innerHTML += cardHTML;
    });

    // filter courses
    selectCourses.forEach(filterCourse => {
        filterCourse.addEventListener('click', () => {
            const filter = filterCourse.getAttribute('data-course');

            const filteredCourses = courses.filter(course => {
                if (filter === 'all') return true;
                return course.subject === filter.toUpperCase();
            });

            coursesContainer.innerHTML = '';

            filteredCourses.forEach(course => {
                const cardHTML = `
                    <div class="card ${course.completed ? 'completed' : 'not-completed'}">
                    <button class="openButton"><h2>${course.subject} ${course.number}</h2></button>
                    </div>
                `;
                coursesContainer.innerHTML += cardHTML;
            });

            const openButtons = document.querySelectorAll('.openButton');
            openButtons.forEach(button => {
                button.addEventListener('click', event => {
                    const card = event.target.parentNode;
                    const course = courses.find(course => course.subject === card.querySelector('h2').textContent.split(' ')[0] && course.number === parseInt(card.querySelector('h2').textContent.split(' ')[1]));
                    displayCourseDetails(course);
                });
            });
            
        });
    });

    // open modal
    const openButtons = document.querySelectorAll('.openButton');
    openButtons.forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.parentNode;
            const course = courses.find(course => course.subject === card.querySelector('h2').textContent.split(' ')[0] && course.number === parseInt(card.querySelector('h2').textContent.split(' ')[1]));
            displayCourseDetails(course);
        });
    });

    const courseDetails = document.getElementById('course-details');

    function displayCourseDetails(courses) {
        courseDetails.innerHTML = '';
        courseDetails.innerHTML = `

            <h2>${courses.subject} ${courses.number}<button id="closeButton">❌</button></h2>
            <h3>${courses.title}</h3>
            <p><strong>Credits:</strong> ${courses.credits}</p>
            <p><strong>Certificate:</strong> ${courses.certificate}</p>
            <p>${courses.description}</p>
            <p><strong>Technologies:</strong> ${courses.technology.join(', ')}</p>
        `;

        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', () => {
            courseDetails.close();
        });
    
        courseDetails.showModal();
    }
    

    const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
    document.getElementById('total-credits').textContent = `Total credits required: ${totalCredits}`;
});