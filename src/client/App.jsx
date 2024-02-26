import React from "react";

function App() {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
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

function Footer() {
  return (
    <footer className="bg-gray-800">
      <p className="text-white text-center">
        Copyright &copy; TicketPal <span>2024</span>{" "}
      </p>
    </footer>
  );
}

export default App;
