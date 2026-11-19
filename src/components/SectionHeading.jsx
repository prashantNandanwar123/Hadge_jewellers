import Reveal from './Reveal.jsx';

export default function SectionHeading({ title, text, align = 'center', light = false }) {
  const center = align === 'center';
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      <h2 className={`text-4xl leading-tight md:text-5xl ${light ? 'text-ivory' : 'text-maroon-800'}`}>{title}</h2>
      <div className={`mt-5 flex items-center gap-3 ${center ? 'justify-center' : ''}`} aria-hidden="true">
        <span className="h-px w-12 bg-gold-500" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
        <span className="h-px w-12 bg-gold-500" />
      </div>
      {text && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-ivory/75' : 'text-ink/70'}`}>{text}</p>}
    </Reveal>
  );
}
