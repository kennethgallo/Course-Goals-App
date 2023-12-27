import { StyleSheet, View, Text } from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
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
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
        color: 'white',
    },
    goalText: {
        color: 'white',
    }
});