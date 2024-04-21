import React from "react";

type ParamsProps = {
  title?: string;
  children: React.ReactElement;
};

const Wrapper = (props: ParamsProps): React.ReactElement => {
  const { title, children } = props;

  return (
    <section className="container mx-auto mb-3">
      <h1 className="text-2xl font-bold mb-7">{title}</h1>
      {children}
    </section>
  );
};

export default Wrapper;
