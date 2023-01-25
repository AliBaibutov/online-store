const products = [
    {
        _id: "xE8HYAKJwmmzsbt_3t0dx",
        amount: 100,
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        subcategoryId: "oaeD6mOAOdx8q-jblEt7B",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/1dd/71t/qsp/928/gsw/4cw/soo/88c/c/1dd71tqsp928gsw4cwsoo88cc.jpg",
        name: "YAMAHA F310",
        description:
            "Прекрасный звук и отличное качество изготовления по демократичной цене - отличительные особенности гитары серии F. Эта гитара способна передавать самые тонкие оттенки настроения, ее можно назвать совершенным инструментом как для начинающих музыкантов, так и для опытных гитаристов",
        price: 19890
    },
    {
        _id: "dKSXHD-OMgSFoSi7N6ckw",
        amount: 50,
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        subcategoryId: "4wtoZN9_He7NdnUeJNcup",
        companyId: "J8IGYnI6Z7o97Fmz-y5pd",
        image: "https://www.muztorg.ru/files/7qr/1x1/1vz/vok/wgs/w8o/0ws/oc8/7qr1x11vzvokwgsw8o0wsoc80.jpg",
        name: "FENDER ZUMA",
        description:
            "Укулеле размера концерт, прекрасный, вдохновляющий инструмент, несущий в себе атмосферу калифорнийского пляжа, в честь которого была названа эта модель. Размер концерт – чуть больше, чем сопрано, он позволяет получить более широкий диапазон, богатый, насыщенный звук, который идеален для игры с группой.",
        price: 19530
    },
    {
        _id: "RmDDxsOXN7Qka5iC0442S",
        amount: 63,
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        subcategoryId: "43yXlUCYxF_v9vAyJFoO_",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/3ue/uum/7ba/xc0/w0s/88w/0o4/4so/w/3ueuum7baxc0w0s88w0o44sow.jpg",
        name: "YAMAHA V3SKA12",
        description:
            "Акустическая скрипка 1/2 со смычком в жёстком контурном кейсе.",
        price: 40000
    },
    {
        _id: "knz88wNgFae077Dynfu8I",
        amount: 20,
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        subcategoryId: "HlulCIifnIsEMudSN-9sd",
        companyId: "2Gz4JLdHXmdDz0NG_JYfh",
        image: "https://www.muztorg.ru/files/6i6/tvh/1me/ug4/88s/0g4/gc8/sc8/6i6tvh1meug488s0g4gc8sc80.jpeg",
        name: "HORA A100-15,5 RHAPSODY STUDENT",
        description:
            "Альт студенческий, верхняя дека которого сделана из ели, а задняя дека, обечайка и гриф - клен.",
        price: 19260
    },
    {
        _id: "8jBiTsjoal9ETgro9LMl0",
        amount: 22,
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        subcategoryId: "CrLGR2Pkuj7lEESa1zB3B",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/sized/f250x250/bb8/82n/a12/pwk/ssw/k0s/ws4/84o/c/bb882na12pwksswk0sws484oc.jpg",
        name: "HORA STUDENT ALL SOLID",
        description:
            "Виолончель студенческая Hora, верхняя дека которой сделана из ели, а задняя дека, обечайка и гриф - из клена.",
        price: 65260
    },
    {
        _id: "oU1KH2LPC3RlDg1m93f_l",
        amount: 10,
        categoryId: "tmAWIMCK6XsJ7FMzBEcUw",
        subcategoryId: "ovK9iyAWWYAMxdcHf9fsW",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/psw/0ed/avf/r40/www/k8k/gos/cwo/psw0edavfr40wwwk8kgoscwo.jpg",
        name: "Hora Student laminated top",
        description:
            "Контрабас студенческий Hora. Верхняя дека ламинат ели, задняя дека - ламинат клена, обечайки - клен, гриф - клен.",
        price: 99370
    },
    {
        _id: "mZLdbQmEG0NiJkZMU-MvR",
        amount: 25,
        categoryId: "Tf8pliJyfW4mRW9zP5Kzk",
        subcategoryId: "auBAfYvQCKnFeHRrxOeYJ",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/2s7/i59/lgg/qsk/84g/s8k/08o/8gc/s/2s7i59lggqsk84gs8k08o8gcs.jpg",
        name: "YAMAHA PSR-SX700",
        description:
            "Поднимите свои выступления на совершенно новый уровень с помощью PSR-SX. Модель PSR-SX700 пришла на замену популярнейшей серии PSR-S — это новое поколение цифровой рабочей станции с невиданным ранее качеством звука, дизайном и удобством использования. Эти инструменты будут вдохновлять вас, позволят улучшить музыкальные навыки и принесут вам огромное удовольствие.",
        price: 195490
    },
    {
        _id: "QfsQNYaljt2zk8WaZtdCi",
        amount: 15,
        categoryId: "Tf8pliJyfW4mRW9zP5Kzk",
        subcategoryId: "9A5c1xx-7rHmN3Ijb53il",
        companyId: "FC6ccDpwJhd2lNmRk6mkC",
        image: "https://www.muztorg.ru/files/1av/ot4/216/whw/kgw/8go/oww/kc0/4/1avot4216whwkgw8goowwkc04.jpg",
        name: "CASIO PRIVIA PX-870BNC2",
        description:
            "Великолепное цифровое пианино, флагманская модель знаменитой линейки Privia, которая позволяет получить ощущения при игре, как будто Вы сидите за настоящим акустическим роялем. Это цифровое пианино отличается чрезвычайно натуральным звучанием и обладает расширенным функционалом.",
        price: 132000
    },
    {
        _id: "Sw1GlHaV5fPaVwkOmc_J6",
        amount: 11,
        categoryId: "Tf8pliJyfW4mRW9zP5Kzk",
        subcategoryId: "V4fge7qVnI98aAikn78Y8",
        companyId: "Qzn8AqRM0W8x0eT6UqpyD",
        image: "https://www.muztorg.ru/files/184/e3h/v24/q68/80o/koo/okc/8gk/8/184e3hv24q6880okoookc8gk8.jpeg",
        name: "KAWAI GL-10 M/PEP",
        description:
            "Серия роялей GL наделена всеми качествами, которые позволили инструментам KAWAI заслужить уважение и признание пианистов и учителей музыки по всему миру. Рояли из серии GL создавались с одной единственной целью – добиться исключительного звучания и ощущений от игры, которые будут сохраняться на протяжении долгого времени.",
        price: 1725000
    },
    {
        _id: "t4sRPFtNujJu7apJWVcTG",
        amount: 17,
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        subcategoryId: "bW8zntiRgEiQ2J05ADhSf",
        companyId: "OS2Uaf44mBHPx4LXhaNPJ",
        image: "https://www.muztorg.ru/files/dg8/phg/lpb/fcc/gsc/48c/sc0/088/w/dg8phglpbfccgsc48csc0088w.jpg",
        name: "TAMA SG52KH4-BK STAGESTAR",
        description:
            "Ударная установка Stagestar – это отличное качество и цена, что делает ее идеальным выбором для начинающих музыкантов, которые хотят получить хороший инструмент за небольшие деньги.",
        price: 55000
    },
    {
        _id: "2eFN4lEKWhzImC0IuXr49",
        amount: 31,
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        subcategoryId: "6eCUh5DRDAZ5w2KJqPvjN",
        companyId: "OS2Uaf44mBHPx4LXhaNPJ",
        image: "https://www.muztorg.ru/files/3di/j51/wzl/44k/gwc/cwg/s40/gog/g/3dij51wzl44kgwccwgs40gogg.jpg",
        name: "TAMA BST1455BK METALWORKS STD SD",
        description:
            "Малый барабан диаметром 14 дюймов из линейки Metalworks от знаменитого японского производителя. Барабан BST1455BK обладает ярким, очень четким, при этом плотным звучанием в высоком строе и звонким, с ровным резонансом – в низком строе.",
        price: 13900
    },
    {
        _id: "uQjrmqE2nxcc_tSGYYxZ8",
        amount: 25,
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        subcategoryId: "kCd2omUytLM0Bzyud2ZEt",
        companyId: "LmGTSEU98rQIK-VpPLtVY",
        image: "https://www.muztorg.ru/files/81w/ikc/zbg/3s4/w00/ogk/k48/o8w/w/81wikczbg3s4w00ogkk48o8ww.jpg",
        name: "SONOR 17632233 AQ2 1208 TT AS 17333",
        description:
            "Звучи отчетливо. Будь индивидуален. Выгляди потрясающе. Обечайка изготовлена из семи слоев клена (4 слоя канадского и 3 слоя китайского клена).",
        price: 21560
    },
    {
        _id: "rlmGA3xSppehA7PM-jYLU",
        amount: 25,
        categoryId: "b4-IGaV7zT8X66R3AXwQK",
        subcategoryId: "dI9__zXV2zhMLMGI9fivc",
        companyId: "OS2Uaf44mBHPx4LXhaNPJ",
        image: "https://www.muztorg.ru/files/4e7/zd6/y75/go4/oss/s0w/sgw/ckk/k/4e7zd6y75go4osss0wsgwckkk.jpg",
        name: "TAMA MAB2218ZBN-DMB STARCLASSIC MAPLE",
        description:
            "Это напольный бас-барабан. Размер барабана составляет 18 х 22. Барабан имеет традиционное, насыщенное звучание, богатое низкочастотными обертонами. Материалом обечайки барабана является клен.",
        price: 130900
    },
    {
        _id: "GkPzn7iBGShQuWWmJeTEu",
        amount: 30,
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        subcategoryId: "O-GrGFDXu246g8GfFl3r8",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/dwq/j90/zln/604/gc0/8og/wck/oow/dwqj90zln604gc08ogwckoow0.jpg",
        name: "YAMAHA YFL-222",
        description:
            "Идеальная модель ученической флейты классического дизайна, которая прекрасно подойдет для начинающих. Флейты серии 200 от Yamaha отличаются высоким качеством, неприхотливостью, надёжностью и долговечностью, что делает их отличным выбором для обучающихся игре на флейте.",
        price: 70000
    },
    {
        _id: "XdecR3foWZA051eIyiDxM",
        amount: 21,
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        subcategoryId: "QULR2reTjQjzqCLwy6nVp",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/5da/yxk/5xf/e4o/48s/00o/ssg/skw/s/5dayxk5xfe4o48s00ossgskws.jpg",
        name: "YAMAHA YAS-26",
        description:
            "Альт-саксофон ученический с кейсом, Корпус: желтая медь Покрытие: золотой лак",
        price: 207990
    },
    {
        _id: "ygfRqr9NwslwaAwo6HiiC",
        amount: 21,
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        subcategoryId: "IJIRe2bVE3nkPKRHPZDnb",
        companyId: "EVNDxieEk3u3QSAHqJbbm",
        image: "https://www.muztorg.ru/files/bu3/ohs/3sy/f40/kko/oos/4kw/oo8/c/bu3ohs3syf40kkooos4kwoo8c.jpg",
        name: "YAMAHA YCL-255",
        description:
            "Это ученический кларнет. Строй кларнета си-бемоль (Bb). Материал корпуса - прочный ABS пластик, механика никелированная, 17 клапанов, 6 колец. Никелированные клапаны кларнета обеспечивают предельно чистое и сфокусированное звучание.",
        price: 93490
    },
    {
        _id: "ExNlAgfvmJsYMstDIKvdJ",
        amount: 13,
        categoryId: "pEqVOZoiySSl1a4cTOBwQ",
        subcategoryId: "LW58uw0WVa_2dhvoox2Xb",
        companyId: "9WXeIyBtZxYaGUbSRwf67",
        image: "https://www.muztorg.ru/files/2vp/drz/02h/usk/0sk/444/og8/k8g/2vpdrz02husk0sk444og8k8g0.jpg",
        name: "STOMVI ELITE 5235 250-L",
        description:
            "Профессиональная труба в строе до со стандартной подмундшучной трубкой. Богатый темный тембр, точная интонация и хорошая проекция.",
        price: 245600
    }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products);
        }, 2000);
    });

const getProductById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products.find((p) => p._id === id));
        }, 2000);
    });

export default {
    fetchAll,
    getProductById
};
