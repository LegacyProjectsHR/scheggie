import React from 'react';
import Panel from './panel.jsx';
import SvgIcon from 'material-ui/SvgIcon';
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import ArrowUp from 'material-ui/svg-icons/navigation/arrow-drop-up';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   filterClicked: false
    // }
    this.toggleFilterClick = this.toggleFilterClick.bind(this);
    this.updateCategoryTerm = this.updateCategoryTerm.bind(this);
  }

  toggleFilterClick() {
    // this.setState({
    //   filterClicked: !this.state.filterClicked
    // })
    this.props.actions.updateToggleButton();
  }

  updateCategoryTerm(category, term) {
    this.props.updateCategoryTerm(category, term);
  }

  render() {

      if (this.props.search.filterToggled === false) {
        return (
           <div style = {{'padding-left' :'30px'}}>
             <span onClick = {this.toggleFilterClick}>Show Filters<ArrowDown/></span>
           </div>
        )
      } else {
        return (
          <div style = {{'padding-left' :'28px'}}>
            <span onClick = {this.toggleFilterClick}>Hide Filters<ArrowUp/></span>
              <div>
                <span>
                  <Panel
                    choices = {['Italian', 'Mexican', 'Chinese', 'Kid-Friendly', 'Barbeque', 'Thai', 'French', 'Japanese', 'English', 'Korean', 'Indian','American'].sort()}
                    category = 'cuisine'
                    selectCategory = "Cuisine"
                    updateCategoryTerm = {this.updateCategoryTerm}
                    actions = {this.props.actions}
                    search = {this.props.search}
                    selectedVal = {this.props.search.cuisine}
                  />
                </span>

                <span>
                  <Panel
                    choices = {['900', '1800', '3600', '5400']}
                    category = 'totalTimeInSeconds'
                    selectCategory = "Prep Time (Min)"
                    updateCategoryTerm = {this.updateCategoryTerm}
                    actions = {this.props.actions}
                    search = {this.props.search}
                    selectedVal = {this.props.search.totalTimeInSeconds}
                  />
                </span>

                <span>
                  <Panel
                    choices = {['50', '100', '150', '200', '250', '300']}
                    category = 'calories'
                    selectCategory = "Calories / Serving"
                    updateCategoryTerm = {this.updateCategoryTerm}
                    actions = {this.props.actions}
                    search = {this.props.search}
                    selectedVal = {this.props.search.calories}
                  />
                </span>

              </div>
            </div>
        )
      }
  }
}

export default Filter;
