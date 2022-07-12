import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

  import AboutScreen from './screens/AboutScreen';
  import CodeScreen from './screens/CodeScreen';
  import HomeScreen from './screens/HomeScreen';
  import NotFoundScreen from './screens/NotFoundScreen';
  import UIScreen from './screens/UIScreen';
  import VisualsScreen from './screens/VisualsScreen';
  
  
const AppRoutes = () => {

return (
    
      <main>
      <Routes>
      <Route path="*" element={<NotFoundScreen />} />  
      <Route path="/" exact element={<HomeScreen />} />
      <Route path="/about" exact element={<AboutScreen />} />
      <Route path="/code" exact element={<CodeScreen />} />
      <Route path="/ui" exact element={<UIScreen />} />
      <Route path="/visuals" exact element={<VisualsScreen />} />
      </Routes>
      </main>
    
)};

export default AppRoutes;