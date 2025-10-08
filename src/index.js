import { useState } from "react";
import { Core } from "@walletconnect/core";
import { WebSocketTransport } from "@walletconnect/jsonrpc-ws-connection";
import { KeyValueStorage } from "@walletconnect/keyvaluestorage";

const PROJECT_ID = "180a7164cfa9e5388daf1160841f65a0";
const storage = new KeyValueStorage({ database: "fofs_dao" });

export default function Home() {
  const [wallet, setWallet] = useState(null);
  const [votes, setVotes] = useState([]);
  const [connector, setConnector] = useState(null);

  const proposals = [
    { id: 1, title: "Add New NFT Collection" },
    { id: 2, title: "Treasury Allocation" },
    { id: 3, title: "Partnership with On-chain Game" },
  ];

  const connectWallet = async () => {
    const core = new Core({ projectId: PROJECT_ID, storage });

    const transport = new WebSocketTransport("wss://relay.walletconnect.com");
    await transport.open();

    const session = await core.session.create({
      requiredNamespaces: {
        eip155: {
          methods: ["eth_sendTransaction", "personal_sign"],
          chains: ["eip155:1"],
          events: ["chainChanged", "accountsChanged"],
        },
      },
    });

    setConnector(session);
    setWallet(session.accounts[0]); // first connected account
    console.log("Connected wallet:", session.accounts[0]);
  };

  const voteProposal = async (proposal) => {
    const newVote = { proposal: proposal.title, choice: "YES" };
    const updatedVotes = [...votes, newVote];
    setVotes(updatedVotes);
    await storage.setItem("votes", JSON.stringify(updatedVotes));
    alert(`You voted YES on: ${proposal.title}`);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial, sans-serif" }}>
      <h1>🌟 Fairly Odd Fellas DAO Playground 🌟</h1>
      {!wallet ? (
        <button
          onClick={connectWallet}
          style={{ padding: "10px 20px", fontSize: 16 }}
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected Wallet: {wallet}</p>
          <h2>Proposals</h2>
          <ul>
            {proposals.map((p) => (
              <li key={p.id} style={{ margin: "10px 0" }}>
                {p.title}{" "}
                <button
                  onClick={() => voteProposal(p)}
                  style={{ marginLeft: 10 }}
                >
                  Vote YES
                </button>
              </li>
            ))}
          </ul>
          <h3>Your Votes</h3>
          <ul>
            {votes.map((v, i) => (
              <li key={i}>
                {v.proposal} - {v.choice}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
