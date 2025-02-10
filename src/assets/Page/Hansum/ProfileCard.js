function ProfileCard({ nickname, title, imageUrl }) {
    return (
      <div className="profile-card">
        <div className="profile-image">
          <img src={imageUrl} alt={`${nickname} 사진`} />
        </div>
        <h3>{nickname}</h3>
        <p>{title}</p>
      </div>
    );
  }
  
  export default ProfileCard;
  