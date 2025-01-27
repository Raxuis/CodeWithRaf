import { Link } from "next-view-transitions";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function BlurHeader() {
  return (
    <header className="sticky top-0 z-20 mx-auto flex w-full items-center justify-between p-5">
      <div className="pointer-events-none absolute inset-0 z-1 h-[20vh] backdrop-blur-[0.0625px] [mask-image:linear-gradient(0deg,transparent_0%,#000_12.5%,#000_25%,transparent_37.5%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-2 h-[20vh] backdrop-blur-[0.125px] [mask-image:linear-gradient(0deg,transparent_12.5%,#000_25%,#000_37.5%,transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-3 h-[20vh] backdrop-blur-[0.25px] [mask-image:linear-gradient(0deg,transparent_25%,#000_37.5%,#000_50%,transparent_62.5%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-4 h-[20vh] backdrop-blur-[0.5px] [mask-image:linear-gradient(0deg,transparent_37.5%,#000_50%,#000_62.5%,transparent_75%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-5 h-[20vh] backdrop-blur-[1px] [mask-image:linear-gradient(0deg,transparent_50%,#000_62.5%,#000_75%,transparent_87.5%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-6 h-[20vh] backdrop-blur-[2px] [mask-image:linear-gradient(0deg,transparent_62.5%,#000_75%,#000_87.5%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-7 h-[20vh] backdrop-blur-[4px] [mask-image:linear-gradient(0deg,transparent_75%,#000_87.5%,#000_100%,transparent_112.5%)]"></div>
      <div className="border-border z-10 mx-auto flex w-full max-w-5xl items-center justify-between rounded-lg border bg-white p-2">
        <SidebarTrigger className="ml-2 size-10 cursor-pointer" />
        <Link className={cn("flex h-11 items-center gap-4 p-8")} href="/">
          <Image
            src="/static/icon.png"
            alt="Raxuis Icon"
            width={50}
            height={50}
            className="size-10"
          />
          <h1 className="text-lg">CodeWithRaf</h1>
        </Link>
      </div>
    </header>
  );
}
