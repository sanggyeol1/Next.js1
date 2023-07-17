'use client';//html내에서 자바스크립트 사용가능
import {useState} from 'react'



export default function Cart() {
  let [장바구니, 장바구니변경] = useState(['Tomatoes', 'Pasta', 'Coconut'])

    return (
      <>
      <CartItem 장바구니={장바구니} 장바구니변경={장바구니변경}/> 
      <Banner 회사='현대'/>
      </> 
    )
  }
  
function Banner(props){
  return(
    <div>
      <h5>{props.회사}카드 결제 행사중</h5>
    </div>
  )
} 




function CartItem(props){
  return(
    <div>
    <h4 className="title">Cart</h4>
    {
      props.장바구니.map((a, i)=>{
        return(
          <div>
            <div className="cart-item">
              <p>{props.장바구니[i]}</p>
              <p>$40</p>
              <p>1개</p>
              <button onClick={()=>{
                let copy = [...props.장바구니]
                copy.splice(i,1)
                props.장바구니변경(copy)
              }}>삭제</button>
            </div>
          </div>
        )
      })
    }
    </div>
  )
  }



      