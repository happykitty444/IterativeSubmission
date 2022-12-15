import './App.css';

import sketch1p1 from './images/sketch_1_page_1.jpg'
import sketch1p2 from './images/sketch_1_page_2.jpg'
import sketch1p3 from './images/sketch_1_page_3.jpg'

import sketch2p1 from './images/sketch_2_page_1.jpg'
import sketch2p2 from './images/sketch_2_page_2.jpg'
import sketch2p3 from './images/sketch_2_page_3.jpg'

import sketch3p1 from './images/sketch_3_page_1.jpg'
import sketch3p2 from './images/sketch_3_page_2.jpg'
import sketch3p3 from './images/sketch_3_page_3.jpg'

import sketch4p1 from './images/sketch_4_page_1.jpg'
import sketch4p2 from './images/sketch_4_page_2.jpg'
import sketch4p3 from './images/sketch_4_page_3.jpg'
import sketch4p4 from './images/sketch_4_page_4.jpg'

import User1Response from './images/User1Response.png'
import User2Response from './images/User2Response.png'
import User3Response from './images/User3Response.png'

import TaskList from './images/TaskList.png'
import TaskScenario from './images/TaskScenario.png'

import vid1 from './images/video1.mp4'
import vid2 from './images/video2.mp4'
import vid3 from './images/video3.mp4'



