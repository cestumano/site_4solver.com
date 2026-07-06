import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  ClipboardCheck,
  Database,
  Leaf,
  Mail,
  PanelsTopLeft,
  Search,
  Send,
  Sparkles,
  Workflow
} from 'lucide-react';

const icons = {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  ClipboardCheck,
  Database,
  Leaf,
  Mail,
  PanelsTopLeft,
  Search,
  Send,
  Sparkles,
  Workflow
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

export default function Icon({ name, size = 20, strokeWidth = 2 }: IconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon aria-hidden="true" size={size} strokeWidth={strokeWidth} />;
}
