import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {Course} from "../data/course.ts";

export default function Sidebar() {
  const [openModule, setOpenModule] = useState<string | null>(null);
  const location = useLocation();

  return (
    <div className="p-2">
      <h1 className="p-4 text-xl font-bold border-b border-gray-200">📚 Modules</h1>
      <nav className="mt-2">
        {Object.entries(Course).map(([key, mod]) => {
          const isOpen = openModule === key;

          return (
            <div key={key} className="mb-1">
              {/* Module button */}
              <button
                className={`w-full text-left px-3 py-2 rounded font-semibold hover:bg-gray-100 ${
                  isOpen ? "bg-gray-100" : ""
                }`}
                onClick={() => setOpenModule(isOpen ? null : key)}
              >
                {mod.title}
              </button>

              {/* Topics */}
              {isOpen && (
                <ul className="ml-4 mt-1 space-y-1">
                  {Object.entries(mod.topics).map(([topicKey, topicTitle]) => {
                    const topicPath = `/learn/${mod.id}/${topicKey.toLowerCase()}`;
                    const isActive = location.pathname === topicPath;

                    return (
                      <li key={topicKey}>
                        <Link
                          to={topicPath}
                          className={`block px-2 py-1 text-sm rounded hover:bg-gray-50 ${
                            isActive ? "text-blue-600 font-medium" : "text-gray-700"
                          }`}
                        >
                          • {topicTitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
