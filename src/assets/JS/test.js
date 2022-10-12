// function func() {
//     for(var i=0; i<3; i++) {
//         setTimeout(()=>{
//             console.log(i)
//         }, 1000)
//     }
// }
// var result = func();

// function func2() {
//     for(let i=0; i<3; i++) {
//         setTimeout(()=>{
//             console.log(i)
//         }, 1000)
//     }
// }
// var result2 = func2();

// 如果要使用var当做循环循环头的话，出现循环后打印出的结果一模一样的问题，可以使用闭包来解决。
// function func3() {
//     for(var i=0; i<3; i++) { // i外部函数的参数;
//         (function(i) {       //自执行闭包函数
//             setTimeout(function timer() {
//                 console.log(i);
//             });
//         })(i);
//     }
// }
// var result3 = func3(); //外部作用域可以调用内部作用域的变量和参数

// for (let i = 0; i < 3; i++) {
//     let i = 'abc';
//     console.log(i);
// }
// // 等价于==>
// {
//     {
//         let i=0; //没有变量提升 重新申明并赋值
//         while(i<3){
//             let i='abc'
//             console.log(i)
//         }
//     }

//     {
//         let i=1;//没有变量提升 重新申明并赋值
//         while(i<3){
//             let i='abc'
//             console.log(i)
//         }
//     }

//     {
//         let i=2;//没有变量提升 重新申明并赋值
//         while(i<3){
//             let i='abc'
//             console.log(i)
//         }
//     }

//     {
//         let i=3;//没有变量提升 重新申明并赋值
//         while(i<3){
//             let i='abc'
//             console.log(i)
//         }
//     }
// }

// for(var i=0;i<3;i++){
//     var i=111;
//     console.log(i)
// }
// // 等价于==>
// {
//     {
//         var i=0;
//         while(i<3){
//             var i=111
//             console.log(i)
//         }
//     }

//     {
//         i=111; //变量提升 不会在重新申明而是直接使用
//         while(i<3){
//             var i=111
//             console.log(i)
//         }
//     }

//     {
//         i=111;//变量提升 不会在重新申明而是直接使用
//         while(i<3){
//             var i=111
//             console.log(i)
//         }
//     }

//     {
//         i=111;//变量提升 不会在重新申明而是直接使用
//         while(i<3){
//             var i=111
//             console.log(i)
//         }
//     }
// }

// 首先这个给对象a开辟了一个内存地址，定义了b指向了a的同一个内存地址。  b浅拷贝了a的指针
// var a = {n:1};
// var b = a;
// 接下来js开始去从左到右寻找有没有未声明的变量 或者报错信息，发现a没有x这个值，先在原来的a内存地址上赋值一个x并定义为undefined。
// 然后开始从右往左赋值，首先为a开辟了新的内存地址，即 {n:2}, 然后在赋值给原来内存地址的x变化，把undefined改为{n:2}，所以原来的地址就变成了{n:1,x:{n:2}}。
// a.x = a = {n:2};
//. 的运算符优先于 = 赋值运算符
// 先把 a ={n:2} 加到a.x里面,在a这个引用对象里面加一个x,并未开辟新的地址,所以a的值与b的值都是 {n:1,x= a = {n:2} },
// 再进行运算 a = {n:2} ,这个时候a被重新赋值为{n:2},a的地址发生改变,但b未变.所以这时a的值为{n:2},b的值为{n:1,x:{n:2}}
// var a={n:1}
// var b=a;
// a.x=a={n:2} ==> a.x={n:2} a此时的值为{n：1，x:{n:2}} 由于a是对象 是浅拷贝 所以b也是 {n：1，x:{n:2}} 然后执行 a={n:2} 最后a={n:2} b={n：1，x:{n:2}}
// console.log(a)
// console.log(b)
//知识点：对象的数据类型 浅拷贝 运算符优先级


// class A{}
// console.log(typeof A); //function  Class是一个function


// Js判断访问页面为PC端或移动端
// function isMobile() {
//     let userAgentInfo = navigator.userAgent;
//     let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
//     let getArr = Agents.filter(i => userAgentInfo.includes(i));
//     return getArr.length ? true : false;
// }
// console.log(isMobile());

//判断两个数是否相等
// console.log(Object.is(2,2.0)); //true

// parseInt(string, radix) 函数可解析一个字符串，并返回一个整数。 radix[2-36]
// console.log(parseInt(36, 10));

// 什么情况下需要保证幂等性
// 以SQL为例，有下面三种场景，只有第三种场景需要开发人员使用其他策略保证幂等性：
// SELECT col1 FROM tab1 WHER col2=2，无论执行多少次都不会改变状态，是天然的幂等。
// UPDATE tab1 SET col1=1 WHERE col2=2，无论执行成功多少次状态都是一致的，因此也是幂等操作。
// UPDATE tab1 SET col1=col1+1 WHERE col2=2，每次执行的结果都会发生变化，这种不是幂等的。


// var a="全局变量";
// function A(){
//     var a="局部变量";
//     B();
// }
// function B(){
//     console.log(a)
// }

// A();


// function A(){
//     var a='局部变量0';
//     B();
// }

// var a="全局变量";
// console.log(a)
// function B(){
//     console.log(a+":2")
// }
// B();
// a="全局变量1";
// B();
// console.log(a)























































































































































































































































































































































































































































