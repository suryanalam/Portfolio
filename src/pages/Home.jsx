import resume from "../assets/docs/resume.pdf";

const Home = () => {
  return (
    <section className="home-bg">
      <p className="greeting">Hello, I'm</p>
      <div className="home-title-wrapper">
        <h1 className="name">Surya Narayana Murthy Nalam</h1>
        <h4 className="job-role">Full Stack Developer</h4>
      </div>
      <div className="actions-div">
        <a href={resume} rel="noreferrer" download="Resume">
          <button className="btn">Resume</button>
        </a>
        <a href="mailto:suryanalam3011@gmail.com">
          <button className="btn">Let's Talk</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
