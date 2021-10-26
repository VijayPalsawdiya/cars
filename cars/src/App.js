import './App.css';
import MyProvider from './component/MyProvider';
import ProductList from './component/ProductList';

function App() {
  return (
    <MyProvider>
    <div className="App">
      <header className="App-header">
        <ProductList />
  
      </header>
    </div>
    </MyProvider>
  );
}

export default App;
