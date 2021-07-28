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
      {/* <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div> */}
      <div className="" id="gameplay">

        <div className="gameplay-title">
          <img loading="lazy" alt="solution" src={Images.GamePlay} />
        </div>
        <div className="gameplay-content">
          <div className="single-gameplay">
            {renderImage(
              Images.GamePlay1,
              Images.GamePlay1Mb,
              "Fuel",
              "gameplay-img gameplay-normal"
            )}
            <img loading="lazy" className="gameplay-img gameplay-hover" alt="Fuel" src={Images.Gameplay1Hover} />
            <p>
              User stake HOOL to farm Fuel, ultilized by loyalty farming protocol.
            </p>
          </div>
          <div className="single-gameplay">
            {renderImage(
              Images.GamePlay2,
              Images.GamePlay2Mb,
              "NFT",
              "gameplay-img gameplay-normal"
            )}
            <img loading="lazy" className="gameplay-img gameplay-hover" alt="Fuel" src={Images.Gameplay2Hover} />
            <p>
              User stake HOOl to mint NFT, which is associated with a model, created by community.
            </p>
          </div>
          <div className="single-gameplay">
            {renderImage(
              Images.GamePlay3,
              Images.GamePlay3Mb,
              "Play game",
              "gameplay-img gameplay-normal"
            )}
            <img loading="lazy" className="gameplay-img gameplay-hover" alt="Fuel" src={Images.Gameplay3Hover} />
            <p>
              User use NFT and FUEL to play game, grow the NFT, earn rewards and contribute to NFT model.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div> */}

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
                Stake to play game
              </p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">2</span>
              <p className="ft-unique-content">
                Decentralize match simulation
              </p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">3</span>
              <p className="ft-unique-content">NFT marketplace</p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">4</span>
              <p className="ft-unique-content">
                Play to earn
              </p>
            </li>
            <li className="ft-unique">
              <span className="ft-order">5</span>
              <p className="ft-unique-content">
                Game voting
              </p>
            </li>
          </ul>
        </div>
        {/* <img src={Images.LogoFtBg} alt="logo" className="logo-ft-bg" /> */}
      </div>
      {/* <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div> */}

      <div className="" id="ecosystem">
        <h1>Hool Ecosystem</h1>
        {renderImage(
          Images.Ecosystem,
          Images.EcosystemMobile,
          "ecosystem",
          "ecosystem-img"
        )}
      </div>

      {/* <div className="separation-eco">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div> */}

      <div className="" id="milestones">
        <h1 className="title">Milestones</h1>
        {renderImage(
          Images.Milestones,
          Images.MilestonesMb,
          "Milestones",
          "milestones-img"
        )}
      </div>

      {/* <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div> */}

      <div className="teams">
        <h1 className="title">Founding team</h1>
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
        <h1 className="title">Advisors</h1>
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

      {/* <div className="separation">
        {renderImage(
          Images.Separation,
          Images.SeparationMobile,
          "separation",
          "separation-img"
        )}
      </div> */}
      {/* <div id="backed">
        <h1 className="title">Backed by</h1>
        <div className="backed-content">
          {renderImage(
            Images.PolkaLogo,
            Images.PolkaLogo,
            "backedby",
            "backed-img"
          )}
        </div>
      </div> */}
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
