import { Router } from "express";
import { readingListController } from "../controllers/reading_list.controller.js";

const router = Router();

router.get("/user/:user_id", readingListController.getListsByUser);
router.get("/:list_id/books", readingListController.getBooksInList);
router.post("/:list_id/books", readingListController.addBookToList);
router.delete("/:list_id/books", readingListController.removeBookFromList);
router.post("/create", readingListController.createList);
router.delete("/:list_id", readingListController.deleteList);

export default router;
