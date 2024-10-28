import HeroSlideShow from "@/components/ui/heroSlideshow";
import MarqueeIcons from "@/components/ui/marqueeIcons";
import Websites from "@/components/ui/website";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-4">
      <HeroSlideShow />
      <main className="mt-16">
        <Websites />
        <MarqueeIcons />
      </main>
      <footer className="mt-16">
        <div className="flex gap-4 mb-4">
          <FaFacebookSquare size='2rem' />
          <FaGithub size='2rem' />
          <FaFreeCodeCamp size='2rem' />
          <FaDiscord size='2rem' />
        </div>
        <h1 className="text-xl font-bold">Contact📜📜📜</h1>
        <p><strong>Address:</strong> 🏠 Yangon, Thaketa, HtuParYone front 5th street, No.1268.</p>
        <p><strong>Tel:</strong> 📞 09758454815</p>
        <p><strong>Email:</strong> 📧 phyothiha97531@gmail.com</p>
        <iframe className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.25470811304!2d96.20504882578764!3d16.801101093446796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ed31abb2bf23%3A0x8592dd9fc146f74e!2z4YCA4YC74YCx4YCs4YCE4YC64YC44YCA4YC94YCx4YC34YCZ4YC-4YCQ4YC64YCQ4YCt4YCv4YCE4YC6!5e0!3m2!1sen!2smm!4v1730093936648!5m2!1sen!2smm" loading="lazy" referrerPolicy="no-referrer"></iframe>
      </footer>
    </div>
  );
}
