export interface VideoItem {
  title: string;
  url: string;
  id: string;
}

export interface PhotoItem {
  src: string;
  credit: string;
}

export interface ReleaseItem {
  title: string;
  type: 'ALBUM' | 'EP' | 'SINGLE';
  year: string;
  cover: string;
  streams: string;
  links: { label: string; url: string }[];
  tagColor?: string;
}

export interface TourDate {
  date: string;
  day: string;
  venue: string;
  city: string;
  status: 'available' | 'soldout';
  ticketUrl?: string;
}

export interface PressQuote {
  quote: string;
  outlet: string;
  score: string;
}

export interface ContactCard {
  label: string;
  name: string;
  email: string;
}

export const epkData = {
  artist: {
    name: "Bhaswati Sengupta",
    firstName: "Bhaswati",
    lastName: "Sengupta",
    subtitle: "Bollywood Playback Singer / Live Performer",
    heroImage: "https://images.pexels.com/photos/8547680/pexels-photo-8547680.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800",
    bioImage: "https://images.pexels.com/photos/32491407/pexels-photo-32491407.jpeg?auto=compress&cs=tinysrgb&h=900&w=600",
    socialHandle: "@itsmebsg",
    bookingEmail: "bhaswatis.music@gmail.com",
  },

  heroCta: {
    label: "Watch Showreel",
    url: "https://youtube.com/shorts/_RQKF-RxzMk",
  },

  heroStats: [
    { value: "50+", label: "Live Shows" },
    { value: "10M+", label: "Streams" },
    { value: "15+", label: "Playback Credits" },
    { value: "4", label: "Languages" },
  ],

  tickerItems: [
    "Vocals for Sachin-Jigar",
    "Collaborator with Benny John",
    "Trained by AR Rahman Alumna",
    "Featured with Adarsh Shinde",
    "10M+ Streams Worldwide",
    "50+ Live Performances",
  ],

  biography: {
    paragraphs: [
      "Bhaswati Sengupta is a Bollywood playback singer and electrifying live performer, praised for her powerful vocals and magnetic stage presence. She has worked with top music directors like Sachin-Jigar, Amjad-Nadeem-Amir, and Benny John, delivering vocals that blend raw energy with deep emotion.",
      "Blending classical foundations with contemporary Bollywood sensibility, Bhaswati moves effortlessly between folk, semi-classical, and modern pop. Her voice carries a rare versatility — equally at home in a studio playback booth and in front of a 10,000-strong crowd.",
      "Trained under Sharanya Natrajan (AR Rahman alumna) and mentored by Koyel Tripathi in classical foundations, she represents a new generation of Indian vocalists who honor tradition while pushing the boundaries of commercial Bollywood music.",
    ],
    facts: [
      { label: "Based", value: "Mumbai, India" },
      { label: "Genres", value: "Bollywood / Folk / Pop" },
      { label: "Languages", value: "Hindi / Bengali / English / Tamil" },
      { label: "Training", value: "Sharanya Natrajan (AR Rahman alumna)" },
      { label: "Mentor", value: "Koyel Tripathi" },
      { label: "Active Since", value: "2019" },
    ],
    highlights: [
      "Versatile vocals across Bollywood, folk, and contemporary genres",
      "Featured alongside acclaimed singer Adarsh Shinde",
      "Trained under Sharanya Natrajan (AR Rahman alumna)",
      "Mentored by Koyel Tripathi in classical foundations",
    ],
  },

  releases: [
    {
      title: "Jhoom Jhoom Baba",
      type: "SINGLE" as const,
      year: "2024",
      cover: "https://images.pexels.com/photos/10168224/pexels-photo-10168224.jpeg?auto=compress&cs=tinysrgb&h=600&w=600",
      streams: "2.1M",
      links: [
        { label: "YouTube", url: "https://youtu.be/wL_gLi4KLtg" },
        { label: "Spotify", url: "https://spotify.com" },
      ],
      tagColor: "#c8ff00",
    },
    {
      title: "Chaleya (Cover)",
      type: "SINGLE" as const,
      year: "2024",
      cover: "https://images.pexels.com/photos/9418230/pexels-photo-9418230.jpeg?auto=compress&cs=tinysrgb&h=600&w=600",
      streams: "1.8M",
      links: [
        { label: "YouTube", url: "https://youtu.be/0miwmaEUb8k" },
        { label: "Spotify", url: "https://spotify.com" },
      ],
      tagColor: "#ff3cac",
    },
    {
      title: "Mashup Live",
      type: "EP" as const,
      year: "2023",
      cover: "https://images.pexels.com/photos/5351021/pexels-photo-5351021.png?auto=compress&cs=tinysrgb&h=600&w=600",
      streams: "3.5M",
      links: [
        { label: "YouTube", url: "https://youtu.be/77AX44whQyY" },
        { label: "Spotify", url: "https://spotify.com" },
      ],
      tagColor: "#c8ff00",
    },
  ] as ReleaseItem[],

  photos: [
    { src: "https://images.pexels.com/photos/30397932/pexels-photo-30397932.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Stage / Mumbai" },
    { src: "https://images.pexels.com/photos/26588618/pexels-photo-26588618.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Studio / Delhi" },
    { src: "https://images.pexels.com/photos/10168224/pexels-photo-10168224.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Live / Bangalore" },
    { src: "https://images.pexels.com/photos/7699976/pexels-photo-7699976.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Portrait / Kolkata" },
    { src: "https://images.pexels.com/photos/23911182/pexels-photo-23911182.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Session / Mumbai" },
    { src: "https://images.pexels.com/photos/16929699/pexels-photo-16929699.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Feature / Jaipur" },
  ] as PhotoItem[],

  videoStrip: {
    title: "Jhoom Jhoom Baba — Live",
    subtitle: "Highlight Reel / 2024",
    url: "https://youtu.be/wL_gLi4KLtg",
    thumbnail: "https://images.pexels.com/photos/30497160/pexels-photo-30497160.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600",
  },

  tour: [
    { date: "OCT 12", day: "Sat", venue: "Nita Mukesh Ambani Cultural Centre", city: "Mumbai", status: "available" as const, ticketUrl: "mailto:bhaswatis.music@gmail.com" },
    { date: "OCT 26", day: "Sat", venue: "Phoenix Marketcity Open Air", city: "Pune", status: "soldout" as const },
    { date: "NOV 02", day: "Sat", venue: "Phoenix Marketcity", city: "Bangalore", status: "available" as const, ticketUrl: "mailto:bhaswatis.music@gmail.com" },
    { date: "NOV 09", day: "Sat", venue: "Gachibowli Stadium", city: "Hyderabad", status: "available" as const, ticketUrl: "mailto:bhaswatis.music@gmail.com" },
    { date: "NOV 23", day: "Sat", venue: "Salt Lake Stadium", city: "Kolkata", status: "soldout" as const },
    { date: "DEC 07", day: "Sat", venue: "JLN Stadium", city: "Delhi", status: "available" as const, ticketUrl: "mailto:bhaswatis.music@gmail.com" },
  ] as TourDate[],

  press: [
    {
      quote: "Bhaswati's voice is a revelation — she doesn't just sing a song, she owns it. Her stage presence is nothing short of electrifying.",
      outlet: "Bollywood Hungama",
      score: "4.5/5",
    },
    {
      quote: "A rare talent who bridges the gap between classical training and commercial Bollywood. Her playback work is already turning heads.",
      outlet: "Rolling Stone India",
      score: "4/5",
    },
    {
      quote: "One of the most promising voices in the new wave of Bollywood playback. Keep an eye on her — the trajectory is steep.",
      outlet: "Music Plus",
      score: "4.5/5",
    },
  ] as PressQuote[],

  pressLogos: ["Bollywood Hungama", "Rolling Stone India", "Music Plus", "Filmfare", "Mirchi Top 20", "Gaana Spotlight"],

  contacts: [
    { label: "Management", name: "Rohan Mehta", email: "rohan@bhaswatimusic.com" },
    { label: "Booking — India", name: "Priya Sharma", email: "priya@bhaswatimusic.com" },
    { label: "Booking — International", name: "James Carter", email: "james@bhaswatimusic.com" },
    { label: "Press & PR", name: "Anita Desai", email: "anita@bhaswatimusic.com" },
    { label: "Sync Licensing", name: "Vikram Singh", email: "vikram@bhaswatimusic.com" },
    { label: "General Inquiries", name: "Bhaswati Sengupta", email: "bhaswatis.music@gmail.com" },
  ] as ContactCard[],

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

  mediaCategories: [
    {
      title: "Live Energy",
      videos: [
        { title: "Jhoom Jhoom Baba", url: "https://youtu.be/wL_gLi4KLtg", id: "wL_gLi4KLtg" },
        { title: "Mashup", url: "https://youtu.be/77AX44whQyY", id: "77AX44whQyY" },
        { title: "Chaleya", url: "https://youtu.be/0miwmaEUb8k", id: "0miwmaEUb8k" },
      ] as VideoItem[],
    },
    {
      title: "Playback & Bollywood",
      videos: [
        { title: "Release 1", url: "https://youtu.be/tB-SVGFH7Is", id: "tB-SVGFH7Is" },
        { title: "Release 2", url: "https://youtu.be/oEBC1Or8teQ", id: "oEBC1Or8teQ" },
      ] as VideoItem[],
    },
    {
      title: "Originals",
      videos: [
        { title: "Original Track", url: "https://youtu.be/iV5rNXgQySg", id: "iV5rNXgQySg" },
      ] as VideoItem[],
    },
  ],
};
