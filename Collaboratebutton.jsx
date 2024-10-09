import { storyblokEditable } from "@storyblok/react/rsc";

const Collaboratebutton = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <img
      className="buttoncb"
      src={blok.buttoncb.filename}
      alt={blok.buttoncb.alt || "Buttoncb"}
    />
  </div>
);

export default Collaboratebutton;
