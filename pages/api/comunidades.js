import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {
  if(request.method === 'POST') {
    const TOKEN = process.env.FULL_ACESS_TOKEN;
    const client = new SiteClient(TOKEN);
    const registroCriado = await client.items.create({
      itemType: '975381',
      ...request.body,
    })
    console.log(registroCriado)
    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado
    })

    return;
  }
}