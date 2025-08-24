import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();

  return (
    <div>
      <h2>Post ID: {id}</h2>
      <p>This is the post content for post #{id}.</p>
    </div>
  );
}