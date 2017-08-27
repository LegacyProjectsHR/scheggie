import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 155,
  },
};

class Panel extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   selected: this.props.default
    // }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, index, value) {
    console.log('the event value clicked is ', typeof value)
    console.log('the clicked value is ', value)

    if (this.props.category === 'cuisine') {
      value.includes('Any') ? this.props.actions.updateCuisineType('') : this.props.actions.updateCuisineType(value);
    } else if (this.props.category === 'calories') {
      value.includes ('Any') ? this.props.actions.updateNumCalories('') : this.props.actions.updateNumCalories(value);
    } else if (this.props.category === 'totalTimeInSeconds') {
      value.includes('Any') ? this.props.actions.updatePrepTime('') : this.props.actions.updatePrepTime(value);
    }
  }

  render() {
    if (this.props.category === 'totalTimeInSeconds') {
      return (
        <div style = {{'display': 'inline-block', 'float': 'left', 'padding-right' :'25px', 'margin-top' :'-10px'}}>
          <SelectField
            floatingLabelText = {this.props.selectCategory}
            value = {this.props.selectedVal}
            onChange = {this.handleClick}
            style={styles.customWidth}
          >
            <MenuItem
              value = "Any"
              primaryText = "Any"
            />
            {this.props.choices.map((choice, index) =>
              <MenuItem
                value = {choice}
                key = {index}
                primaryText = {choice/60}
              />
            )}
          </SelectField>
        </div>
      )
    } else {
      console.log('the select field text is ', this.props.search.selected)
      console.log('the props  field text is ', this.props)
      return (
        <div style = {{'display': 'inline-block', 'float': 'left', 'padding-right' :'25px', 'margin-top' :'-10px'}}>
          <SelectField
            floatingLabelText = {this.props.selectCategory}
            value = {this.props.selectedVal}
            onChange = {this.handleClick}
            style={styles.customWidth}
          >
            <MenuItem
              value = "Any"
              primaryText = "Any"
            />
            {this.props.choices.map((choice, index) =>
              <MenuItem
                value = {choice}
                key = {index}
                primaryText = {choice}
              />
            )}
          </SelectField>
        </div>
      )
    }
  }
}

export default Panel;
