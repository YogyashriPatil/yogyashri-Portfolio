import mongodb from "../assets/mongodb.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";
import express from "../assets/express.svg";

export const Info = () => {
  return <div className="text-white ">
    <div className="text-4xl">Full Stack Developer</div>
    <div className="flex gap-10">
        <img src={mongodb} alt="MongoDB" className="h-10 w-10" />
        <img src={react} alt="React" className="h-10 w-10" />
        <img src={nodejs} alt="Nodejs" className="h-10 w-10" />
        <img src={express} alt="Express" className="h-10 w-10 bg-white" />
        
        {/* <img src={} */}
    </div>
    <div className="text-2xl">Artifical inteligence / Machine Learning</div>

  </div>
};
