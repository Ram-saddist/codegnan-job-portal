import './Home.css';
import coverpage from '../images/2.png'
import joinus from '../images/1.png'
//import CardSlider from './CardSlider';

export default function Home() {
 /* const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: 'https://img.freepik.com/free-photo/happy-businesswoman-holding-folder_74855-5075.jpg?t=st=1710500433~exp=1710504033~hmac=7fcb867b4226ad62d949b4cd47595bc443fd080d1ef026012897d764d554ec10&w=900',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: 'https://img.freepik.com/free-photo/happy-businesswoman-holding-folder_74855-5075.jpg?t=st=1710500433~exp=1710504033~hmac=7fcb867b4226ad62d949b4cd47595bc443fd080d1ef026012897d764d554ec10&w=900',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 1',
      image: 'https://img.freepik.com/free-photo/happy-businesswoman-holding-folder_74855-5075.jpg?t=st=1710500433~exp=1710504033~hmac=7fcb867b4226ad62d949b4cd47595bc443fd080d1ef026012897d764d554ec10&w=900',
    },
    {
      title: 'Card 4',
      description: 'Description for Card 2',
      image: 'https://img.freepik.com/free-photo/happy-businesswoman-holding-folder_74855-5075.jpg?t=st=1710500433~exp=1710504033~hmac=7fcb867b4226ad62d949b4cd47595bc443fd080d1ef026012897d764d554ec10&w=900',
    },
    {
      title: 'Card 5',
      description: 'Description for Card 1',
      image: 'https://img.freepik.com/free-photo/happy-businesswoman-holding-folder_74855-5075.jpg?t=st=1710500433~exp=1710504033~hmac=7fcb867b4226ad62d949b4cd47595bc443fd080d1ef026012897d764d554ec10&w=900',
    },
    {
      title: 'Card 6',
      description: 'Description for Card 2',
      image: 'https://img.freepik.com/free-photo/happy-businesswoman-holding-folder_74855-5075.jpg?t=st=1710500433~exp=1710504033~hmac=7fcb867b4226ad62d949b4cd47595bc443fd080d1ef026012897d764d554ec10&w=900',
    },
    // Add more cards as needed
  ];*/
  return (
    <div style={{width:"100%"}}>
      <img className='cover-page' src={coverpage} alt="cover page "/>
      <div className='ceo-word'>
        <p className='title'>Word of Our CEO</p>
        <p className='word'>As a seasoned industry leader, our company boasts extensive expertise and a proven track record in providing top-notch services and comprehensive training solutions</p>
      </div>
      <img className='cover-page' src={joinus} alt="cover page "/>

    </div>
  );
}