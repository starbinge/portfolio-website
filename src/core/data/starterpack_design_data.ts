import affinityIcon from "../../assets/logos/Affinity_2025_icon.webp";
import canvaIcon from "../../assets/logos/canva-icon.webp";
import cavalryIcon from "../../assets/logos/cavalry.svg";
import davinciIcon from "../../assets/logos/DaVinci_Resolve_Studio.png";
import figmaIcon from "../../assets/logos/Figma-logo.svg";

type StarterpackType = {
    tool_name: string;
    tool_image: string;
    tool_url: string;
}

const DesignStarterpacks: StarterpackType[] = [
    {
        tool_name: "Affinity",
        tool_image: affinityIcon,
        tool_url: "https://affinity.serif.com",
    },
    {
        tool_name: "Canva",
        tool_image: canvaIcon,
        tool_url: "https://www.canva.com",
    },
    {
        tool_name: "Cavalry",
        tool_image: cavalryIcon,
        tool_url: "https://cavalry.scenegroup.co",
    },
    {
        tool_name: "DaVinci Resolve Studio",
        tool_image: davinciIcon,
        tool_url: "https://www.blackmagicdesign.com/products/davinciresolve",
    },
    {
        tool_name: "Figma",
        tool_image: figmaIcon,
        tool_url: "https://www.figma.com",
    },
];

export default DesignStarterpacks;
