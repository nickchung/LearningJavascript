'use strict';

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map();
userRoles.set(u1, 'User');
userRoles.set(u2, 'Admin');

let x = userRoles.get(u2);

//console.log(x);

for(let ur of userRoles.entries())
console.log(`${ur[0].name}: ${ur[1]}`);