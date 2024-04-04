import './Home.css';
import cover from '../images/2 c.jpg'
import achievements from '../images/1.webp'
export default function Home() {
  return (
    <div style={{width:"100%"}}>
      <div>
        <img className='codegnan-cover-page' src={cover} alt='cover-page'/>
      </div>
      <div className='ceo-word'>
        <p className='title'>Word of CEO</p>
        <p className='word'>Being a pioneer in the field, our organisation has a wealth of knowledge and a solid track record of offering excellent services and all-inclusive training solutions.</p>
      </div>
      <div>
        <img className='codegnan-cover-page' src={achievements} alt='cover-page'/>
      </div>
    </div>
  );
}