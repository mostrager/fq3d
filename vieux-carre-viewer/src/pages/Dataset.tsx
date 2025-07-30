import { useParams } from "react-router-dom";

export default function Dataset() {
  const { id } = useParams();
  return <div>Dataset: {id}</div>;
}
