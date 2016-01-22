/* export : Child */

import Parent from './parent';

class Child extends Parent {
  doSomething () {
    return this.something();
  }
}

export default Child;