Working fork of royvz-dev's Next + Storyblok boilerplate. This fork contains custom CSS and a demo component that is being loaded in the visual editor.

## Notes
* `npm run dev` gives you a local SSL certificatie for localhost so allow it please. Otherwise Storyblok's visual live editor won't work.
* There is no `.env.local` or `.env` in this repository since it is in .gitignore. Please create it yourself and add the access token. Use the preview token for `.env.local` and the public token for `.env` when deploying 
