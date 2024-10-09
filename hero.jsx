import { useState } from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import "../app/[locale]/globals.css";
import "../app/[locale]/hero.css";

const Hero = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hero">
      <h1>{blok.intro_header}</h1>
      <h2>{blok.intro_header}</h2>
      <img
        className="logo"
        src={blok.intro_image.filename}
        alt={blok.intro_image.alt || "intro"}
      />
    </div>
  );
};

export default Hero;
