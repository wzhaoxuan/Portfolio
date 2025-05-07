// src/data/socialMediaData.ts
import { FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { IconType } from "react-icons";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialMediaData: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/yourprofile",
    icon: FaTwitter,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/yourid",
    icon: FaDiscord,
  },
];
