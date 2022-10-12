import vue from 'vue' //引入vue
import vuex from 'vuex' //引入vuex

// vuex 五个概念
// vuex分为五个大块

// state： 统一定义公共数据（类似于data(){return {a:1, b:2，xxxxxx}}）

// mutations ： 使用它来修改数据(类似于methods)

// getters： 类似于computed(计算属性，对现有的状态进行计算得到新的数据-------派生 )

// actions： 发起异步请求

// modules： 模块拆分

//使用vuex
vue.use(vuex);
// 创建vuex实例
const store=new vuex.Store({
    // state(){
    //   return {
    //     //公共的数据，全局作用域。
    //     token:'state:我是全局作用域的token',
    //     count: 1
    //   }
    // },
    state:{
        token:'state:我是全局作用域的token',
        count: 1 ,
        user:{},
    },
    mutations: {
        //修改公共数据,本质上是JavaScript函数，专门用来变更store中的数据
        //想要修改State中的数据，只能调用Mutation方法，他是Vuex中用来修改公共数据的唯一入口。
        //调用时用this.$store.commit('mutation名','荷载')来调用
        //mutation必须是同步函数，mutation里面不能放一部代码
        xiugaitoken(state,obj){
            state.token="我是mutation修改后的token"+obj;
        },
        increment (state) {
           state.count+=10;
        },
        addUserInfo(state,obj){
            state.user=obj;
        },
    },
    getters:{
        // state 就是上边定义的公共数据state
        getter1(state) {
            return state.token='getter修改后的token';
        }
    },
    actions:{
        action1(context,obj){
            //1.发送异步请求，请求数据
            //2.commit调用mutation来修改数据
            context.commit('xiugaitoken',obj);
        },
        increment(context) {
            context.commit('increment');
        },
        incrementAsync (context) { // 异步 action
            setTimeout(() => {
                context.commit('increment');
            }, 1000);
        }
    },
    modules:{
        //将上述的5大对象包装进来
        modules1: {
            // namespaced为true，则在使用mutations时，就必须要加上模块名
            namespaced: true, 
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {}
        },
        modules2: {
            // namespaced不写，默认为false，则在使用mutations时，不需要加模块名
            state: {},
            getters: {},
            mutations: {},
            actions: {},
            modules: {}
        },

    }
});

export default store //导出store