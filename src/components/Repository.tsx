import { useEffect, useState } from "react";
import DropDown from "./Dropdown";
import Icon from "./Icons";
import langColors from "@/utils/langColors";
import style from "./style/repository.style";

type Repo = {
  description: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  html_url: string;
  id: number;
  language: string;
  name: string;
  stargazers_count: number;
  size: number;
};

interface PropType {
  repos: Repo[]
};

const sortTypes: string[] = ['stars', 'forks', 'size'];

type Map = Record<typeof sortTypes[number], keyof Repo>;

export default function Repository({ repos }: PropType) {
  const [sortType, setSortType] = useState<typeof sortTypes[number]>(sortTypes[0]);
  const [topRepos, setTopRepos] = useState<Repo[]>([]);

  const getTopRepos = (type: keyof typeof map) => {
    const LIMIT = 9;
    const map: Map = {
      stars: 'stargazers_count',
      forks: 'forks_count',
      size: 'size',
    };
    const sortProperty = map[type];
    const sorted = repos
      .filter(repo => !repo.fork)
      .sort((a, b) => (b[sortProperty] as number) - (a[sortProperty] as number))
      .slice(0, LIMIT);

    setTopRepos(sorted);
  }

  useEffect(() => {
    if (repos.length) getTopRepos(sortType);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType])

  return (
    <section className={style.repoSection}>
      <header className={style.repoHeader}>
        <h2 className={style.repoTitle}>Top Repos</h2>
        <span className={style.repoSubtext}>by</span>
        <DropDown
          items={sortTypes}
          value={sortType}
          onValueChange={setSortType}
        />
      </header>
      <>
        {topRepos.length ? (
          <ul className={style.repos}>
            {topRepos.map((repo) => {
              const language = repo.language || 'Markdown';
              return (
                <li key={repo.id} className="h-full">
                  <a href={repo.html_url} target="_blank" className={style.repo}>
                    <div className={style.repoTop}>
                      <div className={style.repoHead}>
                        <Icon name="repository" className="w-6 h-6" />
                        <h3 className={style.repoName}>{repo.name}</h3>
                      </div>
                      <p className={style.repoDesc}>{repo.description}</p>
                    </div>
                    <div className={style.repoBottom}>
                      <div className={style.repoLeft}>
                        <p className={style.repoStat}>
                          <i
                            style={{ backgroundColor: langColors[language] }}
                            className={style.langCircle}
                          />
                          <span>{language}</span>
                        </p>
                        <p className={style.repoStat}>
                          <Icon name="star" className="w-4 h-4" />
                          <span>{repo.stargazers_count.toLocaleString()}</span>
                        </p>
                        <p className={style.repoStat}>
                          <Icon name="fork" className="w-4 h-4" />
                          <span>{repo.forks.toLocaleString()}</span>
                        </p>
                      </div>
                      <div className="right">
                        <p className={style.repoStat}>{repo.size.toLocaleString()} KB</p>
                      </div>
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        ) : (
            <p>No available repositories!</p>
        )}
      </>
    </section>
  )
}