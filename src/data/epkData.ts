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

export interface ContactCard {
  label: string;
  name: string;
  email: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface StreamingPlatform {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteContent {
  hero: {
    firstName: string;
    lastName: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    ctaUrl: string;
    backgroundImage: string;
  };
  about: {
    heading: string;
    highlightWord: string;
    paragraphs: string[];
    image1: string;
    image1Label: string;
    image2: string;
    image2Label: string;
    facts: { label: string; value: string }[];
  };
  music: {
    heading: string;
    highlightWord: string;
    releases: ReleaseItem[];
  };
  photos: {
    heading: string;
    highlightWord: string;
    photos: PhotoItem[];
  };
  video: {
    title: string;
    subtitle: string;
    url: string;
    thumbnail: string;
  };
  contact: {
    heading: string;
    highlightWord: string;
    blurb: string;
    bookingEmail: string;
    contacts: ContactCard[];
  };
  footer: {
    artistName: string;
    subtitle: string;
    socialHandle: string;
    socials: SocialLink[];
    streaming: StreamingPlatform[];
  };
}

export const defaultContent: SiteContent = {
  hero: {
    firstName: "Bhaswati",
    lastName: "Sengupta",
    subtitle: "Singer / Live Performer / Playback Artist",
    description: "A Bollywood voice raised on riyaaz — bringing the songs that raised us to your stage, live, wherever home is now.",
    ctaLabel: "Book Bhaswati",
    ctaUrl: "mailto:bhaswatis.music@gmail.com",
    backgroundImage: "https://images.pexels.com/photos/8547680/pexels-photo-8547680.jpeg?auto=compress&cs=tinysrgb&h=1200&w=800",
  },
  about: {
    heading: "The Artist",
    highlightWord: "Artist",
    paragraphs: [
      "Before I understood the words, I knew the melodies. Ours was a house where the harmonium was never really put away — mornings meant riyaaz, evenings meant old film songs drifting from the radio. Music was not a lesson. It was the language we spoke.",
      "The moment I fell in love with the stage was not applause — it was silence. A room full of people going quiet, leaning in, feeling a lyric land the same instant I did. That hush is what I have chased ever since.",
      "Trained under Sharanya Natrajan (AR Rahman alumna) and mentored by Koyel Tripathi in classical foundations, I now bring that voice to stages across the US, Canada and India — to weddings, galas and campus nights full of people far from where they grew up.",
    ],
    image1: "https://images.pexels.com/photos/32491407/pexels-photo-32491407.jpeg?auto=compress&cs=tinysrgb&h=900&w=600",
    image1Label: "Live / Mumbai",
    image2: "https://images.pexels.com/photos/9418230/pexels-photo-9418230.jpeg?auto=compress&cs=tinysrgb&h=900&w=600",
    image2Label: "Studio / Delhi",
    facts: [
      { label: "Based", value: "Mumbai / Touring US & Canada" },
      { label: "Genres", value: "Bollywood / Folk / Pop" },
      { label: "Languages", value: "Hindi / Bengali / English / Tamil" },
      { label: "Training", value: "Sharanya Natrajan (AR Rahman alumna)" },
      { label: "Mentor", value: "Koyel Tripathi" },
      { label: "Active Since", value: "2019" },
    ],
  },
  music: {
    heading: "Music & Releases",
    highlightWord: "Releases",
    releases: [
      {
        title: "Jhoom Jhoom Baba",
        type: "SINGLE",
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
        type: "SINGLE",
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
        type: "EP",
        year: "2023",
        cover: "https://images.pexels.com/photos/5351021/pexels-photo-5351021.png?auto=compress&cs=tinysrgb&h=600&w=600",
        streams: "3.5M",
        links: [
          { label: "YouTube", url: "https://youtu.be/77AX44whQyY" },
          { label: "Spotify", url: "https://spotify.com" },
        ],
        tagColor: "#c8ff00",
      },
    ],
  },
  photos: {
    heading: "Press Photos",
    highlightWord: "Photos",
    photos: [
      { src: "https://images.pexels.com/photos/30397932/pexels-photo-30397932.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Stage / Mumbai" },
      { src: "https://images.pexels.com/photos/26588618/pexels-photo-26588618.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Studio / Delhi" },
      { src: "https://images.pexels.com/photos/10168224/pexels-photo-10168224.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Live / Bangalore" },
      { src: "https://images.pexels.com/photos/7699976/pexels-photo-7699976.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Portrait / Kolkata" },
      { src: "https://images.pexels.com/photos/23911182/pexels-photo-23911182.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Session / Mumbai" },
      { src: "https://images.pexels.com/photos/16929699/pexels-photo-16929699.jpeg?auto=compress&cs=tinysrgb&h=800&w=600", credit: "Feature / Jaipur" },
    ],
  },
  video: {
    title: "Jhoom Jhoom Baba — Live",
    subtitle: "Highlight Reel / 2024",
    url: "https://youtu.be/wL_gLi4KLtg",
    thumbnail: "https://images.pexels.com/photos/30497160/pexels-photo-30497160.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600",
  },
  contact: {
    heading: "Get In Touch",
    highlightWord: "Touch",
    blurb: "Tell me about your evening — the date, the city, the people who will be in the room. You'll hear back from me personally, not an autoresponder.",
    bookingEmail: "bhaswatis.music@gmail.com",
    contacts: [
      { label: "Management", name: "Rohan Mehta", email: "rohan@bhaswatimusic.com" },
      { label: "Booking — India", name: "Priya Sharma", email: "priya@bhaswatimusic.com" },
      { label: "Booking — International", name: "James Carter", email: "james@bhaswatimusic.com" },
      { label: "Press & PR", name: "Anita Desai", email: "anita@bhaswatimusic.com" },
      { label: "Sync Licensing", name: "Vikram Singh", email: "vikram@bhaswatimusic.com" },
      { label: "General Inquiries", name: "Bhaswati Sengupta", email: "bhaswatis.music@gmail.com" },
    ],
  },
  footer: {
    artistName: "Bhaswati Sengupta",
    subtitle: "Singer / Live Performer / Playback Artist",
    socialHandle: "@itsmebsg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com/itsmebsg", icon: "instagram" },
      { platform: "Facebook", url: "https://facebook.com/itsmebsg", icon: "facebook" },
      { platform: "YouTube", url: "https://youtube.com/@itsmebsg", icon: "youtube" },
      { platform: "LinkedIn", url: "https://linkedin.com/in/itsmebsg", icon: "linkedin" },
    ],
    streaming: [
      { platform: "Spotify", url: "https://spotify.com", icon: "spotify" },
      { platform: "Apple Music", url: "https://music.apple.com", icon: "apple" },
      { platform: "JioSaavn", url: "https://jiosaavn.com", icon: "jiosaavn" },
      { platform: "Wynk", url: "https://wynkmusic.com", icon: "wynk" },
    ],
  },
};
