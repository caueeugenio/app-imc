import { StyleSheet, View } from 'react-native';
import Title from './app/src/components/Title';
import Form from 'app/src/components/Form';
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 135, 62)',
    paddingTop: 80
  },
});
