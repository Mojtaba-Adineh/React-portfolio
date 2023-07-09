import React, {useState} from "react";
import "./works.scss";
import arrowIcon from "../../assets/arrow.png"
import globeIcon from "../../assets/globe.png"
import mobileIcon from "../../assets/mobile.png"
import writingIcon from "../../assets/writing.png"

const Works = () => {
  const[currentSlide , setCurrentSlide] = useState(0);

  const sliderItems = [
    {
      id: "1",
      icon: mobileIcon,
      title: "Web Design",
      desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: globeIcon,
      title: "Mobile Application",
      desc: "lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: writingIcon,
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (direction) => {
    console.log(direction);
    direction === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < sliderItems.length -1 ? currentSlide+1 : 0); 
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform : `translateX(-${currentSlide * 100}vw) `}}>
        {sliderItems.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={item.icon} alt="" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>
                    {item.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src={item.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img onClick={() => handleClick("left")} src={arrowIcon} className="arrow left" alt="" />
      <img onClick={() => handleClick("right")} src={arrowIcon} className="arrow right" alt="" />
    </div>
  );
};

export default Works;
