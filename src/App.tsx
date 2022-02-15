import { Layout } from './components/Layout';
import { LayoutProvider } from './components/Layout/LayoutProvider';

function App() {
  return (
    <LayoutProvider>
      <Layout/>
    </LayoutProvider>
  );
}

export default App;
