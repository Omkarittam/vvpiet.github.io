// ================= MOBILE MENU =================

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// ================= DEPARTMENT DATA =================

const departments = {

    aids: {

        title: "Artificial Intelligence & Data Science",

        icon: "🤖",

        description:
            "The Artificial Intelligence & Data Science department focuses on developing skills in artificial intelligence, machine learning, data analysis and modern computing technologies.",

        subjects:
            "Artificial Intelligence, Machine Learning, Data Science, Python, Statistics, Deep Learning and Data Analytics.",

        career:
            "AI Engineer, Data Scientist, Machine Learning Engineer, Data Analyst, AI Developer and Business Intelligence Analyst."

    },


    cse: {

        title: "Computer Science & Engineering",

        icon: "💻",

        description:
            "The Computer Science & Engineering department focuses on software development, programming, computer systems and modern information technologies.",

        subjects:
            "Programming, Data Structures, Algorithms, Database Management, Operating Systems, Computer Networks, Web Development and Cybersecurity.",

        career:
            "Software Developer, Web Developer, Full Stack Developer, System Engineer, Database Administrator and Software Engineer."

    },


    civil: {

        title: "Civil Engineering",

        icon: "🏗️",

        description:
            "Civil Engineering focuses on designing, constructing and maintaining buildings, roads, bridges and other infrastructure.",

        subjects:
            "Structural Engineering, Surveying, Construction Technology, Geotechnical Engineering, Transportation Engineering and Environmental Engineering.",

        career:
            "Civil Engineer, Structural Engineer, Site Engineer, Construction Manager, Surveyor and Project Engineer."

    },


    electrical: {

        title: "Electrical Engineering",

        icon: "⚡",

        description:
            "Electrical Engineering focuses on electrical systems, power generation, electrical machines, control systems and modern energy technologies.",

        subjects:
            "Electrical Machines, Power Systems, Control Systems, Electrical Measurements, Power Electronics and Renewable Energy.",

        career:
            "Electrical Engineer, Power Engineer, Control Engineer, Electrical Design Engineer and Maintenance Engineer."

    },


    entc: {

        title: "Electronics & Telecommunication",

        icon: "📡",

        description:
            "Electronics & Telecommunication focuses on electronic systems, communication technologies, embedded systems and digital electronics.",

        subjects:
            "Digital Electronics, Analog Electronics, Communication Systems, Microprocessors, Embedded Systems, IoT and Signal Processing.",

        career:
            "Electronics Engineer, Embedded Engineer, IoT Developer, Telecommunication Engineer and Hardware Engineer."

    },


    mechanical: {

        title: "Mechanical Engineering",

        icon: "⚙️",

        description:
            "Mechanical Engineering focuses on machines, manufacturing, mechanical design, thermal systems and industrial engineering.",

        subjects:
            "Thermodynamics, Fluid Mechanics, Machine Design, Manufacturing Technology, CAD/CAM and Industrial Engineering.",

        career:
            "Mechanical Engineer, Design Engineer, Production Engineer, Manufacturing Engineer, Automobile Engineer and Maintenance Engineer."

    }

};


// ================= OPEN DEPARTMENT =================

function openDepartment(departmentName) {

    const department =
        departments[departmentName];


    document.getElementById("modalIcon").textContent =
        department.icon;


    document.getElementById("modalTitle").textContent =
        department.title;


    document.getElementById("modalDescription").textContent =
        department.description;


    document.getElementById("modalSubjects").textContent =
        department.subjects;


    document.getElementById("modalCareer").textContent =
        department.career;


    document.getElementById("departmentModal").classList.add("show");


    document.body.style.overflow = "hidden";

}


// ================= CLOSE DEPARTMENT =================

function closeDepartment() {

    document
        .getElementById("departmentModal")
        .classList.remove("show");


    document.body.style.overflow = "auto";

}


// ================= CLOSE WHEN CLICKING OUTSIDE =================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("departmentModal");


    if (event.target === modal) {

        closeDepartment();

    }

});


// ================= ESC KEY =================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeDepartment();

    }

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= MOBILE MENU CLOSE =================

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-links")
            .classList.remove("active");

    });

});
