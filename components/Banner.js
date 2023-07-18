import { Text, View, StyleSheet, Image } from 'react-native';

export default function Banner() {
  return (
    <View>
        
       <Image style= {editar.imageBanner} source={{ uri: 'https://images.tcdn.com.br/img/img_prod/882922/1649853724_banner-mini-ex4-cubo-prof-01.jpg'}} />
      </View>
  );
}



const editar = StyleSheet.create({

imageBanner: {
width: '100%',
height: '100%',


}
  

});