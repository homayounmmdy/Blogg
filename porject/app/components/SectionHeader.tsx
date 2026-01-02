interface Props {
  title: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="mb-12 text-center">
      <div className="mb-4 inline-flex items-center space-x-3">
        <div className="h-[1px] w-8 bg-teal-400" />
        <h2 className="font-mono text-xs font-bold uppercase tracking-[0.4em] text-teal-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] sm:text-sm">
          {title}
        </h2>
        <div className="h-[1px] w-8 bg-teal-400" />
      </div>
      <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60" />
    </div>
  );
};

export default SectionHeader;
