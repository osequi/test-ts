/**
 * Returns an array element identified by an element in another array.
 * @param  {array} targetArray Return the element from this array.
 * @param  {array} sourceArray Look for the identifier in this array.
 * @param  {any}   identifier  The element to look for.
 * @return {any}             The resulting element.
 * Example: findInArrays([preset1, preset2], ['preset1', 'preset2'], 'preset1') => preset1
 */
const useFindInArrays = (
  targetArray: any[],
  sourceArray: any[],
  identifier: string
): any => {
  const index = sourceArray.findIndex((item) => item === identifier);

  return index === -1 ? null : targetArray[index];
};

export default useFindInArrays;
