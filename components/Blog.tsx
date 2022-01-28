import { Fragment, useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  PocketShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinIcon,
  PocketIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination } from "swiper";
import dayjs from "dayjs";

SwiperCore.use([Navigation, Pagination]);

interface Post {
  id: string;
  content: string;
  title: string;
  url: string;
  updated: string;
}

Modal.setAppElement("#blog");

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [blog, setBlog] = useState<Post | null>(null);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/blogger/v3/blogs/8036422199805021206/posts?key=AIzaSyANvPLTLY3cHrBL3qD4Sy2-WVVJH4qNI-k&maxResults=6"
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setPosts(
          result.items.map((item: Post) => {
            return {
              id: item.id,
              content: item.content,
              title: item.title,
              url: item.url,
              updated: dayjs(item.updated).format("MMMM DD, YYYY"),
            };
          })
        );
      });
  }, []);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="edina_tm_news" id="blog">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Blog</h3>
          <p>
            I write blogs occasionally. Mainly on things that I experienced on a
            professional level. You can read them at my blog{" "}
            <a
              href="https://jithin-lal.blogspot.com"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <span style={{ color: "red" }}>Facade</span>
            </a>
            . Here are some of them:
          </p>
        </div>
        <div className="news_inner my_carousel">
          <ul>
            <Swiper
              navigation={true}
              loop={true}
              slidesPerView={3}
              className="mySwiper"
            >
              {posts.map((post: Post, index) => (
                <SwiperSlide
                  key={index}
                  onClick={() => {
                    setBlog(post);
                    toggleModal();
                  }}
                >
                  <li
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay={(index * 150).toString()}
                  >
                    <div className="list_inner">
                      <div className="image" onClick={toggleModal}>
                        <img src={"/img/placeholders/4-3.jpg"} alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: `url(
                          "https://source.unsplash.com/random/?tech"
                        )`,
                          }}
                        />
                      </div>

                      <div className="news_details">
                        <span>{post.updated}</span>
                        <h3 className="title">{post.title}</h3>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>

          {blog && (
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="My dialog"
              className="custom-modal"
              overlayClassName="custom-overlay"
              closeTimeoutMS={500}
            >
              <div className="edina_tm_modalbox">
                <button className="close-modal" onClick={toggleModal}>
                  <img src={"/img/svg/cancel.svg"} alt="close icon" />
                </button>
                <div className="box_inner">
                  <div className="description_wrap scrollable">
                    <div className="image">
                      <img src={"/img/placeholders/4-3.jpg"} alt="thumb" />
                      <div
                        className="main"
                        style={{
                          backgroundImage: `url("https://source.unsplash.com/random/?tech")`,
                        }}
                      />
                    </div>
                    <div className="news_details">
                      <span>{blog.updated}</span>
                      <h3 className="title">{blog.title}</h3>
                    </div>

                    <div className="main_content">
                      <div className="descriptions">
                        {ReactHtmlParser(blog.content)}
                      </div>
                      <div className="news_share custom-style">
                        <FacebookShareButton url={blog.url} quote={blog.title}>
                          <FacebookIcon round={true} size={32} />
                        </FacebookShareButton>
                        <LinkedinShareButton url={blog.url} title={blog.title}>
                          <LinkedinIcon round={true} size={32} />
                        </LinkedinShareButton>
                        <PocketShareButton url={blog.url} title={blog.title}>
                          <PocketIcon round={true} size={32} />
                        </PocketShareButton>
                        <TwitterShareButton url={blog.url} title={blog.title}>
                          <TwitterIcon round={true} size={32} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={blog.url} title={blog.title}>
                          <WhatsappIcon round={true} size={32} />
                        </WhatsappShareButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
