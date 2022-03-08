import react from "react";
import {View, Image} from 'react-native';
import Styles from './indexStyle';

const Splash = () => {
    return(
        <View style={Styles.SplashContainer}>
            <Image style={Styles.image} source={require('../../assets/Images/Splash.png')}/>
        </View>
    )
}

export default Splash;