import * as uuid from 'uuid';
import {strict} from 'node:assert';
import {version} from './index.js';

function max() {
    strict(version(uuid.MAX) === 15);
}

function nil() {
    strict(version(uuid.NIL) === 0);
}

function v4() {
    strict(version(uuid.v4()) === 4);
}

function v6() {
    strict(version(uuid.v6()) === 6);
}

function v7() {
    strict(version(uuid.v7()) === 7);
}

max();
nil();
v4();
v6();
v7();

console.log("All tests are run.");