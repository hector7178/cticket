export default function keepProperties(keysToKeep, obj) {
    if (typeof obj !== 'object' || obj === null) return obj;
    if (Array.isArray(obj)) {
        return obj.map(item => keepProperties(keysToKeep, item)) ;
    }
  
    let newObj = {};
    keysToKeep.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                newObj[key] = keepProperties(keysToKeep, obj[key]);
            } else {
                newObj[key] = obj[key];
            }
        }
    });
    return newObj;
  }