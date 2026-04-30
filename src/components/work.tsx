import * as motion from "motion/react-client";

export function Work() {
    return (
<motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className=" w-full p-10 rounded-2xl grid grid-cols-2 gap-4 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"
    >
        Опыт работы
    </motion.div>
    )
}