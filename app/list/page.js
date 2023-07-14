'use client';
import {useState} from 'react'

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [count, setCount] = useState(0)

    return (
      <div>
        <h2>Products</h2>
        {
            상품.map((a,i)=>{
                return(
                  <div className="food" key={i}>
                    <img src={'food'+ i + '.png'} className="food-img"/>
                    <h4>{a} $40</h4>
                    
                    <div className='btn-count'>
                    <button onClick={()=>{
                      
                    }}>-</button>
                    <div> &nbsp;{ count } &nbsp;</div>
                    <button onClick={()=>{
                      
                    }}>+</button>
                    </div>
                  </div>
                )
            })
        }
        <button className="btn">버튼</button>
      </div>
    )
  } 