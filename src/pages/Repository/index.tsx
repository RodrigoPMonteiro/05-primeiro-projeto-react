import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo , Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}
// nesse formato de arrow function podemos usar tipagem
// FC --> Function Component
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="GitHub Explorer" />
          <Link to="/">
            <FiChevronLeft size={16}/>
            Voltar
          </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7k2qI6TIPHa0KAWDvTTCj3eGGvO7zK3ZUMw&usqp=CAU"
            alt="Pockemon"
          />
          <div>
            <strong>Repokemon</strong>
            <p>Descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link
           to="/aafdafsd"
          >
          <div>
            <strong>gfsfgsgfs</strong>
            <p>gsgsfgfs</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
    );
};

export default Repository;
