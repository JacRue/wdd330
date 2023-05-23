//Team had issues on team2 assignment starting on step 6, see Ponder: Team Activity 2 paper for details /
import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productId = getParam("product");
productDetails(productId);