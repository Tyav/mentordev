
/**
 * 
 * @param {String} key - key name for value
 * @param {String} value - value t be stored
 * @param {Date} days - duration to store the cookie in days
 */
export const createCookie = (key,value,days) => { // Creates cookies
  let expires = ""
	if (days) {
		let date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
	  expires = "; expires="+date.toGMTString();
	}
	document.cookie = key+"="+value+expires+"; path=/";
}

export const readCookie = (key) => {
	var cookieKey = key + "=";
	var cookieArray = document.cookie.split(';');
	for(var i=0;i < cookieArray.length;i++) {
		var cookie = cookieArray[i];
		while (cookie.charAt(0) === ' ') cookie = cookie.substring(1,cookie.length);
		if (cookie.indexOf(cookieKey) === 0) return cookie.substring(cookieKey.length,cookie.length);
	}
	return null;
}

export const getSessionCookie = () => readCookie(process.env.REACT_APP_COOKIE_NAME);
export const eraseSessionCookie = () => eraseCookie(process.env.REACT_APP_COOKIE_NAME);

export const eraseCookie = (key) => {
	createCookie(key,"",-1);
	window.location.href = "/login";
}
