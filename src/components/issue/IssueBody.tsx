interface IssueBodyProps {
  body: string;
}

export function IssueBody({ body }: IssueBodyProps) {
  return (
    <div
      className="h-screen text-white"
      dangerouslySetInnerHTML={{ __html: body }}
    ></div>
  );
}
