import { useNavigate } from "react-router-dom";
import CreateModel from "./CreateModel";
import CreateView from "./CreateView";
import { v4 } from "uuid";

const CreateController = () => {
  // model den bir örnek oluştur
  const model = new CreateModel();

  // navigate kurulumu
  const navigate = useNavigate();

  // form gönderilince çalışacak olan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    // 1) inputlardaki verileri alıp bir post nesnesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    // 2) post nesnesine id değeri ekle
    newPost.id = v4();

    // 3) api'a veriyi kaydet ve ana sayfaya yönlendir
    model.createPost(newPost).then(() => navigate("/"));
  };
  // controller'lar sadece view bileşenini döndürür
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
