import { Typography } from "@/components/MtComponents";

import Card from "./caseCard";
import { caseAttr } from "@/models/Case";

export default function CardGrid({ allCases }: { allCases: caseAttr[] }) {
  return (
    <div className="grid grid-cols-4 gap-10 ">
      {allCases.map((userCase, index) => {
        return <Card userCase={userCase} key={index} />;
      })}
    </div>
  );
}
