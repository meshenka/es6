/* global document */

import Child from './modules/child';

let child = new Child(10,30);

document.body.innerText = child.doSomething();