import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';

const { height: screenHeight } = Dimensions.get('window');
let cardHeight = screenHeight * 0.55;
cardHeight = cardHeight < 360 ? 360 : cardHeight;

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        overflow: 'hidden',
        borderRadius: 10,
    },
    cardFooter: {
        justifyContent: 'space-between'
    },
    footerText: {
        color: 'grey',
    },
    image: {
        height: cardHeight,
        flex: 1
    },
    button: { height: 30 },
    icon: {
        color: '#C3BFBF',
        fontSize: 25
    }
});

export default class StackCard extends PureComponent {
    buttonOnPress = () => {
        let dish_info = {}; 
        dish_info["imgUrl"] = this.props.imgUrl;
        dish_info["name"] = this.props.name;
        dish_info["rating"] = this.props.rating;
        dish_info["restaurant"] = this.props.restaurant;
        dish_info["tag"] = this.props.tag;
        this.props.navigation.navigate('Detail',dish_info);
    }

    render() {
        console.log(global.test);
        return (
            <Card  style={styles.card} >
                <CardItem cardBody style={styles.cardBody}>
                    <Image style={styles.image} source={{ uri: this.props.imgUrl }} />
                </CardItem>
                <CardItem button style={styles.cardFooter} onPress={this.buttonOnPress}>
                    <Text style={styles.footerText}>{this.props.name}</Text>
                    <Button transparent={true} style={styles.button} onPress={this.buttonOnPress}>
                        <Icon name="info-circle" style={styles.icon} />
                    </Button>
                </CardItem>
            </Card>
        );
    }
}