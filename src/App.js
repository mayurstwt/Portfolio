import "./styles.css";
import img2 from "./images/main-img.png";

export default function App() {
  return (
    <>
      <div class="hero">
        <nav>
          <h2 class="logo">
            Portfo<span>lio</span>
          </h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <a href="#" class="btn">
            Subscribe
          </a>
        </nav>

        <div class="content">
          <h4>Hello, my name is</h4>
          <h1>
            Tahmid <span>Ahmed</span>
          </h1>
          <h3>I'am a Web Developer.</h3>
          <div class="newslatter">
            <form>
              <input
                type="email"
                name="email"
                id="mail"
                placeholder="Enter Your Email"
              />
              <input type="submit" name="submit" value="Lets Start" />
            </form>
          </div>
        </div>
      </div>

      <section class="about">
        <div class="main">
          <img src={img2} />
          <div class="about-text">
            <h2>About Me</h2>
            <h5>
              Developer <span>& Designer</span>
            </h5>
            <p>
              I am a front-end web developer. I can provide clean code and pixel
              perfect design. I also make the website more & more interactive
              with web animations.I can provide clean code and pixel perfect
              design. I also make the website more & more interactive with web
              animations.A responsive design makes your website accessible to
              all users, regardless of their device.
            </p>
            <button type="button">Let's Talk</button>
          </div>
        </div>
      </section>

      <div class="service">
        <div class="title">
          <h2>Our Services</h2>
        </div>

        <div class="box">
          <div class="card">
            <i class="fas fa-bars"></i>
            <h5>Web Development</h5>
            <div class="pra">
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>

              <p>
                <a class="button" href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div class="card">
            <i class="far fa-user"></i>
            <h5>Web Development</h5>
            <div class="pra">
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>

              <p>
                <a class="button" href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>

          <div class="card">
            <i class="far fa-bell"></i>
            <h5>Web Development</h5>
            <div class="pra">
              <p>
                Every website should be built with two primary goals: Firstly,
                it needs to work across all devices. Secondly, it needs to be
                fast as possible.
              </p>

              <p>
                <a class="button" href="#">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-me">
        <p>Let Me Get You A Beautiful Website.</p>
        <a class="button-two" href="#">
          Hire Me
        </a>
      </div>

      <footer>
        <p>Tahmid Ahmed</p>
        <p>
          For more HTML, CSS, and coding tutorial - please click on the link
          below to subscribe to my channel:
        </p>
        <div class="social">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-dribbble"></i>
          </a>
        </div>
        <p class="end">CopyRight By Tahmid Ahmed</p>
      </footer>
    </>
  );
}
