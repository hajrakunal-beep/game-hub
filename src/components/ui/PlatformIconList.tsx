import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import type { ElementType } from "react";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: Record<string, ElementType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack margin={2}>
      {platforms.map((platform) => {
        const PlatformIcon = iconMap[platform.slug];

        return PlatformIcon ? (
          <Icon key={platform.id} as={PlatformIcon} color="gray.500" />
        ) : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
