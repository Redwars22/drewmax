import "./styles/layout.module.scss";
import "./styles/elements.module.scss";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { PlayerContextProvider } from "./modules/PlayerContext";
import NavigationComponent from "./routes/routes";
import { UserContextProvider } from "./modules/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserContextProvider value={null}>
          <PlayerContextProvider value={null}>
            <ToastContainer
              theme={"dark"}
              position={"bottom-right"}
              style={{ zIndex: 10000000 }}
            />
            <NavigationComponent />
          </PlayerContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
