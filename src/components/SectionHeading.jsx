export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}><span className="eyebrow">{eyebrow}</span><h2 className="section-title">{title}</h2>{text && <p className="body-copy mt-4">{text}</p>}</div>
}
