
require("dotenv").config();

const readline = require("readline");
const { searchAgent } = require("./agent");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function startAgent() {
  console.log("🔍 Web Search Agent");
  console.log("Type your question or 'exit' to quit.\n");

  while (true) {
    const question = await new Promise((resolve) => {
      rl.question("You: ", resolve);
    });

    if (question.trim().toLowerCase() === "exit") {
      console.log("Agent stopped.");
      rl.close();
      break;
    }

    if (!question.trim()) {
      continue;
    }

    try {
      console.log("\nSearching...\n");

      const answer = await searchAgent(question);

      console.log("Agent:", answer, "\n");
    } catch (error) {
      console.error("Error:", error.message, "\n");
    }
  }
}

startAgent();
