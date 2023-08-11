
interface Props {
  n: number;
}

const StarPrinter = ({ n }) => {
  const stars = [];

  for (let i = 0; i < n; i++) {
    stars.push(<span key={i}>🌟</span>);
  }

  return <div>{stars}</div>;
}

export default StarPrinter;