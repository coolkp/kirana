import React, {Component} from 'react';
import {
  View,
  Text,
  Linking,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import DialogInput from 'react-native-dialog-input';
import {
  Paper as PaperProvider,
  TextInput,
  Appbar,
  Divider,
  Surface,
  Button,
  Title,
} from 'react-native-paper';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
 
import styles from './styles/styles';
import states_city from './state';
// create a component
class ProfileScreen extends Component {
  state = {
    pw: '',
    pw_cnf: '',
    isDialogVisible: false,
  };
  static navigationOptions = {
    title: "Profile Page",
    headerBackTitle: 'Back',
  };
  render() {
    console.log(states_city);
    let state_names = states_city;
    let data = [
      {
        value: 'Banana',
      },
      {
        value: 'Mango',
      },
      {
        value: 'Pear',
      },
    ];
    return (
      <ImageBackground
        source={require('./images/bluebg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Edit Profile </Text>
          <View style={styles.loginContainer}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('./images/k.png')}
            />
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer_nmg}>
              <OutlinedTextField
                label="Store Name"
                value={this.props.storename}
                keyboardType="text"
                inputContainerStyle={{fontSize: 13}}
                onChangeText={store => {
                  this.props.setPhone(store);
                }}
              />
            </View>
            <View style={styles.inputContainer_nmg}>
              <OutlinedTextField
                label="Phone number"
                value={this.props.phone}
                keyboardType="phone-pad"
                inputContainerStyle={{fontSize: 13}}
                onChangeText={phone => {
                  this.props.setPhone(phone);
                }}
              />
            </View>
            <View style={styles.inputContainer_nmg}>
              <OutlinedTextField
                label="Set New Password"
                containerStyle={{marginTop: 0}}
                value={this.state.pw}
                inputContainerStyle={{fontSize: 13}}
                secureTextEntry
                onChangeText={pw => {
                  this.setState({pw});
                }}
              />
            </View>
            <View style={styles.inputContainer_nmg}>
              <OutlinedTextField
                label="Confirm New Password"
                value={this.state.pw_cnf}
                inputContainerStyle={{fontSize: 13}}
                secureTextEntry
                onChangeText={pw_cnf => {
                  this.setState({pw_cnf});
                }}
              />
            </View>
          </View>
          <View style={styles.inputContainer_nmg}>
            <Dropdown
              dropdownOffset={{
                top: 8,
                left: 0,
              }}
              data={data}
              label="Select State"
            />
          </View>
          <View style={styles.inputContainer_nmg}>
            <Dropdown
              dropdownOffset={{
                top: 8,
                left: 0,
              }}
              data={data}
              label="Select City"
            />
          </View>

          <Divider />
          <View style={styles.buttonContainer}>
            <Button
              style={styles.loginButton}
              icon="pen"
              mode="contained"
              onPress={() => {
                this.setState({isDialogVisible: true});
              }}>
              Update Profile
            </Button>
          </View>
          <DialogInput
            isDialogVisible={this.state.isDialogVisible}
            title={'Verify New Phone Number'}
            message={
              'An OTP has been sen to the Number +1 234 XXX XXX. Please enter it below to verify the number.'
            }
            hintInput={'_ _ _ _ _ _'}
            submitInput={console.log('Dialog Input Submitted')}
            closeDialog={() => {
              this.setState({isDialogVisible: false});
            }}></DialogInput>
        </View>
      </ImageBackground>
    );
  }
}


export default ProfileScreen;
