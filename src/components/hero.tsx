import avatarImg from "../assets/avatar.jpg";
import * as motion from "motion/react-client";

export function Hero() {
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
      <img alt="" src={avatarImg} className="rounded-2xl" />
      <div className="prose lg:prose-xl">
        <h1 className="text-sky-800">Frontend разработчик (React)</h1>
        <div>Занятость: полная (на месте работодателя, удалённо, гибрид) </div>
        <div>Дата рождения: 15.09.1989 </div>
        <div>Гражданство: РФ </div>
        <div>
          Контактная информация: tel: +7 (960) 047-43-30 email:
          musindelus@gmail.com tg: @deljuse
        </div>
      </div>
    </motion.div>
  );
}
