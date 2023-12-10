import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setshowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setshowAlert(!showAlert)}>My alert</Alert>
      )}
      <Button color="success" onClick={() => setshowAlert(!showAlert)}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
