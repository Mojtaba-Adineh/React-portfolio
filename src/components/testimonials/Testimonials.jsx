import React from "react";
import "./testimonials.scss";
import twitterIcon from "../../assets/twitter.png"
import youtubeIcon from "../../assets/youtube.png"
import linkedinIcon from "../../assets/linkedin.png"
import rightArrow from "../../assets/right-arrow.png"


const Testimonials = () => {
  const peopleCard = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: twitterIcon,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: youtubeIcon,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: linkedinIcon,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {peopleCard.map((person) => (
          <div className={person.featured ? "featured card" : "card"}>
            <div className="top">
              <img className="left" src={rightArrow} alt="" />
              <img
                className="user"
                src={person.img}
                alt=""
              />
              <img className="right" src={person.icon} alt="" />
            </div>
            <div className="center">
              {person.desc}
            </div>
            <div className="bottom">
              <h3>{person.name}</h3>
              <h4>{person.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
