<template>
    <div class="contain">
        <div class="top">
            <img src="/static/images/lib.jpg">
        </div>
        <div class="input-on">
            <div class="picture">
                <img src="/static/images/sid.png">
            </div>
            <div class="font">
                <span>学号</span>
            </div>
            <div class="text">
                <input type="text" maxlength="10" placeholder="请输入学号" v-model="sid">
            </div>
        </div>
        <div class="input-under">
            <div class="picture">
                <img src="/static/images/pwd.png">
            </div>
            <div class="font">
                <span>密码</span>
            </div>
            <div class="text">
                <input type="password" maxlength="18" placeholder="请输入密码" v-model="pwd">
            </div>
        </div>
    <div class="tips">
        <span>tips:初始密码为123456，为了保证您的账户安全，请及时修改密码</span>
    </div>
    <div class="btn" v-if="!isBang">
        <button>绑定学号</button>
    </div>
    <div v-else class="btn">
        <button style="background-color: rgb(238, 101, 108);">解除绑定</button>
    </div>
    </div>
</template>

<script>
import fly from "@/utils/fly"
export default {
    data() {
        return {
            wxuser: '',
            happy: [],
            sid: '',
            pwd: '',
            isBang:false
        }
    },
    methods: {
        test() {
            this.wxuser = this.$root.$mp.query.name;
            // fly
            //     .post("test3.php", {

            //     })
            //     .then(res => {
            //         console.log("获取的测试数据", res.data);
            //     })
            //     .catch(err => {
            //         console.log("你失败了");
            //     })
        }
    },
    mounted() {

    }

}
</script>


<style>
.contain {
  width: 100%;
  background-color: #fefefe;
}

.top img {
  width: 375px;
  height: 185px;
}

.input-on {
  margin-top: 10px;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  width: 375px;
}

.input-under {
  overflow: hidden;
  margin-top: 1px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

.picture,
.font {
  float: left;
  padding: 8px 5px;
}

.picture img {
  height: 20px;
  width: 20px;
  vertical-align: middle;
}

.font span {
  font-size: 14px;
  height: 100%;
  vertical-align: middle;
}

.text {
  float: right;
  font-size: 14px;
  padding: 9px 0px 7px 0px;
  right: 5px;
}

.tips{
      font-size: 12px;
  color: #bbbec4;
  text-align: center;
}

.btn{
    margin-top: 8px;
}

.btn button{
    width: 320px;
    background-color:  rgb(6, 179, 49);
}
</style>
