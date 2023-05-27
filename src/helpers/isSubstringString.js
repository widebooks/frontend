const isSubstringString = (sub = "", string = "") => {
  const regExp = new RegExp(sub, 'i');

  return regExp.test(string.trim())
}

export default isSubstringString;