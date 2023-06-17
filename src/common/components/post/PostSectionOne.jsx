import React, { useRef } from "react";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import { HoverActiveClass } from "../../utils";
import PostLayoutOne from "./layout/PostLayoutOne";

const PostSectionOne = (props) => {
  const hoverRef = useRef("");
  HoverActiveClass(hoverRef);
  //   console.log(props.postData);
  //   console.log(props.newsData);

  return (
    <div className="axil-featured-post axil-section-gap bg-color-grey">
      <div className="container">
        <SectionTitleOne title="More Featured Posts." />
        <div className="row" ref={hoverRef}>
          <PostLayoutOne
            postData={props.postData}
            itemShow="2"
            newsData={props.newsData}
          />
        </div>
      </div>
    </div>
  );
};

export default PostSectionOne;
