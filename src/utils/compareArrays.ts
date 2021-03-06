function areEqualShallow(a: any, b: any) {
  if (a === b) return true;

  for (var key in a) {
    if (!(key in b) || a[key] !== b[key]) {
      return false;
    }
  }
  for (var key in b) {
    if (!(key in a) || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

export function compareArrays(arg1: any[], arg2: any[]) {
  if (arg1.length !== arg2.length) {
    return false;
  }
  for (let i = 0; i < arg1.length; i++) {
    let isDifferent = arg1[i] !== arg2[i];

    // Support option objects and arrays
    if (typeof arg1[i] === 'object' && typeof arg2[i] === 'object') {
      if (Array.isArray(arg1[i]) && Array.isArray(arg2[i])) {
        isDifferent = !compareArrays(arg1[i], arg2[i]);
      } else {
        isDifferent = !areEqualShallow(arg1[i], arg2[i]);
      }
    }

    if (isDifferent) return false;
  }

  return true;
}
