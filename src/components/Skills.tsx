'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

const skills = [
  { 
    name: "Tailwind CSS", 
    description: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaEt6L7_If8YN5BSImdSHVtgwNSEcKf15Ai-7hyPaeV6z3Nf6axt_HXYfNspbzBn3tebLe03sZX_-Pm4HXWEn3NmAYzqQs7ONBz2_WRxfosW13t4e__JF58szrmgh_JW7b3q2-o3cOnxKy-4AQ6niVkBh-rO0TA18aFT-AcEWxTm4PmmmBkFryqaLfK3QhC0N0CiI_oKpbEnCCUVvf1rcmron4mG3q8Lp9xz46idfnbsq49yModvnB88HcBPp9Ucsky6wsLhLoIig" 
  },
  { 
    name: "JavaScript", 
    description: "Writing efficient, modern, and asynchronous JS for both frontend and backend development.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKWGB4bc-n_URgNRnFKWA3QtZC2eCbuUGCBNzvBUTeLj2nUvkiiufpa8gPLtmc7PvfSljMNG-UzK-iH_Xf9cC_s04KJcfT2PqftnopodS0kGK8cSlPiQV-Am78emTx7ioQ1yrFWOCtzbghPJQjw4R1B78csRy03No0Yfbl_bbU3luQF9CYUBw0zJLpCSK9xQfvAS0abVKUj61hdPe00ec2Yp2ZprCGsSM9o2J5JXMkW8L1HYeIdondfUuEo9KQnfJF8iGcxZJvotQ" 
  },
  { 
    name: "React", 
    description: "Building fast, interactive, and component-based UIs with state management.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAyVLHm1oDeEyoxn3CTIe_s9U4aZ9i5vJmlnjiCQFD_QNRh35Gjz8fD8X5839ZW8JKiMo0xZ6gfc2M2QZ82hbH3KaXLF2B54CsH_1LGHe9bx6DD_QgrNQs2M5VniaeWbjILAkOF6QPbfNSY_b4fA3cIqipBsP1x1KLeK8M4o2PgmKb3HF6Emo9GgZserquSe8kK8FO8Qly4jZe4b3Y-uj66-6eWNdcNAztaC8iBk_B4uQIqUTToK05m2ZZLow0oO9L99af6g57XtU" 
  },
  { 
    name: "Node.js", 
    description: "Developing scalable backend logic and high-performance server-side applications.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2tfTON3T2XFLl7PibYQEda-Q3QmLixCQs6GLiX6dntPaCgG-IHPkh37LNS62xkECQdkvCHFOLs0nrkwhnpVe37WW9-wSulP8HR5Ak4Ev0I1TDbixoVuJWpcwpa9ZE5eR3s8xmldWvPlLYQLmkSAGrKTDVJAAuAlbGWhGjexnjqZfVuenTjkdjteWvPashnSD8wwpwIjI7wA_zP0UthM6g8JLftjVA6IcuQFejm8lyUI7rOhPxkLT6JgDaEaJfcP-Wc0a0WYGSIrs" 
  },
  { 
    name: "MongoDB", 
    description: "Utilizing NoSQL databases like MongoDB to handle high volume and flexible data storage.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUrJRcH6uTPsxwmy3NnOhGDRcYudc20CKijXwud8wCehTrxV4vWhZQvjDSLnwKIb6pVle8W6rprMTwhzWrJp9DFsgNnqMa0v1g-u4qOVHk_esmgeLHelZw6yNXJ0YhAWFySATijx3OTFkcmDGzN6ocnCt0IPikaikqUt15ehFojB0RGoWCr4hT_yc9xj-Nu7KcMw6UPuy1jgTWVBsU3QQeAzmPVB4vWncOlskuuyQzr8aRplurC-LGdGwso7P8q_08cFEd8ei1cPc" 
  },
  { 
    name: "Git", 
    description: "Managing code and versioning efficiently with version control for team collaboration.",
    icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLws-UgPNJEGHIWotebjK4fwcd9asYriyNKUQly94t8tVY-M0QgVAouhvFuA0mkAOw27mqdFqvJIOiUKTEqtjUfanYcb-DumFIdxn72wUUjFHuicj6g05Ldy3ImyCFQfPL84_sPuQD5-xGdrH9Frg943nzdrPrp2JEsK3Dckc19bdEtpse2lQp7Gj6gnArd-OCItGoJgAUcr6u-nFi5oGsgGhScmh5AaFogPwrxcnvhAaMOYD00gxj7YRMVn6IVqFNg4U7iMdLj9o" // Next.js icon as placeholder for Git
  },
];

export default function Skills() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden" id="skills">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I work with modern stacks and technologies to build fast, scalable and efficient web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-accent-blue/30 transition-all group relative overflow-hidden"
            >
              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-white/5 p-3 flex items-center justify-center overflow-hidden shadow-inner group-hover:rotate-12 transition-transform">
                  <Image src={skill.icon} alt={skill.name} width={40} height={40} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <h4 className="text-2xl font-bold">{skill.name}</h4>
              </div>
              <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
