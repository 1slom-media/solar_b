import { Router } from "express";
import form from "../controller/form";
import galery from "../controller/galery";
import category from "../controller/category";
import products from "../controller/products";
import images from "../controller/images";

const router=Router()

// form
router.get("/form",form.Get);
router.get("/form/:id",form.GetId);
router.post("/form",form.Post);
router.put("/form/:id",form.Put);
router.delete("/form/:id",form.Delete);

// galery
router.get("/galery",galery.Get);
router.get("/galery/:id",galery.GetId);
router.post("/galery",galery.Post);
router.put("/galery/:id",galery.Put);
router.delete("/galery/:id",galery.Delete);

// category
router.get("/category",category.Get);
router.get("/category/:id",category.GetId);
router.post("/category",category.Post);
router.put("/category/:id",category.Put);
router.delete("/category/:id",category.Delete);

// products
router.get("/products",products.Get);
router.get("/products/:id",products.GetId);
router.post("/products",products.Post);
router.put("/products/:id",products.Put);
router.delete("/products/:id",products.Delete);

// images
router.get("/images",images.Get);
router.get("/images/:id",images.GetId);
router.post("/images",images.Post);
router.put("/images/:id",images.Put);
router.delete("/images/:id",images.Delete);

export default router;