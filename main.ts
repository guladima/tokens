import type { ChainWithTokens } from "./types.ts";

import ethereum from "./1.ts";
import optimism from "./10.ts";
import bsc from "./56.ts";
import bscTestnet from "./97.ts";
import polygon from "./137.ts";
import sonic from "./146.ts";
import opBNB from "./204.ts";
import moonbeam from "./1284.ts";
import base from "./8453.ts";
import arbitrum from "./42161.ts";
import avalanche from "./43114.ts";
import hoodi from "./560048.ts";

export default {
  // mainnet
  1: ethereum,
  // optimism
  10: optimism,
  // bsc
  56: bsc,
  // bscTestnet (testnet)
  97: bscTestnet,
  // polygon
  137: polygon,
  // sonic
  146: sonic,
  // opBNB
  204: opBNB,
  // moonbeam
  1284: moonbeam,
  // base
  8453: base,
  // arbitrum
  42161: arbitrum,
  // avalanche
  43114: avalanche,
  // hoodi (testnet)
  560048: hoodi,
} as ChainWithTokens;
