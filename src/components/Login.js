import React, { useState, useEffect } from 'react';
import "../App.css";

function Login() {
  
  console.log(localStorage)
  localStorage.clear()
  var [show, setShow] = useState(localStorage.getItem("show"));
  console.log("show: " + show);

  var classNameModal = "modal";

  function validateKey(key) {
    if (key === "abc123") {
      return true
    } else {
      return false
    };
  };

  let onSubmitLogin = (e) => {
    e.preventDefault();
    let key = e.target.key.value;
    if (validateKey(key)) {
      console.log(true);
      localStorage.setItem("show", "false");
      setShow(false);
    } else {
      console.log("nope");
      localStorage.setItem("show", "true")
    };
  }
  return (
    <div>
      {
        (show === "true") ?
          <div id="myModal" className={classNameModal}>
            <div className="modal-content">
              <form onSubmit={onSubmitLogin} name="loginForm" id="loginForm">
                <p>Some text in the Mosdal..</p>
                <input type="text" placeholder="ENTER KEY" name="key" id="key" />
                <button type="submit" onSubmit>Submit</button>
              </form>

            </div>
          </div>
          :
          null
      }
    </div>
  );

}

export default Login;