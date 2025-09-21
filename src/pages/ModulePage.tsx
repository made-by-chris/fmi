import { useParams, Link } from "react-router-dom";
import { Course } from "../data/course";

export default function ModulePage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const moduleEntry = Object.values(Course).find((m) => m.id === moduleId);

  if (!moduleEntry) {
    return <div className="p-6">Module not found.</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{moduleEntry.title}</h2>
      <p className="text-gray-600 mb-4">
        This is an overview page for <strong>{moduleEntry.title}</strong>.
      </p>

      <ul className="space-y-2">
        {Object.entries(moduleEntry.topics).map(([topicKey, topicTitle]) => (
          <li key={topicKey}>
            <Link
              to={`/learn/${moduleEntry.id}/${topicKey.toLowerCase()}`}
              className="text-blue-600 hover:underline"
            >
              {topicTitle}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
