import InstagramOne from "../common/components/instagram/InstagramOne";
import FooterOne from "../common/elements/footer/FooterOne";
import HeadTitle from "../common/elements/head/HeadTitle";
import HeaderOne from "../common/elements/header/HeaderOne";
import { getAllPosts } from "../../lib/api";
import PostSectionOne from "../common/components/post/PostSectionOne";
import PostSectionTwo from "../common/components/post/PostSectionTwo";
import PostSectionThree from "../common/components/post/PostSectionThree";
import CategoryList from "../common/components/category/CategoryList";
import PostSectionFour from "../common/components/post/PostSectionFour";
import SocialOne from "../common/components/social/SocialOne";
import PostSectionFive from "../common/components/post/PostSectionFive";
import PostSectionSix from "../common/components/post/PostSectionSix";
import SliderOne from "../common/components/slider/SliderOne";

import { createClient } from "next-sanity";

const HomeDefault = ({ allPosts, newsdata }) => {
  console.log(newsdata);
  const videoPost = allPosts.filter((post) => post.postFormat === "video");

  return (
    <>
      <HeadTitle pageTitle="Home Default" />
      <HeaderOne postData={allPosts} />
      <SliderOne postData={allPosts} newsData={newsdata} />
      <PostSectionOne postData={allPosts} />
      <PostSectionTwo postData={allPosts} adBanner={true} />
      <CategoryList cateData={allPosts} />
      <PostSectionSix postData={allPosts} />
      <SocialOne />
      <PostSectionFive postData={allPosts} />
      <PostSectionFour postData={allPosts} adBanner={true} />
      <PostSectionThree postData={videoPost} heading="Featured Video" />
      <InstagramOne parentClass="bg-color-grey" />
      <FooterOne />
    </>
  );
};

export default HomeDefault;

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "id",
    "title",
    "featureImg",
    "postFormat",
    "featured",
    "slidePost",
    "date",
    "slug",
    "cate",
    "cate_img",
    "author_img",
    "author_name",
    "post_views",
    "read_time",
    "author_social",
  ]);

  const client = createClient({
    projectId: "kbgpbmgs",
    dataset: "production",
    token:
      "skpYMr8HxVh8rTP8RcJf1gTecUg6294lIy8Epp484VpzpHUqiFeHh9sQehavq2LjbvF5TEWLCk4xeGoAR4D8m2sBZUtIQxNrA6RBJLoYYRwrKHBeqO1Znd4ejmaydNzqc3soLXME4TAJ9BQODn0QGazAqGO1BUA7kCLELqjCsugfWFzOM3tt",
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: "1",
  });

  const query = `*[_type=="news"]{newsTitle,newsLongDescription,newsShortDescription,
                   slug,video,"newsImage":newsImage.asset->url}`;
  const newsdata = await client.fetch(query);

  return {
    props: { allPosts, newsdata },
  };
}

// export async function getServerSideProps(context) {
//   const client = createClient({
//     projectId: "kbgpbmgs",
//     dataset: "production",
//     token:
//       "skigWMtUCbh27uirnYRuv6UUv5jvFKuwZ205Tj51h5ZUahHy2mvOexj8YcVosdSVorbei1Qt7PhzmZ7YYdZJltrL3JmOGZNal9MOSGGrKETXThcFr842NBdYTLXIMTIFYejwgNURLAOIVPknkf4jUcNov5tXANOXePAJB6chA76ggxNgWkUYkbgpbmgs",
//     useCdn: false, // set to `false` to bypass the edge cache
//     apiVersion: "1",
//   });
//   const pets = await client.fetch(`*[_type == "news"]`);

//   return {
//     props: {
//       pets,
//     },
//   };
// }
