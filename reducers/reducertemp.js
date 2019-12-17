import {ADD_NEW_WORKOUT,FETCH_SCHEDULES_SUCCESS,SET_CURRENT_WORKOUT,SET_CURRENT_SCHEDULE,FETCH_SCHEDULES_BEGIN,FETCH_SCHEDULES_FAILURE,ADD_NEW_SCHEDULE,SET_WORKOUTS,FETCH_EXERCISES_BEGIN,FETCH_EXERCISES_SUCCESS,FETCH_EXERCISES_FAILURE,FETCH_WORKOUTS_SUCCESS,FETCH_WORKOUTS_BEGIN,FETCH_WORKOUTS_FAILURE,FETCH_SCHEDULES_WORKOUTS,FETCH_CIRCUITS_SUCCESS,FETCH_CIRCUITS_FAILURE,FETCH_USER_WORKOUTS_BEGIN,FETCH_USER_WORKOUTS_SUCCESS,FETCH_USER_WORKOUTS_FAILURE} from '../constants/types.js'
import {API_URL}from '../constants/types.js'
// const apiUrl=`http://192.168.2.243:3000/api/v1/`
// const apiUrl = `https://gitgainz.herokuapp.com/api/v1/`


// import store from '../store.js'

const initialState={
  workouts:[],
  schedules:[],
  loading:false,
  error:null,
  currentSchedule:null,
  currentWorkout:null,
  currentUser:{id:29,name:'Brad',password:'1234'}
}

// function reducer(state=initialState,action){
//   console.log('%c reducer:', 'color: orange', action);
//   switch(action.type){
    // case FETCH_SCHEDULES_BEGIN:
    //   console.log('fetch begin')
    //   return {...state,
    //     loading:true,
    //     error:null
    //   }
    // case FETCH_SCHEDULES_SUCCESS:
    //   console.log('fetch success')
    //   return {
    //     ...state,
    //     loading:false,
    //     schedules:action.payload.schedules
    //   }
    // case FETCH_SCHEDULES_FAILURE:
    //   console.log('fetch failure')
    //   return {
    //     ...state,
    //     loading:false,
    //     error:action.payload.error,
    //     schedules:[]
    //   }
    // case FETCH_USER_WORKOUTS_BEGIN:
    //   // console.log('fetch begin')
    //   return {...state,
    //     loading:true,
    //     error:null
    //   }
    // case FETCH_USER_WORKOUTS_SUCCESS:
    //   // console.log('fetch success')
    //   return {
    //     ...state,
    //     loading:false,
    //     userWorkouts:action.payload.workouts
    //   }
    // case FETCH_WORKOUTS_BEGIN:
    //   // console.log('fetch begin')
    //   return {...state,
    //     loading:true,
    //     error:null
    //   }
    // case FETCH_WORKOUTS_SUCCESS:
    //   // console.log('fetch success')
    //   return {
    //     ...state,
    //     loading:false,
    //     currentSchedule:{
    //       ...state.currentSchedule,
    //       workouts:action.payload.workouts
    //     },
    //   }
    // case FETCH_SCHEDULES_WORKOUTS:
    //   // console.error('reducer current schedule',action.payload.currentSchedule)
    //   return {
    //     ...state,
    //     currentSchedule:action.payload.currentSchedule
    //   }
    // case FETCH_WORKOUTS_FAILURE:
    //   // console.log('fetch failure')
    //   return {
    //     ...state,
    //     loading:false,
    //     error:action.payload.error,
    //     workouts:[]
    //   }
    // case FETCH_EXERCISES_BEGIN:
    //   return {
    //     ...state,
    //     loading:true,
    //     error:null
    //   }
    // case FETCH_EXERCISES_SUCCESS:
    //   return{
    //     ...state,
    //     loading:false,
    //     currentWorkout:{
    //       ...state.currentWorkout,
    //       exercises:action.payload.exercises
    //     },
    //   }
    // case FETCH_EXERCISES_FAILURE:
    //   return {
    //     ...state,
    //     loading:false,
    //     error:action.payload.error,
    //     exercises:[]
    //   }
    // case FETCH_CIRCUITS_SUCCESS:
    //   return {
    //     ...state,
    //     loading:false,
    //     currentExercise:{
    //       ...state.currentExercise,
    //       circuits:action.payload.circuits
    //     }
    //   }
    // case FETCH_CIRCUITS_FAILURE:
    //   return {
    //     ...state,
    //     loading:false,
    //     error:action.payload.error,
    //     circuits:[]
    //   }
    // case ADD_NEW_SCHEDULE:
    //   return {
    //     ...state,schedules:[...state.schedules,action.payload]
    //   }
  //   case ADD_NEW_WORKOUT:
  //     return{
  //       ...state,workouts:[...state.workouts,action.payload]
  //     }
  //   // case SET_CURRENT_SCHEDULE:
  //   //   // console.log('reducer in set current schedule')
  //   //   return {
  //   //     ...state,currentSchedule:action.payload
  //   //   }
  //   case SET_WORKOUTS:
  //     return{
  //       ...state,workouts:[...state.workouts,action.payload]
  //     }
  //   case SET_CURRENT_WORKOUT:
  //   // console.log('reducer in set current workout')
  //
  //     return{
  //       ...state,currentWorkout:action.payload
  //     }
  //
  //   default:
  //     console.log('no action type found')
  //     return state;
  // }
