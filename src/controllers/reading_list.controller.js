import { readingListRepository } from "../repositories/reading_list.repository.js";

class ReadingListController {
    async getListsByUser(req, res) {
        const { user_id } = req.params;
        const lists = await readingListRepository.getListsByUser(user_id);
        res.json(lists);
    }

    async getBooksInList(req, res) {
        const { list_id } = req.params;
        const books = await readingListRepository.getBooksInList(list_id);
        res.json(books);
    }

    async addBookToList(req, res) {
        const { list_id } = req.params;
        const { google_book_id } = req.body;
        const book = await readingListRepository.addBookToList(list_id, google_book_id);
        res.json(book);
    }

    async removeBookFromList(req, res) {
        const { list_id } = req.params;
        const { google_book_id } = req.body;
        await readingListRepository.removeBookFromList(list_id, google_book_id);
        res.json({ message: "Libro eliminado de la lista" });
    }

    async createList(req, res) {
        const { user_id, name } = req.body;
        const list = await readingListRepository.createList(user_id, name);
        res.json(list);
    }

    async deleteList(req, res) {
        const { list_id } = req.params;
        await readingListRepository.deleteList(list_id);
        res.json({ message: "Lista eliminada" });
    }
}

export const readingListController = new ReadingListController();
