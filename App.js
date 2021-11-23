import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Linking, ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {  NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function HomeScreen({navigation}){
  return (
    <View>
      <ScrollView>
      <ImageBackground source = {require('./assets/homeassets/bg.jpg')} resizeMode='cover'>
      <Image style={styles.logo} source={require('./assets/Logo/logotrans.png')} />
      <View style ={styles.container}>          
      <Image Id="dev" style={styles.imageSize} source={require('./assets/homeassets/shop.png')} />
      
       <Text style={styles.textDesign}>All the shops you want in one App</Text>
      
      <Image style={styles.imageSize} source={require('./assets/homeassets/needs.png')} />
      
      <Text style={styles.textDesign}>You can get all your needs and wants</Text>
    
      <Image style={styles.imageSize} source={require('./assets/homeassets/antipandemic.png')} />
      
      <Text style={styles.textDesign}>Shop in your home free from the fear of the Pandemic</Text>
    
       </View>
      <Button
        onPress={() => navigation.navigate('Whats Hot')}
        title="What's Hot"
      />
      <Button
        onPress={() => navigation.navigate('Clothes')}
        title="Clothes"
      />
       <Button
        onPress={() => navigation.navigate('Gadgets')}
        title="Gadgets"
      />
       <Button
        onPress={() => navigation.navigate('Appliances and Furnitures')}
        title="Appliances and Furnitures"
      />
       <Button
        onPress={() => navigation.navigate('Games')}
        title="Games"
      />
       <Button
        onPress={() => navigation.navigate('Education')}
        title="Education"
      />
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

function HotScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
      <ImageBackground source = {require('./assets/whassets/bg.jpg')} resizeMode='cover'>
      <Image style={styles.logo} source={require('./assets/whassets/wh.png')} />

      <View style = {styles.cont2}>

      <View style={{width:'100%'}}>
      <ImageBackground source = {require('./assets/Backgrounds/clothes.jpg')} resizeMode='cover'>
      <Text style={styles.bannerText}>CLOTHES</Text>
      </ImageBackground>
      </View>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.uniqlo.com/ph/en/products/E441600-000?colorCode=COL00') }>
      <Text style={styles.textDesign}>HOT! U CREW NECK SHORT SLEEVE T-SHIRT</Text>
      <Image Id="i1" style={styles.imageSize} source={require('./assets/whassets/u2.png')} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nike.com/ph/t/air-zoom-pegasus-38-road-running-shoes-Hmsj6Q/CW7356-006') }>
      <Text style={styles.textDesign}>HOT! Nike Air Zoom Pegasus 38 Men's Road Running Shoes</Text>
      <Image Id="i4" style={styles.imageSize} source={require('./assets/whassets/n1.jpg')} />
      </TouchableOpacity>

      <View style={{width:'100%'}}>
      <ImageBackground source = {require('./assets/Backgrounds/gadget.png')} resizeMode='cover'>
      <Text style={styles.bannerText}>GADGETS</Text>
      </ImageBackground>
      </View>

      <TouchableOpacity style={styles.linkSize} onPress={ ()=> Linking.openURL('https://www.samsung.com/ph/smartphones/galaxy-z-fold3-5g/buy/') }>
      <Text style={styles.textDesign}>HOT! GALAXY Z FOLD3 5G</Text>
      <Image Id="i1" style={styles.imageSize} source={require('./assets/whassets/g1.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkSize} onPress={ ()=> Linking.openURL('https://www.msi.com/Laptop/GS76-Stealth-11UX') }>
      <Text style={styles.textDesign}>HOT! MSI GS76 STEALTH</Text>
      <Image Id="i2" style={{ alignSelf: 'center',
                              width:'69%',
                              height:200,
                              marginBottom: 15,
                              marginTop: 10,
                              borderWidth: 5,
                              borderColor: '#A9A9A9',
                              backgroundColor:'#FFFFFF'}} source={require('./assets/whassets/g2.png')} />
      </TouchableOpacity>

      <View style={{width:'100%'}}>
      <ImageBackground source = {require('./assets/Backgrounds/appliance.jpg')} resizeMode='cover'>
      <Text style={styles.bannerText}>APPLIANCE AND FURNITURE</Text>
      </ImageBackground>
      </View>
      
      <TouchableOpacity style={styles.linkSize} onPress={ ()=> Linking.openURL('https://www.panasonic.com/ph/consumer/home-entertainment/televisions/th-65jz1000s.html') }>
      <Text style={styles.textDesign}>HOT! OLED TV TH-65JZ1000S</Text>
      <Image Id="i1" style={styles.imageSize} source={require('./assets/whassets/a1.png')} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.linkSize} onPress={ ()=> Linking.openURL('https://www.lg.com/ph/residential-air-conditioners/lg-la080fc') }>
      <Text style={styles.textDesign}>HOT! 0.75HP Window Type Air-Conditioner</Text>
      <Image Id="i4" style={styles.imageSize} source={require('./assets/whassets/a2.png')} />
      </TouchableOpacity>

      <View style={{width:'100%'}}>
      <ImageBackground source = {require('./assets/Backgrounds/games.jpg')} resizeMode='cover'>
      <Text style={styles.bannerText}>GAMES</Text>
      </ImageBackground>
      </View>

      <TouchableOpacity style={styles.linkSize} onPress={ ()=> Linking.openURL('https://www.nintendo.com/games/detail/shin-megami-tensei-v-switch/') }>
      <Text style={styles.textDesign}>HOT! SHIN MEGAMI TENSEI V</Text>
      <Image Id="i3" style={styles.imageSize} source={require('./assets/whassets/gm1.jpg')} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.linkSize} onPress={ ()=> Linking.openURL('https://www.playstation.com/en-ph/games/tales-of-arise/') }>
      <Text style={styles.textDesign}>HOT! TALES OF ARISE</Text>
      <Image Id="i4" style={styles.imageSize} source={require('./assets/whassets/gm2.jpg')} />
      </TouchableOpacity>
      </View>
      
      <Button
        onPress={() => navigation.navigate('Digital Bazaar')}
        title="Digital Bazaar"
      />
      <Button
        onPress={() => navigation.navigate('Clothes')}
        title="Clothes"
      />
       <Button
        onPress={() => navigation.navigate('Gadgets')}
        title="Gadgets"
      />
       <Button
        onPress={() => navigation.navigate('Appliances and Furnitures')}
        title="Appliances and Furnitures"
      />
       <Button
        onPress={() => navigation.navigate('Games')}
        title="Games"
      />
       <Button
        onPress={() => navigation.navigate('Education')}
        title="Education"
      />
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

function CScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
      <ImageBackground source = {require('./assets/Backgrounds/clothes.jpg')} resizeMode='cover'>
      <Image style={styles.logo} source={require('./assets/ShopAssets/clogo.png')} />
      <View style={styles.cont2}>
      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nike.com') }>
      <Text style={styles.bannerText}>NIKE</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i1" style={styles.imageSize2} source={require('./assets/clo/nike.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nike.com/ph/w/sale-3yaep')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.uniqlo.com/ph/en') }>
      <Text style={styles.bannerText}>UNIQLO</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i2" style={styles.imageSize2} source={require('./assets/clo/uni.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.uniqlo.com/ph/en/feature/sale/women')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.penshoppe.com') }>
      <Text style={styles.bannerText}>PENSHOPPE</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i3" style={styles.imageSize2} source={require('./assets/clo/pen.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.penshoppe.com/collections/sale')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      </View>
      <Button
        onPress={() => navigation.navigate('Digital Bazaar')}
        title="Digital Bazaar"
      />
      <Button
        onPress={() => navigation.navigate('Whats Hot')}
        title="What's Hot"
      />
       <Button
        onPress={() => navigation.navigate('Gadgets')}
        title="Gadgets"
      />
       <Button
        onPress={() => navigation.navigate('Appliances and Furnitures')}
        title="Appliances and Furnitures"
      />
       <Button
        onPress={() => navigation.navigate('Games')}
        title="Games"
      />
       <Button
        onPress={() => navigation.navigate('Education')}
        title="Education"
      />
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

function GScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
      <ImageBackground source = {require('./assets/Backgrounds/gadget.png')} resizeMode='cover'>
      <Image style={styles.logo} source={require('./assets/ShopAssets/gadlogo.png')} />
      <View style={styles.cont2}>
      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.samsung.com/ph') }>
      <Text style={styles.bannerText}>SAMSUNG</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i1" style={styles.imageSize3} source={require('./assets/gadg/sam.png')} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.samsung.com/ph/offer/')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://ph.msi.com/') }>
      <Text style={styles.bannerText}>MSI</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i2" style={styles.imageSize3} source={require('./assets/gadg/msi.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://ph.msi.com/Promotions/all/current')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.apple.com/ph') }>
      <Text style={styles.bannerText}>APPLE</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i3" style={styles.imageSize2} source={require('./assets/gadg/app.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.apple.com/ph/shop/gifts')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      </View>
      <Button
        onPress={() => navigation.navigate('Digital Bazaar')}
        title="Digital Bazaar"
      />
      <Button
        onPress={() => navigation.navigate('Whats Hot')}
        title="What's Hot"
      />
      <Button
        onPress={() => navigation.navigate('Clothes')}
        title="Clothes"
      />
       <Button
        onPress={() => navigation.navigate('Appliances and Furnitures')}
        title="Appliances and Furnitures"
      />
       <Button
        onPress={() => navigation.navigate('Games')}
        title="Games"
      />
       <Button
        onPress={() => navigation.navigate('Education')}
        title="Education"
      />
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

function AScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
      <ImageBackground source = {require('./assets/Backgrounds/appliance.jpg')} resizeMode='cover'>
      <Image style={styles.logo} source={require('./assets/ShopAssets/alogo.png')} />
      <View style={styles.cont2}>
      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.lg.com/ph') }>
      <Text style={styles.bannerText}>LG</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i1" style={styles.imageSize3} source={require('./assets/appliance/lg.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.lg.com/ph/promotions')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.ikea.com/ph/en/?ref=gwp-start') }>
      <Text style={styles.bannerText}>IKEA</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i2" style={styles.imageSize3} source={require('./assets/appliance/ikea.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.ikea.com/ph/en/campaigns/')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={ ()=> Linking.openURL('https://www.panasonic.com/ph/') }>
      <Text style={styles.bannerText}>PANASONIC</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i3" style={styles.imageSize3}
                              source={require('./assets/appliance/panasonic.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.lazada.com.ph/shop-home-appliances/panasonic/')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      </View>
      <Button
        onPress={() => navigation.navigate('Digital Bazaar')}
        title="Digital Bazaar"
      />
      <Button
        onPress={() => navigation.navigate('Whats Hot')}
        title="What's Hot"
      />
      <Button
        onPress={() => navigation.navigate('Clothes')}
        title="Clothes"
      />
       <Button
        onPress={() => navigation.navigate('Gadgets')}
        title="Gadgets"
      />
       <Button
        onPress={() => navigation.navigate('Games')}
        title="Games"
      />
       <Button
        onPress={() => navigation.navigate('Education')}
        title="Education"
      />
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

function GameScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
      <ImageBackground source = {require('./assets/Backgrounds/games.jpg')} resizeMode='cover'>
      <Image style={styles.logo} source={require('./assets/ShopAssets/gamlogo.png')} />
      <View style={styles.cont2}>
      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.playstation.com/en-ph/') }>
      <Text style={styles.bannerText}>PLAYSTATION</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i1" style={styles.imageSize2} source={require('./assets/game/ps.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.playstation.com/en-ph/deals/black-friday/')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nintendo.com/') }>
      <Text style={styles.bannerText}>NINTENDO</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i2" style={styles.imageSize3} source={require('./assets/game/nin.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nintendo.com/games/sales-and-deals/')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.xbox.com/en-US/en-PH/') }>
      <Text style={styles.bannerText}>XBOX</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i3" style={styles.imageSize2} source={require('./assets/game/xbox.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.xbox.com/en-US/promotions/sales/sales-and-specials')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      </View>
      <Button
        onPress={() => navigation.navigate('Digital Bazaar')}
        title="Digital Bazaar"
      />
      <Button
        onPress={() => navigation.navigate('Whats Hot')}
        title="What's Hot"
      />
      <Button
        onPress={() => navigation.navigate('Clothes')}
        title="Clothes"
      />
       <Button
        onPress={() => navigation.navigate('Gadgets')}
        title="Gadgets"
      />
       <Button
        onPress={() => navigation.navigate('Appliances and Furnitures')}
        title="Appliances and Furnitures"
      />
       <Button
        onPress={() => navigation.navigate('Education')}
        title="Education"
      />
      </ImageBackground>
      </ScrollView>
    </View>
  );
}

function EScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
      <ImageBackground source = {require('./assets/Backgrounds/educ.jpg')} resizeMode='cover'>
      <Image style={styles.logo} source={require('./assets/ShopAssets/edlogo.png')} />
      <View style={styles.cont2}>
      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.fullybookedonline.com/') }>
      <Text style={styles.bannerText}>FULLY BOOKED</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i1" style={styles.imageSize2} source={require('./assets/ed/fb.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.fullybookedonline.com/blog/post/sale-alert-fully-booked-hauliday-sale.html')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.linkSize} onPress={ ()=> Linking.openURL('https://www.nationalbookstore.com/') }>
      <Text style={styles.bannerText}>NATIONAL BOOK STORE</Text>
      <Text style={styles.textDesign}>Tap the image to go to site</Text>
      <Image Id="i2" style={{ alignSelf: 'center',
                              width:'60%',
                              height:160,
                              marginBottom: 15,
                              marginTop: 10,
                              borderWidth: 5,
                              borderColor: '#A9A9A9',
                              backgroundColor:'#FFFFFF'}} 
                              source={require('./assets/ed/nbs.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.nationalbookstore.com/sale')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.chegg.com/promo/sohp/t1') }>
      <Text style={styles.bannerText}>CHEGG</Text>
      <Text style={styles.textDesign2}>Tap the image to go to site</Text>
      <Image Id="i3" style={styles.imageSize2} source={require('./assets/ed/ch.png')} />
      </TouchableOpacity>

      <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.retailmenot.com/view/chegg.com')}>
        <Text style={styles.textDesign}>Click on this for sale</Text>
      </TouchableOpacity>
      </View>
      <Button
        onPress={() => navigation.navigate('Digital Bazaar')}
        title="Digital Bazaar"
      />
      <Button
        onPress={() => navigation.navigate('Whats Hot')}
        title="What's Hot"
      />
      <Button
        onPress={() => navigation.navigate('Clothes')}
        title="Clothes"
      />
       <Button
        onPress={() => navigation.navigate('Gadgets')}
        title="Gadgets"
      />
       <Button
        onPress={() => navigation.navigate('Appliances and Furnitures')}
        title="Appliances and Furnitures"
      />
       <Button
        onPress={() => navigation.navigate('Games')}
        title="Games"
      />
      </ImageBackground>
      </ScrollView>
    </View>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Digital Bazaar" component={HomeScreen} />
        <Drawer.Screen name="Whats Hot" component={HotScreen} />
        <Drawer.Screen name="Clothes" component={CScreen} />
        <Drawer.Screen name="Gadgets" component={GScreen} />
        <Drawer.Screen name="Appliances and Furnitures" component={AScreen} />
        <Drawer.Screen name="Games" component={GameScreen} />
        <Drawer.Screen name="Education" component={EScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 5
  },

  cont2: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    borderWidth: 5,
    width:'100%'
  },

  textDesign:{
    alignSelf: 'center',
    color: '#008080',
    fontSize:16,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    marginBottom: 25,
    marginTop: 25
  },

  textDesign2:{
    alignSelf: 'baseline',
    color: '#008080',
    fontSize:14,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    marginBottom: 25,
    marginTop: 25
  },

  
  bannerText:{
    alignSelf: 'center',
    color: '#ffffff',
    fontSize:23,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 15,
    marginBottom: 25,
    marginTop: 25
  },

  desc:{
    alignSelf: 'center',
    color: '#30D5C8',
    fontSize:11,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 0.5, height: 0.5 },
    textShadowRadius: 1,
    marginBottom: 25,
    marginTop: 25
  },

  logo:{
    width:"100%",
    height:300,
    marginBottom: 15,
    marginTop: 5
  },
  imageSize:{
    alignSelf:'center',
    width:'69%',
    height:250,
    marginBottom: 25,
    marginTop: 25,
    borderWidth: 5,
    borderColor: '#A9A9A9',
  },
  imageSize2:{
    alignSelf: 'center',
    width:'100%',
    height:200,
    marginBottom: 15,
    marginTop: 10,
    borderWidth: 5,
    borderColor: '#A9A9A9',
    backgroundColor:'#FFFFFF'
  },
  imageSize3:{
    alignSelf: 'center',
    width:'100%',
    height:81,
    marginBottom: 15,
    marginTop: 10,
    borderWidth: 5,
    borderColor: '#A9A9A9',
    backgroundColor:'#FFFFFF'
  },
  image:{
    flex:1
  },
  linkSize:{
    width:400,
    alignSelf:'center'
  }
});