// }

// export function setCurrentSchedule(schedule){
  //   // console.log('in setcurrent schedule',schedule)
  //   return {
    //       type: SET_CURRENT_SCHEDULE,
    //       payload:schedule
    //     }
    //
    // }

export function setWorkouts(workouts){
  // console.log('in setworkouts',workouts)
  return{
    type:SET_WORKOUTS,
    payload:workouts
  }
}
export function setCurrentWorkout(workout){
  // console.log('in set current workout',workout)
  return {
    type: SET_CURRENT_WORKOUT,
    payload:workout
  }
}

export function addWorkout(workout){
  return {
    type:ADD_NEW_WORKOUT,
    payload:{workout}
  }
}
//
// export function fetchSchedules(){
//   // const schedulesUrl='http://localhost:3000/api/v1/schedules'
//   return dispatch=>{
//     // dispatch(fetchSchedulesBegin())
//     console.log('in fetchschedules reducer')
//     return fetch(API_URL+'schedules')
//     .then(handleErrors)
//     .then(res=>{
//       console.log('res',res)
//       return res.json()
//     })
//     .then(schedules=>{
//       // console.log('schedules *************',schedules)
//       dispatch(fetchSchedulesSuccess(schedules))
//       return schedules
//     })
//     .catch(error=> dispatch(fetchSchedulesFailure(error)))
//   }
// }
export function fetchWorkouts(){
  return dispatch=>{
    // dispatch(fetchSchedulesBegin())
    return fetch(API_URL+'workouts')
    .then(handleErrors)
    .then(res=>{
      // console.log('res',res)
      return res.json()
    })
    .then(workouts=>{
      // console.warn('fetch workouts',workouts)
      // console.log('schedules *************',schedules)
      dispatch(fetchWorkoutsSuccess(workouts))
      return workouts
    })
    .catch(error=> dispatch(fetchSchedulesFailure(error)))
  }
}
// export function fetchSchedulesWorkouts(schedule){
//   return dispatch=>{
//     // dispatch(fetchSchedulesBegin())
//     return fetch(API_URL+`schedules/${schedule.id}`)
//     .then(handleErrors)
//     .then(res=>{
//       // console.log('res',res)
//       return res.json()
//     })
//     .then(workouts=>{
//       // console.warn('fetch schedules workouts',workouts)
//       // console.log('schedules *************',schedules)
//       dispatch(fetchWorkoutsSuccess(workouts))
//       return workouts
//     })
//     .catch(error=> dispatch(fetchSchedulesFailure(error)))
//   }
// }
// export function fetchWorkoutsExercises(workout){
//   return dispatch=>{
//     return fetch(API_URL+`workouts/${workout.id}`)
//     .then(handleErrors)
//     .then(res=>res.json())
//     .then(exercises=>{
//       dispatch(fetchExercisesSuccess(exercises))
//       return exercises
//     })
//     .catch(error=>
//       dispatch(fetchExercisesFailure(error))
//     )
//   }
// }
export function fetchCircuits(exercise_id){
  return dispatch=>{
    return fetch(API_URL+`exercises/${exercise_id}`)
    .then(handleErrors)
    .then(res=>res.json())
    .then(circuits=>{
      dispatch(fetchCircuitsSuccess(circuits))
      return circuits
    })
    .catch(error=>
      dispatch(fetchCircuitsFailure(error))
    )
  }

}
// export function fetchExercises(){
//   const exercisesUrl = 'http://localhost:3000/api/v1/exercises'
//   return dispatch=>{
//     return fetch(exercisesUrl)
//       .then(handleErrors)
//       .then(res=>{
//         return res.json()
//       })
//       .then(exercises=>{
//         dispatch(fetchExercisesSuccess(exercises))
//         return exercises
//       })
//       .catch(error=> dispatch(fetchExercisesFailure(error)))
//   }
// }
export function fetchUserWorkouts(user){
  return dispatch=>{
    return fetch(API_URL+`users/${user.id}`)
    .then(handleErrors)
    .then(res=>res.json())
    .then(workouts=>{
      dispatch(fetchUserWorkoutsSuccess(workouts))
      return workouts
    })
    .catch(error=>
      dispatch(fetchUserWorkoutsFailure(error))
    )
  }
}

