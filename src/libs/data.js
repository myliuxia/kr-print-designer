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
        "isEidt": 1,
        "title": "自定义文本",
        "value": "自定义文本",
        "defaultValue": "自定义文本",
        "name": ""
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "制单人",
        "value": "{制单人}",
        "defaultValue": "jz002",
        "name": "createUserName"
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "制单时间",
        "value": "{制单时间}",
        "defaultValue": "2020-08-27 12:00:00",
        "name": "created"
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "收货人(销售)",
        "value": "{收货人}",
        "defaultValue": "liuxia",
        "name": "receivePerson"
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "合计金额",
        "value": "{合计金额}",
        "defaultValue": "123.00",
        "name": "totalPrice"
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "单据备注",
        "value": "{单据备注}",
        "defaultValue": "单据备注内容呢",
        "name": "orderRemark"
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "调出仓库",
        "value": "{调出仓库}",
        "defaultValue": "北京科瑞仓库",
        "name": "deliverWarehouseName"
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "调入仓库",
        "value": "{调入仓库}",
        "defaultValue": "四川科瑞仓库",
        "name": "receiveWarehouseName"
    },
    {
        "type": "braid-txt",
        "isEidt": 1,
        "title": "调拨人",
        "value": "{调拨人}",
        "defaultValue": "jz001",
        "name": "allocationUserName"
    },
    {
        "type": "braid-html",
        "isEidt": 1,
        "title": "分页",
        "value": "{第##页/共##页}",
        "defaultValue": "<font><span tdata='pageNO'>第##页</span>/<span tdata='pageCount'>共##页</span></font>",
        "name": ""
    },
    {
        "type": "braid-table",
        "isEidt": 0,
        "title": "出库商品明细",
        "name": "details",
        "value": "{details}",
        "style": {

        },
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