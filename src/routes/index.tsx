import { createFileRoute } from "@tanstack/react-router";
import matheusPhoto from "@assets/matheus-ariel.jpg";
import matheusSobrePhoto from "@assets/matheus-ariel-sobre.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matheus Ariel | Psicólogo Clínico - CRP 24/06291" },
      {
        name: "description",
        content:
          "Matheus Ariel, psicólogo clínico (CRP 24/06291). Atendimento em Análise do Comportamento e Terapias",
      },
      {
        property: "og:title",
        content: "Matheus Ariel | Psicólogo Clínico - CRP 24/06291",
      },
      {
        property: "og:description",
        content:
          "Análise do Comportamento e Terapias Contextuais. Atendimento psicológico com base em evidências científicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_LINK = "https://wa.me/5569993834265";
const INSTAGRAM_LINK = "https://www.instagram.com/psi.matheusariel/";

const abordagens = [
  {
    title: "Análise do Comportamento",
    text: "Compreensão dos comportamentos a partir da relação entre a pessoa e o seu contexto de vida, com foco em mudanças possíveis e sustentáveis.",
  },
  {
    title: "Terapias Contextuais",
    text: "Trabalho com flexibilidade psicológica, valores pessoais e formas de lidar com pensamentos e emoções difíceis no dia a dia.",
  },
  {
    title: "Prática baseada em evidências",
    text: "Intervenções acompanhadas ao longo do processo, construídas em conjunto e ajustadas às demandas de cada pessoa.",
  },
];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-navy-deep/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
          <span className="font-display text-xl text-navy-deep">Matheus Ariel</span>
          <span className="crp-line-light hidden sm:inline">Psicólogo Clínico • CRP 24/06291</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-8 text-base text-navy-deep/70">
            <a href="#inicio" className="hover:text-navy-deep transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-navy-deep transition-colors">
              Sobre
            </a>
            <a href="#abordagem" className="hover:text-navy-deep transition-colors">
              Abordagem
            </a>
            <a href="#contato" className="hover:text-navy-deep transition-colors">
              Contato
            </a>
          </nav>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-navy-deep text-cream text-base font-semibold tracking-wide transition-all hover:bg-navy-light hover:scale-[1.02] shadow-[0_8px_30px_-10px_rgba(10,17,40,0.25)]"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] glow-blue -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[36rem] h-[36rem] glow-indigo -ml-64 -mb-64" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[90vh]">
          <div className="flex-1 flex flex-col justify-center py-32 lg:py-40 lg:pr-24">
            <span className="crp-line-light mb-10">Psicoterapia Clínica</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-navy-deep leading-[1.05] mb-10 max-w-3xl">
              Um espaço para compreender seus comportamentos, emoções e escolhas.
            </h1>
            <p className="text-xl md:text-2xl text-navy-deep/60 leading-relaxed mb-14 max-w-2xl font-light">
              Atendimento psicológico clínico pautado em Análise do Comportamento e
              Terapias Contextuais, com escuta cuidadosa e respeito ao tempo de cada
              pessoa.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="group hidden md:inline-flex items-center gap-3 px-12 py-6 bg-navy-deep text-cream font-semibold text-lg tracking-wide transition-all hover:bg-navy-light hover:scale-[1.02] shadow-[0_16px_50px_-14px_rgba(10,17,40,0.25)]"
              >
                Agendar consulta
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#sobre"
                className="text-navy-deep border-b border-navy-deep/20 pb-1 text-base font-medium hover:border-navy-deep transition-all"
              >
                Sobre mim
              </a>
            </div>
            <p className="mt-6 text-sm text-navy-deep/40 tracking-wide">
              Matheus Ariel • Psicólogo Clínico • CRP 24/06291
            </p>
          </div>

          <div className="flex-1 relative min-h-[560px] lg:min-h-[90vh] overflow-hidden">
            <img
              src={matheusPhoto}
  alt="Matheus Ariel — Psicólogo Clínico"
  className="photo-cinematic absolute inset-0 h-full w-full object-top"
/>
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/30 to-transparent" />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_-2px_0_60px_rgba(248,245,240,0.12)]" />

            <div className="absolute bottom-12 right-6 left-6 lg:left-auto lg:right-12">
              <div className="glass-card p-6 max-w-xs ml-auto">
                <p className="crp-line-light mb-1">Psicólogo Clínico</p>
                <p className="font-display text-xl text-navy-deep mb-2">Matheus Ariel</p>
                <p className="text-navy-deep/50 text-sm leading-relaxed">
                  CRP 24/06291
                  <br />
                  Análise do Comportamento
                  <br />
                  Terapias Contextuais
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="bg-warm text-navy-deep py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden bg-navy-deep">
            <img
              ssrc={matheusSobrePhoto}
  alt="Matheus Ariel — Psicólogo Clínico"
  className="photo-cinematic h-full w-full"
            />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-navy-accent mb-4 font-semibold">
              Sobre mim
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-10">
              Olá, eu sou Matheus Ariel. Psicólogo Clínico • CRP 24/06291
            </h2>
            <div className="space-y-8 text-xl md:text-2xl leading-relaxed text-navy-light font-light">
              <p>
                Sou Matheus Ariel, psicólogo clínico (CRP 24/06291), e meu trabalho é
                ajudar pessoas a compreenderem seus comportamentos, emoções e padrões
                de vida por meio de intervenções fundamentadas em evidências
                científicas.
              </p>
              <p>
                O processo terapêutico é construído em conjunto, respeitando a
                história, o contexto e os valores de cada pessoa. Não existe um
                caminho único: existe um percurso possível, discutido de forma clara
                e transparente ao longo do acompanhamento.
              </p>
              <p>
                O atendimento é conduzido de acordo com o Código de Ética Profissional
                do Psicólogo (CFP), com sigilo e responsabilidade técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Abordagem() {
  return (
    <section id="abordagem" className="bg-cream py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <p className="crp-line-light mb-4">Abordagem</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-navy-deep leading-tight mb-20 max-w-2xl">
          Como o trabalho clínico acontece
        </h2>
        <div className="grid gap-14 md:grid-cols-3">
          {abordagens.map((item) => (
            <article key={item.title} className="border-t border-navy-deep/10 pt-10">
              <h3 className="text-2xl md:text-3xl text-navy-deep mb-5">{item.title}</h3>
              <p className="text-lg md:text-xl leading-relaxed text-navy-deep/60 font-light">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="bg-warm text-navy-deep py-32 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-navy-accent mb-4 font-semibold">
            Contato
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-10">
            Se desejar, podemos conversar sobre o atendimento.
          </h2>
          <p className="text-xl md:text-2xl text-navy-light leading-relaxed mb-14 font-light">
            Entre em contato pelo WhatsApp ou Instagram para tirar dúvidas ou agendar
            uma conversa inicial.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-3 px-12 py-6 bg-navy-deep text-cream font-semibold text-lg tracking-wide transition-all hover:bg-navy-light hover:scale-[1.02] shadow-[0_16px_50px_-14px_rgba(10,17,40,0.25)]"
            >
              Agendar consulta
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="px-10 py-6 border border-navy-deep text-navy-deep font-semibold text-base tracking-wide transition-all hover:bg-navy-deep hover:text-cream"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-cream/10">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="font-display text-3xl text-cream">Matheus Ariel</p>
            <p className="crp-line-light mt-3">
              Psicólogo Clínico • CRP 24/06291
            </p>
            <p className="mt-6 text-base text-cream/50 font-light leading-relaxed">
              Análise do Comportamento
              <br />
              Terapias Contextuais
            </p>
          </div>
          <div className="space-y-8 text-base">
            <div>
              <p className="crp-line-light">WhatsApp</p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-cream/50 hover:text-cream transition-colors font-light"
              >
                (69) 9 9383-4265
              </a>
            </div>
            <div>
              <p className="crp-line-light">Instagram</p>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-block text-cream/50 hover:text-cream transition-colors break-all font-light"
              >
                https://www.instagram.com/psi.matheusariel/
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-6 py-8 text-xs text-cream/40 font-light">
          © 2026 Matheus Ariel. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer noopener"
      className="md:hidden fixed bottom-6 left-6 right-6 z-50 flex items-center justify-center gap-3 px-6 py-4 bg-navy-deep text-cream font-semibold text-lg tracking-wide shadow-[0_12px_40px_-8px_rgba(0,0,0,0.3)]"
    >
      Agendar consulta
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-cream pb-28 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Abordagem />
        <Contato />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
