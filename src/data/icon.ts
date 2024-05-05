import type { AppIcon } from "../models/icon";
import type { Tag } from "../models/tag";

export const logosIcons = ["logos:angular-icon", "logos:nestjs", "logos:nodejs-icon", "logos:typescript-icon"] as const;
export const phIcons = ["ph:hash", "ph:keyboard", "ph:sun", "ph:moon", "ph:castle-turret", "ph:caret-left"] as const;
export const bxlIcons = ["bxl:github", "bxl:linkedin-square"] as const;

export function getTagIcon(tag: Tag): AppIcon {
  switch (tag) {
    case "Programming":
      return "ph:keyboard";
    default:
      return "ph:hash";
  }
}
