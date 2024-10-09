import { storyblokEditable } from "@storyblok/react/rsc";

const Value = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    <div className="card-top">
      <h1 className="koptext">{blok.title}</h1>
      <img
        className="Visual"
        src={blok.visual.filename}
        alt={blok.visual.alt || "Visual"}
      />
    </div>
    <p className="colortext">{blok.paragraph}</p>
  </div>
);

export default Value;
