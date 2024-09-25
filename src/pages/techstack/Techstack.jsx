import React from "react";
import "./techstack.css";
import { TechStackList } from "../../utils/TechStackList";
// import RubberBand from "react-reveal/RubberBand";
// import Fade from "react-reveal/Fade";

function Techstack() {
  return (
    <>
      <div id="technology" className="container techstack">
        {/* <RubberBand> */}
        <h2 className="col-md-12 mt-3 mb-1 text-center">Technologies Stack</h2>
        <hr />
        <p className="text-center pb-3">😎 Mern Developer - API Developer</p>
        {/* </RubberBand> */}
        <div className="row">
          {TechStackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center item-center">
                      {/* <Fade right> */}
                      <div className="alig-self-center">
                        <tech.icon size={25} title={tech.name} />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                      {/* </Fade> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Techstack;
