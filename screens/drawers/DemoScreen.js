import React, { Component } from 'react'
import {
    StyleSheet, View, TouchableOpacity,Image
} from 'react-native'

import Container                            from './Container'
import Text                                 from './Text'
import Button                               from './Button'
import colors                               from '../../styles/colors'
import FAIcon                               from 'react-native-vector-icons/FontAwesome'

class DemoScreen extends Component {

    render() {
        return (
            <Container style={[ styles.container, this.props.style || {} ]}>
                { this.renderNavBar() }
                { this.renderHeader() }
            </Container>
        )
    }

    onPressMenu = () => {
        this.props.navigation.navigate('DrawerOpen')
    }

    onPressBack = () => {
        this.props.navigation.goBack()
    }

    renderNavBar() {
        return (
            <View style={ styles.navBar }>
                <TouchableOpacity onPress={ this.props.onMenuPress }>
                    <FAIcon name='bars' size={22} style={{ color: colors.txtWhite }} />
                </TouchableOpacity>
            </View>
        )
    }

    renderHeader() {
      // <FAIcon name='bomb' size={100} style={ styles.logo } />
        return (
            <View style={ styles.headerHolder }>
                <Image
                  size={100}
                  style={styles.logo}
                  source={require('../../assets/images/gitgainzicon.png')}
                />
                <Text type='h1White' style={ styles.siteName }>Welcome to Git-Gainz</Text>
                <Button
                    onPress={ this.onPressBack }
                    titleStyle={ styles.btnHeaderTitleStyle }
                    style={ styles.btnHeader }
                    title='Go Back' />
            </View>
        )
    }
}

const styText = { color: colors.txtWhite }
const styles = StyleSheet.create({
    container: {
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        shadowOffset: { height: -5, width:-5},
        shadowRadius: 10,
        backgroundColor: colors.bgMain,
    },
    navBar: {
        height: 50,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    headerHolder: {
        padding: 25,
        flex: 1
    },
    logo: {
        // ...styText,
        marginTop: 10
    },
    siteName: {
        marginTop: 30,
        width: 250
    },
    btnHeader: {
        width: 160,
        height: 40,
        marginVertical: 70,
        borderWidth: 2,
        borderColor: colors.bdWhite,
        backgroundColor: 'transparent'
    },
    btnHeaderTitleStyle: {
        fontSize: 14,
        fontWeight: '700'
    }
})
export default DemoScreen
// module.exports = DemoScreen
