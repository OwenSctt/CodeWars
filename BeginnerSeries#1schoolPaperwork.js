function paperwork(n, m) {
    let page = n * m;
    return (n < 0 || m < 0) ? 0 : page;
  }