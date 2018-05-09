/**
 * @param {Object} any*
 * @example
 *  classNames('a', 'b', 'c', { d: 1, e: 0 })
 *  // "a b c d"
 *  classNames('a', 'b', 'c', { d: 1, e: 0 }, {f: 'e'})
 *  // "a b c d f"
 *  classNames('a', 'b', 'c', { d: 1, e: 0 }, {f: 'e'}, ['g', 'h', {'i': '1', 'j': false }])
 *  // "a b c d f g h i"
 *
 * @return {String} classnames string
 */
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
