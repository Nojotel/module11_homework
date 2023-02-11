function interval(from, to) {
  let i = from;
  let step = setInterval(function() {
    console.log(i);
    if (i == to) {
      clearInterval(step);
    }
    i++;
  }, 1000);
}
interval(7, 24);