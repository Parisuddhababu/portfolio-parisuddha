import { FiAward } from "react-icons/fi";

const ProfileCard = () => (
  <div className="bg-white/10 rounded-3xl border border-white/20 p-8">
    <div className="flex items-center space-x-6 mb-6">
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
          <img
            src="/public/shared_image.jpeg"
            alt="Parisuddha"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/public/shared_image.jpeg";
            }}
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
          <FiAward className="text-white text-sm" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Parisuddha Babu</h2>
        <p className="text-white/70">Frontend Developer & Content Creator</p>
      </div>
    </div>
    <p className="text-white/80 leading-relaxed mb-6">
      I’m Parisuddha Babu — a developer with a creative mind and a teaching heart. My mission is not only to build
      elegant, user-centric web apps, but also to empower others through my YouTube content. Whether it’s
      coding tutorials, motivational talks, or devotional messages, I aim to bring value and positivity to every screen I reach.
    </p>
    <div className="grid grid-cols-2 gap-4">
      <div className="text-center p-4 bg-white/5 rounded-xl">
        <div className="text-2xl font-bold text-white">2.5+</div>
        <div className="text-white/70 text-sm">Years Experience</div>
      </div>
      <div className="text-center p-4 bg-white/5 rounded-xl">
        <div className="text-2xl font-bold text-white">10+</div>
        <div className="text-white/70 text-sm">Projects Completed</div>
      </div>
    </div>
  </div>
);

export default ProfileCard; 