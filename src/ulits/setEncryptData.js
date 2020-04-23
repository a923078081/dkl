import md5 from 'md5'
function sort(obj) {
  let setObj = {
      ...obj,
  }
  let Array = Object.keys(setObj).sort();
  let NewObject = {};
  Array.forEach(item => {
      NewObject[item] = setObj[item];
  })
    return NewObject
}
function Conversion(obj) {
    obj = JSON.stringify(obj);
    obj = obj.replace(/\{/g, "")
    obj = obj.replace(/\}/g, "")
    obj = obj.replace(/:/g, "=")
    obj = obj.replace(/,/g, "&")
    return obj
}
function encrypt(data) {
           let setMd5 = sort(data)
           setMd5 = Conversion(setMd5)
           return md5(setMd5)
}
export default encrypt