import { storyblokEditable } from "@storyblok/react/rsc";

const Ourtoolsfoto = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    {/* <img
      className="fototools"
      src={blok.fototools.filename}
      alt={blok.fototools.alt || "Fototools"}
    /> */}
  </div>
);

export default Ourtoolsfoto;
