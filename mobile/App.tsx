import 'react-native-gesture-handler';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import { useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        style="auto"
        />
      <Widget/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
