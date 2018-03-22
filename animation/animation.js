let animation1 = document.querySelector('.animation1');
let animation2 = document.querySelector('.animation2');
let div2 = document.querySelector('.div2');

// TweenMax.to(animation, 5, {x: 160, rotation:30,
//   scale: 3, ease: Bounce.easeOut})
// EasePack contain：
// 1、Back 2、SlowMo 3、StppedEase 4、RoughEase
// 5、Bounce 6、Circ 7、Elastic 8、Expo 9、Sine
// TweenMax.to(animation, 5, {x: 160, rotation:30,
//   scale: 3, ease: SteppedEase.config(8), x:0})
// TweenMax.to(animation1, 5, {x: 200, rotation:30,
//   ease: SlowMo.ease.config(0.9,0.5,false)});
TweenMax.from(animation2, 3, {opacity:1, x: 100,scale:1,delay: 3});
//rotation is clockwise
// TweenMax.staggerFrom(animation2, 2,
//   {opacity:1, y: 100, delay: 3}, 2);
