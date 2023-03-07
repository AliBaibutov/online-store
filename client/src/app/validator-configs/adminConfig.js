export const adminConfig = {
    name: {
        isRequired: {
            message: "Введите наименование товара"
        }
    },
    companyId: {
        isRequired: {
            message: "Необходимо выбрать производителя"
        }
    },
    categoryId: {
        isRequired: {
            message: "Необходимо выбрать категорию товара"
        }
    },
    subcategoryId: {
        isRequired: {
            message: "Необходимо выбрать подкатегорию товара"
        }
    },
    description: {
        isRequired: {
            message: "Описание товара не может быть пустым"
        }
    },
    amount: {
        isRequired: {
            message: "Количество не может быть пустым"
        },
        isNumber: {
            message: "Значение должно быть числом"
        }
    },
    price: {
        isRequired: {
            message: "Необходимо ввести цену товара"
        },
        isNotNullNumber: {
            message: "Введите число отличное от нуля"
        }
    }
};
