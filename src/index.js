const idcache_ = {};
let uid_ = 0;

module.exports = uid;

function uid(config = { prefix: "#" }) {
  let id_;
  for (; idcache_.hasOwnProperty((id_ = `${config.prefix}${uid_++}`)); );
  return id_;
}
