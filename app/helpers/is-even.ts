import { helper } from '@ember/component/helper';

export default helper(function isEven([index]: [number]) {
  return index % 2 === 0;
});
