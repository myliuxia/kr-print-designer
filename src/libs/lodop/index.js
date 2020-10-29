import getLodop from './LodopFuncs'
import { tableTempTohtml, imageTempTohtml, strTempToValue, htmlTempTohtml } from './tools'

/**
 * LODOP 预览
 * @param width 可视区域宽度
 * @param height 可视区域高度
 * @param pageWidth 纸张宽度
 * @param pageHeight 纸张高度
 * @param pageName 纸张名称
 * @param printContent 打印内容
 * @param backImg 背景图片
 */
export const LodopPreview = (width, height, pageWidth, pageHeight, pageName, printContent, backImg) => {
  // 默认上边距和左边距为0
  let LODOP = CreatePrintTemp(pageName, width, height, pageWidth, pageHeight)
  AddPrintContent(LODOP, printContent)
  if (backImg) {
    if (!/^http(s?):\/\//.test(backImg)) {
      backImg = process.env.VUE_APP_UPLOAD_API_URL + backImg
    }
    LODOP.ADD_PRINT_SETUP_BKIMG('<img border=\'0\' src=\'' + backImg + '\'>')
    LODOP.SET_SHOW_MODE('BKIMG_IN_PREVIEW', 1)
    LODOP.SET_SHOW_MODE('BKIMG_PRINT', 0)
  }
  let flag = LODOP.PREVIEW()
  return flag
}

/**
 * LODOP 预览多分打印内容
 * @param width 可视区域宽度
 * @param height 可视区域高度
 * @param pageWidth 纸张宽度
 * @param pageHeight 纸张高度
 * @param pageName 纸张名称
 * @param printContentArr 打印内容-数组
 * @param backImg 背景图片
 */
export const LodopPreviewMore = (width, height, pageWidth, pageHeight, pageName, printContentArr, backImg) => {
  // 默认上边距和左边距为0
  let LODOP = CreatePrintTemp(pageName, width, height, pageWidth, pageHeight)
  printContentArr.forEach((printItem, index) => {
    LODOP.NewPageA()
    AddPrintContent(LODOP, printItem, index)
    if (backImg) {
      if (!/^http(s?):\/\//.test(backImg)) {
        backImg = process.env.VUE_APP_UPLOAD_API_URL + backImg
      }
      LODOP.ADD_PRINT_SETUP_BKIMG('<img border=\'0\' src=\'' + backImg + '\'>')
      LODOP.SET_SHOW_MODE('BKIMG_IN_PREVIEW', 1)
      LODOP.SET_SHOW_MODE('BKIMG_PRINT', 0)
    }
  })
  let flag = LODOP.PREVIEW()
  return flag
}


/**
 * LODOP 打印
 * @param width 可视区域宽度
 * @param height 可视区域高度
 * @param pageWidth 纸张宽度
 * @param pageHeight 纸张高度
 * @param pageName 纸张名称
 * @param printContent 打印内容
 */
export const LodopPrint = (width, height, pageWidth, pageHeight, pageName, printContent) => {
  // 默认上边距和左边距为0
  let LODOP = CreatePrintTemp(pageName, width, height, pageWidth, pageHeight)
  AddPrintContent(LODOP, printContent)
  let flag = LODOP.PRINT()
  return flag
}

/**
 * LODOP 批量打印多分
 * @param width 可视区域宽度
 * @param height 可视区域高度
 * @param pageWidth 纸张宽度
 * @param pageHeight 纸张高度
 * @param pageName 纸张名称
 * @param printContent 打印内容
 * @param number 打印份数
 */
