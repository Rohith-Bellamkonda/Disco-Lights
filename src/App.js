import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { boxes: '' };
  }
  UpdateBg = () => {
    this.setState({
      boxes: '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    });
  };
  componentDidMount() {
    this.abcd = setInterval(() => this.UpdateBg(), 400);
  }
  componentWillUnmount() {
    clearInterval(this.abcd);
  }

  render() {
    return (
      <div className="colorBox" style={{ background: this.state.boxes }} />
    );
  }
}
export default App;
