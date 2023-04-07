interface SectionProps {
    title: string;
    color: string;
}

export default function Section({ title, color }: SectionProps) {
    return (
        <>
            <div className={`{h-[129px] w-[100%] pl-[20px] lg:pl-[200px] py-[35px] bg-gradient-to-b from-${color} via-${color} to-white}`}>
                <h1 className="text-white text-[26px] font-bold">{title}</h1>
            </div>
        </>
    );
}