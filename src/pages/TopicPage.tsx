import { useParams } from "react-router-dom";
import { Course } from "../data/course";

export default function TopicPage() {
  const { moduleId, topicId } = useParams<{ moduleId: string; topicId: string }>();
  const moduleEntry = Object.values(Course).find((m) => m.id === moduleId);

  if (!moduleEntry) {
    return <div className="p-6">Module not found.</div>;
  }

  // find topic by matching lowercased key
  const topicEntry = Object.entries(moduleEntry.topics).find(
    ([key]) => key.toLowerCase() === topicId
  );

  if (!topicEntry) {
    return <div className="p-6">Topic not found.</div>;
  }

  const [, topicTitle] = topicEntry;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{topicTitle}</h2>
      <p className="text-gray-600">
        Placeholder content for <strong>{topicTitle}</strong>.  
        Later you can load real JSON/Markdown here.
      </p>
    </div>
  );
}
