import { useEffect, useState } from 'react'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet }  from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar({ gitHubUser }) {
  return (
    <Box>
      <img src={`https://github.com/${gitHubUser}.png`} style={{borderRadius: '8px'}} />
    </Box>
  );
}

export default function Home() {
  const gitHubUser = 'Igor-Mont';
  const [followers, setFollowers] = useState([])
  useEffect(() => {
    (async function followers() {
      const response = await fetch('https://api.github.com/users/Igor-Mont/followers');
      const data = await response.json()
      setFollowers(data)
    })();
  }, []);
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: "profileArea"}}>
          <ProfileSideBar gitHubUser={gitHubUser} />
        </div>
        <div className="welcomeArea" style={{gridArea: "welcomeArea"}}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({followers.length})
            </h2>

            <ul>
              {followers.map((v, i) => (
                <li key={v.id}>
                  <a href={`/users/${v.login}`}>
                    <img src={`https://github.com/${v.login}.png`} />
                    <span>{v.login}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
