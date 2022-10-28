import "./contacts-section.scss"

export default function ThirdSection() {
  return (
    <section className="contacts-section">
      <div className="title">
        Давайте обсудим <br></br> ваш проект
      </div>
      <form action="/action_page.php">
        <input type="text" id="fname" name="fname" placeholder="Ваше имя" />
        <input type="text" id="phone" name="phone" placeholder="Телефон" />
        <textarea id="description" name="description" rows="10" cols="50" placeholder="Расскажите о своем продукте/услуге"/>
        <input type="submit" value="Отправить" />
      </form>
    </section>
  );
}
