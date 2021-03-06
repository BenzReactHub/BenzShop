import Navbar from "./Navbar.js";
import CartContainer from "./components/CartContainer.js";
import { useGlobalContext } from "./contexts/context.js";

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App;
