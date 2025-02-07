import './estilo.css';


const  textOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function    OpcoesHeader() {
    return (
        <ul className='opcoes'> 
          {textOpcoes.map((texto) => ( 
            <li className='opcao'><p>{texto}</p></li>
          ))} 
        </ul>
    );
}
export default OpcoesHeader;
 /* map é uma função que percorre um array e 
 retorna um novo array com as modificações que 
 você deseja  */