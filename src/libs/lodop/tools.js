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
  let styleStr = 'text-align:' + (style.Alignment == 1 ? 'left' : style.Alignment == 2 ? 'center' : 'right') + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + style.FontColor + ';'

  // 剔除 type='row' 的数据
  let cols = columns.filter(item => item.type != 'row')
  // 获得 type='row' 的数据
  let rows = columns.filter(item => item.type == 'row')
  // 剔除 type='row' 和 name = '_seq' 的数据
  let conCols = columns.filter(item => item.type != 'row' && item.name != '_seq')


  let html = '<style> table td,table th {word-break: break-all;box-sizing:border-box;border:1px solid ' + style.BorderColor + '}</style>'
  html += '<table border=1 width=\'100%\' cellspacing=\'0\' frame="box" cellpadding=\'2\' style=\'border-collapse:collapse;' + styleStr + '\' bordercolor=\'' + style.BorderColor + '\'>'
  // 解析表头
  html += '<thead><tr>'
  cols.forEach(column => {

    if (column.name === '_seq') {
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
      // 需要显示的row 
      let showRows = rows.filter(row => item[row.isShowName] == row.isShowValue)

      html += '<tr>'
      cols.forEach(column => {
        if (column.name === '_seq') {
          html += '<td rowspan=' + (1 + showRows.length) + '>'
          html += (idx + 1)
        } else {
          html += '<td>'
          html += item[column.name]
        }
        html += '</td>'
      })
      html += '</tr>'

      showRows.forEach(row => {
        // 处理序列号分页问题
        /**
         * 因为lodop add_print_tabel每页至少打印一个TR行(由于table可以嵌套多层子table，这里的TR行是指首层TR)
         * 所以需要将多个序列号分为多个 tr 展示，以解决自动分页时单个tr高度过高时打印错乱问题
         */
        let trArr = item[row.name].split(' ')
        // 第一行显示标题
        html += '<tr><td colspan=' + conCols.length + ' style="border:none">'
        html += row.trSet.title
        html += '</td></tr>'
        // 之后展示内容
        html += '<tr><td colspan=' + conCols.length + ' style="border:none">'
        // 一列序列号所占的宽度
        let colWidth = (100 / row.trSet.col) + '%'

        trArr.forEach((item, index) => {
          html += '<span style="display:inline-block;text-align:center;width:' + colWidth + '">' + item + '</span>'
          if (index % row.trSet.col == row.trSet.col - 1 && trArr.length > index + 1) {
            html += '</td></tr>'
            html += '<tr><td colspan=' + conCols.length + ' style="border:none">'
          }
        })
        html += '</td></tr>'

        // html += '<tr><td colspan=' + conCols.length + '>'
        // html += strTempToValue(row.value, item[row.name])
        // html += '</td></tr>'

      })

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
  let styleStr = 'text-align:' + (style.Alignment == 1 ? 'left' : style.Alignment == 2 ? 'center' : 'right') + ';'
  styleStr += 'font-size:' + style.FontSize + 'pt;'
  styleStr += 'color:' + style.FontColor + ';'
  let html = '<span style=\'' + styleStr + '\'>'
  html += val
  html += '</span>'
  console.log(html)
  return html
}
