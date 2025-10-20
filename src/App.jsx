import './App.css'
import eugeniaImg from './assets/eugeniaImg.jpg'
import maryamImg from './assets/maryamImg.jpeg'


function Profile({ name, bio, imageUrl, imageAlt }) {
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="profile-card__image"
        />
      </div>
      <div className="profile-card__body">
        <h2 className="profile-card__name">{name}</h2>
        <i className="profile-card__bio">{bio}</i>
      </div>
    </div>
  );
}

function App() {
  const mathematicians = [
    {
      name: 'Katherine Johnson',
      bio: 'Girls are capable of doing everything men are capable of doing. Sometimes they have more imaginations than men.',
      imageUrl: 'https://i.imgur.com/MK3eW3Am.jpg', // still online
      imageAlt: 'Katherine Johnson'
    },
    {
      name: 'Maryam Mirzakhani',
      bio: 'The beauty of mathematics only shows itself to more patient followers.',
      imageUrl: maryamImg,
      imageAlt: 'Maryam Mirzakhani'
    },
    {
      name: 'Eugenia Cheng',
      bio: 'Mathematics is not about numbers, equations, or algorithms: it’s about understanding.',
      imageUrl: eugeniaImg,
      imageAlt: 'Eugenia Cheng'
    }
  ];

  return (
    <div className="profiles-container">
      {mathematicians.map((m, index) => (
        <Profile
          key={index}
          name={m.name}
          bio={m.bio}
          imageUrl={m.imageUrl}
          imageAlt={m.imageAlt}
        />
      ))}
    </div>
  );
}


export default App;
