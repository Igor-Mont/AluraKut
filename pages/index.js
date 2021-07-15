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
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'felipefialho',
    'marcobrunodev'
  ];
  
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
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((v, i) => (
                <li>
                <a href={`/users/${v}`} key={v}>
                  <img src={`https://github.com/${v}.png`} />
                  <span>{v}</span>
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
