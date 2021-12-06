const idcache_ = {};
const configDefault = { prefix: `#${Date.now()}-` };
let uid_ = 0;

const uid = (config = configDefault) => {
  let id_;
  for (; idcache_.hasOwnProperty((id_ = `${config.prefix}${uid_++}`)); );
  return id_;
};

module.exports = uid;
