import oss from 'ali-oss'
const BUCKET_CiTY =  "oss-cn-shanghai";
const BUCKET_NAME =  "dkltest";
const OSS_ACCESS_KEY_ID = "LTAI4GAMwkdE4ok7w1GHhcvU";
const OSS_ACCESS_KEY_SECRET = "jhJYDOUhkIM7VtnrERXaMfBuPBf8ga";
let client = new oss({
    region:  BUCKET_CiTY,
    accessKeyId: OSS_ACCESS_KEY_ID,
    accessKeySecret: OSS_ACCESS_KEY_SECRET,
    bucket: BUCKET_NAME,
});
function test(file) {
    console.log(new Date())
   client.put('web測試',file).then(
      function (result) {
                console.log(result)
      }
   )
}
export default test