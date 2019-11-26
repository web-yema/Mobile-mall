# cubepro

# 添加 cubeui 组件库 vue-cli3 vue add

```
  vue add cube-ui
```

# 长列表优化

不需要的 dom 10000 条数据 只需要用一个 div 计算出 1000 个 dom 需要的高度即可 只显示我需要的数据到 dom 里面

Vue 组件间通信方式

1.  props
2.  $emit 和 $on
3.  evnetbus
4.  vuex
5.  refs
6.  provide 和 inject
7.  $attrs 和 $listeners
8.  $parent 和 $children
9.  slot

# vue 的优化

1. key 的使用 domdiff
2. 对不需要展示到 dom 的属性 Object.freeze 的数据不会在被劫持
3. 组件细分
4. 异步组件 和路由懒加载
5. keep-alive
6. 尽量使用 v-if 代替 v-show
7. 使用 computed 代替一些函数
8. 预渲染(数据不够动态)
9. 骨架屏
10. SSR（服务器端渲染）nuxt.js

# 一.Props 传递数据

```js
<template>
 <div>
  父组件:{{mny}}
  <Son1 :mny="mny"></Son1>
 </div>
</template>
<script>
import Son1 from "./Son1";
export default {
 components: {
  Son1
 },
 data() {
  return { mny: 100 };
 }
};
</script>
```

子组件接受父组件的属性
子组件 1:

# 二.\$emit 使用

父组件使用 v-model 子组件 props 接收的值 只能是 value
:value="mny" @input="change" = v-model
子组件触发父组件方法,通过回调的方式将修改的内容传递给父组件

<template>
 <div>
  父组件:{{mny}}
  <Son1 :mny="mny" @input="change"></Son1>
 </div>
</template>
<script>
import Son1 from "./Son1";
export default {
 methods: {
  change(mny) {
   this.mny = mny;
  }
 },
 components: {
  Son1
 },
 data() {
  return { mny: 100 };
 }
};
</script>
子组件触发绑定自己身上的方法

<template>
 <div>
  子组件1: {{mny}}
  <button @click="$emit('input',200)">更改</button>
 </div>
</template>
<script>
export default {
 props: {
  mny: {
   type: Number
  }
 }
};
</script>
这里的主要目的就是同步父子组件的数据,->语法糖的写法

# .sync

```js
<Son1 :mny.sync="mny"></Son1>

<!-- 触发的事件名 update:(绑定.sync属性的名字) -->

<button @click="$emit('update:mny',200)">更改</button>
#v-model
<Son1 v-model="mny"></Son1>
<template>

 <div>
  子组件1: {{value}} // 触发的事件只能是input
  <button @click="$emit('input',200)">更改</button>
 </div>
</template>
<script>
export default {
 props: {
  value: { // 接收到的属性名只能叫value
   type: Number
  }
 }
};
</script>
```

#三.$parent、$children
继续将属性传递

```js
<Grandson1 :value="value"></Grandson1>
<template>

 <div>
  孙子:{{value}}
  <!-- 调用父组件的input事件 -->
  <button @click="$parent.$emit('input',200)">更改</button>
 </div>
</template>
<script>
export default {
 props: {
  value: {
   type: Number
  }
 }
};
</script>
```

如果层级很深那么就会出现$parent.$parent.....我们可以封装一个\$dispatch 方法向上进行派发

```js
#$dispatch
Vue.prototype.$dispatch = function $dispatch(eventName, data) {
  let parent = this.$parent;
while (parent) {
parent.$emit(eventName, data);
    parent = parent.$parent;
}
};
既然能向上派发那同样可以向下进行派发

#$broadcast
Vue.prototype.$broadcast = function $broadcast(eventName, data) {
  const broadcast = function () {
    this.$children.forEach((child) => {
child.$emit(eventName, data);
      if (child.$children) {
$broadcast.call(child, eventName, data);
}
});
};
broadcast.call(this, eventName, data);
};

```

# 四.$attrs、$listeners

#\$attrs
批量向下传入属性

```js
<Son2 name="组件1" age="10"></Son2>

<!-- 可以在son2组件中使用$attrs属性,可以将属性继续向下传递 -->
<div>
  儿子2: {{$attrs.name}}
  <Grandson2 v-bind="$attrs"></Grandson2>
</div>

<template>
 <div>孙子:{{$attrs}}</div>
</template>
#$listeners
批量向下传入方法

<Son2 name="组件1" age="10" @click="()=>{this.mny = 500}"></Son2>

<!-- 可以在son2组件中使用listeners属性,可以将方法继续向下传递 -->

<Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>

<button @click="$listeners.click()">更改</button>
```

# 五.Provide & Inject

#Provide 提供
在父级中注入数据

provide() {
return { parentMsg: "父亲" };
},
#Inject 注入
在任意子组件中可以注入父级数据

inject: ["parentMsg"] // 会将数据挂载在当前实例上

# 六.Ref 使用

获取组件实例

```js
<Grandson2 v-bind="$attrs" v-on="$listeners" ref="grand2"></Grandson2>
mounted() { // 获取组件定义的属性
console.log(this.$refs.grand2.name);
}
```

# 七.EventBus

用于跨组件通知(不复杂的项目可以使用这种方式)

```js
Vue.prototype.$bus = new Vue();


mounted() {
this.$bus.$on("my", data => {
console.log(data);
});
},
mounted() {
this.$nextTick(() => {
   this.$bus.$emit("my", "我是传递");
});
},
```

## vuex
