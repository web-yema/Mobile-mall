<template>
  <div class="about">
    <p>购物车</p>
    <p>共{{shoppingList.length}}件宝贝</p>
    <div class="shoppingMain">
        <div class="shoppingItem" v-for="(item,index) in shoppingList">
            <div class="selectCircle" :class="{checked:item.isSelect}" @click="selectGoods(item)"></div>
            <div class="shoppingImg">
                <img :src="item.imgurl" alt="">
            </div>
            <div class="itemRight">
                <p class="title">{{item.title}}</p>
                <p class="spcolor">{{item.color}}</p>
                <div class="numAndMoney">
                    <p>￥{{item.money}}</p>
                    <div class="numberControl">
                        <a class="btn" @click="numDel(item,index)">-</a>
                        <input type="text" v-model="item.num" readonly="readonly">
                        <a class="btn" @click="numAdd(item,index)">+</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottomMain">
        <div class="selectCircle" :class="{checked:allSelect}" @click="allGoodsSelect"></div>
        <span style="font-size:16px;padding: 12px">全选</span>
        <button class="bottombtn2" @click="delGoods">删除</button>
        <button class="bottombtn1" @click="buyGoods">￥{{sum}}&nbsp;结算</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shoppingList: [
        {
          imgurl: 'https://upload.jianshu.io/users/upload_avatars/18667421/663d8faa-2427-43ae-b386-42d909a05f3c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp',
          title: '女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包',
          color: '粉色',
          money: 149,
          num: '1',
          isSelect: false,
        },
        {
          imgurl: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1',
          title: '女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包',
          color: '粉色',
          money: 149,
          num: '1',
          isSelect: false,
        },
        {
          imgurl: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1',
          title: '女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包',
          color: '粉色',
          money: 149,
          num: '1',
          isSelect: false,
        },
        {
          imgurl: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1',
          title: '女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包',
          color: '粉色',
          money: 149,
          num: '1',
          isSelect: false,
        },
        {
          imgurl: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1',
          title: '女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包',
          color: '粉色',
          money: 15249,
          num: '1',
          isSelect: false,
        },
        {
          imgurl: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1',
          title: '女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包',
          color: '粉色',
          money: 149,
          num: '1',
          isSelect: false,
        },
        {
          imgurl: 'https://csdnimg.cn/cdn/content-toolbar/csdn-logo_.png?v=20190924.1',
          title: '女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包女包',
          color: '粉色',
          money: 149,
          num: '2',
          isSelect: false,
        },
      ],
      allSelect: false,
      sum: 0,
    };
  },
  methods: {
    selectGoods(item) {
      item.isSelect = !item.isSelect;
      this.allSelect = false;
      if (item.isSelect == true) {
        this.sum = this.sum + (item.money * item.num);
      } else {
        this.sum = this.sum - (item.money * item.num);
      }
    },
    allGoodsSelect() {
      this.allSelect = !this.allSelect;
      if (this.allSelect == true) {
        this.sum = 0;
        for (var i = 0; i < this.shoppingList.length; i++) {
          this.shoppingList[i].isSelect = true;
          this.sum = this.sum + (this.shoppingList[i].money * this.shoppingList[i].num);
        }
      } else {
        for (var i = 0; i < this.shoppingList.length; i++) {
          this.sum = this.sum - (this.shoppingList[i].money * this.shoppingList[i].num);
          this.shoppingList[i].isSelect = false;
        }
      }
    },
    numAdd(item, index) {
      item.num++;
      if (item.isSelect == true) {
        this.sum = this.sum + item.money;
      }
    },
    numDel(item, index) {
      item.num--;
      if (item.isSelect == true) {
        this.sum = this.sum - item.money;
      }
      if (item.num == 0) {
        this.shoppingList.splice(index, 1);
      }
    },
    buyGoods() {
      alert(`购买成功,共花费${this.sum}元`);
    },
    delGoods() {
      this.sum = 0;
      for (let i = 0; i < this.shoppingList.length; i++) {
        if (this.shoppingList[i].isSelect) {
          this.shoppingList.splice(i, 1);
          i--;
        }
      }
      if (this.allSelect) {
        this.shoppingList.splice(0, this.shoppingList.length);
        this.allSelect = false;
      }
    },
  },
};
</script>

<style>
.about{
  background: #F5F5F5;
  height: 86.2vh;
  overflow-y: scroll;
  position: relative;
}
.shoppingMain{
    width: 100%;
    height: auto;
    margin-bottom: 70px;
}
.shoppingItem{
    width: 93%;
    margin-left: 2%;
    margin-bottom: 30px;
    background: #fff;
    border-radius:10px;
    display: flex;
    padding: 20px 10px;
}
.selectCircle{
    width: 20px;
    height: 20px;
    border: 1px solid #a7a5a5;
    border-radius: 50%;
    margin: auto 0px auto 10px;
}
.shoppingImg{
    width: 100px;
    height: 100px;
    padding: 10px;
}
.shoppingImg img{
    height: 100%;
    width: 100%;
}
.itemRight{
    font-size: 30px;
    width: 500px;
}
.title{
  margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.spcolor{
  color: #a7a5a5;
  margin: 10px 0;
}
.numAndMoney{
    display: flex;
}
input{
    width: 40px;
    height: 20px;
    margin: 10px;
    text-align: center;
}
.numberControl{
    position: absolute;
    right: 30px;
    font-size: 35px;
    margin-top: -15px;
}
.numberControl>input{
  height: 35px;
}
.bottomMain{
    position: fixed;
    width: 100%;
    height: 6vh;
    bottom: 6vh;
    left: 0;
    border-top: #e4e4e4 1px solid;
    background: #fff;
    display: flex;
    padding: 10px;
}
.bottombtn1{
    width:auto;
    height: 50px;
    border: none;
    color: #fff;
    background-color: #e26411;
    border-radius: 25px;
    margin: 10px 0 0 30px;
    padding: 0 20px;
}
.bottombtn2{
    width: auto;
    height: 50px;
    border: none;
    color: #fff;
    background-color: #cecac7;
    border-radius: 25px;
    margin: 10px 0 0 230px;
    padding: 0 20px;
}
.checked{
    background: #e26411;
    border: 1px solid rgba(0, 0, 0, 0)
}
</style>
