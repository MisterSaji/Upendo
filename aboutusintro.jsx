import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/aboutusintro.css";
import "../app/[locale]/aboutusintrotext.css";
import "../app/[locale]/aboutusintrocolor.css";
import { render } from "storyblok-rich-text-react-renderer";

const AboutUsIntro = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="aboutussubtext">{blok.aboutussubtext}</div>

    <div className="grotemiauw">
      <div className="aboutusintrotext">
        <p>
          Our top priority is making<span className="zeng"> data</span>
        </p>
      </div>
      <div className="aboutusintrocolor"></div>
      <div className="introtext">
        <p className="simpleText">
          simple<span className="white"> and</span>
        </p>
        <p className="simpleText">
          accessible<span className="white">.</span>
        </p>
      </div>
    </div>

    <div className="aboutusend">
      <p>Data simplified.</p>
    </div>

    {/* Visual 1 */}
    <div className="visual">
      <div className="icon-holder">
        {blok.visualfoto ? (
          <img
            className="logo"
            src={blok.visualfoto.filename}
            alt={blok.visualfoto.alt || "visual"}
          />
        ) : (
          <p></p> // Fallback als de afbeelding niet bestaat
        )}
      </div>

      <div className="logotwee">
        {blok.logotwee ? (
          <img
            className="logotwee"
            src={blok.logotwee.filename}
            alt={blok.logotwee.alt || "logotwee"}
          />
        ) : (
          <p></p> // Fallback als de afbeelding niet bestaat
        )}
      </div>
    </div>
  </div> // Sluit de buitenste div correct af
);

// Deze component wordt nu als een "named export" geëxporteerd
const Toolskop = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="toolstext">{blok.toolstext}</div>
  </div>
);

// Je kunt slechts één "default export" hebben
export default AboutUsIntro;
export { Toolskop }; // Named export
