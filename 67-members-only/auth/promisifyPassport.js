import { promisify } from 'node:util';
import passportHttpRequest from 'passport/lib/http/request.js';

function promisifyPassport(req, _res, next) {
  req.promiseLogIn = promisify(passportHttpRequest.logIn);
  req.promiseLogOut = promisify(passportHttpRequest.logOut);
  next();
}

export { promisifyPassport };
