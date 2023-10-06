import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col justify-center items-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          ChatPDF is now public!
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
        Chat with your <span className="text-primary">documents</span> in
        seconds.
      </h1>
      <div className="mt-5 max-w-prose sm:text-lg text-zinc-700 ">
        ChatPDF allows you to have conversation with your documents. Just upload
        your document and start chatting with it.
      </div>
      <Link href="/dashboard" target="_blank">
        Get started <ArrowRight className="ml-2"/>
      </Link>
    </MaxWidthWrapper>
  );
}
