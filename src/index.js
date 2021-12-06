const idcache_ = {};
const configDefault = { 
  prefix: '#', 
  suffix: `-${Date.now()}`,
};
let uid_ = 0;

const uid = (config = configDefault) => {
  let id_;
  for (; idcache_.hasOwnProperty((id_ = `${config.prefix}${uid_++}${config.suffix}`)); );
  return id_;
};

module.exports = uid;
