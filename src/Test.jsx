import React, { useState, useEffect } from 'react';

const Test = () => {
  const [value, setValue] = useState(null);

  useEffect(() => console.log(value), [value]);

  return <div>Testing Area</div>;
};

export default Test;

/* ****************************************************************** */
