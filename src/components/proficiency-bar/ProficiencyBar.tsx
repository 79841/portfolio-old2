type TProficiencyBarProps = {
  name: string;
  proficiency: number;
};
export const ProficiencyBar = ({ name, proficiency }: TProficiencyBarProps) => {
  return (
    <div>
      <div className="flex justify-end text-xs">proficiency</div>
      <div className="relative w-32">
        <div className="h-1 w-full border border-black bg-transparent"></div>
        <div
          className={"absolute left-0 top-0"}
          style={{ width: `${proficiency}%` }}
        >
          <div
            key={name}
            className={"h-1 animate-increase-right bg-primary"}
          ></div>
        </div>
      </div>
    </div>
  );
};