function App() {
  return (
    <div className="App">
      <h1>Iterative Design</h1>
      <p>A key factor in the creation of a successful design is feedback and iteration. Through group design sessions, peer
        critique, and user testing, designers can ensure that their work is effective, clear, and accessible. Through a series
        of revisions made after each stage of feedback, our 4 person student group created a website designed to solve a problem
        and fill a niche identified by a startup launched through Y-Combinator, Float Health.</p>

      <section>
        <h2>Sketching and Wireframing</h2>
        <p>Each member of the design team created a unique sketch consisting of a couple of screens which showed the base
          functionality of the website in unique styles and layouts.</p>
        <h3>Pre-Design Thinking</h3>
        <p>We chose to design a webpage for the startup Float Health, which aims to be an Uber-like website where users can
          request a nurse to come to their home. When thinking about what kind of interface to design, we primarily thought
          about the probable users for this startup. Since people who would need a nurse to come to their home are probably
          older, we decided a desktop webpage would be a better design choice, rather than a mobile site.</p>
        <h3>Sketching</h3>
        <p>We first started brainstorming about the various ways the website could look. The following 4 designs are quick
          sketches of a Float Health website.</p>
        <h4>Design 1</h4>
        <img src={sketch1p1} alt="Design 1 Sketches" />
        <img src={sketch1p2} alt="Design 1 Sketches" />
        <img src={sketch1p3} alt="Design 1 Sketches" />
        <p>This design features a home screen, profile screen, and a checkout screen. The profile screen provides basic
          information about the website and allows users to login. The profile screen is linked to the patient and contains
          information like lab results and the option to schedule an appointment. The checkout screen is a confirmation page for
          when a patient schedules an appointment.</p>

        <h4>Design 2</h4>
        <img src={sketch2p1} alt="Design 2 Sketches" />
        <img src={sketch2p2} alt="Design 2 Sketches" />
        <img src={sketch2p3} alt="Design 2 Sketches" />
        <p>This design has a home screen, an information form, and a screen for selecting appointment search results. The home
          screen provides basic information about the website. The information form has the user input their information like
          address, insurance, and health needs, so they can find a nurse who would be best for them. Finally the search result
          page shows the patient nurses who are nearby and match their needs. The patient can select the nurse they prefer and
          request an appointment.</p>

        <h4>Design 3</h4>
        <img src={sketch3p1} alt="Design 3 Sketches" />
        <img src={sketch3p2} alt="Design 3 Sketches" />
        <img src={sketch3p3} alt="Design 3 Sketches" />
        <p>This design has a patient profile containing basic patient information, a home screen, and an appointment scheduling
          page. The home page has information about Float Health and allows the patient to select "Schedule Nurse's Visit". This
          page also has a live chat option for assistance. The scheduling page has an interactive calendar so the patient can
          choose which day they would like to schedule their appointment.</p>

        <h4>Design 4</h4>
        <img src={sketch4p1} alt="Design 4 Sketches" />
        <img src={sketch4p2} alt="Design 4 Sketches" />
        <img src={sketch4p3} alt="Design 4 Sketches" />
        <img src={sketch4p4} alt="Design 4 Sketches" />
        <p>This design has a patient profile page, a nurse sign up page, a nurse profile page, and a patient scheduling page.
          Unlike the other designs, this design integrates two sides of functionality: those on the patient side and those on
          the nurse side. Nurses are able to apply to be on the website and have their own profile page they can edit.</p>
      </section>

      <section>
        <h2>Wireframes</h2>
        <p>Next, we created a low-fidelity wireframe which merged our ideas together. This wireframe has a home screen, nurse and
          patient information / signup forms, nurse and patient profiles, a page for booking appointments, and an appointment
          confirmation page. While designing this wireframe, we pulled ideas from each of our sketches. From design 3, we pulled
          the live chat option, from design 1 we pulled the confirmation page, from design 2 we pulled the information forms, and
          from design 4 we pulled the nurse side of the interface, for example.</p>
        <a href="https://www.figma.com/file/jfrkYpxd69KBLee8e8ABoZ/Lo-Fi-Wireframe">Low Fidelity Wireframes</a>
      </section>

      <section>
        <h2>Mockup</h2>
        <p>Based on our low-fidelity wireframe, we created an interactive high-fidelity prototype. This prototype incorporated
          new characteristics for the page like a color scheme and a well-defined font hierarchy. We created a logo for the website
          and connected the various pages so that a user could navigate through them.</p>
        <a href="https://www.figma.com/file/MrCDZK8sJ3tmJXlCRRfbXO/Hi-Fi-Wireframe-Float-Health?fuid=1150193252608434523">High Fidelity Wireframes</a>
      </section>

      <section>
        <h2>Critique</h2>
        <p>At this point in our development process, we spent a lot of time creating prototypes for our website, and as such, are
          likely to be prone to confirmation bias. In a studio setting, we had people who were unfamiliar with the website interact
          it and critique our work. We took notes on the issues posed and compiled them below:</p>
        <h3>Hierarchy</h3>
        <ul>
          <li>When you go to login as a patient, the heading and the entries are the same font and size for your medicines</li>
          <li>For lab results, copy those lines and graphs for notes and medicines you take</li>
        </ul>
        <h3>Interaction</h3>
        <ul>
          <li>Nurse login in page, confusing which text you can interact with</li>
          <li>Make sure all buttons are interactable</li>
        </ul>
        <h3>Navigation</h3>
        <ul>
          <li>On the nurse and patient page, when you click home, it logs you out, instead of taking you to a homepage while logged in</li>
        </ul>
        <h3>Learnability</h3>
        <ul>
          <li>The exact wording of the appointment summary on book appointment at the bottom of the page is very helpful</li>
          <li>Fix the language flag</li>
        </ul>
        <h3>Visual Design</h3>
        <ul>
          <li>Some of the colors of the text easier to see, red against red background, green and red for green red colorblindness</li>
          <li>Red is an alarming color as a background</li>
        </ul>
        <h3>New Features</h3>
        <ul>
          <li>Add a summary, explanation of the copay with a breakdown</li>
          <li>Patient login in page, obvious how to update profile but should have update buttons for other fields in profile and for notes/lab results</li>
        </ul>
        <h3>Other</h3>
        <ul>
          <li>Confusion about uber eats for nurse vs uber</li>
          <li>Make sure to fix things, prevent confusion for usability testing</li>
        </ul>
        <p>Now that we identified issues with our original design, we revised our prototype:</p>
        <a href="https://www.figma.com/file/U63zLkwlWKMJmVVL5XrEj5/Hi-Fi-Wireframe-Float-Health-Revisions-(Post-Studio)">Revised Prototype</a>
      </section>

      <section>
        <h2>User Testing</h2>
        <h3>Task Given</h3>
        <img src={TaskScenario} alt="Task Scenario" />
        <img src={TaskList} alt="Task List" />
        <h3>Testing Videos</h3>
        <video width="320" height="240" controls>
          <source src={vid1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="320" height="240" controls>
          <source src={vid2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="320" height="240" controls>
          <source src={vid3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3>Post Test Responses</h3>
        <h4>User 1</h4>
        <img src={User1Response} alt="User 1 Responses" />
        <h4>User 2</h4>
        <img src={User2Response} alt="User 2 Responses" />
        <h4>User 3</h4>
        <img src={User3Response} alt="User 3 Responses" />
        <h3>User Testing Analysis and Results</h3>
        <p>The task we gave the UserTesting participants was to login to our site, try to book an appointment, and to confirm the
          appointment. The results with respect to the users completing our task were as expected and were 100% successful in terms
          of task completion. The main task was to make an appointment and the subtasks were to login, book an appointment, and
          confirm it. The only error that was recorded was that one of the users mistakenly clicked the "I am a Patient" button
          which took them to their patient profile page and so they had to click logout in order to get back to the homepage and
          eventually click the 'login' button to successfully complete the task. In general, all three users did a wonderful job on
          the task.The task we gave the UserTesting participants was to login to our site, try to book an appointment, and to
          confirm the appointment. The results with respect to the users completing our task were as expected and were 100%
          successful in terms of task completion. The main task was to make an appointment and the subtasks were to login, book an
          appointment, and confirm it. The only error that was recorded was that one of the users mistakenly clicked the "I am a
          Patient" button which took them to their patient profile page and so they had to click logout in order to get back to the
          homepage and eventually click the 'login' button to successfully complete the task. In general, all three users did a
          wonderful job on the task.</p>
          <br/>
          <p>Regarding the changes we would to our potential interface based on our UserTesting results and feedback include the
            following: centering the 'Book an Appointment' subtitle on the appointment page, adding availability to the
            patient-facing calendar shown on our 'book an appointment page', renaming the "I am a Patient" button to "Patient
            Sign Up", removing the profile picture and the update profile picture button, making it overtly obvious on the homepage
            that our service is sending nurses to people through appointment booking (Uber for Nurses), changing the submit button
            functionality to take the user to their profile page instead of the homepage, and finally we would clarify the
            background coloration and highlighting of the appointment needs options on the 'Book an Appointment' by deleting it
            wholesale.</p>
      </section>
    </div>
  );
}

export default App;
