import { MapContextProvider } from './contexts/Map';

import Map from './components/Map';

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
