import './Home.css';
import coverpage from '../images/codegnan_cover_page.jpg'
import statistics from '../images/statistics.jpeg'
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
      <section className='bgimg'>
       
      </section>
      {/* <div>
          <h1>Card Slider</h1>
          <CardSlider cards={cards} />
        </div> */}


    </div>
  );
}