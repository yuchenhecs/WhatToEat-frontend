import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';

const { height: screenHeight } = Dimensions.get('window');
let cardHeight = screenHeight * 0.5;
cardHeight = cardHeight < 300 ? 300 : cardHeight;

const styles = StyleSheet.create({
    card: {
        elevation: 3,
        overflow: 'hidden',
        borderRadius: 10
    },
    cardBody: {
        borderRadius: 0,
        overflow: 'hidden'
    },
    cardFooter: {
        justifyContent: 'space-between'
    },
    image: {
        height: cardHeight,
        flex: 1
    },
    button: { height: 30 },
    icon: {
        color: '#C3BFBF'
    }
});

export default class CardStack extends PureComponent {
    buttonOnPress = () => {
        this.props.navigation.navigate('Detail')
    }

    render() {
        return (
            <Card style={styles.card}>
                <CardItem cardBody style={styles.card.cardBody}>
                    <Image style={styles.image} source={this.props.image} />
                </CardItem>
                <CardItem style={styles.cardFooter}>
                    <Text>{this.props.name}</Text>
                    <Button transparent={true} style={styles.button} onPress={this.buttonOnPress}>
                        <Icon name="info-circle" style={styles.icon} />
                    </Button>
                </CardItem>
            </Card>
        );
    }
}