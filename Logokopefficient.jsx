import { storyblokEditable } from "@storyblok/react/rsc";

const Logokopefficient = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <img
      className="logotext"
      src={blok.logotext.filename}
      alt={blok.logotext.alt || "Logotext"}
    />
  </div>
);

export default Logokopefficient;
