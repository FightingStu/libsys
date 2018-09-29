<template>
    <div class="contain">
        <div class="top">
            <div class="avatar">
                <img v-if="isLogin" :src="userInfo.avatarUrl" />
                <!-- ↑取头像 -->
                <img v-else src="/static/images/nikavatar.png" />
                <!-- 头像图片的不同显示方式↑ isLogin的值为布尔型，进行逻辑判断 -->
            </div>
            <button class="btn" open-type="getUserInfo" @click="onload" v-show="!isLogin">微信登陆</button>
            {{userInfo.nickName}}
            <!-- ↑取昵称 -->
            <div class="bang">
                <img v-show="isBang" src="/static/images/banged.png">
                <img v-show="!isBang" src="/static/images/unbang.png">
                <!-- ↑绑定图片的不同显示方式 -->
            </div>
        </div>
        <div class="middle" v-show="!isBang">
            <span> 您未绑定，不能正常使用部分功能</span>
        </div>
        <div class="middle" v-show="isBang">
            <span> 您已绑定，可以正常使用下面功能</span>
        </div>
        <div class="scroll">
            <scroll-view>
                <ul>
                    <li v-for="(item,index) in issue" :key="index">
                        <a :href="item.url+'?name='+userInfo.nickName+'&isbang='+isBang">
                            <div class="issue-all">
                                <div class="issue-list">
                                    <img :src="item.src">
                                    <span>{{item.title}}</span>
                                </div>
                                <div class="list-end">
                                    <img src="/static/images/jiantou.png">
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </scroll-view>
        </div>
    </div>
</template>

<script>
import fly from "@/utils/fly"
export default {
    data() {
        return {
            userInfo: {},
            isLogin: false,
            isBang: false,
            issue: [
                { 'url': '/pages/bind/main', 'src': '/static/images/bang.png', 'title': '绑定学号' },
                { 'url': '/pages/search/main', 'src': '/static/images/star.png', 'title': '我的收藏' }
            ],
        }
    },
    mounted() {

    },

    async onShow(){
        this.checkisbang(this.userInfo.nickName);
    },
    methods: {
        onload() {
            wx.login({
                success: (res) => {
                    wx.getUserInfo({
                        success: (res) => {
                            this.userInfo = res.userInfo;
                            this.isLogin = true;
                            this.checkisbang(this.userInfo.nickName);
                        }   
                    })
                }
            })
        },
        checkisbang(wxuser) {
        let _this = this;
        if(wxuser!=undefined){
        fly
            .post('hasbang.php', {
                wxuser: wxuser
            })
            .then(res => {
                console.log("返回的数据",res);
                _this.isBang = res.data.isbang;
            })
            .catch(err => {
                console.log("你又失败了");
            })
    }},
    },
}
</script>


<style>
.contain {
  width: 100%;
  background-color: #fefefe;
}

.top {
  display: flex;
  flex-direction: column; /* 将top容器内容垂直显示，正如一个列一样 */
  align-items: center;
  height: 200px;
  background-color: #1b82d1;
  color: #fefefe;
}

.avatar img {
  width: 70px;
  height: 70px;
  margin-top: 40px;
  border-radius: 50%;
}

.btn {
  background-color: rgb(6, 179, 49);
  font-size: 14px;
  width: 90px;
  height: 35;
}

.bang img {
  margin-top: 5px;
  width: 55px;
  height: 20px;
}

.middle {
  font-size: 10px;
  color: #bbbec4;
  text-align: center;
}

.swiper {
  height: 450px;
}

.issue-all {
  overflow: hidden;
  padding: 8px 4px;
  border-bottom: 1px solid #bbb;
}

.issue-list {
  font-size: 16px;
  float: left;
}

.issue-list span {
  height: 100%;
  vertical-align: middle;
}

.issue-list img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.list-end {
  float: right;
}

.list-end img {
  width: 20px;
  height: 20px;
  right: 2px;
  vertical-align: middle;
}
</style>
