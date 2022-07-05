import "./style.min.css";

function Footer() {
    return (
        // Start Footer Section
        <footer>
            {/* Start Top Footer Section */}
            <section className="top-footer-section">
                {/* Start Container */}
                <div className="container">
                    {/* Start Grid System */}
                    <div className="row">
                        {/* Start Column */}
                        <div className="col-md-4 pt-4 pb-4">
                            <h4 className="mb-3">
                                <i className="fas fa-info-circle m-3"></i>
                                <span>من نحن ؟</span>
                            </h4>
                            <p className="mb-2">
                                السلام عليكم ورحمة الله وبركاته ، أنا أنس عدنان ديرك ، طالب في كلية تكنولوجيا المعلومات باختصاص هندسة الشبكات .
                                تسعدني زيارتكم لي على موقعي الشخصي للإطلاع على تفاصيل المعلومات عني عن طريق الضغط على الرابط التالي :
                            </p>
                            <a
                                href="https://www.anas-derk.github.io/personal-website/"
                                target="_blank;"
                            >موقعي الشخصي</a>
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-4 pt-4 pb-4">
                            <h4 className="mb-3">
                                <i className="fas fa-link m-3"></i>
                                <span>روابط هامة</span>
                            </h4>
                            {/* Start Important Links List */}
                            <ul className="important-links-list">
                                <li className="mb-3">
                                    وظائف القطاع العام .
                                </li>
                                <li className="mb-3">
                                    وظائف القطاع الخاص .
                                </li>
                                <li className="mb-3">
                                    وظائف خارج البلد .
                                </li>
                                <li>
                                    وظائف متنوعة .
                                </li>
                            </ul>
                            {/* End Important Links List */}
                        </div>
                        {/* End Column */}
                        {/* Start Column */}
                        <div className="col-md-4 pt-4 pb-4">
                            <h4 className="mb-3">
                                <i className="fas fa-phone-square-alt m-3"></i>
                                <span>تواصل معي</span>
                            </h4>
                            {/* Start Contact Media List */}
                            <ul className="contact-media">
                                <li className="mb-3">
                                    صفحتي على فيسبوك .
                                </li>
                                <li className="mb-3">
                                    صفحتي على لينكد إن .
                                </li>
                                <li>
                                    بريدي الالكتروني: anas.derk2022@gmail.com .
                                </li>
                            </ul>
                            {/* End Contact Media List */}
                        </div>
                        {/* End Column */}
                    </div>
                    {/* End Grid System */}
                </div>
                {/* End Container */}
            </section>
            {/* End Top Footer Section */}
            {/* Start Bottom Footer Section */}
            <section className="bottom-footer-section text-center pb-3 pt-3 bg-success text-white">
                جميع الحقوق محفوظة لمطور الموقع : أنس عدنان ديرك &copy; 2022
            </section>
            {/* End Bottom Footer Section */}
        </footer>
    )
}

export default Footer;