import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Heart, MapPin, MessageCircle, Navigation, Phone, Instagram, Sparkles, Star, X } from "lucide-react";
import whatsappAsset from "@/assets/whatsapp.png.asset.json";
import logoAsset from "@/assets/marilia-santana-logo.png.asset.json";
import portraitAsset from "@/assets/marilia-santana-retrato.png.asset.json";
import clinicVideo from "@/assets/marilia-clinica.mp4.asset.json";
import clinicPoster from "@/assets/marilia-clinica-capa.jpg.asset.json";
import fullFaceAsset from "@/assets/marilia-full-face.png.asset.json";
import rejuvenescimentoAsset from "@/assets/marilia-rejuvenescimento-final.png.asset.json";
import botoxAsset from "@/assets/marilia-botox-final.png.asset.json";
import flacidezAsset from "@/assets/marilia-flacidez.png.asset.json";
import preenchimentoAsset from "@/assets/marilia-preenchimento.png.asset.json";
import bioestimuladorAsset from "@/assets/marilia-bioestimulador.png.asset.json";
import fiosAsset from "@/assets/marilia-fios.png.asset.json";
import peelingsAsset from "@/assets/marilia-peelings.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Marília Santana | Harmonização Facial Full Face" },
      { name: "description", content: "Conheça o método Face Lift 3D da Dra. Marília Santana e descubra uma abordagem personalizada para rejuvenescimento e harmonização facial." },
      { property: "og:title", content: "Dra. Marília Santana | Face Lift 3D" },
      { property: "og:description", content: "Rejuvenescimento facial e harmonização Full Face com naturalidade, elegância e planejamento individual." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://dramariliasantana.lovable.app/__l5e/assets-v1/b86b2fdf-63ad-4f21-a6f0-37eeb5c1652e/compartilhamento-marilia-santana.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://dramariliasantana.lovable.app/__l5e/assets-v1/b86b2fdf-63ad-4f21-a6f0-37eeb5c1652e/compartilhamento-marilia-santana.png" },
      { name: "theme-color", content: "#a8843e" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5568992588542";
const INSTAGRAM = "https://www.instagram.com/dra.mariliasantana/";
const ADDRESS = "Rua São Mateus, 81 — Alto Alegre";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const MAP = "https://www.google.com/maps/search/?api=1&query=" + MAP_QUERY;

const procedures = [
  { title: "Harmonização Facial Full Face", text: "Planejamento global da face para valorizar proporções, contornos e equilíbrio, respeitando a identidade de cada paciente.", image: fullFaceAsset.url },
  { title: "Rejuvenescimento Facial", text: "Abordagem personalizada para cuidar dos sinais do envelhecimento e buscar uma aparência descansada e natural.", image: rejuvenescimentoAsset.url },
  { title: "Toxina Botulínica (Botox)", text: "Tratamento de linhas de expressão com indicação, pontos de aplicação e planejamento definidos após avaliação.", image: botoxAsset.url },
  { title: "Preenchimento Facial e Labial", text: "Técnica utilizada para tratar pontos específicos, valorizar contornos e buscar harmonia de acordo com cada rosto.", image: preenchimentoAsset.url },
  { title: "Bioestimuladores de Colágeno", text: "Protocolos voltados ao estímulo de colágeno e à melhora gradual da firmeza, conforme avaliação individual.", image: bioestimuladorAsset.url },
  { title: "Fios de Colágeno", text: "Cuidado complementar dentro de um plano individualizado para trabalhar a qualidade e a aparência da pele.", image: fiosAsset.url },
  { title: "Peelings e Qualidade da Pele", text: "Tratamentos escolhidos conforme as características da pele e os objetivos de textura, viço e uniformidade.", image: peelingsAsset.url },
  { title: "Tratamentos para Flacidez", text: "Estratégias personalizadas para cuidar da firmeza facial e dos sinais do envelhecimento.", image: flacidezAsset.url },
];

const faqs = [
  ["O que é o método Face Lift 3D?", "É o método próprio da Dra. Marília Santana, estruturado em três dimensões: reestruturação facial, estímulo de colágeno e melhora da firmeza, e qualidade da pele. O plano é desenvolvido após avaliação individual."],
  ["O Face Lift 3D é igual para todas as pacientes?", "Não. Cada rosto tem características, necessidades e objetivos diferentes. A avaliação orienta a construção de um protocolo personalizado."],
  ["Quais procedimentos são realizados?", "Harmonização Full Face, rejuvenescimento facial, toxina botulínica, preenchimentos facial e labial, bioestimuladores de colágeno, fios de colágeno, peelings e tratamentos para flacidez e qualidade da pele."],
  ["Como faço para agendar uma avaliação?", "Clique em qualquer botão de WhatsApp do site para falar diretamente com a equipe e consultar as possibilidades de agendamento."],
  ["Onde fica a clínica?", ADDRESS + ". Para abrir a localização, utilize o botão Ver no mapa."],
  ["Os resultados são iguais para todas as pessoas?", "Não. A resposta aos procedimentos varia de acordo com as características individuais, a indicação e o plano realizado. As possibilidades e os limites são conversados durante a avaliação."],
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const goWhatsapp = (label: string) => window.open(WHATSAPP + "?text=" + encodeURIComponent("Olá, Dra. Marília! Vim pelo seu site e gostaria de " + label.toLowerCase() + "."), "_blank", "noopener,noreferrer");

  return (
    <main className="jt-site marilia-site">
      <section className="hero" id="inicio">
        <div className="container hero-grid">
          <div className="hero-copy center-hero">
            
            <div className="hero-logo marilia-logo"><img src={logoAsset.url} alt="Marília Santana — Harmonização Full Face" width={300} height={273}/></div>
            <span className="eyebrow">REJUVENESCIMENTO • HARMONIZAÇÃO FULL FACE</span>
            <h1>Realce sua beleza com <em>naturalidade, equilíbrio e elegância.</em></h1>
            <p className="hero-lead">Uma abordagem personalizada de rejuvenescimento facial para mulheres que desejam cuidar de si, valorizar seus traços e preservar aquilo que torna cada rosto único.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma avaliação") }><MessageCircle size={19}/> Agendar avaliação</button>
              <a className="btn btn-outline" href="#face-lift-3d">Conhecer o Face Lift 3D <ArrowRight size={18}/></a>
            </div>
            <div className="hero-trust"><span><Check size={15}/> Planejamento individual</span><span><Check size={15}/> Beleza com naturalidade</span></div>
          </div>
        </div>
      </section>

      <div className="info-marquee" aria-label="Especialidades da Dra. Marília Santana">
        <div className="marquee-track">{[1,2].map((copy) => <div className="marquee-group" key={copy}>
          <span>✦ FACE LIFT 3D</span><span>✦ HARMONIZAÇÃO FULL FACE</span><span>✦ REJUVENESCIMENTO FACIAL</span><span>✦ BIOESTIMULADORES</span><span>✦ TOXINA BOTULÍNICA</span><span>✦ QUALIDADE DA PELE</span><span>✦ BELEZA NATURAL</span>
        </div>)}</div>
      </div>

      <section className="section how-section" id="como-funciona">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">SUA JORNADA DE CUIDADO</span><h2>Um plano pensado para <em>o seu rosto.</em></h2><p>Da primeira conversa ao planejamento, cada etapa é conduzida com atenção às suas características e expectativas.</p></div>
          <div className="steps-grid">
            {[["01","Você compartilha","Conte o que deseja melhorar e quais são seus objetivos."],["02","Avaliação individual","São observadas as características e necessidades do seu rosto."],["03","Plano personalizado","As possibilidades são explicadas e organizadas de forma individual."],["04","Acompanhamento","Você recebe orientações sobre as etapas e os cuidados indicados."]].map(([n,t,d])=><article className="step-card" key={n}><span className="step-number">{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
          <div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("conversar sobre uma avaliação") }><MessageCircle size={18}/> Quero conversar</button></div>
        </div>
      </section>

      <section className="section intro-section" id="marilia">
        <div className="container intro-grid">
          <div className="intro-photo marilia-portrait"><img src={portraitAsset.url} alt="Dra. Marília Santana" loading="lazy" width={768} height={1051}/></div>
          <div className="intro-copy">
            <span className="eyebrow">SOBRE A DRA. MARÍLIA SANTANA</span>
            <h2>Rejuvenescimento que respeita a sua <em>identidade.</em></h2>
            <p>O trabalho da Dra. Marília Santana é dedicado à harmonização facial Full Face e ao rejuvenescimento, com foco em resultados naturais, elegantes e alinhados à individualidade de cada paciente.</p>
            <p>Mais do que olhar para uma característica isolada, a proposta é compreender o rosto como um conjunto. A partir de uma avaliação cuidadosa, são definidos os caminhos e os procedimentos que fazem sentido para cada caso.</p>
            <button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma avaliação com a Dra. Marília") }><MessageCircle size={18}/> Agendar minha avaliação</button>
            <div className="marilia-instagram" id="instagram"><p>Acompanhe conteúdos, procedimentos e novidades da clínica no Instagram.</p><a className="btn btn-outline" href={INSTAGRAM} target="_blank" rel="noreferrer"><Instagram size={18}/> @dra.mariliasantana <ArrowRight size={18}/></a></div>
          </div>
        </div>
      </section>

      <section className="section pain-section">
        <div className="container narrow center">
          <span className="eyebrow">BELEZA SEM PADRÕES</span>
          <h2>Você não precisa mudar quem é para se sentir ainda mais <em>confiante.</em></h2>
          <p>O cuidado facial pode valorizar seus traços sem apagar sua expressão. A proposta é construir um plano que considere sua história, suas proporções e o que faz você se reconhecer no espelho.</p>
          <div className="check-list centered-list">
            <div><Check size={17}/><span>Preservar a identidade e a expressão individual.</span></div>
            <div><Check size={17}/><span>Considerar o rosto de forma global e equilibrada.</span></div>
            <div><Check size={17}/><span>Escolher cada etapa com orientação e planejamento.</span></div>
          </div>
          <button className="btn btn-primary" onClick={() => goWhatsapp("entender as possibilidades para meu rosto") }><MessageCircle size={18}/> Quero saber mais</button>
        </div>
      </section>

      <section className="section camouflage-feature face-lift-section" id="face-lift-3d">
        <div className="container camouflage-feature-grid">
          <div className="camouflage-feature-copy">
            <span className="eyebrow">MÉTODO EXCLUSIVO</span>
            <h2>Face Lift 3D: uma visão completa do <em>rejuvenescimento facial.</em></h2>
            <p>Um método próprio que organiza o cuidado facial em três dimensões complementares. A partir de uma avaliação individual, a Dra. Marília desenvolve um protocolo personalizado, considerando as necessidades e os objetivos de cada paciente.</p>
          </div>
          <div className="camouflage-feature-bottom">
            <div><span className="camouflage-feature-icon"><Sparkles size={20}/></span><strong>01. Reestruturação facial</strong><p>Olhar global para proporções, contornos e pontos de suporte, respeitando a anatomia e a identidade do rosto.</p></div>
            <div><span className="camouflage-feature-icon"><Heart size={20}/></span><strong>02. Estímulo de colágeno e firmeza</strong><p>Estratégias individualizadas para estimular colágeno e cuidar da firmeza e sustentação da pele.</p></div>
            <div><span className="camouflage-feature-icon"><Star size={20}/></span><strong>03. Qualidade da pele</strong><p>Cuidados direcionados à textura, ao viço e à aparência saudável da pele.</p></div>
          </div>
          <button className="btn btn-primary" onClick={() => goWhatsapp("conhecer o método Face Lift 3D e agendar uma avaliação") }><MessageCircle size={18}/> Quero conhecer o Face Lift 3D</button>
        </div>
      </section>

      <section className="section procedures-section" id="procedimentos">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">PROCEDIMENTOS</span><h2>Cuidado facial em cada detalhe, com <em>planejamento.</em></h2><p>Conheça as principais possibilidades de tratamento. A indicação e a combinação de técnicas dependem sempre de avaliação individual.</p></div>
          <div className="procedure-window"><div className="procedure-track">
            {[...procedures,...procedures].map(({title,text,image},i)=><article className="procedure-card has-image" key={title + i}>
              {image ? <img className="procedure-photo" src={image} alt={"Imagem ilustrativa de " + title} loading="lazy"/> : <div className="procedure-photo procedure-photo-empty" aria-hidden="true"/>}
              <div className="procedure-content"><div className="procedure-icon"><Sparkles size={21}/></div><span className="procedure-number">{String((i%procedures.length)+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></div>
            </article>)}
          </div></div>
          <div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("consultar os procedimentos e agendar uma avaliação") }><MessageCircle size={18}/> Consultar procedimentos</button></div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <div className="section-heading center"><span className="eyebrow">A PROPOSTA DE CUIDADO</span><h2>Três pilares para valorizar sua <em>beleza natural.</em></h2><p>Uma abordagem que une planejamento, individualidade e atenção à qualidade da pele.</p></div>
          <div className="benefit-grid">
            <article><span>01</span><Heart/><h3>Naturalidade</h3><p>Respeito às características e à expressão que fazem parte da sua identidade.</p></article>
            <article><span>02</span><Sparkles/><h3>Planejamento Full Face</h3><p>Uma visão integrada do rosto, em vez de decisões isoladas para cada região.</p></article>
            <article><span>03</span><Star/><h3>Personalização</h3><p>Um protocolo construído de acordo com suas necessidades e objetivos.</p></article>
            <article><span>04</span><Check/><h3>Orientação</h3><p>Informações claras sobre possibilidades, cuidados e limites de cada procedimento.</p></article>
          </div>
          <div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("marcar uma avaliação personalizada") }><MessageCircle size={18}/> Marcar avaliação</button></div>
        </div>
      </section>

      <section className="section clinic-video-section" id="video-clinica">
        <div className="container clinic-video-grid">
          <div className="clinic-video-copy"><span className="eyebrow">CONHEÇA NOSSO ESPAÇO</span><h2>Um ambiente preparado para receber <em>você.</em></h2><p>Mais do que um espaço de atendimento, a clínica foi pensada para que cada paciente se sinta acolhida desde a chegada. Um ambiente reservado, confortável e cuidadosamente organizado para tornar sua experiência tranquila e especial.</p><p>É aqui que começa uma jornada de cuidado individualizado: com atenção aos detalhes, conversa transparente e respeito ao tempo e às necessidades de cada pessoa.</p><button className="btn btn-primary" onClick={() => goWhatsapp("conhecer a clínica e agendar uma visita") }><MessageCircle size={19}/> Quero conhecer a clínica</button></div>
          <div className="marilia-clinic-video"><video controls playsInline preload="metadata" poster={clinicPoster.url} aria-label="Vídeo de apresentação da clínica da Dra. Marília Santana"><source src={clinicVideo.url} type="video/mp4"/></video></div>
        </div>
      </section>

      <section className="section reviews-section marilia-reviews" id="avaliacoes">
        <div className="container">
          <div className="reviews-heading"><span className="eyebrow">DEPOIMENTOS</span><h2>Cuidado em cada etapa, com atenção aos <em>seus objetivos.</em></h2></div>
          <div className="review-marquee" aria-label="Depoimentos">
            <div className="review-marquee-track">
              {[1,2].map((copy) => <div className="review-marquee-group" key={copy}>
                <article className="review-card"><div className="review-stars" aria-label="Cinco estrelas">★★★★★</div><p>“Eu queria suavizar algumas marcas de expressão, mas tinha receio de perder minha naturalidade. Na avaliação, a Dra. Marília ouviu o que eu buscava, explicou a proposta da toxina botulínica e conversou comigo sobre os cuidados. Gostei de entender cada etapa antes de decidir.”</p><div className="review-author"><span className="review-avatar" aria-hidden="true"></span><div className="review-author-copy"><strong>Ana Carolina</strong></div></div></article>
                <article className="review-card"><div className="review-stars" aria-label="Cinco estrelas">★★★★★</div><p>“O que mais gostei foi a atenção aos detalhes. Eu tinha dúvidas sobre flacidez e qualidade da pele, e recebi explicações claras sobre as possibilidades de bioestimuladores, o tempo de resposta e a importância do acompanhamento. Me senti acolhida e respeitada.”</p><div className="review-author"><span className="review-avatar" aria-hidden="true"></span><div className="review-author-copy"><strong>Mariana Oliveira</strong></div></div></article>
                <article className="review-card"><div className="review-stars" aria-label="Cinco estrelas">★★★★★</div><p>“Eu procurava um cuidado mais completo, mas sem exageros. A proposta Full Face me ajudou a entender que o planejamento considera o rosto como um todo, e não apenas uma região. A conversa foi cuidadosa, com expectativas realistas e explicação dos procedimentos indicados para o meu caso.”</p><div className="review-author"><span className="review-avatar" aria-hidden="true"></span><div className="review-author-copy"><strong>Camila Rodrigues</strong></div></div></article>
                <article className="review-card"><div className="review-stars" aria-label="Cinco estrelas">★★★★★</div><p>“Desde o primeiro contato, fui tratada com muita atenção. Antes de qualquer procedimento, pude conversar sobre minhas expectativas, tirar dúvidas e receber orientações sobre os cuidados posteriores. Para mim, essa transparência fez toda a diferença na experiência.”</p><div className="review-author"><span className="review-avatar" aria-hidden="true"></span><div className="review-author-copy"><strong>Juliana Martins</strong></div></div></article>
              </div>)}
            </div>
          </div>
          <div className="section-action center"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma avaliação") }><MessageCircle size={18}/> Quero agendar</button></div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div className="faq-intro"><span className="eyebrow">PERGUNTAS FREQUENTES</span><h2>Ficou com alguma <em>dúvida?</em></h2><p>Reunimos algumas informações para ajudar você a conhecer a proposta de atendimento.</p><button className="btn btn-primary" onClick={() => goWhatsapp("tirar uma dúvida") }><MessageCircle size={18}/> Falar pelo WhatsApp</button></div>
          <div className="faq-list">{faqs.map(([q,a],i)=><div className={openFaq===i?"faq-item active":"faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq===i?null:i)}><span>{q}</span>{openFaq===i?<X size={19}/>:<ChevronDown size={19}/>}</button>{openFaq===i&&<div className="faq-answer"><p>{a}</p></div>}</div>)}</div>
        </div>
      </section>

      <section className="section location-section" id="localizacao">
        <div className="container location-grid">
          <div className="map-card"><iframe title="Localização da clínica da Dra. Marília Santana" src={"https://www.google.com/maps?q=" + MAP_QUERY + "&output=embed"} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
          <div className="location-copy"><span className="eyebrow">LOCALIZAÇÃO</span><h2>Será um prazer receber <em>você.</em></h2>
            <div className="address"><MapPin size={23}/><div><strong>Rua São Mateus, 81</strong><span>Alto Alegre</span><small>Atendimento mediante agendamento</small></div></div>
            <div className="location-info"><div><Phone size={19}/><span><strong>WhatsApp</strong>+55 68 99258-8542</span></div><div><Clock3Fallback/><span><strong>Atendimento</strong>Com horário agendado</span></div></div>
            <div className="location-actions"><button className="btn btn-primary" onClick={() => goWhatsapp("agendar minha avaliação") }><MessageCircle size={18}/> Agendar pelo WhatsApp</button><a className="btn btn-outline" href={MAP} target="_blank" rel="noreferrer"><Navigation size={17}/> Ver no mapa</a></div>
          </div>
        </div>
      </section>

      <section className="final-cta"><div className="final-glow"/><div className="container center"><span className="eyebrow light">SEU PRÓXIMO PASSO COMEÇA AQUI</span><h2>Cuide de você com um plano pensado para sua beleza.</h2><p>Agende uma avaliação com a Dra. Marília Santana e conheça as possibilidades do método Face Lift 3D.</p><button className="btn btn-primary" onClick={() => goWhatsapp("agendar uma avaliação") }><MessageCircle size={18}/> Quero agendar minha avaliação</button></div></section>

      <footer className="footer"><div className="container"><div className="footer-grid">
        <div className="footer-brand"><img className="footer-marilia-logo" src={logoAsset.url} alt="Dra. Marília Santana — Harmonização Facial Full Face" loading="lazy"/><p>Rejuvenescimento facial com naturalidade, elegância e atenção à individualidade de cada paciente.</p></div>
        <div><h4>Navegação</h4><a href="#inicio">Início</a><a href="#face-lift-3d">Face Lift 3D</a><a href="#procedimentos">Procedimentos</a><a href="#video-clinica">Conheça a clínica</a></div>
        <div><h4>Contato</h4><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={15}/> +55 68 99258-8542</a><a href={INSTAGRAM} target="_blank" rel="noreferrer"><Star size={15}/> @dra.mariliasantana</a><span><MapPin size={15}/> Rua São Mateus, 81 • Alto Alegre</span></div>
      </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Dra. Marília Santana. Todos os direitos reservados.</span><span>Harmonização Facial Full Face • Face Lift 3D</span></div></div></footer>

      <a className="floating-wa" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar com a Dra. Marília Santana pelo WhatsApp"><img src={whatsappAsset.url} alt=""/></a>
    </main>
  );
}

function Clock3Fallback() {
  return <span className="location-clock-mark">◷</span>;
}
