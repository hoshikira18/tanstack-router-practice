export const getArtWorks = async () => {
    const data = await fetch("https://api.artic.edu/api/v1/artworks", {
        method: "GET",
    })
        .then((res) => res.json())
        .then(({ data }) => data)
        .catch(() => {
            throw new Error("Failed fetching data!");
        });
    return data;
};
