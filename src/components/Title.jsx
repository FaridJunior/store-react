import React from "react";

const Title = ({ name, title }) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-capitalize fontweight-bold">
            {name}
            <strong className="text-blue">{title}</strong>
          </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Title;
