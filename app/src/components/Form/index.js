import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import ResultImc from "../Form/ResultImc";
import { useState } from "react";
import styles from "./style";
export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [messageResult, setMessageResult] = useState("");
  const [imc, setImc] = useState(0);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    let heightFormatted = height.replace(",", ".");
    let weightFormatted = weight.replace(",", ".");

    let result = (
      weightFormatted /
      (heightFormatted * heightFormatted)
    ).toFixed(2);
    if (result < 18.5) {
      setMessageResult("Abaixo do peso");
    } else if (result >= 18.5 && result < 24.9) {
      setMessageResult("Peso normal");
    } else if (result >= 24.9 && result < 29.9) {
      setMessageResult("Sobrepeso");
    } else if (result >= 29.9 && result < 34.9) {
      setMessageResult("Obesidade Grau 1");
    } else if (result >= 34.9 && result < 39.9) {
      setMessageResult("Obesidade Grau 2");
    } else if (result >= 40) {
      setMessageResult("Obesidade Grau 3");
    } else {
      setMessageResult("Valor inválido");
    }

    return setImc(result);
  }
  function validationImc() {
    if (weight !== null && height !== null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc(`Seu IMC é:`);
      setTextButton("Calcular Novamente");
      Keyboard.dismiss();
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
    setMessageResult("");
    Keyboard.dismiss();
  }
  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 1.75"
          keyboardType="decimal-pad"
          onChangeText={setHeight}
          value={height}
        ></TextInput>
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 75.34"
          keyboardType="decimal-pad"
          onChangeText={setWeight}
          value={weight}
        ></TextInput>
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc
        messageResultImc={messageImc}
        imc={imc}
        messageResult={messageResult}
      />
    </View>
  );
}
