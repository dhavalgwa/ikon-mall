import { StyleSheet } from 'react-native';
import { Color } from '../../../constant/Constant';

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Card: {
    marginTop: 15,
    marginLeft: 8,
    backgroundColor: '#FFFFFF',
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    borderRadius: 9,
  },
  CardView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  CardView1: {
    marginTop: 8,
    marginLeft: 15,
  },
  name: {
    marginTop: 5,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  time: {
    marginTop: 7,
    marginBottom: 15,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'grey',
  },
  icon: {
    marginTop: 19,
    marginRight: 15,
  },
  image: {
    height: 100,
    width: 150,
  },
  imageView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F9F9F6',
  },
  imageView1: { marginTop: 7, marginBottom: 15 },
  image2: {
    height: 100,
    width: 150,
  },
  info: {
    marginTop: 7,
    marginBottom: 15,
    width: '55%',
    marginLeft: 10,
  },
  infoText: {
    fontWeight: '500',
    fontSize: 17,
    color: 'black',
  },
  icon2: {
    marginTop: 19,
    marginRight: 25,
  },
  button: {
    width: '100%',
    height: '45%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonTouch: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DD2339',
    height: '20%',
    width: '35%',
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
  },
  informationView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#CCF7F4"
  },
  notificationINdecator: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageNotification: {
    height: 130,
    width: 140,
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 10
  },
  notificationTextView: {
    alignItems: 'center',
    width: '50%',
    padding: 10
  },
  notificationText: {
    fontSize: 17
  },
  indecationView: {
    backgroundColor: "#4272BC",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  infoText: {
    width: '50%'
  },
  buttonView: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute'
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6DFF',
    height: '7%',
    width: '35%',
    borderRadius: 25,
    marginBottom: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
})

export default Styles
