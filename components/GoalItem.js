import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#4c063c' }} style={({pressed}) => pressed && styles.pressedItem} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        // width: 150,
        // marginHorizontal: 'auto',
        // padding: 10,
        // margin: 5,
        // borderWidth: 2,
        // borderRadius: 5,
        // borderColor: '#000000'

        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
        color: 'white',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});