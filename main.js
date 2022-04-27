import "./style.css";
import * as HyphenWidget from "@biconomy/hyphen-widget/dist";

console.log(HyphenWidget)

const wid = HyphenWidget.default.init(document.getElementById("widget"), {
  test: true, // if you're using testnet, it's required
  apiKeys: {
    // required
    Fuji: "your.biconomy.api.key",
    Goerli: "your.biconomy.api.key",
    Mumbai: "your.biconomy.api.key",
    Rinkeby: "your.biconomy.api.key",
  },
  rpcUrls: {
    // required
    Goerli: "https://your.eth.api.endpoint",
    Mumbai: "https://your.eth.api.endpoint",
    Rinkeby: "https://your.eth.api.endpoint",
  },
  // optional
  lockSourceChain: true,
  lockDestinationChain: true,
  lockToken: true,
  lockAmount: true,
  defaultDestinationChain: "Mumbai",
  defaultSourceChain: "Goerli",
  defaultToken: "ETH",
  defaultAmount: "0.01",
  defaultReceiver: "0x000000000000000000000000000000000000dEaD",
  // NOTE: following 2 callback emit when tx is *sent*, you should check the status by yourself
  onDeposit: (e) => console.log("Deposit " + e), // emit when depost tx is sent
  onExit: (e) => console.log("Exit " + e), // emit when exit tx (receiver will receive tokens) is sent
  /*
      input: {
          sourceChain?: string;
          destinationChain?: string;
          token?: string;
          amount?: string;
          receiver?: string;
          gasless: boolean;
      }
     */
  onChange: (input) => console.log("Input " + JSON.stringify(input)),
});
