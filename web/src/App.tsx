import { Widget } from "./components/Widget";
import AppProvider from "./context";

export function App() {
  return (
    <AppProvider>
      <Widget/>
    </AppProvider>
  )
}
