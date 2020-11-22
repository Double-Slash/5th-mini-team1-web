import {
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsChevronRight,
  BsLink45Deg,
} from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { IconType } from "react-icons/lib";

interface dataType {
  icon: IconType;
  type: string;
}

const data: dataType[] = [
  {
    icon: BsTypeH1,
    type: "h1",
  },
  {
    icon: BsTypeH2,
    type: "h2",
  },
  {
    icon: BsTypeH3,
    type: "h3",
  },
  {
    icon: BsTypeBold,
    type: "bold",
  },
  {
    icon: BsTypeItalic,
    type: "italic",
  },
  {
    icon: BsTypeStrikethrough,
    type: "strike",
  },
  {
    icon: BsChevronRight,
    type: "quote",
  },
  {
    icon: BsLink45Deg,
    type: "link",
  },
  {
    icon: BiCodeAlt,
    type: "blockquote",
  },
];

export default data;
