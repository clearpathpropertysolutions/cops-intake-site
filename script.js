function formToObject(form) {
  const fd = new FormData(form);
  const obj = {};
  for (const [k, v] of fd.entries()) {
    if (obj[k] !== undefined) {
      obj[k] = Array.isArray(obj[k]) ? [...obj[k], v] : [obj[k], v];
    } else {
      obj[k] = v;
    }
  }
  return obj;
}
