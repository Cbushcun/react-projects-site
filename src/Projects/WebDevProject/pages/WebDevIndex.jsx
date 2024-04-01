import "../stylesheets/WebDevIndex.css";
import WebDevNavlist from "../components/WebDevNavlist";
import WebDevNavbar from "../components/WebDevNavbar";

import mySelfie from "../me.jpg";

export default function WebDevIndex({ showNavProp, onNavClickProp }) {
  return (
    <>
      <div className="web-dev-body">
        <div className="ball-one"></div>
        <div className="ball-two"></div>
        <div className="backdrop-blur"></div>
        <header>
          Old static site project from school, updated and moved into React.
          Created in 2022, updated in 2024.{" "}
          <a href="https://www.projects.businessbybush.com">
            Return to prject site here
          </a>
        </header>
        <WebDevNavbar
          showNavProp={showNavProp}
          onNavClickProp={onNavClickProp}
          tabTitleText="Christian IT3203 Homepage"
        />
        <div className="container">
          <main>
            <div className="selfie-container">
              <img
                src={mySelfie}
                className="selfie"
                alt="A selfie of me leaning next to a window whilist sitting down"
              />
            </div>
            <article className="content">
              <h2 className="funky-text">Course Expectations</h2>
              <p className="inconsolata">
                From this course, I am expecting to learn how to create clean
                and appealing webpages. Some ways I expect to do that are
                learning the backend operations of web development in order to
                optimize the user's browsing experience. Keeping file sizes as
                small as possible can maximize the user-end viewing experience
                by keeping things moving quick. Another way I can achieve an
                appealing design is visuals. Learning how to create an aesthetic
                website that is not a strain on the eyes will allow users to
                visit my sites for longer periods of time and enjoy interacting
                with it. The final way that I expect to develop from this class,
                is learning how to add many different pages to my website in
                order to keep my pages short and clean and allow me to spread my
                information around so that it is less overwhelming and users can
                easily find their way to the sections they are looking for.
              </p>
            </article>
          </main>
          <WebDevNavlist showNavProp={showNavProp} />
        </div>
      </div>
    </>
  );
}
