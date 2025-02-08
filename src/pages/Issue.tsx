import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IssueBody } from "../components/issue/IssueBody";
import { IssueTopCard } from "../components/issue/IssueTopCard";
import { User } from "../components/home/UserCard";

export type IssueType = {
  user: User;
  title: string;
  created_at: string;
  updated_at: string;
  comments: number;
  html_url: string;
  body: string;
};

export function Issue() {
  const { number } = useParams();

  const [issue, setIssue] = useState<IssueType>();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/AS-Maldonado/github-blog/issues/${number}`,
      )
      .then((response) => {
        setIssue(response.data);
      })
      .catch(() => {
        setError("Erro ao buscar issue.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [number]);

  return (
    <div className="max-w-[864px]">
      {issue ? (
        <>
          <IssueTopCard
            comments={issue?.comments}
            created_at={issue?.created_at}
            login={issue.user.login}
            title={issue?.title}
            updated_at={issue?.updated_at}
            html_url={issue.html_url}
          />
          <IssueBody body={issue.body} />
        </>
      ) : loading ? (
        <p className="text-text">Carregando...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : null}
    </div>
  );
}
