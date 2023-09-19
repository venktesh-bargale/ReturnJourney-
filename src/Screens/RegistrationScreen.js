import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const {height, width} = Dimensions.get('screen');
const RegistrationScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Easy');

  const handleRegistration = () => {
    // Handle registration logic here
    // You can send this data to an API, store it in local storage, or handle it as needed for your app
    const userData = {
      name,
      email,
      mobile,
      difficulty: selectedDifficulty,
    };
    console.log('User data:', userData);
    navigation.navigate('GameScreen', {difficultyLevel: selectedDifficulty});
  };

  return (
    <View style={styles.Container}>
      <View style={styles.InputBoxView}>
        <TextInput
          placeholder="Name"
          value={name}
          placeholderTextColor={'rgba(148, 102, 168, 1)'}
          style={styles.TextInput}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={'rgba(148, 102, 168, 1)'}
          value={email}
          style={styles.TextInput}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Mobile Number"
          placeholderTextColor={'rgba(148, 102, 168, 1)'}
          value={mobile}
          style={styles.TextInput}
          onChangeText={text => setMobile(text)}
          keyboardType="phone-pad"
        />
        <View style={styles.PickerView}>
          <Picker
            selectedValue={selectedDifficulty}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedDifficulty(itemValue)
            }
            style={{borderRadius: 10, borderWidth: 1}}>
            <Picker.Item label="Easy" value="Easy" style={styles.Heading} />
            <Picker.Item label="Medium" value="Medium" style={styles.Heading} />
            <Picker.Item label="Hard" value="Hard" style={styles.Heading} />
          </Picker>
        </View>
      </View>
      <TouchableOpacity onPress={handleRegistration} style={styles.Touchable}>
        <Text style={styles.NormlaText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  Container: {
    height: height,
    width: width,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  InputBoxView: {
    marginTop: height * 0.1,
    height: height * 0.5,
    width: width,
  },
  TextInput: {
    height: '13%',
    width: '90%',
    backgroundColor: 'rgba(249, 234, 255, 1)',
    alignSelf: 'center',
    borderRadius:100,
    marginBottom: 20,
    color: 'rgba(148, 102, 168, 1)',
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: '700',
  },
  Heading: {
    marginTop: '10%',
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 20,
    fontWeight: '700',
    color: 'rgba(93, 48, 112, 1)',
  },
  Touchable: {
    width: '80%',
    height: '8%',
    backgroundColor: 'rgba(93, 48, 112, 1)',
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  NormlaText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 1)',
  },
  PickerView: {
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'rgba(249, 234, 255, 1)',
    width: '90%',
    alignSelf: 'center',
  },
});
