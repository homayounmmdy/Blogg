interface Props {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  size?: "sm" | "md" | "lg" | "xl";
  textAlign?: "left" | "center" | "right";
}

const Heading = ({
  children,
  className,
  as = "h2",
  size = "md",
  textAlign = 'center',
}: Props) => {
  const HeadingTag = as;

  const Sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };
  return (
    <HeadingTag
      className={`${className} text-${textAlign} font-mono ${Sizes[size]} font-bold uppercase tracking-wider text-teal-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]`}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
