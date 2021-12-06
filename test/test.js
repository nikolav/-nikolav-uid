const uid = require('nikolav-uid');
const tests = {
    returnsUnique: (uid) => {
        return uid() !== uid();
    }, 
};
console.log(uid());
console.log(tests.returnsUnique(uid));

