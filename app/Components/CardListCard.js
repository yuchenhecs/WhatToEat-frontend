import React, { Component, PureComponent } from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';
import { Container, Header, View, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Toast, Button } from 'native-base';

const { height: screenHeight } = Dimensions.get('window');
let cardHeight = screenHeight * 0.3;
cardHeight = cardHeight < 160 ? 160 : cardHeight;

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

export default class CardStack extends PureComponent {
    buttonOnPress = () => {
        this.props.navigation.navigate('Detail')
    }

    render() {
        return (
            <Card style={styles.card}>
                <CardItem cardBody style={styles.cardBody}>
                    <Image style={styles.image} source={{ uri: this.props.imgUrl }} />
                </CardItem>
                <CardItem style={styles.cardFooter}>
                    <Text style={styles.footerText}>{this.props.name}</Text>
                    <Button transparent={true} style={styles.button} onPress={this.buttonOnPress}>
                        <Icon name="info-circle" style={styles.icon} />
                    </Button>
                </CardItem>
            </Card>
        );
    }
}