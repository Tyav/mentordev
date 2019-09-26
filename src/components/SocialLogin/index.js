import React from 'react';

function SocialLogin(props) {
  return (
    <>
      <p style={{ textAlign: 'center' }}>{props.heading}</p>
      <center>
        <div className="social-login">
          <button
            onClick={() =>
              (window.location.href =
                `https://github.com/login/oauth/authorize?${props.gitUrl}`)
            }
          >
            <i className="mdi mdi-github-circle" /> GitHub
          </button>
          {/* <button>
          <i className="mdi mdi-google google-social" /> Google
        </button> */}
        </div>
      </center>
    </>
  );
}

export default SocialLogin;
