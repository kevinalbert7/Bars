import Map from './components/Map';

import { MapContextProvider } from './contexts/Map';


const App = () => {
  return (
    <div>
      <MapContextProvider>
      <Map/>
      </MapContextProvider>

    </div>
  );
}

export default App;
