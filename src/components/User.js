import React from "react";

import { withRouter } from "react-router-dom";

function User(props) {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={props.history.goBack}
        // onClick={() => props.history.goBack()}
      >
        Geri git
      </button>
    </div>
  );
}

export default withRouter(User);
