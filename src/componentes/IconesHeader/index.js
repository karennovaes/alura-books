import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
            <Icone><img alt='icones' src={icone}></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader

 /* map é uma função que percorre um array e 
 retorna um novo array com as modificações que 
 você deseja  */