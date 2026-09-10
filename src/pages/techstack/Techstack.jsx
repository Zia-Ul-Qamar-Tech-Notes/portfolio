import React from "react";
import "./techstack.css";
import { TechStackList } from "../../utils/TechStackList";
// import RubberBand from "react-reveal/RubberBand";
// import Fade from "react-reveal/Fade";

function Techstack() {
  return (
    <>
      <section id="technology" className="container techstack" aria-labelledby="techstack-heading">
        {/* <RubberBand> */}
        <h2 id="techstack-heading" className="col-md-12 mt-3 mb-1 text-center">
          Technologies Stack
        </h2>
        <hr />
        <p className="text-center pb-3">
          😎 Python Developer - Mern Developer - Software Engineer - API
          Developer
        </p>
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
                        <h3>{tech.name}</h3>
                      </div>
                      {/* </Fade> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Techstack;
