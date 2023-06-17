import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { slugify } from "../../utils";
import { useState, useEffect } from "react";

import VideoPlayer from "../../videoPlayer/VideoPlayer";

const SliderOne = (props) => {
  const [videoPlay, setVideoPlay] = useState({ Image: true, Video: false });

  const slidePost = props.postData.filter((post) => post.slidePost === true);
  const secondPost = props.newsData[1];
  console.log(secondPost.newsCate.catagoryName);
  // console.log(slidePost);

  function playVideo() {
    console.log("h");
  }

  function SlickNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow next-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-right"></i>
      </button>
    );
  }

  function SlickPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`slide-arrow prev-arrow ${className}`}
        onClick={onClick}
      >
        <i className="fal fa-arrow-left"></i>
      </button>
    );
  }

  const slideSettings = {
    dots: false,
    infinite: false,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlickNextArrow />,
    prevArrow: <SlickPrevArrow />,
  };
  return (
    <div className="slider-area bg-color-grey">
      <div className="axil-slide slider-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Slider
                {...slideSettings}
                className="slider-activation axil-slick-arrow"
              >
                {slidePost.slice(0, 3).map((data) => (
                  <div className="content-block" key={data.slug}>
                    {/* Start Post Thumbnail  */}
                    {data.featureImg && videoPlay.Image ? (
                      <div className="post-thumbnail">
                        {/* <Link href={`/post/${data.slug}`}>
                        <a> */}
                        <Image
                          src={secondPost.newsImage}
                          alt="Sports Image"
                          height={650}
                          width={1230}
                          priority
                          placeholder="blur"
                          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII=`}
                        />
                        {/* </a>
                        </Link> */}
                        {true ? (
                          <div
                            onClick={() => {
                              console.log("hello");
                            }}
                          >
                            <a className="video-popup position-top-center">
                              <span className="play-icon" />
                            </a>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      <VideoPlayer secondPost={secondPost}></VideoPlayer>
                    )}
                    {/* End Post Thumbnail  */}
                    {/* Start Post Content  */}
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                          <Link href={`/category/${slugify(data.cate)}`}>
                            <a className="hover-flip-item-wrapper">
                              <span className="hover-flip-item">
                                <span
                                  data-text={secondPost.newsCate.catagoryName}
                                >
                                  {secondPost.newsCate.catagoryName}
                                </span>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <h2 className="title">
                        <Link href={`/post/${data.slug}`}>
                          <a>{secondPost.newsTitle}</a>
                        </Link>
                      </h2>
                      {/* Post Meta  */}
                      <div className="post-meta-wrapper with-button">
                        <div className="post-meta">
                          <div className="content">
                            <ul className="post-meta-list">
                              <li>{data.date}</li>
                              <li>{data.post_views}</li>
                            </ul>
                          </div>
                        </div>
                        <ul className="social-share-transparent justify-content-end">
                          {data.author_social.map((data) => (
                            <li key={data.url}>
                              <a href={data.url}>
                                <i className={data.icon} />
                              </a>
                            </li>
                          ))}
                        </ul>
                        <div className="read-more-button cerchio">
                          <Link href={`/post/${data.slug}`}>
                            <a className="axil-button button-rounded hover-flip-item-wrapper">
                              <span className="hover-flip-item">
                                <span data-text="Read Post">Read Post</span>
                              </span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* End Post Content  */}
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderOne;

{
  /* <div className="post-content">
  <div className="post-cat">
    <div className="post-cat-list">
      <Link href={`/category/${slugify(data.cate)}`}>
        <a className="hover-flip-item-wrapper">
          <span className="hover-flip-item">
            <span data-text={data.cate}>{data.cate}</span>
          </span>
        </a>
      </Link>
    </div>
  </div>
  <h2 className="title">
    <Link href={`/post/${data.slug}`}>
      <a>{data.title}</a>
    </Link>
  </h2>
  /-----Post Meta -----comment
  <div className="post-meta-wrapper with-button">
    <div className="post-meta">
      <div className="post-author-avatar border-rounded">
        <Image
          src={data.author_img}
          alt={data.author_name}
          height={50}
          width={50}
          placeholder="blur"
          blurDataURL={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mPcXw8AAgMBQLfkYc4AAAAASUVORK5CYII=`}
        />
      </div>
      <div className="content">
        <h6 className="post-author-name">
          <Link href={`/author/${slugify(data.author_name)}`}>
            <a className="hover-flip-item-wrapper">
              <span className="hover-flip-item">
                <span data-text={data.author_name}>{data.author_name}</span>
              </span>
            </a>
          </Link>
        </h6>
        <ul className="post-meta-list">
          <li>{data.date}</li>
          <li>{data.post_views}</li>
        </ul>
      </div>
    </div>
    <ul className="social-share-transparent justify-content-end">
      {data.author_social.map((data) => (
        <li key={data.url}>
          <a href={data.url}>
            <i className={data.icon} />
          </a>
        </li>
      ))}
    </ul>
    <div className="read-more-button cerchio">
      <Link href={`/post/${data.slug}`}>
        <a className="axil-button button-rounded hover-flip-item-wrapper">
          <span className="hover-flip-item">
            <span data-text="Read Post">Read Post</span>
          </span>
        </a>
      </Link>
    </div>
  </div>
</div>; */
}
