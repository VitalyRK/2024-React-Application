interface ISelectProps {
  options: { value: string; name: string }[];
  defaultValue: string;
  value: string;
  onChange: (value: string) => void;
}

const MySelect = ({ options, defaultValue, value, onChange }: ISelectProps) => {
  return (
    <select
      value={value}
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
      }}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
