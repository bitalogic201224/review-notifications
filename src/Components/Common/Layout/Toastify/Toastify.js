
const Toastify = ({ review, attributes }) => {

    const { img, title, desc, url, isImg, isTitle, isDesc } = review;
    const { elements } = attributes;

    return <div className='single'>

        {isImg && <div className="left">
            <div className="img">
                <img src={img?.url} alt={title} />
            </div>
        </div>}

        <div className="right">
            {isTitle && <a {...(url ? { href: url } : {})}
                {...(elements?.isTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="title">{title}</a>}
            {isDesc && <p className="desc">{desc}</p>}
        </div>
    </div>

}
export default Toastify;