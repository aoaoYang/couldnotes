function formatTime (date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber (n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isNull(str) {
  if (Object.prototype.toString.call(str) === '[object Undefined]') { //空
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' ||
    Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
    return str.length == 0 ? true : false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str) == '{}' ? true : false
  } else if (typeof(str) == 'number') { //Number 型
    if (str) {
      return false
    } else { //数字0 不算空
      if (str == 0) {
        return false
      }
      return true
    }
  } else if (typeof(str) == 'boolean') {
    if (!param) {
      return true;
    } else {
      return false;
    }
  } else {
    return true
  }
}


module.exports = {
  formatTime: formatTime//时间格式化
}
module.exports = {
  isNull: isNull//判断字段为空
}
