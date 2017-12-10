import React, { Component } from 'react';
import { View, Button, H1, H2, H3, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';



const styles = StyleSheet.create({
    content: { padding: 20 },
    row: {
        margin: 5, flexDirection: "row"
    },
    body: {
        flex: 1,
        margin: 10,
        flexDirection: 'column'
    },
    bodyUpper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    thumbnail: {
        margin: 15
    },
    text: {
        color: "#959899",
        fontSize: 12,
        alignSelf: "center"
    }
});



export default class DetailContent extends Component {
    render() {
        return (
            <View style={styles.content}>
                <View style={styles.row}>
                    <H1 style={{fontSize: 24}}>Miga</H1>
                </View>
                <View style={styles.row}>
                    <Text style={{ color: '#93F04F', fontSize: 14 }}>Open</Text>
                    <Text style={{ color: '#C3BFBF', fontSize: 14 }}> until 11:00 PM</Text>
                </View>

                <View style={styles.row}>
                    <Text style={{ color: '#C3BFBF', fontSize: 14, marginBottom: 10 }}>Japanese, American (New), Sushi Bars</Text>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Price:</Text>
                    </View>
                    <View style={{ flex: 0.25, marginTop: 2 }}>
                        <StarRating
                            disabled={false}
                            emptyStar={'usd'}
                            fullStar={'usd'}
                            halfStar={'usd'}
                            maxStars={4}
                            rating={3}
                            starColor={'#FFAE40'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={16}
                        />
                    </View>
                </View>


                <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Rating:</Text>
                    </View>
                    <View style={{ flex: 0.35, marginTop: 2 }}>
                        <StarRating
                            disabled={false}
                            emptyStar={'heart'}
                            fullStar={'heart'}
                            halfStar={'heart'}
                            maxStars={5}
                            rating={3}
                            starColor={'#FF6363'}
                            emptyStarColor={'#C3BFBF'}
                            starSize={16}
                        />
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>Distance:</Text>
                    </View>
                    <View style={{ flex: 0.3 }}>
                        <Text style={{ color: '#C3BFBF' }}>1.7 miles</Text>
                    </View>

                </View>
            </View>
        );
    }
};

