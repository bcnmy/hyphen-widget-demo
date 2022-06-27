import "./style.css";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

const hyphenWidget = HyphenWidget.default.init(
  document.getElementById("widget"),
  {
    tag: "something-awesome",
    env: "production",
    showWidget: true,
    showCloseButton: true,

    // Other options
    // array of chain ids to specify the possible source chains. Chains not in this list will be excluded.
    // allowedSourceChains: [5, 80001, 43113],
    // array of chain ids to specify the possible destination chains. Chains not in this list will be excluded.
    // allowedDestinationChains: [5, 80001],
    // array of token symbols to specify the possible tokens. Tokens not in this list will be excluded.
    // allowedTokens: ["USDC", "ETH"],
    // chain id to specify the default source chain which should be selected.
    // defaultSourceChain: 80001,
    // chain id to specify the default destination chain which should be selected.
    // defaultDestinationChain: 5,
    // token symbol to specify the default token which should be selected.
    // defaultToken: "ETH",
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
  }
);

const openWidgetBtn = document.getElementById("open-widget");
openWidgetBtn.addEventListener("click", () => {
  hyphenWidget.open();
});

const closeWidgetBtn = document.getElementById("close-widget");
closeWidgetBtn.addEventListener("click", () => {
  hyphenWidget.close();
});
