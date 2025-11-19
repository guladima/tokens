export interface ChainWithTokens {
  [key: number]: Token[];
}

export interface Token {
  chainId: number;
  name: string;
  address: `0x${string}`;
  decimals: number;
  symbol: string;
}
