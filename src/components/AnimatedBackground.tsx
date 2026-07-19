export default function AnimatedBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="data-grid absolute inset-0 opacity-50" />
            <svg className="absolute right-[-12rem] top-20 h-[44rem] w-[44rem] opacity-[0.12]" viewBox="0 0 700 700">
                <circle cx="350" cy="350" r="280" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="350" cy="350" r="210" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="350" cy="350" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M70 350 C180 170 280 510 350 350 S520 200 630 350" fill="none" stroke="#ff4d2f" strokeWidth="5" />
                <path d="M70 420 C190 520 240 240 350 350 S510 500 630 280" fill="none" stroke="#2457ff" strokeWidth="3" />
                {[70, 140, 210, 280, 350, 420, 490, 560, 630].map((x, index) => (
                    <circle key={x} cx={x} cy={index % 2 === 0 ? 350 : 420} r="5" fill="#15171b" />
                ))}
            </svg>
            <div className="absolute bottom-8 left-8 hidden font-code text-[10px] uppercase tracking-[0.2em] text-foreground/30 lg:block">
                Evidence field · x: model rigor · y: delivery
            </div>
        </div>
    );
}
