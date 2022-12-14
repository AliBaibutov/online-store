const subcategories = [
    {
        _id: "oaeD6mOAOdx8q-jblEt7B",
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        name: "Гитары"
    },
    {
        _id: "4wtoZN9_He7NdnUeJNcup",
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        name: "Укулеле"
    },
    {
        _id: "43yXlUCYxF_v9vAyJFoO_",
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        name: "Скрипки"
    },
    {
        _id: "HlulCIifnIsEMudSN-9sd",
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        name: "Альты"
    },
    {
        _id: "CrLGR2Pkuj7lEESa1zB3B",
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        name: "Виолончели"
    },
    {
        _id: "ovK9iyAWWYAMxdcHf9fsW",
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        name: "Контрабасы"
    },
    {
        _id: "auBAfYvQCKnFeHRrxOeYJ",
        categoryId: "Tf8pliJyfW4mRW9zP5Kzk",
        name: "Синтезаторы"
    },
    {
        _id: "9A5c1xx-7rHmN3Ijb53il",
        categoryId: "Tf8pliJyfW4mRW9zP5Kzk",
        name: "Цифровые пианино"
    },
    {
        _id: "V4fge7qVnI98aAikn78Y8",
        categoryId: "Tf8pliJyfW4mRW9zP5Kzk",
        name: "Акустические клавишные инструменты"
    },
    {
        _id: "bW8zntiRgEiQ2J05ADhSf",
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        name: "Ударные установки"
    },
    {
        _id: "6eCUh5DRDAZ5w2KJqPvjN",
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        name: "Малые барабаны"
    },
    {
        _id: "kCd2omUytLM0Bzyud2ZEt",
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        name: "Том-томы"
    },
    {
        _id: "dI9__zXV2zhMLMGI9fivc",
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        name: "Бас-барабаны"
    },
    {
        _id: "O-GrGFDXu246g8GfFl3r8",
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        name: "Флейты"
    },
    {
        _id: "QULR2reTjQjzqCLwy6nVp",
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        name: "Саксфоны"
    },
    {
        _id: "IJIRe2bVE3nkPKRHPZDnb",
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        name: "Кларнеты"
    },
    {
        _id: "LW58uw0WVa_2dhvoox2Xb",
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        name: "Трубы"
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(subcategories);
        }, 2000);
    });

export default {
    fetchAll
};
