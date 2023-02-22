const feeHistory = require('./src/feeHistory');

(async () => {
  const data = await feeHistory.get()

  console.log('Original response:')
  console.log(data)
  console.log('')

  const dataAsArray = feeHistory.toArray(data)

  console.log('Human readable:')
  console.log("| Block         | Base Fee Per Gas (Gwei)       | Gas Used Ratio")
  console.log("|---------------|-------------------------------|------------------------")
  dataAsArray.forEach(entry => {
    console.log(`| ${entry.block}\t| ${entry.baseFeePerGas}\t\t\t| ${entry.gasUsedRatio}`)
  })
})();
