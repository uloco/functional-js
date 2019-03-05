const _ = require("lodash/fp");
const R = require("ramda");

const lAdd10 = _.add(10);
const rAdd10 = R.add(10);
console.log(lAdd10(20));
console.log(rAdd10(20));
