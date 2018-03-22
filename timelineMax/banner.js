let tx1 = document.querySelector('.text1');
let tx2 = document.querySelector('.text2');
let t1 = new TimelineMax({repeat:-1});
t1.to(tx1, 1, { opacity: 0, delay: 5 });
t1.to(tx2, 1, { opacity: 1});
t1.to(tx2, 1, { opacity: 0,delay: 5  })
t1.to(tx1, 1, { opacity: 1});

//TweenLite.to('.text3', 2, {width:100});
// var nested = new TimelineLite();

// TweenMax.to('.text4', 1, { opacity: 0, x: 100 });
