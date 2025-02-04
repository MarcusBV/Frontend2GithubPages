import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
      <h1 class="headertitle"><i class="fa-solid fa-code"></i> Marcus Viol</h1>
      <nav>
        <ul class="headermenu">
          <a class="headermenulink" href="#about-me">About me</a>
          <a class="headermenulink" href="#resume">CV</a>
          <a class="headermenulink" href="#skills">Skills</a>
          <a class="headermenulink" href="#projects">Projects</a>
          <a class="headermenulink" href="#references">References</a>
          <a class="headermenulink" href="#contact">Contact</a>
        </ul>
      </nav>
    </header>
    <main>
      <section id="about-me">
        <img src="ProfileImage.jpg" alt="Profile image" />
        <h2>About me</h2>
        <p>
          Hello! I'm Marcus, currently a student at Nackademin studying .Net
          Software Development.
        </p>
        <p>Web design is clearly not my passion</p>
        <h3>Links</h3>
        <ul class="socialLinks">
          <li>
            <a href="https://www.linkedin.com/in/marcusbv/" target="_blank"
              ><i class="fa-brands fa-linkedin-in"></i> Marcus BV</a
            >
          </li>
          <li>
            <a href="https://github.com/MarcusBV" target="_blank"
              ><i class="fa-brands fa-github"></i> MarcusBV</a
            >
          </li>
          <li>
            <a href="mailto:marcus.viol@yh.nackademin.se"
              ><i class="fa-solid fa-at"></i> Marcus.Viol@YH.Nackademin.se</a
            >
          </li>
        </ul>
      </section>

      <section id="resume">
        <h2>Resumé/CV</h2>
        <a class="downloadbutton" href="resume.txt" download="resume.txt"
          >Download CV</a
        >
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>
            C# - Building applications in C# using object oriented programming.
          </li>
          <li>Databases - SQL relational databases and NOSQL</li>
          <li>
            Frontend - Using HTML, CSS and Javascript to build websites and web
            apps.
          </li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://github.com/MarcusBV">Winforms Address Book</a>
            <p>
              An address book to store contacts. Built using winforms and data
              stored in Json.
            </p>
          </li>
          <li>
            <a href="https://github.com/MarcusBV"
              >Winforms marketplace application</a
            >
            <p>
              An application to view and post ad listings. Account needs to be
              created to create an ad. All data stored in a Microsoft SQL
              relational database.
            </p>
          </li>
        </ul>
      </section>

      <section id="references">
        <h2>References</h2>
        <p>Very good ear scratches -Atlas</p>
        <p>Decent tank -Random gamer</p>
      </section>
    </main>

    <footer>&copy Marcus Viol 2024</footer>
`