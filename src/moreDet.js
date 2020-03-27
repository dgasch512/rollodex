import React from 'react';

class MoreDet extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isMore: false
    }
  }
  
  handleMore = index => {
    let newMore = !this.state.isMore
    this.setState({isMore: newMore})
  }
  
  render() {
    let moreStatus = this.state.isMore ? 'more' : 'less';
    let moreButton = this.state.isMore ? 'Hide Details' : 'More Details';
  
    return (
      <div> 
        <div>
          {
            this.state.isMore && (
            <div>
            <h5>{this.props.contact.login.username}, Age: {this.props.contact.dob.age} </h5>
            <h5 class="text">{this.props.contact.email}</h5>
            </div>
            )}
        </div>
        <button class= {moreStatus} onClick={ () => this.handleMore(this)}>{moreButton}</button>
      </div>
    )
  }


}

export default MoreDet