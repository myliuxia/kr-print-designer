<template>
  <div>
    <el-form label-width="80px" :model="pageInfo" size="mini" class="kr-form">
      <el-row>
        <el-form-item label="模板名称">
          <el-input v-model="pageInfo.title" class="full-w"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="模板宽度">
            <el-input-number
              v-model="pageInfo.width"
              controls-position="right"
              :min="0"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模板高度">
            <el-input-number
              v-model="pageInfo.height"
              controls-position="right"
              :min="0"
              class="min-input"
            ></el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="纸张宽度">
          <el-input-number
            v-model="pageInfo.pageWidth"
            controls-position="right"
            :min="0"
            class="min-input"
          ></el-input-number>
          <span class="unit-text">(mm)</span>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="纸张高度">
          <el-input-number
            v-model="pageInfo.pageHeight"
            controls-position="right"
            :min="0"
            class="min-input"
          ></el-input-number>
          <span class="unit-text">(mm)</span>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import vptd from '../../mixins/vptd'
export default {
  mixins: [vptd],
  computed: {
    pageInfo() {
      return this.$vptd.state.page
    },
  },
  methods: {
    // 自定义上传事件
    httpRequestMethod(param) {
      const formData = new FormData()
      formData.append('file', param.file)
      this.handleUploadFile(formData)
    },
    // 上传图片
    async handleUploadFile(formData) {
      // let [data, err] = await svc.uploadImgPrintTemp(formData)
      // if (err) {
      //   err.showAlert()
      //   return
      // }
      // this.pageInfo.imageUrl = data
    },
    // 删除图片
    deleteImg() {
      this.pageInfo.imageUrl = ''
    },
  },
}
</script>

