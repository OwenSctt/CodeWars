function betterThanAverage(classPoints, yourPoints) {
    const avg = classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;
  
    return yourPoints > avg;
  }