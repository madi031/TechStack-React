'use strict';

import React, { Component } from 'react';
import { 
	Text, 
	TouchableWithoutFeedback, 
	View, 
	LayoutAnimation 
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	componentWillUpdate() {
		LayoutAnimation.easeInEaseOut();
	}

	renderDescription() {
		if (this.props.expanded) {
			return (
				<CardSection>
					<Text style={{ flex: 1 }}>
						{this.props.library.description}
					</Text>
				</CardSection>
			);
		}
	}

	render() {
		const { id, title } = this.props.library;
		return (
			<TouchableWithoutFeedback 
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={styles.titleStyle}>
							{title}
						</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;
	return { expanded };
};

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
	},
};

export default connect(mapStateToProps, actions)(ListItem);
