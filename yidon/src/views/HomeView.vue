<template>
  <div class="home">
    <!-- <van-nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon class="iconfont icon-tupaopao" size="18" />
      </template>
    </van-nav-bar> -->
    <!-- <a-icon type="step-backward" /> -->
    <!-- <van-button type="primary">主要按钮</van-button>
     <a-button type="primary">
      Primary
    </a-button> -->
    <!-- 跳转aboutview页面 -->
    <i class="iconfont icon-qipao" @click="aboutview"></i>
    <img :src="imageUrl" alt="" />
    <!-- :userer="userer"父组件传给子组件的 -->

    <HelloWorld
      :userer="userer"
      @transferClick="clicker"
      ref="addData"
    ></HelloWorld>
    <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
    <!-- 测试 -->
    <div class="ceshi">
      <div class="box1">11111</div>
      <!-- <div class="box1"></div>
         <div class="box1"></div>
         <div class="box1"></div>
         <div class="box1"></div>
          <div class="box1"></div>
         <div class="box1"></div> -->
    </div>
    <!-- 用户上传头像 -->
    <div>
      <a-upload
        name="avatar"
        list-type="picture-card"
        class="avatar-uploader"
        :show-upload-list="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :before-upload="beforeUpload"
        :customRequest="uploadCustomRequest"
        @change="handleChange"
      >
        <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
          <a-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">Upload</div>
        </div>
      </a-upload>
    </div>
    <!-- 弹框 -->
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '50%' }"
      class="box"
      v-if="false"
    >
      <div class="content flex-col">
        <div class="boxer flex-row">
          <div class="font flex-row">
            <img class="imgs" src="../assets/logo.png" alt="" />
            <div class="flex-col">
              <span
                style="margin-bottom: 10px; font-weight: bold; font-size: 18px"
                >全光wifi基础版</span
              >
              <span style="color: red">1999元</span>
            </div>
          </div>
          <div class="closePop" style="font-size: 30px" @click="closePop">
            x
          </div>
        </div>
        <van-divider
          :style="{
            color: '#B0C4DE',
            borderColor: '#B0C4DE',
            padding: '0 10px',
          }"
        >
        </van-divider>
        <!-- 文本内容 -->
        <div class="textFont flex-col" style="font-size: 15px">
          <span style="font-weight: bold; margin-bottom: 10px; font-size: 16px"
            >套餐内容</span
          >
          <span>1.套餐内含:展示套餐内含:见运营侧【物料】</span>
          <span>2.WiFi套餐:展示套餐资费及礼包信息:见运营侧【物料】</span>
          <span>3.立即办理:点击【立即办理按钮】跳转【办理二次确认</span>
          <span>4.不符合宽带账号覆盖要求:增加一条提示【您关联宽带账号</span>
        </div>
        <!-- 套餐选择 -->
        <div class="setMealBox">
          <span style="font-weight: bold">套餐内容</span>
          <div class="setmeaSelect flex-row">
            <div
              class="setMeal flex-col"
              v-for="(item, index) in list"
              :key="index"
              :class="{ red: colorer == index }"
              @click="setmeaSelect(index)"
            >
              <span>1999元</span>
              <span>全光wifi</span>
              <span>基础版</span>
            </div>
          </div>
        </div>
        <!-- 业务受理信息 -->
        <div class="client flex-col">
          <!-- <div class="flex-col"> -->
          <span style="padding: 0 0 10px 0">业务受理信息</span>
          <span style="padding: 0 0 10px 0">客户姓名</span>
          <span style="padding: 0 0 10px 0">通信号码</span>
          <span style="padding: 0 0 10px 0">受理方案</span>
          <span style="padding: 0 0 10px 0">缴费渠道</span>
          <!-- </div> -->
          <!-- <span>x</span> -->
        </div>
        <van-divider
          :style="{
            color: '#B0C4DE',
            borderColor: '#B0C4DE',
            padding: '0 10px',
          }"
        >
        </van-divider>
        <!-- 业务说明 -->
        <div class="client flex-col">
          <!-- <div class="flex-col"> -->
          <span>1.业务设备</span>
          <span>2.wifi信号评测</span>
          <span>3.八闽生活</span>
          <!-- </div> -->
          <!-- <span>x</span> -->
        </div>
        <van-divider
          :style="{
            color: '#B0C4DE',
            borderColor: '#B0C4DE',
            padding: '0 10px',
          }"
        >
        </van-divider>
        <!-- 验证码 -->
        <div class="verification flex-row">
          <van-cell-group inset>
            <van-field
              v-model="sms"
              center
              clearable
              placeholder="请输入短信验证码"
            >
              <template #button>
                <span>1111</span>
              </template>
            </van-field>
          </van-cell-group>
        </div>
      </div>
      <!-- 确定办理 -->
      <div class="confirmTransaction">
        <van-button type="primary" class="" block>git remote gitee 仓库地址 块级元素</van-button>
      </div>
    </van-popup>
  </div>
