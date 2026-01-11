import Link from "next/link";
import CalloutWrapper from "./CalloutWrapper";

interface Props {
  href: string;
  title: string;
  description: string;
}

const Callout = ({ page }: { page: Props }) => {
  return (
    <CalloutWrapper isLink>
      <Link
        href={page.href}
        title={page.title}
        className="block font-mono text-[15px] font-bold uppercase tracking-wide text-teal-300 no-underline transition-colors group-hover:text-teal-200"
      >
        {page.title}
      </Link>
      <p className="mt-2 font-mono text-[13px] text-gray-400">
        {page.description}
      </p>
      <p className="mt-2 font-mono text-[11px] text-teal-400/80">
        → {page.href}
      </p>
    </CalloutWrapper>
  );
};

export default Callout;
