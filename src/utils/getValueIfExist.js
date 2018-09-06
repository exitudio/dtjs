/**
 * [getValueIfExist()] for solving problem with checking undefine value in 
 * deep object.
 * ex. 
 *  getFunction(()=>obj.key1.key2.key3, "-")
 *  Will check all undefined keys and return default value if it happens.
 * @param {Function} getFunction function that return object
 * @param {String} [optional] if no defaultValue will return {}.
 * @returns {Mix} return what ever getFunction() return (if it exist)
 */

// This function is ducktape, using with caution
// - default vaule (and getFunction) cannot be "" or 0 (need to use " ")
export default function(getFunction, defaultValue) {
  try {
    const tryingValue = getFunction();
    if (tryingValue!==undefined) {
      return tryingValue;
    }
    return defaultValue;
  } catch (e) {
    return defaultValue||{};
  }
}
