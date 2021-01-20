import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ data, type }) => {
    return (
        <section className={`${type}Grid`}>
            {data.map((img) => (
                <GifGridItem key={img.id} {...img}></GifGridItem>
            ))}
        </section>
    );
};
