import { StreamClient } from "@stream-io/node-sdk";

const apiKey = "7a7nb7jcg88p"
const apiSecret = "uj5dzuf5bnp8nvb82dj2huq9qznncj67n7tpv9eavyu3cwh3d3nezhdq69n8czkp"

export const client = new StreamClient(apiKey, apiSecret)