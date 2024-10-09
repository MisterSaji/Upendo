import { getStoryblokApi } from "@storyblok/react/rsc";

import StoryblokStory from "@storyblok/react/story";

// Function to fetch data from Storyblok
async function fetchData(locale = "nl") {
  const sbParams = {
    version: "draft",
    resolve_links: "url",
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/contact`, sbParams, {
    cache: "no-store",
  });
}

const contact = async ({ params }) => {
  const locale = params?.locale || "nl"; // default to 'nl' if locale isn't passed
  const { data } = await fetchData(locale);

  console.log(data); // Log Storyblok data for debugging

  return (
    <div>
      {/* <h1>{data.story.name}</h1> */}
      <StoryblokStory story={data.story} />
    </div>
  );
};

export default contact;
