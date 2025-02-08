import { Link } from "react-router-dom";

interface IssueCardProps {
  number: number;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
}

export function IssueCard({
  number,
  title,
  body,
  created_at,
  updated_at,
}: IssueCardProps) {
  const date = updated_at ? new Date(updated_at) : new Date(created_at);
  const now = new Date();
  const diferencaMs = now.getTime() - date.getTime();
  const diferencaDias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));

  return (
    <Link
      to={`/issue/${number}`}
      className="max-w-[416px] rounded-xl bg-post p-8"
    >
      <div className="flex justify-between">
        <h2 className="mb-5 w-[60%] text-xl font-bold text-title">{title}</h2>
        <span className="text-span">Há {diferencaDias} dia</span>
      </div>
      <p className="line-clamp-4 text-text">{body}</p>
    </Link>
  );
}
