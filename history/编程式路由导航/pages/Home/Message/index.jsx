import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'
import Detail from "./Detail";

class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: 'message1'},
      {id: '02', title: 'message2'},
      {id: '03', title: 'message3'},
    ]
  }

  pushJump = (id, title)=>{
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
    this.props.history.push(`/home/message/detail`, {id, title})
  }

  replaceJump = (id, title)=>{
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
    this.props.history.replace(`/home/message/detail`, {id, title})
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/*params*/}
                  {/*<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>*/}
                  {/*search*/}
                  {/*<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>*/}
                  {/*state*/}
                  <Link to={{
                    pathname: '/home/message/detail',
                    state: {id: msgObj.id, title: msgObj.title}
                  }}>{msgObj.title}</Link>
                  &nbsp;
                  <button onClick={()=>this.pushJump(msgObj.id, msgObj.title)}>push jump</button>
                  &nbsp;
                  <button onClick={()=>this.replaceJump(msgObj.id, msgObj.title)}>replace jump</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/*params*/}
        {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}
        {/*search and state*/}
        <Route path="/home/message/detail" component={Detail}/>
      </div>
    );
  }
}

export default Message;
