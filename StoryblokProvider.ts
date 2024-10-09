"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./Feature";
import Kienblok from "./Kienblok";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Hero from "./hero";
import Aboutusintro from "./aboutusintro";
import aboutusbodytexteen from "./aboutusbody";
import Visualtweelogo from "./visualtweelogo";
import Toolskop from './toolskop';
import Ourtoolsfoto from './Ourtoolsfoto';
import Howweserve from './Howweserve';
import Efficientkop from './efficientkop';
import Logokopefficient from './Logokopefficient';
import Value from "./Value";
import CompoKop from "./CompoKop";
import Collaboratebutton from "./Collaboratebutton"

const components = {
  page: Page,
  feature: Feature,
  kienblok: Kienblok,
  logo: Logo,
  navbar: Navbar,
  hero: Hero,
  aboutusintro: Aboutusintro,
  aboutusbody: aboutusbodytexteen,
  visualtweelogo: Visualtweelogo, 
  toolskop: Toolskop,
  ourtoolsfoto: Ourtoolsfoto,
  howweserve: Howweserve,
  efficientkop: Efficientkop,
  logokopefficient: Logokopefficient,
  value: Value, 
  compokop: CompoKop,
  collaboratebutton: Collaboratebutton,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
