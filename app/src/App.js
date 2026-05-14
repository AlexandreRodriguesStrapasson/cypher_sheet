import Sheet from './components/Sheet';
import { SheetProvider } from './context/SheetContext';

export default function App() {
  return (
    <SheetProvider>
      <Sheet />
    </SheetProvider>
  );
}
