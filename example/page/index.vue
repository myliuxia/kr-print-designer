<template>
  <div class="box">
    <div class="title">kr-print-designer 打印模板设计器</div>
    <section>
      <div class="section">模板管理</div>
      <el-table :data="tempList" style="width: 100%" size="mini" border>
        <el-table-column label="模板名称" prop="title"></el-table-column>
        <el-table-column label="模板类型">
          <template slot-scope="scope">
            <span>{{scope.row.type == 1 ? '出库单' : '入库单'}}</span>
          </template>
        </el-table-column>
        <el-table-column label="模板宽高">
          <template slot-scope="scope">
            <span>{{scope.row.width + ' * '+ scope.row.height}}</span>
          </template>
        </el-table-column>
        <el-table-column label="纸张大小">
          <template slot-scope="scope">
            <span>{{scope.row.pageWidth + 'mm * '+ scope.row.pageHeight+'mm'}}</span>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot="header">
            <el-button size="mini" type="primary" @click="openCreate">创建模板</el-button>
          </template>
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">设计</el-button>
            <el-button type="text" size="mini" @click="handlePreview(scope.$index, scope.row)">预览</el-button>
            <el-button type="text" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="添加模板" :visible.sync="visible" width="310px">
        <el-form ref="form" :model="form" size="small" :rules="rules" label-width="80px">
          <el-form-item label="模板名称" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="模板类型" prop="type">
            <el-select v-model="form.type">
              <el-option label="出库单" :value="1"></el-option>
              <el-option label="入库单" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="模板宽度" prop="width">
            <el-input v-model="form.width"></el-input>
          </el-form-item>
          <el-form-item label="模板高度" prop="height">
            <el-input v-model="form.height"></el-input>
          </el-form-item>
          <el-form-item label="纸张宽度" prop="pageWidth">
            <el-input v-model="form.pageWidth"></el-input>
          </el-form-item>
          <el-form-item label="纸张宽度" prop="pageHeight">
            <el-input v-model="form.pageHeight"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button size="mini" @click="visible = false">取 消</el-button>
          <el-button type="primary" size="mini" @click="savaTemp">确 定</el-button>
        </div>
      </el-dialog>
    </section>
    <section>
      <div class="section">模板打印测试</div>
      <el-form ref="printForm" :model="printForm" size="small" :rules="printRules" :inline="true">
        <el-form-item label="打印模板" prop="tempIndex">
          <el-select v-model="printForm.tempIndex">
            <el-option
              v-for="(item,index) in tempList"
              :key="index"
              :label="item.title"
              :value="index"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="测试数据" prop="data">
          <el-input
            type="textarea"
            style="width:520px"
            :rows="6"
            v-model="printForm.data"
            placeholder="数据模板对应的数据，数据格式为json对象"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div>
            <el-button size="mini" type="primary" @click="printPreview(1)">打印预览</el-button>
          </div>
          <div style="margin-top:10px">
            <el-button size="mini" type="success" @click="printPreview(2)">直接打印</el-button>
          </div>
        </el-form-item>
      </el-form>
    </section>
    <section>
      <div class="section">测试数据</div>
      <el-form ref="testData" :model="testData" size="small" :inline="true">
        <el-form-item label="出库数据">
          <el-input
            type="textarea"
            style="width:920px"
            :rows="11"
            v-model="testData.OutStock"
            placeholder="数据模板对应的数据，数据格式为json对象"
          ></el-input>
        </el-form-item>
        <el-form-item label="入库数据">
          <el-input
            type="textarea"
            style="width:920px"
            :rows="11"
            v-model="testData.InStock"
            placeholder="数据模板对应的数据，数据格式为json对象"
          ></el-input>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
const defaultTemp = () => ({
  title: '',
  type: 1, // 模板类型 1：出库单；2：入库单
  width: '',
  height: '',
  pageWidth: '',
  pageHeight: '',
  tempItems: [],
})
import { OutStockData, InStockData } from '../data/test'
export default {
  data() {
    return {
      visible: false,
      value: {},
      tempList: [],
      form: defaultTemp(),
      rules: {
        title: { required: true, message: '请输入模板名称' },
        type: { required: true, message: '请选择模板类型' },
        width: { required: true, message: '请输入模板宽度' },
        height: { required: true, message: '请输入模板高度' },
        pageWidth: { required: true, message: '请输入纸张宽度' },
        pageHeight: { required: true, message: '请输入纸张高度' },
      },
      printForm: {
        tempIndex: '',
        data: '',
      },
      printRules: {
        tempIndex: { required: true, message: '请选择模板' },
        data: { required: true, message: '请输入模板测试数据' },
      },
      testData: {
        OutStock: JSON.stringify(OutStockData),
        InStock: JSON.stringify(InStockData),
      },
    }
  },
  created() {
    this.tempList = JSON.parse(localStorage.getItem('tempList')) || []
  },

  methods: {
    // 预览
    handlePreview(index, row) {
      this.$lodop.previewTemp(row)
    },
    // 设计
    handleEdit(index, row) {
      this.$router.push({
        path: '/designer',
        query: {
          index: index,
        },
      })
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm('确认删除该条数据吗？', '确认信息')
        .then((isPass) => {
          if (isPass) {
            this.tempList.splice(index, 1)
            localStorage.setItem('tempList', JSON.stringify(this.tempList))
          }
        })
        .catch()
    },
    // 新增
    openCreate() {
      this.form = defaultTemp()
      this.visible = true
    },
    // 保存新增
    savaTemp() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.tempList.push(this.form)
          localStorage.setItem('tempList', JSON.stringify(this.tempList))
          this.visible = false
        }
      })
    },
    /**
     * 测试打印预览/直接打印
     * flag 1:打印预览，2：直接打印
     */
    printPreview(flag) {
      this.$refs.printForm.validate((valid) => {
        if (valid) {
          let printData
          try {
            printData = JSON.parse(this.printForm.data)
          } catch (err) {
            return this.$message('请输入正确格式的打印数据')
          }
          if ((flag = 1)) {
            this.$lodop.preview(this.tempList[this.printForm.tempIndex], printData)
          } else {
            this.$confirm('确认直接打印吗？', '确认信息')
              .then((isPass) => {
                if (isPass) {
                  this.$lodop.print(this.tempList[this.printForm.tempIndex], printData)
                }
              })
              .catch()
          }
        }
      })
    },
  },
}
</script>
<style scoped>
.box {
  width: 1000px;
  margin: auto;
  padding: 10px 0;
  font-family: Arial, Helvetica, sans-serif;
}
.title {
  text-align: center;
  font-size: 24px;
  color: #1890ff;
  margin: 20px;
  font-weight: bold;
}
.section {
  font-size: 18px;
  color: #333333;
  padding: 10px 0;
}
</style>
