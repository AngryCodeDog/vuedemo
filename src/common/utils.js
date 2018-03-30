function formatterDate (value) {
  var time = new Date(value)
  var Y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var H = time.getHours()
  var i = time.getMinutes()
  var s = time.getSeconds()
  if (m < 10) { m = '0' + m }
  if (d < 10) { d = '0' + d }
  if (H < 10) { H = '0' + H }
  if (i < 10) { i = '0' + i }
  if (s < 10) { s = '0' + s }
  var result = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s
  return result
}

export {
    formatterDate
}
