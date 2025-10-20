import './App.css'

function Profile() {
  // Step 6: Display Data with Curly Braces - Using JavaScript expressions inside JSX
  const name = 'Katherine Johnson';
  const bio = '`Girls are capable of doing everything men are capable of doing. Sometimes they have more imaginations than men.`';
  const imageAlt = 'Katherine Johnson';

  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
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

export default Profile;