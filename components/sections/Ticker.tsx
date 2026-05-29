import { TICKER_ITEMS } from '@/data'

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-[var(--accent)] py-2.5 mb-0">
      <div className="ticker-scroll">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <span
            key={i}
            className="display-font text-[0.8rem] font-bold text-[var(--black)] shrink-0 after:content-['✦'] after:ml-6 after:-mr-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
