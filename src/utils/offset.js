/**
 * 获取元素位置
 * @param {*} element 
 */
export function cumulativeOffset (element) {
  let top = 0
  let left = 0

  do {
    top += element.offsetTop || 0
    left += element.offsetLeft || 0
    element = element.offsetParent
  } while (element)

  return {
    top: top,
    left: left
  }
}

/**
 * 判断元素是否在窗口内
 * @param {*} el 
 */
export function checkInView (el) {
  let rect = el.getBoundingClientRect()
  return (
    rect.top < window.innerHeight &&
    (rect.left < window.innerWidth &&
      rect.right > 0)
  )
}
