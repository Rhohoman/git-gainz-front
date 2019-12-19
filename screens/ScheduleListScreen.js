import React, { Component } from 'react';
import {connect} from 'react-redux'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet,TouchableOpacity, TextInput,Text,View,Button,ScrollView,AsyncStorage} from 'react-native';

import { DrawerActions } from 'react-navigation';
import { Card, ListItem, Button as ButtonElements ,Divider,Input} from 'react-native-elements'

import ScheduleList from '../components/ScheduleList.js'
import Container from '../components/Container.js'


import { fetchMySchedules,fetchSchedules,postNewSchedule} from '../actions/scheduleActions.js'

import colors from '../styles/colors'

class ScheduleListScreen extends Component {
  static navigationOptions = {
    title: 'Schedules List',
    drawerLabel: 'All Schedules',


  };
  state={
    text:''
  }


  constructor(props) {
    super(props);

  }
  componentDidMount(){
    this.props.fetchMySchedules()

  }
  openDrawer = () => {
    console.log('opening drawer in schedulelist screen')
    this.props.navigation.dispatch(DrawerActions.openDrawer());
  }
  renderNavBar() {
    console.log('rendered nav')
      return (
          <View style={ styles.navBar }>
              <TouchableOpacity onPress={ this.openDrawer }>
                  <FAIcon name='bars' size={22} style={{ color: colors.bdMainRed }} />
              </TouchableOpacity>
          </View>
      )
  }

  handleAddSchedule=(e)=>{
    this.props.postNewSchedule({
      name:this.state.text,
      workouts:[]
    })
    this.setState({text:''})
  }



  render() {
    return (
      <>
        {this.renderNavBar()}
        <Container style={[ styles.container, this.props.style || {} ]}>

          <Input
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
          <ButtonElements
            title="Add New Schedule"
            onPress={() => this.handleAddSchedule()}
            />

          <ScheduleList
            schedules={this.props.schedules}
            handlePress={this.props.navigation.navigate}
            />

          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
            />

        </Container>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMySchedules: () => dispatch(fetchMySchedules()),
  postNewSchedule: (s)=>dispatch(postNewSchedule(s))
})

function mapStateToProps(state){

  const {schedule}=state;
  return {
    schedules:schedule.schedules,
    loading:state.loading,
    error:state.error
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ScheduleListScreen)

const styles = StyleSheet.create({
  navBar: {
      height: 50,
      justifyContent: 'center',
      paddingHorizontal: 25
  },

})
