function arrayMadness(a, b) {
    return a.map(x => x ** 2).reduce((acc, val) => acc + val, 0) >
           b.map(x => x ** 3).reduce((acc, val) => acc + val, 0)
    }