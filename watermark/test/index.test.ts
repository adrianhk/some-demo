import { createWaterMark } from '../src/index';

const verImgUrl =
  "https://images.unsplash.com/photo-1594638887412-be2eba65bda7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80";
const horiImgUrl =
  "https://images.unsplash.com/photo-1594502645146-919ab24010e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";

createWaterMark({
  dataSource: verImgUrl,
  dataSourceType: "url",
  content: "仅供4399家长监护平台身份证使用",
  success: base64Url => {
    console.log(base64Url);
  }
})
