import { Inter } from "next/font/google";
import Image from "next/image";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EcoVista",
  description: "One Place Dashboard for Eco Information",
};

export default function RootLayout({
  children,
  aqi,
  temperature,
  weather,
  wind,
}) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image
        src="/background.png"
        className="bg-img"
        alt="bg-image"
        width={700}
        height={1200}
      />
      <main class="!z-50 w-full">
        <div class="container">
          <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}