import React from "react";
import { FaReact, FaCircleCheck } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { BiSolidCameraMovie } from "react-icons/bi";
import { LuListTodo, LuBrainCircuit } from "react-icons/lu";
import {
  SiVite,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiStyledcomponents,
  SiNetlify,
} from "react-icons/si";
import { MdError } from "react-icons/md";
import { IoWarning } from "react-icons/io5";

const icons = {
  react: FaReact,
  next: TbBrandNextjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  movie: BiSolidCameraMovie,
  todo: LuListTodo,
  ai: LuBrainCircuit,
  vite: SiVite,
  redux: SiRedux,
  styledcomponents: SiStyledcomponents,
  netlify: SiNetlify,
  check: FaCircleCheck,
  error: MdError,
  warning: IoWarning,
};

const Icon = ({ id, size, color, className }) => {
  const SelectedIcon = icons[id];
  if (!SelectedIcon) {
    return null;
  }
  return <SelectedIcon size={size} color={color} className={className} />;
};

export default Icon;
