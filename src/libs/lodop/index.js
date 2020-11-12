import getLodop from './LodopFuncs'
import cloneDeep from 'lodash/cloneDeep'
import { tableTempTohtml, imageTempTohtml, strTempToValue, htmlTempTohtml } from './tools'

export default { print, preview, previewTemp }
/**
 * 打印功能
 * @param {*Object} temp 打印模板
 * @param {*Array} data 打印数据
 */
function print(temp, data) {
  let LODOP = _CreateLodop(temp.title, temp.width, temp.height, temp.pageWidth, temp.pageHeight)
  let tempItems = cloneDeep(temp.tempItems)
  let printContent = _TempParser(tempItems, data)
  if (data.printContent > 1) {
    // 打印多份
    printContent.forEach((aPrint, index) => {
      LODOP.NewPageA()
      aPrint.forEach(printItem => {
        _AddPrintItem(LODOP, printItem, index)
      })
    })
  } else {
    // 单份
    printContent[0].forEach(printItem => {
      _AddPrintItem(LODOP, printItem)
    })
  }

  let flag = LODOP.PRINT()
  return flag
}

/**
 * 打印预览功能
 * @param {*Object} temp 打印模板
 * @param {*Array} data 打印数据
 */
function preview(temp, data) {
  let LODOP = _CreateLodop(temp.title, temp.width, temp.height, temp.pageWidth, temp.pageHeight)
  let tempItems = cloneDeep(temp.tempItems)
  let printContent = _TempParser(tempItems, data)
  if (data.printContent > 1) {
    // 打印多份
    printContent.forEach((aPrint, index) => {
      LODOP.NewPageA()
      aPrint.forEach(printItem => {
        _AddPrintItem(LODOP, printItem, index)
      })
    })
  } else {
    // 单份
    printContent[0].forEach(printItem => {
      _AddPrintItem(LODOP, printItem)
    })
  }

  let flag = LODOP.PREVIEW()
  return flag
}

/**
 * 模板预览功能
 * @param {*Object} temp 打印模板
 */
function previewTemp(temp) {
  let LODOP = _CreateLodop(temp.title, temp.width, temp.height, temp.pageWidth, temp.pageHeight)

  let printContent = _TempParser(temp.tempItems)
  printContent[0].forEach(printItem => {
    _AddPrintItem(LODOP, printItem)
  })
  let flag = LODOP.PREVIEW()
  return flag
}


/**
 * LODOP 根据属性创建打印
 * @param pageName 纸张名称
 * @param width 可视区域宽度(单位px)
 * @param height 可视区域高度(单位px)
 * @param pageWidth 纸张宽度(mm)
 * @param pageHeight 纸张高度(mm)
 * @param top 可视区域上边距(单位px)
 * @param left 可视区域左边距(单位px)
 */
function _CreateLodop(pageName, width, height, pageWidth = 0, pageHeight = 0, top = 0, left = 0) {
  let LODOP = getLodop()
  // 设置软件产品注册信息
  // LODOP.SET_LICENSES('成都九洲电子信息系统股份有限公司', '1DAA3FA17DD9EF73566A29AC39CE300C', '成都九洲電子信息系統股份有限公司', 'F0F8A487D1A0DEBA028F42800034942A')
  // LODOP.SET_LICENSES('THIRD LICENSE', '', 'Chengdu Jiuzhou Electronic Information System Co., Ltd.', '1E6D08DE79B42A3871D5EF3423D77853')
  LODOP.PRINT_INITA(top, left, width, height, pageName)
  LODOP.SET_PRINT_PAGESIZE(1, pageWidth ? pageWidth + 'mm' : 0, pageHeight ? pageHeight + 'mm' : 0, '')

  return LODOP
}

/**
 * 解析模板和数据生成打印项
 * @param {*Array} tempItem 模板打赢项
 * @param {Array} data 打印数据,
 * @return {Array} 若data为null则返回处理后的模板
 */
