/** React */
import React from "react";
import * as Images from "../assets/images/index";
import {
  LINK_CONTACT_US,
  LINK_GITHUB,
  LINK_TELEGRAM,
  TeamMembers,
  AdvisorMembers
} from "../helpers/constants";

/** App */
import Header from "./Header";

const HomePage = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const renderImage = (imageDesktop, imageMobile, alt, className) => (
    <picture>
      <source media="(min-width: 768px)" srcSet={imageDesktop} />
      {className && <img className={className} src={imageMobile} alt={alt} />}
      {!className && <img src={imageMobile} alt={alt} />}
    </picture>
  );

  return (
    <div className="App">
      <div id="header" className="header">
        <Header />
        <div className="introduction">
          <div className="introduction-img">
            <img loading="lazy" alt="clubs" src={Images.LogoClubs} />
          </div>
          <div className="introduction-content">
            <h1 className="">Hool</h1>
            <p className="slogan text-yellow">
              The first loyalty football gaming platform
            </p>
            <p className="description">
              Hool’s mission is to give fans the power to approach their
              football clubs, bring fans and clubs closer together
            </p>
            <button
              onClick={() => {
                openInNewTab(LINK_CONTACT_US);
              }}
              className="contact-us"
            >
              Contact us
            </button>
          </div>
        </div>
        <div className="mouse d-none d-xl-flex">
          <img src={Images.Mouse} alt="mouse" className="mouse-image" />
        </div>
      </div>
      <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div>
      <div className="" id="solution">
        <h1 className="title">Our Solution</h1>
        <div className="solution-content">
          <div className="single-solution">
            <img loading="lazy" alt="solution" src={Images.Solution1} />
            <p>
              An NFT eco-system built by fans that incentivizes football clubs
              and players to endorse their supporter.
            </p>
          </div>
          <div className="single-solution">
            <img loading="lazy" alt="solution" src={Images.Solution2} />
            <p>
              Decentralized oracle and incentive that builds a bidirectional
              interaction between the eco-system and real life.
            </p>
          </div>
          <div className="single-solution">
            <img loading="lazy" alt="solution" src={Images.Solution3} />
            <p>
              A loyalty farming protocol that promotes the long lasting
              contribution of users inside a pool.
            </p>
          </div>
        </div>
      </div>

      <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div>

      <div className="" id="features">
        <h1>Features Overview</h1>
        <div className="ft-section">
          <img
            src={Images.LogoFeature}
            alt="logofeature"
            className="logo-ft-img"
          />
          <ul className="ft-content">
            <li className="ft-unique">
              <span className="ft-order">1</span>
              <p className="ft-unique-content">
                <span className="ft-ct-active">
                  Loyalty-oriented NFT framework
                </span>
              </p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">2</span>
              <p className="ft-unique-content">
                {" "}
                Game economics bootstrapped by{" "}
                <span className="ft-ct-active">loyalty farming protocol</span>
              </p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">3</span>
              <p className="ft-unique-content">NFT marketplace</p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">4</span>
              <p className="ft-unique-content">
                <span className="ft-ct-active">Fan Token</span> and DeFi
                Liquidity token utility
              </p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">5</span>
              <p className="ft-unique-content">
                Decentralized real-life information oracle
              </p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">6</span>
              <p className="ft-unique-content">
                Simulator using multi-party random number generator
              </p>
            </li>
          </ul>
        </div>
        <img src={Images.LogoFtBg} alt="logo" className="logo-ft-bg" />
      </div>
      <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div>

      <div className="" id="ecosystem">
        <h1>Hool Ecosystem</h1>
        {renderImage(
          Images.Ecosystem,
          Images.EcosystemMobile,
          "ecosystem",
          "ecosystem-img"
        )}
      </div>

      <div className="separation-eco">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div>

      <div className="" id="milestones">
        <h1 className="title">Milestones</h1>
        {renderImage(
          Images.Milestones,
          Images.MilestonesMb,
          "Milestones",
          "milestones-img"
        )}
      </div>

      <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div>

      <div className="teams">
        <h1 className="title">The Team</h1>
        <div className="teams-content">
          {TeamMembers.map((member) => (
            <div className="person">
              {renderImage(
                member.avatar,
                member.avatar_mb,
                "team",
                "person-img"
              )}

              <p className="person-name">{member.name}</p>
              <div className="person-description">
                {member.intro.map((item) => <p>{item}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="teams">
        <h1 className="title">Mentors &#38; Advisors</h1>
        <div className="teams-content">
          {AdvisorMembers.map((member) => (
            <div className="person">
              {renderImage(
                member.avatar,
                member.avatar_mb,
                "team",
                "person-img"
              )}

              <p className="person-name">{member.name}</p>
              <div className="person-description">
                {member.intro.map((item) => <p>{item}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div>
      <div id="backed">
        <h1 className="title">Backed by</h1>
        <div className="backed-content">
          {renderImage(
            Images.PolkaLogo,
            Images.PolkaLogo,
            "backedby",
            "backed-img"
          )}
        </div>
      </div>
      <div id="footer">
        <div className="footer-left">
          <img src={Images.Logo} alt="logo" className="logo-image" />
          <a href="/" className="footer-button">
            HOME
          </a>
          <a
            href={LINK_CONTACT_US}
            rel="noreferrer"
            target="_blank"
            className="footer-button"
          >
            CONTACT
          </a>
        </div>
        <div className="footer-right">
          <img
            loading="lazy"
            onClick={() => openInNewTab(LINK_TELEGRAM)}
            src={Images.TelegramLogo}
            alt="Telegram"
          />
          <img
            loading="lazy"
            onClick={() => openInNewTab(LINK_GITHUB)}
            src={Images.GithubLogo}
            alt="Github"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
