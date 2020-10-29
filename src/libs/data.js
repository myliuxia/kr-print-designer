export const data = {
  classId: "8",
  createUser: "1247423602379218946",
  created: "2020-09-22 14:51:46",
  fileName: "标准出库单_copy",
  filePath: null,
  fileSize: null,
  fileType: 0,
  height: 500,
  imageUrl: null,
  isDefault: 1,
  isUse: 0,
  modified: "2020-09-22 14:51:46",
  modifyUser: "1247423602379218946",
  pageHeight: 140,
  pageWidth: 215,
  remark: null,
  statusName: "草稿",
  statusValue: 1,
  systemFileName: null,
  tempCode: "NO1789816698",
  tempServicePath: null,
  tmpId: "89",
  tmpJson: [],
  tmpType: "库房出库单",
  uploadIndex: null,
  width: 770,
}

export const tmpJson = []
export const attrJson = () => [
  {
    "type": "braid-txt",
    "title": "自定义文本",
    "value": "自定义文本",
    "defaultValue": "自定义文本",
  },
  {
    "type": "bar-code",
    "title": "条码",
    "value": "1234567890",
    "defaultValue": "123123211",
    "name": "code"
  },
  {
    "type": "braid-html",
    "title": "html",
    "value": '',
    "defaultValue": '',
    "name": ""
  },
  {
    "type": "braid-table",
    "isEidt": 0,
    "title": "出库商品明细",
    "name": "table",
    "defaultValue": [
      {
        "productName": "苹果ipone11pro",
        "skuName": "iphone11pro256g",
        "specModel": "165L",
        "quantity": 3,
        "snCode": "[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]",
        "isUseSn": "1",
        "price": "23.00"
      },
      {
        "productName": "苹果ipone11pro",
        "skuName": "iphone11pro124g",
        "specModel": "165L",
        "quantity": 3,
        "snCode": "[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]",
        "isUseSn": "1",
        "price": "12.00"
      }
    ],
    "tabelHtml": "",
    "columnsAttr": [
      {
        "title": "产品名称",
        "value": "{产品名称}",
        "name": "productName"
      },
      {
        "title": "sku名称",
        "value": "{sku名称}",
        "name": "skuName"
      },
      {
        "title": "规格型号",
        "value": "{规格型号}",
        "name": "specModel"
      },
      {
        "title": "数量",
        "value": "{数量}",
        "name": "quantity"
      },
      {
        "title": "单价",
        "value": "{单价}",
        "name": "price"
      },
      {
        "title": "产品序列号",
        "value": "产品序列号明细：<br>{产品序列号}",
        "name": "snCode",
        "trSet": {
          "title": "产品序列号明细:",
          "col": 5,
          "margin": "50px"
        },
        "type": "row",
        "isShowName": "isUseSn",
        "isShowValue": "1"
      }
    ],
    "columns": [

    ]
  }
]