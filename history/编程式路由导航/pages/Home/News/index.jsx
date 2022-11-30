import React, {Component} from 'react';

class News extends Component {
  // componentDidMount() {  // 等待两秒自动跳转到Message界面
  //   setTimeout(()=>{
  //     this.props.history.push('/home/message')
  //   }, 2000)
  // }

  render() {
    return (
      <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
      </ul>
    );
  }
}

export default News;