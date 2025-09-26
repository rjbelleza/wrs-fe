import AppRouter from "./routes";
import { AuthProvider } from "./context/AuthContext";

const App = () => {

  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
