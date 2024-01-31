import ElectronLogo from "../components/ElectronLogo";
import ReactLogo from "../components/ReactLogo";
import TailwindCSSLogo from "../components/TailwindCSSLogo";
import TypescriptLogo from "../components/TypescriptLogo";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen mx-10">
      <div className="flex w-full items-center justify-center space-x-4 text-3xl font-bold mb-8">
        <ElectronLogo size={120} className="motion-safe:animate-delay-0 motion-safe:animate-floating motion-safe:animate-ease-in-out" /> <span>+</span>{" "}
        <ReactLogo size={120} className="motion-safe:animate-delay-100 motion-safe:animate-floating motion-safe:animate-ease-in-out" /> <span>+</span>{" "}
        <TailwindCSSLogo size={120} className="motion-safe:animate-delay-200 motion-safe:animate-floating motion-safe:animate-ease-in-out" /> <span>+</span>{" "}
        <TypescriptLogo size={120} className="motion-safe:animate-delay-300 motion-safe:animate-floating motion-safe:animate-ease-in-out" />
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Electron React Tailwind Typescript Starter</h1>
      <p className=" text-lg text-gray-600 text-pretty text-center">
        This starter repository provides a ready-to-use project template for building cross-platform desktop applications with Electron, React, TypeScript, and Tailwind CSS,
        utilizing Electron Forge for easy packaging and publishing.
      </p>
    </main>
  );
}
