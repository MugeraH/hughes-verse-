type Props = { children: React.ReactNode; className?: string };

function Container({ children }: Props) {
  return (
    <div className="mx-auto max-w-[90%] px-2 pt-20 md:max-w-[55rem] md:px-8">
      {children}
    </div>
  );
}

export default Container;
