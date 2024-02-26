import React from "react";

function App() {
  return <Header />;
}

function Header() {
  return (
    <div className="flex justify-around">
      <header>
        <h1 className="font-bold text-xl">TicketPal</h1>
      </header>
      <div>
        <a href="/" className="hover:cursor-pointer">
          Log In
        </a>
      </div>
    </div>
  );
}

export default App;
