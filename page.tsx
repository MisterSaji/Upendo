import type { NextPage } from "next";
import { getStoryblokApi, ISbStoriesParams } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

type Props = {
  params: { locale: string };
};
async function fetchData(locale = "nl") {
  const sbParams: ISbStoriesParams = {
    version: "draft",
    resolve_links: "url",
    language: locale,
  };

  const storyblokApi = getStoryblokApi();
  try {
    const response = await storyblokApi.get(`cdn/stories/${locale}`, sbParams, {
      cache: "no-store",
    });
    return response;
  } catch (error) {
    console.error("Error fetching data from Storyblok API:", error);
    throw error;
  }
}
const Home: NextPage<Props> = async ({ params: { locale } }) => {
  const { data } = await fetchData(locale);
  console.log(data);
  return (
    <div>
      <h1>{data.story.name}</h1>
      <StoryblokStory story={data.story} />
    </div>
  );
};

export default Home;