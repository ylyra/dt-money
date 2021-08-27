import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date().getTime(),
        },
        {
          title: "Aluguel",
          type: "withdraw",
          category: "Dev",
          amount: 1100,
          createdAt: new Date("2021-02-14 11:00:00").getTime(),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions");

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
