/**
 * 通过模板和模板数据生成打印内容
 * @param temp 打印模板
 * @param data 模板数据
 */
export const tempToPrint = (temp, data) => {
  let printContent = temp.map(item => {
    var reg = /({[^{]*})/g
    let value = item.value.replace(reg, data[item.name] || '')
    return {
      top: item.top,
      left: item.left,
      width: item.width,
      height: item.height,
      value: value
    }
  })
  return printContent
}
/**
 * braid-tabel类型的模板转换成html
 * @param columns 表格列配置信息
 * @param data 表格数据
 */
export const tableTempTohtml = (columns, data, style) => {

  // 表格全局样式
  let styleStr = 'text-align:' + style.Alignment + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + style.FontColor + ';'


  let html = '<style> table td,table th {word-break: break-all;box-sizing:border-box;border:1px solid ' + style.BorderColor + '}</style>'
  html += '<table border=1 width=\'100%\' cellspacing=\'0\' frame="box" cellpadding=\'2\' style=\'border-collapse:collapse;' + styleStr + '\' bordercolor=\'' + style.BorderColor + '\'>'
  // 解析表头
  html += '<thead><tr>'
  columns.forEach(column => {

    if (column.name === '_seq') { // 序号列
      html += '<th width="30">'
    } else {
      html += '<th>'
    }
    html += column.title
    html += '</th>'
  })
  html += '</tr></thead>'
  html += '<tbody>'

  // 解析内容
  if (Array.isArray(data)) {
    data.forEach((item, idx) => {

      html += '<tr>'
      columns.forEach(column => {
        if (column.name === '_seq') {
          html += '<td>'
          html += (idx + 1)
        } else {
          html += '<td>'
          html += item[column.name]
        }
        html += '</td>'
      })
      html += '</tr>'
    })
  }

  html += '</tbody>'
  html += '</table>'
  return html
}

/**
 * braid-image类型的模板转换成html
 * @param value 图片相对地址
 */
export const imageTempTohtml = (value) => {

  let html = '<img style=\'width:100%\' src=\'' + value + '\'/>'

  return html
}

/**
 * 将字符串模板中{}内的内容替换成指定值
 * @param str 表格列配置信息
 * @param value 表格数据
 */
export const strTempToValue = (str, value) => {
  let reg = /({[^}^{]*})/g
  return str.replace(reg, value || '')
}
export const htmlTempTohtml = (val, style) => {
  // 表格全局样式
  let styleStr = 'text-align:' + style.Alignment + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + style.FontColor + ';'
  let html = '<span style=\'' + styleStr + '\'>'
  html += val
  html += '</span>'
  // console.log(html)
  return html
}
