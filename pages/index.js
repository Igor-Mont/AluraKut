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
  const [comunidades, setComunidades] = useState([]);
  useEffect(() => {
    (async function followers() {
      const response = await fetch('https://api.github.com/users/Igor-Mont/followers');
      const data = await response.json();
      setFollowers(data);
    })();

    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '43981ec7734cb9a66abb861d1ef3fa',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id 
          title
          imageUrl
          creatorSlug
        }
      }` })
      })
      .then(response => response.json())
      .then(dataFull => {
        const comunidadesDato = dataFull.data.allCommunities;
        setComunidades(comunidadesDato)
      })
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
                  title: dadosDoForm.get('title'),
                  imageUrl: dadosDoForm.get('image'),
                  creatorSlug: gitHubUser
                }

                fetch('/api/comunidades', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(comunidade)
                })
                .then(async (response) => {
                  const data = await response.json();
                  console.log(data)
                  setComunidades([...comunidades, data.registroCriado])
                })

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
                    <a href={`/comunidades/${v.title}`}>
                      <img src={v.imageUrl ? v.imageUrl : `data:image/jpeg;base64,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`} />
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
