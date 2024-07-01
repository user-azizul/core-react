import React from 'react'
const WithConter
 = (OriginalComponent)=>{
    class NewComp extends React.Component{
        state = {
            count:0,
        }
        increment = ()=>{
            this.setState((prev)=>({count:prev.count +1}))
        }
        render(){
            const {count}= this.state;
            return <OriginalComponent count = {count}  increment = {this.increment}/>
        }
    }
    return NewComp;

}
export default WithConter;
