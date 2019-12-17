import {API_URL} from '../constants/types.js'

import {FETCH_EXERCISES_BEGIN,FETCH_EXERCISES_SUCCESS,FETCH_EXERCISES_FAILURE} from '../constants/types.js'

import WorkoutAdapter from '../adapters/workoutAdapter.js'


export const fetchExercisesBegin=()=>({
  type:FETCH_EXERCISES_BEGIN
})
export const fetchExercisesSuccess=(exercises)=>{
  return {
    type:FETCH_EXERCISES_SUCCESS,
    payload:exercises
  }
}
export const fetchExercisesFailure=(error)=>({
  type:FETCH_EXERCISES_FAILURE,
  payload:{error}
})

export function fetchExercises(){
  // const exercisesUrl = 'http://localhost:3000/api/v1/exercises'
  return dispatch=>{
    return fetch(API_URL+`exercises`)
      .then(handleErrors)
      .then(res=>{
        return res.json()
      })
      .then(exercises=>{
        dispatch(fetchExercisesSuccess(exercises))
        return exercises
      })
      .catch(error=> dispatch(fetchExercisesFailure(error)))


  }
}
export function fetchWorkoutsExercises(workout){
  return dispatch=>{
    return WorkoutAdapter.getWorkoutsExercises(workout)
    .then(exercises=>{
      dispatch(fetchExercisesSuccess(exercises))
      return exercises
    })
    .catch(error=>
      dispatch(fetchExercisesFailure(error))
    )
  }
}



export function addNewCircuit(exercise,currentWorkout){
  // addWorkout(workout)
  // console.log('***********************exercise',exercise)
  return dispatch=>{
    console.log('exercise action add new circuit ',currentWorkout)
    return WorkoutAdapter.postWorkoutExercise(exercise,currentWorkout)
    .then(function(){
      dispatch(fetchWorkoutsExercises(currentWorkout))
    })
  }
}
function handleErrors(response) {
  console.log('in handle errors, response:', response)
  if (!response.ok) {

    throw Error(response.statusText);
  }
  return response;
}