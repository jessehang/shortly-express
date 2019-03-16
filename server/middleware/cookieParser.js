const parseCookies = (req, res, next) => {
  let cookieObj = {};
  if(req.headers.cookie) {
    let cookieArr = req.headers.cookie.split('; ')
    for (let i = 0; i < cookieArr.length; i++) {
      let cookie = cookieArr[i].split('=');
      cookieObj[cookie[0]] = cookie[1];
    }
    req.cookies = cookieObj;
    next();
  } else {
    next();
  }
};

module.exports = parseCookies;
