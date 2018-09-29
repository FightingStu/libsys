<template>
    <div class="contain">

        <scroll-view scroll-x class="top">
            <div class="tabbar" :class="{'tabbar-bottom':currentTab==index}" v-for="(item,index) in tabBar" :key="index" @click="clickTab(index)">
                {{item.title}}
            </div>
        </scroll-view>
        <swiper :current="currentTab" @change="changeTab" style="height:500px">
            <swiper-item>
                <div class="myview">
                    <div class="left">
                        <img :src="websrc">
                    </div>
                    <div class="right">
                        <div class="title">javascript 权威指南<img src="/static/images/hotdoor.png"></div>
                        <div class="detail">作者：韦舒松</div>
                        <div class="detail">出版社：韦舒松</div>
                        <div class="detail">评分：韦舒松</div>
                        <div class="detail">索书号：韦舒松</div>
                        <div class="detail">馆藏数量：韦舒松</div>
                    </div>
                </div>
                <div>
                    <canvas canvas-id="ringCanvas" class="canvas" style="height:300px;width:375px;"></canvas>
                </div>
            </swiper-item>
            <swiper-item>
                <div>
                    <button @click="modalShow">eeee</button>
                     <modal class="modal" :hidden="showModal" @confirm="modalOk()" no-cancel title="查看modal内容">
                         56665654654564
                     </modal>
                </div>
            </swiper-item>
            <swiper-item>
                <div>
                    333
                </div>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import wxCharts from '@/utils/wxcharts'
export default {
    data() {
        return {
            tabBar: [
                { "title": "本周最热" },
                { "title": "好评排行" },
                { "title": "借阅排行" }
            ],
            currentTab: 0,
            websrc: "http://localhost/lib/lib1.jpg",
            showModal:true

        }
    },
    methods: {
        clickTab(e) {
            this.currentTab = e;
        },
        changeTab(e) {
            this.currentTab = e.mp.detail.current;
        },
        charts() {
            new wxCharts({
                animation: true,
                canvasId: 'ringCanvas',
                type: 'ring',
                extra: {
                    ringWidth: 15,
                    pie: {
                        offsetAngle: -90
                    },
                },
                subtitle: {
                    fontSide: 16
                },
                series: [{
                    name: '成交量1',
                    data: 15,
                    stroke:false
                }, {
                    name: '成交量2',
                    data: 35,
                }, {
                    name: '成交量3',
                    data: 78,
                }],
                width: 375,
                height: 200,
                dataLabel: false,
            });
        },
        modalOk(){
            this.showModal=true;
        },
        modalShow(){
            this.showModal=!this.showModal
        }
    },
    async onShow() {
        this.charts();
    }
}
</script>

<style>
.contain {
  width: 100%;
  background-color: #fefefe;
}

.top {
  text-align: center;
  line-height: 42px;
  white-space: nowrap;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #bbbe
}
.tabbar {
  width: 130px;
  font-size: 18px;
  height: 42px;
  display: inline-block;
  color: #000;
}

.tabbar-bottom {
  color: #2196f3;
  border-bottom: 2px solid #2196f3;
}
.myview {
  overflow: hidden;
  padding: 8px 10px 8px 10px;
  border-bottom: 2px solid #bbbe;
}

.left {
  width: 120px;
  height: 120px;
  float: left;
}

.left img {
  width: 100px;
  height: 120px;
}

.right {
  float: left;
  width: 220px;
}
.right img {
  float: right;
  width: 25px;
  height: 23px;
}

.title {
  font-size: 20px;
}

.detail {
  font-size: 15px;
  color: #636363;
}

.canvas {
  text-align: center;
}
</style>
