import explorer from "./data/folderData";
import Folder from "./components/Folder";
import { useEffect, useState } from "react";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  useEffect(() => {
    setExplorerData(explorer);
  }, []);

  return (
    <div className="App">
      <Folder explorer={explorerData} />
    </div>
  );
}

export default App;
