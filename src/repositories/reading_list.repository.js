import { ReadingList, ReadingListBook } from "../models/reading_list.model.js";

class ReadingListRepository {
    async getListsByUser(user_id) {
        return await ReadingList.findAll({ where: { user_id } });
    }

    async getBooksInList(reading_list_id) {
        return await ReadingListBook.findAll({ where: { reading_list_id } });
    }

    async addBookToList(reading_list_id, google_book_id) {
        return await ReadingListBook.create({ reading_list_id, google_book_id });
    }

    async removeBookFromList(reading_list_id, google_book_id) {
        return await ReadingListBook.destroy({ where: { reading_list_id, google_book_id } });
    }

    async createList(user_id, name) {
        return await ReadingList.create({ user_id, name });
    }

    async deleteList(reading_list_id) {
        await ReadingListBook.destroy({ where: { reading_list_id } });
        return await ReadingList.destroy({ where: { id: reading_list_id } });
    }
}

export const readingListRepository = new ReadingListRepository();
