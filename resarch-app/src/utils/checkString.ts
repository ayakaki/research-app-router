export const checkString = (str: any): str is string => {
  if (typeof str === 'undefined') {
    return false;
  }

  return typeof str === 'string';
};
