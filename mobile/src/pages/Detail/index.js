import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import * as MailCompose from 'expo-mail-composer';

import LogoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá AGQE, estou entrando em contato pois gostaria de ajudar no caso "caso1" com o valor de R$120';

    function navigateBack(){
        navigation.goBack();
    }

    function sedMail(){
        MailCompose.composeAsync({
            subject: 'Herói do caso: caso1',
            recipients: ['luisfelipecaruzo@gmail.com'],
            body: message,
        })
    }

    function sedWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=5519999610009&text=${message}`);
    }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG: </Text>
        <Text style={styles.incidentValue}>AGQE</Text>

        <Text style={styles.incidentProperty}>Caso: </Text>
        <Text style={styles.incidentValue}>
          Preciso comprar urgente um jogo
        </Text>

        <Text style={styles.incidentProperty}>Valor: </Text>
        <Text style={styles.incidentValue}>R$ 120</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato</Text>

        <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sedWhatsapp}>
                <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sedMail}>
                <Text style={styles.actionText}>Email</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
