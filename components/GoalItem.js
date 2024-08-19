import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function GoalItem(props) {

    function deleteGoalHandler(id) {
        props.onDeleteGoal(id)
    }

    return (
        <View style={styles.goalItem}>
            <Pressable 
                onPress={props.onDeleteGoal.bind(this, props.goal.id)}
                android_ripple={{color: '#210644'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>
                {props.goal.text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        color: 'white'
    },
    goalText: {
        color: 'white',
        padding: 8
    },
    pressedItem: {
        opacity: 0.5
    }
  });