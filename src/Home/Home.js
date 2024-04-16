import './Home.css';
import cover from '../images/2 c.jpg'
import achievements from '../images/1.webp'
export default function Home() {
  return (
    <div style={{width:"100%"}}>
      <div>
        <img className='codegnan-cover-page' src={cover} alt='cover-page'/>
      </div>
      
      <div>
        <img className='codegnan-cover-page' src={achievements} alt='cover-page'/>
      </div>
    </div>
  );
}