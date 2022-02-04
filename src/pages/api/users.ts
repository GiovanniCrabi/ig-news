import { NextApiRequest, NextApiResponse }  from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1 , name: 'Giovanni'},
    {id: 2, name: 'Bruna' },
    {id: 3, name: 'Rafael'},
    {id: 4, name: 'Giovanna'},
  ]
  return response.json(users)
};