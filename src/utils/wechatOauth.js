var OAuth = require('wechat-oauth');
var client = new OAuth('wxf53ebc8656c7b6c2', 'ef3649c7af8eb1edcd3c6a2f56fd52b6');

export function getUserinfo({code}) {
  wechat.getAccessToken(code, function (err, result) {
    var accessToken = result.data.access_token;
    var openid = result.data.openid;
    wechat.getUser(openid, function (err, result) {
      console.log(result);
      const res = result;
    });
  });
  return res;
}
