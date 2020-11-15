import React from 'react'

class Input extends React.Component{

  state= { term: ''};

  //Method - 1
   // onInputChange(e) {
  //   this.setState({ term: e.target.value})
  // }

  render() {
    return(
      <div className="input-group mb-3 m-2">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" value={this.state.term} placeholder="Enter ...." onChange={e => this.setState({ term: e.target.value}) } />
        <h1>{this.state.term}</h1>
      </div>
    )
  }
}

export default Input
