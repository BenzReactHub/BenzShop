import Navbar from "./Navbar.js";
import CartContainer from "./components/CartContainer.js";
import { AppProvider } from "./contexts/context.js";

function App() {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>
  );
}

export default App;
