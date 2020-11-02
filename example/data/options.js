export const OutStockOptions = [
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: ''
  },
  {
    type: 'braid-txt',
    isEidt: 0,
    title: '公司名称',
    value: '{公司名称}',
    defaultValue: '九州科瑞',
    name: 'companyName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '出库单号',
    value: '{出库单号}',
    defaultValue: 'CK-1234567890',
    name: 'stockoutCode'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '客户/供应商',
    value: '{客户/供应商}',
    defaultValue: '中国苹果',
    name: 'unitName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '经办人',
    value: '{经办人}',
    defaultValue: 'zj001',
    name: 'handlerName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '出库类型',
    value: '{出库类型}',
    defaultValue: '销售出库',
    name: 'stockoutType'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '出库仓库',
    value: '{出库仓库}',
    defaultValue: '北京科瑞仓库',
    name: 'warehouseName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '出库时间',
    value: '{出库时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'businessDate'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '制单人',
    value: '{制单人}',
    defaultValue: 'jz002',
    name: 'createUserName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '制单时间',
    value: '{制单时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'created'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '收货人(销售)',
    value: '{收货人}',
    defaultValue: 'liuxia',
    name: 'receivePerson'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '收货电话(销售)',
    value: '{收货人电话}',
    defaultValue: 'liuxia',
    name: 'receivePhone'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '收货地址(销售)',
    value: '{收货地址}',
    defaultValue: 'liuxia',
    name: 'address'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '运输方式(销售)',
    value: '{运输方式}',
    defaultValue: '自提',
    name: 'transportWayName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '发票类型(销售)',
    value: '{发票类型}',
    defaultValue: '普通发票',
    name: 'invoiceTypeName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '合计金额',
    value: '{合计金额}',
    defaultValue: '123.00',
    name: 'totalPrice'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '摘要',
    value: '{摘要}',
    defaultValue: '北京采购入库成都摘要',
    name: 'remark'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '单据备注',
    value: '{单据备注}',
    defaultValue: '单据备注内容呢',
    name: 'orderRemark'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '调出仓库',
    value: '{调出仓库}',
    defaultValue: '北京科瑞仓库',
    name: 'deliverWarehouseName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '调入仓库',
    value: '{调入仓库}',
    defaultValue: '四川科瑞仓库',
    name: 'receiveWarehouseName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '调拨人',
    value: '{调拨人}',
    defaultValue: 'jz001',
    name: 'allocationUserName'
  },
  {
    type: 'braid-html',
    isEidt: 1,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: '<font><span tdata=\'pageNO\'>第##页</span>/<span tdata=\'pageCount\'>共##页</span></font>',
    name: ''
  },
  {
    type: 'braid-table',
    isEidt: 0,
    title: '出库商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        snCode: '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '23.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        snCode: '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '12.00'
      }

    ],
    tabelHtml: '',
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
      },
      {
        title: '产品序列号',
        value: '产品序列号明细：<br>{产品序列号}',
        name: 'snCode',
        trSet: {
          title: '产品序列号明细:',
          col: 5,
          margin: '50px'
        },
        type: 'row',
        isShowName: 'isUseSn',
        isShowValue: '1'
      }
    ],
    columns: []
  }
]

export const InStockOptions = [
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '自定义文本',
    value: '自定义文本',
    defaultValue: '自定义文本',
    name: ''
  },
  {
    type: 'braid-txt',
    isEidt: 0,
    title: '公司名称',
    value: '{公司名称}',
    defaultValue: '九州科瑞',
    name: 'companyName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '入库单号',
    value: '{入库单号}',
    defaultValue: 'RK-1234567890',
    name: 'purcheckCode'
  },

  {
    type: 'braid-txt',
    isEidt: 1,
    title: '供应商/客户',
    value: '{供应商/客户}',
    defaultValue: '中国苹果',
    name: 'unitName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '采购业务员',
    value: '{采购业务员}',
    defaultValue: 'zj001',
    name: 'purchaseSaleManName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '单据业务员',
    value: '{单据业务员}',
    defaultValue: 'zj001',
    name: 'businessPersonName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '入库类型',
    value: '{入库类型}',
    defaultValue: '采购入库',
    name: 'purcheckType'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '入库仓库',
    value: '{入库仓库}',
    defaultValue: '北京科瑞仓库',
    name: 'warehouseName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '入库时间',
    value: '{入库时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'businessDate'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '制单人',
    value: '{制单人}',
    defaultValue: 'jz002',
    name: 'createUserName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '制单时间',
    value: '{制单时间}',
    defaultValue: '2020-08-27 12:00:00',
    name: 'created'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '摘要',
    value: '{摘要}',
    defaultValue: '北京采购入库成都摘要',
    name: 'remark'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '单据备注',
    value: '{单据备注}',
    defaultValue: '北京采购入库成都摘要',
    name: 'orderRemark'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '合计金额',
    value: '{合计金额}',
    defaultValue: '12331.00',
    name: 'totalPrice'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '调出仓库',
    value: '{调出仓库}',
    defaultValue: '北京科瑞仓库',
    name: 'deliverWarehouseName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '调入仓库',
    value: '{调入仓库}',
    defaultValue: '四川科瑞仓库',
    name: 'receiveWarehouseName'
  },
  {
    type: 'braid-txt',
    isEidt: 1,
    title: '调拨人',
    value: '{调拨人}',
    defaultValue: 'jz001',
    name: 'allocationUserName'
  },
  {
    type: 'braid-html',
    isEidt: 1,
    title: '分页',
    value: '{第##页/共##页}',
    defaultValue: '<font ><span tdata=\'pageNO\'>第##页</span>/<span tdata=\'pageCount\'>共##页</span></font>',
    name: ''
  },
  {
    type: 'braid-table',
    isEidt: 0,
    title: '入库商品明细',
    name: 'details',
    value: '{details}',
    style: {},
    defaultValue: [
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro256g',
        specModel: '165L',
        quantity: 3,
        snCode: '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '12.00'
      },
      {
        productName: '苹果ipone11pro',
        skuName: 'iphone11pro124g',
        specModel: '165L',
        quantity: 3,
        snCode: '[SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1] [SPP1Y79G1]',
        isUseSn: '1',
        price: '12.00'
      }

    ],
    tabelHtml: '',
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
      },
      {
        title: '产品序列号',
        value: '产品序列号明细：<br>{产品序列号}',
        name: 'snCode',
        trSet: {
          title: '产品序列号明细:',
          col: 5,
          margin: '50px'
        },
        type: 'row',
        isShowName: 'isUseSn',
        isShowValue: '1'
      }
    ],
    columns: []
  }
]