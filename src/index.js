module.exports = function check(str, bracketsConfig) {
  const bracketsArr = bracketsConfig.map((item) => item[0] + item[1]);

  while (true) {
    let newStr = str;

    bracketsArr.forEach((b) => {
      newStr = newStr.replaceAll(b, '');
    });

    if (newStr === str) break;
    str = newStr;
  }

  return !str.length;
};
