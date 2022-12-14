const categories = [
    { _id: "Tf8pliJyfW4mRW9zP5Kzk", name: "Клавишные инструменты" },
    { _id: "b4-IGaV7zT8X66R3AXwQK", name: "Ударные инструменты" },
    { _id: "tmAWIMCK6XsJ7FMzBEcUw", name: "Струнные инструменты" },
    { _id: "pEqVOZoiySSl1a4cTOBwQ", name: "Духовые инструменты" }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(categories);
        }, 2000);
    });

export default {
    fetchAll
};
