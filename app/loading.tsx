import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen gap-4 backdrop-blur-sm bg-background/50">
      <Spinner className="size-10 text-primary animate-spin" />
      <h2 className="font-semibold text-lg text-foreground">جاري التحميل...</h2>
    </div>
  );
};

export default Loading;
