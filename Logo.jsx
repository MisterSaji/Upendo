import { storyblokEditable } from "@storyblok/react/rsc";

const Logo = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <img
      className="logo"
      src={blok.afbeelding.filename}
      alt={blok.afbeelding.alt || "Logo"}
    />
  </div>
);

export default Logo;
