import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const numType = count % 2 === 0 ? 'Even' : 'odd'

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="count">Count {count}</h1>
          <h1 className="count-property">Count is {numType}</h1>
          <button className="btn" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="des">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
