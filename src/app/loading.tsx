import LoadingDots from "components/LoadingDots";
import Paragraph from "components/Paragraph";

export default function Loading() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-5">
      <LoadingDots />
      <Paragraph>Loading...</Paragraph>
    </div>
  );
}
