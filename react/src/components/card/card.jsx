import "../../variables.scss";
import "./card.scss";
import sams from "../img/stories/sumsung-galaxy.jpg";

export default function Card() {
  return (
    <div class="common__item">
      <article class="item">
        <div class="item__body">
          <h4 class="item__title">
            <a href="#" class="item__link-title">
              Samsung Galaxy F22 launched in India: Price, features, other
              details
            </a>
          </h4>
          <div class="item__text">
            Samsung Galaxy F22 has been launched in India. The new smartphone
            has been priced in the mid-range segment. The new smartphone is
            powered by a MediaTek chipset and features a high refresh rate
            AMOLED display.
          </div>
        </div>

        <a href="#" class="item__image-ibg">
          <img src={sams} alt="Sumsung Galaxy" />
        </a>
        <div class="item__footer">
          <div class="item__info info-item">
            <a href="" class="info-item__category">
              Sport Biz
            </a>
            <div class="info-item__time">42 mins ago</div>
          </div>
          <div class="item__actions actions-item">
            <a href="" class="actions-item__link _icon-share">
              Share
            </a>
            <a href="" class="actions-item__link _icon-read">
              Read Later
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
