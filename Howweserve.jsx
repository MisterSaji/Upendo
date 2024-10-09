import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Howweserve = ({ blok }) => {
  // Check of blok bestaat, om fouten te voorkomen
  if (!blok) {
    return null; // Render niets als blok niet bestaat
  }

  return (
    <div {...storyblokEditable(blok)}>
      <div className="howtext">{render(blok.howtext)}</div>
    </div>
  );
};

export default Howweserve;
