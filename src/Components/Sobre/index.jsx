import styled from "styled-components";
import { SobreCard, SeguraCards,TextoSobreNos } from "./Sobre.js"
import Rapido from "./icons/rapido.png"
import Cara from "./icons/homem.png"
import Agenda from "./icons/agenda.png"
import Cadeira from "./icons/cadeira.png"



const Sobre =()=>{
    return(
    <>
    <TextoSobreNos> Sobre nós!</TextoSobreNos>

    <SeguraCards>
        <SobreCard className="card">
            <img src={Rapido} className="icones" alt="" />
            <h2>Nosso site foi criado para facilitar sua rotina: escolha seu barbeiro favorito, veja os horários disponíveis e agende seu atendimento em poucos cliques — tudo de forma rápida e prática!</h2>
        </SobreCard>   

        <SobreCard className="card">
                <img src={Cara} className="icones" alt="" />
            <h3>Cuidar do visual deve ser simples. Nossa plataforma conecta você à sua barbearia de confiança com agendamento online rápido e personalizado!</h3>
        </SobreCard>  

        <SobreCard className="card">
            <img src={Agenda} className="icones" alt="" />
            <h4>Esqueça as filas e as esperas! Aqui você agenda seu horário online, recebe confirmação e chega na barbearia com tudo pronto para o seu atendiment!.</h4>
        </SobreCard>  

        <SobreCard className="card">
            <img src={Cadeira} className="icones" alt="" />
            <h5>Aqui, o foco é em você. Por isso, criamos um sistema de agendamento fácil, seguro e transparente, para que cada visita à barbearia seja prática, agradável e totalmente personalizada!</h5>
        </SobreCard>  

    </SeguraCards>
        </>
)
}

export default Sobre;
