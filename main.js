import "./style.css";
import * as HyphenWidget from "@biconomy/hyphen-widget/dist";
import "@biconomy/hyphen-widget/dist/index.css";

const wid = HyphenWidget.default.init(document.getElementById("widget"), {
  tag: "something-awesome",
  env: "test",

  // Other options
  // apiKeys: {
  //   // optional for gasless
  //   Ethereum: "Ethereum API Key",
  //   Polygon: "Polygon API Key",
  //   Avalanche: "Avalanche API Key",
  // },
  // rpcUrls: {
  //   // optional
  //   Ethereum: "Ethereum RPC URL",
  //   Polygon: "Polygon RPC URL",
  //   Avalanche: "Avalanche RPC URL",
  // },
  // // NOTE: following 2 callback emit when tx is *sent*, you should check the status by yourself
  // onDeposit: (e) => console.log("Deposit " + e), // emit when depost tx is sent
  // onExit: (e) => console.log("Exit " + e), // emit when exit tx (receiver will receive tokens) is sent
  // /*
  //     input: {
  //         sourceChain?: string;
  //         destinationChain?: string;
  //         token?: string;
  //         amount?: string;
  //         receiver?: string;
  //         gasless: boolean;
  //     }
  // */
  // onChange: (input) => console.log("Input " + JSON.stringify(input)),
});