function _TempParser(tempItem, data) {
  let temp = cloneDeep(tempItem)
  //修改模板答应项顺序
  //将自适应高度的打印项（item.style.AutoHeight == 1）放在第一项
  let flag = temp.findIndex(item => item.style.AutoHeight == 1)
  if (flag != -1) {
    let autoItem = temp[flag]
    temp.splice(flag, 1)
    temp.unshift(autoItem)
    // 处理位于自适应打印项下方的打印项
    temp.forEach(item => {
      // 位于自适应大项下的打印项修改top、left,并添加关联属性（style.LinkedItem）
      if (item.top > autoItem.top && item.style.ItemType == 0) {
        item.top = item.top - autoItem.top - autoItem.height
        item.left = item.left - autoItem.left
        item.style.LinkedItem = 1
      }
    })
  }

  if (data && data.length > 1) {
    // 解析打印模板和数据，生成生成打印内容
    let tempContent = []
    data.forEach(dataItem => {
      let conItem = temp.map(tempItem => {
        let item = cloneDeep(tempItem)
        if (item.name) {
          item.defaultValue = dataItem[item.name]
          item.value = strTempToValue(item.value, item.defaultValue || '')
        }
        return item
      })
      tempContent.push(conItem)
    })
    return tempContent
  } else {
    return [temp]
  }
}


/**
 * 添加打印项
 * @param {lodop} LODOP 打印实例
 * @param {Object} printItem 打印项内容
 * @param {Number} pageIndex 当前打印页的开始序号
 */
function _AddPrintItem(LODOP, printItem, pageIndex = 0) {
  // 批量打印时，修改关联打印项的关联序号
  if (printItem.style && printItem.style.LinkedItem == 1) {
    printItem.style.LinkedItem = 1 + pageIndex
  }
  // 添加打印项
  switch (printItem.type) {
    case 'braid-txt':
      LODOP.ADD_PRINT_TEXT(
        printItem.top,
        printItem.left,
        printItem.width,
        printItem.height,
        printItem.value
      )
      break
    case 'bar-code':
      LODOP.ADD_PRINT_BARCODE(
        printItem.top,
        printItem.left,
        printItem.width,
        printItem.height,
        printItem.style.codeType,
        printItem.value
      )
      break
    case 'braid-html':
      {
        let html = htmlTempTohtml(printItem.defaultValue, printItem.style)
        if (printItem.style && printItem.style.AutoHeight == 1) {
          LODOP.ADD_PRINT_HTM(
            printItem.top,
            printItem.left,
            printItem.width,
            'BottomMargin:' + printItem.style.BottomMargin + 'mm',
            html
          )
        } else {
          LODOP.ADD_PRINT_HTM(
            printItem.top,
            printItem.left,
            printItem.width,
            printItem.height,
            html
          )

        }
      }
      break
    case 'braid-table':
      {
        let html = tableTempTohtml(printItem.columns, printItem.defaultValue, printItem.style)
        if (printItem.style && printItem.style.AutoHeight == 1) {
          LODOP.ADD_PRINT_TABLE(
            printItem.top,
            printItem.left,
            printItem.width,
            'BottomMargin:' + printItem.style.BottomMargin + 'mm',
            html
          )
        } else {
          LODOP.ADD_PRINT_TABLE(
            printItem.top,
            printItem.left,
            printItem.width,
            printItem.height,
            html
          )

        }
      }
      break
    case 'braid-image':
      {
        let html = imageTempTohtml(printItem.value)
        LODOP.ADD_PRINT_IMAGE(
          printItem.top,
          printItem.left,
          printItem.width,
          printItem.height,
          html
        )
      }
      break
    default: ''
  }
  // 设置打印项样式
  if (printItem.style) {
    Object.keys(printItem.style).forEach(key => {
      LODOP.SET_PRINT_STYLEA(0, key, printItem.style[key])
    })
  }
}
