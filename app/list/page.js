'use client';//html내에서 자바스크립트 사용가능하게 함 (서버->클라이언트컴포넌트로 전환)
import {useState} from 'react'

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량, 수량변경] = useState([0,0,0])
    

    return (
      <div>
        <h2>Products</h2>
        {
          상품.map((a,i)=>{
            return(
              <div className="food" key={i}>
                <img src={'food'+ i +'.png'} className="food-img"/>
                <h4>{a} $40</h4>
                
                <span>{수량[i]} </span>
                
                <button onClick={()=>{
                  let copy = [...수량]
                  copy[i]++;
                  수량변경(copy)
                }}> + </button>
              </div>
            )
          })
        }
        <button className="btn">버튼</button>
      </div>
    )
  } 