export const LodopBatchPrint = (width, height, pageWidth, pageHeight, pageName, printContent, number) => {
  // 默认上边距和左边距为0
  let LODOP = CreatePrintTemp(pageName, width, height, pageWidth, pageHeight)
  let num = 1
  while (num <= number) {
    LODOP.NEWPAGEA()
    AddPrintContent(LODOP, printContent, num)
    num++
  }
  let flag = LODOP.PRINT()
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

function CreatePrintTemp(pageName, width, height, pageWidth = 0, pageHeight = 0, top = 0, left = 0) {
  let LODOP = getLodop()
  // 设置软件产品注册信息
  // LODOP.SET_LICENSES('成都九洲电子信息系统股份有限公司', '1DAA3FA17DD9EF73566A29AC39CE300C', '成都九洲電子信息系統股份有限公司', 'F0F8A487D1A0DEBA028F42800034942A')
  // LODOP.SET_LICENSES('THIRD LICENSE', '', 'Chengdu Jiuzhou Electronic Information System Co., Ltd.', '1E6D08DE79B42A3871D5EF3423D77853')
  LODOP.PRINT_INITA(top, left, width, height, pageName)
  LODOP.SET_PRINT_PAGESIZE(1, pageWidth ? pageWidth + 'mm' : 0, pageHeight ? pageHeight + 'mm' : 0, '')

  return LODOP
}

/**
 * 直接打印内容
 * @param {*Object} printTemp 打印模板
 * @param {*Array} data 打印数据
 */
export const LodopPreviewA = (printTemp, data) => {
  let pageInfo = printTemp.page // 页面信息
  let tempItems = printTemp.tempItems // 模板打印项
  // 默认上边距和左边距为0
  let LODOP = CreatePrintTemp(pageInfo.pageName, pageInfo.width, pageInfo.height, pageInfo.pageWidth, pageInfo.pageHeight)

  // 解析数据并生成打印内容
  let printContentArr = data.map(item => {
    let printContent = tempItems.map(tempItem => {
      tempItem.value = tempItem.name ? strTempToValue(tempItem.value, item[tempItem.name] || '') : tempItem.value
      return tempItem
    })
    return printContent
  })

  printContentArr.forEach((printItem, index) => {
    LODOP.NewPageA()
    AddPrintContent(LODOP, printItem, index)
    if (backImg) {
      if (!/^http(s?):\/\//.test(backImg)) {
        backImg = process.env.VUE_APP_UPLOAD_API_URL + backImg
      }
      LODOP.ADD_PRINT_SETUP_BKIMG('<img border=\'0\' src=\'' + backImg + '\'>')
      LODOP.SET_SHOW_MODE('BKIMG_IN_PREVIEW', 1)
      LODOP.SET_SHOW_MODE('BKIMG_PRINT', 0)
    }
  })
  let flag = LODOP.PREVIEW()
  return flag

}


/**
 * 添加打印内容
 * @param {lodop} LODOP 打印实例
 * @param {Array} printContent 打印项内容
 * @param {Number} index 当前打印项开始序号
 */
function AddPrintContent(LODOP, printContent, index = 0) {
  // 判断打印内容是否包含自适应高度（style.AutoHeight == 0 ）的打印项
  let flagIdx = printContent.findIndex(item => item.style.AutoHeight == 0)

  // 记录自适应高度（style.AutoHeight == 0 ）的打印项序号
  let tableIndex = 1 + index * printContent.length

  // 自适应高度（style.AutoHeight == 0 ）的打印项
  let tableObject = flagIdx == -1 ? null : printContent[flagIdx]

  // 先打印 自适应高度（style.AutoHeight == 0 ）的打印项
  if (flagIdx != -1) {

    // 如果包含表格则涉及表格分页问题，在处理分页时要区分表格自动分页和NewPage强制分页也，故将表格做为第一隔打印项并记录其序号
    if (tableObject.type == 'braid-table') {
      LODOP.ADD_PRINT_TABLE(
        tableObject.top,
        tableObject.left,
        tableObject.width,
        'BottomMargin:' + tableObject.style.AutoHeight + 'mm',
        tableTempTohtml(tableObject.columns, tableObject.defaultValue, tableObject.style)
      )
    } else if (tableObject.type == 'braid-html') {
      LODOP.ADD_PRINT_TABLE(
        tableObject.top,
        tableObject.left,
        tableObject.width,
        'BottomMargin:' + tableObject.style.AutoHeight + 'mm',
        tableObject.value
      )
    }
    // 设置样式
    if (tableObject.style) {
      Object.keys(tableObject.style).forEach(key => {
        LODOP.SET_PRINT_STYLEA(0, key, tableObject.style[key])
      })
    }

    // 删除已打印的打印项内容
    printContent.splice(flagIdx, 1)
  }


  printContent.forEach(item => {
    if (tableObject) {
      // item.style.LinkedItem = tableIndex
    }
    /**
     * 且打印位置在表格下面、且该项为普通项
     * 满足条件的打印内容项会关联（LinkedItem）table打印项，此时该打印项的top和left不再是上边距和左边距，而是与关联项的间隔空隙及左边距偏移
     * 故通过表格的位置信息重新计算打印项的top和left
     */
    if (tableObject && item.top > tableObject.top && item.style.ItemType == 0) {
      item.top = item.top - tableObject.top - tableObject.height
      item.left = item.left - tableObject.left
      item.style.LinkedItem = tableIndex
      // item.style.LinkedItem = tableIndex
    }


    // 添加打印项
    switch (item.type) {
      case 'braid-txt':
        LODOP.ADD_PRINT_TEXT(
          item.top,
          item.left,
          item.width,
          item.height,
          item.value
          // strTempToValue(item.value, item.defaultValue)
        )

        break
      case 'bar-code':
        LODOP.ADD_PRINT_BARCODE(
          item.top,
          item.left,
          item.width,
          item.height,
          item.style.codeType,
          item.value
          // strTempToValue(item.value, item.defaultValue)
        )
        break
      case 'braid-html':
        {
          let html = htmlTempTohtml(item.defaultValue, item.style)
          LODOP.ADD_PRINT_HTM(
            item.top,
            item.left,
            item.width,
            item.height,
            html
          )
        }
        break
      case 'braid-table':
        {
          let html = tableTempTohtml(item.columns, item.defaultValue, item.style)
          LODOP.ADD_PRINT_TABLE(
            item.top,
            item.left,
            item.width,
            item.height,
            html
          )
        }
        break
      case 'braid-image':
        {
          let html = imageTempTohtml(item.value)
          LODOP.ADD_PRINT_IMAGE(
            item.top,
            item.left,
            item.width,
            item.height,
            html
          )
        }
        break
      default: ''
    }
    // 设置打印项样式
    if (item.style) {
      Object.keys(item.style).forEach(key => {
        LODOP.SET_PRINT_STYLEA(0, key, item.style[key])
      })
    }

  })
}


