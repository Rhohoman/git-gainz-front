import React from "react"
import {View,Text} from 'react-native'
import {connect} from 'react-redux'
import Workout from './Workout.js'
// import uuid from 'uuid'

const WorkoutList = (props) => {
  const renderWorkouts=()=>{
    console.log('in render workouts',props.workouts)
    return props.workouts.map((workout,id)=>{
      console.log('workout:',workout)
      return (
        <View>
          <Workout
            key={id}
            workout={workout}
            handlePress={props.handlePress}
          />
        </View>
      )
    })
  }
  return (
  <View className="WorkoutList">
      {renderWorkouts()}
  </View>
  )
}
function mapStateToProps(state){
  return{
    workouts: state.workouts
  }
}

export default connect()(WorkoutList)
