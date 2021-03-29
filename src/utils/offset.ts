/**
 * 获取元素定位
 * @param {*} element 
 */
export function cumulativeOffset(el:any) {
  let top = el.offsetTop
  let left = el.offsetLeft

  return {
    top: top,
    left: left
  }
}

/**
 * 判断元素是否在窗口内
 * @param {*} el 
 */
export function checkInView(el:any) {
  let rect = el.getBoundingClientRect()
  return (
    (rect.top > 0 && rect.top < window.innerHeight) &&
    (rect.left < window.innerWidth &&
      rect.right > 0)
  )
}
