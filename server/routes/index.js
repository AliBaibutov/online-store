const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/category", require("./category.routes"));
router.use("/subcategory", require("./subcategory.routes"));
router.use("/company", require("./company.routes"));
router.use("/user", require("./user.routes"));
router.use("/product", require("./product.routes"));
router.use("/bag", require("./bag.routes"));

module.exports = router;
