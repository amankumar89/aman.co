import { Card } from "antd";

interface NavigationCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  gradient: string;
}

export default function NavigationCard({
  title,
  description,
  icon,
  onClick,
  gradient,
}: NavigationCardProps) {
  return (
    <Card
      className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
      onClick={onClick}
      data-testid={`card-${title.toLowerCase().replace(/\s+/g, "-")}`}
      hoverable
      style={{ height: "100%" }}
    >
      <div className="flex flex-col h-full">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white text-2xl ${gradient}`}
        >
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </Card>
  );
}
