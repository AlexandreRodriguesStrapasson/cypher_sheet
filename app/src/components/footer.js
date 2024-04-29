import Style from "../style/imgHome.module.css"

function footer(){
    return(
        <div className={Style.footer}> 
            <p>Projeto para fins didáticos</p>
            <p>Todas as informações, imagens e demais conteudos são de origem e propriedade do Cypher System</p>
            <p>Para mais informações acesse o site</p>            
            <p><a href="https://cypher-system.com/">Cypher System</a></p>
        </div>       
    )
}

export default footer;