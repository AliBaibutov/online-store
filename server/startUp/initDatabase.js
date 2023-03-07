const Company = require("../models/Company");
const Category = require("../models/Category");
const Subcategory = require("../models/Subcategory");
const companyMock = require("../mock/companies.json");
const categoryMock = require("../mock/categories.json");
const subcategoryMock = require("../mock/subcategories.json");

module.exports = async () => {
  const companies = await Company.find();
  if (companies.length !== companyMock.length) {
    await createInitialEntity(Company, companyMock);
  }
  const categories = await Category.find();
  if (categories.length !== categoryMock.length) {
    await createInitialEntity(Category, categoryMock);
  }
  const subcategories = await Subcategory.find();
  if (subcategories.length !== subcategoryMock.length) {
    await createInitialEntity(Subcategory, subcategoryMock);
  }
};

async function createInitialEntity(Model, data) {
  await Model.collection.drop();
  return Promise.all(
    data.map(async (item) => {
      try {
        delete item._id;
        const newItem = new Model(item);
        await newItem.save();
        return newItem;
      } catch (error) {
        return error;
      }
    })
  );
}
