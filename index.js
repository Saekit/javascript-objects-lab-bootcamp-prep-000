var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({key: value}, object);
  return newObj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  return object;
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({key}, object);
  return newObj;
}
