import { Input, Spacer } from "@mono/components";

function App() {
  return (
    <>
      <header className="container">
        <h1 align="center">Mono</h1>
      </header>
      <div className="container flex flex-center">
        <div>
          <Input placeholder="Password Input" />
          <Spacer y={16} x={8} />
          <Input placeholder="Text Input" />
        </div>
      </div>
    </>
  );
}

export default App;
