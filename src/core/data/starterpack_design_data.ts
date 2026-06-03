import affinityIcon from "../../assets/logos/Affinity_2025_icon.webp";
import canvaIcon from "../../assets/logos/canva-icon.webp";
import cavalryIcon from "../../assets/logos/cavalry.svg";
import davinciIcon from "../../assets/logos/DaVinci_Resolve_Studio.png";

type StarterpackType = {
    tool_name: string;
    tool_image: string;
}

const DesignStarterpacks: StarterpackType[] = [
    {
        tool_name: "Affinity",
        tool_image: affinityIcon,
    },
    {
        tool_name: "Canva",
        tool_image: canvaIcon,
    },
    {
        tool_name: "Cavalry",
        tool_image: cavalryIcon,
    },
    {
        tool_name: "DaVinci Resolve Studio",
        tool_image: davinciIcon,
    },
];

export default DesignStarterpacks;
