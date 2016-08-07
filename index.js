module.exports = function (object, ...propertiesToHide) {
  const proxyObject = new Proxy(object, {
    has(object, property) {
      if (propertiesToHide.indexOf(property) != -1) {
        return false;
      }
      return Reflect.has(object, property);
    },
    ownKeys(object) {
      return Reflect.ownKeys(object).filter(
        (property) => propertiesToHide.indexOf(property) == -1
      );
    },
    getOwnPropertyDescriptor(object, property) {
      if (propertiesToHide.indexOf(property) != -1) {
        return undefined;
      }
      return Reflect.getOwnPropertyDescriptor(object, property);
    }
  });
  return proxyObject;
}
