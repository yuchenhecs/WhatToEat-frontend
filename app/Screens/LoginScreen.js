/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    Image,
    Alert,
    TextInput,
    Keyboard
} from 'react-native';
import {
    Button,
    Input,
    InputGroup,
    Icon,
    Spinner,
    View,
    Item,
    Form,
    Label
} from 'native-base';

var axios = require('axios');

export default class LoginScreen extends Component<{}> {
    static navigationOptions = {
        title: 'Login',
    };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pass: '',
            conPass: ''
        }
    }
    updateEmail(email) {this.setState({email})}
    updatePassword(pass) {this.setState({pass})}
    updateConPassword(conPass) {this.setState({conPass})}

    handleSignUp() {
        email = this.state.email;
        pass = this.state.pass;
        conPass = this.state.conPass;

        const { navigate } = this.props.navigation;
        navigate('Main')
        // axios.get('').then(function (response_1) {
        //
        // }.bind(this)).catch(function (error_1) {
        //
        // });
    }

    handleSignIn() {
        email = this.state.email;
        pass = this.state.pass;
        const { navigate } = this.props.navigation;
        navigate('Main')
        // axios.get('').then(function (response_1) {
        //
        // }.bind(this)).catch(function (error_1) {
        //
        // });
    }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.logo_container}>
                    <Image
                        style={styles.image}
                        source={require('../../images/login_background.jpg')}
                        resizeMode= 'stretch'
                    />
                    <View style={styles.title_container}>
                        <Text>What To Eat</Text>
                    </View>
                </View>
                <View style={styles.info_container}>
                    <Form style={styles.form}>
                        <Item floatingLabel >
                            <Label style={{fontSize: 15, color:'grey'}}>{'Email'}</Label>
                            <Input onEndEditing={Keyboard.dismiss} keyboardType="email-address" onChangeText={(email) => { this.updateEmail(email)}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label style={{fontSize: 15, color:'grey'}}>{'Password'}</Label>
                            <Input secureTextEntry={true} onChangeText={(pass) => { this.updatePassword(pass)}}/>
                        </Item>
                        <Item floatingLabel>
                            <Label style={{fontSize: 15, color:'grey'}}>{'Confirm Password'}</Label>
                            <Input secureTextEntry={true} onChangeText={(conpass) => { this.updateConPassword(conpass)}}/>
                        </Item>
                    </Form>
                    <View style={styles.buttons_container}>
                        <Button block style={[styles.button, styles.button_left]} onPress={this.handleSignUp.bind(this)}><Text style={{color: 'grey'}}>SIGN UP</Text></Button>
                        <Button block style={[styles.button, styles.button_right]} onPress={this.handleSignIn.bind(this)}><Text style={{color: 'white'}}>SIGN IN</Text></Button>
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor:'white',
    },
    logo_container: {
        flex: 3,
    },
    title_container: {
        position: 'absolute',
        top: 30,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center'
    },
    info_container: {
        flex: 5,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        marginBottom:20,

    },
    form: {
        width:"85%",
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
    },
    image: {
        flex: 1,
        height: 'auto',
        width: '100%',

    },
    label: {
        fontSize: 12,
        color:'grey'
    },
    buttons_container:{
        marginTop:50,
        marginLeft:35,
        marginRight:35,
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '48%',
        height: 40,
        borderRadius:8,
    },
    button_left: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
    },
    button_right: {
        backgroundColor: 'black'
    }
});
