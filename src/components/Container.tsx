type Props = { children: React.ReactNode; className?: string };

function Container({ children }: Props) {
  return (
    <div className="max-w-[90%] mx-auto px-2 pt-28 md:max-w-[65rem] md:px-8">
      {children}
    </div>
  );
}

export default Container;
