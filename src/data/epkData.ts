export interface VideoItem {
  title: string;
  url: string;
  id: string;
  mock?: boolean;
}

export const epkData = {
  artist: {
    name: "Bhaswati Sengupta",
    subtitle: "Bollywood Playback Singer | Live Performer",
    backgroundImage: "https://images.pexels.com/photos/7715791/pexels-photo-7715791.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800",
    socialHandle: "@itsmebsg",
    bookingEmail: "bhaswatis.music@gmail.com",
  },

  heroCta: {
    label: "Watch Showreel",
    url: "https://youtube.com/shorts/_RQKF-RxzMk?si=WByFHQu7KW9vUrpQ",
  },

  marqueeCredits: [
    "Vocals for Sachin-Jigar",
    "Collaborator with Benny John",
    "Live Performer",
    "Trained by AR Rahman Alumna",
  ],

  biography: {
    text: "Bhaswati Sengupta is a Bollywood playback singer and electrifying live performer, praised for her powerful vocals and magnetic stage presence. She has worked with top music directors like Sachin-Jigar, Amjad-Nadeem-Amir, and Benny John. Blending energy with emotion, Bhaswati captivates audiences worldwide.",
    highlights: [
      "Versatile vocals across Bollywood, folk, and contemporary genres",
      "Featured alongside acclaimed singer Adarsh Shinde",
      "Trained under Sharanya Natrajan (AR Rahman alumna)",
      "Mentored by Koyel Tripathi in classical foundations",
    ],
  },

  mediaCategories: [
    {
      title: "Live Energy",
      videos: [
        { title: "Jhoom Jhoom Baba", url: "https://youtu.be/wL_gLi4KLtg", id: "wL_gLi4KLtg" },
        { title: "Mashup", url: "https://youtu.be/77AX44whQyY", id: "77AX44whQyY" },
        { title: "Chaleya", url: "https://youtu.be/0miwmaEUb8k", id: "0miwmaEUb8k" },
      ],
    },
    {
      title: "Playback & Bollywood",
      videos: [
        { title: "Release 1", url: "https://youtu.be/tB-SVGFH7Is", id: "tB-SVGFH7Is" },
        { title: "Release 2", url: "https://youtu.be/oEBC1Or8teQ", id: "oEBC1Or8teQ" },
        { title: "Fursat", url: "", id: "", mock: true },
        { title: "Jind Mahia", url: "", id: "", mock: true },
      ],
    },
    {
      title: "Originals",
      videos: [
        { title: "Original Track", url: "https://youtu.be/iV5rNXgQySg", id: "iV5rNXgQySg" },
      ],
    },
  ],

  socials: [
    { platform: "Instagram", url: "https://instagram.com/itsmebsg", icon: "instagram" },
    { platform: "Facebook", url: "https://facebook.com/itsmebsg", icon: "facebook" },
    { platform: "YouTube", url: "https://youtube.com/@itsmebsg", icon: "youtube" },
  ],

  streaming: [
    { platform: "Spotify", url: "https://spotify.com", icon: "spotify" },
    { platform: "Apple Music", url: "https://music.apple.com", icon: "apple" },
    { platform: "JioSaavn", url: "https://jiosaavn.com", icon: "jiosaavn" },
    { platform: "Wynk", url: "https://wynkmusic.com", icon: "wynk" },
  ],
};
