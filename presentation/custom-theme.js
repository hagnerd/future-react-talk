import React from 'react';
import theme from 'mdx-deck/themes';
import Edges from 'react-edges';

const Provider = props => (
  <Edges
    {...props}
    bottomLeft={({ index, length }) => (
      <div style={{ color: '#D8DEEA', fontSize: '25px' }}>{`${index +
        1} of ${length}`}</div>
    )}
    bottomRight={() => (
      <a
        style={{ color: '#EBCC81', fontSize: '25px' }}
        href="https://www.twitter.com/mattinthecouch"
      >
        @mattinthecouch
      </a>
    )}
  >
    {props.children}
  </Edges>
);

export default {
  ...theme,
  font: 'Oswald',
  colors: {
    ...theme.colors,
    text: '#D8DEEA',
    background: '#384052',
    link: '#EBCC81',
  },
  h2: {
    color: '#A4BE86',
  },
  Provider,
};
