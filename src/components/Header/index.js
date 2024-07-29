import { useSelector,useDispatch } from 'react-redux';
import { DeccrementCount,IncrementCount } from '../../action';
import './index.css'


const Header = ()=>{

  const count = useSelector((state)=> state.ChangeCounter);
  const dispatch = useDispatch();

  return (

      <div className='app-cont'>

            <h1> Counter Application </h1>

            <br/><br/> 

            <h1>{count}</h1>

            <br/><br/><br/>

            <div>
                    <button onClick={()=>{dispatch(DeccrementCount())}} className='my-btn'>Dec</button>
                    <button onClick={()=>{dispatch(IncrementCount())}} className='my-btn'>Inc</button>

            </div>

      </div>

  )
}




export default Header;