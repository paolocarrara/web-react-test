import React from 'react';
import './App.css';
import SummaryCard from "./components/summary-card/SummaryCard";

function App() {
  return (
    <div className="App">
      <SummaryCard
          total={3200876}
          profitability={2.76789}
          gain={1833.23}
          cdi={3.45678}
      />
    </div>
  );
}

export default App;
