import Button from "@/components/common/Button";
import { ButtonProps } from "@/interface";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface";

export default function Home() {
  const router = useRouter();

  // Imeperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Welcome Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Splash App!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Navigation Options */}
      <div className="flex gap-6">
        <Button
          action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
          buttonLabel="Generate Text"
          buttonBackgroundColor="blue"
          size={"small"}
          shape={"rounded-sm"}
          label={""}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
          buttonLabel="Text to Image"
          buttonBackgroundColor="green"
          size={"small"}
          shape={"rounded-sm"}
          label={""}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <Button
          action={() => routeToNextPage({ pageRoute: "/counter-app" })}
          buttonLabel="Contact us"
          buttonBackgroundColor="orange"
          size={"small"}
          shape={"rounded-sm"}
          label={""}
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
}
