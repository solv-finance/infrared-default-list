import type { Address, PublicClient } from 'viem'

import type { DefaultListToken } from '@/schemas/tokens-schema'

import { getTokenDecimals } from './get-token-decimals'

export const validateDecimals = async ({
  errors,
  publicClient,
  token,
}: {
  errors: Array<string>
  publicClient: PublicClient
  token: DefaultListToken
}) => {
  const decimals = await getTokenDecimals({
    errors,
    publicClient,
    tokenAddress: token.address as Address,
  })

  if (token.decimals !== decimals) {
    errors.push(
      `${token.symbol}’s decimals does not match the on-chain decimals ${decimals}`,
    )
  }
}
