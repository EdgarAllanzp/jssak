import array from './array/index';
import _function from './function/index';
import string from './string/index';

export default {
  ...array,
  ..._function,
  ...string
};
