export default function removeProperties(keysToRemove, obj) {
    if (!obj || typeof obj !== 'object') return obj;
  
    if (Array.isArray(obj)) {
      return obj.map((item) => removeProperties(keysToRemove, item));
    } else if (typeof obj === 'object') {
      if (obj instanceof Date) return obj;
      const newObj = {};
      Object.keys(obj).forEach((key) => {
        if (keysToRemove.indexOf(key) === -1) {
          if (Array.isArray(obj[key])) {
            newObj[key] = obj[key].map((item) => removeProperties(keysToRemove, item));
          } else if (typeof obj[key] === 'object') {
            newObj[key] = removeProperties(keysToRemove, obj[key]);
          } else {
            newObj[key] = obj[key];
          }
        }
      });
      return newObj;
    }
    return obj;
  }