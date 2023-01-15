import "./styles.css";
import { useState, useReducer, useRef, useEffect } from "react";

// A single Txn object structure:
// {
// 	id: integer
// 	txnClassificationStatus: (PS, DE, ND),
// 	txnUserStatus: (Normal, CPA, Later),
// 	category: String,
// 	amount: float,
// 	lastModifier: (Algo, Reviewer, End User),
// }

export default function App() {
  const [id, setID] = useState("");
  const [value, setValue] = useState("");
  const [componentName, setComponentName] = useState("");
  const [transactionData, setTransactionData] = useState([
    {
      id: "1111",
      txnClassificationStatus: "PS",
      txnUserStatus: "Later",
      category: String,
      amount: "2000",
      lastModifier: "Reviewer"
    },
    {
      id: "2222",
      txnClassificationStatus: "DE",
      txnUserStatus: "Normal",
      category: String,
      amount: "1000",
      lastModifier: "End User"
    },
    {
      id: "3333",
      txnClassificationStatus: "ND",
      txnUserStatus: "CPA",
      category: String,
      amount: "10000",
      lastModifier: ""
    },
    {
      id: "4444",
      txnClassificationStatus: "PS",
      txnUserStatus: "Normal",
      category: String,
      amount: "10000",
      lastModifier: "Reviewer"
    }
  ]);
  const transactionReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_TRANSACTION":
        return state.map((component, index) => {
          if (component.id === action.payload.id) {
            const componentType = action.payload.name;
            const updateComponent = {
              ...component,
              [componentType]: action.payload.data
            };
            return updateComponent;
          }
          return component;
        });
      default:
        console.log("error", state);
      //throw new Error();
    }
  };
  const [stateT, dispatchList] = useReducer(
    transactionReducer,
    transactionData
  );
  const dispatchValues = {
    type: "UPDATE_TRANSACTION",
    payload: {
      id: id,
      data: value,
      name: componentName
    }
  };
  const onsubmitButton = () => {
    dispatchList(dispatchValues);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", rowGap: "40px" }}
    >
      {stateT.map((component, index) => {
        return (
          <div key={index}>
            ID {component.id} &nbsp;|| &nbsp;Status{" "}
            {component.txnClassificationStatus} || {component.amount} ||{" "}
            {component.category} || UserStatus {component.txnUserStatus} ||
            Modifier {component.lastModifier}
          </div>
        );
      })}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ width: "10rem", height: "2rem" }}
          onChange={(e) => {
            setID(e.target.value);
          }}
        >
          Id <input />
        </div>

        <div
          style={{ width: "10rem", height: "2rem" }}
          onChange={(e) => {
            setComponentName(e.target.value);
          }}
        >
          componentName <input />
        </div>
        <div
          onChange={(e) => {
            setValue(e.target.value);
          }}
          style={{ width: "10rem", height: "2rem" }}
        >
          Value <input />
        </div>
        <div style={{ width: "10rem" }}>
          <button onClick={() => onsubmitButton()}>Submit</button>
        </div>
      </div>
      <div>
        {" "}
        EXAMPLE:- Id => 1111,componentName=> txnClassificationStatus, Value=> PS{" "}
      </div>
    </div>
  );
}
