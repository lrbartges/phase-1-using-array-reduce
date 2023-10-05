const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(accumulator, currentBatch) {
  return accumulator + currentBatch;
}, 0);

console.log(`Total number of assembled batteries: ${totalBatteries}`);
