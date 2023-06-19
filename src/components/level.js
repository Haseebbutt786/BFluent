import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { WP, HP } from '../services';

const Level = ({ name, style, onPress, textStyle, source }) => {
    const [isClicked, setIsClicked] = useState(false);


    const handleButtonClick = () => {
        setIsClicked(prevState => !prevState);
        // Perform other actions when the button is clicked
    };

    return (
        <TouchableOpacity style={[styles.main, style, { borderColor: isClicked ? '#6B39BD' : 'transparent' }]} onPress={() => handleButtonClick()}>

            <View style={{
                width: WP('70'),
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                marginHorizontal: 5


            }}>
                <View style={{
                    height: HP('5'),
                    width: WP('10'),
                    marginHorizontal: 10

                }}>
                    <Image
                        style={{
                            resizeMode: 'contain',
                            // flex: 1,

                            height: HP('5'),
                            width: WP('10'),
                            // marginHorizontal: 10
                        }}
                        source={source}
                    />
                </View>
                <Text style={{ color: 'grey', fontSize: 17, marginLeft: 5 }}>{name}</Text>
            </View>
            <TouchableOpacity>
                <Image
                    style={{
                        height: HP('3'),
                        width: WP('6.5'),
                        marginRight: 20

                        // backgroundColor:'red'
                    }}
                    source={require('../assets/images/infoIcon.png')}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default Level;

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#FFf',
        borderRadius: 20,
        justifyContent: 'space-between',
        width: "95%",
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: "center",
        borderWidth: 1
        // paddingHorizontal: 20,

    },
    textContainer: {
        color: 'gray',
        fontSize: 20,
        fontWeight: '300',
        paddingVertical: 20,
    },
});
