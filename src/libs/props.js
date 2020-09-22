
export const getDefaultProps = () => ({
  type: 'braid-txt',
  name: '',
  isEidt: 1,
  dragable: 1, // 是否可拖拽
  resizable: 1, // 尺寸是否可变
  width: 120,
  height: 40,
  left: 50,
  top: 0,
  value: '自定义文本',
  title: '自定义文本',
  defaultValue: '自定义文本',
  style: {}
})
export const styleMap = {
  'braid-txt': {
    zIndex: 0,
    FontSize: 9,
    FontColor: '#000000',
    Bold: 0, // 1代表粗体，0代表非粗体
    Italic: 0, // 1代表斜体，0代表非斜体
    Underline: 0, // 1代表有下划线，0代表无下划线
    Alignment: 1, // 对齐方式 1--左靠齐 2--居中 3--右靠齐
    ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
  },
  'bar-code': {
    zIndex: 0,
    FontSize: 9,
    ShowBarText: 0, // 条码是否显示值 0--不显示 1--显示
    codeType: 'Code39',// 条码类型
    ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
  },
  'braid-table': {
    zIndex: 0,
    Alignment: 1, // 对齐方式 1--左靠齐 2--居中 3--右靠齐
    FontSize: 9,
    FontColor: '#000000',
    BorderColor: '#000000'
  },
  'braid-html': {
    zIndex: 0,
    Alignment: 1, // 对齐方式 1--左靠齐 2--居中 3--右靠齐
    FontSize: 9,
    FontColor: '#000000',
    Bold: 0, // 1代表粗体，0代表非粗体
    Italic: 0, // 1代表斜体，0代表非斜体
    ItemType: 0, // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
  },
}
export const getCodeTypeArray = () => (['128A', '128B', '128C', '128Auto', 'EAN8', 'EAN13', 'EAN128A', 'EAN128B', 'EAN128C', 'Code39', '39Extended', '2_5interleaved', '2_5industrial', '2_5matrix', 'UPC_A', 'UPC_E0', 'UPC_E1', 'UPCsupp2', 'UPCsupp5', 'Code93', '93Extended', 'MSI', 'PostNet', 'Codabar'])

export const getItemTypeArray = () => ([
  { label: '普通项', value: 0 },
  { label: '页眉页脚', value: 1 },
  { label: '页号项', value: 2 },
  { label: '页数项', value: 3 },
  { label: '多页项', value: 4 },
])

