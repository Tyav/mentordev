import React from 'react';

function SocialLogin(props) {
  return (
    <>
      <p style={{ textAlign: 'center' }}>{props.heading}</p>
      <div className="social-login">
        <button>
          <i className="mdi mdi-github-circle" /> GitHub
        </button>
        <button>
          <i className="mdi mdi-google google-social" /> Google
        </button>
      </div>
    </>
  );
}

export default SocialLogin;
