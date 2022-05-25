/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text,
    Pressable,
    Linking,
} from 'react-native';


const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/89035572?v=4';
const colorFontGithub = '#c9d1d9';
const colorDarkFontGithub = '#4f565e';
const urlToMyGithub = 'https://github.com/MMagno16';

const App = () => {
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
            console.log('Link aprovado');
            console.log('Abrindo link....');
            await Linking.openURL(urlToMyGithub);
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel="Marianna na sala com fundo amarelo e branco"
                    style={style.avatar}
                    source={{ uri: imageProfileGithub }}
                />
                <Text
                    accessibilityLabel="Nome: marianna magno"
                    style={[style.defaultText, style.name]}>Marianna Magno
                </Text>
                <Text
                    accessibilityLabel="Nickname: marianna magno"
                    style={[style.defaultText, style.nickname]}>MMagno16
                </Text>
                <Text
                    accessibilityLabel="Descrição: Estudante Dev Full Stack | Estágio | JAVASCRIPT, HTML, CSS"
                    style={[style.defaultText, style.description]}>
                    Estudante Dev Full Stack | Estágio | JAVASCRIPT, HTML, CSS
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
  container: {
    // Column
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