// export function postNewSchedule(schedule){
//   const scheduleUrl='http://localhost:3000/api/v1/schedules'
//   // console.log('in handle add schedule',e)
//   return dispatch=>{
//     return fetch(scheduleUrl,{
//       method:"POST",
//       headers:{
//         'Content-Type':'application/json',
//         'Accepts':'application/json'
//       },
//       body:JSON.stringify({
//         schedule
//       })
//     })
//     .then(handleErrors)
//   }
// }
export function postNewWorkout(workout,currentSchedule){
  // addWorkout(workout)
  // console.log('in handle add schedule',e)
  // currentSchedule.workouts=[...currentSchedule.workouts,workout]
  let schedule = {
    ...currentSchedule  }
  // console.log('***********************schedule',schedule)
  return dispatch=>{
    return fetch(API_URL+'workouts',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body:JSON.stringify({
          workout
        }
      )
    })
    .then(res=>res.json())
    .then(workout=>{

      // console.log('res workout id',workout)
      // console.log("%c res",  "color: blue",res)
      return fetch( API_URL+'workout_schedules',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
          'Accepts':'application/json'
        },
        body:JSON.stringify({
          schedule_id:currentSchedule.id,
          workout_id:workout.id
        })
      }).then(handleErrors)
      .then(function(){
        dispatch(fetchSchedulesWorkouts(currentSchedule))
      })

  })
    // .then(handleErrors)
  }
}
export function postNewCompleteWorkout(currentUser,workout){

  return dispatch=>{
    // console.warn('in postnewCompleteworkout dispatc',currentUser,workout)

    // console.warn('creating user_workouts',workout)
    return fetch( API_URL+'user_workouts',{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body:JSON.stringify({
        workout_id:workout.id,
        user_id:currentUser.id
      })
    }).then(handleErrors)
  .then(function(){
    // console.warn('after fetchs in post new completeworkout')
    dispatch(fetchUserWorkouts(currentUser))
  })
  }
}

