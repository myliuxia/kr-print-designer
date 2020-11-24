# kr-print-designer
## 简介

  一个基于Vue、ElementUi、C-Lodop的打印模板设计器。实现打印模板的设计、预览和打印功能。[示例](http://192.168.7.229:9090/#/)

## 安装

Vue项目中引用该组件
```
npm install kr-print-designer
```
打印功能基于C-Lodop打印控件，需前往[下载](http://www.lodop.net/download.html)

## 引入

main.js

```javascript
import Vue from 'vue'
import KrPrintDesigner from 'kr-print-designer'
import 'kr-print-designer/lib/kr-print-designer.css'

Vue.use(KrPrintDesigner)
```

demo.vue

```html
<template>
  <div id="app">
    <kr-print-designer :temp-value="value" :widget-options="widgets" :lodop-license="licenseInfo" @save="handleSave" />
  </div>
</template>
```
lodop打印/预览及设置lodop注册信息方法使用
```javascript
// 直接打印
this.$lodop.print(temp,data)

// 预览打印内容
this.$lodop.preview(temp,data)

// 预览打印模板
this.$lodop.previewTemp(temp)

// 设置Lodop产品注册信息
this.$lodop.setLicenses(licenseInfo)

```

## Attributes

| 参数      |           说明           | 类型   | 默认值 |
| -------- | ---------------------- | ----- | ------ |
| tempValue | 模板对象 | Object | ; |
| widgetOptions | 模板设计选项配置 | Array | [] |

### tempValue 参数详解

#### 参数示例：

```javascript
{
  title: 'demo',
  width: 750,
  height: 550,
  pageWidth: 750,
  pageHeight: 550,
  tempItems: [],
}
```

#### 参数说明：

tempValue 为打印模板对象， 对象中参数具体解析如下：

##### tempValue:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| title | 模板名称 | String  | —— | —— |
| width | 模板宽度 | Number  | —— | 750 |
| height | 模板高度 | Number  | —— | 550 |
| pageWidth | 模板纸张宽度（mm） | Number  | —— | 750 |
| pageHeight | 模板纸张高度（mm） | Number  | —— | 550 |
| tempItems | 模板打印项内容 | Array  | —— | [] |


### widgetOptions 参数详解

#### 参数示例：

```javascript
[
  {
    type: 'braid-txt',
    isEdit: true,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
  },
  {
    type: 'braid-txt',
    isEdit: false,
    title: '公司名称',
    value: '{公司名称}',
    defaultValue: '九州科瑞',
    name: 'companyName'
  },
  {
    type: 'bar-code',
    title: '订单编号（条码）',
    value: '{orderNumber}',
    defaultValue: '1234567890',
    name: 'orderNumber'
  },
  {
    type: 'braid-html',
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: '<font ><span tdata=\'pageNO\'>第##页</span>/<span tdata=\'pageCount\'>共##页</span></font>',
  },
  {
    type: 'braid-image',
    title: 'logo',
    value: 'http://192.168.7.229/syy/file/files/view/5f9fb42dabebb4049ffbd019',
  },
  {
    type: 'braid-table',
    title: '商品明细',
    name: 'details',
    value: '{details}',
    defaultValue: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        isUseSn: '1',
        price: '12.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        isUseSn: '1',
        price: '12.00'
      }

    ],
    columnsAttr: [
      {
        title: '产品名称',
        value: '{产品名称}',
        name: 'productName',
      },
      {
        title: 'sku名称',
        value: '{sku名称}',
        name: 'skuName',
      },
      {
        title: '规格型号',
        value: '{规格型号}',
        name: 'specModel'
      },
      {
        title: '数量',
        value: '{数量}',
        name: 'quantity'
      },
      {
        title: '单价',
        value: '{单价}',
        name: 'price'
      }
    ],
  }
]
```

#### 参数说明：

widgetOptions 为设计打印模板的打印项配置， 打印项有多种类型，各种打印项参数具体解析如下：

#### braid-txt

##### Attributes:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| type | 模板类型 | String  | braid-txt / braid-table / braid-html / braid-image / bar-code | —— |
| isEdit | 是否可编辑 | Boolean  | true / false | —— |
| dragable | 是否可拖拽 | Boolean  | true / false | true |
| resizable | 尺寸是否可变 | Boolean  | true / false | true |
| width | 打印项宽度（px） | Number  | —— | 120 |
| height | 打印项高度（px） | Number  | —— | 60 |
| left | 左偏移量（px） | Number  | —— | 50 |
| top | 上偏移量（px） | Number  | —— | 0 |
| title | 打印项名称 | String  | —— | —— |
| value | 打印项内容 | String  | —— | —— |
| defaultValue | 打印项默认内容 | String  | —— | —— |
| name | 动态打印项数据名称（对应打印数据key-name） | String  | —— | '' |
| style | 打印项样式 | Object  | —— | {} |

##### Style:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| zIndex | 层级 | Number  | —— | 0 |
| FontSize | 字体大小（pt） | Number | —— | 9 |
| FontColor | 字体颜色 | String  | —— | "#000000" |
| Bold | 字体是否加粗 | Number  | 1 / 0（是 / 否） | 0 |
| Italic | 字体是否设置斜体 | Number  | 1 / 0（是 / 否） | 0 |
| Underline | 字体是否设置下划线 | Number | 1 / 0（是 / 否） | 0 |
| Alignment | 文字对齐方式 | Number | 1 / 2 / 3（左靠齐 / 居中/ 右靠齐） | 1 |
| ItemType | 打印项类型 | Number  | 0 / 1 / 2 / 3 / 4（普通项 / 页眉页脚/ 页号项/ 页数项/ 多页项） | 0 |

#### braid-image

##### Attributes:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| type | 模板类型 | String  | braid-txt / braid-table / braid-html / braid-image / bar-code | —— |
| isEdit | 是否可编辑 | Boolean  | true / false | false |
| dragable | 是否可拖拽 | Boolean  | true / false | true |
| resizable | 尺寸是否可变 | Boolean  | true / false | true |
| width | 打印项宽度（px） | Number  | —— | 120 |
| height | 打印项高度（px） | Number  | —— | 60 |
| left | 左偏移量（px） | Number  | —— | 50 |
| top | 上偏移量（px） | Number  | —— | 0 |
| title | 打印项名称 | String  | —— | —— |
| value | 图片路劲 | String  | —— | —— |
| defaultValue | 图片默认路劲 | String  | —— | —— |
| name | 动态打印项数据名称（对应打印数据key-name） | String  | —— | '' |
| style | 打印项样式 | Object  | —— | {} |

##### Style:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| zIndex | 层级 | Number  | —— | 0 |
| ItemType | 打印项类型 | Number  | 0 / 1 / 2 / 3 / 4（普通项 / 页眉页脚/ 页号项/ 页数项/ 多页项） | 0 |

#### braid-html

##### Attributes:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| type | 模板类型 | String  | braid-txt / braid-table / braid-html / braid-image / bar-code | —— |
| isEdit | 是否可编辑 | Boolean  | true / false | false |
| dragable | 是否可拖拽 | Boolean  | true / false | true |
| resizable | 尺寸是否可变 | Boolean  | true / false | true |
| width | 打印项宽度（px） | Number  | —— | 120 |
| height | 打印项高度（px） | Number  | —— | 60 |
| left | 左偏移量（px） | Number  | —— | 50 |
| top | 上偏移量（px） | Number  | —— | 0 |
| title | 打印项名称 | String  | —— | "html" |
| value | html内容 | String  | —— | "<div>html<div>" |
| defaultValue | 默认html | String  | —— | "<div>html<div>" |
| name | 动态打印项数据名称（对应打印数据key-name） | String  | —— | '' |
| style | 打印项样式 | Object  | —— | {} |

##### Style:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| zIndex | 层级 | Number  | —— | 0 |
| ItemType | 打印项类型 | Number  | 0 / 1 / 2 / 3 / 4（普通项 / 页眉页脚/ 页号项/ 页数项/ 多页项） | 0 |
| AutoHeight | 是否设置自动高度 | Number  | 1 / 0（是 / 否） | 0 |
| BottomMargin | 打印项距离纸张的下边距（mm） | Number  | —— | 0 |

#### braid-html

##### Attributes:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | ------------------------------------- | ------- | ------------------------- | ------------------ |
| type | 模板类型 | String  | braid-txt / braid-table / braid-html / braid-image / bar-code | —— |
| isEdit | 是否可编辑 | Boolean  | true / false | false |
| dragable | 是否可拖拽 | Boolean  | true / false | true |
| resizable | 尺寸是否可变 | Boolean  | true / false | true |
| width | 打印项宽度（px） | Number  | —— | 240 |
| height | 打印项高度（px） | Number  | —— | 60 |
| left | 左偏移量（px） | Number  | —— | 50 |
| top | 上偏移量（px） | Number  | —— | 10 |
| title | 打印项名称 | String  | —— | "表格" |
| value | 表格数据 | Array  | —— | [] |
| defaultValue | 表格默认数据 | Array  | —— | [] |
| columnsAttr | 表格可选列配置 | Array  | —— | [] |
| name | 动态打印项数据名称（对应打印数据key-name） | String  | —— | '' |
| style | 打印项样式 | Object  | —— | {} |

##### Style:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| zIndex | 层级 | Number  | —— | 0 |
| FontSize | 字体大小（pt） | Number | —— | 9 |
| FontColor | 字体颜色 | String  | —— | "#000000" |
| BorderColor | 边框颜色 | String  | —— | "#000000" |
| Alignment | 文字对齐方式 | Number | 1 / 2 / 3（左靠齐 / 居中/ 右靠齐） | 1 |
| AutoHeight | 是否设置自动高度 | Number  | 1 / 0（是 / 否） | 0 |
| BottomMargin | 打印项距离纸张的下边距（mm） | Number  | —— | 0 |

##### columnsAttr:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| title | 表格列名称 | String  | —— | —— |
| value | 表格列数据 | String  | —— | —— |
| name | 动态打印项数据名称（对应打印数据key-name） | String  | —— | —— |

#### bar-code

##### Attributes:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| type | 模板类型 | String  | braid-txt / braid-table / braid-html / braid-image / bar-code | —— |
| isEdit | 是否可编辑 | Boolean  | true / false | false |
| dragable | 是否可拖拽 | Boolean  | true / false | true |
| resizable | 尺寸是否可变 | Boolean  | true / false | true |
| width | 打印项宽度（px） | Number  | —— | 120 |
| height | 打印项高度（px） | Number  | —— | 60 |
| left | 左偏移量（px） | Number  | —— | 50 |
| top | 上偏移量（px） | Number  | —— | 0 |
| title | 打印项名称 | String  | —— | "条码" |
| value | html内容 | String  | —— | "1234567890" |
| defaultValue | 默认html | String  | —— | "1234567890" |
| name | 动态打印项数据名称（对应打印数据key-name） | String  | —— | '' |
| style | 打印项样式 | Object  | —— | {} |

##### Style:

| 参数 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| zIndex | 层级 | Number  | —— | 0 |
| FontSize | 字体大小（pt） | Number | —— | 9 |
| ShowBarText | 是否显示条码值 | Number  | 0 / 1（不显示 / 显示） | 0 |
| codeType | 条码类型 | Number  |'128A' / '128B' / '128C' / '128Auto' / 'EAN8' / 'EAN13' / 'EAN128A' / 'EAN128B' / 'EAN128C' / 'Code39' / '39Extended' / '2_5interleaved' / '2_5industrial' / '2_5matrix' / 'UPC_A' / 'UPC_E0' / 'UPC_E1' / 'UPCsupp2' / 'UPCsupp5' / 'Code93' / '93Extended' / 'MSI' / 'PostNet' / 'Codabar' | "Code39" |
| ItemType | 打印项类型 | Number  | 0 / 1 / 2 / 3 / 4（普通项 / 页眉页脚/ 页号项/ 页数项/ 多页项） | 0 |

## Events

| 事件名称 |      说明      | 回调参数               |
| ------- | ------------ | ---------------------- |
| save | 点击保存时触发 | 设计后的模板对象 |

## Methods

| 事件名称 |      说明      | 回调参数               |
| ------- | ------------ | ---------------------- |
| print | 对数据和模板解析，实现打印 | Function(temp: object, data:array) |
| preview | 对数据和模板解析，实现打印内容的预览 | Function(temp: object, data:array) |
| previewTemp | 对模板进行预览 | Function(temp: object ) |
| setLicenses | 设置Lodop软件产品注册信息 | Function(licenseInfo: object ) |

### setLicenses 方法详解

#### 回调示例：

```javascript

let licenseInfo = {
  strCompanyName: '某某某公司',
  strLicense: '******',
  strLicenseA: '',
  strLicenseB: '',
}

// 设置Lodop产品注册信息
this.$lodop.setLicenses(licenseInfo)
```

#### licenseInfo 对象值说明：

licenseInfo 为Lodop打印软件产品注册信息， 对象中参数具体解析如下：

| 值 |                   说明                   | 类型    | 可选值                    | 默认值              |
| --------- | -------------------------------------- | ------- | ------------------------- | ------------------ |
| strCompanyName | 注册单位名称 | String  | —— | —— |
| strLicense | 主注册号 | String  | —— | —— |
| strLicenseA | 附加注册号A | String  | —— | —— |
| strLicenseB | 附加注册号B | String  | —— | —— |
