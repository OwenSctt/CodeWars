function travelDistance(avgSpeed, travelTime) {
    const KM_PER_KNOT = 1.852;
    const travelHours = travelTime / 60;
    const travelKms = avgSpeed * KM_PER_KNOT * travelHours;
  
    return travelKms;
  }