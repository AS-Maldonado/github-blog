import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUser,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { TopCard } from "../TopCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface UserCardProps {
  username: string;
}

export type User = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  html_url: string;
  company: string;
};

export function UserCard({ username }: UserCardProps) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");

    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch(() => {
        setError("Erro ao buscar usuário.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [username]);

  return (
    <TopCard>
      {loading && <p className="text-text">Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!user ? (
        <p className="text-text">Usuário não encontrado...</p>
      ) : (
        <>
          <img
            className="h-36 w-36 rounded-md bg-gray-400"
            src={user.avatar_url}
            alt="User Avatar"
          />
          <div className="flex flex-col">
            <div className="mb-2 flex justify-between">
              <h2 className="text-2xl font-bold text-title">{user.name}</h2>
              <a
                href={user.html_url}
                target="_blank"
                className="flex items-center gap-2 text-xs uppercase text-blue"
              >
                Github
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </div>
            <p className="mb-6 text-text">{user.bio}</p>
            <ul className="flex gap-6">
              <li>
                <FontAwesomeIcon icon={faGithub} className="mr-2 text-label" />
                <span className="text-subtitle">{user.login}</span>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faBuilding}
                  className="mr-2 text-label"
                />
                <span className="text-subtitle">{user.company}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} className="mr-2 text-label" />
                <span className="text-subtitle">
                  {user.followers} seguidores
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </TopCard>
  );
}
