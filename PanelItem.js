import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image,
    TouchableHighlight,
    Linking
} from 'react-native';
import Panel from 'react-native-panel';
import { Icon,
       registerCustomIconType,
       SocialIcon,
       Card} from 'react-native-elements';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import PanelPage from './PanelPage';

function Action(props) {
	if (props.action == 'Sign Up') {
			return(
				<View style={[styles.myButtons, styles.signUpButton]}>
					<Button style={styles.signUpButton}
		        raised
		        buttonStyle={{backgroundColor: '#4B0082', borderRadius: 50, padding: 8, width: 80}}
		        textStyle={{textAlign: 'center', fontSize: 14}}
		        title={`Sign Up`}            
		      />
		    </View>
	    )
	}
	return(null)
}

function Video(props) {
	if (props.link) { 
		return(
			<View>
				<Icon
		        reverse
		        raised
		        name="video-camera"
		        type="font-awesome"
		        color='#8B0000'
		        size='15'
		        onPress={ ()=>{ Linking.openURL(props.link)}}
		    /> 
		  </View>
    )
  }
  return(null)
}

function External(props) {
	if (props.link) { 
		return(
			<View>
		    <Icon
		        reverse
		        raised
		        name="external-link"
		        type="font-awesome"
		        color='#191970'
		        size='15'
		        onPress={ ()=>{ Linking.openURL(props.link)}}
		    />
	    </View>
    )
  }
  return(null)
}

export default class PanelItem extends React.Component {
    render() {
        return(
            <Panel header={this.props.header}>
                <Text style={styles.myDescription}>
                    {this.props.text}
                </Text>
                <View style ={styles.myButtons}>
	                <Action action={this.props.action} />
	                <Video link={this.props.videoLink}/>
	                <External link={this.props.externalLink}/>
                </View>
            </Panel>
        )
    }
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        paddingBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    myDescription: {
        padding: 10,
    },
    customContent: {
        backgroundColor: '#bada55',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    img: {
    	width: 40, 
    	height: 40,
    	margin: 10,
     },
    myButtons: {
        flexDirection: 'row',
    }
});