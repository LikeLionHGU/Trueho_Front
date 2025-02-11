import ProfileCard from '../components/ProfileCard.js';
import styles from '../styles/grid.css'

const profiles = [
    {
      id: 1,
      nickname: '사용자 닉네임',
      title: '콘텐츠홍보디자인 / 웹 디자이너',
      imageUrl: '/assets/images/user1.jpg',
      major: 'design',
    },
    {
      id: 2,
      nickname: '다른 사용자',
      title: 'UI/UX 디자이너',
      imageUrl: '/assets/images/user2.jpg',
      major: 'design',
    },
  ];

  
function HansumPage() {
  return (
    <div className="hansum-page">
      <div className="card-grid">
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            nickname={profile.nickname}
            title={profile.title}
            imageUrl={profile.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default HansumPage;
