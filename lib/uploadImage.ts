import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "6470a2be6d9b83983bd5",
        ID.unique(),
        file
    );

    return fileUploaded;
};

export default uploadImage;