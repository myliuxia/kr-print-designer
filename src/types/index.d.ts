type WidgetType = 'braid-txt'|'braid-table'|'braid-image'|'braid-html'|'bar-code'
type AlignType = 'left'|'center'|'right'
type CodeType = '128A'| '128B'| '128C'| '128Auto'| 'EAN8'| 'EAN13'| 'EAN128A'| 'EAN128B'| 'EAN128C'| 'Code39'| '39Extended'| '2_5interleaved'| '2_5industrial'| '2_5matrix'| 'UPC_A'| 'UPC_E0'| 'UPC_E1'| 'UPCsupp2'| 'UPCsupp5'| 'Code93'| '93Extended'| 'MSI'| 'PostNet'| 'Codabar'
// 打印元素项样式
export interface TempItemStyle{
  zIndex: number = 0
  FontSize?:number
  FontColor?:string
  BorderColor?:string 
  Bold?: boolean // 1代表粗体，0代表非粗体
  Italic?: boolean // 1代表斜体，0代表非斜体
  Underline?: boolean // 1代表有下划线，0代表无下划线
  Alignment?: AlignType // 对齐方式 1--左靠齐 2--居中 3--右靠齐
  codeType?: CodeType 
  ItemType?:number // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
  AutoHeight?:boolean // 是否高度自适应
  BottomMargin?:number
  LinkedItem?:number
  ShowBarText?:boolean // 条码是否显示文字
}

// 模板元素项
export interface TempItem {
  uuid?:string|number
  type:WidgetType
  name: string
  isEdit: boolean // 是否可编辑 
  dragable: boolean // 是否可拖拽
  resizable: boolean // 尺寸是否可变
  width: number = 120
  height:number = 40
  left:number = 50
  top: number = 0
  value:string|any[]
  title:string= '自定义文本'
  defaultValue:string | any[]
  style:TempItemStyle
  tabelHtml?: string
  columnsAttr?: TempTabelCol[], // table 表格列选项
  columns?: TempTabelCol[], // table 已选表格列表
  selectCol?: string[] = [], // table 已选表格列name数组（用于多选框双向绑定）
}

// 表格列数据类型
export interface TempTabelCol {
    title:string
    value:string 
    name:string 
    type:string
}
// 打印模板
export interface Temp {
  title:string 
  width:number
  height: number
  pageWidth:number
  pageHeight: number
  tempItems: Array<TempItem> // 模板已选项
}

// LODOP 认证信息
export interface License {
  strCompanyName: string
  strLicense:string
  strLicenseA:string 
  strLicenseB:string
}

// LODOP实体
export type LODOPType = any