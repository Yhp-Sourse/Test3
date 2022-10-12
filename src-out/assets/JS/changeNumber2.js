export default function changeNumber2(value, bl) {
  //value:值  bl:保留位数 int
  if (!value || isNaN(value)) {
    value = 0.0
    value = parseFloat(value).toFixed(bl)
  } else {
    value = parseFloat(value).toFixed(bl)
    // value=value.replace(/[^\.\d]/g,'');
  }
  return value
}
