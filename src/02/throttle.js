function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if (Date.now() - lastRan >= delay) {
          func.call(contet, ...args);
          lastRan = Date.now();
        }
      }, dalay - (Date.now() - lastRan));
    }
  };
}
var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    console.log('다음 페이지 로딩');
  }
};
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);