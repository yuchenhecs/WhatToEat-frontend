import React, { Component, PureComponent } from 'react';
import { Image, StatusBar, StyleSheet, PermissionsAndroid } from 'react-native';
import { Container, Header, Left, Right, Content, Footer, FooterTab, List, ListItem, Text, Root, View, CardItem, Body, Button, Icon, Title } from 'native-base';
import MapView from 'react-native-maps';
import DetailButtonGroup from '../Components/DetailButtonGroup'
import DetailContent from '../Components/DetailContent'
import colors from '../theme/color'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F8F7F7',
        height: 80,
        borderBottomColor: colors.lightergrey,
    },
    icon: {
        marginTop: 10,
        fontSize: 25
    },
    headerBody: {
        marginTop: 15,
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});

const selectedCard = {
    "_id": {
        "$oid": "5a2bbf10aece2b92b868c22c"
    },
    "imgUrl": "https://s3-media4.fl.yelpcdn.com/bphoto/XZwIGL_4mQHRWXPjPq6W1w/o.jpg",
    "name": "Jalapeno, red onion and pepperoni!",
    "rating": 0,
    "restaurant": {
        "address": {
            "city": "Champaign",
            "coord": [
                40.1164204,
                -88.2433829
            ],
            "state": "IL",
            "street": "",
            "zipcode": ""
        },
        "hours": {
            "Friday": "11:00-14:00",
            "Monday": "11:00-14:00",
            "Saturday": "10:00-14:00",
            "Thursday": "11:00-14:00",
            "Tuesday": "11:00-14:00",
            "Wednesday": "11:00-14:00"
        },
        "name": "Dragon Fire Pizza",
        "price": 1,
        "rest_id": "a3hjBPsnpcTpcquQXLeS0w",
        "stars": 4.5
    },
    "tag": {}
}

async function requestCameraPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera")
        } else {
            console.log("Camera permission denied")
        }
    } catch (err) {
        console.warn(err)
    }
}

export default class MapScreen extends PureComponent {
    constructor(props){
        super(props);
        this.initialRegion =  this.props.navigation.state.params;
    }
   

    returnOnPress = () => {
        this.props.navigation.goBack();
    }

    render() {
       
        return (
            <Container>
                <StatusBar translucent={false} />
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={this.returnOnPress}>
                            <Icon style={styles.icon} name='angle-left' />
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title>WhatToEat</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon style={styles.icon} name='location-arrow' />
                        </Button>
                    </Right>
                </Header>

                <Container>
                    <MapView
                        initialRegion={ this.initialRegion}
                        style={styles.map}

                        showsUserLocation={true}
                    >
                        <MapView.Marker
                            coordinate={ this.initialRegion}
                        />
                    </MapView>
                </Container>

            </Container>
        );
    }
}