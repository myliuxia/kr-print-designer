export interface LodopItemStyle{
  zIndex: number = 0
  FontSize?:number
  FontColor?:string
  BorderColor?:string 
  Bold?: number // 1代表粗体，0代表非粗体
  Italic?: number // 1代表斜体，0代表非斜体
  Underline?: number // 1代表有下划线，0代表无下划线
  Alignment?: number // 对齐方式 1--左靠齐 2--居中 3--右靠齐
  codeType?: CodeType 
  ItemType?:number // 打印类型 0--普通项 1--页眉页脚 2--页号项 3--页数项 4--多页项
  AutoHeight?:boolean // 是否高度自适应
  BottomMargin?:number
  LinkedItem?:number
  ShowBarText?:number // 条码是否显示文字 1显示，0不显示
}