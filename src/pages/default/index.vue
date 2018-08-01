<template>
    <div class="contain">
        <div class="logo">
            <img src="/static/images/logo.png">
            <!-- 取images目录下的logo图↑ -->
        </div>
        <div class="middle">
            <div class="search">
                <div class="searchtext">
                    <input type="text" placeholder="请输入查询的书籍名称" v-model="searchtext">
                    <!-- text默认的提示内容↑ -->
                </div>
                <div class="searchimg">
                    <img src="/static/images/find.png">
                </div>
            </div>
        </div>
        <div class="swiper">
            <swiper class="msglist" autoplay="true" duration="1500" circular="true" vertical="true">
                <swiper-item v-for="(item,index) in msglist" :key="index">
                    <div class="listitem">{{item.title}}</div>
                </swiper-item>
            </swiper>
            <!-- 公告swiper轮询↑ -->
        </div>
        <div class="bottom">
            <img src="/static/images/study.jpg">
        </div>
    </div>
</template>

<script>
import fly from '@/utils/fly';
export default {
    data() {
        return {
            msglist: []
               
        }
    },

    mounted() {
        this.getinfo();
    },
    methods: {
        getinfo() {
            fly
                .get('test.php')
                .then(res => {
                    console.log("获取的数据", res.data);
                    this.msglist = res.data;
                })
                .catch(err => {
                    console.log("呵呵哒");
                })
        }
    }
}
</script>


<style>
.contain {
  width: 100%;
  background-color: #fefefe;
}

.logo {
  display: flex;/* 弹性容器 */
  justify-content: center; /* 主轴（没设置，默认由左到右）方向居中 */
  align-items: center;/* 中点与交叉轴居中 */
  height: 150px;
}

.logo image {
  width: 294px;
  height: 48px;
}

.middle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
}

.search {
  border: 2px solid #ddd; /* 边框属性 大小2px 颜色灰白 */
  border-radius: 12px; /* 四角边为圆 */
  width: 260px;
  height: 35px;
}

.searchtext,   
.searchimg {
  float: left;/* 靠左浮动，对齐 */
}

.searchimg image {
  height: 25px;
  width: 25px;
  margin-top: 18%;
}

.searchtext {
  width: 220px;
  margin-left: 2%;
  margin-top: 2%;
  font-size: 14px;
}

.swiper {
  display: flex;
  justify-content: center;
}

.msglist {
  height: 30px;
  font-size: 14px;
  width: 75%;
}

.listitem {
  overflow: hidden;
  white-space: nowrap; /* 不换行 */
  text-overflow: ellipsis; /* 文本超出则显... */
}

.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}

.bottom img {
  height: 220px;
}
</style>
