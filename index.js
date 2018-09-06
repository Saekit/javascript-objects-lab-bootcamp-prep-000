var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({'': value}, object);
  newObj[key] = value;
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({'': value}, object);
  delete newObj.key;
  return newObj;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[''];
  return object;
}
console.log(deleteFromObjectByKey(recipes, 'apple pie', 'apples'))
