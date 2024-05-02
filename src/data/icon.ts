import type { Icon } from "../models/icon";
import type { Tag } from "../models/tag";

export const icons: { [key in Icon]: string } = {
  nodejs: "skill-icons:nodejs-dark",
  typescript: "skill-icons:typescript",
  angular: "skill-icons:angular-dark",
  nestjs: "skill-icons:nestjs-dark",
  hash: "ph:hash",
  keyboard: "ph:keyboard",
};

export function getTagIcon(tag: Tag): string {
  switch (tag) {
    case "Programming":
      return icons.keyboard;
    default:
      return icons.hash;
  }
}
