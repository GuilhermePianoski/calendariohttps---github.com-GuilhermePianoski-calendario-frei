import Cabecalho from '../../components/cabecalho'
import './index.scss'

export default function PaginaoEncontrado() {
    return(
      <div className='nao-encontrado'>

        <Cabecalho />
        <section className='tu'>
            <div className='texto'>
                <h2>Conteúdos</h2>
            </div>
              
          <img src='/assets/images/naoencontrado.png' />
      
    
        </section>
        </div>
    )
    
}
