import { useState } from 'react';
import './App.css';

function App() {
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedStock, setSelectedStock] = useState("");

  const data = {
    models: [
      { id: 1, name: "Model A" },
      { id: 2, name: "Model B" },
      { id: 3, name: "Model C" }
    ],
    stocks: [
      { symbol: "AAPL", name: "Apple Inc." },
      { symbol: "GOOGL", name: "Alphabet Inc." },
      { symbol: "MSFT", name: "Microsoft Corp." }
    ]
  };

  function Dropdown({ items, selected, onSelect, placeholder }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)}>
          {selected || placeholder}
        </button>
        
        {isOpen && (
          <div className="dropdown-menu">
            {items.map((item) => (
              <div
                key={item.id || item.symbol}
                onClick={() => {
                  onSelect(item);
                  setIsOpen(false);
                }}
                className="dropdown-item"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <Dropdown
        items={data.models}
        selected={selectedModel}
        onSelect={(model) => setSelectedModel(model.name)}
        placeholder="Select Model"
      />
      
      <Dropdown
        items={data.stocks}
        selected={selectedStock}
        onSelect={(stock) => setSelectedStock(stock.name)}
        placeholder="Select Stock"
      />
    </div>
  );
}

export default App;