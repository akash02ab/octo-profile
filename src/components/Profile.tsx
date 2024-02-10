import Icon from "./Icons";
import style from "./style/profile.style";

interface PropType {
  user: {
    avatar_url?: string,
    name?: string,
    login?: string,
    html_url?: string,
    company?: string,
    location?: string,
    created_at?: string,
    public_repos?: number,
    followers?: number,
    following?:number
  }
};

export default function Profile({ user }: PropType) {
  return (
    <section className={style.profileSection}>
      {user.avatar_url && (
        <picture className={style.avatar}>
          <img src={user.avatar_url} alt="avatar" className={style.picture}/>
        </picture>
      )}
      {user.name && <h1 className={style.name}>{user.name}</h1>}
      {user.login && (
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className={style.id}>
          @{user.login}
        </a>
      )}
      <div className={style.infoWrapper}>
        {user.company && (
          <span className={style.info}>
            <Icon name="briefcase" className={style.info_icon} />
            {user.company}
          </span>
        )}
        {user.location && (
          <span className={'gap-1' + style.info}>
            <Icon name="location" className={style.info_icon} />
            {user.location}
          </span>
        )}
        {user.created_at && (
          <span className={style.info}>
            <Icon name="calendar" className={style.info_icon} />
            Joined {new Date(user.created_at).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
        )}
      </div>
      <div className={style.statWrapper}>
        <div className={style.stat}>
          <span className={style.stat_num}>{user.public_repos && user.public_repos.toLocaleString()}</span>
          <span className={style.stat_text}>Repositories</span>
        </div>
        <div className={style.stat}>
          <span className={style.stat_num}>{user.followers && user.followers.toLocaleString()}</span>
          <span className={style.stat_text}>Followers</span>
        </div>
        <div className={style.stat}>
          <span className={style.stat_num}>{user.following && user.following.toLocaleString()}</span>
          <span className={style.stat_text}>Following</span>
        </div>
      </div>
    </section>
  )
}