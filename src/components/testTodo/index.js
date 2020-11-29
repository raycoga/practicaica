import React, { memo, useEffect } from "react";

const index = memo((props) => {
  const { data, content, funcionConsolelog } = props;

  useEffect(() => {
    funcionConsolelog();
  }, [funcionConsolelog]);

  return (
    <div className="container-fake-todo">
      HOLA <br />
      {data}
      <br />
      {content}
    </div>
  );
});

export default index;