// export function postNewExercise(exercise,currentWorkout){
//   // addWorkout(workout)
//   // console.log('***********************exercise',exercise)
//   return dispatch=>{
//     return fetch(API_URL+'exercises',{
//       method:"POST",
//       headers:{
//         'Content-Type':'application/json',
//         'Accepts':'application/json'
//       },
//       body:JSON.stringify({
//           exercise
//         }
//       )
//     })
//     .then(res=>{return res.json() })
//     .then(exer=>{
//
//       // console.log('res exercise id',exer)
//       return fetch( API_URL+'workout_exercises',{
//         method:"POST",
//         headers:{
//           'Content-Type':'application/json',
//           'Accepts':'application/json'
//         },
//         body:JSON.stringify({
//           workout_id:currentWorkout.id,
//           exercise_id:exer.id
//         })
//       }).then(handleErrors)
//   })
//     .then(handleErrors)
//     .then(function(){
//       dispatch(fetchWorkoutsExercises(currentWorkout))
//     })
//   }
// }
export function postNewCircuit(circuit){
  // console.log('in post new circuit',circuit)
  return (dispatch)=>{
    // dispatch(fetchCircuits(circuit.exercise_id))
    // console.log('in dispatch')
    fetch(API_URL+'circuits',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accepts':'application/json'
      },
      body:JSON.stringify(
        circuit
      )
    })//.then(res=> res.json())


    .then(function(){dispatch(fetchCircuits(circuit.exercise_id))})
  }
}
export const fetchUserWorkoutsBegin=()=>({
  type:FETCH_USER_WORKOUTS_BEGIN
})
export const fetchUserWorkoutsSuccess=(workouts)=>{
  // console.log('fetch success: ',schedules)
  return {

    type:FETCH_USER_WORKOUTS_SUCCESS,
    payload: workouts
  }
}
export const fetchUserWorkoutsFailure=(error)=>({
  type:FETCH_USER_WORKOUTS_FAILURE,
  payload:{error}
})
// export const fetchWorkoutsBegin=()=>({
//   type:FETCH_WORKOUTS_BEGIN
// })
// export const fetchWorkoutsSuccess=(workouts)=>{
//   // console.log('fetch success: ',schedules)
//   return {
//
//     type:FETCH_WORKOUTS_SUCCESS,
//     payload: workouts
//   }
// }
// export const fetchWorkoutsFailure=(error)=>({
//   type:FETCH_WORKOUTS_FAILURE,
//   payload:{error}
// })
export const fetchSchedulesWorkoutsSuccess=(currentSchedule)=>({
  type:FETCH_SCHEDULES_WORKOUTS,
  payload:{currentSchedule}
})
//
// export const fetchSchedulesBegin=()=>({
//   type:FETCH_SCHEDULES_BEGIN
// })
// export const fetchSchedulesSuccess=(schedules)=>{
//   // console.log('fetch success: ',schedules)
//   return {
//
//     type:FETCH_SCHEDULES_SUCCESS,
//     payload: {schedules}
//   }
// }
// export const fetchSchedulesFailure=(error)=>({
//   type:FETCH_SCHEDULES_FAILURE,
//   payload:{error}
// })
//
// export const addNewSchedule=(schedule)=>({
//   type:ADD_NEW_SCHEDULE,
//   payload:{schedule}
// })
// export const fetchExercisesBegin=()=>({
//   type:FETCH_EXERCISES_BEGIN
// })
// export const fetchExercisesSuccess=(exercises)=>{
//   return {
//     type:FETCH_EXERCISES_SUCCESS,
//     payload:exercises
//   }
// }
// export const fetchExercisesFailure=(error)=>({
//   type:FETCH_EXERCISES_FAILURE,
//   payload:{error}
// })
export const fetchCircuitsSuccess=(circuits)=>{
  // console.log('fetch circuits success',circuits)
  return {
    type:FETCH_CIRCUITS_SUCCESS,
    payload:circuits
  }
}
export const fetchCircuitsFailure=(error)=>({
  type:FETCH_CIRCUITS_FAILURE,
  payload:{error}
})

function handleErrors(response) {
  console.log('in handle errors, response:', response)
  if (!response.ok) {

    throw Error(response.statusText);
  }
  return response;
}
export default reducer