const request = require('./request')

const get = async (last_n_blocks = 10) => {
  const payload = {
    id: 1,
    jsonrpc: '2.0',
    method: 'eth_feeHistory',
    params: [
      `0x${Number(last_n_blocks).toString(16)}`,
      'latest',
      []
    ]
  }

  const response = await request.send(payload)
  return response.json()
}

const toArray = (data) => {

  const result = []
  const { result: { baseFeePerGas, gasUsedRatio, oldestBlock } } = data

  for (let i = 0; i < gasUsedRatio.length; i++) {
    block = Number(oldestBlock) + i
    result.push({
      block: Number(oldestBlock) + i,
      baseFeePerGas: weiToGwei(Number(baseFeePerGas[i])),
      gasUsedRatio: gasUsedRatio[i]
    })
  }

  //console.log('')
  //console.log(`Base fees per gas for next block: ${weiToGwei(Number(baseFeePerGas[baseFeePerGas.length - 1]))}`)

  return result
}

const weiToGwei = (wei) => (wei / 1000000000)

module.exports = {
  get,
  toArray
}
