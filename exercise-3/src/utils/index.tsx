export const _debounce = (fn, d) => {
  let timer
  return function () {
    let context = this,
      args = arguments
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, d)
  }
}
