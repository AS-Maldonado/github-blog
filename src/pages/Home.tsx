import { useEffect, useState } from "react";
import { IssueCard } from "../components/home/IssueCard";
import { Search } from "../components/home/Search";
import { UserCard } from "../components/home/UserCard";
import axios from "axios";

export type Issue = {
  title: string;
  created_at: string;
  updated_at: string;
};

export function Home() {
  const [issues, setIssues] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/issues?q=${searchItem}%20repo:AS-Maldonado/github-blog`,
      )
      .then((response) => {
        setIssues(response.data);
      })
      .catch(() => {
        setError("Erro ao buscar usuário.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchItem]);

  return (
    <div className="max-w-[864px]">
      <UserCard username="diego3g" />
      <Search />
      <div className="my-12 flex flex-wrap gap-8">
        {loading && <p className="text-text">Carregando...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {issues.map((issue) => (
          <IssueCard key={issue} />
        ))}
      </div>
    </div>
  );
}
