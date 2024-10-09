import { storyblokEditable } from "@storyblok/react/rsc";

const visualtweelogo = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <img
      className="logotwee"
      src={blok.logotwee.filename}
      alt={blok.logotwee.alt || "Logotwee"}
    />
  </div>
);

export default visualtweelogo;
