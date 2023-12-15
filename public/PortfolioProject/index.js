<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="portfoliostylesheet.css">
    <title>Markel Bradford - Full Stack Developer</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
</head>
<body>
    <header id="header">
        <div class="container-two">
        <nav>
            <ul>
            <li><a class="active" href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="Markel_Bradford_Resume.pdf">
                <button>Resume</button>
            </a>
        </nav>
        </div>
    </header>

    <FadeInSection>  
    <section class="introduction">
        <h3 class="hello">Hi, my name is </h3>
            <h1 class="name">Markel Bradford</h1>
            <h2 class="who">Student | Full Stack Developer</h2>
    </section>
        </FadeInSection>
    
    <section class="about-me">
        <div class="container">
            <h2 id="about-me">About Me</h2>
            <p>I am an innovative and detail oriented professional located in Huntsville, Alabama that is working to transition from management into the world of full stack development. I have currently have experience with HTML5, CSS, and JavaScript.</p>
            <p>I am currently attending American Military Univeristy pursuing my Bachelor's of Science in Information Technology with a concentration in Multitier Architecture. I am looking to continue to develop my knowledge and skills in development through continued education and am expecting to graduate early 2025.</p>
            <p>Currently, I work for the 3rd party quality company Stratosphere Quality as a Site Operations Manager responsible for 100+ employees. I am currently open to and seeking internships and entry level web development job opportunities.</p>
            <h4>Skills</h4>
            <img id="skill" src="HTMLCSSJS.png" alt="HTML CSS and JS Logo">
            <img id="skill-1" src="VScode.png" alt="VSCode logo">
            <!-- Add more content as needed -->
        </div>
    </section>
        </FadeInSection>

    <section id="projects" class="projects">
        <div class="container">
            <h2>Projects</h2>
            <h3>Enter each project by clicking on the thumbnails below.</h3>
            <h4>Survey Form: HTML5, CSS</h4>
                <a href="FreeCodeCamp Projects/HTML Projects/Survey Form/build-a-survey-form.html">
                <img id="thumbnail" src="SurveyForm.png" alt="survery form"/>
                </a> 
                <p>My task for this project was to build a functional survey form using HTML and a CSS style sheet. This was a FreeCodeCamp project and I decided to go with a survey that targeted FreeCodeCamp users to collect feedback on their desired rolls as a developer, their skills, and their experience. Entries can be entered into all fields on the form and it can be submitted once completed.</p>
                <h4>Tribute Page: HTML5, CSS</h4>
                <a href="FreeCodeCamp Projects/HTML Projects/Tribute Page/SakuraiTributePage.html">
                <img id="thumbnail" src="Screenshot 2023-12-04 214100.png" alt="Masahiro Sakurai Tribute Page"/>
                </a>
                <p>The objective for this project was to build a trinute page dedicated to someone important to you using HTML and a CSS style sheet. The focus was building an informative website with a timeline of impactful events that happened in the persons life and career. I chose Masahiro Sakurai because he developed my all time favorite game, <i>Super Smash Bros. Melee</i>, for the Nintendo Gamecube.</p>
                <!--<h4>The Steak Page: HTML5, CSS, JS</h4>
                <a href="WEB121 Projects/Homepage/BradfordMarkelHomePage.html">
                    <img id="thumbnail" src="TheSteakPageProject.png" alt="My first multipage HTML website"/>
                    </a>
                <p>This project was an assignment that I completed for assessment at American Military University for my Wed Development Fundamentals Class. For this project I was required to use HTML, CSS style sheet, and JavaScript. The objective was to build an informative, multi-page website with a style sheet and script functions. I am a big steak guy and thought it would be great to make a webpage to help beginning steak connoisseurs.</p>
                    Un-note this section once project is completed. -->
            </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2>Contact</h2>
        <a href="mailto:markel.bradford94@gmail.com">
            <img id="icon" src="Gmail.png" alt="Email me"/>                
            </a>
         <a href="https://www.linkedin.com/in/markel-bradford-1773a9236">
            <img id="icon" src="LinkedIn.png" alt="My LinkedIn Profile"/>
            </a>
        </div>
    </section>

    <footer>
        <div class="container-three">
            <p>&copy; 2023 Markel Bradford - Full Stack Developer</p>
            <a href="#header">
            <button onclick="topFunction()" id="top" title="Back to top">Top</button>
                </a>
        </div>
    </footer>
</body>
</html>