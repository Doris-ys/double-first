<template>
  <page-header-wrapper :title="false">
    <a-card :body-style="{padding: '24px 32px'}" :bordered="false">
      <a-row :gutter="16">
        <a-col :md="24" :lg="12">
          <a-form>
            <a-form-item label="用户名(必填)" :required="true">
              <a-input placeholder="请输入用户名" v-model="formData.userName"/>
            </a-form-item>
            <a-form-item label="原密码">
              <a-input placeholder="请输入原密码" v-model="formData.oldPassword"/>
            </a-form-item>
            <a-form-item label="新密码">
              <a-input placeholder="请输入4-16位数字字母组合新密码" v-model="formData.newPassword"/>
            </a-form-item>
            <a-form-item label="重复新密码">
              <a-input placeholder="请再次输入新密码" v-model="formData.repeatNewPassword"/>
            </a-form-item>
            <a-form-item label="姓名">
              <a-input placeholder="请输入姓名" v-model="formData.name"/>
            </a-form-item>
            <a-form-item label="归属部门">
              <a-input placeholder="请输入归属部门" v-model="formData.department"/>
            </a-form-item>
            <a-form-item label="办公电话（固话和手机）">
              <a-input placeholder="38473849; 19876567855" v-model="formData.officePhone"/>
            </a-form-item>
            <a-form-item label="常用学校邮箱">
              <a-input placeholder="请输入常用学校邮箱" v-model="formData.email"/>
            </a-form-item>
            <a-form-item label="高校党（校）办固定电话">
              <a-input placeholder="38473849; 19876567855" v-model="formData.schoolPhone"/>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" @click="handleSubmit">确认修改</a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </a-card>
  </page-header-wrapper>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formData: {
        userName: '',
        oldPassword: '',
        newPassword: '',
        repeatNewPassword: '',
        name: '',
        department: '',
        officePhone: '',
        email: '',
        schoolPhone: ''
      }
    }
  },
  mounted () {
    this.initInfo()
  },
  computed: {
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  methods: {
    ...mapActions(['SetInfo']),
    initInfo () {
        for (var i of Object.keys(this.formData)) {
          if (this.userInfo[i]) {
            this.formData[i] = this.userInfo[i]
          }
        }
    },
    handleSubmit (e) {
      e.preventDefault()
      let msg = ''
      if (!this.formData.userName) {
        msg = '用户名必须填写'
      }
      if (this.formData.newPassword !== this.formData.repeatNewPassword) {
        msg = '两次密码输入不同'
      }
      if (msg) {
        this.$notification['error']({
          message: '错误',
          description: msg,
          duration: 4
        })
      }
      this.SetInfo(this.formData)
        .then((res) => this.setSuccess(res))
        .catch(err => this.requestFailed(err))
    },
    setSuccess () {
      this.$notification['success']({
        message: '成功',
        description: '信息修改成功',
        duration: 4
      })
    },
    requestFailed (err) {
      this.$notification['error']({
        message: '信息修改失败',
        description: err,
        duration: 4
      })
    }
  }
}
</script>

<style lang="less" scoped>

  .avatar-upload-wrapper {
    height: 200px;
    width: 100%;
  }
  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-upload-preview {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    border-radius: 50%;
    box-shadow: 0 0 4px #ccc;

    .upload-icon {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 1.4rem;
      padding: 0.5rem;
      background: rgba(222, 221, 221, 0.7);
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
    .mask {
      opacity: 0;
      position: absolute;
      background: rgba(0,0,0,0.4);
      cursor: pointer;
      transition: opacity 0.4s;

      &:hover {
        opacity: 1;
      }

      i {
        font-size: 2rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -1rem;
        margin-top: -1rem;
        color: #d6d6d6;
      }
    }

    img, .mask {
      width: 100%;
      max-width: 180px;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }
</style>
