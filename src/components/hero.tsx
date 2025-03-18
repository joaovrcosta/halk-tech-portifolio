import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import HoverEffectList from "./hover-effect-list";
import { motion } from "framer-motion"; // Importa o motion

export function Hero() {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[754px] lg:mt-60 mt-36">
            <div className="lg:block hidden">
              <motion.h1
                className="lg:text-[64px] text-white font-poppins text-center leading-12 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Grow your brand
                <motion.span
                  className="lg:text-[96px] text-center italic bg-gradient-to-br from-[#00C8FF] to-[#004E63] bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }} // Delay para dar um efeito mais interessante
                >
                  think different
                </motion.span>
              </motion.h1>
            </div>
            <div className="lg:hidden block">
              <motion.h1
                className="lg:text-[64px] text-[32px] text-white font-poppins text-center leading-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                Grow your brand
              </motion.h1>
              <motion.span
                className="lg:text-[96px] text-[42px] text-center italic bg-gradient-to-br from-[#00C8FF] to-[#004E63] bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.25 }}
              >
                think different
              </motion.span>
            </div>
          </div>
          <div className="lg:max-w-[520px] w-full max-w-[300px] text-[#b6b6b6] mt-6">
            <motion.p
              className="text-center lg:text-[16px] text-[12px] px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              More than just a beautiful design, we create experiences that
              convert visitors into customers. Your website can’t just be a
              business card – it needs to do the selling for you.
            </motion.p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-victor-41b89013a/">
              <motion.div
                className="h-12 w-12 bg-[#302F39] flex items-center justify-center rounded-full mt-12 cursor-pointer border border-[#86858B]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
              >
                <LinkedinLogo size={28} className="text-white" weight="fill" />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/jo%C3%A3o-victor-41b89013a/">
              <motion.div
                className="h-12 w-12 bg-[#302F39] flex items-center justify-center rounded-full mt-12 cursor-pointer border border-[#86858B]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.25 }}
              >
                <GithubLogo size={28} className="text-white" weight="fill" />
              </motion.div>
            </Link>
          </div>
          <div className="mt-8 lg:block hidden">
            <motion.div
              className=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
            >
              <HoverEffectList />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
