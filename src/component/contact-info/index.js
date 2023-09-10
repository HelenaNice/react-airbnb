import "./index.css";

export default function ContactInfo({ name, image, response_rate, response_time, info, phone }) {
    return (
        <div>
            <div className="contact__block">
                <div>
                    <img className="contact__image" src={image} alt={name} />
                </div>
                <div className="contact__person">
                    <div>
                        <span className="contact__name">Господарь — {name}</span>
                    </div>
                    <div className="contact__sub-block">
                        <span className="contact__sub-value"> {phone}</span>
                        <span className="contact__sub-value"> {response_time} </span>
                        <span className="contact__sub-value"> {response_rate} % відсотків швидкості відгуку </span>
                    </div>
                </div>
            </div>
            <span>{info}</span>
        </div>
    );
}
