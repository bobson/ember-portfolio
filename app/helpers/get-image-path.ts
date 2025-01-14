import { helper } from '@ember/component/helper';

export function getImagePath([imageName]: [string]) {
  return `/images/${imageName}`;
}

export default helper(getImagePath);
