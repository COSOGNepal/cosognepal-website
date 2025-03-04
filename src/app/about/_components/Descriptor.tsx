import type { TdescriptorData } from "../type";

export default function Descriptor({
  title,
  descriptions = [],
  list = [],
}: TdescriptorData) {
  return (
    <div className="descriptor flex space-y-small flex-col">
      <div className="title font-bold text-para md:text-sub-title text-black-dark  ">
        {title}
      </div>
      <div className="description font-normal  space-y-small text-sub-para md:text-para text-black-mid">
        {descriptions.map((description, index) => {
          return <div key={index}> {description}</div>;
        })}
        <ul className="list_con mt-small list-disc">
          {list?.map((li, index) => (
            <li key={index + li}>
              {li.split(":").map((chunk, index) => {
                return index == 0 ? <b>{chunk} : </b> : chunk;
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
