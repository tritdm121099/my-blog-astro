import type { bxlIcons, logosIcons, phIcons } from "../data";

export type IconsLogos = (typeof logosIcons)[number];

export type IconsPH = (typeof phIcons)[number];

export type IconsBXL = (typeof bxlIcons)[number];

export type AppIcon = IconsLogos | IconsPH | IconsBXL;
