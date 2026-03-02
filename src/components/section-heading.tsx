function SectionHeading({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  const formattedNumber = String(number).padStart(2, "0");
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-wider whitespace-nowrap">
        <span className="font-mono text-primary mr-2">{formattedNumber}.</span>
        {title}
      </h2>
      <div className="hidden md:block h-px bg-muted-foreground/30 w-full max-w-[300px]" />
    </div>
  );
}

export default SectionHeading;
