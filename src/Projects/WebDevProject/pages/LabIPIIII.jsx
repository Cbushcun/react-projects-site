import "../stylesheets/WebDevIndex.css";
import WebDevNavlist from "../components/WebDevNavlist";
import WebDevNavbar from "../components/WebDevNavbar";

import "../stylesheets/LabIPIIII.css";

/**
 * Renders the LabIPIIII component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.showNavProp - Determines whether to show the navigation.
 * @param {function} props.onNavClickProp - The callback function for navigation click event.
 * @returns {JSX.Element} The LabIPIIII component.
 */
export default function LabIPIIII({ showNavProp, onNavClickProp }) {
  return (
    <div className="web-dev-body">
      <div class="ball-one"></div>
      <div class="ball-two"></div>
      <div class="backdrop-blur"></div>
      <WebDevNavbar
        showNavProp={showNavProp}
        onNavClickProp={onNavClickProp}
        tabTitleText="Lab 1 Pt 4 IT3203"
      />
      <div class="web-dev-container">
        <main>
          <article class="content inconsolata backdrop">
            <h1 class="funky-text">Webpage UI Design Reviews</h1>
            <h2>
              <a href="https://atlanta.craigslist.org/" target="_blank">
                Craigslist (Bad)
              </a>
            </h2>
            <p>
              Craigslist is a popular website that many people use. Although
              this only comes from the ability of it being able to be unique in
              the services it provides. As time goes on, Craigslist maintains a
              very eye straining design that has probably lowered its popularity
              over time due to the amount of better designed counterparts.
              Although nothing can replace craigslist, the the user interface
              makes it hard to stomach because of the bright background with no
              design to ease the strain on the eyes. Almost every word on their
              webpage is a link so the fact that they were able to make sure
              visited links could have been kept track of is a plus. Craigslist
              is not a bad website but it is a strain to look at and can be
              fixed with a simple color scheme update.
            </p>
            <h2>
              <a href="https://acme.com/" target="_blank">
                ACME Labratories (Bad)
              </a>
            </h2>
            <p>
              ACME Labratories is not as popular as the last website I had
              mentioned. Their links change color which is a good thing since
              their website is just a list of links. Their organization is not
              great and there is no categorization happening. It it better than
              Craigslist seeing that the strain on the eyes is not as bad,
              however, the text is still small compared to the amount of free
              space the page has. Since everything is a link, it hurts the page
              visibility since links are usually brighter and stand out more
              than normal page texts. Although the web page seems pretty simple
              and the design is straightforward, it is nice that all of the
              links they have dont open new tabs. with a page that contains this
              many links, it would be very ineffecient for the user to
              constantly be closing old tabs or venturing a website that is
              exclusively links and opens a new tab for every link clicked.
            </p>
            <h2>
              <a href="https://www.fandom.com/" target="_blank">
                Fandom (Good)
              </a>
            </h2>
            <p>
              Fandom is a great website to visit. The home page gives you a
              categoriezed list of areas to view and allows you to easily find
              out where you need to go based off of what you are visiting the
              website for. The website also has an option to switch from light
              mode and dark mode which is a very highly sought out feature with
              websites. Everything on the website has a visual to help aid the
              viewer in honing their attention and a quick description that
              tells you what clicking on the linked image will do. The website
              also maintains a consistant color scheme in order to keep the
              webpage attractive while not clashing colors together to harm the
              viewing experience. The search feature that stands out right when
              you open the page does a great job at searching the directory of
              the website in order to bring up the most relevant results despite
              gramatical errors. On top of the search results being related to
              the search itself, they have a panel to show you the most popular
              wiki community for the topic of your search aswell
            </p>
            <h2>
              <a href="https://www.reddit.com/" target="_blank">
                Reddit (Good)
              </a>
            </h2>
            <p>
              Reddit is a very in depth social platform that is primarily
              catered to the users. the page has acccess to light and dark mode,
              their site is dynamic and adapts to the window size. Since the
              platform is more catered to the user's interests rather than
              searching a database for their information, searching is not bad
              but not great. It searches the site by finding words that are an
              exact match to your input so any misspelling will affect your
              results. All of the links on the page are designed not not be the
              default bright blue to purple once clicked. Many of the links fade
              out to grey when clicked keeping the eye strain to a minimum. The
              design of the page is made to be looked at for long periods of
              time so they keep up to date with design conventions.
            </p>
          </article>
        </main>
        <WebDevNavlist showNavProp={showNavProp} />
      </div>
    </div>
  );
}
