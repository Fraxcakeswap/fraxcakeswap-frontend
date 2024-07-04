import { fraxTestnetTokens } from '@pancakeswap/tokens'
import { FeeAmount } from '@pancakeswap/v3-sdk'

import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
  {
    pid: 1,
    lpAddress: '0xDC28090A6A694E678B821A63423a30F304fFE8bf', // PancakeV3Factory
    token0: fraxTestnetTokens.usdt,
    token1: fraxTestnetTokens.usdc,
    feeAmount: FeeAmount.LOW,
  },
])
