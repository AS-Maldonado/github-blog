import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TopCard } from "../TopCard";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faLessThan,
  faMessage,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface IssueCardProps {
  login: string;
  title: string;
  created_at: string;
  updated_at: string;
  comments: number;
  html_url: string;
}

export function IssueTopCard({
  login,
  title,
  created_at,
  updated_at,
  comments,
  html_url,
}: IssueCardProps) {
  const date = updated_at ? new Date(updated_at) : new Date(created_at);
  const now = new Date();
  const diferencaMs = now.getTime() - date.getTime();
  const diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

  return (
    <TopCard>
      <div className="flex w-full flex-col">
        <div className="mb-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs uppercase text-blue"
          >
            <FontAwesomeIcon icon={faLessThan} />
            Voltar
          </Link>
          <a
            href={html_url}
            target="_blank"
            className="flex items-center gap-2 text-xs uppercase text-blue"
          >
            Ver no Github
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-bold text-title">{title}</h2>
          <ul className="flex gap-6">
            <li>
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-label" />
              <span className="text-subtitle">{login}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} className="mr-2 text-label" />
              <span className="text-subtitle">Há {diferencaDias} dias</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faMessage} className="mr-2 text-label" />
              <span className="text-subtitle">{comments} comentários</span>
            </li>
          </ul>
        </div>
      </div>
    </TopCard>
  );
}
