import react from "react";
import {View, Image} from 'react-native';
import Styles from './indexStyle';

const Splash = (props) => {
    setTimeout(() => {
        props.navigation.navigate('BottomTabNavigation');

    }, 3000);

    return(
        <View style={Styles.SplashContainer}>
            <Image style={Styles.image} source={require('../../assets/Images/Splash.png')}/>
        </View>
    )
}

export default Splash;