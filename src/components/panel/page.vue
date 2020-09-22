<template>
  <div>
    <el-form label-width="80px" :model="pageInfo" size="mini" class="mini-form">
      <el-row>
        <el-form-item label="模板名称">
          <el-input v-model="pageInfo.title" class="w-180"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="模板宽度">
            <el-input-number
              v-model="pageInfo.width"
              controls-position="right"
              :min="0"
              class="w-110"
            ></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="模板高度">
            <el-input-number
              v-model="pageInfo.height"
              controls-position="right"
              :min="0"
              class="w-110"
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
            class="w-120"
          ></el-input-number>
          <span class="mg-l-10 fs-12 text-font-secondary">(mm)</span>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="纸张高度">
          <el-input-number
            v-model="pageInfo.pageHeight"
            controls-position="right"
            :min="0"
            class="w-120"
          ></el-input-number>
          <span class="mg-l-10 fs-12 text-font-secondary">(mm)</span>
        </el-form-item>
      </el-row>

      <el-form-item>
        <div slot="label">
          <el-tooltip>
            <div slot="content">背景图片仅用于辅助定位，不用于打印！</div>
            <i class="el-icon-question text-font-secondary"></i>
          </el-tooltip>
          <span>背景图片</span>
        </div>

        <el-upload
          ref="upload"
          action="string"
          :show-file-list="false"
          :http-request="httpRequestMethod"
        >
          <el-button size="mini" type="primary" icon="el-icon-upload">上传图片</el-button>
          <span
            class="fs-12 text-font-secondary mg-l-10"
          >建议上传{{pageInfo.width}}*{{pageInfo.height}}的图片做为背景</span>
        </el-upload>
        <div v-show="pageInfo.imageUrl" class="uplaod-image-list">
          {{pageInfo.imageUrl}}
          <i class="el-icon-close" @click="deleteImg"></i>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import vptd from '../../mixins/vptd'
// import svc from '@/service'
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
<style lang="scss" scoped>
.mini-form {
  ::v-deep.el-form-item--mini.el-form-item {
    margin-bottom: 10px;
  }
}
.uplaod-image-list {
  font-size: 12px;
  display: block;
  box-sizing: border-box;
  padding-right: 40px;
  transition: all 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  position: relative;
  .el-icon-close {
    display: none;
    position: absolute;
    right: 7px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  &:hover {
    .el-icon-close {
      display: block;
    }
  }
}
</style>
