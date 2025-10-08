import { KeyValueStorage } from "@walletconnect/keyvaluestorage";

export const storage = new KeyValueStorage({ database: "fofs_dao" });

export async function saveVote(vote) {
  let votes = await loadVotes();
  votes.push(vote);
  await storage.setItem("votes", JSON.stringify(votes));
}

export async function loadVotes() {
  const raw = await storage.getItem("votes");
  return raw ? JSON.parse(raw) : [];
}
