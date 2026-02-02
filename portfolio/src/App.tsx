import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CustomCursor from './components/CustomCursor'; // Import CustomCursor

function App() {
  return (
    <>
      <MainLayout>
        <HomePage />
      </MainLayout>
      <CustomCursor /> {/* Render CustomCursor globally */}
    </>
  );
}

export default App;