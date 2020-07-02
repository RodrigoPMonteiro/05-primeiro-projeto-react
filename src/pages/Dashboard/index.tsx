import React from 'react';

import { Title } from './styles';
// nesse formato de arrow function podemos usar tipagem
// FC --> Function Component
const Dashboard: React.FC = () => {
  return <Title>Explore repositórios no GitHub</Title>;
};

export default Dashboard;
