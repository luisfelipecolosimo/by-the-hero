import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import * as MailCompose from 'expo-mail-composer';

import LogoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
      }).format(incident.value)}`;

    function navigateBack(){
        navigation.goBack();
    }

    function sedMail(){
        MailCompose.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    }

    function sedWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
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
  <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>Caso: </Text>
        <Text style={styles.incidentValue}>
        {incident.title}
        </Text>

        <Text style={styles.incidentProperty}>Valor: </Text>
        <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-Br", {
                style: "currency",
                currency: "BRL",
              }).format(incident.value)}
            </Text>
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
