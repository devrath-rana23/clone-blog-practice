import profile_image_1 from "./profile_image_1.svg";
import featuredone from "./featuredone.svg";
import fb from "./fb.svg";
import insta from "./insta.svg";
import Linkedin from "./Linkedin.svg";
import twitter from "./twitter.svg";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PostCard } from "./PostCard";
import { FeaturedWorkCard } from "./FeaturedWorkCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="intro-section">
        <div className="intro-section-container">
          <div className="intro-details-div">
            <h1 className="intro-details-heading">
              Hi, I am John, Creative Technologist
            </h1>
            <p className="intro-details-para">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="intro-details-button-div">
              <button className="intro-details-button">Download Resume</button>
            </div>
          </div>
          <figure className="profile-image-container">
            <img className="profile-image" src={profile_image_1} alt="Trulli" />
          </figure>
        </div>
      </section>
      <section className="posts-section">
        <div className="posts-section-container">
          <div className="posts-section-header">
            <h1 className="posts-heading">Recent posts</h1>
            <a className="posts-link">View all</a>
          </div>
          <div className="posts-cards-container">
            <PostCard
              heading={"Making a design system from scratch"}
              date={"12 Feb 2020"}
              categories={"Design, Pattern"}
              description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim velit mollit.
            Exercitation veniam consequat sunt nostrud amet.`}
            />
            <PostCard
              heading={"Creating pixel perfect icons in Figma"}
              date={"12 Feb 2020"}
              categories={"Figma, Icon Design"}
              description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.`}
            />
          </div>
        </div>
      </section>
      <section className="featured-section">
        <div className="featured-section-heading-container">
          <h1 className="featured-section-heading">Featured works</h1>
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
          <FeaturedWorkCard
            title={"Designing Dashboards"}
            year={"2020"}
            category={"Dashboard"}
            description={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.`}
            image={featuredone}
          />
        </div>
      </section>
      <Footer
        images={[
          { logo: fb, logoFor: "fb" },
          { logo: insta, logoFor: "insta" },
          { logo: Linkedin, logoFor: "Linkedin" },
          { logo: twitter, logoFor: "twitter" },
        ]}
      />
    </div>
  );
}

export default App;
