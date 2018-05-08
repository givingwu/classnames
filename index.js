export default const classNames = (...args) => {
  return args.map(t => {
    if(Array.isArray(t)) {
      return t.map(i => classNames(i)).join(' ')
    } else if (typeof t === 'object') {
      return Object.keys(t).filter(k => t[k]).join(' ')
    } else {
      return typeof t !== 'string' ? t.toString() : t
    }
  }).join(' ')
}
