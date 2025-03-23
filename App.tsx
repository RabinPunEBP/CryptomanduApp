import React from 'react';
import TabsRouter from './src/routers/TabsRouter';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <TabsRouter />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
