import { useEffect, useState } from 'react'
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet, AlurakutProfileSidebarMenuDefault }  from '../src/lib/AluraKutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar({ gitHubUser }) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${gitHubUser}.png`} style={{borderRadius: '8px'}} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${gitHubUser}`}>
          @{gitHubUser}
        </a>
      </p>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const gitHubUser = 'Igor-Mont';
  const [followers, setFollowers] = useState([]);
  const pessoasComunidade = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
  ]
  const minhasComunidades = [
    {
      id: 1,
      title: 'Jogatina',
      image: 'data:image/jpeg;base64,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',
      link: 'https://discord.com'
    },
    {
      id: 2,
      title: 'Resenha',
      image: 'data:image/png;base64,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',
      link: 'https://web.whatsapp.com'
    },
    {
      id: 3,
      title: 'GitHub',
      image: 'data:image/png;base64,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',
      link: 'https://github.com/Igor-Mont'
    },
  ]
  const [comunidades, setComunidades] = useState(minhasComunidades);
  useEffect(() => {
    (async function followers() {
      const response = await fetch('https://api.github.com/users/Igor-Mont/followers');
      const data = await response.json();
      setFollowers(data);
    })();
  }, [])

  
  return (
    <>
      <AlurakutMenu githubUser={gitHubUser} />
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

          <Box>
            <div className="info">
              <h2 className="subTitle">O que você deseja fazer?</h2>
              <div>i</div>
            </div>
            <form 
              onSubmit={(e) => {
                e.preventDefault()
                const dadosDoForm = new FormData(e.target)
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                  link: dadosDoForm.get('link')
                }
                setComunidades([...comunidades, comunidade])
              }}
            >
              <div>
                <input 
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title" 
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma URL para servir de capa"
                  name="image" 
                  aria-label="Coloque uma Url para servir de capa?"
                />
              </div>
              <div>
                <input 
                  placeholder="Coloque uma link para a comunidade"
                  name="link" 
                  aria-label="Coloque uma link para a comunidade"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Seguidores ({followers.length})
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
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
              <ul>
                {comunidades.map((v, i) => (
                  <li key={v.id}>
                    <a href={v.link} target="_blank">
                      <img src={v.image ? v.image : `data:image/jpeg;base64,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`} />
                      <span>{v.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da Comunidade ({pessoasComunidade.length})
              </h2>
              <ul>
                {pessoasComunidade.map((v, i) => (
                  <li key={v}>
                    <a href={`/users/${v}`} target="_blank">
                      <img src={`https://github.com/${v}.png`}/>
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
