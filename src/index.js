import { Core } from "@walletconnect/core";
import { WebSocketTransport } from "@walletconnect/jsonrpc-ws-connection";
import { storage, saveVote, loadVotes } from "./storage.js";
import { proposals } from "./proposals.js";
import { applyFofsTheme } from "./fofs-theme.js";

async function main() {
  console.log("🚀 Fairly Odd Fellas DAO Playground starting...");

  const core = new Core({
    projectId: "180a7164cfa9e5388daf1160841f65a0",
    storage,
  });

  const transport = new WebSocketTransport("wss://relay.walletconnect.com");
  await transport.open();

  console.log("✅ Connected to WalletConnect relay");
  applyFofsTheme();

  console.log("\n📋 Proposals:");
  proposals.forEach((p, i) => {
    console.log(`${i + 1}. ${p.title} - ${p.description}`);
  });

  const selected = proposals[0];
  const vote = { proposal: selected.title, choice: "YES" };
  await saveVote(vote);

  console.log("\n🗳 You voted:", vote);
  console.log("📂 Stored Votes:", await loadVotes());
}

main();
