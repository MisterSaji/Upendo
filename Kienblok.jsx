import { storyblokEditable } from "@storyblok/react/rsc";

const Kienblok = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <h2>{blok.titel}</h2>
  </div>
);

export default Kienblok;
