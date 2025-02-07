import './estilo.css';

import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';


const icones = [perfil, sacola];

function   IconesHeader() {
    return (
        <ul className='icones'> 
          {icones.map((icone) => ( 
            <li className='icone'><img alt='icone' src={icone}></img></li>
          ))} 
                    
        </ul>
    );
}
export default IconesHeader;

 /* map é uma função que percorre um array e 
 retorna um novo array com as modificações que 
 você deseja  */