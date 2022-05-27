import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { app } from "./firebase-storage";

export const uploadImage = async (photo : File) => {
    const filename = new Date().getTime() + photo!.name
    const storage = getStorage(app)
    const storageRef = ref(storage, filename)
    await uploadBytesResumable(storageRef, photo!);
    return await getDownloadURL(storageRef);
}