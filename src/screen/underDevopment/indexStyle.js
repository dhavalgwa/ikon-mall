import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    contenair: {
        backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", height: "90%"
    },
    textView: {
        display: "flex", justifyContent: "center", alignItems: "center", height: "15%"
    },
    text: {
        fontWeight: "bold", fontSize: 18, width: "95%", marginLeft: 10, color: "gray"

    }, ImageView: {
        width: "95%", marginLeft: 10, display: "flex", justifyContent: 'center', alignItems: "center", backgroundColor: "white", height: "85%"

    }, image: {
        height: 350, width: "100%"
    }
})

export default Styles;
