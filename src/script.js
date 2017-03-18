/* @flow */
/* global document */
/* global console */

import Chld from './modules/child'

const child = new Chld(10, 30)

console.log(child.doSomething())
