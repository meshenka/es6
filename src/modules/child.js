/* export Child */

import { Parent } from './parent';

export default class Child extends Parent {
  doSomething () {
    return this.something;
  }
}