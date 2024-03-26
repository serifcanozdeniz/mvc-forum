import axios from "axios";

// veri ile alakalı her türlü yapıyı model'de tanımlarız model oluştururken genelde class ları tercih ederiz
export default class ListModel {
    // api'dan post verilerini alıp döndüren bir fonksiyon
    async getPosts() {
        try {
            const res = await axios.get("http://localhost:3000/posts");

            return res.data;
        } catch (err) {
            alert("üzgünüz bir hata oluştu")
            console.log(err);
        }

    }
}