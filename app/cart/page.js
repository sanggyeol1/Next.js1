


export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta', 'Coconut']
    return (
      <>
      <CartItem 장바구니={장바구니}/> 
      <Btn btnColor="white"/>  
      </> 
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
            </div>
          </div>
        )
      })
    }
    </div>
  )
  }

  function Btn(props){
    return <button style={{backgroundColor : props.btnColor}}>버튼임</button>
  }
  


      