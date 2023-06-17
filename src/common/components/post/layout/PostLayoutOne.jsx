import Link from "next/link";
import Image from "next/image";
import { slugify } from "../../../utils";

const PostLayoutOne = (props) => {
  const featuredPost = props.postData.filter((post) => post.featured === true);
  // console.log(props.newsData[0].newsCate.catagoryName);
  // console.log(props.newsData[0].newsImage);
  // console.log(props.newsData[0].newsTitle);
  // console.log(props.newsData[0].newsShortDescription);
  // console.log(props.newsData[0].slug.current);

  return (
    <>
      {props.newsData.slice(0, props.itemShow).map((news) => (
        <div
          className="col-lg-6 col-xl-6 col-md-12 col-12 mt--30"
          key={news.slug.current}
        >
          <div className="content-block content-direction-column post-horizontal thumb-border-rounded">
            <div className="post-content">
              <div className="post-cat">
                <div className="post-cat-list">
                  <Link
                    href={`/category/${slugify(news.newsCate.catagoryName)}`}
                  >
                    <a className="hover-flip-item-wrapper">
                      <span className="hover-flip-item">
                        <span data-text={news.newsCate.catagoryName}>
                          {news.newsCate.catagoryName}
                        </span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
              <h4 className="title">
                <Link href={`/post/${news.slug.current}`}>
                  <a>{news.newsTitle}</a>
                </Link>
              </h4>
              <div
                className="post-meta"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <button
                  type="button"
                  style={{
                    color: "#fff",
                    borderRadius: "20px",
                    paddingBlock: "10px",
                    backgroundColor: "#3858f6",
                    border: "none",
                    fontSize: "20px",
                    marginBottom: "20px",
                  }}
                >
                  Read Post
                </button>

                <div>
                  <p>16 June 2023 </p>
                </div>
              </div>
            </div>
            {news.newsImage ? (
              <div className="post-thumbnail">
                <Link href={`/post/${news.slug.current}`}>
                  <a>
                    <Image
                      src={news.newsImage}
                      alt={news.newsTitle}
                      height={250}
                      width={250}
                      priority={true}
                    />
                  </a>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default PostLayoutOne;

{
  /* <div className="post-author-avatar border-rounded">
                  <Image
                    src={data.author_img}
                    alt={data.author_name}
                    height={50}
                    width={50}
                  />
                </div>
                <div className="content">
                  <h6 className="post-author-name">
                    <Link href={`/author/${slugify(data.author_name)}`}>
                      <a className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={data.author_name}>
                            {data.author_name}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </h6>
                  <ul className="post-meta-list">
                    <li>{data.date}</li>
                    <li>{data.post_views}</li>
                  </ul>
                </div>
               */
}
