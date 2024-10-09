import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Efficientkop = ({ blok }) => {
  // Check of blok bestaat, om fouten te voorkomen
  if (!blok) {
    return null; // Render niets als blok niet bestaat
  }

  return (
    <div {...storyblokEditable(blok)}>
      <div className="efficienttext">{render(blok.efficienttext)}</div>
    </div>
  );
};

export default Efficientkop;