</template>


<script>
// import HelloWorld from  '../components/HelloWorld.vue'
import HelloWorld from "@/components/HelloWorld.vue";
// import {Button} from 'ant-design-vue'
import { mapState } from "vuex";
// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      // 上传数据
      loading: false,
      imageUrl: "",
      // 上传
      requestData: [
         {
          item1: 1,
        },
        {
          item2: 2,
        },
        {
          item3: 3,
        },
        {
          item4: 4,
        },
      ],
      sms: "",
      show: false,
      arrr: [1, 2, 3, 4, 5],
      list: [
        {
          item1: 1,
        },
        {
          item2: 1,
        },
        {
          item3: 1,
        },
        {
          item4: 1,
        },
      ],
      //  传给子组件的数据
      userer: [666, 222, 777],
      // 控制切换颜色
      colorer: 0,
      dataState: [],
    };
  },
  computed: {
    // 把数据解析出来
    ...mapState(["dataList"]),
  },
  methods: {
    uploadCustomRequest(info) {
      //  console.log( data.file,666666)
      console.log(info, "11111");
      this.$message.loading("文件上传中...");
      const fd = new FormData();
      this.requestData.forEach((item) => {
        console.log(item.item1);
        fd.append("name", item.item1);
      });
      console.log(fd.get("name"));
      // if (info.file.status === 'uploading') {
      //   console.log("上传成功")
      //   this.loading = true;
      //   return;
      // }
      // if (info.file.status === 'done') {
      //   // Get this url from response in real world.
      //   console.log("上传成功")
      //   getBase64(info.file.originFileObj, imageUrl => {
      //     this.imageUrl = imageUrl;
      //     this.loading = false;
      //     setTimeout(() => {

      //       //  JSON.stringify(this.imageUrl)
      //       // console.log(this.see)
      //     }, 1000);
      //   });
      // }
    },
    // 上传方法
    handleChange(info) {
      // const formData = new FormData();
      //  console.log(formData('info'))
      console.log(info);
      console.log(1);
      // 上传成功
      // console.log( info,"11111");
      //   if (info.file.status === 'uploading') {
      //     console.log("上传成功")
      //     this.loading = true;
      //     return;
      //   }
      //   if (info.file.status === 'done') {
      //     // Get this url from response in real world.
      //     console.log("上传成功")
      //     getBase64(info.file.originFileObj, imageUrl => {
      //       this.imageUrl = imageUrl;
      //       this.loading = false;
      //       setTimeout(() => {

      //         //  JSON.stringify(this.imageUrl)
      //         // console.log(this.see)
      //       }, 1000);
      //     });
      //   }
    },
    // 上传图片先执行
    beforeUpload(file) {
      //  console.log(file,'555555')
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    // ___________________________________________________________________
    // 跳转aboutview页面
    aboutview() {
      this.$router.push({ path: "/about", query: ["我是传过来的值", "1222"] });
    },
    showPopup() {
      this.show = true;
      // this.$refs.addData.dataClick(0)
      console.log(this.$refs.addData.dataRef);
      //  this.$refs.addData.dataRef
    },
    // 关闭弹框
    closePop() {
      this.show = false;
    },
    // 选择套餐
    setmeaSelect(index) {
      this.colorer = index;
      console.log(11);
    },
    // 获取子组件的数据
    clicker(e) {
      console.log("e", e);
    },
  },
  created() {
    // console.log(...this.arrr)
    // console.log(this.$refs.addData.dataClick(11))
    // console.log(this.$refs.addData.dataClick())
    // console.log(this.$store.state.userData)
    this.$store.commit("dataListMenthods", this.list);
    //  setTimeout(() => {
    //  this.$store.state.dataList
    // console.log(this.dataList[0].item1)
    // for (let i = 0; i < this.dataList.length; i++) {
    this.dataState = this.dataList;
    // }
    //  }, 1000);
    // setTimeout(() => {
    //   console.log(this.dataState)
    // }, 1000);
  },
};
</script>
<style lang="scss">
//  垂直布局
.flex-col {
  display: flex;
  flex-direction: column;
}
//  水平布局
.flex-row {
  display: flex;
  flex-direction: row;
}
.home {
  .ceshi {
    width: 300px;
    height: 300px;
    border: 1px solid pink;
    position: relative;
    //  justify-content: space-between;
    //  flex-wrap: wrap;
    //  display: inline-grid;
    // display: grid;
    // grid-template-columns: 150px 150px 150px;
    // grid-template-rows: 33.33% 33.33% 33.33%;
    .box1 {
      width: 50px;
      height: 50px;
      border: 1px solid red;
      //  width: 20%;
      position: absolute;
      bottom: 5%;
      left: 50%;
      margin-top: -25px;
      margin-left: -25px;
    }
    //  .ceshi::after {
    //    content: '';
    //    width: 20%;
    //  }
  }

  .icon-tupaopao {
    font-size: 28px;
  }
  .box {
    .content {
      padding: 20px 10px 0 10px;
      height: 80%;
      overflow: hidden;
      overflow: auto;
      display: flex;
      justify-content: space-between;
      // background: pink;
      //  右边内容
      .boxer {
        height: 50px;
        // align-items: center;
        // background: pink;
        display: flex;
        justify-content: space-between;
        .font {
          .imgs {
            width: 50px;
            height: 50px;
          }
        }
        .closePop {
          // position: absolute;
          // right: 20px;
          // top: 15px;
        }
      }
      // 文本内容
      .textFont {
        padding: 10px 10px 0 10px;
      }
      // 套餐选择
      .setMealBox {
        // background: pink;
        padding: 10px 10px 0 10px;
        // ul外层
        .setmeaSelect {
          // margin-top: 10px;
          padding: 10px 0;
          font-size: 15px;
          // justify-content: space-between;
          // align-items: center;
          // overflow-y:auto;
          // flex-wrap: nowrap;
          background: pink;
          overflow: hidden;
          overflow-x: auto;
          // width: 100%;
          // li内容
          .setMeal {
            align-items: center;
            justify-content: center;
            width: 70px;
            height: 70px;
            background: #b0c4de;
            // overflow-y:auto;
            border-radius: 10px;
            margin-right: 22px;
            // white-space: nowrap;
          }
          .red {
            background: #5555ff;
          }
        }
      }
    }
    // 业务受理信息
    .client {
      justify-content: space-between;
    }
    // 验证码
    .verification {
      // width: 100%;
      justify-content: space-between;
      // background: pink;
      justify-content: flex-end;
      .van-cell-group--inset {
        width: 100%;
        margin: 0;
      }
      .err {
        //  position: absolute;
        // padding-right: 100px;
      }
    }
  }
  .confirmTransaction {
    height: 10%;
    // position: fixed;
    // padding-bottom: 10px;
  }
}
// 上传样式
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>

