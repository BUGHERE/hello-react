import React, {Component} from 'react';
import qs from 'query-string'

const data = [
  {id: '01', content: '111'},
  {id: '02', content: '222'},
  {id: '03', content: '333'}
]

class Detail extends Component {
  render() {
    // const {id, title} = this.props.match.params

    // const {search} = this.props.location
    // const {id, title} = qs.parse(search.slice(1))

    const {id, title} = this.props.location.state || {}
    const findRes = data.find((dataObj)=>{
      return dataObj.id === id
    }) || {}
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {title}</li>
        <li>CONTENT: {findRes.content}</li>
      </ul>
    );
  }
}

export default Detail;