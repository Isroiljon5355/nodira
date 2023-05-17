import { AspectRatio } from "@mantine/core";

type Props = {
  please: string;
  width: number;
  height: number;
};

const Maps = ({ please, width, height }: Props) => {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={please}
        width={width}
        height={height}
        loading="lazy"
      ></iframe>
    </AspectRatio>
  );
};
export default Maps;
